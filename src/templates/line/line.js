import Styles from './line.css'

class Line {
	constructor({ x1 = 0, x2 = 0, y1 = 0, y2 = 0 } = {}) {
		this.x1 = x1
		this.x2 = x2
		this.y1 = y1
		this.y2 = y2
		// this.toggleHover = this.toggleHover.bind(this)
	}

	/*toggleHover(e) {
		console.log('hover!', e)
		// e.target.setAttribute('data-hover', 'true')
	}*/

	template() {
		// console.log(`x1="${this.x1}" y1="${this.y1}" x2="${this.x2}" y2="${this.y2}" `)
		return `
			<svg class="${Styles.svgLineWrapper}">
				<line class="${Styles.svgLine}"
					x1="${this.x1}" y1="${this.y1}" 
					x2="${this.x2}" y2="${this.y2}" 
					data-hover='false'
					
				/>
			</svg>
		`
	}

}

export default Line
