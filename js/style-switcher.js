const styleSwircherToggle = document.querySelector(".style-switcher-toggler");
styleSwircherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.body.addEventListener(
      "click",
      (close = (e) => {
        if (!e.target.closest(".style-switcher")) {
          document.querySelector(".style-switcher").classList.remove("open");
          document.body.removeEventListener("click", close);
        }
      })
    );

    window.addEventListener("scroll", () => {
      document.querySelector(".style-switcher").classList.remove("open");
    });

    document.addEventListener("keydown", function (e) {
      if (e.which === 27) {
        document.querySelector(".style-switcher").classList.remove("open");
      }
    });
  }
});

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  const colors = document.querySelectorAll(".color");
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].id === color) {
      colors[i].classList.add("active");
    } else {
      colors[i].classList.remove("active");
    }
  }
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", true);
    }
  });
}

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
