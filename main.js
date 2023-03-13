const menuToggle = document.querySelector(".menu-toggle");
const navegation = document.querySelector(".nav");

function activeToggle() {
  menuToggle.classList.toggle("active");
  navegation.classList.toggle("active");
}

function selectSlider(slider) {
  document.getElementById("slider").src = slider;
}

menuToggle.addEventListener("click", activeToggle);
