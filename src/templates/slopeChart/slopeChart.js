import {state} from '../../state'
import Styles from './slopeChart.css'
import Dot from '../dot/dot'
import Line from '../line/line'


//let {entries} = state.content.entries


export default class Slope_Chart {
	constructor(props){
		this.props = props
		this.createElements = this.createElements.bind(this)
		this.renderDots = this.renderDots.bind(this)
		this.renderLines = this.renderLines.bind(this)
	}

	createElements(){
		let {entries} = state.content
		Object.keys(entries).map(key => {
			let entry = entries[key]
			entries[key].dot_left = new Dot({
				valX: 0, 
				valY: 0 - entry.first -20, 
				label: entry.label
			});
			entries[key].dot_right = new Dot({
				valX: 500-20, 
				valY: 0 - entry.second - 20, 
				label: entry.label
			});
			entries[key].line = new Line({
				x1: 0 + 10,
				x2: 500 - 10,
				y1: 0-entry.first - 10,
				y2: 0-entry.second - 10
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
				console.log(entries[key])
				return entries[key].line.template()
			})
			.join('')
	}

	

	

	template(){
		this.createElements()
		console.log(state)
		return `<div class="${Styles.container}">
			<div class="${Styles.lineContainer}">
				${this.renderLines()}
			</div>
			<div class="${Styles.dotContainer}">
				${this.renderDots('left')}
				${this.renderDots('right')}
			</div>
		</div>`
	}

}