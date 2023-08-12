const GLOBAL = {
  ctx: '',
  element: '',
  width: '',
  height: ''
}

export const setCtx = (ctx) => {
  GLOBAL.ctx = ctx
}

export const setElement = (element) => {
  GLOBAL.element = element
}

export const setWidth = (width) => {
  GLOBAL.width = width
}

export const setHeight = (height) => {
  GLOBAL.height = height
}

export const getCtx = () => GLOBAL.ctx
export const getElement = () => GLOBAL.element
export const getWidth = () => GLOBAL.width
export const getHeight = () => GLOBAL.height
