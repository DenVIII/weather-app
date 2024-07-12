function showLocationInput(e) {
  const locationInput = document.querySelector(".location-input")
  const locationCity = document.querySelector(".location-city")

  locationCity.classList.add("hidden")
  locationInput.classList.remove("hidden")
}

function hideLocationInput() {
  const locationInput = document.querySelector(".location-input")
  const locationCity = document.querySelector(".location-city")

  locationInput.value = ""

  locationCity.classList.remove("hidden")
  locationInput.classList.add("hidden")
}

function changeCurrentWeather(data) {
  const currentCity = document.querySelector(".current-weather-city")
  const currentTemperature = document.querySelector(".main-temperature")
  const conditionIcon = document.querySelector(".main-condition-icon")
  const condition = document.querySelector(".condition")
  const feelsLike = document.querySelector(".feelslike-temp")
  const wind = document.querySelector(".wind")
  const humidity = document.querySelector(".humidity")
  const rainChance = document.querySelector(".rain-chance")
  const pressure = document.querySelector(".pressure")

  currentCity.textContent = data.location["name"]
  currentTemperature.textContent = data.current["temp_c"]
  conditionIcon.src = data.current.condition.icon
  condition.textContent = data.current.condition.text
  feelsLike.textContent = `${data.current["feelslike_c"]} C`
  wind.textContent = `${data.current["wind_kph"]} km/h`
  humidity.textContent = `${data.current.humidity} %`
  rainChance.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`
  pressure.textContent = `${data.current.pressure_in}`
}

function changeHourlyWeather(data) {
  const containers = document.querySelectorAll(
    ".hourly-forecast>.main>.container"
  )
  const hourlyForecastData = data.forecast.forecastday[0].hour

  hourlyForecastData.forEach((hour, index) => {
    const container = containers[index]
    const time = container.querySelector(".hour")
    const temperature = container.querySelector(".temperature")
    const icon = container.querySelector(".condition-icon")

    time.textContent = hour.time.split(" ")[1]
    temperature.textContent = hour["temp_c"]
    icon.src = hour.condition.icon
  })
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

export {
  hideLocationInput,
  showLocationInput,
  changeCity,
  changeCurrentWeather,
  changeHourlyWeather,
}
