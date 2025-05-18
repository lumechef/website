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
import { element, booleanAttribute, numberAttribute, html, css, Element3D } from 'lume';
let HamburgerButton = (() => {
    let _classDecorators = [element];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Element3D;
    let _lineThickness_decorators;
    let _lineThickness_initializers = [];
    let _lineThickness_extraInitializers = [];
    let _lineLength_decorators;
    let _lineLength_initializers = [];
    let _lineLength_extraInitializers = [];
    let _activated_decorators;
    let _activated_initializers = [];
    let _activated_extraInitializers = [];
    var HamburgerButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _lineThickness_decorators = [numberAttribute];
            _lineLength_decorators = [numberAttribute];
            _activated_decorators = [booleanAttribute];
            __esDecorate(null, null, _lineThickness_decorators, { kind: "field", name: "lineThickness", static: false, private: false, access: { has: obj => "lineThickness" in obj, get: obj => obj.lineThickness, set: (obj, value) => { obj.lineThickness = value; } }, metadata: _metadata }, _lineThickness_initializers, _lineThickness_extraInitializers);
            __esDecorate(null, null, _lineLength_decorators, { kind: "field", name: "lineLength", static: false, private: false, access: { has: obj => "lineLength" in obj, get: obj => obj.lineLength, set: (obj, value) => { obj.lineLength = value; } }, metadata: _metadata }, _lineLength_initializers, _lineLength_extraInitializers);
            __esDecorate(null, null, _activated_decorators, { kind: "field", name: "activated", static: false, private: false, access: { has: obj => "activated" in obj, get: obj => obj.activated, set: (obj, value) => { obj.activated = value; } }, metadata: _metadata }, _activated_initializers, _activated_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            HamburgerButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static elementName = 'hamburger-button';
        hasShadow = true;
        lineThickness = __runInitializers(this, _lineThickness_initializers, 2);
        lineLength = (__runInitializers(this, _lineThickness_extraInitializers), __runInitializers(this, _lineLength_initializers, 0.8));
        activated = (__runInitializers(this, _lineLength_extraInitializers), __runInitializers(this, _activated_initializers, false));
        template = (__runInitializers(this, _activated_extraInitializers), () => html `
		<lume-element3d
			class="menuButtonLine"
			size-mode="proportional literal"
			size="${() => [this.lineLength, this.lineThickness]}"
			align-point="${() => (this.activated ? '0.5 0.5' : '1 0')}"
			mount-point="${() => (this.activated ? '0.5 0.5' : '1 0')}"
			rotation="${() => [0, 0, this.activated ? -45 : 0]}"
		></lume-element3d>
		<lume-element3d
			TODO="no classList"
			class="${() => ({ menuButtonLine: true, hide: this.activated })}"
			size-mode="proportional literal"
			size="${() => [this.lineLength, this.lineThickness]}"
			align-point="0 0.5"
			mount-point="0 0.5"
		></lume-element3d>
		<lume-element3d
			class="menuButtonLine"
			size-mode="proportional literal"
			size="${() => [this.lineLength, this.lineThickness]}"
			align-point="${() => (this.activated ? '0.5 0.5' : '1 1')}"
			mount-point="${() => (this.activated ? '0.5 0.5' : '1 1')}"
			rotation="${() => [0, 0, this.activated ? 45 : 0]}"
		></lume-element3d>
	`);
        css = css /*css*/ `
		.menuButtonLine {
			background: white;
		}

		.hide {
			display: none !important;
		}
	`;
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return HamburgerButton = _classThis;
})();
export { HamburgerButton };
//# sourceMappingURL=HamburgerButton.js.map