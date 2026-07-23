import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import {
  content,
  text,
  icon,
  audio,
  bold,
  italic,
  mark,
  boldMark,
  underline,
  stressed,
  phonetics,
  portuguese,
  lineBreak,
} from "@/helpers/content";

export const lesson = {
  whiteboard: {
    title: "...",
    subtitle: "...",
    descriptions: ["...", "..."],
    date: "...",
  },

  lessonCard: {
    canDo: "...",
    usefulLanguage: "...",
    vocabulary: "...",
    skills: "...",
    finalTask: "...",
  },

  introduction: {
    instruction: text(["..."]),
    imgSrc: "/",
    imgAlt: "...",
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        {
          as: "span",
          parts: [audio("..."), "..."],
        },
        {
          as: "span",
          parts: [audio("..."), "..."],
        },
      ],
      imgs: [
        {
          src: "/",
          alt: "...",
        },
        {
          src: "/",
          alt: "...",
        },
      ],
    },

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
    dialogue: {
      instruction: "...",
      audioSrc: "/",
      lines: [
        {
          speaker: "...",
          line: text(["..."]),
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
      instruction: "...",
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
      instruction: "Unscramble the sentence.",
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
          content: text(["..."]),
        },
        {
          content: text(["..."]),
        },
        {
          content: text(["..."]),
        },
      ],
    } satisfies ListProps,
  },
};
