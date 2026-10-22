
(() => {
  "use strict";

  const section = document.querySelector(".skyora-fleet");
  if (!section) return;

  const carousel = section.querySelector(".fleet-carousel");
  const slides = Array.from(section.querySelectorAll(".fleet-slide"));
  const dots = Array.from(section.querySelectorAll(".fleet-dot"));
  const previousButton = section.querySelector("#fleet-prev");
  const nextButton = section.querySelector("#fleet-next");
  const currentNumber = section.querySelector("#fleet-current");
  const feedback = document.querySelector("#fleet-feedback");

  if (!slides.length) return;

  let currentIndex = 0;
  let feedbackTimer = null;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });

    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === currentIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });

    if (currentNumber) {
      currentNumber.textContent = String(currentIndex + 1).padStart(2, "0");
    }
  }

  function showFeedback(message) {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.add("is-visible");
    window.clearTimeout(feedbackTimer);
    feedbackTimer = window.setTimeout(() => {
      feedback.classList.remove("is-visible");
    }, 3000);
  }

  previousButton?.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton?.addEventListener("click", () => showSlide(currentIndex + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = Number(dot.dataset.slide);
      if (Number.isInteger(slideIndex)) showSlide(slideIndex);
    });
  });

  carousel?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(currentIndex + 1);
    }
  });

  section.querySelectorAll("[data-aircraft]").forEach((link) => {
    link.addEventListener("click", () => {
      showFeedback(
        `${link.dataset.aircraft} selected. Connect this button to a details section in your project.`
      );
    });
  });

  showSlide(0);
})();
