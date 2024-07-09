import { apiKey, forecastDays, defaultCity } from "./settings"

async function getForecast(url = generateUrl()) {
  const result = await fetch(url, { mode: "cors" })
  const forecast = await result.json()

  return forecast
}

function generateUrl() {
  return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${getCity()}&days=${forecastDays}`
}

function getCity() {
  return defaultCity
}

export { getForecast }
