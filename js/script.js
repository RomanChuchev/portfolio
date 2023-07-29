const typed = new Typed(".typing", {
  strings: ["Web Designer", "Graphic Designer", "Web Developer", "Translator"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const sections = document.querySelectorAll(".section");

for (let i = 0; i < navList.length; i++) {
  navList[i].querySelector("a").addEventListener("click", function () {
    if (!navList[i].querySelector("a").classList.contains("active")) {
      delay();
      removeBackSection();

      for (let j = 0; j < navList.length; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
          addBackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);

      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    }
  });
}

function delay() {
  for (let i = 0; i < navList.length; i++) {
    navList[i].querySelector("a").classList.add("pointerNone");
  }
  setTimeout(() => {
    for (let i = 0; i < navList.length; i++) {
      navList[i].querySelector("a").classList.remove("pointerNone");
    }
  }, 800);
}

function removeBackSection() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  sections[num].classList.add("back-section");
}

function showSection(el) {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  const target = el.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(el) {
  for (let i = 0; i < navList.length; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = el.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  document.querySelector(".aside").classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.toggle("open");
  }
}

// Возраст
document
  .querySelectorAll(".my-age")
  .forEach((el) => (el.textContent = getAge()));

function getAge() {
  const now = new Date(); //Текущя дата
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
  let dob = new Date(2000, 9, 9); //Дата рождения
  let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году

  //Возраст = текущий год - год рождения
  let age = today.getFullYear() - dob.getFullYear();
  //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < dobnow) {
    age = age - 1;
  }

  return age;
}
