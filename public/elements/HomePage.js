var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { Meteor } from 'meteor/meteor';
import { Motor, Element, element, Element3D, html, css } from 'lume';
import { Tween, Easing } from '@tweenjs/tween.js';
import { createEffect, createMemo, onCleanup } from 'solid-js';
import { signal } from 'classy-solid';
import {} from './Cube.js';
import './MenuLinks.js';
import './HamburgerButton.js';
import { animateSignalTo, clamp, elementSize, memoize, svgTexture } from '../utils.js';
import '../imports/collections/Users.js';
const logoUrl = new URL('../images/logo.svg', import.meta.url).href;
const wordmarkUrl = new URL('../images/logo-wordmark.svg', import.meta.url).href;
const wordmarkVerticalUrl = new URL('../images/logo-wordmark-vertical.svg', import.meta.url).href;
const IS_FIREFOX = navigator.userAgent.includes('Firefox');
const styleVars = {
    menuWidth: '80%', // percent of viewport
    desktopMenuItemHeight: 50,
    headerHeight: 100,
    pageTopBottomPadding: 25,
    pageLeftRightPadding: 60,
};
const style = document.createElement('style');
style.textContent = css `
	:root {
		${Object.entries(styleVars)
    .map(([k, v]) => `--${k}: ${typeof v === 'number' ? v + 'px' : v};`)
    .join('\n')}
	}
`;
document.head.append(style);
for (const [key, val] of Object.entries(styleVars)) {
    // @ts-ignore
    styleVars[key] = typeof val === 'string' && val.endsWith('%') ? Number(val.replace('%', '')) / 100 : val;
}
let HomePage = (() => {
    let _classDecorators = [element];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Element;
    let _cube_decorators;
    let _cube_initializers = [];
    let _cube_extraInitializers = [];
    let _cube2_decorators;
    let _cube2_initializers = [];
    let _cube2_extraInitializers = [];
    let _mobileMenu_decorators;
    let _mobileMenu_initializers = [];
    let _mobileMenu_extraInitializers = [];
    let _scene_decorators;
    let _scene_initializers = [];
    let _scene_extraInitializers = [];
    let _rotator_decorators;
    let _rotator_initializers = [];
    let _rotator_extraInitializers = [];
    let _rotator2_decorators;
    let _rotator2_initializers = [];
    let _rotator2_extraInitializers = [];
    let _wordmarkContainer_decorators;
    let _wordmarkContainer_initializers = [];
    let _wordmarkContainer_extraInitializers = [];
    let _circle_decorators;
    let _circle_initializers = [];
    let _circle_extraInitializers = [];
    let _light_decorators;
    let _light_initializers = [];
    let _light_extraInitializers = [];
    let _light2_decorators;
    let _light2_initializers = [];
    let _light2_extraInitializers = [];
    let _wordMarkHorizontal_decorators;
    let _wordMarkHorizontal_initializers = [];
    let _wordMarkHorizontal_extraInitializers = [];
    let _horizontalImg_decorators;
    let _horizontalImg_initializers = [];
    let _horizontalImg_extraInitializers = [];
    let _horizontalCanvas_decorators;
    let _horizontalCanvas_initializers = [];
    let _horizontalCanvas_extraInitializers = [];
    let _wordMarkVertical_decorators;
    let _wordMarkVertical_initializers = [];
    let _wordMarkVertical_extraInitializers = [];
    let _verticalImg_decorators;
    let _verticalImg_initializers = [];
    let _verticalImg_extraInitializers = [];
    let _verticalCanvas_decorators;
    let _verticalCanvas_initializers = [];
    let _verticalCanvas_extraInitializers = [];
    let _innerScene_decorators;
    let _innerScene_initializers = [];
    let _innerScene_extraInitializers = [];
    let _loginButtonsOpen_decorators;
    let _loginButtonsOpen_initializers = [];
    let _loginButtonsOpen_extraInitializers = [];
    let _menuOpen_decorators;
    let _menuOpen_initializers = [];
    let _menuOpen_extraInitializers = [];
    let _viewWidth_decorators;
    let _viewWidth_initializers = [];
    let _viewWidth_extraInitializers = [];
    let _viewHeight_decorators;
    let _viewHeight_initializers = [];
    let _viewHeight_extraInitializers = [];
    let _recede_decorators;
    let _recede_initializers = [];
    let _recede_extraInitializers = [];
    var HomePage = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _cube_decorators = [signal];
            _cube2_decorators = [signal];
            _mobileMenu_decorators = [signal];
            _scene_decorators = [signal];
            _rotator_decorators = [signal];
            _rotator2_decorators = [signal];
            _wordmarkContainer_decorators = [signal];
            _circle_decorators = [signal];
            _light_decorators = [signal];
            _light2_decorators = [signal];
            _wordMarkHorizontal_decorators = [signal];
            _horizontalImg_decorators = [signal];
            _horizontalCanvas_decorators = [signal];
            _wordMarkVertical_decorators = [signal];
            _verticalImg_decorators = [signal];
            _verticalCanvas_decorators = [signal];
            _innerScene_decorators = [signal];
            _loginButtonsOpen_decorators = [signal];
            _menuOpen_decorators = [signal];
            _viewWidth_decorators = [signal];
            _viewHeight_decorators = [signal];
            _recede_decorators = [signal];
            __esDecorate(null, null, _cube_decorators, { kind: "field", name: "cube", static: false, private: false, access: { has: obj => "cube" in obj, get: obj => obj.cube, set: (obj, value) => { obj.cube = value; } }, metadata: _metadata }, _cube_initializers, _cube_extraInitializers);
            __esDecorate(null, null, _cube2_decorators, { kind: "field", name: "cube2", static: false, private: false, access: { has: obj => "cube2" in obj, get: obj => obj.cube2, set: (obj, value) => { obj.cube2 = value; } }, metadata: _metadata }, _cube2_initializers, _cube2_extraInitializers);
            __esDecorate(null, null, _mobileMenu_decorators, { kind: "field", name: "mobileMenu", static: false, private: false, access: { has: obj => "mobileMenu" in obj, get: obj => obj.mobileMenu, set: (obj, value) => { obj.mobileMenu = value; } }, metadata: _metadata }, _mobileMenu_initializers, _mobileMenu_extraInitializers);
            __esDecorate(null, null, _scene_decorators, { kind: "field", name: "scene", static: false, private: false, access: { has: obj => "scene" in obj, get: obj => obj.scene, set: (obj, value) => { obj.scene = value; } }, metadata: _metadata }, _scene_initializers, _scene_extraInitializers);
            __esDecorate(null, null, _rotator_decorators, { kind: "field", name: "rotator", static: false, private: false, access: { has: obj => "rotator" in obj, get: obj => obj.rotator, set: (obj, value) => { obj.rotator = value; } }, metadata: _metadata }, _rotator_initializers, _rotator_extraInitializers);
            __esDecorate(null, null, _rotator2_decorators, { kind: "field", name: "rotator2", static: false, private: false, access: { has: obj => "rotator2" in obj, get: obj => obj.rotator2, set: (obj, value) => { obj.rotator2 = value; } }, metadata: _metadata }, _rotator2_initializers, _rotator2_extraInitializers);
            __esDecorate(null, null, _wordmarkContainer_decorators, { kind: "field", name: "wordmarkContainer", static: false, private: false, access: { has: obj => "wordmarkContainer" in obj, get: obj => obj.wordmarkContainer, set: (obj, value) => { obj.wordmarkContainer = value; } }, metadata: _metadata }, _wordmarkContainer_initializers, _wordmarkContainer_extraInitializers);
            __esDecorate(null, null, _circle_decorators, { kind: "field", name: "circle", static: false, private: false, access: { has: obj => "circle" in obj, get: obj => obj.circle, set: (obj, value) => { obj.circle = value; } }, metadata: _metadata }, _circle_initializers, _circle_extraInitializers);
            __esDecorate(null, null, _light_decorators, { kind: "field", name: "light", static: false, private: false, access: { has: obj => "light" in obj, get: obj => obj.light, set: (obj, value) => { obj.light = value; } }, metadata: _metadata }, _light_initializers, _light_extraInitializers);
            __esDecorate(null, null, _light2_decorators, { kind: "field", name: "light2", static: false, private: false, access: { has: obj => "light2" in obj, get: obj => obj.light2, set: (obj, value) => { obj.light2 = value; } }, metadata: _metadata }, _light2_initializers, _light2_extraInitializers);
            __esDecorate(null, null, _wordMarkHorizontal_decorators, { kind: "field", name: "wordMarkHorizontal", static: false, private: false, access: { has: obj => "wordMarkHorizontal" in obj, get: obj => obj.wordMarkHorizontal, set: (obj, value) => { obj.wordMarkHorizontal = value; } }, metadata: _metadata }, _wordMarkHorizontal_initializers, _wordMarkHorizontal_extraInitializers);
            __esDecorate(null, null, _horizontalImg_decorators, { kind: "field", name: "horizontalImg", static: false, private: false, access: { has: obj => "horizontalImg" in obj, get: obj => obj.horizontalImg, set: (obj, value) => { obj.horizontalImg = value; } }, metadata: _metadata }, _horizontalImg_initializers, _horizontalImg_extraInitializers);
            __esDecorate(null, null, _horizontalCanvas_decorators, { kind: "field", name: "horizontalCanvas", static: false, private: false, access: { has: obj => "horizontalCanvas" in obj, get: obj => obj.horizontalCanvas, set: (obj, value) => { obj.horizontalCanvas = value; } }, metadata: _metadata }, _horizontalCanvas_initializers, _horizontalCanvas_extraInitializers);
            __esDecorate(null, null, _wordMarkVertical_decorators, { kind: "field", name: "wordMarkVertical", static: false, private: false, access: { has: obj => "wordMarkVertical" in obj, get: obj => obj.wordMarkVertical, set: (obj, value) => { obj.wordMarkVertical = value; } }, metadata: _metadata }, _wordMarkVertical_initializers, _wordMarkVertical_extraInitializers);
            __esDecorate(null, null, _verticalImg_decorators, { kind: "field", name: "verticalImg", static: false, private: false, access: { has: obj => "verticalImg" in obj, get: obj => obj.verticalImg, set: (obj, value) => { obj.verticalImg = value; } }, metadata: _metadata }, _verticalImg_initializers, _verticalImg_extraInitializers);
            __esDecorate(null, null, _verticalCanvas_decorators, { kind: "field", name: "verticalCanvas", static: false, private: false, access: { has: obj => "verticalCanvas" in obj, get: obj => obj.verticalCanvas, set: (obj, value) => { obj.verticalCanvas = value; } }, metadata: _metadata }, _verticalCanvas_initializers, _verticalCanvas_extraInitializers);
            __esDecorate(null, null, _innerScene_decorators, { kind: "field", name: "innerScene", static: false, private: false, access: { has: obj => "innerScene" in obj, get: obj => obj.innerScene, set: (obj, value) => { obj.innerScene = value; } }, metadata: _metadata }, _innerScene_initializers, _innerScene_extraInitializers);
            __esDecorate(null, null, _loginButtonsOpen_decorators, { kind: "field", name: "loginButtonsOpen", static: false, private: false, access: { has: obj => "loginButtonsOpen" in obj, get: obj => obj.loginButtonsOpen, set: (obj, value) => { obj.loginButtonsOpen = value; } }, metadata: _metadata }, _loginButtonsOpen_initializers, _loginButtonsOpen_extraInitializers);
            __esDecorate(null, null, _menuOpen_decorators, { kind: "field", name: "menuOpen", static: false, private: false, access: { has: obj => "menuOpen" in obj, get: obj => obj.menuOpen, set: (obj, value) => { obj.menuOpen = value; } }, metadata: _metadata }, _menuOpen_initializers, _menuOpen_extraInitializers);
            __esDecorate(null, null, _viewWidth_decorators, { kind: "field", name: "viewWidth", static: false, private: false, access: { has: obj => "viewWidth" in obj, get: obj => obj.viewWidth, set: (obj, value) => { obj.viewWidth = value; } }, metadata: _metadata }, _viewWidth_initializers, _viewWidth_extraInitializers);
            __esDecorate(null, null, _viewHeight_decorators, { kind: "field", name: "viewHeight", static: false, private: false, access: { has: obj => "viewHeight" in obj, get: obj => obj.viewHeight, set: (obj, value) => { obj.viewHeight = value; } }, metadata: _metadata }, _viewHeight_initializers, _viewHeight_extraInitializers);
            __esDecorate(null, null, _recede_decorators, { kind: "field", name: "recede", static: false, private: false, access: { has: obj => "recede" in obj, get: obj => obj.recede, set: (obj, value) => { obj.recede = value; } }, metadata: _metadata }, _recede_initializers, _recede_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            HomePage = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static elementName = 'home-page';
        // Used in HomePageAttributes to denote no attributes.
        // TODO allow to specify no attributes with the ElementAttributes type helper.
        _____;
        cube = __runInitializers(this, _cube_initializers, void 0);
        cube2 = (__runInitializers(this, _cube_extraInitializers), __runInitializers(this, _cube2_initializers, void 0));
        mobileMenu = (__runInitializers(this, _cube2_extraInitializers), __runInitializers(this, _mobileMenu_initializers, void 0));
        scene = (__runInitializers(this, _mobileMenu_extraInitializers), __runInitializers(this, _scene_initializers, void 0));
        rotator = (__runInitializers(this, _scene_extraInitializers), __runInitializers(this, _rotator_initializers, void 0));
        rotator2 = (__runInitializers(this, _rotator_extraInitializers), __runInitializers(this, _rotator2_initializers, void 0));
        wordmarkContainer = (__runInitializers(this, _rotator2_extraInitializers), __runInitializers(this, _wordmarkContainer_initializers, void 0));
        circle = (__runInitializers(this, _wordmarkContainer_extraInitializers), __runInitializers(this, _circle_initializers, void 0));
        light = (__runInitializers(this, _circle_extraInitializers), __runInitializers(this, _light_initializers, void 0));
        light2 = (__runInitializers(this, _light_extraInitializers), __runInitializers(this, _light2_initializers, void 0));
        wordMarkHorizontal = (__runInitializers(this, _light2_extraInitializers), __runInitializers(this, _wordMarkHorizontal_initializers, void 0));
        horizontalImg = (__runInitializers(this, _wordMarkHorizontal_extraInitializers), __runInitializers(this, _horizontalImg_initializers, void 0));
        horizontalCanvas = (__runInitializers(this, _horizontalImg_extraInitializers), __runInitializers(this, _horizontalCanvas_initializers, void 0));
        wordMarkVertical = (__runInitializers(this, _horizontalCanvas_extraInitializers), __runInitializers(this, _wordMarkVertical_initializers, void 0));
        verticalImg = (__runInitializers(this, _wordMarkVertical_extraInitializers), __runInitializers(this, _verticalImg_initializers, void 0));
        verticalCanvas = (__runInitializers(this, _verticalImg_extraInitializers), __runInitializers(this, _verticalCanvas_initializers, void 0));
        innerScene = (__runInitializers(this, _verticalCanvas_extraInitializers), __runInitializers(this, _innerScene_initializers, void 0));
        loginButtonsOpen = (__runInitializers(this, _innerScene_extraInitializers), __runInitializers(this, _loginButtonsOpen_initializers, false));
        openTween = (__runInitializers(this, _loginButtonsOpen_extraInitializers), null);
        closeTween = null;
        menuOpen = __runInitializers(this, _menuOpen_initializers, false);
        viewWidth = (__runInitializers(this, _menuOpen_extraInitializers), __runInitializers(this, _viewWidth_initializers, 0));
        viewHeight = (__runInitializers(this, _viewWidth_extraInitializers), __runInitializers(this, _viewHeight_initializers, 0));
        isMobile = (__runInitializers(this, _viewHeight_extraInitializers), () => this.viewWidth <= 1200);
        cubeSize = () => (this.viewIsTall() ? 0.65 * this.viewWidth : 0.5 * this.viewHeight);
        viewIsTall = () => this.viewHeight >= this.viewWidth;
        // wordmarkAspectRatio = () => (this.viewIsTall() ? 118 / 686 : 960 / 146)
        wordmarkAspectRatio = () => (false ? 118 / 686 : 960 / 146);
        rotatorAlignPoint = () => (this.viewIsTall() ? [0.5, 0.38] : [0.5, 0.45]);
        hasShadow = false;
        makeOpenTween() {
            this.openTween = new Tween({ menuPosition: this.mobileMenu?.alignPoint.x || 1 })
                .onComplete(() => this.openTween?.stop())
                .onUpdate(obj => this.mobileMenu && (this.mobileMenu.alignPoint.x = obj.menuPosition))
                .easing(Easing.Exponential.Out);
        }
        makeCloseTween() {
            this.closeTween = new Tween({
                menuPosition: this.mobileMenu?.alignPoint.x || 1 - styleVars.menuWidth,
            })
                .onComplete(() => this.closeTween?.stop())
                .onUpdate(obj => this.mobileMenu && (this.mobileMenu.alignPoint.x = obj.menuPosition))
                .easing(Easing.Exponential.Out);
        }
        openMenu() {
            if (this.menuOpen)
                return;
            this.menuOpen = true;
            if (this.closeTween?.isPlaying())
                this.closeTween.stop();
            this.makeOpenTween();
            // TODO Tween.start() time arg should be optional.
            // XXX this.openTween exists here! Optional chaining operator is needed to satisfy type system
            this.openTween?.to({ menuPosition: 1 - styleVars.menuWidth }, 800).start(performance.now());
            this.possiblyStartTweenLoop();
        }
        closeMenu() {
            if (!this.menuOpen)
                return;
            this.menuOpen = false;
            if (this.openTween?.isPlaying())
                this.openTween.stop();
            this.makeCloseTween();
            // XXX this.closeTween exists here! Optional chaining operator is needed to satisfy type system
            this.closeTween?.to({ menuPosition: 1 }, 800).start(performance.now());
            this.possiblyStartTweenLoop();
        }
        toggleMenu = () => (this.menuOpen ? this.closeMenu() : this.openMenu());
        tweenTask = false;
        possiblyStartTweenLoop() {
            if (this.tweenTask)
                return;
            this.tweenTask = Motor.addRenderTask(t => {
                if (this.openTween?.isPlaying())
                    this.openTween.update(t);
                else if (this.closeTween?.isPlaying())
                    this.closeTween.update(t);
                else
                    return (this.tweenTask = false);
                return;
            });
        }
        rotateCube() {
            const { cube } = this;
            if (!cube)
                throw new Error('Missing!');
            const task = Motor.addRenderTask((_t, dt) => {
                cube.rotation.y += dt / 100;
            });
            onCleanup(() => Motor.removeRenderTask(task));
        }
        scenePointerInteraction() {
            createEffect(() => {
                const { scene, rotator, cube } = this;
                if (!scene || !rotator || !cube)
                    throw new Error('Missing!');
                const rotationRange = this.isMobile() ? 15 : 10;
                const targetRotation = { x: 0, y: 0 };
                const setTargetRotation = (event) => {
                    const size = scene.calculatedSize;
                    // TODO use offsetX/Y so we get events relative to `currentTarget`,
                    // and make an abstraction so that the offsets can be calculated
                    // from event.target instead of event.currentTarget, otherwise the
                    // behavior is strange when trying to use mouse values relative to
                    // an element instead of relative to the viewport. ...
                    // targetRotation.y = (event.offsetX / size.x) * (rotationRange * 2) - rotationRange
                    // targetRotation.x = -((event.offsetY / size.y) * (rotationRange * 2) - rotationRange)
                    // ... For now just use clientX/Y. ...
                    targetRotation.y = (event.clientX / size.x) * (rotationRange * 2) - rotationRange;
                    targetRotation.x = -((event.clientY / size.y) * (rotationRange * 2) - rotationRange);
                    // ... See https://discourse.wicg.io/t/4236 for discussion
                    const circle = this.circle;
                    if (!circle)
                        return;
                    circle.position.x = event.clientX;
                    circle.position.y = event.clientY;
                };
                const controller = new AbortController();
                const signal = controller.signal;
                // Rotate the image a little bit based on pointer position.
                scene.addEventListener('pointermove', setTargetRotation, { signal });
                scene.addEventListener('pointerdown', setTargetRotation, { signal });
                // Rotate the container towards the targetRotation over time to make it smooth.
                const task2 = Motor.addRenderTask(() => {
                    rotator.rotation.x += (targetRotation.x - rotator.rotation.x) * 0.02;
                    rotator.rotation.y += (targetRotation.y - rotator.rotation.y) * 0.02;
                    rotator.position.x = rotator.rotation.y * (this.isMobile() ? -1 : -3);
                    rotator.position.y = rotator.rotation.x * (this.isMobile() ? 0.7 : 2);
                });
                scene.addEventListener('pointermove', event => {
                    const circle = this.circle;
                    if (!circle)
                        return;
                    circle.position.x = event.clientX;
                    circle.position.y = event.clientY;
                }, { signal });
                onCleanup(() => {
                    Motor.removeRenderTask(task2);
                    controller.abort();
                });
            });
        }
        lightPositionHack() {
            // FIXME Small hack to make the light update its position. For some
            // reason the initial position/align-point is not working.
            this.light.position = (x, y, z) => [x, y, z];
            this.light2.position = (x, y, z) => [x, y, z];
            onCleanup(() => {
                // re-assignment stops animation functions.
                this.light.position = this.light.position;
                this.light2.position = this.light2.position;
            });
        }
        onSubmitStudioSignup = (event) => {
            event.preventDefault();
            const input = event.target.querySelector('input');
            if (!input)
                throw new Error('Missing input');
            if (!input.value)
                return;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(input.value))
                return;
            if (input.value.includes('..'))
                return;
            Meteor.call('studioSignup', input.value);
            input.value = '';
            // TODO move this into an effect in connectedCallback, trigger it from here, so it will be robust (cancelable/repeatable).
            // Make a little explosiong animation out of spheres.
            const sphereParent = this.scene.querySelector('#explosionSpheres');
            const spheres = Array.from(sphereParent.children);
            const button = event.target.querySelector('button');
            if (!button)
                throw new Error('Missing button');
            const rect = button.getBoundingClientRect();
            const buttonPosition = {
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2,
            };
            const maxDistance = 250;
            const duration = 1500;
            const curve = Easing.Exponential.Out;
            const colors = ['yellow', 'deeppink', 'cyan', 'blue', 'purple', 'pink'];
            // explosion happens at the button position
            sphereParent.position = [buttonPosition.x, buttonPosition.y, 10];
            let i = 0;
            for (const sphere of spheres) {
                const color = colors[i++ % colors.length];
                sphere.opacity = 1;
                sphere.visible = true;
                sphere.position.x = sphere.position.y = 0;
                sphere.size.x = 70;
                sphere.color = color;
                // animate the sphere to a random 3D position `distance` units away
                const randomAnglePhi = Math.random() * Math.PI * 2;
                const randomAngleTheta = Math.random() * Math.PI * 2;
                const target = {
                    x: Math.sin(randomAngleTheta) * Math.cos(randomAnglePhi) * maxDistance,
                    y: Math.sin(randomAngleTheta) * Math.sin(randomAnglePhi) * maxDistance,
                    z: Math.cos(randomAngleTheta) * maxDistance,
                };
                const xDone = animateSignalTo([() => sphere.position.x, (n) => (sphere.position.x = n)], target.x, { duration, curve });
                const yDone = animateSignalTo([() => sphere.position.y, (n) => (sphere.position.y = n)], target.y, { duration, curve });
                const zDone = animateSignalTo([() => sphere.position.z, (n) => (sphere.position.z = n)], target.z, { duration, curve });
                // animate size to 0
                const sizeDone = animateSignalTo([() => sphere.size.x, (n) => (sphere.size.x = n)], 0, {
                    duration,
                    curve,
                });
                // animate opacity to 0
                const opacityDone = animateSignalTo([() => sphere.opacity, (n) => (sphere.opacity = n)], 0, { duration, curve });
                const allDone = createMemo(() => xDone() && yDone() && zDone() && opacityDone() && sizeDone());
                createEffect(() => {
                    if (!allDone())
                        return;
                    sphere.opacity = 0;
                    sphere.visible = false;
                });
            }
        };
        #memoized = false;
        // TODO @memo decorator in classy-solid to replace this #memoize() method.
        #memoize() {
            if (this.#memoized)
                return;
            this.#memoized = true;
            memoize(this, 'isMobile', 'cubeSize', 'viewIsTall', 'wordmarkAspectRatio', 'rotatorAlignPoint');
        }
        connectedCallback() {
            this.#memoize();
            super.connectedCallback();
            createEffect(() => {
                this.style.setProperty('--isMobile', '' + (this.isMobile() ? 1 : 0));
                this.style.setProperty('--notIsMobile', '' + (this.isMobile() ? 0 : 1));
            });
            const { scene, rotator, cube } = this;
            if (!scene || !rotator || !cube)
                throw new Error('Missing!');
            this.createEffect(() => {
                this.rotateCube();
                this.scenePointerInteraction();
                this.lightPositionHack();
                createEffect(() => {
                    this.viewWidth = scene.calculatedSize.x;
                    this.viewHeight = scene.calculatedSize.y;
                });
                createEffect(() => (this.rotator2.rotation = this.rotator.rotation));
                createEffect(() => (this.rotator2.position = this.rotator.position));
                createEffect(() => (this.cube2.rotation = this.cube.rotation));
            });
            svgTexture(this.wordMarkHorizontal, this.horizontalImg, this.horizontalCanvas, 960, 146);
            svgTexture(this.wordMarkVertical, this.verticalImg, this.verticalCanvas, 118, 686);
            const innerSceneZPosition = [
                () => this.innerScene.position.z,
                (n) => (this.innerScene.position.z = n),
            ];
            const innerSceneXRotation = [
                () => this.innerScene.rotation.x,
                (n) => (this.innerScene.rotation.x = n),
            ];
            this.createEffect(() => {
                const mixedPlaneMat = this.innerScene?.behaviors.get('mixedplane-material');
                if (!mixedPlaneMat)
                    return;
                const innerSceneMaterialOpacity = [
                    () => mixedPlaneMat.materialOpacity,
                    (n) => (mixedPlaneMat.materialOpacity = n),
                ];
                function recede() {
                    animateSignalTo(innerSceneZPosition, -50, { duration: 1000 });
                    animateSignalTo(innerSceneXRotation, -10, { duration: 1000 });
                    animateSignalTo(innerSceneMaterialOpacity, 0.5, { duration: 1000 });
                }
                function unrecede() {
                    animateSignalTo(innerSceneZPosition, 0, { duration: 1000 });
                    animateSignalTo(innerSceneXRotation, 0, { duration: 1000 });
                    animateSignalTo(innerSceneMaterialOpacity, 0, { duration: 1000 });
                }
                createEffect(() => {
                    if (this.recede)
                        recede();
                    else
                        unrecede();
                });
            });
            // set explosionSpheres to initially invisible after they've had a
            // chance to render (so that they are uploaded to GPU and don't cause a
            // pause when we show them later)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const spheres = Array.from(this.scene.querySelectorAll('.explosionSpheres'));
                    for (const sphere of spheres) {
                        sphere.opacity = 0;
                        sphere.visible = false;
                    }
                });
            });
            let firstRun = true;
            this.createEffect(() => {
                this.loginButtonsOpen;
                if (firstRun)
                    return (firstRun = false);
                const loginOpenButton = this.querySelector('#login-sign-in-link');
                const loginOpenButton2 = this.querySelector('#login-name-link');
                const loginCloseButton = this.querySelector('.login-close-text');
                if (this.loginButtonsOpen)
                    loginOpenButton?.click() ?? loginOpenButton2.click();
                else
                    loginCloseButton.click();
            });
            // CONTINUE observer existence of login dropdowns to determine
            // open/closed state
            // const mo = new MutationObserver(records => { })
            // mo.observe
            // elementSize()
        }
        recede = __runInitializers(this, _recede_initializers, false);
        SvgAirplane = (__runInitializers(this, _recede_extraInitializers), () => html `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
			<path d="M 2 4 L 3 5 L 5 3 L 3 1 L 2 2 L 3 3 L 2 4" />
		</svg>
	`);
        SvgAirplaneCSS = css /*css*/ `
		svg {
			aspect-ratio: 1;

			path {
				fill: white;
				/* stroke: white; */
				/* stroke-width: 2; */
				/* stroke-linejoin: round; */
				/* stroke-linecap: round; */
			}
		}
	`;
        UI = () => html `
		<lume-element3d
			id="headerBar"
			comment="setting a string override Lume style (including transforms, etc)."
			xstyle="${() => 'pointer-events: ' + (this.isMobile() ? 'none' : 'auto')}"
			style="${() => ({ pointerEvents: this.isMobile() ? 'none' : 'auto' })}"
			size-mode="proportional literal"
			size="${[1, styleVars.headerHeight, 0]}"
		>
			<div id="headerBarInner">
				<img
					crossorigin
					src=${logoUrl}
					id="logo"
					alt="The Lume logo, positioned statically at the top left of the site on top of a 3D scene."
				/>

				<div style=${() => ({ display: this.isMobile() ? 'none' : 'contents' })}>
					<div class="headerSpace"></div>
					<menu-links
						onsigninclick=${() => (this.loginButtonsOpen = !this.loginButtonsOpen)}
						disabled=${() => this.isMobile()}
					></menu-links>
				</div>
			</div>
		</lume-element3d>

		<lume-element3d
			ref=${(e) => {
            const content = e.children[0];
            const { clientWidth, clientHeight } = elementSize(content);
            createEffect(() => {
                e.size.x = clamp(clientWidth(), 0, this.scene.calculatedSize.x);
                e.size.y = clientHeight();
                createEffect(() => {
                    if (e.size.x === this.scene.calculatedSize.x)
                        content.style.whiteSpace = 'normal';
                    else
                        content.style.whiteSpace = 'nowrap';
                });
            });
        }}
			mount-point="0.5 1"
			align-point=${() => [0.5, this.isMobile() ? 1 : 1]}
			size="200 0"
		>
			<div id="info">
				<span id="tagline">
					<span>Graphics made easy,</span>
					&#x20;
					<span>for any website.</span>
				</span>

				<span id="signupCall" style=${() => ``}>
					<span class="small">
						<span>Get access to Lume's AI-</span>
						&#x20;
						<span>powered visual programming</span>
						&#x20;
						<span>and design studio.</span>
					</span>

					<span class="medium" aria-hidden="true">
						<span>Get access to Lume's AI-powered visual</span>
						&#x20;
						<span>programming and design studio.</span>
					</span>
				</span>
				<form id="signupForm" onsubmit=${this.onSubmitStudioSignup}>
					<input
						type="email"
						pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
						placeholder="Enter your email"
						id="signupInput"
					/>

					<button id="signupButton">${this.SvgAirplane()}</button>
				</form>
			</div>
		</lume-element3d>

		<lume-element3d id="mobileNav" size-mode="proportional proportional" size="1 1 0" visible=${() => this.isMobile()}>
			<lume-element3d
				ref="${(e) => (this.mobileMenu = e)}"
				id="mobileMenu"
				size-mode="proportional proportional"
				size="${[styleVars.menuWidth, 1]}"
				align-point="1 0"
				comment="start closed position"
				opacity="1"
			>
				<menu-links is-mobile="${true}" disabled=${() => !this.isMobile()}></menu-links>
			</lume-element3d>

			<lume-element3d
				class="hamburgerButtonWrapper"
				size="140 100"
				align-point="1 0"
				position="0 0 1"
				mount-point="1 0"
				onclick="${() => this.toggleMenu()}"
			>
				<hamburger-button
					size="40 19"
					align-point="0.5 0.5"
					mount-point="0.5 0.5"
					position="0 0"
					line-thickness="2.5"
					line-length="0.7"
					activated="${() => this.menuOpen}"
				></hamburger-button>
			</lume-element3d>
		</lume-element3d>
	`;
        UICSS = css /*css*/ `
		#headerBar {
			pointer-events: none;
		}

		#mobileNav {
			pointer-events: none;
		}

		#mobileMenu {
			/* The backdrop-filter is not working as desired depending on how the DOM is set up in Chrome, and not at all in Firefox, https://issues.chromium.org/issues/323735424 */
			background: ${IS_FIREFOX ? `rgb(0 26 166 / 0.87)` : `rgb(0 61 225 / 43%)`};
			backdrop-filter: blur(16px);
			pointer-events: auto;
		}

		.hamburgerButtonWrapper {
			pointer-events: auto;
			cursor: pointer;
		}

		#headerBarInner {
			display: flex;
			height: 100%;
			align-items: center;
			padding-left: var(--pageLeftRightPadding);
			padding-right: var(--pageLeftRightPadding);
		}

		#logo {
			width: var(--desktopMenuItemHeight);
			height: var(--desktopMenuItemHeight);
			object-fit: fill;

			/* push everything else to the right side of the header */
			/*margin-right: auto;*/
		}

		.headerSpace {
			flex-grow: 1;
		}

		#info {
			position: absolute;
			white-space: nowrap;
			display: flex;
			flex-direction: column;
			gap: 10px;
			align-items: center;
			justify-content: center;
			font-size: calc(1.5rem * var(--isMobile) + 2rem * var(--notIsMobile));
			text-align: center;
			padding: var(--pageTopBottomPadding);
		}

		#tagline {
			text-transform: uppercase;

			span {
				display: inline-block;
				white-space: nowrap;
				width: auto;
			}
		}

		#signupCall {
			font-size: 0.8em;
			padding-bottom: 10px;

			& > span {
				display: none;
			}

			span > span {
				display: inline-block;
				white-space: nowrap;
				width: auto;
			}

			/* @media (min-width: 744px) {} */
			@media (max-width: 434px) {
				.small {
					display: inline;
				}
			}

			@media (min-width: 435px) {
				.medium {
					display: inline;
				}
			}
		}

		#signupForm {
			display: flex;
			background: white;
			/* border-radius: 3px; */
			align-items: center;
			height: 1.5em;
			width: 12em;
			max-width: 100%;
			border: 2px solid rgb(255 255 255 / 0.5);
			background: rgb(255 255 255 / 0.1);

			&:hover {
				border-color: white;
			}

			&:focus-within {
				background: rgb(255 255 255 / 0.2);
				border-color: white;
			}
		}

		#signupInput {
			border: none;
			background: none;
			height: 100%;
			flex-grow: 1;
			min-width: 0; /* allow the input to shrink */
			padding-left: 0.5em;
			outline: none;
			font-size: 0.65em;
			font-style: italic;

			color: white;

			&::placeholder {
				color: rgb(255 255 255 / 0.5);
			}
		}

		#signupButton {
			border: none;
			height: 100%;
			aspect-ratio: 1;
			background-size: 70%;
			cursor: pointer;
			background-color: transparent;
			background-repeat: no-repeat;
			background-position: center;
			outline: none;

			svg {
				height: 100%;
				display: block;
			}

			&:hover svg path {
				fill: deeppink;
			}

			${this.SvgAirplaneCSS}
		}
	`;
        CubeScene = () => html `
		<lume-scene
			id="cubeScene"
			fog-mode="linear"
			fog-far="1250"
			fog-near="800"
			fog-color="#0729d7"
			camera-near="100"
			camera-far="2000"
			perspective="800"
			webgl="true"
			enable-css="true"
		>
			<lume-ambient-light color="white" intensity="2"></lume-ambient-light>
			<lume-point-light
				ref=${(e) => (this.light2 = e)}
				color="white"
				intensity="1500"
				shadow-bias="-0.1"
				position="0 0 300"
				align-point="0.5 0.5"
			>
				<lume-sphere
					visible="false"
					size="10 10 10"
					has="basic-material"
					mount-point="0.5 0.5 0.5"
					cast-shadow="false"
					receive-shadow="false"
				></lume-sphere>
			</lume-point-light>

			<!-- Cube ################################ -->
			<lume-element3d size-mode="proportional proportional" size="1 1 0">
				<lume-element3d
					ref="${(e) => (this.rotator2 = e)}"
					class="rotator"
					role="img"
					xaria-label="A 3D cube with each face showing different pink/yellow/blue/cyan gradient colors, floating behind the 'LUME' wordmark."
					aria-labelledby="cubeLabel"
					align-point=${this.rotatorAlignPoint}
					mount-point="0.5 0.5"
					size-mode="proportional proportional"
					size="1 1"
				>
					<span id="cubeLabel" class="label">
						A 3D cube with each face showing different pink/yellow/blue/cyan gradient colors, floating behind the 'LUME'
						wordmark.
					</span>

					<${this.Cube} ref=${(e) => (this.cube2 = e)} />
				</lume-element3d>
			</lume-element3d>
		</lume-scene>
	`;
        Cube = (props) => html `
		<landing-cube
			ref="${props.ref}"
			size="${() => [this.cubeSize()]}"
			visible=${() => props.visible ?? true}
			align-point="0.5 0.5 0.5"
			mount-point="0.5 0.5 0.5"
			position="${() => [0, 0, -this.cubeSize()]}"
			rotation="45 45 45"
		></landing-cube>
	`;
        WordmarkScene = () => html `
		<lume-scene
			id="wordmarkScene"
			fog-mode="linear"
			fog-far="825"
			fog-near="760"
			fog-color="deeppink"
			camera-near="100"
			camera-far="2000"
			perspective="800"
			webgl="true"
			enable-css="true"
			swap-layers
		>
			<lume-ambient-light color="white" intensity="2"></lume-ambient-light>

			<lume-point-light
				ref=${(e) => (this.light = e)}
				color="pink"
				intensity="10000"
				shadow-bias="-0.1"
				position="0 0 300"
				align-point="0.5 0.5"
			>
				<lume-sphere
					visible="false"
					size="10 10 10"
					has="basic-material"
					mount-point="0.5 0.5 0.5"
					cast-shadow="false"
					receive-shadow="false"
				></lume-sphere>
			</lume-point-light>

			<lume-element3d size-mode="proportional proportional" size="1 1 0">
				<!-- LUME wordmark rotator ------------------ -->
				<lume-element3d
					ref="${(e) => (this.rotator = e)}"
					class="rotator"
					align-point=${this.rotatorAlignPoint}
					mount-point="0.5 0.5"
					size-mode="proportional proportional"
					size="1 1"
				>
					<lume-element3d
						ref="${(e) => (this.wordmarkContainer = e)}"
						size-mode="proportional proportional"
						xsize="${() => (this.viewIsTall() ? '0 0.5 0' : '0.5 0 0')}"
						size="0.7 0 0"
						mount-point="0.5 0.5"
						align-point="0.5 0.5"
					>
						<!-- horizontal "LUME" --------------------- -->

						<!-- <lume-element3d -->
						<lume-plane
							ref=${(e) => (this.wordMarkHorizontal = e)}
							class="wordmark"
							role="img"
							xaria-label="The 'LUME' wordmark with letters flowing horizontally, positioned to be floating in front of a 3D cube in the background, visible to people who have a screen that is wider than tall (f.e. desktop or tablets in landscape orientation)."
							aria-labelledby="wordmarkHorizontalLabel"
							xvisible="${() => !this.viewIsTall()}"
							visible="${() => true}"
							TODO="relative size based on parent size, but not necessarily the same axis (f.e. map child Y size to proportion of parent X size)"
							size="${() => [
            this.wordmarkContainer?.calculatedSize?.x ?? 1,
            (this.wordmarkContainer?.calculatedSize?.x ?? 1) / this.wordmarkAspectRatio(),
        ]}"
							mount-point="0 0.5"
							opacity="0.9999"
							todo="update to lume texture handling is needed for SVGs to work properly cross-platform (https://discourse.threejs.org/t/any-ideas-why-svg-texture-does-not-show-in-firefox/33361)."
							Xtexture=${wordmarkUrl}
							color="cyan"
						>
							<span id="wordmarkHorizontalLabel" class="label">
								The 'LUME' wordmark with letters flowing horizontally, positioned to be floating in front of a 3D cube
								in the background, visible to people who have a screen that is wider than tall (f.e. desktop or tablets
								in landscape orientation).
							</span>

							<div style="width: 100%; height: 100%">
								<canvas ref=${(e) => (this.horizontalCanvas = e)}></canvas>
								<img
									ref=${(e) => (this.horizontalImg = e)}
									crossorigin
									src=${wordmarkUrl}
									width="960"
									height="146"
									style="width: 100%; height: 100%;"
								/>
							</div>
						</lume-plane>
						<!-- </lume-element3d> -->

						<!-- vertical "LUME" --------------------- -->

						<!-- <lume-element3d -->
						<lume-plane
							ref=${(e) => (this.wordMarkVertical = e)}
							class="wordmark"
							role="img"
							xaria-label="The 'LUME' wordmark with letters flowing vertically, positioned to be floating in front of a 3D cube in the background, visible to people who have a screen that is taller than wide (f.e. phones in portrait orientation)."
							aria-labelledby="wordmarkVerticalLabel"
							xvisible="${() => this.viewIsTall()}"
							visible="${() => false}"
							size="${() => [
            (this.wordmarkContainer?.calculatedSize?.y ?? 1) * this.wordmarkAspectRatio(),
            this.wordmarkContainer?.calculatedSize?.y ?? 1,
        ]}"
							mount-point="0.5 0"
							opacity="0.99"
							todo="update to lume texture handling is needed for SVGs to work properly cross-platform (https://discourse.threejs.org/t/any-ideas-why-svg-texture-does-not-show-in-firefox/33361)."
							Xtexture=${wordmarkVerticalUrl}
							color="cyan"
						>
							<span id="wordmarkVerticalLabel" class="label">
								The 'LUME' wordmark with letters flowing vertically, positioned to be floating in front of a 3D cube in
								the background, visible to people who have a screen that is taller than wide (f.e. phones in portrait
								orientation).
							</span>

							<div style="width: 100%; height: 100%">
								<canvas ref=${(e) => (this.verticalCanvas = e)}></canvas>
								<img
									ref=${(e) => (this.verticalImg = e)}
									crossorigin
									src=${wordmarkVerticalUrl}
									width="118"
									height="686"
									style="width: 100%; height: 100%"
								/>
							</div>
						</lume-plane>
						<!-- </lume-element3d> -->
					</lume-element3d>

					<${this.Cube} ref=${(e) => (this.cube = e)} visible="false" />
				</lume-element3d>
			</lume-element3d>
		</lume-scene>
	`;
        template = () => html `
		<lume-scene
			ref="${(e) => (this.scene = e)}"
			id="outerScene"
			role="figure"
			xaria-label="A 3D scene with a 3D cube and the 'LUME' wordmark, with the cube rotating and the wordmark floating in front of it. The scene is interactive, with the cube and wordmark slightly rotating and shifting around based on pointer movement."
			aria-labelledby="sceneLabel"
			webgl
			background-color="black"
			background-opacity="1"
			fog-mode="linear"
			fog-color="black"
			fog-far="1250"
			fog-near="800"
		>
			<span id="sceneLabel" class="label">
				A 3D scene with a 3D cube and the 'LUME' wordmark, with the cube rotating and the wordmark floating in front of
				it. The scene is interactive, with the cube and wordmark slightly rotating and shifting around based on pointer
				movement.
			</span>

			<!-- <lume-element3d size-mode="proportional proportional" size="1 1 0"> -->
			<lume-mixed-plane
				id="innerScene"
				ref=${(e) => (this.innerScene = e)}
				size-mode="proportional proportional"
				size="1 1 0"
				material-opacity="0"
				origin="0 0 0"
			>
				<!-- TODO When animating the outerScene, the inner scenes will not animate unless they are wrapped in divs. -->

				<div style="width: 100%; height: 100%; position: absolute; top: 0; left: 0">
					<!-- Cube Scene #################################### -->
					<${this.CubeScene} />
				</div>

				<div style="width: 100%; height: 100%; position: absolute; top: 0; left: 0">
					<!-- Wordmark Scene ################################ -->
					<${this.WordmarkScene} />
				</div>

				<!-- UI ############################################ -->
				<${this.UI} />

				<lume-element3d
					ref="${(e) => (this.circle = e)}"
					visible=${() => !this.isMobile() && false}
					class="circle"
					mount-point="0.5 0.5"
					size="200 200"
				></lume-element3d>
			</lume-mixed-plane>
			<!-- </lume-element3d> -->

			<lume-element3d id="explosionSpheres">
				<!-- Spheres used for little explosion -->
				${Array.from({ length: 40 }).map(() => html `
						<lume-sphere
							class="explosionSphere"
							has="basic-material"
							color="yellow"
							cast-shadow="false"
							receive-shadow="false"
							size="20 20 20"
							mount-point="0.5 0.5 0.5"
							position="0 0 0"
							visible="true"
							opacity="0"
						></lume-sphere>
					`)}
			</lume-element3d>
		</lume-scene>
	`;
        css = css /*css*/ `
		:host {
			display: block;
			width: 100%;
			height: 100%;
		}

		${this.UICSS}

		.label {
			display: none;
		}

		#outerScene {
			background: black;
			touch-action: none;
		}

		#cubeScene,
		#wordmarkScene {
			position: absolute;
		}

		#cubeScene {
			background: radial-gradient(circle, rgb(23, 132, 252) 0%, rgb(0, 0, 198) 43.67%, rgb(13, 9, 98) 100%);
		}

		menu-links {
			pointer-events: auto;
		}

		.rotator {
			pointer-events: none;
		}

		.wordmark,
		.cubeFace {
			pointer-events: auto;
		}

		.circle {
			background: rgba(0, 25, 93, 0.3);
			backdrop-filter: blur(14px) brightness(130%);
			border-radius: 100%;
		}

		canvas {
			display: none;
		}
	`;
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return HomePage = _classThis;
})();
export { HomePage };
//# sourceMappingURL=HomePage.js.map