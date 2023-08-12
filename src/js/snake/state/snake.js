const SNAKE = {
  POSITION: [0, 0],
  TAIL: []
}

export const setSnakePosition = (x, y) => {
  SNAKE.POSITION = [x, y]
}

export const addSnakeTail = (count = 1) => {
  const [x, y] = SNAKE.TAIL[SNAKE.TAIL.length - 1] || SNAKE.POSITION
  for (let i = 0; i < count; i++) {
    SNAKE.TAIL.push([x, y])
  }
}

export const sliceLastTail = () => {
  SNAKE.TAIL.splice(-1)
}

export const setSnakeTailToStart = (x, y) => {
  SNAKE.TAIL.unshift([x, y])
}

export const setSnakeTail = (tail) => {
  SNAKE.TAIL = tail
}

export const getSnakePosition = () => SNAKE.POSITION
export const getSnakeTail = () => SNAKE.TAIL
export const snakeHasTail = () => SNAKE.TAIL && SNAKE.TAIL.length > 0
