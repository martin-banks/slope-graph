import Styles from './axis.css'
import calcPosition from '../../functions/calcVertPosition'
import state from '../../state'

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
		this.count = count
		this.state = {
			ticks: [],
		}

		this.range = (Math.ceil((this.max - this.min) / this.count)) * this.count
		this.interval = this.range / this.count
		this.tickIncrement = 1 / this.count
		this.renderTicks = this.renderTicks.bind(this)
	}

	renderTicks() {
		const { width, inset } = state.chartSettings
		for (let i = 0; i < this.count + 1; i++) {
			const value = ((i * this.interval)/* + this.interval*/)
			const ypos = calcPosition({ value, max: this.max })
			this.state.ticks.push(`
				<line class="${Styles.gridLine}"
					x1="${inset}" y1="${ypos}"
					x2="${width - inset}" y2="${ypos}"
				/>
				<text class="${Styles.tickLabel}" 
					x="0" y="${ypos}" >
						${value}
				</text>
			`)
		}
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
