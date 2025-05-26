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
import '../promise.withResolvers.js';
import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';
import { Element, element, booleanAttribute, stringAttribute, jsonAttribute, css, } from '@lume/element';
import { html } from 'lume';
import { createEffect, createMemo, onCleanup } from 'solid-js';
import { ReactiveVar } from 'meteor/reactive-var';
import { cloneCSSStyleSheet } from '../utils.js';
let globalSheetPromise = null;
let BlazeComponent = (() => {
    let _classDecorators = [element];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Element;
    let _tmpl_decorators;
    let _tmpl_initializers = [];
    let _tmpl_extraInitializers = [];
    let _data_decorators;
    let _data_initializers = [];
    let _data_extraInitializers = [];
    let _disabled_decorators;
    let _disabled_initializers = [];
    let _disabled_extraInitializers = [];
    var BlazeComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _tmpl_decorators = [stringAttribute];
            _data_decorators = [jsonAttribute];
            _disabled_decorators = [booleanAttribute];
            __esDecorate(null, null, _tmpl_decorators, { kind: "field", name: "tmpl", static: false, private: false, access: { has: obj => "tmpl" in obj, get: obj => obj.tmpl, set: (obj, value) => { obj.tmpl = value; } }, metadata: _metadata }, _tmpl_initializers, _tmpl_extraInitializers);
            __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(null, null, _disabled_decorators, { kind: "field", name: "disabled", static: false, private: false, access: { has: obj => "disabled" in obj, get: obj => obj.disabled, set: (obj, value) => { obj.disabled = value; } }, metadata: _metadata }, _disabled_initializers, _disabled_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BlazeComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static elementName = 'blaze-component';
        /** The name of the Blaze template, or a Blaze template reference, to render. */
        tmpl = __runInitializers(this, _tmpl_initializers, ''
        /**
         * A JSON string to be converted to a data object, or a data object reference, to be passed to
         * the Blaze component.
         */
        );
        /**
         * A JSON string to be converted to a data object, or a data object reference, to be passed to
         * the Blaze component.
         */
        data = (__runInitializers(this, _tmpl_extraInitializers), __runInitializers(this, _data_initializers, {}
        /**
         * If true, then the Blaze component within this element will not be created
         * (or will be removed and cleaned up if it was already created).
         */
        ));
        /**
         * If true, then the Blaze component within this element will not be created
         * (or will be removed and cleaned up if it was already created).
         */
        disabled = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _disabled_initializers, false));
        hasShadow = (__runInitializers(this, _disabled_extraInitializers), false);
        #container;
        #tmpl = () => (typeof this.tmpl === 'string' ? Template[this.tmpl] : this.tmpl);
        #memoized = false;
        // TODO @memo decorator in classy-solid to replace this #memoize() method.
        #memoize() {
            if (this.#memoized)
                return;
            this.#memoized = true;
            this.#tmpl = createMemo(this.#tmpl);
        }
        #appliedGlobalStyle = false;
        // TODO move this global style selection into feature of @lume/element
        #handleGlobalStyle() {
            if (this.#appliedGlobalStyle)
                return;
            this.#appliedGlobalStyle = true;
            if (!globalSheetPromise) {
                const { promise, resolve } = Promise.withResolvers();
                globalSheetPromise = promise;
                const link = document.querySelector('link[href*="accounts-ui"]');
                const onStyleLoad = () => resolve(cloneCSSStyleSheet(link.sheet));
                const styleLoaded = link.sheet?.cssRules.length;
                if (!styleLoaded)
                    link.addEventListener('load', onStyleLoad);
                else
                    onStyleLoad();
            }
            this.createEffect(() => {
                let cleaned = false;
                globalSheetPromise.then(globalSheet => {
                    if (cleaned)
                        return;
                    const root = this.shadowRoot ?? (this.getRootNode() === document ? null : this.getRootNode());
                    root?.adoptedStyleSheets.push(globalSheet);
                    // TODO ref counting, remove style from root node when the last element instance is removed.
                });
                onCleanup(() => (cleaned = true));
            });
        }
        connectedCallback() {
            this.#memoize();
            super.connectedCallback();
            this.#handleGlobalStyle();
            this.createEffect(() => {
                if (this.disabled)
                    return;
                const tmpl = this.#tmpl();
                if (!tmpl)
                    return;
                const reactive = new ReactiveVar(this.data);
                // Map the element's data to the reactive var so that changes will be picked up by Blaze.
                createEffect(() => reactive.set(this.data));
                const view = Blaze.renderWithData(tmpl, () => reactive.get(), this.#container);
                // ensure all reactive updates are processed (is this needed?)
                // Tracker.flush()
                onCleanup(() => Blaze.remove(view));
            });
        }
        template = () => html `
		<div id="container" part="container" ref=${(e) => (this.#container = e)}></div>
	`;
        css = css /*css*/ `
		:host {
			display: contents;
		}

		#container {
			display: contents;
		}
	`;
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return BlazeComponent = _classThis;
})();
export { BlazeComponent };
//# sourceMappingURL=BlazeComponent.js.map