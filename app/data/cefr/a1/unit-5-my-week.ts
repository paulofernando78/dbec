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
} from "@/helpers/content";

import { lessons } from "@/data/dashboard/lessonData";

export const lesson = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Unit 5 • My Week",
    descriptions: [
      "I always study on Monday.",
      "She sometimes plays soccer on Saturday.",
    ],
  },

  lessonObjective: {
    objective: lessons.beginner.unitFive.lessonObjective,
    grammar: lessons.beginner.unitFive.grammar,
    vocabulary: lessons.beginner.unitFive.vocabulary,
  },

  introduction: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "Monday",
          content: [
            ...content({
              parts: [audio("/"), "I study English on Monday."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Wednesday",
          content: [
            ...content({
              parts: [audio("/"), "I go to the gym on Wednesday."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Saturday",
          content: [
            ...content({
              parts: [audio("/"), "I play soccer on Saturday."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Sunday",
          content: [
            ...content({
              parts: [audio("/"), "I relax on Sunday."],
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
            question: "Which day comes after Monday?",
            options: [
              { option: "Tuesday", isCorrect: true },
              { option: "Sunday", isCorrect: false },
            ],
          },
          {
            question: "Which day is usually part of the weekend?",
            options: [
              { option: "Saturday", isCorrect: true },
              { option: "Wednesday", isCorrect: false },
            ],
          },
          {
            question: "How many days are there in a week?",
            options: [
              { option: "7", isCorrect: true },
              { option: "5", isCorrect: false },
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
          line: text(["What do you usually do on weekends?"]),
        },
        {
          speaker: "Jake",
          line: text(["I usually play soccer on Saturday."]),
        },
        {
          speaker: "Emma",
          line: text(["Do you study on Sunday?"]),
        },
        {
          speaker: "Jake",
          line: text(["No, I never study on Sunday."]),
        },
        {
          speaker: "Emma",
          line: text(["Do you always go to school on Monday?"]),
        },
        {
          speaker: "Jake",
          line: text(["Yes, I always go to school on Monday."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What does Jake usually do on Saturday?",
            options: [
              { option: "Play soccer", isCorrect: true },
              { option: "Study", isCorrect: false },
            ],
          },
          {
            question: "Does Jake study on Sunday?",
            options: [
              { option: "No", isCorrect: true },
              { option: "Yes", isCorrect: false },
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
        parts: [audio("/"), "always"],
      },
      {
        as: "span",
        parts: [audio("/"), "usually"],
      },
      {
        as: "span",
        parts: [audio("/"), "sometimes"],
      },
      {
        as: "span",
        parts: [audio("/"), "never"],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Frequency",
          items: [
            { parts: [audio("/"), "always"] },
            { parts: [audio("/"), "usually"] },
            { parts: [audio("/"), "sometimes"] },
            { parts: [audio("/"), "never"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Days",
          items: [
            { parts: [audio("/"), "Monday"] },
            { parts: [audio("/"), "Tuesday"] },
            { parts: [audio("/"), "Wednesday"] },
            { parts: [audio("/"), "Thursday"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Months",
          items: [
            { parts: [audio("/"), "January"] },
            { parts: [audio("/"), "February"] },
            { parts: [audio("/"), "March"] },
            { parts: [audio("/"), "April"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [bold("always"), " = 100%"],
      },
      {
        as: "span",
        parts: [bold("usually"), " = most of the time"],
      },
      {
        as: "span",
        parts: [bold("sometimes"), " = occasionally"],
      },
      {
        as: "span",
        parts: [bold("never"), " = 0%"],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["If I always study on Monday, do I study every Monday?"],
      },
      {
        as: "span",
        parts: ["If I never play tennis, do I play tennis?"],
      },
      {
        as: "span",
        parts: ["Is 'sometimes' more frequent than 'always'?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "I _____ go to school on Monday.",
            options: [
              { option: "always", isCorrect: true },
              { option: "never", isCorrect: false },
            ],
          },
          {
            question: "She _____ plays soccer. Maybe once or twice a month.",
            options: [
              { option: "sometimes", isCorrect: true },
              { option: "always", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Fill in the blank with the correct adverb of frequency.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "I " },
              { blank: "always" },
              { text: " study English on Monday." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "She " },
              { blank: "sometimes" },
              { text: " goes to the gym." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "They " },
              { blank: "never" },
              { text: " work on Sunday." },
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
            prompt: "always / Monday / on / study / I",
            answer: "I always study on Monday.",
          },
          {
            prompt: "soccer / sometimes / plays / she",
            answer: "She sometimes plays soccer.",
          },
          {
            prompt: "never / on / work / Sunday / they",
            answer: "They never work on Sunday.",
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
          value: text([
            "Write five sentences about your week using adverbs of frequency.",
          ]),
        },
        {
          value: text([
            "Talk about what you do on different days of the week.",
          ]),
        },
        {
          value: text(["Describe your favorite month and explain why."]),
        },
      ],
    } satisfies ListProps,
  },
};
