import content from './content/content'

const maxHeight = 400
const windowHeight = () => window.innerHeight
// const setHeight = () => {
// 	if (windowHeight() > maxHeight) {
// 		return maxHeight
// 	}
// 	return windowHeight()
// }

const state = {
	willResize: false,
	content,
	chartSettings: {
		inset: 50,
		setWidth: () => document.querySelector('#appContainer').getBoundingClientRect().width,
		setHeight: () => windowHeight() > maxHeight ? maxHeight : windowHeight(),
		width: 0,
		height: 0,
		dotSize: 20,
	},

}

export default state
