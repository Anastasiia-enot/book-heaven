const form = document.querySelector("form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Дякуємо! Пробну підписку оформлено.";
  form.reset();
});
