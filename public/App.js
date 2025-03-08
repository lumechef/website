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
import { Motor, Element, element, Element3D, numberAttribute, booleanAttribute, html, css } from 'lume';
import { Tween, Easing } from '@tweenjs/tween.js';
import { createEffect, createMemo, onCleanup } from 'solid-js';
import { signal } from 'classy-solid';
import './Cube.js';
import {} from './Cube.js';
import { svgTexture } from './utils.js';
const MENU_WIDTH = 0.8; // percent of viewport
const HEADER_HEIGHT = 100;
let App = (() => {
    let _classDecorators = [element('app-root')];
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
    let _menu_decorators;
    let _menu_initializers = [];
    let _menu_extraInitializers = [];
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
    let _menuButtonWrapper_decorators;
    let _menuButtonWrapper_initializers = [];
    let _menuButtonWrapper_extraInitializers = [];
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
    let _menuOpen_decorators;
    let _menuOpen_initializers = [];
    let _menuOpen_extraInitializers = [];
    let _viewWidth_decorators;
    let _viewWidth_initializers = [];
    let _viewWidth_extraInitializers = [];
    let _viewHeight_decorators;
    let _viewHeight_initializers = [];
    let _viewHeight_extraInitializers = [];
    var App = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _cube_decorators = [signal];
            _cube2_decorators = [signal];
            _menu_decorators = [signal];
            _scene_decorators = [signal];
            _rotator_decorators = [signal];
            _rotator2_decorators = [signal];
            _wordmarkContainer_decorators = [signal];
            _circle_decorators = [signal];
            _light_decorators = [signal];
            _light2_decorators = [signal];
            _menuButtonWrapper_decorators = [signal];
            _wordMarkHorizontal_decorators = [signal];
            _horizontalImg_decorators = [signal];
            _horizontalCanvas_decorators = [signal];
            _wordMarkVertical_decorators = [signal];
            _verticalImg_decorators = [signal];
            _verticalCanvas_decorators = [signal];
            _menuOpen_decorators = [signal];
            _viewWidth_decorators = [signal];
            _viewHeight_decorators = [signal];
            __esDecorate(null, null, _cube_decorators, { kind: "field", name: "cube", static: false, private: false, access: { has: obj => "cube" in obj, get: obj => obj.cube, set: (obj, value) => { obj.cube = value; } }, metadata: _metadata }, _cube_initializers, _cube_extraInitializers);
            __esDecorate(null, null, _cube2_decorators, { kind: "field", name: "cube2", static: false, private: false, access: { has: obj => "cube2" in obj, get: obj => obj.cube2, set: (obj, value) => { obj.cube2 = value; } }, metadata: _metadata }, _cube2_initializers, _cube2_extraInitializers);
            __esDecorate(null, null, _menu_decorators, { kind: "field", name: "menu", static: false, private: false, access: { has: obj => "menu" in obj, get: obj => obj.menu, set: (obj, value) => { obj.menu = value; } }, metadata: _metadata }, _menu_initializers, _menu_extraInitializers);
            __esDecorate(null, null, _scene_decorators, { kind: "field", name: "scene", static: false, private: false, access: { has: obj => "scene" in obj, get: obj => obj.scene, set: (obj, value) => { obj.scene = value; } }, metadata: _metadata }, _scene_initializers, _scene_extraInitializers);
            __esDecorate(null, null, _rotator_decorators, { kind: "field", name: "rotator", static: false, private: false, access: { has: obj => "rotator" in obj, get: obj => obj.rotator, set: (obj, value) => { obj.rotator = value; } }, metadata: _metadata }, _rotator_initializers, _rotator_extraInitializers);
            __esDecorate(null, null, _rotator2_decorators, { kind: "field", name: "rotator2", static: false, private: false, access: { has: obj => "rotator2" in obj, get: obj => obj.rotator2, set: (obj, value) => { obj.rotator2 = value; } }, metadata: _metadata }, _rotator2_initializers, _rotator2_extraInitializers);
            __esDecorate(null, null, _wordmarkContainer_decorators, { kind: "field", name: "wordmarkContainer", static: false, private: false, access: { has: obj => "wordmarkContainer" in obj, get: obj => obj.wordmarkContainer, set: (obj, value) => { obj.wordmarkContainer = value; } }, metadata: _metadata }, _wordmarkContainer_initializers, _wordmarkContainer_extraInitializers);
            __esDecorate(null, null, _circle_decorators, { kind: "field", name: "circle", static: false, private: false, access: { has: obj => "circle" in obj, get: obj => obj.circle, set: (obj, value) => { obj.circle = value; } }, metadata: _metadata }, _circle_initializers, _circle_extraInitializers);
            __esDecorate(null, null, _light_decorators, { kind: "field", name: "light", static: false, private: false, access: { has: obj => "light" in obj, get: obj => obj.light, set: (obj, value) => { obj.light = value; } }, metadata: _metadata }, _light_initializers, _light_extraInitializers);
            __esDecorate(null, null, _light2_decorators, { kind: "field", name: "light2", static: false, private: false, access: { has: obj => "light2" in obj, get: obj => obj.light2, set: (obj, value) => { obj.light2 = value; } }, metadata: _metadata }, _light2_initializers, _light2_extraInitializers);
            __esDecorate(null, null, _menuButtonWrapper_decorators, { kind: "field", name: "menuButtonWrapper", static: false, private: false, access: { has: obj => "menuButtonWrapper" in obj, get: obj => obj.menuButtonWrapper, set: (obj, value) => { obj.menuButtonWrapper = value; } }, metadata: _metadata }, _menuButtonWrapper_initializers, _menuButtonWrapper_extraInitializers);
            __esDecorate(null, null, _wordMarkHorizontal_decorators, { kind: "field", name: "wordMarkHorizontal", static: false, private: false, access: { has: obj => "wordMarkHorizontal" in obj, get: obj => obj.wordMarkHorizontal, set: (obj, value) => { obj.wordMarkHorizontal = value; } }, metadata: _metadata }, _wordMarkHorizontal_initializers, _wordMarkHorizontal_extraInitializers);
            __esDecorate(null, null, _horizontalImg_decorators, { kind: "field", name: "horizontalImg", static: false, private: false, access: { has: obj => "horizontalImg" in obj, get: obj => obj.horizontalImg, set: (obj, value) => { obj.horizontalImg = value; } }, metadata: _metadata }, _horizontalImg_initializers, _horizontalImg_extraInitializers);
            __esDecorate(null, null, _horizontalCanvas_decorators, { kind: "field", name: "horizontalCanvas", static: false, private: false, access: { has: obj => "horizontalCanvas" in obj, get: obj => obj.horizontalCanvas, set: (obj, value) => { obj.horizontalCanvas = value; } }, metadata: _metadata }, _horizontalCanvas_initializers, _horizontalCanvas_extraInitializers);
            __esDecorate(null, null, _wordMarkVertical_decorators, { kind: "field", name: "wordMarkVertical", static: false, private: false, access: { has: obj => "wordMarkVertical" in obj, get: obj => obj.wordMarkVertical, set: (obj, value) => { obj.wordMarkVertical = value; } }, metadata: _metadata }, _wordMarkVertical_initializers, _wordMarkVertical_extraInitializers);
            __esDecorate(null, null, _verticalImg_decorators, { kind: "field", name: "verticalImg", static: false, private: false, access: { has: obj => "verticalImg" in obj, get: obj => obj.verticalImg, set: (obj, value) => { obj.verticalImg = value; } }, metadata: _metadata }, _verticalImg_initializers, _verticalImg_extraInitializers);
            __esDecorate(null, null, _verticalCanvas_decorators, { kind: "field", name: "verticalCanvas", static: false, private: false, access: { has: obj => "verticalCanvas" in obj, get: obj => obj.verticalCanvas, set: (obj, value) => { obj.verticalCanvas = value; } }, metadata: _metadata }, _verticalCanvas_initializers, _verticalCanvas_extraInitializers);
            __esDecorate(null, null, _menuOpen_decorators, { kind: "field", name: "menuOpen", static: false, private: false, access: { has: obj => "menuOpen" in obj, get: obj => obj.menuOpen, set: (obj, value) => { obj.menuOpen = value; } }, metadata: _metadata }, _menuOpen_initializers, _menuOpen_extraInitializers);
            __esDecorate(null, null, _viewWidth_decorators, { kind: "field", name: "viewWidth", static: false, private: false, access: { has: obj => "viewWidth" in obj, get: obj => obj.viewWidth, set: (obj, value) => { obj.viewWidth = value; } }, metadata: _metadata }, _viewWidth_initializers, _viewWidth_extraInitializers);
            __esDecorate(null, null, _viewHeight_decorators, { kind: "field", name: "viewHeight", static: false, private: false, access: { has: obj => "viewHeight" in obj, get: obj => obj.viewHeight, set: (obj, value) => { obj.viewHeight = value; } }, metadata: _metadata }, _viewHeight_initializers, _viewHeight_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            App = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        hasShadow = false;
        // Used in AppAttributes to denote no attributes. See TODO there.
        _____;
        cube = __runInitializers(this, _cube_initializers, void 0);
        cube2 = (__runInitializers(this, _cube_extraInitializers), __runInitializers(this, _cube2_initializers, void 0));
        menu = (__runInitializers(this, _cube2_extraInitializers), __runInitializers(this, _menu_initializers, void 0));
        scene = (__runInitializers(this, _menu_extraInitializers), __runInitializers(this, _scene_initializers, void 0));
        rotator = (__runInitializers(this, _scene_extraInitializers), __runInitializers(this, _rotator_initializers, void 0));
        rotator2 = (__runInitializers(this, _rotator_extraInitializers), __runInitializers(this, _rotator2_initializers, void 0));
        wordmarkContainer = (__runInitializers(this, _rotator2_extraInitializers), __runInitializers(this, _wordmarkContainer_initializers, void 0));
        circle = (__runInitializers(this, _wordmarkContainer_extraInitializers), __runInitializers(this, _circle_initializers, void 0));
        light = (__runInitializers(this, _circle_extraInitializers), __runInitializers(this, _light_initializers, void 0));
        light2 = (__runInitializers(this, _light_extraInitializers), __runInitializers(this, _light2_initializers, void 0));
        menuButtonWrapper = (__runInitializers(this, _light2_extraInitializers), __runInitializers(this, _menuButtonWrapper_initializers, void 0));
        wordMarkHorizontal = (__runInitializers(this, _menuButtonWrapper_extraInitializers), __runInitializers(this, _wordMarkHorizontal_initializers, void 0));
        horizontalImg = (__runInitializers(this, _wordMarkHorizontal_extraInitializers), __runInitializers(this, _horizontalImg_initializers, void 0));
        horizontalCanvas = (__runInitializers(this, _horizontalImg_extraInitializers), __runInitializers(this, _horizontalCanvas_initializers, void 0));
        wordMarkVertical = (__runInitializers(this, _horizontalCanvas_extraInitializers), __runInitializers(this, _wordMarkVertical_initializers, void 0));
        verticalImg = (__runInitializers(this, _wordMarkVertical_extraInitializers), __runInitializers(this, _verticalImg_initializers, void 0));
        verticalCanvas = (__runInitializers(this, _verticalImg_extraInitializers), __runInitializers(this, _verticalCanvas_initializers, void 0));
        // TODO make option for Tween to remember last value instead of starting
        // from the beginning. It would simplify the Tween code a lot. See
        // https://github.com/tweenjs/tween.js/issues/522
        makeOpenTween() {
            this.openTween = new Tween({ menuPosition: this.menu?.alignPoint.x || 1 })
                .onComplete(() => this.openTween?.stop())
                .onUpdate(obj => this.menu && (this.menu.alignPoint.x = obj.menuPosition))
                .easing(Easing.Exponential.Out);
        }
        makeCloseTween() {
            this.closeTween = new Tween({
                menuPosition: this.menu?.alignPoint.x || 1 - MENU_WIDTH,
            })
                .onComplete(() => this.closeTween?.stop())
                .onUpdate(obj => this.menu && (this.menu.alignPoint.x = obj.menuPosition))
                .easing(Easing.Exponential.Out);
        }
        openTween = (__runInitializers(this, _verticalCanvas_extraInitializers), null);
        closeTween = null;
        menuOpen = __runInitializers(this, _menuOpen_initializers, false);
        openMenu() {
            if (this.menuOpen)
                return;
            this.menuOpen = true;
            if (this.closeTween?.isPlaying())
                this.closeTween.stop();
            this.makeOpenTween();
            // TODO Tween.start() time arg should be optional.
            // XXX this.openTween exists here! Optional chaining operator is needed to satisfy type system
            this.openTween?.to({ menuPosition: 1 - MENU_WIDTH }, 800).start(performance.now());
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
        toggleMenu = (__runInitializers(this, _menuOpen_extraInitializers), () => (this.menuOpen ? this.closeMenu() : this.openMenu()));
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
        viewWidth = __runInitializers(this, _viewWidth_initializers, 0);
        viewHeight = (__runInitializers(this, _viewWidth_extraInitializers), __runInitializers(this, _viewHeight_initializers, 0
        // TODO @memo decorator to avoid unnecessary re-calculation downstream
        ));
        // TODO @memo decorator to avoid unnecessary re-calculation downstream
        isMobile = (__runInitializers(this, _viewHeight_extraInitializers), () => this.viewWidth <= 1200);
        cubeSize = () => (this.viewIsTall() ? 0.65 * this.viewWidth : 0.5 * this.viewHeight);
        viewIsTall = () => this.viewHeight >= this.viewWidth;
        wordmarkAspectRatio = () => (this.viewIsTall() ? 118 / 686 : 960 / 146);
        #memoize() {
            memoize(this, 'isMobile', 'cubeSize', 'viewIsTall', 'wordmarkAspectRatio');
        }
        connectedCallback() {
            this.#memoize();
            super.connectedCallback();
            const { scene, rotator, cube: cubeNode, menuButtonWrapper } = this;
            if (!scene || !rotator || !cubeNode || !menuButtonWrapper)
                throw new Error('Missing!');
            this.createEffect(() => {
                const task = Motor.addRenderTask((_t, dt) => (cubeNode.rotation.y += dt / 50));
                onCleanup(() => Motor.removeRenderTask(task));
                createEffect(() => {
                    this.viewWidth = scene.calculatedSize.x;
                    this.viewHeight = scene.calculatedSize.y;
                });
                ///// ROTATION ON POINTER MOVE ///////////////////////////////////////////////
                {
                    const rotationRange = 10;
                    const targetRotation = {
                        x: 0,
                        y: 0,
                    };
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
                    // Rotate the image a little bit based on pointer position.
                    scene.addEventListener('pointermove', setTargetRotation);
                    scene.addEventListener('pointerdown', setTargetRotation);
                    // Rotate the container towards the targetRotation over time to make it smooth.
                    const task2 = Motor.addRenderTask(() => {
                        rotator.rotation.x += (targetRotation.x - rotator.rotation.x) * 0.02;
                        rotator.rotation.y += (targetRotation.y - rotator.rotation.y) * 0.02;
                        rotator.position.x = rotator.rotation.y * -3;
                        rotator.position.y = rotator.rotation.x * 2;
                    });
                    onCleanup(() => Motor.removeRenderTask(task2));
                    scene.addEventListener('pointermove', event => {
                        const circle = this.circle;
                        if (!circle)
                            return;
                        circle.position.x = event.clientX;
                        circle.position.y = event.clientY;
                    });
                }
                // FIXME Small hack to make the light update its position. For some
                // reason the initial position/align-point is not working.
                this.light.position = (x, y, z) => [x, y, z];
                this.light2.position = (x, y, z) => [x, y, z];
                onCleanup(() => {
                    this.light.position = null;
                    this.light2.position = null;
                });
                createEffect(() => (this.rotator2.rotation = this.rotator.rotation));
                createEffect(() => (this.rotator2.position = this.rotator.position));
                createEffect(() => (this.cube2.rotation = this.cube.rotation));
            });
            svgTexture(this.wordMarkHorizontal, this.horizontalImg, this.horizontalCanvas, 960, 146);
            svgTexture(this.wordMarkVertical, this.verticalImg, this.verticalCanvas, 118, 686);
        }
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
			id="innerScene"
			webgl="true"
			enable-css="true"
		>
			<lume-ambient-light color="white" intensity="2"></lume-ambient-light>
			<lume-point-light
				ref=${e => (this.light2 = e)}
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
					ref="${e => (this.rotator2 = e)}"
					class="rotator"
					role="img"
					xaria-label="A 3D cube with each face showing different pink/yellow/blue/cyan gradient colors, floating behind the 'LUME' wordmark."
					aria-labelledby="cubeLabel"
					align-point="0.5 0.5"
					mount-point="0.5 0.5"
					size-mode="proportional proportional"
					size="1 1"
				>
					<div id="cubeLabel" class="label">
						A 3D cube with each face showing different pink/yellow/blue/cyan gradient colors, floating behind the 'LUME'
						wordmark.
					</div>
					<${this.Cube} ref=${e => (this.cube2 = e)} />
				</lume-element3d>
			</lume-element3d>
		</lume-scene>
	`;
        Cube = props => html `
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
			id="innerScene"
			webgl="true"
			enable-css="true"
		>
			<lume-ambient-light color="white" intensity="2"></lume-ambient-light>
			<lume-point-light
				ref=${e => (this.light = e)}
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
				<lume-element3d
					class="headerBar"
					comment="setting a string override Lume style (including transforms, etc)."
					xstyle="${() => 'pointer-events: ' + (this.isMobile() ? 'none' : 'auto')}"
					style="${() => ({ pointerEvents: this.isMobile() ? 'none' : 'auto' })}"
					size-mode="proportional literal"
					size="${[1, HEADER_HEIGHT, 0]}"
				>
					<div class="headerBarInner">
						<img
							src="/images/logo.svg"
							class="logo"
							alt="The Lume logo, positioned statically at the top left of the site on top of a 3D scene."
						/>

						<div style=${() => ({ display: this.isMobile() ? 'none' : 'contents' })}>
							<div class="header-space"></div>
							<menu-links></menu-links>
						</div>
					</div>
				</lume-element3d>

				<lume-element3d
					ref="${e => (this.rotator = e)}"
					class="rotator"
					align-point="0.5 0.5"
					mount-point="0.5 0.5"
					size-mode="proportional proportional"
					size="1 1"
				>
					<lume-element3d
						ref="${e => (this.wordmarkContainer = e)}"
						size-mode="proportional proportional"
						size="${() => (this.viewIsTall() ? '0 0.7 0' : '0.5 0 0')}"
						mount-point="0.5 0.5"
						align-point="0.5 0.5"
					>
						<!-- <lume-element3d -->
						<lume-plane
							ref=${e => (this.wordMarkHorizontal = e)}
							class="wordmark"
							role="img"
							xaria-label="The 'LUME' wordmark with letters flowing horizontally, positioned to be floating in front of a 3D cube in the background, visible to people who have a screen that is wider than tall (f.e. desktop or tablets in landscape orientation)."
							aria-labelledby="wordmarkHorizontalLabel"
							visible="${() => !this.viewIsTall()}"
							TODO="relative size based on parent size, but not necessarily the same axis (f.e. map child Y size to proportion of parent X size)"
							size="${() => [
            this.wordmarkContainer?.calculatedSize?.x ?? 1,
            (this.wordmarkContainer?.calculatedSize?.x ?? 1) / this.wordmarkAspectRatio(),
        ]}"
							mount-point="0 0.5"
							opacity="0.99"
							Xtexture="/images/logo-wordmark.svg"
							color="cyan"
						>
							<div id="wordmarkHorizontalLabel" class="label">
								The 'LUME' wordmark with letters flowing horizontally, positioned to be floating in front of a 3D cube
								in the background, visible to people who have a screen that is wider than tall (f.e. desktop or tablets
								in landscape orientation).
							</div>
							<div style="width: 100%; height: 100%">
								<canvas ref=${e => (this.horizontalCanvas = e)}></canvas>
								<img
									ref=${e => (this.horizontalImg = e)}
									src="/images/logo-wordmark.svg"
									width="960"
									height="146"
									style="width: 100%; height: 100%;"
								/>
							</div>
						</lume-plane>
						<!-- </lume-element3d> -->

						<!-- <lume-element3d -->
						<lume-plane
							ref=${e => (this.wordMarkVertical = e)}
							class="wordmark"
							role="img"
							xaria-label="The 'LUME' wordmark with letters flowing vertically, positioned to be floating in front of a 3D cube in the background, visible to people who have a screen that is taller than wide (f.e. phones in portrait orientation)."
							aria-labelledby="wordmarkVerticalLabel"
							visible="${() => this.viewIsTall()}"
							size="${() => [
            (this.wordmarkContainer?.calculatedSize?.y ?? 1) * this.wordmarkAspectRatio(),
            this.wordmarkContainer?.calculatedSize?.y ?? 1,
        ]}"
							mount-point="0.5 0"
							opacity="0.99"
							Xtexture="/images/logo-wordmark-vertical.svg"
							color="cyan"
						>
							<div id="wordmarkVerticalLabel" class="label">
								The 'LUME' wordmark with letters flowing vertically, positioned to be floating in front of a 3D cube in
								the background, visible to people who have a screen that is taller than wide (f.e. phones in portrait
								orientation).
							</div>
							<div style="width: 100%; height: 100%">
								<canvas ref=${e => (this.verticalCanvas = e)}></canvas>
								<img
									ref=${e => (this.verticalImg = e)}
									src="/images/logo-wordmark-vertical.svg"
									width="118"
									height="686"
									style="width: 100%; height: 100%"
								/>
							</div>
						</lume-plane>
						<!-- </lume-element3d> -->
					</lume-element3d>

					<${this.Cube} ref=${e => (this.cube = e)} visible="false" />
				</lume-element3d>
			</lume-element3d>
		</lume-scene>
	`;
        template = () => html `
		<lume-scene
			ref="${e => (this.scene = e)}"
			id="outerScene"
			role="figure"
			xaria-label="A 3D scene with a 3D cube and the 'LUME' wordmark, with the cube rotating and the wordmark floating in front of it. The scene is interactive, with the cube and wordmark slightly rotating and shifting around based on pointer movement."
			aria-labelledby="sceneLabel"
		>
			<div id="sceneLabel" class="label">
				A 3D scene with a 3D cube and the 'LUME' wordmark, with the cube rotating and the wordmark floating in front of
				it. The scene is interactive, with the cube and wordmark slightly rotating and shifting around based on pointer
				movement.
			</div>
			<lume-element3d size-mode="proportional proportional" size="1 1 0">
				<!-- Cube Scene ################################ -->
				<${this.CubeScene} />

				<!-- Wordmark Scene ################################ -->
				<${this.WordmarkScene} />

				<lume-element3d
					class="mobileNav"
					size-mode="proportional proportional"
					size="1 1 0"
					visible=${() => this.isMobile()}
				>
					<lume-element3d
						ref="${e => (this.menu = e)}"
						class="mobileMenu"
						size-mode="proportional proportional"
						size="${[MENU_WIDTH, 1]}"
						align-point="1 0"
						comment="start closed position"
						opacity="1"
					>
						<menu-links is-mobile="${true}"></menu-links>
					</lume-element3d>

					<lume-element3d
						class="menuButtonWrapper"
						ref="${e => (this.menuButtonWrapper = e)}"
						size="140 100"
						align-point="1 0"
						position="0 0"
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

				<lume-element3d
					ref="${e => (this.circle = e)}"
					visible=${() => !this.isMobile() && false}
					class="circle"
					mount-point="0.5 0.5"
					size="200 200"
				></lume-element3d>
			</lume-element3d>
		</lume-scene>
	`;
        css = css /*css*/ `
		:host {
			display: block;
			width: 100%;
			height: 100%;
		}

		.label {
			display: none;
		}

		#outerScene {
			touch-action: none;
		}

		#cubeScene,
		#wordmarkScene {
			position: absolute;
		}

		.headerBar {
			pointer-events: none;
		}

		.headerBarInner {
			display: flex;
			height: 100%;
			align-items: center;
			padding-left: 60px;
			padding-right: 60px;
		}

		.mobileNav {
			pointer-events: none;
		}

		menu-links {
			pointer-events: auto;
		}

		.logo {
			width: 50px;
			height: 50px;
			object-fit: fill;

			/* push everything else to the right side of the header */
			/*margin-right: auto;*/
		}

		.header-space {
			flex-grow: 1;
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

		.mobileMenu {
			background: rgba(0, 25, 93, 0.85);
			/* background: rgb(0 33 121 / 85%);
			background: rgb(0 49 180 / 60%); */
			backdrop-filter: blur(24px) brightness(130%); /* not working as desired, https://issues.chromium.org/issues/323735424 */
			pointer-events: auto;
		}

		.menuButtonWrapper {
			pointer-events: auto;
		}

		canvas {
			display: none;
		}
	`;
    };
    return App = _classThis;
})();
export { App };
//////////////////////////////////////////////////////////////////////////
let MenuLinks = (() => {
    let _classDecorators = [element('menu-links')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Element;
    let _isMobile_decorators;
    let _isMobile_initializers = [];
    let _isMobile_extraInitializers = [];
    let _menuLinks_decorators;
    let _menuLinks_initializers = [];
    let _menuLinks_extraInitializers = [];
    var MenuLinks = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _isMobile_decorators = [booleanAttribute];
            _menuLinks_decorators = [signal];
            __esDecorate(null, null, _isMobile_decorators, { kind: "field", name: "isMobile", static: false, private: false, access: { has: obj => "isMobile" in obj, get: obj => obj.isMobile, set: (obj, value) => { obj.isMobile = value; } }, metadata: _metadata }, _isMobile_initializers, _isMobile_extraInitializers);
            __esDecorate(null, null, _menuLinks_decorators, { kind: "field", name: "menuLinks", static: false, private: false, access: { has: obj => "menuLinks" in obj, get: obj => obj.menuLinks, set: (obj, value) => { obj.menuLinks = value; } }, metadata: _metadata }, _menuLinks_initializers, _menuLinks_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MenuLinks = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        isMobile = __runInitializers(this, _isMobile_initializers, false);
        menuLinks = (__runInitializers(this, _isMobile_extraInitializers), __runInitializers(this, _menuLinks_initializers, void 0));
        template = (__runInitializers(this, _menuLinks_extraInitializers), () => html `
		<nav
			aria-label="Main"
			class="${() => `menuLinks${this.isMobile ? ' menuLinksMobile' : ''}`}"
			ref="${e => (this.menuLinks = e)}"
		>
			<div class=${this.isMobile ? 'spacer' : ''}></div>
			<a class="menuLink" href="//docs.lume.io"> <span>Documentation</span> </a>
			<a class="menuLink" href="//docs.lume.io/examples/hello-world/"> <span>Examples</span> </a>
			<a class="menuLink" href="//lume.community"> <span>Forum</span> </a>
			<a class="menuLink" href="//discord.gg/PgeyevP"> <span>Chat</span> </a>
			<a class="menuLink" href="//github.com/lume/lume"> <span>Source</span> </a>
			<div class=${this.isMobile ? 'spacer' : ''}></div>
		</nav>
	`);
        css = css /*css*/ `
		:host {
			display: contents;
		}

		.menuLinks {
			font-size: calc(4vw * var(--isMobile) + 14px * (1 - var(--isMobile)));
			height: 100%;
			display: flex;
			align-items: center;
		}

		.menuLinksMobile {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			justify-content: space-around;
			align-items: start;
		}

		.menuLink,
		.spacer {
			text-decoration: none;
			text-transform: uppercase;
			margin-left: calc(0px * var(--isMobile) + 40px * (1 - var(--isMobile)));
			letter-spacing: 0.105em;
			color: white;
			padding-left: calc(10% * var(--isMobile) + 0px * (1 - var(--isMobile)));
			padding-top: calc(4% * var(--isMobile) + 0px * (1 - var(--isMobile)));
			padding-bottom: calc(4% * var(--isMobile) + 0px * (1 - var(--isMobile)));
			height: 100%;
			display: flex;
			align-items: center;
		}
	`;
        connectedCallback() {
            super.connectedCallback();
            createEffect(() => {
                this.menuLinks?.style.setProperty('--isMobile', '' + (this.isMobile ? 1 : 0));
            });
        }
    };
    return MenuLinks = _classThis;
})();
export { MenuLinks };
//////////////////////////////////////////////////////////////////////////
let HamburgerButton = (() => {
    let _classDecorators = [element('hamburger-button')];
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
            __runInitializers(_classThis, _classExtraInitializers);
        }
        lineThickness = __runInitializers(this, _lineThickness_initializers, 2);
        lineLength = (__runInitializers(this, _lineThickness_extraInitializers), __runInitializers(this, _lineLength_initializers, 0.8));
        activated = (__runInitializers(this, _lineLength_extraInitializers), __runInitializers(this, _activated_initializers, false));
        get root() {
            return this;
        }
        set root(_v) { }
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
    };
    return HamburgerButton = _classThis;
})();
export { HamburgerButton };
//////////////////////////////////////////////////////////////////////////
function memoize(obj, ...keys) {
    // @ts-expect-error valid indexed access
    for (const key of keys)
        obj[key] = createMemo(obj[key]);
}
//# sourceMappingURL=App.js.map