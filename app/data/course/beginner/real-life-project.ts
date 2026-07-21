import type { CCQ } from "@/components/content/CCQ";
import type { ListProps } from "@/components/content/List";
import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";

import { content, text, bold } from "@/helpers/content";

import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";

const href = "/courses/beginner/real-life-project";
const data = courseLessonsCardData.beginner.find(
  (lesson) => lesson.href === href,
)!;

export const beginnerRealLifeProject = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "A1 Real-Life Project",
    descriptions: [
      "Let's meet at the park on Saturday.",
      "I like soccer. Can you play?",
    ],
  },

  lessonCard: {
    lessonObjective: data.lessonObjective,
    grammar: data.grammar,
    vocabulary: data.vocabulary,
  },

  introduction: {
    radio: {
      instruction: "Review what you can already do in English.",
      exercise: {
        questions: [
          {
            question: "Which sentence introduces a preference?",
            options: [
              { option: "I like pizza.", isCorrect: true },
              { option: "The bank is next to the park.", isCorrect: false },
            ],
          },
          {
            question: "Which question asks about an ability?",
            options: [
              { option: "Can you play soccer?", isCorrect: true },
              { option: "Where is the supermarket?", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      instruction: "Read the conversation. What do Laura and Liz decide to do?",
      audioSrc: "",
      lines: [
        {
          speaker: "Laura",
          line: text(["Hi, Liz. Are you free on Saturday?"]),
        },
        {
          speaker: "Liz",
          line: text(["Yes, I am. I usually relax on Saturday."]),
        },
        {
          speaker: "Laura",
          line: text(["Let's meet at the park. I like soccer. Can you play?"]),
        },
        {
          speaker: "Liz",
          line: text(["Yes, I can. What time?"]),
        },
        {
          speaker: "Laura",
          line: text(["Let's meet at ten o'clock, next to the café."]),
        },
        {
          speaker: "Liz",
          line: text(["Great! See you on Saturday."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Where are Laura and Liz meeting?",
            options: [
              { option: "At the park", isCorrect: true },
              { option: "At Laura's house", isCorrect: false },
            ],
          },
          {
            question: "When are they meeting?",
            options: [
              { option: "Saturday at ten o'clock", isCorrect: true },
              { option: "Sunday at nine o'clock", isCorrect: false },
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
        parts: [bold("Are you free on Saturday?"), " — ask about availability."],
      },
      {
        display: "block",
        as: "span",
        parts: [bold("Let's meet at the park."), " — make a suggestion."],
      },
      {
        display: "block",
        as: "span",
        parts: [bold("What time?"), " — ask for a meeting time."],
      },
    ] satisfies Meaning[],
    notes: [
      {
        as: "span",
        parts: ["Use ", bold("Let's + verb"), " to suggest an activity."],
      },
      {
        as: "span",
        parts: ["Repeat or ask a simple follow-up question when information is unclear."],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["Does “Let's meet” describe a past event or suggest a future activity?"],
      },
      {
        as: "span",
        parts: ["Do Laura and Liz agree on a place and a time?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the best expression for each situation.",
      exercise: {
        questions: [
          {
            question: "You want to suggest the café.",
            options: [
              { option: "Let's meet at the café.", isCorrect: true },
              { option: "I am café.", isCorrect: false },
            ],
          },
          {
            question: "You need to know the meeting time.",
            options: [
              { option: "What time?", isCorrect: true },
              { option: "How old?", isCorrect: false },
            ],
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
          { prompt: "meet / let's / park / at / the", answer: "Let's meet at the park." },
          { prompt: "free / Saturday / are / on / you", answer: "Are you free on Saturday?" },
          { prompt: "play / can / soccer / you", answer: "Can you play soccer?" },
        ],
      },
    },
  },

  production: {
    task: {
      instruction: "Complete the A1 real-life project with a partner:",
      type: "checkbox",
      items: [
        { content: content({ parts: ["Introduce yourselves and exchange familiar information."] }) },
        { content: content({ parts: ["Ask about routines, preferences, and abilities."] }) },
        { content: content({ parts: ["Choose an activity, day, time, and meeting place."] }) },
        { content: content({ parts: ["Present your plan to another pair and answer one question."] }) },
      ],
    } satisfies ListProps,
  },
};
