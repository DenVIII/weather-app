import { getForecast } from "./weather-api"
import {
  changeCurrentWeather,
  changeHourlyWeather,
  changeDailyForecast,
} from "./dom"

async function renderCurrentForecast() {
  const result = await getForecast()
  const div = document.querySelector(".random-div")

  div.textContent = `Current temperature: ${result.current.temp_c} C`
}

function refreshPage() {
  getForecast().then((data) => {
    changeCurrentWeather(data)
    changeHourlyWeather(data)
    changeDailyForecast(data)
    console.log(data)
  })
}

export { renderCurrentForecast, refreshPage }
