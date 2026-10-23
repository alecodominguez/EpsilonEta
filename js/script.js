/* =========================================================
   Epsilon Eta — global site script
   Mobile nav toggle + footer year
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var navbar = document.querySelector(".navbar");
  if (toggle && navbar) {
    toggle.addEventListener("click", function () {
      navbar.classList.toggle("open");
    });
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

});
