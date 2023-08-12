const SCORE = {
  count: 0
}

export const addScoreCount = (count = 1) => {
  SCORE.count = SCORE.count + count
}

export const setScoreCount = (count) => {
  SCORE.count = count
}

export const getScoreCount = () => SCORE.count
