import { apiKey, forecastDays, city } from "./settings"

async function getForecast(url = generateUrl()) {
  try {
    const result = await fetch(url, { mode: "cors" })
    const forecast = await result.json()
    console.log(forecast)
    return forecast
  } catch (error) {
    console.error("Error getting forecast:", error)
    throw error
  }
}

function generateUrl() {
  return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${getCity()}&days=${forecastDays}`
}

function getCity() {
  const locationInput = document.querySelector(".location-input")
  let locationCity = locationInput.value
  if (locationInput.classList.contains("hidden")) {
    locationCity = document.querySelector(".location-city").textContent
  }
  return locationCity
}

export { getForecast }
