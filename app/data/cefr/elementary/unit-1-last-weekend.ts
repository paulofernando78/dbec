import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold, phonetics } from "@/helpers/content";

import { lessons } from "@/data/cefr/elementary-lessons-card-data";

export const lesson = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Unit 1 • Last Weekend",
    descriptions: [
      "I visited my grandparents.",
      "We watched a movie on Saturday.",
    ],
  },

  lessonCard: {
    lessonObjective: lessons.unitOne.lessonObjective,
    grammar: lessons.unitOne.grammar,
    vocabulary: lessons.unitOne.vocabulary,
  },

  introduction: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/assets/img/cefr/a2/unit-1-last-weekend/movie-theater.avif",
          alt: "Laura watching a movie",
          content: [
            ...content({
              parts: [audio("Last weekend, Laura went to the movie theater"), "Last weekend, Laura went to the movie theater. = (movies / UK cinema)"],
            }),
          ],
        },
        {
          src: "Laura buying candies",
          alt: "Watching a movie",
          content: [
            ...content({
              parts: [audio("/"), "We watched a movie on Saturday."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Playing soccer",
          content: [
            ...content({
              parts: [audio("/"), "I played soccer with my friends."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Staying home",
          content: [
            ...content({
              parts: [audio("/"), "I stayed home on Sunday."],
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
            question: "Last weekend, Laura went to the beach.",
            options: [
              { option: "true", isCorrect: true },
              { option: "false", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      prompt: "Listen and read.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Emma",
          line: text(["Hi Jake! How was your weekend?"]),
        },
        {
          speaker: "Jake",
          line: text(["It was great!"]),
        },
        {
          speaker: "Emma",
          line: text(["What did you do?"]),
        },
        {
          speaker: "Jake",
          line: text(["I visited my grandparents on Saturday."]),
        },
        {
          speaker: "Emma",
          line: text(["Nice! What did you do on Sunday?"]),
        },
        {
          speaker: "Jake",
          line: text(["I watched a movie and relaxed at home."]),
        },
        {
          speaker: "Emma",
          line: text(["Sounds good. I played soccer with some friends."]),
        },
        {
          speaker: "Jake",
          line: text(["That's awesome!"]),
        },
      ],
    },

    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What did Jake do on Saturday?",
            options: [
              { option: "Played soccer", isCorrect: false },
              { option: "Visited his grandparents", isCorrect: true },
            ],
          },
          {
            question: "What did Emma do?",
            options: [
              { option: "Watched a movie", isCorrect: false },
              { option: "Played soccer", isCorrect: true },
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
        parts: ["Regular Past Simple verbs end in ", bold("-ed"), "."],
      },
      {
        as: "span",
        parts: [
          audio("ask"),
          "ask ",
          audio("asked"),
          "→ ",
          "ask",
          bold("ed"),
          " ",
          phonetics("/t/"),
        ],
      },
      {
        as: "span",
        parts: [
          audio("watch"),
          "watch ",
          audio("watched"),
          "→ ",
          "watch",
          bold("ed"),
          " ",
          phonetics("/t/"),
        ],
      },
      {
        as: "span",
        parts: [audio("visited"), "visited"],
      },
      {
        as: "span",
        parts: [audio("played"), "played"],
      },
      {
        as: "span",
        parts: [audio("stayed"), "stayed"],
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
              parts: [audio("/"), "What did you do (last weekend?)"],
            },
            {
              parts: [audio("/"), "What did you watch?"],
            },
            {
              parts: [audio("/"), "Where was it?"],
            },
          ],
        },
        
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Answers",
          items: [
            {
              parts: [audio("/"), "I went to the movie theater."],
            },
            {
              parts: [audio("/"), "I watched \"Star Wars\"."],
            },
            {
              parts: [audio("/"), "It was Cinemark at Iguatemi Shopping Center."],
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
        as: "span",
        parts: ["You liked it?"],
      },
    ] satisfies Notes[],

    ccq: [
      {
        as: "span",
        parts: ["Are we talking about the past or the future?"],
      },
      {
        as: "span",
        parts: ["Did the action happen yesterday or tomorrow?"],
      },
      {
        as: "span",
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
          content: text(["Write five sentences about your last weekend."]),
          textarea: true,
        },
        {
          content: text(["Write three Past Simple questions and answer them."]),
          textarea: true,
        },
        {
          content: text([
            "Interview a classmate about their weekend activities.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
