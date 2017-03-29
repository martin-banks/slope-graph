import {state} from '../../state'
import Styles from './slopeChart.css'
import Dot from '../dot/dot'
import Line from '../line/line'
import Axis from '../axis/axis'


export default class Slope_Chart {
	constructor(props){
		this.props = props
		this.createElements = this.createElements.bind(this)
		this.renderDots = this.renderDots.bind(this)
		this.renderLines = this.renderLines.bind(this)
		this.calcRange = this.calcRange.bind(this)
		this.calcPosition = this.calcPosition.bind(this)
		this.calcPositionX = this.calcPositionX.bind(this)

		this.state = {}
		this.calcRange()
	}

	calcRange(){
		let {entries} = state.content
		let leftValues = Object.keys(entries).map(key => entries[key].first)
		let rightValues = Object.keys(entries).map(key => entries[key].second)
		this.state.max = Math.max( ...leftValues, ...rightValues )
		this.state.min = Math.min( ...leftValues, ...rightValues )
		this.state.range = this.state.max - this.state.min
	}

	calcPosition(value){
		/*console.log(
			'\nvalue', value,
			'\nrange', this.state.range,
			'\nmax', this.state.max
			)*/

		let percent = (value / this.state.max) 
		return state.chartSettings.height * percent
	}

	calcPositionX(value){
		let { width, dotSize, inset } = state.chartSettings
		return width - inset - dotSize
	}

	createElements(){
		let {entries} = state.content
		let {inset, width, dotSize} = state.chartSettings

		Object.keys(entries).map(key => {
			let entry = entries[key]
			let {first, second, label} = entry

			entries[key].dot_left = new Dot({
				valX: inset, 
				valY: 0 - this.calcPosition(first) - dotSize, 
				label: label
			})

			entries[key].dot_right = new Dot({
				valX: this.calcPositionX(), 
				valY: 0 - this.calcPosition(second) - dotSize, 
				label: label,
				status: first > second ? 'decrease' : 'increase'
			})

			entries[key].line = new Line({
				x1: 0 + inset + dotSize,
				x2: this.calcPositionX(),
				y1: 0 - this.calcPosition(first) + (dotSize / 2) - dotSize,
				y2: 0 - this.calcPosition(second) + (dotSize / 2) - dotSize
			}) 

		})
		this.state.axis = new Axis({
			min: this.state.min,
			max: this.state.max,
			width: this.props.chartWidth
		})
	}

	renderDots(side){
		let {entries} = state.content
		return Object.keys(entries)
			.map(key => entries[key][`dot_${side}`].template())
			.join('')
	}

	renderLines(){
		let {entries} = state.content
		return Object.keys(entries)
			.map(key => entries[key].line.template() )
			.join('')
	}



	

	


	template(){
		this.createElements()
		let { width } = state.chartSettings
		return `<div class="${Styles.container}" >
			
			<div class="${Styles.axisContainer}">
				${this.state.axis.template()}
			</div>
			
			<div class="${Styles.lineContainer}" >
				${this.renderLines()}
			</div>
			
			<div class="${Styles.dotContainer}" >
				${this.renderDots('left')}
				${this.renderDots('right')}
			</div>
		</div>`
	}

}