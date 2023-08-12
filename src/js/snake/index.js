import {
  initControls
} from './common/controls.js'

import {
  initCanvas
} from './common/canvas.js'

import {
  initRaf
} from './common/raf.js'

export const initSnakeGame = (element) => {
  initCanvas(element)
  initControls()
  initRaf()
}
