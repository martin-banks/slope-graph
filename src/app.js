"use strict"
import styles from './app.css'
import {state} from './state'
import * as util from './functions/utility'
import Slope_Chart from './templates/slopeChart/slopeChart'

const isMobile = util.isMobileDevice() // true or false

const slopeChart = new Slope_Chart()
document.querySelector('#appContainer').innerHTML = slopeChart.template()