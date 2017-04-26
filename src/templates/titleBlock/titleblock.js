import state from '../../state'
import Styles from './titleblock.css'

const { title, intro } = state.content.chartTitle

class TitleBlock {
	constructor() {
		this.state = {
			title,
			intro,
		}
	}

	static templateTitle(text) {
		return `<h2 class="${Styles.title}">${text}</h2>`
	}

	static templateIntro(text) {
		return `<p class="${Styles.intro}">${text}</p>`
	}

	render() {
		return `<section>
			${this.state.title ? TitleBlock.templateTitle(this.state.title) : ''}
			${this.state.intro ? TitleBlock.templateIntro(this.state.intro) : ''}
		</section>`
	}

}

export default TitleBlock
