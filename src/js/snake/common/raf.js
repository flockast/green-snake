import { loop } from './loop.js'

import { FPS } from '../config.js'

const interval = 1000 / FPS

const TIME = {
  now: '',
  delta: '',
  then: Date.now()
}

const raf = (timer) => {
  requestAnimationFrame(raf)

  TIME.now = Date.now()
  TIME.delta = TIME.now - TIME.then

  if (TIME.delta > interval) {
    TIME.then = TIME.now - (TIME.delta % interval)
    loop()
  }
}

export const initRaf = () => {
  raf()
}
