import Styles from './template.css'

/* As a class */
export default class Sample {
	constructor(props){
		this.props = this.props.bind(this)
	}

	template(){
		return `<div class="${Styles.someClass}">My new template</div>`
	}

}