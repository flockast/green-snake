import { CELL_SIZE_X, CELL_SIZE_Y, COUNT_ROWS, COUNT_COLS, COLOR_GRID_LINES, GRID_SCALE } from '../config.js'
import { drawLine } from './line.js'

export const drawGrid = () => {
  for (let i = 0; i < COUNT_ROWS * GRID_SCALE; i++) {
    drawLine(
      i * CELL_SIZE_X / GRID_SCALE,
      0,
      i * CELL_SIZE_X / GRID_SCALE,
      CELL_SIZE_Y * COUNT_COLS,
      COLOR_GRID_LINES
    )
  }

  for (let i = 0; i < COUNT_COLS * GRID_SCALE; i++) {
    drawLine(
      0,
      i * CELL_SIZE_Y / GRID_SCALE,
      CELL_SIZE_X * COUNT_ROWS,
      i * CELL_SIZE_Y / GRID_SCALE,
      COLOR_GRID_LINES
    )
  }
}
