document.querySelectorAll(".btn__inner").forEach((e) => {
  e.addEventListener("mouseenter", function (e) {
    let relX = e.layerX;
    let relY = e.layerY;
    this.previousElementSibling.style.left = `${relX}px`;
    this.previousElementSibling.style.top = `${relY}px`;
  });
});

document.querySelectorAll(".btn__inner").forEach((e) => {
  e.addEventListener("mouseleave", function (e) {
    let relX = e.layerX;
    let relY = e.layerY;
    this.previousElementSibling.style.left = `${relX}px`;
    this.previousElementSibling.style.top = `${relY}px`;
  });
});
