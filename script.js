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


// home-section:
var hero = document.querySelector(".hero1");
var btnWeather = document.querySelector(".btnwe");
btnWeather.addEventListener("click", function (e) {
  e.preventDefault();                 
  hero.classList.toggle("weather-on"); 
});



// offers-section:
document.addEventListener("DOMContentLoaded", function () {

    // Book Now buttons
    const bookButtons = document.querySelectorAll(".offer-btn");

    bookButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const offerName = button.getAttribute("data-offer");

            alert("You selected: " + offerName);
        });
    });


    // Countdown timer: seven days from page load
    const countdownBox = document.querySelector(".countdown-box");
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (
        countdownBox &&
        daysElement &&
        hoursElement &&
        minutesElement &&
        secondsElement
    ) {
        const offerEndDate = new Date();
        offerEndDate.setDate(offerEndDate.getDate() + 7);

        function updateCountdown() {
            const timeLeft = offerEndDate - new Date();

            if (timeLeft <= 0) {
                countdownBox.innerHTML = "<p>Offers have ended!</p>";
                return;
            }

            const days = Math.floor(
                timeLeft / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                (timeLeft / (1000 * 60 * 60)) % 24
            );

            const minutes = Math.floor(
                (timeLeft / (1000 * 60)) % 60
            );

            const seconds = Math.floor(
                (timeLeft / 1000) % 60
            );

            daysElement.textContent = String(days).padStart(2, "0");
            hoursElement.textContent = String(hours).padStart(2, "0");
            minutesElement.textContent = String(minutes).padStart(2, "0");
            secondsElement.textContent = String(seconds).padStart(2, "0");
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

});


// travel-section:
const moreCards=document.getElementById('moreCards');
const viewMoreBtn=document.getElementById('viewMoreBtn');
moreCards.addEventListener('show.bs.collapse',function(){
    viewMoreBtn.innerHTML='View Less <i class="fa-solid fa-arrow-up"></i>';
})
moreCards.addEventListener('hidden.bs.collapse',function(){
    viewMoreBtn.innerHTML='View More <i class="fa-solid fa-arrow-right"></i>';
})



// footer-section:
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
