import * as util from './utility'
import slopeStyles from '../templates/slopeChart/slopeChart.css'

function toggleLabel({ status, elem }) {
	if (status === 'true') {
		console.log('show label!!', elem.dataset.label)
	}
}


function handleHover(e) {
	const elem = util.closest(e.target, `.${slopeStyles.entryWrapper}`)
	let status

	if (elem.dataset.hover === 'true') {
		status = 'false'
	} else {
		status = 'true'
	}

	toggleLabel({ status, elem })
	elem.setAttribute('data-hover', status)
}

export default handleHover
