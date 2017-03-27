/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_content__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });


let state = {
	content: __WEBPACK_IMPORTED_MODULE_0__content_content__["a" /* content */],
	chartSettings: {
		inset: 50,
		width: null,
		dotSize: 20
	}

};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export siblings */
/* unused harmony export closest */
/* unused harmony export delegate */
/* unused harmony export addClass */
/* unused harmony export removeClass */
/* unused harmony export IEdetection */
/* unused harmony export detectChrome */
/* unused harmony export loadMaterialIcons */
/* unused harmony export addStyleSheetToHead */
/* unused harmony export addScriptToHead */
/* unused harmony export detectIE */
/* Utility functions */
function siblings(selector) {
	var element = document.querySelector(selector);
	var childElements = Array.from(element.parentNode.children);
	return childElements.filter(function (child) {
		return child !== element;
	});
}

function closest(element, query) {
	while (!!element && element !== document) {
		if (!Element.prototype.matches) {
			/* polyfill of matches method for IE */
			Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(query),
				    i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
		} else if (element.matches(query)) {
			return element;
		}
		element = element.parentNode;
	}
	return null;
}

function delegate(selector, eventName, targetSelector, listener) {
	document.querySelector(selector).addEventListener(eventName, function (event) {
		var closestMatch = closest(event.target, targetSelector);
		if (closestMatch) {
			event.delegateTarget = closestMatch;
			listener(event);
		}
	});
}

const randomNumber = (low, high) => Math.floor(Math.random() * high) + low;
/* unused harmony export randomNumber */


function addClass(elem, className) {
	if (!!elem.classList) {
		elem.classList.add(className);
	} else {
		elem.className += ' ' + className;
	}
}
function removeClass(elem, className) {
	if (!!elem) {
		if (elem.classList) {
			elem.classList.remove(className);
		} else {
			elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}
}

function IEdetection() {
	console.warn('running IE detect');
	let ie = function () {
		let undef,
		    v = 3,
		    div = document.createElement('div'),
		    all = div.getElementsByTagName('i');
		while (div.innerHTML = '<!--[if gt IE ' + ++v + ']><i></i><![endif]-->', all[0]);
		return v > 4 ? v : undef;
	}();
	console.warn('IE version', ie);
	if (ie <= 11) {
		document.getElementById('appContainer').innerHTML = 'Sorry, this feature is not supported in your browser.';
		/*document.getElementById('appContainer').style.display = 'none';
  document.getElementById('popupContainer').style.display = 'none';*/
	} else {
			//document.getElementById('ieDetect').innerHTML = '';
			//document.getElementById('ieDetect').style.display = 'none';
		}
}

function detectChrome() {
	// please note, 
	// that IE11 now returns undefined again for window.chrome
	// and new Opera 30 outputs true for window.chrome
	// and new IE Edge outputs to true now for window.chrome
	// and if not iOS Chrome check
	// so use the below updated condition
	var isChromium = window.chrome,
	    winNav = window.navigator,
	    vendorName = winNav.vendor,
	    isOpera = winNav.userAgent.indexOf("OPR") > -1,
	    isIEedge = winNav.userAgent.indexOf("Edge") > -1,
	    isIOSChrome = winNav.userAgent.match("CriOS");

	if (isIOSChrome) {
		// is Google Chrome on IOS
		return false;
	} else if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
		// is Google Chrome
		return true;
	} else {
		// not Google Chrome 
		return false;
	}
}

function loadMaterialIcons() {
	let head = document.getElementsByTagName('head')[0];
	let iconFont = document.createElement('link');
	iconFont.id = 'mdlIconFont';
	iconFont.rel = 'stylesheet';
	iconFont.type = 'text/css';
	iconFont.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
	iconFont.media = 'all';
	head.appendChild(iconFont);
}
function addStyleSheetToHead(url, className) {
	let head = document.getElementsByTagName('head')[0];
	let link = document.createElement('link');
	link.className = className || 'ndi-customStyleSheet';
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = url;
	link.media = 'all';
	head.appendChild(link);
}
function addScriptToHead(url, className) {
	let head = document.getElementsByTagName('head')[0];
	let scriptFile = document.createElement('script');
	scriptFile.className = className || 'ndi-customScripts';;
	scriptFile.type = 'text/javascript';
	scriptFile.src = url;
	head.appendChild(scriptFile);
}

const isMobileDevice = () => {
	const mobile = /iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream;
	return mobile ? true : false;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = isMobileDevice;


const isIOSDevice = () => {
	const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	return ios ? true : false;
};

function detectIE() {
	const ua = window.navigator.userAgent;
	// Test values; Uncomment to check result …
	// IE 10
	// ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

	// IE 11
	// ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

	// Edge 12 (Spartan)
	// ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

	// Edge 13
	// ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

	let msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}
	let trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		let rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}
	let edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}
	// other browser
	return false;
}

const addEvent = function (object, type, callback) {
	if (object == null || typeof object == 'undefined') {
		console.error(`Cannot add ${type} to ${object}. Object not recognised`);
		return;
	}
	if (object.addEventListener) {
		object.addEventListener(type, callback, false);
	} else if (object.attachEvent) {
		object.attachEvent("on" + type, callback);
	} else {
		object["on" + type] = callback;
	}
};
/* unused harmony export addEvent */


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slopeChart_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slopeChart_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__slopeChart_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dot_dot__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line_line__ = __webpack_require__(7);





class Slope_Chart {
	constructor(props) {
		this.props = props;
		this.createElements = this.createElements.bind(this);
		this.renderDots = this.renderDots.bind(this);
		this.renderLines = this.renderLines.bind(this);
	}

	createElements() {
		let { entries } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].content;
		let { inset, width, dotSize } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].chartSettings;

		Object.keys(entries).map(key => {
			let entry = entries[key];
			entries[key].dot_left = new __WEBPACK_IMPORTED_MODULE_2__dot_dot__["a" /* default */]({
				valX: inset,
				valY: 0 - entry.first - inset,
				label: entry.label
			});
			entries[key].dot_right = new __WEBPACK_IMPORTED_MODULE_2__dot_dot__["a" /* default */]({
				valX: width - inset - dotSize,
				valY: 0 - entry.second - inset,
				label: entry.label
			});
			entries[key].line = new __WEBPACK_IMPORTED_MODULE_3__line_line__["a" /* default */]({
				x1: 0 + inset + dotSize,
				x2: width - inset - dotSize,
				y1: 0 - entry.first - inset + dotSize / 2,
				y2: 0 - entry.second - inset + dotSize / 2
			});
		});
	}

	renderDots(side) {
		let { entries } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].content;
		return Object.keys(entries).map(key => entries[key][`dot_${side}`].template()).join('');
	}

	renderLines() {
		let { entries } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].content;
		return Object.keys(entries).map(key => {
			return entries[key].line.template();
		}).join('');
	}

	template() {
		this.createElements();
		let { width } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].chartSettings;
		return `<div class="${__WEBPACK_IMPORTED_MODULE_1__slopeChart_css___default.a.container}" >
			<div class="${__WEBPACK_IMPORTED_MODULE_1__slopeChart_css___default.a.lineContainer}" >
				${this.renderLines()}
			</div>
			<div class="${__WEBPACK_IMPORTED_MODULE_1__slopeChart_css___default.a.dotContainer}" >
				${this.renderDots('left')}
				${this.renderDots('right')}
			</div>
		</div>`;
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slope_Chart;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"app__common___JWRTf boilerplate__reset___GlCEE"};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_utility__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_slopeChart_slopeChart__ = __webpack_require__(2);







__WEBPACK_IMPORTED_MODULE_1__state__["a" /* state */].chartSettings.width = document.querySelector('#appContainer').getBoundingClientRect().width;
const isMobile = __WEBPACK_IMPORTED_MODULE_2__functions_utility__["a" /* isMobileDevice */](); // true or false

const slopeChart = new __WEBPACK_IMPORTED_MODULE_3__templates_slopeChart_slopeChart__["a" /* default */]();

document.querySelector('#appContainer').innerHTML = slopeChart.template();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return content; });
let content = {
	title: 'test title',

	entries: {
		set1: {
			label: 'Some label',
			first: 50,
			second: 170
		},
		set2: {
			label: 'Some label',
			first: 100,
			second: 120
		},
		set3: {
			label: 'Some label',
			first: 150,
			second: 160
		},
		set4: {
			label: 'Some label',
			first: 40,
			second: 100
		},
		set5: {
			label: 'Some label',
			first: 250,
			second: 260
		}
	}

};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dot_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dot_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dot_css__);


class Dot {
	constructor({ valX = 0, valY = 0, label = '' } = {}) {
		this.valX = valX;
		this.valY = valY;
		this.label = label;
	}

	template() {
		return `<div 
			class="${__WEBPACK_IMPORTED_MODULE_0__dot_css___default.a.dot}"
			style="transform: translate3d(${this.valX}px, ${this.valY}px, 0)"
		></div>`;
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dot;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__line_css__);


class Line {
	constructor({ x1 = 0, x2 = 0, y1 = 0, y2 = 0 } = {}) {
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
	}

	template() {
		console.log(`x1="${this.x1}" y1="${this.y1}" x2="${this.x2}" y2="${this.y2}" `);
		return `
			<svg class="${__WEBPACK_IMPORTED_MODULE_0__line_css___default.a.svgLineWrapper}">
				<line class="${__WEBPACK_IMPORTED_MODULE_0__line_css___default.a.svgLine}"
					x1="${this.x1}" y1="${this.y1}" 
					x2="${this.x2}" y2="${this.y2}" 
				/>
			</svg>
		`;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Line;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dot":"dot__dot___3IQ_J"};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"svgLineWrapper":"line__svgLineWrapper___1aXgA","svgLine":"line__svgLine___2YZTo"};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"slopeChart__container___czTU4","lineContainer":"slopeChart__lineContainer___3LePK"};

/***/ })
/******/ ]);