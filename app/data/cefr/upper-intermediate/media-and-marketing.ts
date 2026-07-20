import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio } from "@/helpers/content";

import { cefrLessonsCardData } from "@/data/cefr/cefr-lessons-card-data";
const href = "/cefr/upper-intermediate/media-and-marketing";
const data = cefrLessonsCardData.upperIntermediate.find(
  (lesson) => lesson.href === href,
)!;

export const upperIntermediateMediaAndMarketing = {
  whiteboard: {
    title: "B2 Upper-Intermediate",
    subtitle: "Media and Marketing",
    descriptions: ["...", "..."],
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
          alt: "...",
          content: [
            ...content({
              parts: [audio("/"), "...”"],
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
    dialogue: {
      prompt: "...",
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
