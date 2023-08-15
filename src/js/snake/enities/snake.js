import { getSnakePosition, getSnakeTail, setSnakePosition, setSnakeTailToStart, sliceLastTail, snakeHasTail } from '../state/snake.js'
import {getBufferDirection, getDirection, setBufferDirection, setDirection, setGameOver} from '../state/game.js'
import { DIRECTIONS } from '../enums.js'
import { COLOR_SNAKE_HEAD, COLOR_SNAKE_TAIL, COUNT_COLS, COUNT_ROWS } from '../config.js'
import { drawCell } from './cell.js'

const stepTail = () => {
  const [x, y] = getSnakePosition()
  sliceLastTail()
  setSnakeTailToStart(x, y)
}

const stepHead = () => {
  const [x, y] = getSnakePosition()
  const direction = getBufferDirection() || getDirection()
  let newX
  let newY

  switch (direction) {
    case DIRECTIONS.UP:
      newY = y - 1
      if (newY < 0) {
        setSnakePosition(x, COUNT_COLS - 1)
      } else {
        setSnakePosition(x, newY)
      }
      break
    case DIRECTIONS.RIGHT:
      newX = x + 1
      if (newX >= COUNT_ROWS) {
        setSnakePosition(0, y)
      } else {
        setSnakePosition(newX, y)
      }
      break
    case DIRECTIONS.DOWN:
      newY = y + 1
      if (newY >= COUNT_COLS) {
        setSnakePosition(x, 0)
      } else {
        setSnakePosition(x, newY)
      }
      break
    case DIRECTIONS.LEFT:
      newX = x - 1
      if (newX < 0) {
        setSnakePosition(COUNT_ROWS - 1, y)
      } else {
        setSnakePosition(newX, y)
      }
      break
  }

  setDirection(direction)
  setBufferDirection('')
}

const stepSnake = () => {
  if (snakeHasTail()) {
    stepTail()
  }
  stepHead()
}

const checkBump = () => {
  const [headX, headY] = getSnakePosition()

  const bump = getSnakeTail().find(([tailX, tailY]) => {
    return headX === tailX && headY === tailY
  })

  if (bump && getSnakeTail().length > 3) {
    setGameOver(true)
  }
}

export const updateSnake = () => {
  stepSnake()
  checkBump()
}

const drawHead = () => {
  const [x, y] = getSnakePosition()
  drawCell(x, y, COLOR_SNAKE_HEAD)
}

const drawTail = () => {
  getSnakeTail().forEach(([x, y]) => {
    drawCell(x, y, COLOR_SNAKE_TAIL)
  })
}

export const drawSnake = () => {
  drawTail()
  drawHead()
}
