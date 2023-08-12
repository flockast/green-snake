import { DIRECTIONS } from '../enums.js'

const GAME = {
  DIRECTION: DIRECTIONS.UP,
  GAME_OVER: false
}

export const setDirection = (direction) => {
  GAME.DIRECTION = direction
}

export const setGameOver = (bool) => {
  GAME.GAME_OVER = bool
}

export const getDirection = () => GAME.DIRECTION
export const isGameOver = () => GAME.GAME_OVER
