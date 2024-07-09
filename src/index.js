import { renderCurrentForecast } from "./js/render"
import { getForecast } from "./js/weather-api"
import "./styles.css"
import "./assets/cloudy-day.png"

const randomDiv = document.querySelector(".random-div")
randomDiv.textContent = "Hello!"

/* getForecast(
  "https://api.weatherapi.com/v1/forecast.json?key=d774c4dd991f41beb38162439243006&q=london&days=3"
).then(console.log)

console.log(
  `Current: ${getForecast(
    "https://api.weatherapi.com/v1/current.json?key=d774c4dd991f41beb38162439243006&q=london"
  ).then(console.log)}`
) */

getForecast().then(console.log)

renderCurrentForecast()
