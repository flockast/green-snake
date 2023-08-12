const FOOD = {
  POSITION: [0, 0],
  COLOR: '',
  FRAMES_TO_CHANGE_COLOR: 0
}

export const setFoodPosition = (x, y) => {
  FOOD.POSITION = [x, y]
}

export const setFoodColor = (color) => {
  FOOD.COLOR = color
}

export const setFramesToChangeColor = (frame) => {
  FOOD.FRAMES_TO_CHANGE_COLOR = frame
}

export const getFoodColor = () => FOOD.COLOR
export const getFoodPosition = () => FOOD.POSITION
export const getFoodFramesToChangeColor = () => FOOD.FRAMES_TO_CHANGE_COLOR
