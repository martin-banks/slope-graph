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


const maxHeight = 400;
const windowHeight = () => window.innerHeight;
const setHeight = () => {
	if (windowHeight() > maxHeight) {
		return maxHeight;
	}
	return windowHeight();
};

const state = {
	content: __WEBPACK_IMPORTED_MODULE_0__content_content__["a" /* default */],
	chartSettings: {
		inset: 50,
		setWidth: () => document.querySelector('#appContainer').getBoundingClientRect().width,
		setHeight: () => windowHeight() > maxHeight ? maxHeight : windowHeight(),
		width: 0,
		height: 0,
		dotSize: 20
	}

};

/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slopeChart_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slopeChart_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__slopeChart_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dot_dot__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line_line__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__axis_axis__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_calcVertPosition__ = __webpack_require__(13);







class SlopeChart {
	constructor(props) {
		this.props = props;
		this.createElements = this.createElements.bind(this);
		// this.renderDots = this.renderDots.bind(this)
		// this.renderLines = this.renderLines.bind(this)
		this.calcRange = this.calcRange.bind(this);
		// this.calcPosition = this.calcPosition.bind(this)
		// this.calcPositionX = this.calcPositionX.bind(this)

		this.state = {};
		this.calcRange();
	}

	calcRange() {
		let { entries } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].content;
		let leftValues = Object.keys(entries).map(key => entries[key].first);
		let rightValues = Object.keys(entries).map(key => entries[key].second);
		this.state.max = Math.max(...leftValues, ...rightValues);
		this.state.min = Math.min(...leftValues, ...rightValues);
		this.state.range = this.state.max - this.state.min;
	}

	// calcPosition({ value: value, max: this.state.max }) {
	// 	let percent = (value / this.state.max)
	// 	return 0 - (state.chartSettings.height * percent)
	// }

	static calcPositionX() {
		let { width, dotSize, inset } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].chartSettings;
		return width - inset - dotSize;
	}

	createElements() {
		let { entries } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].content;
		let { inset, dotSize } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].chartSettings;

		Object.keys(entries).forEach(key => {
			let entry = entries[key];
			let { first, second, label } = entry;

			entries[key].dot_left = new __WEBPACK_IMPORTED_MODULE_2__dot_dot__["a" /* default */]({
				valX: inset,
				valY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__functions_calcVertPosition__["a" /* default */])({ value: first, max: this.state.max }) - dotSize,
				label
			});

			entries[key].dot_right = new __WEBPACK_IMPORTED_MODULE_2__dot_dot__["a" /* default */]({
				valX: SlopeChart.calcPositionX(),
				valY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__functions_calcVertPosition__["a" /* default */])({ value: second, max: this.state.max }) - dotSize,
				label,
				status: first > second ? 'decrease' : 'increase'
			});

			entries[key].line = new __WEBPACK_IMPORTED_MODULE_3__line_line__["a" /* default */]({
				x1: 0 + inset + dotSize,
				x2: SlopeChart.calcPositionX(),
				y1: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__functions_calcVertPosition__["a" /* default */])({ value: first, max: this.state.max }) + dotSize / 2 - dotSize,
				y2: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__functions_calcVertPosition__["a" /* default */])({ value: second, max: this.state.max }) + dotSize / 2 - dotSize
			});
		});

		this.state.axis = new __WEBPACK_IMPORTED_MODULE_4__axis_axis__["a" /* default */]({
			min: this.state.min,
			max: this.state.max,
			width: this.props.chartWidth
		});
	}

	static renderDots(side) {
		let { entries } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].content;
		return Object.keys(entries).map(key => entries[key][`dot_${side}`].template()).join('');
	}

	static renderLines() {
		let { entries } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].content;
		return Object.keys(entries).map(key => entries[key].line.template()).join('');
	}

	template() {
		this.createElements();
		let { height, inset } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].chartSettings;
		return `<div 
			class="${__WEBPACK_IMPORTED_MODULE_1__slopeChart_css___default.a.container}" 
			style="height: ${height + inset}px" >
			
			<div class="${__WEBPACK_IMPORTED_MODULE_1__slopeChart_css___default.a.axisContainer}">
				${this.state.axis.template()}
			</div>
			
			<div class="${__WEBPACK_IMPORTED_MODULE_1__slopeChart_css___default.a.lineContainer}" >
				${SlopeChart.renderLines()}
			</div>
			
			<div class="${__WEBPACK_IMPORTED_MODULE_1__slopeChart_css___default.a.dotContainer}" >
				${SlopeChart.renderDots('left')}
				${SlopeChart.renderDots('right')}
			</div>
		</div>`;
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SlopeChart;


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_debounce__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_slopeChart_slopeChart__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_titleBlock_titleblock__ = __webpack_require__(15);
// import styles from './app.css'

// import * as util from './functions/utility'




// const { isMobileDevice } = util // true or false
const slopeChart = new __WEBPACK_IMPORTED_MODULE_2__templates_slopeChart_slopeChart__["a" /* default */]({ chartWidth: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].chartSettings.width });
const titleBlock = new __WEBPACK_IMPORTED_MODULE_3__templates_titleBlock_titleblock__["a" /* default */]();

function renderChart() {
	const { setWidth, setHeight } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].chartSettings;
	__WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].chartSettings.width = setWidth();
	__WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].chartSettings.height = setHeight();

	document.querySelector('#appContainer').innerHTML = [titleBlock.render(), slopeChart.template()].join('');
}

function addResize() {
	window.addEventListener('resize', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__functions_debounce__["a" /* default */])(renderChart));
	__WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].willResize = true;
}

function startChart() {
	renderChart();
	if (!__WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].willResize) addResize();
}

startChart();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const content = {
	chartTitle: {
		title: 'Chart title',
		intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nisi iusto maxime.'
	},

	entries: {
		set1: {
			label: 'Some label',
			first: 200,
			second: 170
		},
		set2: {
			label: 'Some label',
			first: 95,
			second: 80
		},
		set3: {
			label: 'Some label',
			first: 125,
			second: 110
		},
		set4: {
			label: 'Some label',
			first: 40,
			second: 100
		},
		set5: {
			label: 'Some label',
			first: 180,
			second: 3
		}

	}

};

/* harmony default export */ __webpack_exports__["a"] = (content);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axis_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axis_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__axis_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__functions_calcVertPosition__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(0);
/* eslint no-console:0 */




class Axis {
	constructor({
		min = 0,
		max = 100,
		width = 0,
		count = 5
	} = {}) {
		this.width = width;
		this.min = min;
		this.max = max;
		this.count = count;
		this.state = {
			ticks: []
		};

		this.range = Math.ceil((this.max - this.min) / this.count) * this.count;
		this.interval = this.range / this.count;
		this.tickIncrement = 1 / this.count;
		this.renderTicks = this.renderTicks.bind(this);
	}

	renderTicks() {
		// let interval = this.range / this.count // returns percentage interval
		const { width, inset } = __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */].chartSettings;
		// console.log(this.range, this.interval)
		for (let i = 0; i < this.count + 1; i++) {
			const value = i * this.interval;
			const ypos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__functions_calcVertPosition__["a" /* default */])({ value, max: this.max });
			this.state.ticks.push(`
				<line class="${__WEBPACK_IMPORTED_MODULE_0__axis_css___default.a.gridLine}"
					x1="${inset}" y1="${ypos}"
					x2="${width - inset}" y2="${ypos}"
				/>
				<text class="${__WEBPACK_IMPORTED_MODULE_0__axis_css___default.a.tickLabel}" 
					x="0" y="${ypos}" >
						${value}
				</text>
			`);

			// console.log(this.state)
		}

		// console.log(this.state)
		return this.state.ticks.join('');
	}

	template() {
		return `<svg>
			<line 
				class="${__WEBPACK_IMPORTED_MODULE_0__axis_css___default.a.axis}"
				x1="20px" y1="0px"
				x2="20px" y2="400px"
			/>
			${this.renderTicks()}
		</svg>
		`;
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Axis;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dot_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dot_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dot_css__);


class Dot {
	constructor({ valX = 0, valY = 0, label = '', status = 'default' } = {}) {
		this.valX = valX;
		this.valY = valY;
		this.label = label;
		this.status = status;
	}

	template() {
		return `<div 
			class="${__WEBPACK_IMPORTED_MODULE_0__dot_css___default.a.dot} ${__WEBPACK_IMPORTED_MODULE_0__dot_css___default.a[this.status]}"
			style="transform: translate3d(${this.valX}px, ${this.valY}px, 0)"
		></div>`;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Dot);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__line_css__);


class Line {
	constructor({ x1 = 0, x2 = 0, y1 = 0, y2 = 0 } = {}) {
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
		// this.toggleHover = this.toggleHover.bind(this)
	}

	/*toggleHover(e) {
 	console.log('hover!', e)
 	// e.target.setAttribute('data-hover', 'true')
 }*/

	template() {
		// console.log(`x1="${this.x1}" y1="${this.y1}" x2="${this.x2}" y2="${this.y2}" `)
		return `
			<svg class="${__WEBPACK_IMPORTED_MODULE_0__line_css___default.a.svgLineWrapper}">
				<line class="${__WEBPACK_IMPORTED_MODULE_0__line_css___default.a.svgLine}"
					x1="${this.x1}" y1="${this.y1}" 
					x2="${this.x2}" y2="${this.y2}" 
					data-hover='false'
					
				/>
			</svg>
		`;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Line);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"line":"axis__line___27kCQ","gridLine":"axis__gridLine___2vbDU axis__line___27kCQ","tick":"axis__tick___1k4_3 axis__line___27kCQ","tickLabel":"axis__tickLabel___25kT2","axis":"axis__axis___12WE5"};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dot":"dot__dot___3IQ_J","default":"dot__default___3Kkbu","increase":"dot__increase___1EUqM","decrease":"dot__decrease___3FpeY"};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"svgLineWrapper":"line__svgLineWrapper___1aXgA","svgLine":"line__svgLine___2YZTo"};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"slopeChart__container___czTU4","lineContainer":"slopeChart__lineContainer___3LePK","dotContainer":"slopeChart__dotContainer___9JGJB","axisContainer":"slopeChart__axisContainer___3zkSZ"};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);


function calcPosition({ value, max }) {
	let percent = value / max;
	return 0 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].chartSettings.height * percent;
}

/* harmony default export */ __webpack_exports__["a"] = (calcPosition);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
	Control function repetition
	Useful for controlling how often functions are called on window scroll or resize
*/

/* eslint-disable */
function debounce(func, wait = 10, immediate = true) {
	var timeout;
	return function () {
		var context = this,
		    args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (debounce);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__titleblock_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__titleblock_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__titleblock_css__);



const { title, intro } = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].content.chartTitle;

class TitleBlock {
	constructor() {
		this.state = {
			title,
			intro
		};
	}

	static templateTitle(text) {
		return `<h2 class="${__WEBPACK_IMPORTED_MODULE_1__titleblock_css___default.a.title}">${text}</h2>`;
	}

	static templateIntro(text) {
		return `<p class="${__WEBPACK_IMPORTED_MODULE_1__titleblock_css___default.a.intro}">${text}</p>`;
	}

	render() {
		return `<section>
			${this.state.title ? TitleBlock.templateTitle(this.state.title) : ''}
			${this.state.intro ? TitleBlock.templateIntro(this.state.intro) : ''}
		</section>`;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (TitleBlock);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"titleblock__common___vgUqe","title":"titleblock__title___16vUk titleblock__common___vgUqe","intro":"titleblock__intro___1d4Ra titleblock__common___vgUqe"};

/***/ })
/******/ ]);