import Styles from './dot.css'

class Dot {
	constructor({ valX = 0, valY = 0, label = '', status = 'default' } = {}) {
		this.valX = valX
		this.valY = valY
		this.label = label
		this.status = status
	}

	template() {
		return `<div 
			class="${Styles.dot} ${Styles[this.status]}"
			style="transform: translate3d(${this.valX}px, ${this.valY}px, 0)"
		></div>`
	}

}

export default Dot
