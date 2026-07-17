import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

import { cefrLessonsCardData } from "@/data/cefr/cefr-lessons-card-data";
const href = "/cefr/beginner/shopping"
const data = cefrLessonsCardData.beginner.find(
  (lesson) => lesson.href === href
)!;

export const beginnerShopping = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Shopping",
    descriptions: ["This shirt is cheap.", "Those shoes are expensive."],
  },

  lessonCard: {
    lessonObjective: data.lessonObjective,
    grammar: data.grammar,
    vocabulary: data.vocabulary,
  },

  introduction: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "T-shirt",
          content: [
            ...content({
              parts: [audio("/"), "This is a T-shirt."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Shoes",
          content: [
            ...content({
              parts: [audio("/"), "These are shoes."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Jacket",
          content: [
            ...content({
              parts: [audio("/"), "That is a jacket."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Jeans",
          content: [
            ...content({
              parts: [audio("/"), "Those are jeans."],
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
            question: "Which one do you wear on your feet?",
            options: [
              { option: "Shoes", isCorrect: true },
              { option: "Hat", isCorrect: false },
            ],
          },
          {
            question: "Which one do you wear on your head?",
            options: [
              { option: "Hat", isCorrect: true },
              { option: "Shoes", isCorrect: false },
            ],
          },
          {
            question: "Do people buy clothes in a shop?",
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
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
          speaker: "Customer",
          line: text(["Excuse me. How much is this T-shirt?"]),
        },
        {
          speaker: "Shop Assistant",
          line: text(["It's twenty dollars."]),
        },
        {
          speaker: "Customer",
          line: text(["And how much are these shoes?"]),
        },
        {
          speaker: "Shop Assistant",
          line: text(["They're forty-five dollars."]),
        },
        {
          speaker: "Customer",
          line: text(["I like those shoes."]),
        },
        {
          speaker: "Shop Assistant",
          line: text(["They're very popular."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "How much is the T-shirt?",
            options: [
              { option: "$20", isCorrect: true },
              { option: "$45", isCorrect: false },
            ],
          },
          {
            question: "What does the customer like?",
            options: [
              { option: "Shoes", isCorrect: true },
              { option: "Hat", isCorrect: false },
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
        parts: [audio("/"), bold("this"), " = singular, near"],
      },
      {
        as: "span",
        parts: [audio("/"), bold("that"), " = singular, far"],
      },
      {
        as: "span",
        parts: [audio("/"), bold("these"), " = plural, near"],
      },
      {
        as: "span",
        parts: [audio("/"), bold("those"), " = plural, far"],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          column: "Singular",
          items: [
            {
              parts: [bold("Q:"), " What is this?"],
            },
            {
              parts: [bold("A:"), " This is a shirt."],
              lineBreak: true,
            },

            {
              parts: [bold("Q:"), " How much is this shirt?"],
            },
            {
              parts: [bold("A:"), " It's twenty dollars."],
            },
          ],
        },

        {
          column: "Plural",
          items: [
            {
              parts: [bold("Q:"), " What are these?"],
            },
            {
              parts: [bold("A:"), " These are shoes."],
              lineBreak: true,
            },
            {
              parts: [bold("Q:"), " How much are these shoes?"],
            },
            {
              parts: [bold("A:"), " They're forty-five dollars."],
            },
          ],
        },

        {
          column: "Distance",
          items: [
            {
              parts: [bold("Q:"), " What is that?"],
            },
            {
              parts: [bold("A:"), " That is a jacket."],
              lineBreak: true,
            },
            {
              parts: [bold("Q:"), " What are those?"],
            },
            {
              parts: [bold("A:"), " Those are jeans."],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [audio("/"), bold("cheap"), " = low price"],
      },
      {
        as: "span",
        parts: [audio("/"), bold("expensive"), " = high price"],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["Do we use 'this' for one thing or many things?"],
      },
      {
        as: "span",
        parts: ["Do we use 'these' for one thing or many things?"],
      },
      {
        as: "span",
        parts: ["If the object is far away, do we use 'this' or 'that'?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "_____ shoes are very expensive.",
            options: [
              { option: "These", isCorrect: true },
              { option: "This", isCorrect: false },
            ],
          },
          {
            question: "_____ jacket is nice.",
            options: [
              { option: "That", isCorrect: true },
              { option: "Those", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "...",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [{ text: "_____ shirt is blue." }, { blank: "This" }],
            lineBreak: true,
          },
          {
            block: [{ text: "_____ shoes are black." }, { blank: "These" }],
            lineBreak: true,
          },
          {
            block: [{ text: "_____ jeans are expensive." }, { blank: "Those" }],
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
            prompt: "this / is / shirt / a",
            answer: "This is a shirt.",
          },
          {
            prompt: "those / shoes / are",
            answer: "Those are shoes.",
          },
          {
            prompt: "much / this / how / is / jacket",
            answer: "How much is this jacket?",
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
          content: text([
            "Describe five items of clothing using this, that, these, or those.",
          ]),
        },
        {
          content: text(["Ask and answer questions about prices."]),
        },
        {
          content: text([
            "Role-play a conversation between a customer and a shop assistant.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
