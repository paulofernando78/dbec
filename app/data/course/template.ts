import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { CCQ } from "@/components/content/CCQ/";

import { content, audio, lineBreak } from "@/helpers/content";

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
    finalTask: "...",
  },

  introduction: {
    blocks: [
      {
        type: "line",
        value: ["..."],
        className: "font-bold mb-4",
      },
      {
        type: "image",
        src: "/",
        alt: "...",
      },
      {
        type: "lines",
        value: [
          [audio("..."), "question 1"],
          [audio("..."), "question 2"],
        ],
        className: "mb-4",
      },
      {
        type: "imageQuiz",
        words: [
          { word: "cushion", img: 0 },
          { word: "lubricate", img: 0 },
          { word: "moisture", img: 0 },
        ],
      },
      {
        type: "radio",
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
    ],
  },

  presentation: {
    blocks: [
      {
        type: "line",
        value: ["Look at the picture."],
        className: "font-bold mb-4",
      },
      {
        type: "image",
        src: "/",
        alt: "...",
      },
      {
        type: "dialogue",
        instruction: "Listen to the dialogue.",
        audioSrc: "/",
        lines: [
          {
            speaker: "...",
            line: ["..."],
          },
        ],
      },
      {
        type: "radio",
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
    ],
  },

  languageFocus: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
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
      {
        type: "meaning",
        value: [
          {
            display: "block",
            as: "span",
            parts: [audio("/"), "..."],
          },
        ] satisfies Meaning[],
      },
      {
        type: "column",
        width: 300,
        cols: [
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
        ],
      },
      {
        type: "notes",
        value: [
          {
            as: "span",
            parts: [audio("/"), "..."],
          },
        ] satisfies Notes[],
      },
      {
        type: "ccq",
        value: [
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
    ],
  },

  practice: {
    blocks: [
      {
        type: "radio",
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
      {
        type: "fillInTheBlanks",
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
      {
        type: "unscramble",
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
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Complete the tasks:",
        listType: "checkbox",
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
      },
    ],
  },
};
