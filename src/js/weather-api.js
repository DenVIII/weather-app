import { apiKey, forecastDays, city } from "./settings"

async function getForecast(url = generateUrl()) {
  const result = await fetch(url, { mode: "cors" })
  const forecast = await result.json()

  return forecast
}

function generateUrl() {
  return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${getCity()}&days=${forecastDays}`
}

function getCity() {
  const locationCity = document.querySelector(".location-city")

  return locationCity.textContent
}

export { getForecast }
