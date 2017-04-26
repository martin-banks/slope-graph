/* eslint no-console:0 */
import Styles from './axis.css'

export default class Axis {
	constructor({
		min = 0,
		max = 100,
		width = 0,
		count = 5,
	} = {}) {
		this.width = width
		this.min = min
		this.max = max
		this.range = this.max - this.min
		this.count = count
		this.state = {
			ticks: [],
		}

		this.renderTicks = this.renderTicks.bind(this)
	}

	renderTicks() {
		let interval = this.range / this.count // returns percentage interval
		console.log(this.range, interval)
		// let calcPos = val => ((val + this.min) / this.max) * 100
		for (let i = 0; i < this.count; i++) {
			this.state.ticks.push(`
				<line class="${Styles.gridLine}"
					x1="0" y1="${i * interval}"
					x2="500" y2="${i * interval}"
				/>
		   
				<line class="${Styles.tick}"
					x1="10" y1="${i * interval}"
					x2="20" y2="${i * interval}"
				/>
		   
				<text class="${Styles.tickLabel}" 
					x="0" y="${0 - ((i * interval) + interval)}" >
						${(i * interval) + interval}
				</text>
			`)

			console.log(this.state)
		}

		console.log(this.state)
		return this.state.ticks.join('')
	}

	template() {
		return `<svg>
			<line 
				class="${Styles.axis}"
				x1="20px" y1="0px"
				x2="20px" y2="400px"
			/>
			${this.renderTicks()}
		</svg>
		`
	}

}
