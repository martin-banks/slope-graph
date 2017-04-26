/*
	Control function repetition
	Useful for controlling how often functions are called on window scroll or resize
*/

/* eslint-disable */
function debounce(func, wait = 10, immediate = true) {
	var timeout
	return function() {
		var context = this, args = arguments
		var later = function() {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}
/* eslint-enable */

export default debounce
