import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, audio, bold } from "@/helpers/content";

export const beginnerAroundTown = {
  whiteboard: {
    title: "A1 BEGINNER",
    descriptions: [
      "The bank is next to the supermarket.",
      "The school is across from the park.",
    ],
  },

  introduction: {
    blocks: [
      {
        type: "lines",
        value: [
          [
            audio("What places are near your home?"),
            "What places are near your home?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
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
      },
      {
        type: "radio",
        ...{
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
                question: "A place for money:",
                options: [
                  { option: "Bank", isCorrect: true },
                  { option: "Restaurant", isCorrect: false },
                ],
              },
            ],
          },
        },
      },
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        ...{
          instruction: "Listen once: is Emma asking for locations or prices?",
          audioSrc: "",
          lines: [
            {
              speaker: "Emma",
              line: ["Excuse me. Where is the bank?"],
            },
            {
              speaker: "Jake",
              line: ["It's next to the supermarket."],
            },
            {
              speaker: "Emma",
              line: ["And where is the park?"],
            },
            {
              speaker: "Jake",
              line: ["It's across from the school."],
            },
            {
              speaker: "Emma",
              line: ["Thank you."],
            },
            {
              speaker: "Jake",
              line: ["You're welcome."],
            },
          ],
        },
      },
      {
        type: "radio",
        ...{
          instruction: "Listen again and choose the correct answer.",
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
    ],
  },

  languageFocus: {
    blocks: [
      {
        type: "meaning",
        value: [
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
        ],
      },
      {
        type: "column",
        ...{
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
      },
      {
        type: "notes",
        value: [
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
          {
            as: "span",
            parts: [
              "Ask ",
              bold("Where is...?"),
              " and answer with a landmark: ",
              bold("It’s next to the supermarket"),
              ". Repeat the place to check that you understood.",
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: [
              "If the bank is next to the supermarket, are they close together?",
            ],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: [
              "If the park is across from the school, are they on the same side?",
            ],
            options: [
              { option: "No", isCorrect: true },
              { option: "Yes", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["If something is between two places, is it in the middle?"],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
        ],
      },
    ],
  },

  practice: {
    blocks: [
      {
        type: "guess",
      },
      {
        type: "radio",
        ...{
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
      },
      {
        type: "fillInTheBlanks",
        ...{
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
      },
      {
        type: "unscramble",
        ...{
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
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Use a simple map to exchange locations:",
        listType: "checkbox",
        items: [
          {
            content: ["Choose three familiar places on the map."],
          },
          {
            content: ["Ask and answer three questions using “Where is…?”"],
          },
          {
            content: [
              "Locate each place using next to, opposite, or near. Do not give multi-step directions.",
            ],
          },
        ],
      },
    ],
  },
};
