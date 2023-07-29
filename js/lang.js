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
  about: {
    ru: "О себе",
    en: "About Me",
  },
  home: {
    ru: "Главная",
    en: "Home",
  },
  services: {
    ru: "Услуги",
    en: "Services",
  },
  contact: {
    ru: "Контакты",
    en: "Contact",
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
  about_hello: {
    ru: "Меня зовут",
    en: "My name's",
  },
  about_desc1: {
    ru: "Я Front-end разработчик из Москвы.",
    en: "I am a Front-end developer based in Moscow, the Russia.",
  },
  about_desc2: {
    ru: "Прекрасно знаю JavaScript, React, CSS (SASS), Gulp, Webpack, REST API, Figma, Docker и тд.",
    en: "I have knowledge of JavaScript, React, CSS (SASS), Gulp, Webpack, REST API, Figma, Docker, etc.",
  },
  about_desc3: {
    ru: "С нетерпением жду возможности работать как в команде, так и индивидуально.",
    en: "I am looking forward to working in teams as well as individually.",
  },
  about_desc4: {
    ru: "Стремлюсь не только углубить свои знания, но и применить их к реальным продуктам.",
    en: "I am not only willing to deepen my knowledge but I also want to apply them to the real products.",
  },
  about_desc5: {
    ru: "В свободное время читаю книги, играю на гитаре, занимаюсь бегом и организовываю походы.",
    en: "I like to read books and play the guitar, do physical education and go hiking.",
  },
  about_desc6: {
    ru: "Мне нравится работать и видеть результаты своего труда.",
    en: "I like to work and see the results of my work.",
  },
  about_personal: {
    ru: "Персональная информация",
    en: "Personal information",
  },
  about_personal_1: {
    ru: "Дата рождения",
    en: "Birthday",
  },
  about_personal_2: {
    ru: "9 сен 2000",
    en: "9 sep 2000",
  },
  about_personal_3: {
    ru: "Возраст",
    en: "Age",
  },
  about_personal_4: {
    ru: "Гражданство",
    en: "Citizenship",
  },
  about_personal_5: {
    ru: "Россия",
    en: "Russia",
  },
  about_personal_6: {
    ru: "Город",
    en: "City",
  },
  about_personal_7: {
    ru: "Москва",
    en: "Moscow",
  },
  about_personal_8: {
    ru: "Русский",
    en: "Russian",
  },
  about_personal_9: {
    ru: "Родной",
    en: "Native",
  },
  about_personal_10: {
    ru: "Английский",
    en: "English",
  },
  about_personal_11: {
    ru: "Средний",
    en: "Intermediate",
  },
  about_skills: {
    ru: "Навыки",
    en: "Skills",
  },
  about_hire: {
    ru: "Найми меня",
    en: "Hire me",
  },
  about_education: {
    ru: "Образование и курсы",
    en: "Education and courses",
  },
  about_ed_1: {
    ru: "Март, 2023 — настоящее время",
    en: "March, 2023 — now",
  },
  about_ed_2: {
    ru: "Продвинутый Frontend. В Production на React",
    en: "Advanced Frontend. In Production with React",
  },
  about_ed_3: {
    ru: "На курсе Ulbi TV Я научился использовать React для создания современных фронтенд-приложений и познакомился с более глобальными концепциями и подходами в разработке.",
    en: "On the Ulbi TV Frontend course, I learned how to use React to create modern front-end applications and got acquainted with more global concepts and approaches in development.",
  },
  about_ed_4: {
    ru: "Июль, 2022 — Март, 2023",
    en: "July, 2022 — March, 2023",
  },
  about_ed_5: {
    ru: "Во время обучения в школе The Rolling Scope School Я закрепил свои предыдущие знания и изучил множетво новых тем, таких как Webpack, TypeScript и NodeJS",
    en: "While studying at The Rolling Scope School. I solidified my previous knowledge and learned a lot of new topics like Webpack, TypeScript and NodeJS",
  },
  about_ed_6: {
    ru: "Переводчик в сфере профессиональных коммуникаций",
    en: "Translator in the field of professional communications",
  },
  about_ed_7: {
    ru: "Прошел повышение квалификации в Государственном гуманитарно-технологическом университете. Изучал английский до уровня Intermediate",
    en: "Passed advanced training at the State Humanitarian and Technological University. Studied English to Intermediate level",
  },
  about_ed_8: {
    ru: "Преподаватель истории и обществознания",
    en: "Lecturer in history and social studies",
  },
  about_ed_9: {
    ru: "Получил степень бакалавра в Государственном гуманитарно-технологическом университете. За время учебы Я научился организовывать свое рабочее время, работать в команде и находить общий язык с людьми разного возраста.",
    en: "Received a bachelor's degree from the State Humanitarian and Technological University. During my studies, I learned to organize my working time, work in a team and find a common language with people of different ages.",
  },
  services_1: {
    ru: "Отзывчивый дизайн",
    en: "Responsive Design",
  },
  services_2: {
    ru: "Разработать пользовательский интерфейс",
    en: "Develop the user interface",
  },
  services_3: {
    ru: "Разработка веб-страниц",
    en: "Web page development",
  },
  services_4: {
    ru: "Создание элементов взаимодействия с пользователем",
    en: "Create ux element interactions",
  },
  services_5: {
    ru: "Адаптация сайта под любой экран устройства",
    en: "Site adaptation to any device screen",
  },
  services_6: {
    ru: "Веб-дизайн",
    en: "Web Design",
  },
  services_7: {
    ru: "Логическая структура веб-страницы;",
    en: "The logical structure of the web page;",
  },
  services_8: {
    ru: "Красивый дизайн веб-проекта;",
    en: "Beautiful design of the web project;",
  },
  services_9: {
    ru: "Проработка внешнего вида страниц для разных устройств;",
    en: "Elaboration of the appearance of pages for different devices;",
  },
  services_10: {
    ru: "Веб-разработка",
    en: "Web Development",
  },
  services_11: {
    ru: "Разработка веб-сайта, веб-сервиса или приложения",
    en: "Develop a website, web service or application",
  },
  services_12: {
    ru: "Интеграция сторонних приложений",
    en: "Integrate third party applications",
  },
  services_13: {
    ru: "Разработка программного обеспечения на заказ",
    en: "Design custom software",
  },
  services_14: {
    ru: "UI / UX-дизайн",
    en: "UI / UX Design",
  },
  services_15: {
    ru: "Представить товар в выгодном свете",
    en: "Present the product in a favorable light",
  },
  services_16: {
    ru: "Разработать уникальный и современный дизайн.",
    en: "Develop a unique and modern design.",
  },
  services_17: {
    ru: "Разработать интуитивно понятный и визуально приятный веб-сайт для пользователей",
    en: "Develop an intuitive and visually pleasing website for users",
  },
  services_18: {
    ru: "Создать адаптивный макет в Figma.",
    en: "Create a responsive layout in Figma.",
  },
  services_19: {
    ru: "SEO-маркетинг",
    en: "SEO Marketing",
  },
  services_20: {
    ru: "Поместить ваш сайт в топ поисковых сервисов",
    en: "Rank your website on top of search Services",
  },
  services_21: {
    ru: "Отличная поддержка",
    en: "Great Support",
  },
  services_22: {
    ru: "Всегда на связи и готов помочь",
    en: "Always in touch and ready to help",
  },
  contact_1: {
    ru: "У вас есть вопросы ?",
    en: "Have You Any Question ?",
  },
  contact_2: {
    ru: "Я К ВАШИМ УСЛУГАМ",
    en: "I'M AT YOUR SERVICES",
  },
  contact_3: {
    ru: "ВЫШЛИ МНЕ ЭЛЕКТРОННОЕ ПИСЬМО",
    en: "SEND ME AN EMAIL",
  },
  contact_4: {
    ru: "Я ВСЕГДА ОТВЕЧАЮ НА СООБЩЕНИЯ",
    en: "I'M VERY RESPONSIVE TO MESSAGES",
  },
  contact_5: {
    ru: "Даю согласие на обработку персональных данных в соответствии с",
    en: "I consent to the processing of personal data in accordance with",
  },
  contact_6: {
    ru: "Условиями",
    en: "the Terms",
  },
  contact_7: {
    ru: "Отправить сообщение",
    en: "Send Message",
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
    let elems = document.querySelectorAll(`.lng-${key}`);
    let language = languages[key][lang];

    if (elems.length && language) {
      elems.forEach((elem) => (elem.textContent = language));
    }
  }
}
