function filterSelection(category) {
    const cards = document.querySelectorAll(".filterDiv");
    const buttons = document.querySelectorAll(".btn-filter");

    cards.forEach(function(card) {
        if (
            category === "all" ||
            card.classList.contains(category)
        ) {
            card.classList.remove("d-none");
        } else {
            card.classList.add("d-none");
        }
    });

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    const activeButton = document.querySelector(
        `.btn-filter[onclick="filterSelection('${category}')"]`
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }
}

filterSelection("all");

var hero = document.querySelector(".hero1");
var btnWeather = document.querySelector(".btnwe");
btnWeather.addEventListener("click", function (e) {
  e.preventDefault();                 
  hero.classList.toggle("weather-on"); 
});
