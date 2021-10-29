const hamburger = document.querySelector(".hamburger");
const list = document.querySelectorAll(".overlay-nav li");
const navLinks = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-overlay");
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("hamburger-active");
});

list.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("hamburger-active");
  });
});

gsap.to(".slider", { opacity: 0, delay: 1.5, duration: 0.7 });

gsap.to(".home-text", { opacity: 1, x: 0, delay: 1.8, duration: 0.7 });
gsap.to(".badge", { opacity: 1, x: 0, delay: 1.5, duration: 0.7 });
gsap.to(".home-image img", {
  opacity: 1,
  x: 0,
  delay: 1.8,
  duration: 0.7,
});
