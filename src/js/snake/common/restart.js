import { setSnakePosition, setSnakeTail } from '../state/snake.js'
import { setDirection, setGameOver } from '../state/game.js'
import { setScoreCount } from '../state/score.js'
import { DIRECTIONS } from '../enums.js'
import {setFoodPosition} from '../state/food.js'

export const restart = () => {
  setSnakePosition(0, 0)
  setSnakeTail([])
  setScoreCount(0)
  setDirection(DIRECTIONS.UP)
  setFoodPosition('', '')
  setGameOver(false)
}
