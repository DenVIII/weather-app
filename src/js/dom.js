let isMetric = true

function changeMeasurmentSystem() {
  const measurmentCelsius = document.querySelector(".measurment-celsius")
  const measurmentFahrenheit = document.querySelector(".measurment-fahrenheit")
  const measurmentIcon = document.querySelector(".measurment.icon")

  measurmentCelsius.classList.toggle("active")
  measurmentFahrenheit.classList.toggle("active")

  if (isMetric) {
    measurmentIcon.src = "assets/fahrenheit.png"
    isMetric = false
  } else {
    measurmentIcon.src = "assets/celsius.png"
    isMetric = true
  }
}

function showLocationInput(e) {
  const locationInput = document.querySelector(".location-input")
  const locationCity = document.querySelector(".location-city")

  locationInput.placeholder = "City name"

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
  currentTemperature.textContent = `${
    isMetric ? data.current["temp_c"] + " C" : data.current["temp_f"] + " F"
  }`
  conditionIcon.src = data.current.condition.icon
  conditionIcon.alt = `${data.current.condition.text} icon`
  condition.textContent = data.current.condition.text
  feelsLike.textContent = `${
    isMetric
      ? data.current["feelslike_c"] + " C"
      : data.current["feelslike_f"] + " F"
  }`
  wind.textContent = `${
    isMetric
      ? data.current["wind_kph"] + " km/h"
      : data.current["wind_mph"] + " m/h"
  }`
  humidity.textContent = `${data.current.humidity} %`
  rainChance.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain} %`
  pressure.textContent = `${
    isMetric
      ? data.current.pressure_mb + " mb"
      : data.current.pressure_in + " in²"
  }`
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
    temperature.textContent = `${
      isMetric ? hour["temp_c"] + " C" : hour["temp_f"] + " F"
    }`
    icon.src = hour.condition.icon
  })
}

function changeDailyForecast(data) {
  const containers = document.querySelectorAll(
    ".daily-forecast>.main>.container"
  )
  const dailyForecastData = data.forecast.forecastday

  dailyForecastData.forEach((day, index) => {
    const container = containers[index]
    const date = container.querySelector(".date")
    const temperature = container.querySelector(".temperature")
    const icon = container.querySelector(".condition-icon")

    date.textContent = day.date.split("-").reverse().join("/")
    temperature.textContent = `${
      isMetric ? day.day["avgtemp_c"] + " C" : day.day["avgtemp_f"] + " F"
    }`
    icon.src = day.day.condition.icon
  })
}

function changeCityName(data) {
  const locationCity = document.querySelector(".location-city")
  locationCity.textContent = data.location.name
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
    return cityName
  }
  return locationCity.textContent
}

function showErrorMessage() {
  const locationInput = document.querySelector(".location-input")
  locationInput.value = ""
  locationInput.placeholder = "Invalid input!"
}

export {
  hideLocationInput,
  showLocationInput,
  changeCity,
  changeCurrentWeather,
  changeHourlyWeather,
  changeDailyForecast,
  changeMeasurmentSystem,
  changeCityName,
  showErrorMessage,
}
