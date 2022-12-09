// Button

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

// Card

function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card3D(card, ev) {
  let img = card.querySelector(".portfolio-item-inner");
  let mouseX = ev.offsetX;
  let mouseY = ev.offsetY;
  let rotateY = map(mouseX, 0, 531, -25, 25);
  let rotateX = map(mouseY, 0, 299, 25, -25);
  img.style.transform = `rotateX(${
    rotateX < 20 ? (rotateX > -20 ? rotateX : -20) : 20
  }deg) rotateY(${rotateY < 20 ? (rotateY > -20 ? rotateY : -20) : 20}deg)`;
}

let cards3d = document.querySelectorAll(".card3d");

cards3d.forEach((card) => {
  card.addEventListener("mousemove", (ev) => {
    Card3D(card, ev);
  });

  card.addEventListener("mouseleave", (ev) => {
    let img = card.querySelector(".portfolio-item-inner");
    img.style.transform = "rotateX(0deg) rotateY(0deg)";
    img.style.filter = "brightness(1)";
  });
});
