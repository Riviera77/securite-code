/*! @license DOMPurify 2.3.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.4/LICENSE */
!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define(t)
		: ((e = e || self).DOMPurify = t());
})(this, function () {
	'use strict';
	var e = Object.hasOwnProperty,
		t = Object.setPrototypeOf,
		n = Object.isFrozen,
		r = Object.getPrototypeOf,
		o = Object.getOwnPropertyDescriptor,
		i = Object.freeze,
		a = Object.seal,
		l = Object.create,
		c = 'undefined' != typeof Reflect && Reflect,
		s = c.apply,
		u = c.construct;
	s ||
		(s = function (e, t, n) {
			return e.apply(t, n);
		}),
		i ||
			(i = function (e) {
				return e;
			}),
		a ||
			(a = function (e) {
				return e;
			}),
		u ||
			(u = function (e, t) {
				return new (Function.prototype.bind.apply(
					e,
					[null].concat(
						(function (e) {
							if (Array.isArray(e)) {
								for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
								return n;
							}
							return Array.from(e);
						})(t),
					),
				))();
			});
	var m,
		f = A(Array.prototype.forEach),
		d = A(Array.prototype.pop),
		p = A(Array.prototype.push),
		h = A(String.prototype.toLowerCase),
		g = A(String.prototype.match),
		y = A(String.prototype.replace),
		v = A(String.prototype.indexOf),
		b = A(String.prototype.trim),
		T = A(RegExp.prototype.test),
		N =
			((m = TypeError),
			function () {
				for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return u(m, t);
			});
	function A(e) {
		return function (t) {
			for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
			return s(e, t, r);
		};
	}
	function E(e, r) {
		t && t(e, null);
		for (var o = r.length; o--; ) {
			var i = r[o];
			if ('string' == typeof i) {
				var a = h(i);
				a !== i && (n(r) || (r[o] = a), (i = a));
			}
			e[i] = !0;
		}
		return e;
	}
	function x(t) {
		var n = l(null),
			r = void 0;
		for (r in t) s(e, t, [r]) && (n[r] = t[r]);
		return n;
	}
	function k(e, t) {
		for (; null !== e; ) {
			var n = o(e, t);
			if (n) {
				if (n.get) return A(n.get);
				if ('function' == typeof n.value) return A(n.value);
			}
			e = r(e);
		}
		return function (e) {
			return console.warn('fallback value for', e), null;
		};
	}
	var S = i([
			'a',
			'abbr',
			'acronym',
			'address',
			'area',
			'article',
			'aside',
			'audio',
			'b',
			'bdi',
			'bdo',
			'big',
			'blink',
			'blockquote',
			'body',
			'br',
			'button',
			'canvas',
			'caption',
			'center',
			'cite',
			'code',
			'col',
			'colgroup',
			'content',
			'data',
			'datalist',
			'dd',
			'decorator',
			'del',
			'details',
			'dfn',
			'dialog',
			'dir',
			'div',
			'dl',
			'dt',
			'element',
			'em',
			'fieldset',
			'figcaption',
			'figure',
			'font',
			'footer',
			'form',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'head',
			'header',
			'hgroup',
			'hr',
			'html',
			'i',
			'img',
			'input',
			'ins',
			'kbd',
			'label',
			'legend',
			'li',
			'main',
			'map',
			'mark',
			'marquee',
			'menu',
			'menuitem',
			'meter',
			'nav',
			'nobr',
			'ol',
			'optgroup',
			'option',
			'output',
			'p',
			'picture',
			'pre',
			'progress',
			'q',
			'rp',
			'rt',
			'ruby',
			's',
			'samp',
			'section',
			'select',
			'shadow',
			'small',
			'source',
			'spacer',
			'span',
			'strike',
			'strong',
			'style',
			'sub',
			'summary',
			'sup',
			'table',
			'tbody',
			'td',
			'template',
			'textarea',
			'tfoot',
			'th',
			'thead',
			'time',
			'tr',
			'track',
			'tt',
			'u',
			'ul',
			'var',
			'video',
			'wbr',
		]),
		w = i([
			'svg',
			'a',
			'altglyph',
			'altglyphdef',
			'altglyphitem',
			'animatecolor',
			'animatemotion',
			'animatetransform',
			'circle',
			'clippath',
			'defs',
			'desc',
			'ellipse',
			'filter',
			'font',
			'g',
			'glyph',
			'glyphref',
			'hkern',
			'image',
			'line',
			'lineargradient',
			'marker',
			'mask',
			'metadata',
			'mpath',
			'path',
			'pattern',
			'polygon',
			'polyline',
			'radialgradient',
			'rect',
			'stop',
			'style',
			'switch',
			'symbol',
			'text',
			'textpath',
			'title',
			'tref',
			'tspan',
			'view',
			'vkern',
		]),
		_ = i([
			'feBlend',
			'feColorMatrix',
			'feComponentTransfer',
			'feComposite',
			'feConvolveMatrix',
			'feDiffuseLighting',
			'feDisplacementMap',
			'feDistantLight',
			'feFlood',
			'feFuncA',
			'feFuncB',
			'feFuncG',
			'feFuncR',
			'feGaussianBlur',
			'feImage',
			'feMerge',
			'feMergeNode',
			'feMorphology',
			'feOffset',
			'fePointLight',
			'feSpecularLighting',
			'feSpotLight',
			'feTile',
			'feTurbulence',
		]),
		O = i([
			'animate',
			'color-profile',
			'cursor',
			'discard',
			'fedropshadow',
			'font-face',
			'font-face-format',
			'font-face-name',
			'font-face-src',
			'font-face-uri',
			'foreignobject',
			'hatch',
			'hatchpath',
			'mesh',
			'meshgradient',
			'meshpatch',
			'meshrow',
			'missing-glyph',
			'script',
			'set',
			'solidcolor',
			'unknown',
			'use',
		]),
		D = i([
			'math',
			'menclose',
			'merror',
			'mfenced',
			'mfrac',
			'mglyph',
			'mi',
			'mlabeledtr',
			'mmultiscripts',
			'mn',
			'mo',
			'mover',
			'mpadded',
			'mphantom',
			'mroot',
			'mrow',
			'ms',
			'mspace',
			'msqrt',
			'mstyle',
			'msub',
			'msup',
			'msubsup',
			'mtable',
			'mtd',
			'mtext',
			'mtr',
			'munder',
			'munderover',
		]),
		M = i([
			'maction',
			'maligngroup',
			'malignmark',
			'mlongdiv',
			'mscarries',
			'mscarry',
			'msgroup',
			'mstack',
			'msline',
			'msrow',
			'semantics',
			'annotation',
			'annotation-xml',
			'mprescripts',
			'none',
		]),
		C = i(['#text']),
		L = i([
			'accept',
			'action',
			'align',
			'alt',
			'autocapitalize',
			'autocomplete',
			'autopictureinpicture',
			'autoplay',
			'background',
			'bgcolor',
			'border',
			'capture',
			'cellpadding',
			'cellspacing',
			'checked',
			'cite',
			'class',
			'clear',
			'color',
			'cols',
			'colspan',
			'controls',
			'controlslist',
			'coords',
			'crossorigin',
			'datetime',
			'decoding',
			'default',
			'dir',
			'disabled',
			'disablepictureinpicture',
			'disableremoteplayback',
			'download',
			'draggable',
			'enctype',
			'enterkeyhint',
			'face',
			'for',
			'headers',
			'height',
			'hidden',
			'high',
			'href',
			'hreflang',
			'id',
			'inputmode',
			'integrity',
			'ismap',
			'kind',
			'label',
			'lang',
			'list',
			'loading',
			'loop',
			'low',
			'max',
			'maxlength',
			'media',
			'method',
			'min',
			'minlength',
			'multiple',
			'muted',
			'name',
			'nonce',
			'noshade',
			'novalidate',
			'nowrap',
			'open',
			'optimum',
			'pattern',
			'placeholder',
			'playsinline',
			'poster',
			'preload',
			'pubdate',
			'radiogroup',
			'readonly',
			'rel',
			'required',
			'rev',
			'reversed',
			'role',
			'rows',
			'rowspan',
			'spellcheck',
			'scope',
			'selected',
			'shape',
			'size',
			'sizes',
			'span',
			'srclang',
			'start',
			'src',
			'srcset',
			'step',
			'style',
			'summary',
			'tabindex',
			'title',
			'translate',
			'type',
			'usemap',
			'valign',
			'value',
			'width',
			'xmlns',
			'slot',
		]),
		R = i([
			'accent-height',
			'accumulate',
			'additive',
			'alignment-baseline',
			'ascent',
			'attributename',
			'attributetype',
			'azimuth',
			'basefrequency',
			'baseline-shift',
			'begin',
			'bias',
			'by',
			'class',
			'clip',
			'clippathunits',
			'clip-path',
			'clip-rule',
			'color',
			'color-interpolation',
			'color-interpolation-filters',
			'color-profile',
			'color-rendering',
			'cx',
			'cy',
			'd',
			'dx',
			'dy',
			'diffuseconstant',
			'direction',
			'display',
			'divisor',
			'dur',
			'edgemode',
			'elevation',
			'end',
			'fill',
			'fill-opacity',
			'fill-rule',
			'filter',
			'filterunits',
			'flood-color',
			'flood-opacity',
			'font-family',
			'font-size',
			'font-size-adjust',
			'font-stretch',
			'font-style',
			'font-variant',
			'font-weight',
			'fx',
			'fy',
			'g1',
			'g2',
			'glyph-name',
			'glyphref',
			'gradientunits',
			'gradienttransform',
			'height',
			'href',
			'id',
			'image-rendering',
			'in',
			'in2',
			'k',
			'k1',
			'k2',
			'k3',
			'k4',
			'kerning',
			'keypoints',
			'keysplines',
			'keytimes',
			'lang',
			'lengthadjust',
			'letter-spacing',
			'kernelmatrix',
			'kernelunitlength',
			'lighting-color',
			'local',
			'marker-end',
			'marker-mid',
			'marker-start',
			'markerheight',
			'markerunits',
			'markerwidth',
			'maskcontentunits',
			'maskunits',
			'max',
			'mask',
			'media',
			'method',
			'mode',
			'min',
			'name',
			'numoctaves',
			'offset',
			'operator',
			'opacity',
			'order',
			'orient',
			'orientation',
			'origin',
			'overflow',
			'paint-order',
			'path',
			'pathlength',
			'patterncontentunits',
			'patterntransform',
			'patternunits',
			'points',
			'preservealpha',
			'preserveaspectratio',
			'primitiveunits',
			'r',
			'rx',
			'ry',
			'radius',
			'refx',
			'refy',
			'repeatcount',
			'repeatdur',
			'restart',
			'result',
			'rotate',
			'scale',
			'seed',
			'shape-rendering',
			'specularconstant',
			'specularexponent',
			'spreadmethod',
			'startoffset',
			'stddeviation',
			'stitchtiles',
			'stop-color',
			'stop-opacity',
			'stroke-dasharray',
			'stroke-dashoffset',
			'stroke-linecap',
			'stroke-linejoin',
			'stroke-miterlimit',
			'stroke-opacity',
			'stroke',
			'stroke-width',
			'style',
			'surfacescale',
			'systemlanguage',
			'tabindex',
			'targetx',
			'targety',
			'transform',
			'text-anchor',
			'text-decoration',
			'text-rendering',
			'textlength',
			'type',
			'u1',
			'u2',
			'unicode',
			'values',
			'viewbox',
			'visibility',
			'version',
			'vert-adv-y',
			'vert-origin-x',
			'vert-origin-y',
			'width',
			'word-spacing',
			'wrap',
			'writing-mode',
			'xchannelselector',
			'ychannelselector',
			'x',
			'x1',
			'x2',
			'xmlns',
			'y',
			'y1',
			'y2',
			'z',
			'zoomandpan',
		]),
		I = i([
			'accent',
			'accentunder',
			'align',
			'bevelled',
			'close',
			'columnsalign',
			'columnlines',
			'columnspan',
			'denomalign',
			'depth',
			'dir',
			'display',
			'displaystyle',
			'encoding',
			'fence',
			'frame',
			'height',
			'href',
			'id',
			'largeop',
			'length',
			'linethickness',
			'lspace',
			'lquote',
			'mathbackground',
			'mathcolor',
			'mathsize',
			'mathvariant',
			'maxsize',
			'minsize',
			'movablelimits',
			'notation',
			'numalign',
			'open',
			'rowalign',
			'rowlines',
			'rowspacing',
			'rowspan',
			'rspace',
			'rquote',
			'scriptlevel',
			'scriptminsize',
			'scriptsizemultiplier',
			'selection',
			'separator',
			'separators',
			'stretchy',
			'subscriptshift',
			'supscriptshift',
			'symmetric',
			'voffset',
			'width',
			'xmlns',
		]),
		F = i(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
		H = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
		U = a(/<%[\s\S]*|[\s\S]*%>/gm),
		z = a(/^data-[\-\w.\u00B7-\uFFFF]/),
		B = a(/^aria-[\-\w]+$/),
		j = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
		P = a(/^(?:\w+script|data):/i),
		G = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
		W =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  };
	function q(e) {
		if (Array.isArray(e)) {
			for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n;
		}
		return Array.from(e);
	}
	var Y = function () {
			return 'undefined' == typeof window ? null : window;
		},
		K = function (e, t) {
			if ('object' !== (void 0 === e ? 'undefined' : W(e)) || 'function' != typeof e.createPolicy) return null;
			var n = null,
				r = 'data-tt-policy-suffix';
			t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
			var o = 'dompurify' + (n ? '#' + n : '');
			try {
				return e.createPolicy(o, {
					createHTML: function (e) {
						return e;
					},
				});
			} catch (e) {
				return console.warn('TrustedTypes policy ' + o + ' could not be created.'), null;
			}
		};
	return (function e() {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y(),
			n = function (t) {
				return e(t);
			};
		if (((n.version = '2.3.4'), (n.removed = []), !t || !t.document || 9 !== t.document.nodeType))
			return (n.isSupported = !1), n;
		var r = t.document,
			o = t.document,
			a = t.DocumentFragment,
			l = t.HTMLTemplateElement,
			c = t.Node,
			s = t.Element,
			u = t.NodeFilter,
			m = t.NamedNodeMap,
			A = void 0 === m ? t.NamedNodeMap || t.MozNamedAttrMap : m,
			V = t.HTMLFormElement,
			X = t.DOMParser,
			$ = t.trustedTypes,
			Z = s.prototype,
			J = k(Z, 'cloneNode'),
			Q = k(Z, 'nextSibling'),
			ee = k(Z, 'childNodes'),
			te = k(Z, 'parentNode');
		if ('function' == typeof l) {
			var ne = o.createElement('template');
			ne.content && ne.content.ownerDocument && (o = ne.content.ownerDocument);
		}
		var re = K($, r),
			oe = re && Fe ? re.createHTML('') : '',
			ie = o,
			ae = ie.implementation,
			le = ie.createNodeIterator,
			ce = ie.createDocumentFragment,
			se = ie.getElementsByTagName,
			ue = r.importNode,
			me = {};
		try {
			me = x(o).documentMode ? o.documentMode : {};
		} catch (e) {}
		var fe = {};
		n.isSupported = 'function' == typeof te && ae && void 0 !== ae.createHTMLDocument && 9 !== me;
		var de = H,
			pe = U,
			he = z,
			ge = B,
			ye = P,
			ve = G,
			be = j,
			Te = null,
			Ne = E({}, [].concat(q(S), q(w), q(_), q(D), q(C))),
			Ae = null,
			Ee = E({}, [].concat(q(L), q(R), q(I), q(F))),
			xe = Object.seal(
				Object.create(null, {
					tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
					attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
					allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 },
				}),
			),
			ke = null,
			Se = null,
			we = !0,
			_e = !0,
			Oe = !1,
			De = !1,
			Me = !1,
			Ce = !1,
			Le = !1,
			Re = !1,
			Ie = !1,
			Fe = !1,
			He = !0,
			Ue = !0,
			ze = !1,
			Be = {},
			je = null,
			Pe = E({}, [
				'annotation-xml',
				'audio',
				'colgroup',
				'desc',
				'foreignobject',
				'head',
				'iframe',
				'math',
				'mi',
				'mn',
				'mo',
				'ms',
				'mtext',
				'noembed',
				'noframes',
				'noscript',
				'plaintext',
				'script',
				'style',
				'svg',
				'template',
				'thead',
				'title',
				'video',
				'xmp',
			]),
			Ge = null,
			We = E({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
			qe = null,
			Ye = E({}, [
				'alt',
				'class',
				'for',
				'id',
				'label',
				'name',
				'pattern',
				'placeholder',
				'role',
				'summary',
				'title',
				'value',
				'style',
				'xmlns',
			]),
			Ke = 'http://www.w3.org/1998/Math/MathML',
			Ve = 'http://www.w3.org/2000/svg',
			Xe = 'http://www.w3.org/1999/xhtml',
			$e = Xe,
			Ze = !1,
			Je = void 0,
			Qe = ['application/xhtml+xml', 'text/html'],
			et = 'text/html',
			tt = void 0,
			nt = null,
			rt = o.createElement('form'),
			ot = function (e) {
				return e instanceof RegExp || e instanceof Function;
			},
			it = function (e) {
				(nt && nt === e) ||
					((e && 'object' === (void 0 === e ? 'undefined' : W(e))) || (e = {}),
					(e = x(e)),
					(Te = 'ALLOWED_TAGS' in e ? E({}, e.ALLOWED_TAGS) : Ne),
					(Ae = 'ALLOWED_ATTR' in e ? E({}, e.ALLOWED_ATTR) : Ee),
					(qe = 'ADD_URI_SAFE_ATTR' in e ? E(x(Ye), e.ADD_URI_SAFE_ATTR) : Ye),
					(Ge = 'ADD_DATA_URI_TAGS' in e ? E(x(We), e.ADD_DATA_URI_TAGS) : We),
					(je = 'FORBID_CONTENTS' in e ? E({}, e.FORBID_CONTENTS) : Pe),
					(ke = 'FORBID_TAGS' in e ? E({}, e.FORBID_TAGS) : {}),
					(Se = 'FORBID_ATTR' in e ? E({}, e.FORBID_ATTR) : {}),
					(Be = 'USE_PROFILES' in e && e.USE_PROFILES),
					(we = !1 !== e.ALLOW_ARIA_ATTR),
					(_e = !1 !== e.ALLOW_DATA_ATTR),
					(Oe = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
					(De = e.SAFE_FOR_TEMPLATES || !1),
					(Me = e.WHOLE_DOCUMENT || !1),
					(Re = e.RETURN_DOM || !1),
					(Ie = e.RETURN_DOM_FRAGMENT || !1),
					(Fe = e.RETURN_TRUSTED_TYPE || !1),
					(Le = e.FORCE_BODY || !1),
					(He = !1 !== e.SANITIZE_DOM),
					(Ue = !1 !== e.KEEP_CONTENT),
					(ze = e.IN_PLACE || !1),
					(be = e.ALLOWED_URI_REGEXP || be),
					($e = e.NAMESPACE || Xe),
					e.CUSTOM_ELEMENT_HANDLING &&
						ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
						(xe.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
					e.CUSTOM_ELEMENT_HANDLING &&
						ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
						(xe.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
					e.CUSTOM_ELEMENT_HANDLING &&
						'boolean' == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
						(xe.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
					(Je = Je = -1 === Qe.indexOf(e.PARSER_MEDIA_TYPE) ? et : e.PARSER_MEDIA_TYPE),
					(tt =
						'application/xhtml+xml' === Je
							? function (e) {
									return e;
							  }
							: h),
					De && (_e = !1),
					Ie && (Re = !0),
					Be &&
						((Te = E({}, [].concat(q(C)))),
						(Ae = []),
						!0 === Be.html && (E(Te, S), E(Ae, L)),
						!0 === Be.svg && (E(Te, w), E(Ae, R), E(Ae, F)),
						!0 === Be.svgFilters && (E(Te, _), E(Ae, R), E(Ae, F)),
						!0 === Be.mathMl && (E(Te, D), E(Ae, I), E(Ae, F))),
					e.ADD_TAGS && (Te === Ne && (Te = x(Te)), E(Te, e.ADD_TAGS)),
					e.ADD_ATTR && (Ae === Ee && (Ae = x(Ae)), E(Ae, e.ADD_ATTR)),
					e.ADD_URI_SAFE_ATTR && E(qe, e.ADD_URI_SAFE_ATTR),
					e.FORBID_CONTENTS && (je === Pe && (je = x(je)), E(je, e.FORBID_CONTENTS)),
					Ue && (Te['#text'] = !0),
					Me && E(Te, ['html', 'head', 'body']),
					Te.table && (E(Te, ['tbody']), delete ke.tbody),
					i && i(e),
					(nt = e));
			},
			at = E({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
			lt = E({}, ['foreignobject', 'desc', 'title', 'annotation-xml']),
			ct = E({}, w);
		E(ct, _), E(ct, O);
		var st = E({}, D);
		E(st, M);
		var ut = function (e) {
				var t = te(e);
				(t && t.tagName) || (t = { namespaceURI: Xe, tagName: 'template' });
				var n = h(e.tagName),
					r = h(t.tagName);
				if (e.namespaceURI === Ve)
					return t.namespaceURI === Xe
						? 'svg' === n
						: t.namespaceURI === Ke
						? 'svg' === n && ('annotation-xml' === r || at[r])
						: Boolean(ct[n]);
				if (e.namespaceURI === Ke)
					return t.namespaceURI === Xe ? 'math' === n : t.namespaceURI === Ve ? 'math' === n && lt[r] : Boolean(st[n]);
				if (e.namespaceURI === Xe) {
					if (t.namespaceURI === Ve && !lt[r]) return !1;
					if (t.namespaceURI === Ke && !at[r]) return !1;
					var o = E({}, ['title', 'style', 'font', 'a', 'script']);
					return !st[n] && (o[n] || !ct[n]);
				}
				return !1;
			},
			mt = function (e) {
				p(n.removed, { element: e });
				try {
					e.parentNode.removeChild(e);
				} catch (t) {
					try {
						e.outerHTML = oe;
					} catch (t) {
						e.remove();
					}
				}
			},
			ft = function (e, t) {
				try {
					p(n.removed, { attribute: t.getAttributeNode(e), from: t });
				} catch (e) {
					p(n.removed, { attribute: null, from: t });
				}
				if ((t.removeAttribute(e), 'is' === e && !Ae[e]))
					if (Re || Ie)
						try {
							mt(t);
						} catch (e) {}
					else
						try {
							t.setAttribute(e, '');
						} catch (e) {}
			},
			dt = function (e) {
				var t = void 0,
					n = void 0;
				if (Le) e = '<remove></remove>' + e;
				else {
					var r = g(e, /^[\r\n\t ]+/);
					n = r && r[0];
				}
				'application/xhtml+xml' === Je &&
					(e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + '</body></html>');
				var i = re ? re.createHTML(e) : e;
				if ($e === Xe)
					try {
						t = new X().parseFromString(i, Je);
					} catch (e) {}
				if (!t || !t.documentElement) {
					t = ae.createDocument($e, 'template', null);
					try {
						t.documentElement.innerHTML = Ze ? '' : i;
					} catch (e) {}
				}
				var a = t.body || t.documentElement;
				return (
					e && n && a.insertBefore(o.createTextNode(n), a.childNodes[0] || null),
					$e === Xe ? se.call(t, Me ? 'html' : 'body')[0] : Me ? t.documentElement : a
				);
			},
			pt = function (e) {
				return le.call(e.ownerDocument || e, e, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT, null, !1);
			},
			ht = function (e) {
				return (
					e instanceof V &&
					('string' != typeof e.nodeName ||
						'string' != typeof e.textContent ||
						'function' != typeof e.removeChild ||
						!(e.attributes instanceof A) ||
						'function' != typeof e.removeAttribute ||
						'function' != typeof e.setAttribute ||
						'string' != typeof e.namespaceURI ||
						'function' != typeof e.insertBefore)
				);
			},
			gt = function (e) {
				return 'object' === (void 0 === c ? 'undefined' : W(c))
					? e instanceof c
					: e &&
							'object' === (void 0 === e ? 'undefined' : W(e)) &&
							'number' == typeof e.nodeType &&
							'string' == typeof e.nodeName;
			},
			yt = function (e, t, r) {
				fe[e] &&
					f(fe[e], function (e) {
						e.call(n, t, r, nt);
					});
			},
			vt = function (e) {
				var t = void 0;
				if ((yt('beforeSanitizeElements', e, null), ht(e))) return mt(e), !0;
				if (g(e.nodeName, /[\u0080-\uFFFF]/)) return mt(e), !0;
				var r = tt(e.nodeName);
				if (
					(yt('uponSanitizeElement', e, { tagName: r, allowedTags: Te }),
					!gt(e.firstElementChild) &&
						(!gt(e.content) || !gt(e.content.firstElementChild)) &&
						T(/<[/\w]/g, e.innerHTML) &&
						T(/<[/\w]/g, e.textContent))
				)
					return mt(e), !0;
				if ('select' === r && T(/<template/i, e.innerHTML)) return mt(e), !0;
				if (!Te[r] || ke[r]) {
					if (Ue && !je[r]) {
						var o = te(e) || e.parentNode,
							i = ee(e) || e.childNodes;
						if (i && o) for (var a = i.length - 1; a >= 0; --a) o.insertBefore(J(i[a], !0), Q(e));
					}
					if (!ke[r] && Tt(r)) {
						if (xe.tagNameCheck instanceof RegExp && T(xe.tagNameCheck, r)) return !1;
						if (xe.tagNameCheck instanceof Function && xe.tagNameCheck(r)) return !1;
					}
					return mt(e), !0;
				}
				return e instanceof s && !ut(e)
					? (mt(e), !0)
					: ('noscript' !== r && 'noembed' !== r) || !T(/<\/no(script|embed)/i, e.innerHTML)
					? (De &&
							3 === e.nodeType &&
							((t = e.textContent),
							(t = y(t, de, ' ')),
							(t = y(t, pe, ' ')),
							e.textContent !== t && (p(n.removed, { element: e.cloneNode() }), (e.textContent = t))),
					  yt('afterSanitizeElements', e, null),
					  !1)
					: (mt(e), !0);
			},
			bt = function (e, t, n) {
				if (He && ('id' === t || 'name' === t) && (n in o || n in rt)) return !1;
				if (_e && !Se[t] && T(he, t));
				else if (we && T(ge, t));
				else if (!Ae[t] || Se[t]) {
					if (
						!(
							(Tt(e) &&
								((xe.tagNameCheck instanceof RegExp && T(xe.tagNameCheck, e)) ||
									(xe.tagNameCheck instanceof Function && xe.tagNameCheck(e))) &&
								((xe.attributeNameCheck instanceof RegExp && T(xe.attributeNameCheck, t)) ||
									(xe.attributeNameCheck instanceof Function && xe.attributeNameCheck(t)))) ||
							('is' === t &&
								xe.allowCustomizedBuiltInElements &&
								((xe.tagNameCheck instanceof RegExp && T(xe.tagNameCheck, n)) ||
									(xe.tagNameCheck instanceof Function && xe.tagNameCheck(n))))
						)
					)
						return !1;
				} else if (qe[t]);
				else if (T(be, y(n, ve, '')));
				else if (
					('src' !== t && 'xlink:href' !== t && 'href' !== t) ||
					'script' === e ||
					0 !== v(n, 'data:') ||
					!Ge[e]
				) {
					if (Oe && !T(ye, y(n, ve, '')));
					else if (n) return !1;
				} else;
				return !0;
			},
			Tt = function (e) {
				return e.indexOf('-') > 0;
			},
			Nt = function (e) {
				var t = void 0,
					r = void 0,
					o = void 0,
					i = void 0;
				yt('beforeSanitizeAttributes', e, null);
				var a = e.attributes;
				if (a) {
					var l = { attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: Ae };
					for (i = a.length; i--; ) {
						var c = (t = a[i]),
							s = c.name,
							u = c.namespaceURI;
						if (
							((r = b(t.value)),
							(o = tt(s)),
							(l.attrName = o),
							(l.attrValue = r),
							(l.keepAttr = !0),
							(l.forceKeepAttr = void 0),
							yt('uponSanitizeAttribute', e, l),
							(r = l.attrValue),
							!l.forceKeepAttr && (ft(s, e), l.keepAttr))
						)
							if (T(/\/>/i, r)) ft(s, e);
							else {
								De && ((r = y(r, de, ' ')), (r = y(r, pe, ' ')));
								var m = tt(e.nodeName);
								if (bt(m, o, r))
									try {
										u ? e.setAttributeNS(u, s, r) : e.setAttribute(s, r), d(n.removed);
									} catch (e) {}
							}
					}
					yt('afterSanitizeAttributes', e, null);
				}
			},
			At = function e(t) {
				var n = void 0,
					r = pt(t);
				for (yt('beforeSanitizeShadowDOM', t, null); (n = r.nextNode()); )
					yt('uponSanitizeShadowNode', n, null), vt(n) || (n.content instanceof a && e(n.content), Nt(n));
				yt('afterSanitizeShadowDOM', t, null);
			};
		return (
			(n.sanitize = function (e, o) {
				var i = void 0,
					l = void 0,
					s = void 0,
					u = void 0,
					m = void 0;
				if (((Ze = !e) && (e = '\x3c!--\x3e'), 'string' != typeof e && !gt(e))) {
					if ('function' != typeof e.toString) throw N('toString is not a function');
					if ('string' != typeof (e = e.toString())) throw N('dirty is not a string, aborting');
				}
				if (!n.isSupported) {
					if ('object' === W(t.toStaticHTML) || 'function' == typeof t.toStaticHTML) {
						if ('string' == typeof e) return t.toStaticHTML(e);
						if (gt(e)) return t.toStaticHTML(e.outerHTML);
					}
					return e;
				}
				if ((Ce || it(o), (n.removed = []), 'string' == typeof e && (ze = !1), ze));
				else if (e instanceof c)
					(1 === (l = (i = dt('\x3c!----\x3e')).ownerDocument.importNode(e, !0)).nodeType && 'BODY' === l.nodeName) ||
					'HTML' === l.nodeName
						? (i = l)
						: i.appendChild(l);
				else {
					if (!Re && !De && !Me && -1 === e.indexOf('<')) return re && Fe ? re.createHTML(e) : e;
					if (!(i = dt(e))) return Re ? null : oe;
				}
				i && Le && mt(i.firstChild);
				for (var f = pt(ze ? e : i); (s = f.nextNode()); )
					(3 === s.nodeType && s === u) || vt(s) || (s.content instanceof a && At(s.content), Nt(s), (u = s));
				if (((u = null), ze)) return e;
				if (Re) {
					if (Ie) for (m = ce.call(i.ownerDocument); i.firstChild; ) m.appendChild(i.firstChild);
					else m = i;
					return Ae.shadowroot && (m = ue.call(r, m, !0)), m;
				}
				var d = Me ? i.outerHTML : i.innerHTML;
				return De && ((d = y(d, de, ' ')), (d = y(d, pe, ' '))), re && Fe ? re.createHTML(d) : d;
			}),
			(n.setConfig = function (e) {
				it(e), (Ce = !0);
			}),
			(n.clearConfig = function () {
				(nt = null), (Ce = !1);
			}),
			(n.isValidAttribute = function (e, t, n) {
				nt || it({});
				var r = tt(e),
					o = tt(t);
				return bt(r, o, n);
			}),
			(n.addHook = function (e, t) {
				'function' == typeof t && ((fe[e] = fe[e] || []), p(fe[e], t));
			}),
			(n.removeHook = function (e) {
				fe[e] && d(fe[e]);
			}),
			(n.removeHooks = function (e) {
				fe[e] && (fe[e] = []);
			}),
			(n.removeAllHooks = function () {
				fe = {};
			}),
			n
		);
	})();
});
//# sourceMappingURL=purify.min.js.map
