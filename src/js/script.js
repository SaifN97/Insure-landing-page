const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".nav-toggle");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  navToggle.classList.toggle("active");
});

close.addEventListener("click", () => {
  nav.classList.toggle("active");
  navToggle.classList.toggle("active");
});
