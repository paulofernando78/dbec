import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

import { lessons } from "@/data/dashboard/lessonCardData";

export const lesson = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Unit 1 • Last Weekend",
    descriptions: [
      "I visited my grandparents.",
      "We watched a movie on Saturday.",
    ],
  },

  lessonObjective: {
    objective: lessons.elementary.unitOne.lessonObjective,
    grammar: lessons.elementary.unitOne.grammar,
    vocabulary: lessons.elementary.unitOne.vocabulary,
  },

  introduction: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "Visiting grandparents",
          content: [
            ...content({
              parts: [audio("/"), "I visited my grandparents last weekend."],
            }),
          ],
        },
        {
          src: "/",
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
            question: "When did Emma visit her grandparents?",
            options: [
              { option: "Next weekend", isCorrect: false },
              { option: "Last weekend", isCorrect: true },
            ],
          },
          {
            question: "What did Jake do on Saturday?",
            options: [
              { option: "Went to work", isCorrect: false },
              { option: "Watched a movie", isCorrect: true },
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
        as: "span",
        parts: [audio("/"), "visited"],
      },
      {
        as: "span",
        parts: [audio("/"), "watched"],
      },
      {
        as: "span",
        parts: [audio("/"), "played"],
      },
      {
        as: "span",
        parts: [audio("/"), "stayed"],
      },
    ] satisfies Meaning[],

    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Questions",
          items: [
            {
              parts: [bold("Q:"), " What did you do last weekend?"],
            },
            {
              parts: [bold("A:"), " I visited my grandparents."],
            },
          ],
        },

        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Regular Verbs",
          items: [
            {
              parts: [bold("Q:"), " What did you watch?"],
            },
            {
              parts: [bold("A:"), " I watched a movie."],
            },
          ],
        },

        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "More Examples",
          items: [
            {
              parts: [bold("Q:"), " Where did you stay?"],
            },
            {
              parts: [bold("A:"), " I stayed home."],
            },
          ],
        },
      ],
    },

    notes: [
      {
        as: "span",
        parts: ["Regular Past Simple verbs usually end in ", bold("-ed"), "."],
      },
      {
        as: "span",
        parts: [bold("visit → visited")],
      },
      {
        as: "span",
        parts: [bold("watch → watched")],
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
          value: text(["Write five sentences about your last weekend."]),
          textarea: true,
        },
        {
          value: text([
            "Interview a classmate about their weekend activities.",
          ]),
          textarea: true,
        },
        {
          value: text(["Write three Past Simple questions and answer them."]),
          textarea: true,
        },
      ],
    } satisfies ListProps,
  },
};
