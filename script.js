const learnMore = document.querySelector(".section-main-button");
const aboutTitle = document.querySelector("#about-title");
const form = document.querySelector(".footer-form");
const status = document.querySelector("#form-status");

learnMore.addEventListener("click", () => {
  window.location.hash = "about";
  aboutTitle.focus({ preventScroll: true });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Дякуємо! Пробну підписку оформлено.";
  form.reset();
});
