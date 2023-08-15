import { DIRECTIONS } from '../enums.js'
import { getDirection, setBufferDirection } from '../state/game.js'
import { restart } from './restart.js'

const changeToUp = () => {
  if (getDirection() === DIRECTIONS.DOWN) {
    return
  }
  setBufferDirection(DIRECTIONS.UP)
}

const changeToRight = () => {
  if (getDirection() === DIRECTIONS.LEFT) {
    return
  }
  setBufferDirection(DIRECTIONS.RIGHT)
}

const changeToDown = () => {
  if (getDirection() === DIRECTIONS.UP) {
    return
  }
  setBufferDirection(DIRECTIONS.DOWN)
}

const changeToLeft = () => {
  if (getDirection() === DIRECTIONS.RIGHT) {
    return
  }
  setBufferDirection(DIRECTIONS.LEFT)
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
