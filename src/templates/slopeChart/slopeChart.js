import Styles from './slopeChart.css'

export default class Slope_Chart {
	constructor(props){
		this.props = this.props.bind(this)
	}

	template(){
		return `<div class="${Styles.container}"></div>`
	}

}