let mainDate = document.querySelector("#date-hour");

let now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

mainDate.innerHTML = `Last updated ${day}, ${hour}:${minute}`;

function completeWeather(response) {
  let h1 = document.querySelector("h1");
  let mainTemperature = document.querySelector("#inversion");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#wind");
  let precipitation = document.querySelector("#humidity");
  let iconElement = document.querySelector("#icon");

  h1.innerHTML = response.data.name;
  mainTemperature.innerHTML = Math.round(response.data.main.temp) + "° C";
  descriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = "wind: " + Math.round(response.data.wind.speed) + "%";
  precipitation.innerHTML = "humidity: " + response.data.main.humidity + "%";
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function searchCity(city) {
  let apiKey = "2c35da6dd92dc4662766c7045600277b";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(completeWeather);
}

function pressSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", pressSubmit);
