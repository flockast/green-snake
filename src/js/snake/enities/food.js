import {
  getFoodColor,
  getFoodFramesToChangeColor,
  getFoodPosition,
  setFoodColor,
  setFoodPosition,
  setFramesToChangeColor
} from '../state/food.js'
import { addSnakeTail, getSnakePosition, getSnakeTail } from '../state/snake.js'
import { randomBetween } from '../utils/random.js'
import { COUNT_ROWS, COUNT_COLS, COLOR_FOOD, COLOR_FOOD_SECOND, CHANGE_COLOR_FPS } from '../config.js'
import { addScoreCount } from '../state/score.js'
import { drawCell } from './cell.js'

const diodeFood = () => {
  const countFrames = getFoodFramesToChangeColor() + 1
  setFramesToChangeColor(countFrames)

  if (countFrames !== CHANGE_COLOR_FPS) {
    return
  }

  setFramesToChangeColor(0)

  const currentColor = getFoodColor()

  if (currentColor === COLOR_FOOD) {
    setFoodColor(COLOR_FOOD_SECOND)
  } else {
    setFoodColor(COLOR_FOOD)
  }
}

const generateAndSetNewFoodCoords = () => {
  const notFreeCoords = [
    getSnakePosition(),
    ...getSnakeTail()
  ]

  let newFoodX
  let newFoodY
  let findCell

  do {
    newFoodX = randomBetween(0, COUNT_ROWS - 1)
    newFoodY = randomBetween(0, COUNT_COLS - 1)
    findCell = notFreeCoords.find(([x, y]) => x === newFoodX && y === newFoodY)
  } while (findCell)

  setFoodPosition(newFoodX, newFoodY)
}

export const updateFood = () => {
  const [foodX, foodY] = getFoodPosition()
  const [snakeX, snakeY] = getSnakePosition()

  if (foodX && foodY) {
    if (foodX === snakeX && foodY === snakeY) {
      addSnakeTail(3)
      addScoreCount(3)
      generateAndSetNewFoodCoords()
    } else {
      diodeFood()
      return
    }
  }

  generateAndSetNewFoodCoords()
}

export const drawFood = () => {
  const [x, y] = getFoodPosition()
  drawCell(x, y, getFoodColor())
}
