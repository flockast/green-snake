import {
  CELL_SIZE_X,
  CELL_SIZE_Y,
  COUNT_COLS,
  COUNT_ROWS
} from '../config.js'

import {
  setCtx,
  setElement,
  setWidth,
  setHeight
} from '../state/global.js'

export const initCanvas = (element) => {
  const width = CELL_SIZE_X * COUNT_ROWS
  const height = CELL_SIZE_Y * COUNT_COLS
  const ctx = element.getContext('2d')

  ctx.canvas.width = width
  ctx.canvas.height = height

  setElement(element)
  setCtx(ctx)
  setWidth(width)
  setHeight(width)
}
