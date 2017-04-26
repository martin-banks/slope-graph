import state from '../state'

function calcPosition({ value, max }) {
	let percent = (value / max)
	return 0 - (state.chartSettings.height * percent)
}

export default calcPosition
