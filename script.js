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


const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const emailValue = newsletterEmail.value.trim();
  const isValidEmail = emailValue.includes('@') && emailValue.includes('.');

  if (!emailValue || !isValidEmail) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'text-danger mt-2 d-block small';
  } else {
    formMessage.textContent = '✓ Successfully subscribed to travel deals!';
    formMessage.className = 'text-success mt-2 d-block small';
    newsletterEmail.value = '';
  }
});
