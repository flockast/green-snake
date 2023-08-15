import { DIRECTIONS } from '../enums.js'

const GAME = {
  DIRECTION: DIRECTIONS.UP,
  BUFFER_DIRECTION: '',
  GAME_OVER: false
}

export const setDirection = (direction) => {
  GAME.DIRECTION = direction
}

export const setBufferDirection = (bufferDirection) => {
  GAME.BUFFER_DIRECTION = bufferDirection
}

export const setGameOver = (bool) => {
  GAME.GAME_OVER = bool
}

export const getDirection = () => GAME.DIRECTION
export const getBufferDirection = () => GAME.BUFFER_DIRECTION
export const isGameOver = () => GAME.GAME_OVER
