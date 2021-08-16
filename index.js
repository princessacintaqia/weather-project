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

mainDate.innerHTML = `${day}, ${hour}:${minute}`;

function completeWeather(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let mainTemperature = document.querySelector("#inversion");
  mainTemperature.innerHTML = Math.round(response.data.main.temp) + "° C";
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
