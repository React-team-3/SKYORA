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
