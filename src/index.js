let now = new Date();
console.log(now.getDate());

let h2 = document.querySelector("h2");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

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
h2.innerHTML = `${day},  ${hours} : ${minutes}`;

//function search(event) {
//event.preventDefault();
//let searchInput = document.querySelector("#city");
//console.log(searchInput.value);
//let h1 = document.querySelector("h1");
// h1.innerHTML = `${searchInput.value}`;
//}
let form = document.querySelector("#searcher");
form.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "4bd6c6fc731bea4967ed45358db0e88e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  document.querySelector("#temperature").innerHTML = response.main.temp;
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let apiKey = "4bd6c6fc731bea4967ed45358db0e88e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#search-text-input");
button.addEventListener("click", getCurrentPosition);
