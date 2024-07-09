import { getForecast } from "./weather-api"

async function renderCurrentForecast() {
  const result = await getForecast()
  const div = document.querySelector(".random-div")

  div.textContent = `Current temperature: ${result.current.temp_c} C`
}

export { renderCurrentForecast }
