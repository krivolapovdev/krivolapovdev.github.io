import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        navbar: {
          items: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
          }
        },
        home: {
          introduction: `I'm Krivolapov Vladislav`
        },
        about: {
          about: "About",
          steps: {
            born: {
              title: "👶 Born",
              text: "I arrived on the scene in 1998, ready to conquer the world (or at least the living room)."
            },
            school: {
              title: "🎒 School",
              text: "Started school and quickly learned that recess was the most important part of the day."
            },
            college: {
              title: "🏫 College",
              text: "I went to college, where I learned that 8 a.m. classes are evil, and coffee is my best friend."
            },
            university: {
              title: "🎓 University",
              text: "University was like a real-life simulation of “How to Survive on Instant Noodles and Sleep Deprivation."
            },
            programming: {
              title: "💻 Programming",
              text: "I became a professional programmer, spending my days fixing bugs and my nights Googling how to fix them."
            }
          }
        },
        skills: {
          skills: "My Skills",
          and_many_others: "...and many others!"
        },
        projects: {
          slides: {
            develop: {
              title: "Develop",
              description: "In progress"
            },
            patent1: {
              title: "#2024660800",
              description:
                "Calculation of the temperature of overhead line wires"
            },
            portfolio: {
              title: "Portfolio",
              description: "A personal portfolio website"
            },
            patent2: {
              title: "#2024687736",
              description:
                "Calculation of annual energy losses of overhead line wires"
            },
            codewars: {
              title: "Codewars",
              description: "More than 500 solved problems on Codewars"
            },
            patent3: {
              title: "#2023660295",
              description:
                "Calculation of long-term permissible currents of overhead wires"
            }
          }
        },
        contact: {
          heading_start: "Get in",
          heading_highlight: "touch",
          heading_end: "with me",
          description: "Get in touch to create something extraordinary together"
        }
      }
    },
    ru: {
      translation: {
        navbar: {
          items: {
            home: "Главная",
            about: "Обо мне",
            skills: "Навыки",
            projects: "Проекты",
            contact: "Связь"
          }
        },
        home: {
          introduction: "Криволапов Владислав"
        },
        about: {
          about: "Обо мне",
          steps: {
            born: {
              title: "👶 Рождение",
              text: "Я появился на свет в 1998 году, готовый покорить мир (или хотя бы гостиную)."
            },
            school: {
              title: "🎒 Школа",
              text: "Пошёл в школу и быстро понял, что перемены — это главное."
            },
            college: {
              title: "🏫 Колледж",
              text: "Я поступил в колледж, где понял, что занятия в 8 утра — это зло, а кофе — лучший друг."
            },
            university: {
              title: "🎓 Университет",
              text: "Университет был как симуляция “Как выжить на дошираке и бессоннице”."
            },
            programming: {
              title: "💻 Программирование",
              text: "Я стал профессиональным программистом, проводя дни за исправлением ошибок, а ночи - за поиском их в Google."
            }
          }
        },
        skills: {
          skills: "Мои Навыки",
          and_many_others: "...и многие другие!"
        },
        projects: {
          slides: {
            develop: {
              title: "Разработка",
              description: "В процессе"
            },
            patent1: {
              title: "#2024660800",
              description: "Расчет температуры проводов воздушных линий"
            },
            portfolio: {
              title: "Портфолио",
              description: "Персональный сайт-портфолио"
            },
            patent2: {
              title: "#2024687736",
              description: "Расчет годовых потерь электроэнергии в проводах"
            },
            codewars: {
              title: "Codewars",
              description: "Более 500 решенных задач на Codewars"
            },
            patent3: {
              title: "#2023660295",
              description: "Расчет длительно допустимых токов проводов ВЛ"
            }
          }
        },
        contact: {
          heading_start: "Свяжитесь со",
          heading_highlight: "мной",
          heading_end: "",
          description: "Давайте создадим что-то необычное вместе"
        }
      }
    }
  }
});

export default i18n;
