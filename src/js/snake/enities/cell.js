import { getCtx } from '../state/global.js'
import { CELL_SIZE_X, CELL_SIZE_Y } from '../config.js'

const border = 2

export const drawCell = (x, y, color) => {
  const ctx = getCtx()

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.roundRect(
    x * CELL_SIZE_X + border,
    y * CELL_SIZE_Y + border,
    CELL_SIZE_X - border * 2,
    CELL_SIZE_Y - border * 2,
    0
  )
  ctx.fill()
}
