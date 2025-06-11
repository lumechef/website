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
import { css, Element, element } from '@lume/element';
import html from 'solid-js/html';
import { createMutable } from 'solid-js/store';
import { Meteor } from 'meteor/meteor';
import '../routes.js'; // track page visits
import '../elements/login-ui.js';
import '../elements/for-each.js';
import '../elements/show-when.js';
import { toSolidSignal } from '../utils.js';
const username = toSolidSignal(() => Meteor.user()?.username ?? Meteor.user()?.emails?.[0].address ?? '');
const state = (window.state = createMutable({ route: 'dash' }));
let LumeCreate = (() => {
    let _classDecorators = [element];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Element;
    var LumeCreate = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LumeCreate = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static elementName = 'lume-create';
        _; // no attributes yet
        template = () => html `
		<link rel="stylesheet" href="../entry.css" />

		<header>
			<h1>Lume Create</h1>

			<div class="spacer"></div>

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
				condition=${() => (console.log('username:', !!username()), !!username())}
				content=${() => () => html `
					<show-when
						condition=${() => state.route === 'dash'}
						content=${() => html `
							<for-each
								items=${() => ['box', 'sphere', 'gallery']}
								content=${() => (n) => html `
									<div class="card" onclick=${() => (state.route = 'element')}>
										<img src="/images/LUME5.png" />
										<p>${n}</p>
									</div>
								`}
							></for-each>
						`}
					></show-when>

					<show-when
						condition=${() => state.route === 'element'}
						content=${() => () => html `
							<div>
								<h1>
									scene
									<a onclick=${() => (state.route = 'dash')}>⮜ Back</a>
								</h1>
							</div>
						`}
					></show-when>
				`}
				fallback=${() => () => html ` <p>Login <span style="rotate: 70deg; display: inline-block;">👆</span></p> `}
			></show-when>
		</main>
	`;
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

		.spacer {
			flex-grow: 1;
		}

		header {
			/*outline: 1px solid red;*/
			display: flex;
			align-items: center;
			gap: 10px;

			h1 {
				display: inline-block;
				padding: 0;
				margin: 0;
			}
		}

		main {
			/*outline: 1px solid blue;*/
			flex-grow: 1;

			overflow: auto;
			display: flex;
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
    return LumeCreate = _classThis;
})();
export { LumeCreate };
//# sourceMappingURL=create.js.map