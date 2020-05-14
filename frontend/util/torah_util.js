export const sections = () => {
  return fetch('https://dailylearning.herokuapp.com/api/sections', { mode: "cors" })
}

export const parshios = () => {
  return fetch('https://dailylearning.herokuapp.com/api/parshios', { mode: "cors" })
}