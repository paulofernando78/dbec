import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, audio, lineBreak } from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

export const lesson = {
  whiteboard: {
    title: "...",
    subtitle: "...",
    descriptions: ["...", "..."],
    date: "...",
  },

  lessonCard: {
    objective: "...",
    usefulLanguage: "...",
    vocabulary: "...",
    skills: "...",
    finalTask: "...",
  },

  introduction: {
    instruction: ["..."],
    imgSrc: "/",
    imgAlt: "...",
    questions: [
      [audio("..."), "question 1"],
      [audio("..."), "question 2"],
    ],
    imageQuiz: {
      questions: [
        {
          word: "cushion",
          imgSrc: "/assets/img/dictionary/c/cushion.avif",
          imgAlt: "A cushion softening the impact of an object.",
          options: shuffle([
            { option: "cushion", isCorrect: true },
            { option: "lubricate", isCorrect: false },
            { option: "moisture", isCorrect: false },
          ]),
        },
        {
          word: "lubricate",
          imgSrc: "/assets/img/dictionary/l/lubricate.avif",
          imgAlt: "Lubricant being applied to reduce friction.",
          options: shuffle([
            { option: "cushion", isCorrect: false },
            { option: "lubricate", isCorrect: true },
            { option: "moisture", isCorrect: false },
          ]),
        },
        {
          word: "moisture",
          imgSrc: "/assets/img/dictionary/m/moisture.avif",
          imgAlt: "Water droplets representing moisture.",
          options: shuffle([
            { option: "cushion", isCorrect: false },
            { option: "lubricate", isCorrect: false },
            { option: "moisture", isCorrect: true },
          ]),
        },
      ],
    },

    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "...",
            options: [
              { option: "...", isCorrect: false },
              { option: "...", isCorrect: true },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    instruction: ["Look at the picture."],
    imgSrc: "/",
    imgAlt: "...",
    dialogue: {
      instruction: "Listen to the dialogue.",
      audioSrc: "/",
      lines: [
        {
          speaker: "...",
          line: ["..."],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "...",
            options: [
              { option: "...", isCorrect: false },
              { option: "...", isCorrect: true },
            ],
          },
        ],
      },
    },
  },

  languageFocus: {
    storyCarousel: {
      instruction: "Look ...",
      imgs: [
        {
          src: "/",
          alt: "...",
          content: [
            ...content({
              parts: [audio("/"), "...", lineBreak(), "..."],
            }),
          ],
        },
      ],
    },
    meaning: [
      {
        display: "block",
        as: "span",
        parts: [audio("/"), "..."],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        // Column 1
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Column 1",
          items: [
            {
              parts: [audio("/"), "..."],
            },
          ],
        },
        // Column 2
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Column 2",
          items: [
            {
              parts: [audio("/"), "..."],
            },
          ],
        },
        // Column 3
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Column 3",
          items: [
            {
              parts: [audio("/"), "..."],
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
        parts: ["..."],
        options: [
          { option: "...", isCorrect: true },
          { option: "...", isCorrect: false },
        ],
      },
      {
        as: "span",
        parts: ["..."],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "...",
            options: [
              { option: "...", isCorrect: true },
              { option: "...", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Fill in the blanks.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [{ text: "..." }, { blank: "..." }, { text: "..." }],
            lineBreak: true,
          },
        ],
      },
    },

    scramble: {
      showWordBank: false,
      instruction: "Unscramble the sentences.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "... / ...",
            answer: "...",
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
          content: ["..."],
        },
        {
          content: ["..."],
        },
        {
          content: ["..."],
        },
      ],
    } satisfies ListProps,
  },
};
