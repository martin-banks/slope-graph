// import styles from './app.css'
import state from './state'
import * as util from './functions/utility'
import handleHover from './functions/onHover'
import debounce from './functions/debounce'
import SlopeChart from './templates/slopeChart/slopeChart'
import TitleBlock from './templates/titleBlock/titleblock'
import PopupContainer from './templates/popupContainer/popupContainer'

// import slopeStyles from './templates/slopeChart/slopeChart.css'
import dotStyles from './templates/dot/dot.css'
import lineStyle from './templates/line/line.css'

// const { isMobileDevice } = util // true or false

const slopeChart = new SlopeChart({ chartWidth: state.chartSettings.width })
const titleBlock = new TitleBlock()
const popupContainer = new PopupContainer()
const appContainer = document.querySelector('#appContainer')
const { delegate } = util

function renderChart() {
	const { setWidth, setHeight } = state.chartSettings
	state.chartSettings.width = setWidth()
	state.chartSettings.height = setHeight()

	appContainer.innerHTML = [
		titleBlock.render(),
		slopeChart.template(),
		popupContainer.render(),
	].join('')
}

function addResize() {
	window.addEventListener('resize', debounce(renderChart))
	state.willResize = true
}

function startChart() {
	renderChart()
	delegate('#appContainer', 'mouseover', `.${dotStyles.dot}, .${lineStyle.svgLine}`, handleHover)
	delegate('#appContainer', 'mouseout', `.${dotStyles.dot}, .${lineStyle.svgLine}`, handleHover)
	if (!state.willResize) addResize()
}

startChart()

