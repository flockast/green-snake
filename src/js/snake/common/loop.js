import { drawSnake, updateSnake } from '../enities/snake.js'
import { drawFood, updateFood } from '../enities/food.js'
import { drawField } from '../enities/field.js'
import { isGameOver } from '../state/game.js'
import { drawScore } from '../enities/score.js'

export const loop = () => {
  if (isGameOver()) {
    return
  }

  updateSnake()
  updateFood()

  drawField()
  drawFood()
  drawSnake()
  drawScore()
}
