function showLocationInput(e) {
  const locationInput = document.querySelector(".location-input")
  const locationCity = document.querySelector(".location-city")

  locationCity.classList.add("hidden")
  locationInput.classList.remove("hidden")
}

function hideLocationInput(e) {
  if (e.which !== 13) return
  const locationInput = document.querySelector(".location-input")
  const locationCity = document.querySelector(".location-city")

  locationCity.classList.remove("hidden")
  locationInput.classList.add("hidden")
}

export { hideLocationInput, showLocationInput }
