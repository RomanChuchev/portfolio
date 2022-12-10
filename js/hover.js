// Button

document.querySelectorAll(".btn__inner").forEach((btn) => {
  btn.addEventListener("mouseenter", function (ev) {
    btn.previousElementSibling.style.left = `${ev.layerX}px`;
    btn.previousElementSibling.style.top = `${ev.layerY}px`;
  });
});

document.querySelectorAll(".btn__inner").forEach((btn) => {
  btn.addEventListener("mouseleave", function (ev) {
    btn.previousElementSibling.style.left = `${ev.layerX}px`;
    btn.previousElementSibling.style.top = `${ev.layerY}px`;
  });
});

// Card

function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card3D(card, ev) {
  let img = card.querySelector(".portfolio-item-inner");
  let imgRect = card.getBoundingClientRect();
  let mouseX = ev.offsetX;
  let mouseY = ev.offsetY;
  let rotateY = map(mouseX, 0, imgRect.width, -20, 20);
  let rotateX = map(mouseY, 0, imgRect.height, 20, -20);

  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
