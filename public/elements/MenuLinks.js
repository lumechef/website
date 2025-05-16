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
import { booleanAttribute, css, Element as LumeElement, element } from '@lume/element';
import { onCleanup } from 'solid-js';
import html from 'solid-js/html';
import { fadePageOnNav, hasDescendant, querySelectorDeep } from '../utils.js';
const isDev = location.host === 'localhost:8765';
const docsHost = isDev ? 'localhost:54321' : 'docs.lume.io';
let MenuLinks = (() => {
    let _classDecorators = [element('menu-links')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LumeElement;
    let _isMobile_decorators;
    let _isMobile_initializers = [];
    let _isMobile_extraInitializers = [];
    let _disabled_decorators;
    let _disabled_initializers = [];
    let _disabled_extraInitializers = [];
    var MenuLinks = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _isMobile_decorators = [booleanAttribute];
            _disabled_decorators = [booleanAttribute];
            __esDecorate(null, null, _isMobile_decorators, { kind: "field", name: "isMobile", static: false, private: false, access: { has: obj => "isMobile" in obj, get: obj => obj.isMobile, set: (obj, value) => { obj.isMobile = value; } }, metadata: _metadata }, _isMobile_initializers, _isMobile_extraInitializers);
            __esDecorate(null, null, _disabled_decorators, { kind: "field", name: "disabled", static: false, private: false, access: { has: obj => "disabled" in obj, get: obj => obj.disabled, set: (obj, value) => { obj.disabled = value; } }, metadata: _metadata }, _disabled_initializers, _disabled_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MenuLinks = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        isMobile = __runInitializers(this, _isMobile_initializers, false);
        disabled = (__runInitializers(this, _isMobile_extraInitializers), __runInitializers(this, _disabled_initializers, false));
        handleLoginUI = (__runInitializers(this, _disabled_extraInitializers), (el) => {
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
                    const close = this.shadowRoot?.querySelector('.login-close-text');
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
            const links = Array.from(this.shadowRoot.querySelectorAll('.menuLink:not(#login)'));
            fadePageOnNav(links);
            this.createEffect(() => {
                const onclick = (event) => {
                    const closeButton = this.shadowRoot.querySelector('.login-close-text');
                    if (!closeButton)
                        return;
                    const loginUI = this.shadowRoot?.querySelector('#loginButtons');
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
		<nav aria-label="Main" class="${() => `menuLinks${this.isMobile ? ' menuLinksMobile' : ''}`}">
			<div class=${this.isMobile ? 'spacer' : ''}></div>

			<a class="menuLink" href=${'//' + docsHost}> <span>Documentation</span> </a>
			<a class="menuLink" href=${`//${docsHost}/examples/hello-world/`}> <span>Examples</span> </a>
			<a class="menuLink" href="//lume.community"> <span>Forum</span> </a>
			<a class="menuLink" href="//discord.gg/PgeyevP"> <span>Chat</span> </a>
			<a class="menuLink" href="//github.com/lume/lume"> <span>Source Code</span> </a>

			<span class="menuLink" id="login">
				<blaze-component
					disabled=${() => this.disabled}
					id="loginButtons"
					tmpl="loginButtons"
					data=${() => ({ align: this.isMobile ? 'left' : 'right' })}
					ref=${this.handleLoginUI}
				></blaze-component>
			</span>

			<div class=${this.isMobile ? 'spacer' : ''}></div>
		</nav>
	`;
        css = css /*css*/ `
		:host {
			display: contents;
		}

		.menuLinks {
			font-size: calc(4vw * var(--isMobile) + 14px * var(--notIsMobile));
			font-weight: bold;
			height: 100%;
			display: flex;
			align-items: center;
		}

		.menuLinksMobile {
			width: 100%;
			flex-direction: column;
			align-items: start;
			justify-content: space-around;
		}

		.menuLink,
		.spacer {
			text-decoration: none;
			text-transform: uppercase;
			letter-spacing: 0.105em;
			color: white;
			padding-left: calc(10% * var(--isMobile) + 20px * var(--notIsMobile));
			padding-right: calc(0px * var(--isMobile) + 20px * var(--notIsMobile));
			height: calc(100% * var(--isMobile) + var(--desktopMenuItemHeight) * var(--notIsMobile));
			width: 100%;
			white-space: nowrap;
			display: flex;
			align-items: center;

			&:nth-last-child(1 of &) {
				padding-right: 0;
			}
		}

		.menuLinksMobile .menuLink:hover {
			background: rgb(255 255 255 / 0.1);
		}
		:not(.menuLinksMobile) .menuLink:hover {
			color: color-mix(in srgb, deeppink 80%, white 20%);
		}

		#loginButtons {
			user-select: none;

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

		.menuLinksMobile {
			#loginButtons {
				.accounts-dialog {
					transform: translate(0px, calc(-100% - 0px));
				}
			}
		}
	`;
    };
    return MenuLinks = _classThis;
})();
export { MenuLinks };
//# sourceMappingURL=MenuLinks.js.map