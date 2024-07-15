import { refreshPage } from "./js/render"
import {
  showLocationInput,
  hideLocationInput,
  changeCity,
  changeMeasurmentSystem,
  showErrorMessage,
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
const measurment = document.querySelector(".measurment")

locationCity.addEventListener("click", showLocationInput)
locationInput.addEventListener("keypress", processUserInput)
measurment.addEventListener("click", changeMeasurmentSystem)
measurment.addEventListener("click", refreshPage)

refreshPage()

function processUserInput(e) {
  if (e.which !== 13) return
  changeCity()
  refreshPage().then(hideLocationInput).catch(showErrorMessage)
}
