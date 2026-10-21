function myFunction(country) {
    const cards = document.querySelectorAll(".filterDiv");
    const buttons = document.querySelectorAll(".btn-filter");

    cards.forEach(function(card) {
        if (
            country === "all" ||
            card.classList.contains(country)
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
        `.btn-filter[onclick="myFunction('${country}')"]`
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }
}

myFunction("all");