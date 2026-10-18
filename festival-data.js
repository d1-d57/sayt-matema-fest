// === База событий фестиваля «Фрактальная Одиссея» v31 ===
// Автоматически сгенерировано programmer-tool 2026-05-22T11:23:46.106Z
window.FESTIVAL_DATA = {
  "_meta": {
    "version": "2026-05-09-v30-handfix-yakovlev",
    "comment": "База событий фестиваля «Фрактальная Одиссея», 23 мая 2026. Структура: time-slots → events → venues → categories. Поля display в venues и categories — то что видит пользователь. Поля id — внутренние ключи, скучные и стабильные, не меняются при ребрендинге.",
    "last_modified": "2026-05-22T11:23:46.106Z",
    "modified_by": "programmer-tool"
  },
  "venues": {
    "library": {
      "display": "Библиотека Достоевского",
      "short": "Библиотека",
      "note": "Чистопрудный 23, малый зал",
      "lanes": 1
    },
    "main_stage": {
      "display": "Зал Мандельброт",
      "short": "Мандельброт",
      "note": "главная сцена клуба Лахесис",
      "apollo_label": "главная сцена",
      "lanes": 1
    },
    "big_bar": {
      "display": "Бар Серпинский",
      "short": "Серпинский",
      "note": "большой бар",
      "apollo_label": "большой бар",
      "lanes": 1
    },
    "small_bar": {
      "display": "Бар Жюлиа",
      "short": "Жюлиа",
      "note": "малый бар",
      "lanes": 2
    },
    "courtyard": {
      "display": "Кантор",
      "short": "Кантор",
      "note": "общий двор",
      "apollo_label": "двор",
      "lanes": 1
    }
  },
  "categories": {
    "popsci": {
      "display": "научпоп",
      "size": "big",
      "comment": "лекции, выступления, открытые форматы"
    },
    "music": {
      "display": "музыка",
      "size": "big",
      "comment": "сеты, концерты, инструменты"
    },
    "art": {
      "display": "искусство",
      "size": "big",
      "comment": "инсталляции, объекты, проекции"
    },
    "workshop": {
      "display": "мастерские",
      "size": "big",
      "comment": "что-то делать руками, чему-то научиться"
    },
    "experiment": {
      "display": "эксперименты",
      "size": "big",
      "comment": "интерактивные станции, эксперименты, наблюдение"
    },
    "cinema": {
      "display": "кино",
      "size": "big",
      "comment": "короткометражки, видеоарт"
    },
    "social": {
      "display": "общение",
      "size": "big",
      "comment": "коллективные действия: дискуссии, квизы, совместное решение задач, нетворкинг, спид-дейтинг, перформансы, танцпол. Критерий: люди делают что-то вместе, в отличие от лекции, где есть выступающий и слушатели."
    },
    "station": {
      "display": "станции",
      "size": "big",
      "comment": "мастерские и эксперименты — два круга на Аполлонии в типе station"
    }
  },
  "subcategories": {
    "music": {
      "main_stage": {
        "slot": "big-1",
        "label_from_venue": "main_stage"
      },
      "big_bar": {
        "slot": "big-2",
        "label_from_venue": "big_bar"
      },
      "courtyard": {
        "slot": "big-3",
        "label_from_venue": "courtyard"
      }
    },
    "cinema": {
      "feature": {
        "slot": "big-1",
        "display": "полный метр"
      },
      "short": {
        "slot": "big-2",
        "display": "короткометражки"
      },
      "animation": {
        "slot": "big-3",
        "display": "анимация"
      }
    },
    "art": {
      "art": {
        "slot": "big-1",
        "display": "галерея"
      },
      "installation": {
        "slot": "big-2",
        "display": "объекты"
      },
      "media": {
        "slot": "big-3",
        "display": "медиа-арт"
      }
    },
    "experiment": {
      "interactive": {
        "slot": "center",
        "display": "интерактивы"
      }
    }
  },
  "time_slots": {
    "slot-evdokimov": {
      "start": "15:00",
      "end": "16:00",
      "label_for_zoom": "Михаил Евдокимов · 14:00",
      "tool_label": "Библиотека 2",
      "type": "talk",
      "category": "popsci",
      "venue": "library",
      "leaf": "leaf-side-morning"
    },
    "slot-tarasevich": {
      "start": "20:30",
      "end": "21:30",
      "label_for_zoom": "Григорий Тарасевич · 20:30",
      "tool_label": "Квиз",
      "type": "talk",
      "category": "popsci",
      "venue": "small_bar",
      "exclusive": true
    },
    "slot-gelfand": {
      "start": "16:00",
      "end": "17:00",
      "label_for_zoom": "Михаил Гельфанд · 16:00",
      "tool_label": "Лекция 1",
      "type": "talk",
      "category": "popsci",
      "venue": "main_stage"
    },
    "slot-st-sb1-A": {
      "start": "16:00",
      "end": "16:45",
      "label_for_zoom": "Станции · волна 1 · 16:00",
      "tool_label": "Станции · волна 1",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-A": {
      "start": "16:00",
      "end": "16:45",
      "label_for_zoom": "Станции · волна 1 · 16:00",
      "tool_label": "Станции · волна 1",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-A": {
      "start": "16:00",
      "end": "16:45",
      "label_for_zoom": "Станции · волна 1 · 16:00",
      "tool_label": "Станции · волна 1",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-A": {
      "start": "16:00",
      "end": "16:45",
      "label_for_zoom": "Станции · волна 1 · 16:00",
      "tool_label": "Станции · волна 1",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-B": {
      "start": "16:45",
      "end": "17:30",
      "label_for_zoom": "Станции · волна 2 · 16:45",
      "tool_label": "Станции · волна 2",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-B": {
      "start": "16:45",
      "end": "17:30",
      "label_for_zoom": "Станции · волна 2 · 16:45",
      "tool_label": "Станции · волна 2",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-B": {
      "start": "16:45",
      "end": "17:30",
      "label_for_zoom": "Станции · волна 2 · 16:45",
      "tool_label": "Станции · волна 2",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-B": {
      "start": "16:45",
      "end": "17:30",
      "label_for_zoom": "Станции · волна 2 · 16:45",
      "tool_label": "Станции · волна 2",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-C": {
      "start": "17:30",
      "end": "18:15",
      "label_for_zoom": "Станции · волна 3 · 17:30",
      "tool_label": "Станции · волна 3",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-C": {
      "start": "17:30",
      "end": "18:15",
      "label_for_zoom": "Станции · волна 3 · 17:30",
      "tool_label": "Станции · волна 3",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-C": {
      "start": "17:30",
      "end": "18:15",
      "label_for_zoom": "Станции · волна 3 · 17:30",
      "tool_label": "Станции · волна 3",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-C": {
      "start": "17:30",
      "end": "18:15",
      "label_for_zoom": "Станции · волна 3 · 17:30",
      "tool_label": "Станции · волна 3",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-D": {
      "start": "18:15",
      "end": "19:00",
      "label_for_zoom": "Станции · волна 4 · 18:15",
      "tool_label": "Станции · волна 4",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-D": {
      "start": "18:15",
      "end": "19:00",
      "label_for_zoom": "Станции · волна 4 · 18:15",
      "tool_label": "Станции · волна 4",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-D": {
      "start": "18:15",
      "end": "19:00",
      "label_for_zoom": "Станции · волна 4 · 18:15",
      "tool_label": "Станции · волна 4",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-D": {
      "start": "18:15",
      "end": "19:00",
      "label_for_zoom": "Станции · волна 4 · 18:15",
      "tool_label": "Станции · волна 4",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-E": {
      "start": "19:00",
      "end": "19:45",
      "label_for_zoom": "Станции · волна 5 · 19:00",
      "tool_label": "Станции · волна 5",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-E": {
      "start": "19:00",
      "end": "19:45",
      "label_for_zoom": "Станции · волна 5 · 19:00",
      "tool_label": "Станции · волна 5",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-E": {
      "start": "19:00",
      "end": "19:45",
      "label_for_zoom": "Станции · волна 5 · 19:00",
      "tool_label": "Станции · волна 5",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-E": {
      "start": "19:00",
      "end": "19:45",
      "label_for_zoom": "Станции · волна 5 · 19:00",
      "tool_label": "Станции · волна 5",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-st-sb1-F": {
      "start": "19:45",
      "end": "20:30",
      "label_for_zoom": "Станции · волна 6 · 19:45",
      "tool_label": "Станции · волна 6",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 0
    },
    "slot-st-sb2-F": {
      "start": "19:45",
      "end": "20:30",
      "label_for_zoom": "Станции · волна 6 · 19:45",
      "tool_label": "Станции · волна 6",
      "type": "station",
      "category": "station",
      "venue": "small_bar",
      "lane": 1
    },
    "slot-st-bb-F": {
      "start": "19:45",
      "end": "20:30",
      "label_for_zoom": "Станции · волна 6 · 19:45",
      "tool_label": "Станции · волна 6",
      "type": "station",
      "category": "station",
      "venue": "big_bar"
    },
    "slot-st-cy-F": {
      "start": "19:45",
      "end": "20:30",
      "label_for_zoom": "Станции · волна 6 · 19:45",
      "tool_label": "Станции · волна 6",
      "type": "station",
      "category": "station",
      "venue": "courtyard"
    },
    "slot-rajgorodski": {
      "start": "17:30",
      "end": "18:30",
      "label_for_zoom": "Андрей Райгородский · 17:30",
      "tool_label": "Лекция 2",
      "type": "talk",
      "category": "popsci",
      "venue": "main_stage"
    },
    "slot-skripchenko": {
      "start": "19:00",
      "end": "20:00",
      "label_for_zoom": "Александра Скрипченко · 19:00",
      "tool_label": "Лекция 3",
      "type": "talk",
      "category": "popsci",
      "venue": "main_stage"
    },
    "slot-music-1": {
      "start": "22:00",
      "end": "23:00",
      "label_for_zoom": "Главная сцена · 22:00",
      "tool_label": "Музыка 1",
      "type": "music",
      "category": "music",
      "venue": "main_stage"
    },
    "slot-music-2": {
      "start": "23:00",
      "end": "00:00",
      "label_for_zoom": "Главная сцена · 23:00",
      "tool_label": "Музыка",
      "type": "music",
      "venue": "main_stage",
      "category": "music"
    },
    "slot-music-3": {
      "start": "00:00",
      "end": "01:00",
      "label_for_zoom": "Главная сцена · 00:00",
      "tool_label": "Музыка",
      "type": "music",
      "category": "music",
      "venue": "main_stage"
    },
    "slot-dance": {
      "start": "03:00",
      "end": "04:00",
      "label_for_zoom": "Главная сцена · 03:00",
      "tool_label": "Музыка · финал",
      "type": "music",
      "category": "music",
      "venue": "main_stage"
    },
    "slot-discussion": {
      "start": "20:30",
      "end": "21:30",
      "label_for_zoom": "Дискуссия · 20:30",
      "tool_label": "Дискуссия",
      "type": "discussion",
      "category": "social",
      "venue": "main_stage",
      "exclusive": false
    },
    "slot-cinema-2": {
      "start": "20:30",
      "end": "22:00",
      "label_for_zoom": "Кино 2 · 20:30",
      "tool_label": "Кино 2",
      "type": "cinema",
      "category": "cinema",
      "venue": "library"
    },
    "slot-interlude-2": {
      "start": "18:30",
      "end": "19:00",
      "label_for_zoom": "Перебив · 18:30",
      "tool_label": "Короткометражки 1",
      "type": "interlude",
      "category": "cinema",
      "venue": "main_stage",
      "exclusive": false
    },
    "slot-interlude-3": {
      "start": "20:30",
      "end": "21:30",
      "label_for_zoom": "Перебив · 20:00",
      "tool_label": "Перфоманс ",
      "type": "interlude",
      "category": "social",
      "venue": "courtyard",
      "leaf": null
    },
    "slot-rap-evening": {
      "start": "21:30",
      "end": "21:50",
      "label_for_zoom": "Научно-технический рэп",
      "tool_label": "Музыка (двор)",
      "type": "music",
      "category": "music",
      "venue": "courtyard",
      "leaf": null,
      "exclusive": false
    },
    "slot-music-5": {
      "venue": "main_stage",
      "start": "01:00",
      "end": "02:00",
      "tool_label": "Музыка",
      "type": "music",
      "category": "music",
      "label_for_zoom": "Музыка · 01:00"
    },
    "slot-music-6": {
      "venue": "main_stage",
      "start": "02:00",
      "end": "03:00",
      "tool_label": "Музыка",
      "type": "music",
      "category": "music",
      "label_for_zoom": "Музыка · 02:00"
    },
    "slot-music-parallel-1": {
      "start": "21:30",
      "end": "22:30",
      "label_for_zoom": "Малая сцена · 21:30",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true,
      "leaf": null
    },
    "slot-music-parallel-2": {
      "start": "22:30",
      "end": "23:30",
      "label_for_zoom": "Малая сцена · 22:30",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-3": {
      "start": "23:30",
      "end": "00:15",
      "label_for_zoom": "Малая сцена · 23:30",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-4": {
      "start": "00:15",
      "end": "01:10",
      "label_for_zoom": "Малая сцена · 00:15",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-5": {
      "start": "01:10",
      "end": "02:10",
      "label_for_zoom": "Малая сцена · 01:10",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-6": {
      "start": "02:10",
      "end": "03:00",
      "label_for_zoom": "Малая сцена · 02:10",
      "tool_label": "Музыка (малая сцена)",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-music-parallel-7": {
      "start": "03:00",
      "end": "04:00",
      "label_for_zoom": "Малая сцена · 03:00",
      "tool_label": "Музыка (малая сцена) · финал",
      "type": "music-extra",
      "category": "music",
      "venue": "big_bar",
      "exclusive": true
    },
    "slot-networking": {
      "start": "20:30",
      "end": "21:30",
      "venue": "big_bar",
      "type": null,
      "category": "social",
      "exclusive": true,
      "leaf": null,
      "tool_label": "Нетворкинг",
      "label_for_zoom": "Нетворкинг от бюро Розетка"
    },
    "slot-yakovlev": {
      "start": "14:00",
      "end": "15:00",
      "label_for_zoom": "Иван Яковлев · 14:00",
      "tool_label": "Библиотека 1",
      "type": "talk",
      "category": "popsci",
      "venue": "library",
      "leaf": "leaf-side-morning"
    },
    "slot-gusev-talk": {
      "start": "17:00",
      "end": "17:30",
      "label_for_zoom": "Вячеслав Гусев · 17:15",
      "tool_label": "Партнёрское выступление",
      "type": "talk",
      "category": "popsci",
      "venue": "main_stage",
      "exclusive": false
    },
    "slot-cinema-1": {
      "start": "19:30",
      "end": "20:30",
      "label_for_zoom": "Документальный фильм · 19:30",
      "tool_label": "Кино",
      "type": "cinema",
      "category": "cinema",
      "venue": "library"
    },
    "slot-custom-1779301750995": {
      "start": "20:00",
      "end": "20:30",
      "label_for_zoom": "короткометражки ",
      "tool_label": "короткометражки 2",
      "venue": "main_stage",
      "category": "cinema",
      "exclusive": false
    },
    "slot-custom-1779301988086": {
      "start": "21:30",
      "end": "22:00",
      "label_for_zoom": "Перебив",
      "tool_label": "короткометражки 3",
      "venue": "main_stage",
      "category": "cinema",
      "exclusive": false
    }
  },
  "cards": [
    {
      "id": "talk-yakovlev-fractals",
      "status": "accepted",
      "type": "popsci",
      "title": "Фракталы вокруг нас",
      "speaker": "Ваня Яковлев, Полина Романова",
      "description": "Открывающая лекция фестиваля — введение в тему. Расскажем, что такое фракталы, как они устроены, и покажем, где их можно найти: в природе, в искусстве, в математике, в нашей повседневной жизни. Эта лекция задаёт тон всему, что будет происходить на фестивале дальше.",
      "venue": "library",
      "links": [
        {
          "label": "Telegram «Кроссворд Тьюринга»",
          "url": "https://t.me/turings_crossword"
        },
        {
          "label": "Сайт",
          "url": "https://matemateachka.com/mathteacheryakovlev"
        }
      ],
      "slot": "slot-yakovlev",
      "apollo_slot": "mid-1"
    },
    {
      "id": "talk-evdokimov",
      "status": "accepted",
      "type": "popsci",
      "title": "Задачи-картинки Квантика и Квантландии",
      "subtitle": "решаем задачи вместе с залом",
      "speaker": "Михаил Евдокимов",
      "speaker_role": "автор задач, популяризатор математики",
      "description": "В библиотеке Достоевского Михаил даст задачи, которые можно решить без знания математики — глядя на картинку. Их можно решать вслух, можно молча, можно с детьми и без.",
      "venue": "library",
      "links": [
        {
          "label": "Журнал «Квантик»",
          "url": "https://kvantik.com/"
        },
        {
          "label": "Квантландия",
          "url": "https://math.kvantland.com/"
        }
      ],
      "slot": "slot-evdokimov",
      "apollo_slot": "mid-2"
    },
    {
      "id": "talk-tarasevich",
      "status": "accepted",
      "type": "popsci",
      "title": "Научпоп-квиз",
      "subtitle": "командный квиз",
      "speaker_role": "научный журналист",
      "description": "Командный квиз в формате ЧГК с вопросами на стыке науки и искусства. Играть можно семьями, с детьми, школьниками — или без них.",
      "venue": "small_bar",
      "links": [
        {
          "label": "Кот Шрёдингера",
          "url": "https://t.me/kot_sh"
        }
      ],
      "slot": "slot-tarasevich",
      "apollo_slot": "center",
      "speaker": "Григорий Тарасевич"
    },
    {
      "id": "social-rosetka",
      "status": "accepted",
      "type": "social",
      "title": "Аттрактор",
      "subtitle": "Нетворкинг",
      "speaker": "Бюро «Розетка»",
      "speaker_role": "образовательное бюро",
      "description": "Сеанс знакомств, построенный по принципу фрактала: сначала участники представляются в парах, потом пары соединяются в четвёрки, четвёрки в группы по восемь, восемь в шестнадцать. На каждом этапе ищут общий паттерн между собой, сохраняют его или меняют. К концу часа группы из шестнадцати человек собирают карту своих связей — каждый уходит с контактами всех, с кем успел познакомиться.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Сайт",
          "url": "https://rozetka.team/"
        },
        {
          "label": "Instagram",
          "url": "https://www.instagram.com/obrazovantsy/"
        }
      ],
      "slot": "slot-networking",
      "apollo_slot": "big-2"
    },
    {
      "id": "talk-gelfand",
      "status": "accepted",
      "type": "popsci",
      "title": "Иерархия бесконечностей",
      "speaker": "Михаил Гельфанд",
      "speaker_role": "биоинформатик",
      "description": "Ясно, что пять яблок больше, чем три яблока. Но вот можно ли сказать, каких чисел больше: чётных или нечётных? чётных или натуральных? целых или рациональных дробей? Как вообще сравнивать бесконечности? Или они все одинаковы?",
      "venue": "main_stage",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/mikhail_s_gelfand"
        }
      ],
      "slot": "slot-gelfand",
      "apollo_slot": "big-1"
    },
    {
      "id": "talk-rajgorodski",
      "status": "accepted",
      "type": "popsci",
      "title": "Сколько нужно цветов?",
      "speaker": "Андрей Райгородский",
      "speaker_role": "математик, директор ФПМИ МФТИ",
      "description": "Возьмите все точки плоскости и раскрасьте их так, чтобы любые две на единичном расстоянии были разного цвета. Сколько цветов вам понадобится? Удивительно, что эта задача, которая звучит как школьная, оказалась одной из ключевых открытых проблем комбинаторной геометрии и не решена до сих пор. На лекции мы разберёмся, что про неё всё-таки известно, заглянем в трёхмерное пространство и посмотрим на много картинок. По пути встретятся шестиугольные соты, замощения усечёнными октаэдрами и другие неожиданно красивые объекты",
      "venue": "main_stage",
      "links": [
        {
          "label": "Wiki МФТИ",
          "url": "https://wiki.mipt.tech/index.php/Райгородский_Андрей_Михайлович"
        },
        {
          "label": "Страница на МФТИ",
          "url": "https://mipt.ru/education/chairs/dm/staff/raigorodskii.php"
        }
      ],
      "slot": "slot-rajgorodski",
      "apollo_slot": "big-3"
    },
    {
      "id": "talk-skripchenko",
      "status": "accepted",
      "type": "popsci",
      "title": "Математика жизни",
      "speaker": "Александра Скрипченко",
      "speaker_role": "математик",
      "description": "Поговорим о том, как яркие математические теории объясняют природу: как фракталы связаны с моделированием экосистем и откуда математики знают, как раскрашен тигр",
      "venue": "main_stage",
      "links": [
        {
          "label": "Страница на ВШЭ",
          "url": "https://www.hse.ru/org/persons/114685975/"
        }
      ],
      "slot": "slot-skripchenko",
      "apollo_slot": "big-2"
    },
    {
      "id": "puzzle-fractal-3d",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Сделай 3D-фрактал из бумаги",
      "speaker": "Полина Романова",
      "description": "Многие видели книги с выдвижными иллюстрациями. Оказывается, можно создать раскладывающуюся открытку с фракталом в технике pop up. На мастер-классе участники смогут прочувствовать, что такое самоподобие и сделать свои собственные трехмерные модели фракталов.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/maomao_les"
        }
      ],
      "slot": "slot-st-bb-F",
      "_source_app": "app-15",
      "apollo_slot": "big-1"
    },
    {
      "id": "puzzle-engineering-origami",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Инженерное оригами",
      "speaker": "Полина Романова",
      "description": "Соберём подвижные модели солнечных панелей в технике оригами: по чертежу, со сборкой и инструкцией. Складные конструкции из бумаги работают по строгим математическим правилам, поэтому их применяют в инженерии — от солнечных батарей до медицинских стентов.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/maomao_les"
        }
      ],
      "slot": "slot-st-bb-B",
      "_source_app": "app-16",
      "apollo_slot": "big-2"
    },
    {
      "id": "music-rap",
      "status": "accepted",
      "type": "music",
      "subtype": "courtyard",
      "title": "Научно-технический рэп",
      "speaker": "Влад Горелов",
      "speaker_role": "музыкант, научно-технический рэп",
      "description": "Единственная группа в России, играющая нердкор — интеллектуальный хип-хоп. Песни — про реалии жизни IT-специалистов, биографии учёных и популярные теоремы. Влад программист, в прошлом сотрудник теорсектора Ландау. Группа основана в 2014 году «с целью нести свет знания в небытие хип-хопа».",
      "venue": "courtyard",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/ntr1_0"
        }
      ],
      "slot": "slot-rap-evening",
      "apollo_slot": "big-1"
    },
    {
      "id": "social-tochka-nol",
      "status": "accepted",
      "type": "social",
      "title": "Точка-ноль",
      "speaker": "Алина Асомния",
      "description": "Музыкальный спектакль по тексту Хармса «Нуль и ноль». Алина плетёт звуковую среду в реальном времени, в зале — физический объект-нуль, к которому зритель может прикоснуться. Каждое прикосновение включает свой звуковой эффект, спектакль реагирует на действия зала. Можно ничего не делать — спектакль всё равно идёт сам.",
      "venue": "courtyard",
      "links": [
        {
          "label": "Сайт",
          "url": "https://alina.asomnia.art"
        }
      ],
      "slot": "slot-interlude-3",
      "_source_app": "app-26",
      "apollo_slot": "big-3"
    },
    {
      "id": "discussion-tba",
      "status": "accepted",
      "type": "social",
      "title": "Бесконечная вселенная в замкнутом мире",
      "subtitle": "лайв-подкаст философов и математиков",
      "speaker": "Дискуссия между философией и математикой",
      "description": "Лайв-подкаст о фракталах на границе математики и философии. Простое итеративное правило, заданное на конечной плоскости, порождает структуру с бесконечной длиной, бесконечной глубиной, самоподобием на всех масштабах. Это математический факт. Но бесконечное в конечном — это содержательное утверждение об устройстве мира или удобная метафора нашего масштабирования? Состав участников будет объявлен.",
      "venue": "main_stage",
      "slot": "slot-discussion",
      "apollo_slot": "big-1"
    },
    {
      "id": "cinema-feature-pi",
      "status": "accepted",
      "type": "cinema",
      "subtype": "feature",
      "title": "Пи",
      "speaker": "Даррен Аронофски",
      "description": "Сначала построим дерево Пифагора и попробуем понять, конечна ли его площадь. Затем с помощью циркуля и формулы Декарта достроим ковёр Аполлония, обсудим его раскраски и связь с цепными дробями. Будем работать руками — и разбираться, как фракталы устроены.",
      "venue": "library",
      "slot": "slot-cinema-2",
      "apollo_slot": "big-1"
    },
    {
      "id": "cinema-anim-horsthuis",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Julius Horsthuis",
      "description": "Цифровой художник из Нидерландов. Делает завораживающие фрактальные анимации, в которых математическая сложность встречается с кинематографической красотой.",
      "venue": "main_stage",
      "apollo_slot": "big-1"
    },
    {
      "id": "cinema-anim-machina",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Machina Infinitum",
      "description": "«Эти миры существовали всегда, Machina Infinitum интерпретирует их, позволяя вам их познать».",
      "venue": "main_stage",
      "apollo_slot": "big-2"
    },
    {
      "id": "cinema-anim-missing-fractals",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Missing fractals",
      "description": "Как оплакивать потерю того, чего у тебя никогда не было? Грейс живёт воспоминаниями и мечтами о том, что могло бы случиться — после потери того, чего у неё никогда и не было.",
      "venue": "main_stage",
      "apollo_slot": "big-3"
    },
    {
      "id": "cinema-anim-fractal-baby",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Fractal baby",
      "description": "Маленькая девочка разговаривает с младенцем, который ещё в животе у матери. Она перечисляет ему все причины, по которым ему стоит выйти наружу.",
      "venue": "main_stage",
      "apollo_slot": "mid-1"
    },
    {
      "id": "cinema-anim-like-in-a-dream",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Like in a dream",
      "description": "Анимация по проекту «Атлас человека» Брайана Альвареса из Калифорнийского университета в Беркли. Иллюстрация его идеи о красоте живых организмов.",
      "venue": "main_stage",
      "apollo_slot": "mid-2"
    },
    {
      "id": "cinema-anim-worlds-within-worlds",
      "status": "accepted",
      "type": "cinema",
      "subtype": "animation",
      "title": "Worlds Within Worlds",
      "description": "Аудиовизуальное исследование пространства, времени, размерности, геометрии, сознания и биоразнообразия.",
      "venue": "main_stage",
      "apollo_slot": "mid-3"
    },
    {
      "id": "cinema-short-big-brains",
      "status": "accepted",
      "type": "cinema",
      "subtype": "short",
      "title": "Big Brains, Small Films",
      "description": "Фильм основан на последнем интервью Бенуа Мандельброта, записанном в 2010 году за 19 дней до его смерти. Отец фракталов вспоминает свой путь в математике и рассказывает, как его взгляд на мир привёл к открытию фрактальной геометрии.",
      "apollo_slot": "big-1"
    },
    {
      "id": "cinema-short-menger-eiffel",
      "status": "accepted",
      "type": "cinema",
      "subtype": "short",
      "title": "Короткий метр и анимация ",
      "description": "Карл Менгер встречает Гюстава Эйфеля в машине времени. Бесконечное путешествие на разных скоростях и в разных направлениях — фильм показывает его на разных уровнях одновременно.",
      "venue": "main_stage",
      "slots": [
        "slot-interlude-2",
        "slot-custom-1779301750995",
        "slot-custom-1779301988086"
      ],
      "apollo_slot": "big-2"
    },
    {
      "id": "music-main-22",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Пётр Термен",
      "speaker": "Пётр Термен",
      "description": "Пётр Термен (Peter Theremin) — один из ведущих исполнителей на терменвоксе в мире, академический и электронный музыкант, руководитель школы терменвокса ThereminFamilySchool, правнук Льва Термена. Как композитор — лауреат премий Creativepool и Clio Music.",
      "venue": "main_stage",
      "links": [
        {
          "label": "Сайт",
          "url": "https://peter.theremintimes.ru/"
        }
      ],
      "slot": "slot-music-1",
      "apollo_slot": "mid-2"
    },
    {
      "id": "music-main-23",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Stropharia",
      "description": "Московский live-проект, сформирован Дмитрием Поликарповым в 1993 году. Умная электроника, радикальный бит, цифровой хардкор, эйсид-транс. Выступление поддержит видео-арт-художник vj forrrest.",
      "venue": "main_stage",
      "links": [
        {
          "label": "Блог",
          "url": "http://blog.stropharia.ru/"
        },
        {
          "label": "Bandcamp",
          "url": "https://stropharia.bandcamp.com/"
        }
      ],
      "slot": "slot-music-2",
      "apollo_slot": "mid-3"
    },
    {
      "id": "music-main-00",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Rombix",
      "description": "Роман Вороновский — музыкант, продюсер, основатель лейбла 24919. Исследует процессы плёночной звукозаписи и манипуляции с лентой: шелест плёночных петель, спонтанные вмешательства и непредсказуемое наложение звуков порождают постоянно меняющийся поток.",
      "venue": "main_stage",
      "links": [
        {
          "label": "LiveJournal",
          "url": "https://rombix.livejournal.com/"
        },
        {
          "label": "Discogs",
          "url": "https://www.discogs.com/artist/115618-Rombix"
        }
      ],
      "slot": "slot-music-3",
      "apollo_slot": "big-1"
    },
    {
      "id": "music-main-01",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Womba",
      "description": "Сольный проект Тихона Кубова. Звуковые конструкты построены на деформированных кассетных и полевых сэмплах, полуразложившихся home-fi гармониях, конвульсивных синтетических вибрациях с дерзкими вокальными экзерсисами.",
      "venue": "main_stage",
      "links": [
        {
          "label": "Bandcamp",
          "url": "https://womba.bandcamp.com/music"
        },
        {
          "label": "VK",
          "url": "https://vk.com/club7401126"
        },
        {
          "label": "Instagram",
          "url": "https://www.instagram.com/modulor_archives/"
        }
      ],
      "slot": "slot-music-5",
      "apollo_slot": "big-2"
    },
    {
      "id": "music-main-02",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Hobboth",
      "description": "Эмбиент-проект, вдохновлённый земным и космическим воплощениями природы. Мелодические секвенции наслаиваются друг на друга и плавно переходят в шумы и дроны.",
      "venue": "main_stage",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/HobbothMusic"
        },
        {
          "label": "YouTube",
          "url": "https://youtube.com/@hobbothmusic"
        }
      ],
      "slot": "slot-music-6",
      "apollo_slot": "big-3"
    },
    {
      "id": "music-main-03",
      "status": "accepted",
      "type": "music",
      "subtype": "main_stage",
      "title": "Misha Nikitin",
      "description": "Московский продюсер, саунд-дизайнер и диджей. Работает на стыке экспериментальной и танцевальной музыки, любит деконструктивные зарисовки и пост-жанровый подход. Резидент Track ID pls!, Oramica и Aspect, играл на Signal, Outline и Nur, релизы на Judder, Applique, ШУМ, TOH, Oramica и других. На фестивале — пьеса в трёх частях, своеобразный гимн дефрагментации и расщеплению.",
      "venue": "main_stage",
      "links": [
        {
          "label": "SoundCloud",
          "url": "https://soundcloud.com/mishanikitin"
        }
      ],
      "slot": "slot-dance",
      "apollo_slot": "mid-1"
    },
    {
      "id": "music-pink-2130",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "Brinstaar",
      "description": "Проект московского художника и музыканта Михаила Мясоедова. Соучредитель лейбла Kotä, преподаёт саунд-арт в Школе дизайна НИУ ВШЭ. К фестивалю готовит специальный сетап, в котором звук генерируется процедурными алгоритмами, в том числе на основе фракталов.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Bandcamp",
          "url": "https://brinstaar.bandcamp.com/"
        },
        {
          "label": "Лейбл Kotä",
          "url": "https://kotaerecords.com/artists/brinstaar"
        }
      ],
      "slot": "slot-music-parallel-1",
      "apollo_slot": "mid-2"
    },
    {
      "id": "music-pink-2230",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "Spiralfractal",
      "description": "В основе проекта — спиральность и фрактальность всего сущего. Во время его выступления архаичные ритмы, этнические мелодии и басовые волны формируют на танцполе узоры сакральной геометрии.",
      "venue": "big_bar",
      "links": [
        {
          "label": "VK",
          "url": "https://m.vk.com/public205955884"
        }
      ],
      "slot": "slot-music-parallel-2",
      "apollo_slot": "mid-3"
    },
    {
      "id": "music-pink-2330",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "S66",
      "venue": "big_bar",
      "slot": "slot-music-parallel-3",
      "speaker": "S66",
      "description": "S66 — Борис Шилин, создатель и CEO проекта «ЩЁЛОЧЬ», идеолог и креативный директор лейбла экспериментальной электроники САУНД. Его музыка — симбиоз noise, ambient, IDM, techno, jungle и breakcore, вдохновлённый английской и германской электроникой 90-х и 00-х.",
      "apollo_slot": "center"
    },
    {
      "id": "music-pink-0030",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "Morakh",
      "description": "Резидент лейблов «Местность» и Shelter Tapes. Звучание проекта Morakh — синтез интеллигентного техно, брейкбита, IDM и future garage, энергичная и эмоциональная музыка для больших площадок. Его альбомы сравнивали с работами Moderat, Bicep и Overmono.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/morakhmusic"
        },
        {
          "label": "VK",
          "url": "https://vk.com/morakhmusic"
        },
        {
          "label": "Instagram",
          "url": "https://instagram.com/morakhmusic"
        }
      ],
      "slot": "slot-music-parallel-4",
      "apollo_slot": "big-1"
    },
    {
      "id": "music-pink-0130",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "ænsof",
      "description": "В каббалистической традиции есть непознаваемая сущность Б-га, дословно — «бесконечное». Дуэт использует абсолютно современный инструментарий, но, не размениваясь в своём звуке на сиюминутные веяния моды, исследует сквозь призму классических индустриальных и дабовых техник полубессознательные и порой архетипические образы.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/aensofsound"
        },
        {
          "label": "Instagram",
          "url": "http://instagram.com/aensofsound"
        }
      ],
      "slot": "slot-music-parallel-5",
      "apollo_slot": "big-2"
    },
    {
      "id": "music-pink-0230",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "garish_cyborg",
      "description": "Московский экспериментатор, работающий в разных жанрах — от гипнотического дабстепа до самых шумных форм индастриала. Основатель лейблов KILL EGO, «Бегущий Человек», «Такое».",
      "venue": "big_bar",
      "links": [
        {
          "label": "Ссылки",
          "url": "https://taplink.cc/garish_cyborg"
        }
      ],
      "slot": "slot-music-parallel-6",
      "apollo_slot": "big-3"
    },
    {
      "id": "music-pink-final",
      "status": "accepted",
      "type": "music",
      "subtype": "big_bar",
      "title": "The Darkest Supernova",
      "description": "Дискотека под шумы. Витчхаус и нойз, дрон и брейкбит — создатель проекта стирает рамки между стилями, приводя их к общему знаменателю — музыке как таковой. Финал ночной программы в Баре Серпинский.",
      "venue": "big_bar",
      "links": [
        {
          "label": "VK",
          "url": "https://vk.com/id885725241"
        }
      ],
      "slot": "slot-music-parallel-7",
      "apollo_slot": "mid-1"
    },
    {
      "id": "talk-gusev-nn",
      "status": "accepted",
      "type": "popsci",
      "title": "Внутри нейросети живут фракталы",
      "speaker": "Вячеслав Гусев",
      "description": "Вячеслав Гусев, учитель AI & Computer Science в проекте TLF. На сцене — короткое выступление о том, как фракталы возникают в обучающихся нейросетях. Параллельно в Большом баре в две сессии работает стенд Гусева с визуализациями хаотических процессов обучения нейросетей — можно подойти и поразбираться вживую.",
      "links": [
        {
          "label": "TLF",
          "url": "https://leaderstech.ru/"
        }
      ],
      "slots": [
        "slot-gusev-talk",
        "slot-st-sb2-C",
        "slot-st-sb2-F"
      ],
      "venue": "small_bar",
      "lane": "left",
      "apollo_slot": "mid-3"
    },
    {
      "id": "cinema-short-fractal-universe",
      "status": "accepted",
      "type": "cinema",
      "subtype": "short",
      "title": "Fractal universe?",
      "description": "Может ли наша вселенная быть фрактальной? Может ли простая математика создать целую вселенную? Что общего у брокколи с Большим взрывом? И при чём здесь видеоигры No Man's Sky и Minecraft?",
      "apollo_slot": "big-3"
    },
    {
      "id": "cinema-feature-doc-order",
      "status": "accepted",
      "type": "cinema",
      "subtype": "feature",
      "title": "Фракталы: Порядок в хаосе",
      "description": "«Фракталы: Порядок в хаосе» (Fractals: Hunting the Hidden Dimension) — научно-популярный фильм PBS из серии NOVA, 2008 год. Лента исследует математическую революцию, доказавшую, что кажущиеся хаотичными формы природы — облака, деревья, горные пики, даже сердечный ритм — подчиняются строгим геометрическим законам фракталов.",
      "venue": "library",
      "slot": "slot-cinema-1",
      "apollo_slot": "big-2",
      "links": [
        {
          "label": "IMDb",
          "url": "https://www.imdb.com/title/tt1287217/"
        }
      ]
    },
    {
      "id": "mc-calligraphy",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Каллиграфия как фрактал",
      "speaker": "Наташа Евдокимова",
      "description": "Японская каллиграфия — фрактальная: каждая черта повторяет форму целого иероглифа, и каждый штрих неповторим. Возьмём кисть и тушь, попробуем сами — без задачи «сделать красиво», с задачей прочувствовать, как одно движение разворачивается в форму.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/natashasensei"
        }
      ],
      "slots": [
        "slot-st-bb-C",
        "slot-st-bb-E"
      ],
      "_source_app": "app-9",
      "apollo_slot": "big-3"
    },
    {
      "id": "mc-tie-dye",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Тай-дай: космические яйца",
      "speaker": "Ольга Черменская",
      "description": "Техника «Космические яйца»: складываем ткань определённым образом, стягиваем вощёной нитью и заливаем кипятком с красителями. Через полчаса разворачиваем — получается фрактальный узор, который никогда не повторится.",
      "venue": "courtyard",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/djokatkova"
        }
      ],
      "slots": [
        "slot-st-cy-A",
        "slot-st-cy-C"
      ],
      "_source_app": "app-17",
      "apollo_slot": "mid-2"
    },
    {
      "id": "mc-fractal-stained-glass",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Фрактальные витражи",
      "speaker": "Анастасия Гутарева",
      "description": "Рисуем витражные краски по гибкому пластику. По линиям и формам получается фрактальный узор — каждый забирает свою работу с собой.",
      "venue": "small_bar",
      "slots": [
        "slot-st-sb2-E",
        "slot-st-sb2-B"
      ],
      "_source_app": "app-27",
      "lane": "right",
      "apollo_slot": "mid-1"
    },
    {
      "id": "mc-fractal-tiles",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Фрактал-Ателье",
      "speaker": "Татьяна Зайцева",
      "description": "Татьяна занимается фрактальными замощениями — это её основная научная работа на мехмате. На станции можно выбрать форму фрактала и цветовую гамму, программа сгенерирует замощение, а маленький термопринтер тут же напечатает результат. Получается персональный паттерн — можно унести с собой, можно отправить файлом и потом напечатать на чём угодно.",
      "venue": "small_bar",
      "slots": [
        "slot-st-sb2-A",
        "slot-st-sb2-E"
      ],
      "_source_app": "app-24",
      "lane": "left",
      "apollo_slot": "big-3"
    },
    {
      "id": "ev-1778338476401-960j",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Эксперименты: от мира идей к миру вещей",
      "speaker": "Станислав Карнаухов",
      "description": "Станция с экспериментами, которые можно потрогать руками. В этом году у Стаса магистральная линия — от спектроскопии и химии к квантовой механике. Идея простая: показать, как обычные опыты открывают свою квантовую природу, и дать прикоснуться к квантовой механике руками.",
      "venue": "courtyard",
      "links": [
        {
          "label": "Страница на сайте СУНЦ МГУ",
          "url": "https://internat.msu.ru/physics/sotrudniki-kafedry-fiziki-sunts-mgu/kornauhov-stanislav-sergeevich/"
        },
        {
          "label": "СУНЦ на Фестивале науки 2025",
          "url": "https://internat.msu.ru/suncz-mgu-na-festivale-nauki-2025/"
        }
      ],
      "slots": [
        "slot-st-cy-B",
        "slot-st-cy-F"
      ],
      "_source_app": "app-37",
      "apollo_slot": "big-1"
    },
    {
      "id": "ev-1778341972924-tz5v",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Симметрия наноматериалов",
      "speaker": "Анастасия Коровина",
      "description": "Наноматериалы состоят из элементарных ячеек — самой маленькой повторяющейся части. На станции можно изучить срезы разных наноматериалов и попробовать найти элементарную ячейку самому, по разным уровням сложности. Рядом — напечатанная на 3D-принтере структура двухслойного графена, которую можно поворачивать руками.",
      "venue": "small_bar",
      "slots": [
        "slot-st-sb2-A",
        "slot-st-sb2-D"
      ],
      "_source_app": "app-29",
      "lane": "right",
      "apollo_slot": "big-2"
    },
    {
      "id": "ev-letnyaya-shkola-linguistics",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Задачи, которые придумали лингвисты, которые...",
      "speaker": "Тёма Бойко",
      "speaker_role": "команда летней школы",
      "description": "Человеческие языки могут порой казаться довольно хаотичными, но всё же в них есть место системе, и иногда эта система очень элегантная. Мы предлагаем решить несколько лингвистических задач, показывающих структуры с самоподобием и гармонией в различных языках.",
      "venue": "big_bar",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/lsh_linguistics"
        }
      ],
      "slots": [
        "slot-st-bb-D",
        "slot-st-bb-A"
      ],
      "apollo_slot": "mid-2"
    },
    {
      "id": "ev-maskul-prefractals",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Ковер Аполлония, дерево Пифагора",
      "speaker": "Анна Назмутдинова",
      "speaker_role": "онлайн-школа олимпиадной математики",
      "description": "Сначала построим дерево Пифагора и попробуем понять, конечна ли его площадь. Затем с помощью циркуля и формулы Декарта достроим ковёр Аполлония, обсудим его раскраски и связь с цепными дробями. Будем работать руками — и разбираться, как фракталы устроены.",
      "venue": "small_bar",
      "links": [
        {
          "label": "Сайт",
          "url": "https://math-cool.com/"
        },
        {
          "label": "Telegram",
          "url": "https://t.me/math_cool_rus"
        }
      ],
      "slots": [
        "slot-st-sb2-B",
        "slot-st-sb2-D"
      ],
      "lane": "left",
      "apollo_slot": "mid-3"
    },
    {
      "id": "ev-1778769282894-6x65",
      "status": "accepted",
      "type": "station",
      "subtype": "experiment",
      "title": "Фрактальная природа моря",
      "speaker": "Серомаха Екатерина",
      "description": "Екатерина — science-art-художник, который вокруг морской биологии выстраивает интересные визуальные сюжеты. Раковины, аммониты, кораллы — почти все формы морской жизни фрактальны, и фестиваль — повод их рассмотреть подробнее. Формат станции уточняется.",
      "venue": "small_bar",
      "links": [
        {
          "label": "Сайт",
          "url": "https://seromakha.ru"
        },
        {
          "label": "Превью работ (Я.Диск)",
          "url": "https://disk.yandex.ru/i/QZJO4CaFOeA9ow"
        },
        {
          "label": "Портфолио (Я.Диск)",
          "url": "https://disk.yandex.ru/i/ZzA7R26U5UoSFg"
        }
      ],
      "slots": [
        "slot-st-sb2-C",
        "slot-st-sb2-F"
      ],
      "_source_app": "app-40",
      "lane": "right",
      "apollo_slot": "mid-1"
    },
    {
      "id": "ev-1778338408747-r7tp",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "FracLife",
      "speaker": "Юля Назаренко",
      "description": "Интерактивная видеоинсталляция Юли Назаренко, в которой фракталы оживают на экране под звук и откликаются на движения зрителя: меняют структуру, тип, глубину. Зритель становится частью генеративной системы и сам управляет её ростом.",
      "links": [
        {
          "label": "Instagram",
          "url": "https://www.instagram.com/jell_ixx/"
        },
        {
          "label": "Видео проектов (Я.Диск)",
          "url": "https://disk.yandex.ru/d/sj_-YzlY4_-xdQ"
        }
      ],
      "_source_app": "app-36",
      "apollo_slot": "big-1"
    },
    {
      "id": "ev-1778360794899-4bwi",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Сферус",
      "speaker": "Андрей Гринблат",
      "description": "На сайте Андрея Гринблата можно играть с фракталами, шумом и другими математическими объектами, менять параметры и собирать собственные. Сам Андрей на фестивале не будет, но станция работает самостоятельно — садитесь и пробуйте.",
      "links": [
        {
          "label": "Сайт",
          "url": "https://spherus.ru/"
        },
        {
          "label": "Видео на Rutube #1",
          "url": "https://rutube.ru/shorts/da56803ed2a2dd0e975ed2b8f04994eb/?playlist=530134"
        },
        {
          "label": "Видео на Rutube #2",
          "url": "https://rutube.ru/video/83266cb1cd2ee9aad68ed468941a1ec3/?playlist=530134"
        },
        {
          "label": "Видео на Rutube #3",
          "url": "https://rutube.ru/video/df284853b8ad9b5226a62ca52b15bf62/?playlist=530134"
        },
        {
          "label": "Видео на Rutube #4",
          "url": "https://rutube.ru/video/868965d1440d1b523bb38ac5e905c575/?playlist=530134"
        },
        {
          "label": "Видео на Rutube #5",
          "url": "https://rutube.ru/video/2aee4c8e3f547ed7ffd0f4baacbb6f39/?playlist=530134"
        },
        {
          "label": "Статья на Хабре #1",
          "url": "https://habr.com/ru/companies/sberbank/articles/952102/"
        },
        {
          "label": "Статья на Хабре #2",
          "url": "https://habr.com/ru/companies/sberbank/articles/954726/"
        },
        {
          "label": "Статья на Хабре #3",
          "url": "https://habr.com/ru/companies/sberbank/articles/957194/"
        }
      ],
      "_source_app": "app-23",
      "apollo_slot": "big-2"
    },
    {
      "id": "media-yav",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "Внутренняя спираль",
      "speaker": "арт-группа Явь · Анастасия Владычкина",
      "description": "Серия видеоработ «Яви», сделанная специально для «Фрактальной Одиссеи». Эти работы хочется смотреть долго.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/yav_zone"
        }
      ],
      "_source_app": "app-28",
      "apollo_slot": "big-1"
    },
    {
      "id": "inst-tetraquark",
      "status": "accepted",
      "type": "art",
      "subtype": "installation",
      "title": "Очарование тетракварка",
      "speaker": "Алекс Мухин",
      "description": "Скульптурная интерпретация физической частицы, очарованного тетракварка. Имя кварка отсылает к букве T, форма работы вырастает из этой буквы. Внутри объекта зашито самоподобие — символ внутри символа, структура внутри структуры.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/alex_abstraction_art"
        }
      ],
      "_source_app": "app-4",
      "apollo_slot": "big-1"
    },
    {
      "id": "inst-polyhedral-exhibit",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "Полиэдральное цветение",
      "speaker": "Максимилиано Роганов",
      "description": "Трёхмерный объект Максимилиано Роганова — рекурсивная агрегация икосферических узлов. Структура колеблется между дискретной геометрией и непрерывной формой. Это не модель чего-либо конкретного — это модель самого процесса организации формы, где красота возникает из логики роста.",
      "_source_app": "app-12",
      "apollo_slot": "big-2"
    },
    {
      "id": "art-monads-mirrors",
      "status": "accepted",
      "type": "art",
      "subtype": "art",
      "title": "Монады — зеркала души",
      "speaker": "Александр Алеф Вайсман",
      "description": "Метакогнитивные зеркала Александра Алеф Вайсмана. «Моё искусство — это попытка через образ выразить духовное восхищение безупречностью природы всего».",
      "links": [
        {
          "label": "Сайт",
          "url": "https://alefwiseman.ru"
        }
      ],
      "apollo_slot": "big-2"
    },
    {
      "id": "inst-anthill-sierpinski",
      "status": "accepted",
      "type": "art",
      "subtype": "installation",
      "title": "Муравейник Серпинского",
      "speaker": "арт-дуэт EVPRAXIS",
      "description": "Объект из авторского фарфорового композита, разработанного в резиденции ГЭС-2. Если включить подсветку, проявляется фрактальная структура пирамиды.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/evpraxis"
        }
      ],
      "apollo_slot": "big-3"
    },
    {
      "id": "media-cactus-juice",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "Cactus Juice",
      "speaker": "Cactus Juice",
      "description": "Команда визуальных экспериментаторов. Сэт и Лёша совмещают импровизированный генеративный лайвкодинг с мощнейшим шейдером — законами физики. Выпив это зелье, можно увидеть декартово произведение модулирующего и модулированного, фрактальные зафидбэченные узоры и ритуальное поедание сгущёнки.",
      "apollo_slot": "big-3"
    },
    {
      "id": "media-fractal-reflection",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "Фрактальное Отражение",
      "speaker": "Артём Ткач",
      "description": "«Рождаясь из бесконечности. Мы путешествуем по бесконечности. Где структура реальности трансформируется в зависимости от пути.» Работа состоит из трёх визуальных композиций: рождение, путешествие и движение, трансформация структуры с финальной остановкой пути. Произведение выставлялось в подземном музее Зарядья, в Дубае, в Пекине на восьмиметровом экране, а также на крупнейшем в Европе медиафасаде.",
      "apollo_slot": "mid-1"
    },
    {
      "id": "inst-element1",
      "status": "accepted",
      "type": "art",
      "subtype": "installation",
      "title": "Элемент 1",
      "speaker": "Ирина Канделариа",
      "description": "Объект-инсталляция из серии «Элементы» — про рекурсию и самоподобие. Каждая работа задумана как начальная точка, из которой могут вырасти следующие, как из исходного фрагмента вырастает фрактал.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/processus_i"
        }
      ],
      "_source_app": "app-13",
      "apollo_slot": "big-2"
    },
    {
      "id": "art-plato",
      "status": "accepted",
      "type": "art",
      "subtype": "art",
      "title": "Артефакты Плато",
      "speaker": "Александр Солеев",
      "description": "Серия скульптур, в которых живые природные формы переплетаются с техногенными. Александр Солеев давно ведёт проект «Плато» — это искусственный мир, где он эмулирует и визуализирует процессы развития искусственной жизни. Иногда на Плато удаётся захватить форму и перенести её в наш мир — в керамику, гипс, искусственный камень. Эти артефакты и привозит на фестиваль.",
      "_source_app": "app-7",
      "apollo_slot": "big-1"
    },
    {
      "id": "art-other-spaces",
      "status": "accepted",
      "type": "art",
      "subtype": "art",
      "title": "Свет иных пространств",
      "speaker": "Пётр Николаев",
      "description": "Каждая картина Петра Николаева — это фрагмент фрактала, бесконечной математической структуры, выросшей из простой формулы. И каждая картина — это фрагмент целого мира, в котором можно было бы выхватить любое другое место.",
      "links": [
        {
          "label": "Статья в АиФ",
          "url": "https://aif.ru/culture/art/portal-v-inye-miry-uchyonyy-sozdayot-kartiny-v-zhanre-fraktalnoy-zhivopisi"
        }
      ],
      "apollo_slot": "big-3"
    },
    {
      "id": "exh-1779028883221",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Эволюция графов",
      "speaker": "Александр Николаичев",
      "description": "С помощью простых локальных замен подграфов можно получить не только тьюринг-полную систему перезаписи, но и красивые картины на грани с искусством — в том числе фракталы. Вы сами выбираете правила и шаги, а система начинает жить и эволюционировать, выдавая визуализации. Александр Николаичев покажет, как это устроено, и расскажет, как связаны графовые переписи, конечные автоматы, физический проект Вольфрама и лямбда-исчисление.",
      "_source_app": "app-22",
      "apollo_slot": "big-3"
    },
    {
      "id": "mc-dreamcatcher",
      "status": "accepted",
      "type": "station",
      "subtype": "workshop",
      "title": "Мастерская про ловцов снов",
      "speaker": "Лина Кундалина",
      "description": "Вы сотворите свой личный фрактальный оберег, который будет дарить тепло и уют в вашем доме и защищать как во сне, так и на яву. Это знаменитый индейский предмет силы, в процессе плетения которого мы вкладываем желаемое намерение и создаем для себя амулет со смыслом. Занятие развивает мелкую моторику и настраивает внутреннее состояние на гармоничный лад. Все материалы предоставляются, а свой ловец снов вы заберете с собой.",
      "venue": "courtyard",
      "slots": [
        "slot-st-cy-E",
        "slot-st-cy-D"
      ],
      "apollo_slot": "mid-3"
    },
    {
      "id": "inst-mimesis",
      "status": "accepted",
      "type": "art",
      "subtype": "art",
      "title": "Мимесис",
      "speaker": "арт-дуэт EVPRAXIS",
      "description": "Серия работ, в которой Евдокия и Ирина пытаются представить, как мог бы выглядеть портрет искусственного интеллекта. В античной философии мимесисом называли подражание — способность человека воспроизводить свой мир в искусстве. Художник наблюдает реальность и превращает её в образ. По тому же принципу люди создали искусственный интеллект: подражая устройству собственного мышления.",
      "links": [
        {
          "label": "Telegram",
          "url": "https://t.me/evpraxis"
        }
      ],
      "apollo_slot": "mid-1"
    },
    {
      "id": "media-forrest",
      "status": "accepted",
      "type": "art",
      "subtype": "media",
      "title": "forrest",
      "speaker": "forrest",
      "description": "«Для меня творчество — это магия, это всегда энергия открытия. Это удивительное ощущение, когда сквозь тебя проходит поток вибраций Вселенной, и, если повезёт настроиться на него, то он унесёт тебя с собой за пределы реальности.» Как виджей, forrest во время перформанса использует комбинации различных инструментов, добиваясь совпадения картинки со звуковой текстурой, позволяя ей стать комплиментарной составляющей, неотъемлемой и органичной частью. Только так может возникнуть эффект синергии, когда «единица» и «ноль» в сочетании друг с другом дадут на выходе «десятку»."
    },
    {
      "id": "inst-macramain",
      "status": "accepted",
      "type": "art",
      "subtype": "installation",
      "title": "Macramain",
      "speaker": "Полина Куликова",
      "description": "Полина Куликова воплощает современный дизайн в технике макраме — от декора до одежды. В уличной части галереи можно будет полюбоваться фрактальными мандалами, светящимися в тёмное время суток под ультрафиолетовым излучением."
    },
    {
      "id": "int-marble-marcher",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Marble Marcher",
      "description": "Гоночная игра, где вы катаете шарик по поверхности эволюционирующего трёхмерного фрактала. 24 уровня, цель: добраться до финиша как можно быстрее."
    },
    {
      "id": "int-mandelbrot-explorer",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Mandelbrot Fractal Explorer",
      "description": "Браузерный исследователь множества Мандельброта с прогрессивным уточнением. Чем дольше держишь камеру в одной точке, тем глубже видны детали, вплоть до триллионных увеличений. Удерживая курсор над фракталом, можно увидеть орбиты значений z, открывающие сложную динамику границы."
    },
    {
      "id": "int-fractal-odyssey",
      "status": "accepted",
      "type": "station",
      "subtype": "interactive",
      "title": "Fractal Odyssey",
      "description": "VR-приложение для медитативного полёта внутри бесконечного туннеля из снежинки Коха."
    }
  ],
  "fern_leaves": [
    {
      "id": "leaf-side-morning",
      "address": [
        3
      ],
      "side": "side",
      "start": "14:00",
      "end": "16:00"
    },
    {
      "id": "leaf-headline-1",
      "address": [
        2
      ],
      "side": "headline",
      "start": "16:00",
      "end": "17:30"
    },
    {
      "id": "leaf-headline-2",
      "address": [
        1,
        2
      ],
      "side": "headline",
      "start": "17:30",
      "end": "19:00"
    },
    {
      "id": "leaf-headline-3",
      "address": [
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "19:00",
      "end": "20:30"
    },
    {
      "id": "leaf-headline-4",
      "address": [
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "20:30",
      "end": "22:00"
    },
    {
      "id": "leaf-side-1",
      "address": [
        1,
        3
      ],
      "side": "side",
      "start": "16:00",
      "end": "17:30"
    },
    {
      "id": "leaf-side-2",
      "address": [
        1,
        1,
        3
      ],
      "side": "side",
      "start": "17:30",
      "end": "18:30"
    },
    {
      "id": "leaf-side-3",
      "address": [
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "18:30",
      "end": "19:30"
    },
    {
      "id": "leaf-side-4",
      "address": [
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "19:30",
      "end": "20:30"
    },
    {
      "id": "leaf-side-5",
      "address": [
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "20:30",
      "end": "21:30"
    },
    {
      "id": "leaf-music-side-0",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "21:30",
      "end": "22:30"
    },
    {
      "id": "leaf-music-headline-1",
      "address": [
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "22:00",
      "end": "23:00"
    },
    {
      "id": "leaf-music-side-1",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "22:00",
      "end": "23:00"
    },
    {
      "id": "leaf-music-headline-2",
      "address": [
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "23:00",
      "end": "00:00"
    },
    {
      "id": "leaf-music-side-2",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "23:00",
      "end": "00:00"
    },
    {
      "id": "leaf-music-headline-3",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "00:00",
      "end": "01:00"
    },
    {
      "id": "leaf-music-side-3",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "00:00",
      "end": "01:00"
    },
    {
      "id": "leaf-music-headline-4",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "01:00",
      "end": "02:00"
    },
    {
      "id": "leaf-music-side-4",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "01:00",
      "end": "02:00"
    },
    {
      "id": "leaf-music-headline-5",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "02:00",
      "end": "03:00"
    },
    {
      "id": "leaf-music-side-5",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "02:00",
      "end": "03:00"
    },
    {
      "id": "leaf-music-headline-6",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      "side": "headline",
      "start": "03:00",
      "end": "04:00"
    },
    {
      "id": "leaf-music-side-6",
      "address": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "side": "side",
      "start": "03:00",
      "end": "04:00"
    },
    {
      "id": "leaf-tail",
      "address": "tail",
      "side": "tail",
      "start": "03:00",
      "end": "04:00"
    }
  ],
  "_howto": {
    "schema": "Источник правды о программе фестиваля. Структура (схема v17+, актуально на v24): time_slots — где и когда, events — что (название, спикер, описание), exhibits — постоянные экспонаты вне таймлайна, fern_leaves — 21 лист папоротника, venues и categories — справочники. Поля venue/category/subcategory живут на time_slots; события наследуют их через slot.",
    "add_event": "Добавь объект в массив events: id, title, slot (id слота), speaker, description, status. Поля venue/category/subcategory — на слот, не на событие. Позицию на круге Аполлония назначать НЕ нужно — сайт сам распределяет объекты по схеме на основе их category/subcategory.",
    "add_slot": "Новый временной слот в time_slots: start, end, type (talk/discussion/station/music/music-extra/dance/cinema/interlude/networking), venue (id из data.venues), category, subcategory, tool_label. Привязка к листу фрактала вычисляется автоматически по slot.start; для override — поле slot.leaf.",
    "rename_venue": "Меняй только venues[id].display, id (main_stage и т.д.) оставляй — на него ссылаются слоты.",
    "change_status": "placeholder → tentative → confirmed. confirmed подразумевает заполненные speaker, title, description.",
    "categories": "Семь фиксированных: popsci, music, art, workshop, experiment, cinema, social. art только в exhibits, не на слотах.",
    "category_choice_rule": "По доминанте: что человек делает. Слушает → popsci. Делает руками → workshop. Наблюдает интерактивный объект → experiment (опыт) или art (произведение). Делает с другими → social.",
    "subcategory": "Только для music/cinema/art. music → main_stage/big_bar/courtyard (= venue). cinema → feature/short/animation. art → art/installation/media.",
    "fern_leaves": "Массив из 21 листа фрактала. Поля: id, start, end, side (headline/side/tail), address (координаты в SVG, не трогать). Привязка слот→лист: алгоритм в index.html и в programmer.html (findLeafForSlot). По slot.type определяется side (talk/discussion+music на main_stage → headline; dance → tail; остальное → side). Лист выбирается по slot.start: первый лист этой стороны, чьё окно [start, end) содержит slot.start. Для override — slot.leaf.",
    "exhibits_vs_events": "events — те что в таймлайне (имеют slot). exhibits — постоянные арт-объекты, висят весь вечер. Оба попадают в Аполлонию.",
    "programmer": "UI-инструмент для редактирования этого файла — programmer.html в том же репо. Загружается с github pages, экспорт через кнопку «Скачать festival-data.js».",
    "applications": "Раздел applications — снапшот заявок 1-28 (open call апрель-май 2026). Заявки 29+ программер подтягивает из Google Sheets через меню «📥 Новые заявки», они хранятся в localStorage пользователя. Связь заявка↔событие: поле _source_app: \"app-N\" на event/exhibit. Заявки и связи могут не совпадать 1-к-1 — некоторые заявки отвергнуты (status: rejected), некоторые добавлены вручную без заявки (нет _source_app), некоторые соединены руками после факта (см. кнопку 🔗 связать в карточке заявки в программере)."
  }
};
