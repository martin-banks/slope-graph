import state from '../../state'
import Styles from './slopeChart.css'
import Dot from '../dot/dot'
import Line from '../line/line'
import Axis from '../axis/axis'
import calcPosition from '../../functions/calcVertPosition'


export default class SlopeChart {
	constructor(props) {
		this.props = props
		this.createElements = this.createElements.bind(this)
		this.calcRange = this.calcRange.bind(this)
		this.state = {}
		this.calcRange()
	}

	calcRange() {
		let { entries } = state.content
		let leftValues = Object.keys(entries).map(key => entries[key].first)
		let rightValues = Object.keys(entries).map(key => entries[key].second)
		this.state.max = Math.max(...leftValues, ...rightValues)
		this.state.min = Math.min(...leftValues, ...rightValues)
		this.state.range = this.state.max - this.state.min
	}

	static calcPositionX() {
		let { width, dotSize, inset } = state.chartSettings
		return width - inset - dotSize
	}

	createElements() {
		let { entries } = state.content
		let { inset, dotSize } = state.chartSettings

		Object.keys(entries).forEach(key => {
			let entry = entries[key]
			let { first, second, label } = entry

			entries[key].dotleft = new Dot({
				valX: inset + dotSize,
				valY: calcPosition({ value: first, max: this.state.max }) - dotSize,
				label,
			})

			entries[key].dotright = new Dot({
				valX: SlopeChart.calcPositionX() + (dotSize * 0.5),
				valY: calcPosition({ value: second, max: this.state.max }) - dotSize,
				label,
				status: first > second ? 'decrease' : 'increase',
			})

			entries[key].line = new Line({
				x1: inset + (dotSize * 1.5),
				x2: SlopeChart.calcPositionX() + dotSize,
				y1: (calcPosition({ value: first, max: this.state.max }) + (dotSize / 2)) - dotSize,
				y2: (calcPosition({ value: second, max: this.state.max }) + (dotSize / 2)) - dotSize,
			})
		})

		this.state.axis = new Axis({
			min: this.state.min,
			max: this.state.max,
			width: this.props.chartWidth,
		})
	}

	static renderDots(side) {
		let { entries } = state.content
		return Object.keys(entries)
			.map(key => entries[key][`dot${side}`].template())
			.join('')
	}

	static renderLines() {
		let { entries } = state.content
		return Object.keys(entries)
			.map(key => `
				<div class="${Styles.entryWrapper}" data-hover="false">
					${entries[key].line.template()}
					${entries[key].dotleft.template()}
					${entries[key].dotright.template()}
				</div>
			`).join('')
	}


	template() {
		this.createElements()
		let { height, inset } = state.chartSettings
		return `<div 
			class="${Styles.container}" 
			style="height: ${height + inset}px" >
			
			<div class="${Styles.axisContainer}">
				${this.state.axis.template()}
			</div>
			
			<div class="${Styles.lineContainer}" >
				${SlopeChart.renderLines()}
			</div>
			
		</div>`
	}

}
