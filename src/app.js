// import styles from './app.css'
import state from './state'
import * as util from './functions/utility'
import handleHover from './functions/onHover'
import debounce from './functions/debounce'
import SlopeChart from './templates/slopeChart/slopeChart'
import TitleBlock from './templates/titleBlock/titleblock'

// import slopeStyles from './templates/slopeChart/slopeChart.css'
import dotStyles from './templates/dot/dot.css'
import lineStyle from './templates/line/line.css'

// const { isMobileDevice } = util // true or false

const slopeChart = new SlopeChart({ chartWidth: state.chartSettings.width })
const titleBlock = new TitleBlock()
const appContainer = document.querySelector('#appContainer')
const { delegate } = util

function renderChart() {
	const { setWidth, setHeight } = state.chartSettings
	state.chartSettings.width = setWidth()
	state.chartSettings.height = setHeight()

	appContainer.innerHTML = [
		titleBlock.render(),
		slopeChart.template(),
	].join('')
}

function addResize() {
	window.addEventListener('resize', debounce(renderChart))
	state.willResize = true
}

// function handleHoverIn(e) {
// 	console.log('hover!!', e)
// 	const wrapper = closest(e.target, `.${slopeStyles.entryWrapper}`)
// 	console.log(wrapper)
// 	wrapper.setAttribute('data-hover', 'true')
// }

// function handleHoverOut(e) {
// 	console.log('hover!!', e)
// 	const wrapper = closest(e.target, `.${slopeStyles.entryWrapper}`)
// 	console.log(wrapper)
// 	wrapper.setAttribute('data-hover', 'false')
// }

function startChart() {
	renderChart()
	// console.log(`.${dotStyles.dot}`)
	delegate('#appContainer', 'mouseover', `.${dotStyles.dot}, .${lineStyle.svgLine}`, handleHover)
	delegate('#appContainer', 'mouseout', `.${dotStyles.dot}, .${lineStyle.svgLine}`, handleHover)
	if (!state.willResize) addResize()
}

startChart()

