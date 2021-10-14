const hamburger = document.querySelector(".hamburger");
const list = document.querySelectorAll(".nav-links li");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

list.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
  });
});

gsap.to(".slider", { opacity: 0, delay: 1.5, duration: 0.7 });

gsap.to(".home-text", { opacity: 1, delay: 1.8, duration: 0.7 });
gsap.to(".home-image img", {
  opacity: 1,
  delay: 1.8,
  duration: 0.7,
});

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
