const langBtn = document.querySelector(".lang");
const languages = {
  portfolio: {
    ru: "Портфолио",
    en: "Portfolio",
  },
  name: {
    ru: "Роман Чучев",
    en: "Roman Chuchev",
  },
  name: {
    ru: "Роман Чучев",
    en: "Roman Chuchev",
  },
  name: {
    ru: "Роман Чучев",
    en: "Roman Chuchev",
  },
  name: {
    ru: "Роман Чучев",
    en: "Roman Chuchev",
  },
  contact: {
    ru: "Контакты",
    en: "Contact",
  },
  name: {
    ru: "Роман Чучев",
    en: "Roman Chuchev",
  },
  hello: {
    ru: "Привет! Меня зовут",
    en: "Hello, my name is",
  },
  im: {
    ru: "Я — ",
    en: "I'm a",
  },
  experience: {
    ru: "Мой знания заключаются в создании и дизайне веб-сайтов, графическом дизайне и многом другом...",
    en: "My experience lies in creating and designing websites, graphic design and much more...",
  },
  download: {
    ru: "Скачать резюме",
    en: "Download CV",
  },
  name: {
    ru: "Роман Чучев",
    en: "Roman Chuchev",
  },
};

let lang = document.body.dataset.lang;
langBtn.addEventListener("click", toggleLang);

function toggleLang() {
  lang =
    langBtn.dataset.lang =
    document.body.dataset.lang =
      document.body.dataset.lang === "en" ? "ru" : "en";

  document.querySelector("title").innerHTML = languages["portfolio"][lang];

  for (let key in languages) {
    let elem = document.querySelector(`.lng-${key}`);
    let language = languages[key][lang];

    if (elem && language) {
      elem.textContent = language;
    }
  }
}
