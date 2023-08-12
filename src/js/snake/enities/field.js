import { getCtx, getHeight, getWidth } from '../state/global.js'
import { COLOR_MAIN_BACKGROUND } from '../config.js'

export const drawField = () => {
  const ctx = getCtx()
  const width = getWidth()
  const height = getHeight()

  ctx.fillStyle = COLOR_MAIN_BACKGROUND
  ctx.fillRect(0, 0, width, height)
}
