/* =========================================================
   Epsilon Eta — global site script
   Mobile nav toggle + recruitment countdown + footer year
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

  /* Recruitment countdown — Rush Week begins Monday, Sept 14, 2026 */
  var rushDate = new Date("2026-09-14T00:00:00-07:00");

  document.querySelectorAll("[data-countdown]").forEach(function (el) {
    var now = new Date();
    var diffMs = rushDate - now;
    var diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      el.textContent = diffDays;
      var lbl = el.parentElement.querySelector(".lbl");
      if (lbl) lbl.textContent = "Days Until Rush Week";
    } else if (diffDays === 1) {
      el.textContent = "1";
      var lbl1 = el.parentElement.querySelector(".lbl");
      if (lbl1) lbl1.textContent = "Day Until Rush Week";
    } else if (diffMs > -4 * 24 * 60 * 60 * 1000) {
      el.textContent = "🎉";
      var lbl2 = el.parentElement.querySelector(".lbl");
      if (lbl2) lbl2.textContent = "Rush Week Is Here!";
    } else {
      el.textContent = "—";
      var lbl3 = el.parentElement.querySelector(".lbl");
      if (lbl3) lbl3.textContent = "Recruitment Has Concluded";
    }
  });

});
