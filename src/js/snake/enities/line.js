import { getCtx } from '../state/global.js'

export const drawLine= (fromX, fromY, toX, toY, color) => {
  const ctx = getCtx()

  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.moveTo(fromX, fromY)
  ctx.lineTo(toX, toY)
  ctx.stroke()
}
