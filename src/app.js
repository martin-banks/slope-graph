"use strict"
import styles from './app.css'
import {state} from './state'
import * as util from './functions/utility'
import Slope_Chart from './templates/slopeChart/slopeChart'

state.chartSettings.width = document.querySelector('#appContainer').getBoundingClientRect().width
const isMobile = util.isMobileDevice() // true or false

const slopeChart = new Slope_Chart({chartWidth: state.chartSettings.width})


document.querySelector('#appContainer').innerHTML = slopeChart.template()
