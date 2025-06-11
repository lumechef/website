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
import { css, Element as LumeElement, element, booleanAttribute, stringAttribute, jsonAttribute, } from '@lume/element';
import { onCleanup } from 'solid-js';
import html from 'solid-js/html';
import { hasDescendant, querySelectorDeep } from '../utils.js';
import './BlazeComponent.js';
/**
 * This element wraps a the "loginButtons" Blaze template (loaded with the
 * <blaze-component> element) for two reasons:
 *
 * 1. Makes it work with ShadowDOM using some temporary JavaScript DOM patches
 * that happen in on click of any buttons in the loginButtons UI.
 * 2. Encapsulates custom style for the login UI.
 *
 * Ideally we wouldn't need the extra JS hacks, but Meteor's loginButtons first
 * needs an update so it will rely on its nearest root
 * (`getRootNode().querySelector()`) instead of the Document
 * (`document.querySelector()`), and then we will be able to delete the patch
 * code.
 */
let LoginUI = (() => {
    let _classDecorators = [element('login-ui')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LumeElement;
    let _disabled_decorators;
    let _disabled_initializers = [];
    let _disabled_extraInitializers = [];
    let _data_decorators;
    let _data_initializers = [];
    let _data_extraInitializers = [];
    let _customStyle_decorators;
    let _customStyle_initializers = [];
    let _customStyle_extraInitializers = [];
    var LoginUI = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _disabled_decorators = [booleanAttribute];
            _data_decorators = [jsonAttribute];
            _customStyle_decorators = [stringAttribute];
            __esDecorate(null, null, _disabled_decorators, { kind: "field", name: "disabled", static: false, private: false, access: { has: obj => "disabled" in obj, get: obj => obj.disabled, set: (obj, value) => { obj.disabled = value; } }, metadata: _metadata }, _disabled_initializers, _disabled_extraInitializers);
            __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(null, null, _customStyle_decorators, { kind: "field", name: "customStyle", static: false, private: false, access: { has: obj => "customStyle" in obj, get: obj => obj.customStyle, set: (obj, value) => { obj.customStyle = value; } }, metadata: _metadata }, _customStyle_initializers, _customStyle_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LoginUI = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        /**
         * If true, then the loginButtons Blaze component within this element will not be created
         * (or will be removed and cleaned up if it was already created).
         */
        disabled = __runInitializers(this, _disabled_initializers, false
        /**
         * A JSON string to be converted to a data object, or a data object
         * reference, that is passed to the loginButtons Blaze component.
         */
        );
        /**
         * A JSON string to be converted to a data object, or a data object
         * reference, that is passed to the loginButtons Blaze component.
         */
        data = (__runInitializers(this, _disabled_extraInitializers), __runInitializers(this, _data_initializers, { align: 'right' }
        /** CSS code for custom styling of the loginButtons Blaze template's DOM. */
        ));
        /** CSS code for custom styling of the loginButtons Blaze template's DOM. */
        customStyle = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _customStyle_initializers, ''));
        #handleLoginUI = (__runInitializers(this, _customStyle_extraInitializers), (el) => {
            let original = document.getElementById;
            el.addEventListener('click', event => {
                const target = event.target;
                if (target?.classList.contains('login-button')) {
                    original = document.getElementById;
                    // Temporarily patch document.getElementById to search in
                    // all ShadowRoots (unpatched in the next non-capture click
                    // handler) so that Meteor's call to document.getElementById
                    // will work while the login UI is inside of a ShadowRoot.
                    document.getElementById = function (id) {
                        let result = original.call(this, id);
                        if (result)
                            return result;
                        return querySelectorDeep(document, '#' + id);
                    };
                    // ^ cast because the TS type for document.querySelector is incorrect (https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/2020).
                    return;
                }
                if (target?.classList.contains('login-link-text')) {
                    // This makes it so that clicking the dropdown link will close the popup if
                    // it is already open.
                    const root = (this.shadowRoot ?? this.getRootNode());
                    const close = root.querySelector('.login-close-text');
                    if (close)
                        setTimeout(() => close.click());
                }
            }, { capture: true });
            // On the way back up, undo the patch. There's a small
            // chance we break someone else doing the same sort of
            // patch, but super unlikely.
            el.addEventListener('click', () => (document.getElementById = original), { capture: false });
        });
        connectedCallback() {
            super.connectedCallback();
            // When clicking anywhere not inside of the login-ui popup, close the popup.
            this.createEffect(() => {
                const onclick = (event) => {
                    const root = (this.shadowRoot ?? this.getRootNode());
                    const closeButton = root.querySelector('.login-close-text');
                    if (!closeButton)
                        return;
                    const loginUI = root.querySelector('#loginButtons');
                    const composedTarget = event.composedPath()[0];
                    if (loginUI && composedTarget && !hasDescendant(loginUI, composedTarget))
                        closeButton.click();
                };
                const opts = { capture: true };
                document.addEventListener('click', onclick, opts);
                onCleanup(() => document.removeEventListener('click', onclick, opts));
            });
        }
        template = () => html `
		<blaze-component
			tmpl="loginButtons"
			id="loginButtons"
			disabled=${() => this.disabled}
			data=${() => this.data}
			ref=${this.#handleLoginUI}
		></blaze-component>

		<style prop:textContent=${() => this.customStyle}></style>
	`;
        css = css /*css*/ `
		:host {
			display: contents;
		}

		#loginButtons {
			user-select: none;
			display: block;

			.login-link-text {
				color: black;
				text-decoration: none;
			}

			.accounts-dialog {
				pointer-events: auto;
				text-transform: none;
				font-family: var(--base-font-family);
				text-align: left;
				letter-spacing: normal;
				text-decoration: none;

				transform: translate(0px, 30px);

				* {
					font-family: inherit;

					.login-link-text {
						text-decoration: none;
					}
				}

				a {
					/* force black for now, until we handle light/dark theme for login UI. */
					color: black !important;
				}

				.login-close-text {
					display: none;
				}

				.login-button {
					margin-bottom: 6px;
				}

				.login-button-form-submit {
					margin-top: 12px;
				}

				[id*='label-and-input'] {
					display: flex;
					gap: 10px;
					margin-bottom: 10px;
				}
			}

			#login-buttons.login-buttons-dropdown-align-right #login-dropdown-list {
				top: 0;
				right: 0;
				bottom: unset;
				left: unset;
				margin: unset;
			}
		}

		:host-context([data-theme='dark']) {
			#loginButtons {
				.login-link-text {
					color: white;
				}
			}
		}
	`;
    };
    return LoginUI = _classThis;
})();
export { LoginUI };
//# sourceMappingURL=login-ui.js.map