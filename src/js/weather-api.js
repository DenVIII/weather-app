import { apiKey, forecastDays, city } from "./settings"

async function getForecast(url = generateUrl()) {
  const result = await fetch(url, { mode: "cors" })
  const forecast = await result.json()

  return forecast
}

function generateUrl() {
  return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${getCity()}&days=${forecastDays}`
}

function changeCity() {
  const locationInput = document.querySelector(".location-input")
  const locationCity = document.querySelector(".location-city")
  let cityName = locationInput.value

  if (cityName) {
    // remove whitespace for the api call
    cityName = cityName
      .replace(/(\s+$|^\s+)/g, "") // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
      .replace(/(\s+,)/g, ",") // remove any white space that preceeds a comma
      .replace(/\s+/g, "+") // replace any remaining white space with +, so it works in api call
    locationCity.textContent = cityName[0].toUpperCase() + cityName.slice(1)
    return cityName
  }
  return locationCity.textContent
}

export { getForecast, changeCity }
