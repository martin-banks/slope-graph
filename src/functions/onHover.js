import * as util from './utility'
import slopeStyles from '../templates/slopeChart/slopeChart.css'

function handleHover(e) {
	const wrapper = util.closest(e.target, `.${slopeStyles.entryWrapper}`)
	const newVal = wrapper.dataset.hover === 'true' ? 'false' : 'true'
	wrapper.setAttribute('data-hover', newVal)
}

export default handleHover
