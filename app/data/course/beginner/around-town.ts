import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

export const beginnerAroundTown = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Around Town",
    descriptions: [
      "The bank is next to the supermarket.",
      "The school is across from the park.",
    ],
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          alt: "Bank",
          content: [
            ...content({
              parts: ["This is a bank."],
            }),
          ],
        },
        {
          alt: "Park",
          content: [
            ...content({
              parts: ["This is a park."],
            }),
          ],
        },
        {
          alt: "School",
          content: [
            ...content({
              parts: ["This is a school."],
            }),
          ],
        },
        {
          alt: "Supermarket",
          content: [
            ...content({
              parts: ["This is a supermarket."],
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
      instruction: "Listen to the dialogue.",
      audioSrc: "",
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
        parts: ["next to"],
      },
      {
        as: "span",
        parts: ["across from"],
      },
      {
        as: "span",
        parts: ["between"],
      },
      {
        as: "span",
        parts: ["behind"],
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
        {
          column: "Behind",
          items: [
            {
              parts: [bold("Q:"), " Where is the parking lot?"],
            },
            {
              parts: [bold("A:"), " It's behind the supermarket."],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [bold("next to"), " = beside another place"],
      },
      {
        as: "span",
        parts: [bold("across from"), " = on the opposite side"],
      },
      {
        as: "span",
        parts: [bold("between"), " = in the middle of two places"],
      },
      {
        as: "span",
        parts: [bold("behind"), " = at the back of another place"],
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
      instruction: "Use a simple map to exchange locations:",
      type: "checkbox",
      items: [
        {
          content: text(["Choose three familiar places on the map."]),
        },
        {
          content: text(["Ask and answer three questions using “Where is…?”"]),
        },
        {
          content: text([
            "Locate each place using next to, opposite, or near. Do not give multi-step directions.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
