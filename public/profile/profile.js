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
import { css, element, Element } from '@lume/element';
import { createEffect, html, signal } from 'lume';
import { Meteor } from 'meteor/meteor';
import '../elements/login-ui.js';
import '../elements/show-when.js';
import { toSolidSignal } from '../utils.js';
const elName = 'lume-user-profile';
const currentUser = toSolidSignal(() => Meteor.user());
let LumeUserProfile = (() => {
    let _classDecorators = [element];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Element;
    let _editing_decorators;
    let _editing_initializers = [];
    let _editing_extraInitializers = [];
    let _username_decorators;
    let _username_initializers = [];
    let _username_extraInitializers = [];
    var LumeUserProfile = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _editing_decorators = [signal];
            _username_decorators = [signal];
            __esDecorate(null, null, _editing_decorators, { kind: "field", name: "editing", static: false, private: false, access: { has: obj => "editing" in obj, get: obj => obj.editing, set: (obj, value) => { obj.editing = value; } }, metadata: _metadata }, _editing_initializers, _editing_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: obj => "username" in obj, get: obj => obj.username, set: (obj, value) => { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LumeUserProfile = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static elementName = elName;
        _; // no attributes yet
        editing = __runInitializers(this, _editing_initializers, false);
        username = (__runInitializers(this, _editing_extraInitializers), __runInitializers(this, _username_initializers, ''));
        connectedCallback() {
            super.connectedCallback();
            createEffect(() => {
                const user = currentUser();
                if (!user)
                    return;
                this.username = user.username ?? '';
            });
        }
        #saveChanges() {
            Meteor.call('updateUsername', this.username);
            this.editing = false;
        }
        #cancel() {
            this.username = '';
            this.editing = false;
        }
        template = (__runInitializers(this, _username_extraInitializers), () => html `
		<link rel="stylesheet" href="../entry.css" />

		<header>
			<h1>Profile</h1>

			<!-- ------------------------------------------------------------------------------->
			<!-- ---- dark/light/auto theme switch --------------------------------------------->
			<!-- ------------------------------------------------------------------------------->
			<style>
				theme-switch {
					width: 20px;
					pointer-events: auto;
				}
			</style>

			<theme-switch></theme-switch>

			<!-- ------------------------------------------------------------------------------->
			<!-- ---- Login UI ----------------------------------------------------------------->
			<!-- ------------------------------------------------------------------------------->

			<login-ui></login-ui>
		</header>

		<main>
			<show-when
				condition=${() => this.editing}
				content=${() => () => html `
					<div><input type="text" value=${currentUser()?.username ?? ''} onchange="${(ev) => {
            // TODO Verify username?
            this.username = ev.target.value;
        }}"></input></div>
					<div><button onclick="${() => this.#saveChanges()}">Save</button><button onclick="${() => this.#cancel()}">Cancel</button></div>
					`}
				fallback=${() => html `<div style="display: flex; justify-content: space-between;">
						<div>${() => currentUser()?.username ?? ''}</div>
						<div>
							<button onclick="${() => (this.editing = true)}">Edit profile</button>
						</div>
					</div>`}
			></show-when>
		</main>
	`);
        css = css `
		:host {
			width: 400px;
			height: 300px;

			pointer-events: auto;

			display: flex;
			flex-direction: column;
			padding: 10px;

			background: rgba(255, 255, 255, 0.3);
		}

		/* TODO :host-context support for non-shadow scoped styles? */
		:host-context([data-theme='dark']) {
			background: rgba(0, 0, 0, 0.5);
		}

		:host,
		* {
			box-sizing: border-box;
		}

		header {
			/*outline: 1px solid red;*/
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 10px;

			h1 {
				display: inline-block;
				padding: 0;
				margin: 0;
			}
		}

		main {
			/*outline: 1px solid blue;*/
			overflow: auto;
			gap: 20px;

			.card {
				width: 200px;
				height: 200px;
				position: relative;
				cursor: pointer;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				p {
					position: absolute;
					--pad: 5px;
					bottom: var(--pad);
					left: var(--pad);
				}
			}

			h1 a {
				cursor: pointer;
			}
		}
	`;
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LumeUserProfile = _classThis;
})();
export { LumeUserProfile };
//# sourceMappingURL=profile.js.map