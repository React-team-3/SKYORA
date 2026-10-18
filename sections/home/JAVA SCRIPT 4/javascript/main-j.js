var hero = document.querySelector(".hero1");
var btnWeather = document.querySelector(".btnwe");
btnWeather.addEventListener("click", function (e) {
  e.preventDefault();                 
  hero.classList.toggle("weather-on"); 
});