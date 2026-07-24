import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { shuffle } from "@/utils/shuffle";

import {
  content,
  audio,
  bold,
  mark,
  portuguese,
  phonetics,
  spacer,
} from "@/helpers/content";

export const elementaryPastMovies = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Movies",
    descriptions: ["We went to the movies. The movie was great."],
  },

  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: shuffle([
        {
          as: "span",
          parts: [audio("movie theater"), "movie theater"],
        },
        {
          as: "span",
          parts: [audio("tickets"), "tickets"],
        },
        {
          as: "span",
          parts: [audio("popcorn"), "popcorn"],
        },
        {
          as: "span",
          parts: [audio("soda"), "soda"],
        },
        {
          as: "span",
          parts: [audio("row of seats"), "row of seats"],
        },
      ]),
      words: shuffle([
        { word: "movie theater", img: 0 },
        { word: "ticket", img: 0 },
        { word: "popcorn", img: 0 },
        { word: "soda", img: 0 },
        { word: "row of seats", img: 0 },
      ]),
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-going-to-movies.avif",
          alt: "Laura going to the movies",
          content: [
            ...content({
              parts: [
                audio("Last weekend, Laura went to the movies."),
                "Laura ",
                mark("went"),
                " to the movies. ",
                portuguese("Semana passada, Laura foi ao cinema."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-buying-two-tickets.avif",
          alt: "Laura buying two tickets",
          content: [
            ...content({
              parts: [
                audio("She bought two tickets."),
                "She ",
                mark("bought"),
                " two tickets. ",
                portuguese("Ela comprou dois ingressos."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-buying-popcorn-soda.avif",
          alt: "Laura buying soda and popcorn",
          content: [
            ...content({
              parts: [
                audio("She also bought popcorn and soda."),
                "She also ",
                mark("bought"),
                " popcorn and soda. ",
                portuguese("Ela também comprou pipoca e refrigerante."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-meeting-liz.avif",
          alt: "Laura meeting her friend Liz",
          content: [
            ...content({
              parts: [
                audio("She met her friend Liz."),
                "She ",
                mark("met"),
                " her friend Liz. ",
                portuguese("Ela encontrou com sua  amiga, Liz."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/they-watching-movie.avif",
          alt: "Laura and Liz watching the movie",
          content: [
            ...content({
              parts: [
                audio("They watched the movie."),
                "They ",
                mark("watched"),
                " the movie. ",
                portuguese("Elas assistiram ao filme."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-liz-eating.avif",
          alt: "Laura and Liz eating popcorn and drinking soda",
          content: [
            ...content({
              parts: [
                audio("They had popcorn and soda."),
                "They ",
                mark("had"),
                " popcorn and soda. ",
                portuguese("Elas comeram pipoca e tomaram refrigerante."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-looking-at-watch.avif",
          alt: "Laura looking at her watch",
          content: [
            ...content({
              parts: [
                audio("The movie finished at 8:20 p.m."),
                "The movie ",
                mark("finished"),
                " at 8:20 p.m. ",
                portuguese("O filme terminou as 20h20."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-liz-leaving-movie-theater.avif",
          alt: "Laura and Liz leaving the movie theater",
          content: [
            ...content({
              parts: [
                audio("They left the movie theater."),
                "They ",
                mark("left"),
                " the movie theater. ",
                portuguese("Elas saíram do cinema."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-taking-taxi.avif",
          alt: "Laura taking a taxi home",
          content: [
            ...content({
              parts: [
                audio("Laura took a taxi home."),
                "Laura ",
                mark("took"),
                " a taxi home. ",
                portuguese("Laura pegou um táxi para casa."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/liz-driving-home.avif",
          alt: "Liz driving home",
          content: [
            ...content({
              parts: [
                audio("Liz drove home, too."),
                "Liz ",
                mark("drove"),
                " home, too. ",
                portuguese("Liz também dirigiu para casa."),
              ],
            }),
          ],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Last weekend, Laura went to the movies.",
            options: [
              { option: "true", isCorrect: true },
              { option: "false", isCorrect: false },
            ],
          },
          {
            question: "Laura bought one ticket.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            question: "The movie finished at 7:20 p.m.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      instruction: "Listen and read.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Laura",
          line: ["Hey Eric. How's it going?"],
        },
        {
          speaker: "Eric",
          line: ["Pretty good. How about you?"],
        },
        {
          speaker: "Laura",
          line: ["Feeling great. I had a really nice weekend."],
        },
        {
          speaker: "Eric",
          line: ["Nice! What did you do?"],
        },
        {
          speaker: "Laura",
          line: ["I went to the movie theater on Saturday."],
        },
        {
          speaker: "Eric",
          line: ["Cool! What movie did you watch?"],
        },
        {
          speaker: "Laura",
          line: ["I watched a comedy. It was really funny."],
        },
        {
          speaker: "Eric",
          line: ["Did you go alone?"],
        },
        {
          speaker: "Laura",
          line: [
            "No, I went with my sister. We bought tickets and popcorn.",
          ],
        },
        {
          speaker: "Eric",
          line: ["Sounds fun. I stayed home and played video games."],
        },
        {
          speaker: "Laura",
          line: ["That sounds good too. Did you relax?"],
        },
        {
          speaker: "Eric",
          line: ["Yes, I relaxed a lot. It was a quiet weekend."],
        },
      ],
    },

    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What did Laura do on Saturday?",
            options: [
              { option: "She went to the movie theater", isCorrect: true },
              { option: "She stayed home", isCorrect: false },
            ],
          },
          {
            question: "Who did Laura go with?",
            options: [
              { option: "Her sister", isCorrect: true },
              { option: "Eric", isCorrect: false },
            ],
          },
          {
            question: "What did Eric do last weekend?",
            options: [
              { option: "He played video games", isCorrect: true },
              { option: "He bought tickets and popcorn", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  languageFocus: {
    meaning: [
      {
        as: "p",
        parts: [
          "Use the ",
          bold("Past Simple"),
          " to talk about finished actions in the past.",
        ],
      },
      spacer(),
      {
        as: "p",
        parts: [
          "Regular verbs usually end in ",
          bold("-ed"),
          ": watched, played, relaxed.",
        ],
      },
      {
        as: "p",
        parts: [
          "Some verbs are irregular: go ",
          bold("➜ went"),
          ", buy ",
          bold("➜ bought"),
          ", have ",
          bold("➜ had"),
          ".",
        ],
      },
    ] satisfies Meaning[],

    columnQuestions: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Questions",
          items: [
            {
              parts: [bold("Did"), " + subject + base verb:"],
            },
            spacer(),
            {
              parts: [
                audio("What did you do last weekend?"),
                "What did you do last weekend?",
              ],
            },
            { parts: [audio("Where did you go?"), "Where did you go?"] },
            { parts: [audio("Who did you go with?"), "Who did you go with?"] },
            { parts: [audio("Did you relax?"), "Did you relax?"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Answers",
          items: [
            {
              parts: [
                audio("I went to the movie theater."),
                "I went to the movie theater.",
              ],
            },
            {
              parts: [
                audio("I went with my sister."),
                "I went with my sister.",
              ],
            },
            { parts: [audio("I watched a comedy."), "I watched a comedy."] },
            {
              parts: [audio("Yes, I relaxed a lot."), "Yes, I relaxed a lot."],
            },
          ],
        },
      ],
    },

    columnVerbs: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "/t/",
          items: [
            // ask
            {
              display: "block",
              as: "span",
              parts: [
                audio("ask"),
                "ask ",
                "➜ ",
                audio("asked"),
                "ask",
                bold("ed"),
                " ",
                phonetics("/t/"),
              ],
            },
            // watch
            {
              as: "span",
              parts: [
                audio("watch"),
                "watch ",
                "➜ ",
                audio("watched"),
                "watch",
                bold("ed"),
                " ",
                phonetics("/t/"),
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "/d/",
          items: [
            // answer
            {
              as: "span",
              parts: [
                audio("answer"),
                "answer ",
                "➜ ",
                audio("answered"),
                "answer",
                bold("ed"),
                " ",
                phonetics("/t/"),
              ],
            },
          ],
        },

        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "/ɪd/",
          items: [
            {
              parts: ["visit"],
            },
          ],
        },
      ],
    },

    notes: [
      {
        as: "p",
        parts: [
          "Don't say: Did you ",
          bold("went"),
          "? Say: Did you ",
          bold("go"),
          "?",
        ],
      },
    ] satisfies Notes[],

    ccq: [
      {
        parts: ['In the sentence: "I went to the movice last weekend."'],
      },
      {
        parts: ["Are we talking about the past or the future?"],
      },
      {
        parts: ["Did the action happen yesterday or tomorrow?"],
      },
      {
        parts: ["In 'I watched a movie', is the movie finished?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Yesterday I _____ a movie.",
            options: [
              { option: "watched", isCorrect: true },
              { option: "watch", isCorrect: false },
            ],
          },
          {
            question: "Last weekend we _____ soccer.",
            options: [
              { option: "played", isCorrect: true },
              { option: "play", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the sentences.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "Last weekend I " },
              { blank: "visited" },
              { text: " my grandparents." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "We " },
              { blank: "watched" },
              { text: " a movie." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "They " },
              { blank: "played" },
              { text: " soccer." },
            ],
            lineBreak: true,
          },
        ],
      },
    },

    scramble: {
      showWordBank: false,
      instruction: "Unscramble the sentence.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "visited / I / grandparents / my",
            answer: "I visited my grandparents.",
          },
          {
            prompt: "movie / watched / we / a",
            answer: "We watched a movie.",
          },
          {
            prompt: "soccer / played / they",
            answer: "They played soccer.",
          },
        ],
      },
    },
  },

  production: {
    task: {
      instruction: "Complete the tasks:",
      type: "checkbox",
      items: [
        {
          content: ["Write five sentences about your last weekend."],
          textarea: true,
        },
        {
          content: ["Write three Past Simple questions and answer them."],
          textarea: true,
        },
        {
          content: [
            "Interview a classmate about their weekend activities.",
          ],
        },
      ],
    } satisfies ListProps,
  },
};
