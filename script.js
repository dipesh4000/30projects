const searchbox = document.querySelector(".search input");
const searchButton = document.querySelector(".search-button");
const weatherimg = document.querySelector(".weather-icon");
const apiKey = "98af5145aa14588235f09455bd8a4a8a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
async function checkWeather(city) {
    const response = await fetch(apiURL+ city +`&appid=${apiKey}`);
    var data = await response.json();
      console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.getElementsByClassName("wind")[0].innerHTML = data.wind.speed + "Km/h";
      if(data.weather[0].main == "Clouds") {
          weatherimg.src = "images/clouds.png";
      } else if(data.weather[0].main == "Clear") {
          weatherimg.src = "images/clear.png";
      } else if(data.weather[0].main == "Rain") {
          weatherimg.src = "images/rain.png";
      } else if(data.weather[0].main == "Drizzle") {
          weatherimg.src = "images/drizzle.png";
      } else if(data.weather[0].main == "Mist") {
          weatherimg.src = "images/mist.png";
      } else{
          weatherimg.src = "images/snow.png";
      }
}
searchButton.addEventListener("click", () => {
    checkWeather(searchbox.value);
});
 