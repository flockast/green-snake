import { DIRECTIONS } from '../enums.js'
import { setDirection, getDirection } from '../state/game.js'
import { restart } from './restart.js'

const changeToUp = () => {
  if (getDirection() === DIRECTIONS.DOWN) {
    return
  }
  setDirection(DIRECTIONS.UP)
}

const changeToRight = () => {
  if (getDirection() === DIRECTIONS.LEFT) {
    return
  }
  setDirection(DIRECTIONS.RIGHT)
}

const changeToDown = () => {
  if (getDirection() === DIRECTIONS.UP) {
    return
  }
  setDirection(DIRECTIONS.DOWN)
}

const changeToLeft = () => {
  if (getDirection() === DIRECTIONS.RIGHT) {
    return
  }
  setDirection(DIRECTIONS.LEFT)
}

export const initControls = () => {
  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'ArrowUp':
        changeToUp()
        break
      case 'KeyW':
        changeToUp()
        break
      case 'ArrowRight':
        changeToRight()
        break
      case 'KeyD':
        changeToRight()
        break
      case 'ArrowDown':
        changeToDown()
        break
      case 'KeyS':
        changeToDown()
        break
      case 'ArrowLeft':
        changeToLeft()
        break
      case 'KeyA':
        changeToLeft()
        break
      case 'Space':
        restart()
        break
    }
  })
}
