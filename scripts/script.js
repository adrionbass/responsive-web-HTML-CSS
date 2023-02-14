/* HAMB-BTN */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});


/* SCROLL UP */

upBtn = document.getElementById("up-btn");
upBtn.addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
    upBtn.style.transform = "scale(0)";
  }
}

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  if (scroll > 500) {
    upBtn.style.transform = "scale(1)";
  } else if (scroll < 500) {
    upBtn.style.transform = "scale(0)";
  }
};
