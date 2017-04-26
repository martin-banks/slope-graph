import * as util from './utility'
import slopeStyles from '../templates/slopeChart/slopeChart.css'
import popupStyles from '../templates/popupContainer/popupContainer.css'

function toggleLabel({ status, elem }) {
	const { label } = elem.dataset
	const popup = document.querySelector(`.${popupStyles.popupContainer}`)
	if (status === 'true') {
		popup.innerHTML = label
	} else {
		popup.innerHTML = ''
	}
}


function handleHover(e) {
	const elem = util.closest(e.target, `.${slopeStyles.entryWrapper}`)
	let status = elem.dataset.hover === 'true' ? 'false' : 'true'

	toggleLabel({ status, elem })
	elem.setAttribute('data-hover', status)
}

export default handleHover
