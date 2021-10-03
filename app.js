const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("nav-active");
});
