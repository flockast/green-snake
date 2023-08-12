import { getCtx } from '../state/global.js'
import { getScoreCount } from '../state/score.js'

export const drawScore = () => {
  const ctx = getCtx()
  const text = `SCORE ${getScoreCount()}`

  ctx.fillStyle = 'white'
  ctx.font = '32px Helvetica'
  ctx.fillText(text, 10, 30)
}
