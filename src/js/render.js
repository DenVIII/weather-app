import { getForecast } from "./weather-api"
import {
  changeCurrentWeather,
  changeHourlyWeather,
  changeDailyForecast,
  changeCityName,
} from "./dom"

async function renderCurrentForecast() {
  const result = await getForecast()
  const div = document.querySelector(".random-div")

  div.textContent = `Current temperature: ${result.current.temp_c} C`
}

async function refreshPage() {
  try {
    const forecastData = await getForecast()
    changeCurrentWeather(forecastData)
    changeHourlyWeather(forecastData)
    changeDailyForecast(forecastData)
    changeCityName(forecastData)
  } catch (error) {
    throw error
  }
}

export { renderCurrentForecast, refreshPage }
