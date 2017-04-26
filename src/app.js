// import styles from './app.css'
import state from './state'
// import * as util from './functions/utility'
import debounce from './functions/debounce'
import SlopeChart from './templates/slopeChart/slopeChart'
import TitleBlock from './templates/titleBlock/titleblock'

// const { isMobileDevice } = util // true or false
const slopeChart = new SlopeChart({ chartWidth: state.chartSettings.width })
const titleBlock = new TitleBlock()

function renderChart() {
	const { setWidth, setHeight } = state.chartSettings
	state.chartSettings.width = setWidth()
	state.chartSettings.height = setHeight()

	document.querySelector('#appContainer').innerHTML = [
		titleBlock.render(),
		slopeChart.template(),
	].join('')
}

function addResize() {
	window.addEventListener('resize', debounce(renderChart))
	state.willResize = true
}

function startChart() {
	renderChart()
	if (!state.willResize) addResize()
}

startChart()

