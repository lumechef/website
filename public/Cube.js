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
import { svgTexture } from './utils.js';
/**
 * This class could extend only Node, but it extends Cube so that if we turn on
 * webgl rendering we'll see a WebGL cube for debugging purposes (to ensure DOM
 * aligns with WebGL).
 */
let LandingCube = (() => {
    let _classDecorators = [element('landing-cube')];
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
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get root() {
            return this;
        }
        set root(_v) { }
        constructor() {
            super();
            this.mountPoint.set(0.5, 0.5, 0.5);
        }
        connectedCallback() {
            super.connectedCallback();
            const planes = Array.from(this.querySelectorAll('.cubeFace'));
            if (this.visible) {
                for (const plane of planes) {
                    const canvas = plane.querySelector('canvas');
                    const img = plane.querySelector('img');
                    svgTexture(plane, img, canvas, 1000, 1000);
                }
            }
        }
        // prettier-ignore
        template = () => html `
		<lume-plane class="cubeFace front"  xtexture="/images/cube/front.svg"  sidedness="double" position="${() => [0, 0, this.size.x / 2]}"  rotation="0 0 0"   size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img src="/images/cube/front.svg"  /></lume-plane>
		<lume-plane class="cubeFace back"   xtexture="/images/cube/back.svg"   sidedness="double" position="${() => [0, 0, -this.size.x / 2]}" rotation="0 180 0" size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img src="/images/cube/back.svg"   /></lume-plane>
		<lume-plane class="cubeFace left"   xtexture="/images/cube/left.svg"   sidedness="double" position="${() => [-this.size.x / 2, 0, 0]}" rotation="0 -90 0" size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img src="/images/cube/left.svg"   /></lume-plane>
		<lume-plane class="cubeFace right"  xtexture="/images/cube/right.svg"  sidedness="double" position="${() => [this.size.x / 2, 0, 0]}"  rotation="0 90 0"  size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img src="/images/cube/right.svg"  /></lume-plane>
		<lume-plane class="cubeFace top"    xtexture="/images/cube/top.svg"    sidedness="double" position="${() => [0, -this.size.x / 2, 0]}" rotation="-90 0 0" size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img src="/images/cube/top.svg"    /></lume-plane>
		<lume-plane class="cubeFace bottom" xtexture="/images/cube/bottom.svg" sidedness="double" position="${() => [0, this.size.x / 2, 0]}"  rotation="90 0 0"  size="${() => [this.size.x, this.size.x, 0]}" mount-point="0.5 0.5" align-point="0.5 0.5 0.5"><canvas></canvas><img src="/images/cube/bottom.svg" /></lume-plane>
	`;
    };
    return LandingCube = _classThis;
})();
export { LandingCube };
//# sourceMappingURL=Cube.js.map