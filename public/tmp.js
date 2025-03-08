;(function anonymous(tmpls, exprs, r) {
	const _$el23 = r.untrack(() => document.importNode(tmpls[0].content.firstChild, true)),
		_$el24 = _$el23.firstChild,
		_$el25 = _$el24.nextSibling,
		_$el26 = _$el25.firstChild,
		_$el27 = _$el25.nextSibling,
		_$el28 = _$el27.firstChild,
		_fn1 = doNotWrap => {
			_$el28.xstyle = !doNotWrap ? exprs[1]() : exprs[1]
		},
		_$v29 = {},
		_fn2 = doNotWrap => {
			r.style(_$el28, !doNotWrap ? exprs[2]() : exprs[2], _$v29)
		},
		_fn3 = doNotWrap => {
			_$el28.size = !doNotWrap ? exprs[3]() : exprs[3]
		},
		_$el30 = _$el28.firstChild,
		_$el31 = _$el30.firstChild,
		_$el32 = _$el31.nextSibling,
		_$v33 = {},
		_fn4 = doNotWrap => {
			r.style(_$el32, !doNotWrap ? exprs[4]() : exprs[4], _$v33)
		},
		_$el34 = _$el32.firstChild,
		_$el35 = _$el34.nextSibling,
		_$el36 = _$el28.nextSibling,
		_$el37 = _$el36.firstChild,
		_fn7 = doNotWrap => {
			_$el37.size = !doNotWrap ? exprs[7]() : exprs[7]
		},
		_$el38 = _$el37.firstChild,
		_$el39 = _$el38.nextSibling,
		_$el40 = _$el39.nextSibling,
		_fn8 = doNotWrap => {
			_$el40.visible = !doNotWrap ? exprs[8]() : exprs[8]
		},
		_fn9 = doNotWrap => {
			_$el40.size = !doNotWrap ? exprs[9]() : exprs[9]
		},
		_$el41 = _$el40.firstChild,
		_$el42 = _$el41.firstChild,
		_$el43 = _$el42.nextSibling,
		_$el44 = _$el40.nextSibling,
		_$el45 = _$el44.nextSibling,
		_$el46 = _$el45.nextSibling,
		_$el47 = _$el46.nextSibling,
		_fn10 = doNotWrap => {
			_$el47.visible = !doNotWrap ? exprs[10]() : exprs[10]
		},
		_fn11 = doNotWrap => {
			_$el47.size = !doNotWrap ? exprs[11]() : exprs[11]
		},
		_$el48 = _$el47.firstChild,
		_$el49 = _$el48.firstChild,
		_$el50 = _$el49.nextSibling,
		_$el51 = _$el47.nextSibling,
		_$el52 = _$el37.nextSibling
	exprs[0](_$el25)
	typeof exprs[1] === 'function' ? r.effect(_fn1) : _fn1(true)
	typeof exprs[2] === 'function' ? r.effect(_fn2) : _fn2(true)
	typeof exprs[3] === 'function' ? r.effect(_fn3) : _fn3(true)
	typeof exprs[4] === 'function' ? r.effect(_fn4) : _fn4(true)
	exprs[5](_$el36)
	exprs[6](_$el37)
	typeof exprs[7] === 'function' ? r.effect(_fn7) : _fn7(true)
	typeof exprs[8] === 'function' ? r.effect(_fn8) : _fn8(true)
	typeof exprs[9] === 'function' ? r.effect(_fn9) : _fn9(true)
	typeof exprs[10] === 'function' ? r.effect(_fn10) : _fn10(true)
	typeof exprs[11] === 'function' ? r.effect(_fn11) : _fn11(true)
	r.insert(_$el36, r.createComponent(exprs[12], r.wrapProps({ref: exprs[13]})), _$el52)
	return _$el23
})
