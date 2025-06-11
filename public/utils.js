import * as THREE from 'three';
import { batch, createEffect, createMemo, createSignal, getOwner, onCleanup, untrack } from 'solid-js';
import { Easing } from '@tweenjs/tween.js';
import { effect } from './meteor-signals.js';
export async function svgTexture(plane, img, canvas, width, height) {
    const ctx = canvas.getContext('2d');
    if (!ctx)
        throw new Error('Canvas already has a different context.');
    await Promise.all([imgLoaded(img)]);
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    plane.three.material.map = tex;
    plane.three.material.needsUpdate = true;
    plane.needsUpdate();
    setTimeout(() => {
        ;
        plane.three.material.needsUpdate = true;
        plane.needsUpdate();
    }, 2000);
    // If we remove the canvas before the above creation of CanvasTexture, the texture will not render. hmmmm.
    canvas.remove();
    img.remove();
}
export function imgLoaded(img) {
    const p = new Promise(res => {
        if (img.complete)
            res();
        else
            img.addEventListener('load', () => res());
    });
    return p;
}
/**
 * Animates a signal from its current value to a target value.
 *
 * @param signal - The signal to animate.
 * @param targetValue - The target value to animate to.
 * @param options - An object containing optional parameters for the animation.
 * @param options.duration - The duration of the animation in milliseconds. Defaults to 1000.
 * @param options.curve - The easing curve to use for the animation. Defaults to Easing.Cubic.InOut.
 * @param options.start - A signal that controls when the animation starts. If provided, the animation will only start when this signal is true.
 */
export function animateSignalTo(signal, targetValue, { duration = 1000, curve = Easing.Cubic.InOut, start } = {}) {
    const [getValue, setValue] = signal;
    const [done, setDone] = createSignal(false);
    const startValue = untrack(getValue);
    createEffect(() => {
        if (untrack(getValue) === targetValue)
            return setDone(true);
        if (start && !start())
            return;
        let frame = 0;
        const startTime = performance.now();
        frame = requestAnimationFrame(function loop(time) {
            let val = getValue();
            const elapsed = time - startTime;
            const elapsedPortion = elapsed / duration;
            const amount = curve(elapsedPortion > 1 ? 1 : elapsedPortion);
            const valuePortion = amount * (targetValue - startValue);
            val = startValue + valuePortion;
            setValue(val);
            if (val === targetValue)
                return setDone(true);
            frame = requestAnimationFrame(loop);
        });
        onCleanup(() => {
            cancelAnimationFrame(frame);
            setDone(false);
        });
    });
    return done;
}
/** Return two signals for the width and height of an element. */
export function elementSize(el) {
    const [clientWidth, setClientWidth] = createSignal(0);
    const [clientHeight, setClientHeight] = createSignal(0);
    const element = createMemo(() => (typeof el === 'function' ? el() : el));
    createEffect(() => {
        const el = element();
        if (!el) {
            setClientWidth(0);
            setClientHeight(0);
            return;
        }
        const observer = new ResizeObserver(() => {
            batch(() => {
                setClientWidth(el.clientWidth);
                setClientHeight(el.clientHeight);
            });
        });
        observer.observe(el);
        onCleanup(() => observer.disconnect());
    });
    return { clientWidth, clientHeight };
}
/** Make an Element3D be the size of the given element. */
export function fitContent(el3d, el, width = true, height = true) {
    const { clientWidth, clientHeight } = elementSize(el);
    createEffect(() => {
        if (width)
            el3d.size.x = clientWidth();
        if (height)
            el3d.size.y = clientHeight();
    });
}
export function fadePageOnNav(links) {
    let clicked = false;
    for (const link of links) {
        link.addEventListener('click', event => {
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
                return;
            event.preventDefault();
            // Only do the face animation on first click (keep preventing default so that clicking during animation does nothing).
            if (clicked)
                return;
            clicked = true;
            document.body.classList.add('fadePageOut');
            document.body.addEventListener('transitionend', () => (location.href = link.href));
        });
    }
}
export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
/** Memoize the given keys of an object (the values should be functions). */
export function memoize(obj, ...keys) {
    // @ts-expect-error valid indexed access
    for (const key of keys)
        obj[key] = createMemo(obj[key]);
}
/** Clone a CSSStyleSheet object. */
export function cloneCSSStyleSheet(sheet) {
    const newSheet = new CSSStyleSheet();
    const styletext = Array.from(sheet.cssRules)
        .map(rule => rule.cssText)
        .join(' ');
    newSheet.replaceSync(styletext);
    return newSheet;
}
export function toSolidSignal(meteorGetter) {
    const [get, set] = createSignal(meteorGetter());
    // @ts-expect-error no handling of function values for now
    const comp = effect(() => set(meteorGetter()));
    if (getOwner())
        onCleanup(() => comp.stop());
    return get;
}
export function createMeteorEffect(fn) {
    const computation = effect(fn);
    if (getOwner())
        onCleanup(() => computation.stop());
}
/**
 * Iterate all descendant elements of the given root element. Does not traverse
 * into ShadowRoots.
 */
export function* elements(node) {
    if (node instanceof Element)
        yield node;
    for (const child of Array.from(node.children))
        yield* elements(child);
}
/**
 * Iterate all descendant elements of the given root element, including downward
 * in too ShadowRoots in 'shadow-including tree order' meaning an element, then
 * children of an element's shadowroot, then the element's children
 * (https://chromium.googlesource.com/chromium/src/+/HEAD/third_party/blink/renderer/core/dom/README.md).
 *
 * This is not the same as traversing the flat tree, i.e. the tree that is
 * rendered on screen after slotting nodes into destination shadow root slots
 * and ignoring any nodes that are not slotted (TODO: elementsFlat for that).
 */
export function* elementsDeep(node) {
    // first visit the starting element
    if (node instanceof Element)
        yield node;
    // then all of an element's shadowroot children
    if (node instanceof Element) {
        const root = roots.get(node);
        if (root)
            yield* elementsDeep(root);
    }
    // then all of the element's children
    for (const child of Array.from(node.children))
        yield* elementsDeep(child);
}
const roots = new WeakMap();
// TODO how do we handle Declarative Shadow Root that have been created but
// attachShadow has not been previously called for them.
const attachShadow = globalThis.Element.prototype.attachShadow;
globalThis.Element.prototype.attachShadow = function (init) {
    const root = attachShadow.call(this, init);
    roots.set(this, root);
    return root;
};
/**
 * Just like document.querySelector(), but it will traverse into all known ShadowRoots.
 *
 * This does a shadow-including tree traversal. TODO: a flat-tree search, querySelectorFlat.
 */
export function querySelectorDeep(root, selector) {
    for (const el of elementsDeep(root)) {
        const result = roots.get(el)?.querySelector(selector);
        if (result)
            return result;
    }
    return null;
}
/** Traverse element ancestors of an node. */
export function* ancestorElements(el) {
    let parent = el.parentElement;
    while (parent) {
        yield parent;
        parent = parent.parentElement ?? parent.getRootNode()?.host;
    }
}
/**
 * Returns true if `b` is a descendant of `a`, including inside ShadowRoots.
 *
 * Note, a value of true does not mean that `b` is participating the composed
 * (flat) tree, as `b` may not be slotted into a slot in a ShadowRoot.
 */
export function hasDescendant(a, b) {
    if (!a || !b)
        return false;
    for (const parent of ancestorElements(b))
        if (a === parent)
            return true;
    return false;
}
//# sourceMappingURL=utils.js.map