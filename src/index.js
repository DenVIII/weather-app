import { renderCurrentForecast } from "./js/render"
import { getForecast } from "./js/weather-api"
import {
  showLocationInput,
  hideLocationInput,
  changeCity,
  changeCurrentWeather,
} from "./js/dom"
import "./styles/base.css"
import "./styles/dailyForecast.css"
import "./styles/footer.css"
import "./styles/hourlyForecast.css"
import "./styles/navbar.css"
import "./styles/todaysForecast.css"
import "./assets/logo.png"
import "./assets/icons/sunny.png"
import "./assets/icons/wind.png"
import "./assets/icons/pressure.png"
import "./assets/icons/drops.png"
import "./assets/icons/umbrella.png"
import "./assets/icons/celsius.png"
import "./assets/icons/fahrenheit.png"
import "./assets/icons/crescent-moon.png"

const locationInput = document.querySelector(".location-input")
const locationCity = document.querySelector(".location-city")

locationCity.addEventListener("click", showLocationInput)
locationInput.addEventListener("keypress", refreshPage)

function refreshPage(e) {
  if (e.which !== 13) return
  changeCity()
  getForecast().then((data) => {
    changeCurrentWeather(data)
    console.log(data)
  })
  hideLocationInput()
}
/* getForecast(
  "https://api.weatherapi.com/v1/forecast.json?key=d774c4dd991f41beb38162439243006&q=london&days=3"
).then(console.log)

console.log(
  `Current: ${getForecast(
    "https://api.weatherapi.com/v1/current.json?key=d774c4dd991f41beb38162439243006&q=london"
  ).then(console.log)}`
) */
