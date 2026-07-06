import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

import { lessons } from "@/data/cefr/beginner-lessons-card-data";

export const lesson = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Unit 3 • My House",
    descriptions: [
      "There is a sofa in the living room.",
      "There are two bedrooms in my house.",
    ],
  },

  lessonCard: {
    lessonObjective: lessons.unitThree.lessonObjective,
    grammar: lessons.unitThree.grammar,
    vocabulary: lessons.unitThree.vocabulary,
  },

  introduction: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "Living room",
          content: [
            ...content({
              parts: [audio("/"), "This is the living room."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Kitchen",
          content: [
            ...content({
              parts: [audio("/"), "This is the kitchen."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Bedroom",
          content: [
            ...content({
              parts: [audio("/"), "This is the bedroom."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Bathroom",
          content: [
            ...content({
              parts: [audio("/"), "This is the bathroom."],
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
            question: "Where do you sleep?",
            options: [
              { option: "Bedroom", isCorrect: true },
              { option: "Kitchen", isCorrect: false },
            ],
          },
          {
            question: "Where do you cook?",
            options: [
              { option: "Kitchen", isCorrect: true },
              { option: "Bathroom", isCorrect: false },
            ],
          },
          {
            question: "Where do you watch TV?",
            options: [
              { option: "Living room", isCorrect: true },
              { option: "Garage", isCorrect: false },
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
          line: text(["Tell me about your house."]),
        },
        {
          speaker: "Jake",
          line: text(["My house is small but comfortable."]),
        },
        {
          speaker: "Emma",
          line: text(["How many bedrooms are there?"]),
        },
        {
          speaker: "Jake",
          line: text(["There are two bedrooms."]),
        },
        {
          speaker: "Emma",
          line: text(["Is there a living room?"]),
        },
        {
          speaker: "Jake",
          line: text(["Yes, there is."]),
        },
        {
          speaker: "Emma",
          line: text(["Is there a TV in the living room?"]),
        },
        {
          speaker: "Jake",
          line: text(["Yes, there is a TV and a sofa."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "How many bedrooms are there?",
            options: [
              { option: "Two", isCorrect: true },
              { option: "Three", isCorrect: false },
            ],
          },
          {
            question: "Is there a living room?",
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
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
        parts: [audio("/"), "living room"],
      },
      {
        as: "span",
        parts: [audio("/"), "kitchen"],
      },
      {
        as: "span",
        parts: [audio("/"), "bedroom"],
      },
      {
        as: "span",
        parts: [audio("/"), "bathroom"],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Rooms",
          items: [
            { parts: [audio("/"), "living room"] },
            { parts: [audio("/"), "kitchen"] },
            { parts: [audio("/"), "bedroom"] },
            { parts: [audio("/"), "bathroom"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Furniture",
          items: [
            { parts: [audio("/"), "sofa"] },
            { parts: [audio("/"), "table"] },
            { parts: [audio("/"), "chair"] },
            { parts: [audio("/"), "bed"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Grammar",
          items: [
            { parts: [audio("/"), "There is"] },
            { parts: [audio("/"), "There are"] },
            { parts: [audio("/"), "Is there...?"] },
            { parts: [audio("/"), "Are there...?"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [bold("There is"), " = singular"],
      },
      {
        as: "span",
        parts: [bold("There are"), " = plural"],
      },
      {
        as: "span",
        parts: [bold("There is a sofa."), " (one sofa)"],
      },
      {
        as: "span",
        parts: [bold("There are two chairs."), " (two chairs)"],
      },
    ],
    ccq: [
      {
        as: "span",
        parts: ["Do we use 'There is' with one thing or many things?"],
      },
      {
        as: "span",
        parts: ["Do we use 'There are' with one thing or many things?"],
      },
      {
        as: "span",
        parts: ["In 'There is a bed', how many beds are there?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "_____ a sofa in the living room.",
            options: [
              { option: "There is", isCorrect: true },
              { option: "There are", isCorrect: false },
            ],
          },
          {
            question: "_____ two chairs in the kitchen.",
            options: [
              { option: "There are", isCorrect: true },
              { option: "There is", isCorrect: false },
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
            block: [
              { text: "There is a " },
              { blank: "bed" },
              { text: " in the bedroom." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "There are two " },
              { blank: "chairs" },
              { text: " in the kitchen." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "There is a " },
              { blank: "sofa" },
              { text: " in the living room." },
            ],
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
            prompt: "is / there / sofa / a",
            answer: "There is a sofa.",
          },
          {
            prompt: "are / there / bedrooms / two",
            answer: "There are two bedrooms.",
          },
          {
            prompt: "living room / TV / there / a / is / the / in",
            answer: "There is a TV in the living room.",
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
          value: text(["Describe your house."]),
        },

        {
          value: text(["Write five sentences using there is or there are."]),
        },

        {
          value: text(["Describe your favorite room and the furniture in it."]),
        },
      ],
    } satisfies ListProps,
  },
};
