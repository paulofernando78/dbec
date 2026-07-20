import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";
const href = "/courses/beginner/around-town";
const data = courseLessonsCardData.beginner.find(
  (lesson) => lesson.href === href,
)!;

export const beginnerAroundTown = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Around Town",
    descriptions: [
      "The bank is next to the supermarket.",
      "The school is across from the park.",
    ],
  },

  lessonCard: {
    lessonObjective: data.lessonObjective,
    grammar: data.grammar,
    vocabulary: data.vocabulary,
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "Bank",
          content: [
            ...content({
              parts: [audio("/"), "This is a bank."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Park",
          content: [
            ...content({
              parts: [audio("/"), "This is a park."],
            }),
          ],
        },
        {
          src: "/",
          alt: "School",
          content: [
            ...content({
              parts: [audio("/"), "This is a school."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Supermarket",
          content: [
            ...content({
              parts: [audio("/"), "This is a supermarket."],
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
            question: "Where do you buy food?",
            options: [
              { option: "Supermarket", isCorrect: true },
              { option: "Bank", isCorrect: false },
            ],
          },
          {
            question: "Where do children study?",
            options: [
              { option: "School", isCorrect: true },
              { option: "Park", isCorrect: false },
            ],
          },
          {
            question: "Where can you keep money?",
            options: [
              { option: "Bank", isCorrect: true },
              { option: "Restaurant", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      prompt: "Listen to the dialogue.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Emma",
          line: text(["Excuse me. Where is the bank?"]),
        },
        {
          speaker: "Jake",
          line: text(["It's next to the supermarket."]),
        },
        {
          speaker: "Emma",
          line: text(["And where is the park?"]),
        },
        {
          speaker: "Jake",
          line: text(["It's across from the school."]),
        },
        {
          speaker: "Emma",
          line: text(["Thank you."]),
        },
        {
          speaker: "Jake",
          line: text(["You're welcome."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Where is the bank?",
            options: [
              { option: "Next to the supermarket", isCorrect: true },
              { option: "Behind the school", isCorrect: false },
            ],
          },
          {
            question: "Where is the park?",
            options: [
              { option: "Across from the school", isCorrect: true },
              { option: "Next to the bank", isCorrect: false },
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
        parts: [audio("/"), "next to"],
      },
      {
        as: "span",
        parts: [audio("/"), "across from"],
      },
      {
        as: "span",
        parts: [audio("/"), "between"],
      },
      {
        as: "span",
        parts: [audio("/"), "behind"],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          column: "Next to",
          items: [
            {
              parts: [bold("Q:"), " Where is the bank?"],
            },
            {
              parts: [bold("A:"), " It's next to the supermarket."],
            },
          ],
        },

        {
          column: "Across from",
          items: [
            {
              parts: [bold("Q:"), " Where is the park?"],
            },
            {
              parts: [bold("A:"), " It's across from the school."],
            },
          ],
        },

        {
          column: "Between",
          items: [
            {
              parts: [bold("Q:"), " Where is the café?"],
            },
            {
              parts: [
                bold("A:"),
                " It's between the bank and the supermarket.",
              ],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [audio("/"), "..."],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: [
          "If the bank is next to the supermarket, are they close together?",
        ],
      },
      {
        as: "span",
        parts: [
          "If the park is across from the school, are they on the same side?",
        ],
      },
      {
        as: "span",
        parts: ["If something is between two places, is it in the middle?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "The bank is _____ the supermarket.",
            options: [
              { option: "next to", isCorrect: true },
              { option: "behind", isCorrect: false },
            ],
          },
          {
            question: "The park is _____ the school.",
            options: [
              { option: "across from", isCorrect: true },
              { option: "inside", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Fill in the blanks with the correct preposition.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "The bank is " },
              { blank: "next to" },
              { text: " the supermarket." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The park is " },
              { blank: "across from" },
              { text: " the school." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The café is " },
              { blank: "between" },
              { text: " the bank and the supermarket." },
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
            prompt: "bank / next / supermarket / the / is / to / the",
            answer: "The bank is next to the supermarket.",
          },
          {
            prompt: "park / school / across / the / is / from / the",
            answer: "The park is across from the school.",
          },
          {
            prompt:
              "café / between / bank / is / the / supermarket / and / the / the",
            answer: "The café is between the bank and the supermarket.",
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
          content: text(["Describe the location of five places in your town."]),
        },
        {
          content: text(["Ask and answer questions using 'Where is...?'"]),
        },
        {
          content: text([
            "Draw a simple map and describe the locations using prepositions of place.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
