import {state} from '../../state'
import Styles from './slopeChart.css'
import Dot from '../dot/dot'
import Line from '../line/line'


export default class Slope_Chart {
	constructor(props){
		this.props = props
		this.createElements = this.createElements.bind(this)
		this.renderDots = this.renderDots.bind(this)
		this.renderLines = this.renderLines.bind(this)
	}

	createElements(){
		let {entries} = state.content
		let {inset, width, dotSize} = state.chartSettings

		Object.keys(entries).map(key => {
			let entry = entries[key]
			entries[key].dot_left = new Dot({
				valX: inset, 
				valY: 0 - entry.first - inset, 
				label: entry.label
			});
			entries[key].dot_right = new Dot({
				valX: width - inset - (dotSize), 
				valY: 0 - entry.second - inset, 
				label: entry.label
			});
			entries[key].line = new Line({
				x1: 0 + inset + (dotSize ),
				x2: width - inset - dotSize,
				y1: 0 - entry.first - inset + (dotSize / 2),
				y2: 0 - entry.second - inset + (dotSize / 2)
			}) 
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
			.map(key => {
				return entries[key].line.template()
			})
			.join('')
	}

	

	

	template(){
		this.createElements()
		let { width } = state.chartSettings
		return `<div class="${Styles.container}" >
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