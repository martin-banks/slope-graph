import Styles from './dot.css'

export default class Dot {
	constructor({valX = 0, valY = 0 , label=''} = {}){
		this.valX = valX
		this.valY = valY
		this.label = label
	}
	
	template(){
		return `<div 
			class="${Styles.dot}"
			style="transform: translate3d(${this.valX}px, ${this.valY}px, 0)"
		></div>`
	}


}