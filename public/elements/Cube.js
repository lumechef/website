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
import { element, Element3D, html } from 'lume';
import { svgTexture } from '../utils.js';
const frontUrl = new URL('../images/cube/front.svg', import.meta.url).href;
const backUrl = new URL('../images/cube/back.svg', import.meta.url).href;
const leftUrl = new URL('../images/cube/left.svg', import.meta.url).href;
const rightUrl = new URL('../images/cube/right.svg', import.meta.url).href;
const topUrl = new URL('../images/cube/top.svg', import.meta.url).href;
const bottomUrl = new URL('../images/cube/bottom.svg', import.meta.url).href;
/**
 * This class could extend only Node, but it extends Cube so that if we turn on
 * webgl rendering we'll see a WebGL cube for debugging purposes (to ensure DOM
 * aligns with WebGL).
 */
let LandingCube = (() => {
    let _classDecorators = [element];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Element3D;
    var LandingCube = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LandingCube = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static elementName = 'landing-cube';
        hasShadow = true;
        constructor() {
            super();
            this.mountPoint.set(0.5, 0.5, 0.5);
        }
        connectedCallback() {
            super.connectedCallback();
            const planes = Array.from(this.shadowRoot.querySelectorAll('.cubeFace'));
            if (this.visible) {
                for (const plane of planes) {
                    const canvas = plane.querySelector('canvas');
                    const img = plane.querySelector('img');
                    if (!canvas || !img)
                        throw new Error('Canvas or image missing');
                    svgTexture(plane, img, canvas, 1000, 1000);
                }
            }
        }
        // prettier-ignore
        // TODO texture="" is commented out because SVG textures need an update to work well cross-platform. https://discourse.threejs.org/t/any-ideas-why-svg-texture-does-not-show-in-firefox/33361
        template = () => html `
		<lume-plane class="cubeFace front"  xtexture=${frontUrl}  sidedness="double" position="${() => [0, 0, this.size.x / 2]}"  rotation="0 0 0"   size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img crossorigin src=${frontUrl}  /></lume-plane>
		<lume-plane class="cubeFace back"   xtexture=${backUrl}   sidedness="double" position="${() => [0, 0, -this.size.x / 2]}" rotation="0 180 0" size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img crossorigin src=${backUrl}   /></lume-plane>
		<lume-plane class="cubeFace left"   xtexture=${leftUrl}   sidedness="double" position="${() => [-this.size.x / 2, 0, 0]}" rotation="0 -90 0" size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img crossorigin src=${leftUrl}   /></lume-plane>
		<lume-plane class="cubeFace right"  xtexture=${rightUrl}  sidedness="double" position="${() => [this.size.x / 2, 0, 0]}"  rotation="0 90 0"  size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img crossorigin src=${rightUrl}  /></lume-plane>
		<lume-plane class="cubeFace top"    xtexture=${topUrl}    sidedness="double" position="${() => [0, -this.size.x / 2, 0]}" rotation="-90 0 0" size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img crossorigin src=${topUrl}    /></lume-plane>
		<lume-plane class="cubeFace bottom" xtexture=${bottomUrl} sidedness="double" position="${() => [0, this.size.x / 2, 0]}"  rotation="90 0 0"  size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img crossorigin src=${bottomUrl} /></lume-plane>
	`;
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LandingCube = _classThis;
})();
export { LandingCube };
//# sourceMappingURL=Cube.js.map