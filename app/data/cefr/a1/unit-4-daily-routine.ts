import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio } from "@/helpers/content";

export const lesson = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Unit 4 • Daily Routine",
    descriptions: [
      "I wake up at 7 o'clock.",
      "She goes to work in the morning.",
    ],
  },

  lessonObjective: {
    objective: "...",
    grammar: "...",
    vocabulary: "...",
  },

  introduction: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "Wake up",
          content: [
            ...content({
              parts: [audio("/"), "I wake up at seven o'clock."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Breakfast",
          content: [
            ...content({
              parts: [audio("/"), "I have breakfast at eight o'clock."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Work",
          content: [
            ...content({
              parts: [audio("/"), "I go to work at nine o'clock."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Sleep",
          content: [
            ...content({
              parts: [audio("/"), "I go to bed at ten o'clock."],
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
            question: "What do you do first in the morning?",
            options: [
              { option: "Wake up", isCorrect: true },
              { option: "Go to bed", isCorrect: false },
            ],
          },
          {
            question: "When do people usually eat breakfast?",
            options: [
              { option: "Morning", isCorrect: true },
              { option: "Night", isCorrect: false },
            ],
          },
          {
            question: "Do people usually sleep at night?",
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
      prompt: "Listen to th dialogue.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Emma",
          line: text(["What time do you wake up?"]),
        },
        {
          speaker: "Jake",
          line: text(["I wake up at seven o'clock."]),
        },
        {
          speaker: "Emma",
          line: text(["What do you do after that?"]),
        },
        {
          speaker: "Jake",
          line: text(["I have breakfast and go to work."]),
        },
        {
          speaker: "Emma",
          line: text(["What time do you go to bed?"]),
        },
        {
          speaker: "Jake",
          line: text(["I go to bed at ten o'clock."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What time does Jake wake up?",
            options: [
              { option: "7:00", isCorrect: true },
              { option: "8:00", isCorrect: false },
            ],
          },
          {
            question: "What does Jake do after breakfast?",
            options: [
              { option: "Go to work", isCorrect: true },
              { option: "Go to bed", isCorrect: false },
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
        parts: [audio("/"), "wake up"],
      },
      {
        as: "span",
        parts: [audio("/"), "have breakfast"],
      },
      {
        as: "span",
        parts: [audio("/"), "go to work"],
      },
      {
        as: "span",
        parts: [audio("/"), "go to bed"],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Morning",
          items: [
            { parts: [audio("/"), "wake up"] },
            { parts: [audio("/"), "have breakfast"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Day",
          items: [
            { parts: [audio("/"), "go to work"] },
            { parts: [audio("/"), "have lunch"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Evening",
          items: [
            { parts: [audio("/"), "watch TV"] },
            { parts: [audio("/"), "go to bed"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: ["We use the Present Simple for routines."],
      },
      {
        as: "span",
        parts: [audio("/"), "I wake up at 7:00."],
      },
      {
        as: "span",
        parts: [audio("/"), "She goes to work at 8:00."],
      },
      {
        as: "span",
        parts: ["Remember: he/she/it + verb + s"],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["Do we use Present Simple for routines or right now?"],
      },
      {
        as: "span",
        parts: ["In 'She goes to work', do we add -s to the verb?"],
      },
      {
        as: "span",
        parts: ["Is waking up a daily activity?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "I _____ up at 7:00.",
            options: [
              { option: "wake", isCorrect: true },
              { option: "wakes", isCorrect: false },
            ],
          },
          {
            question: "She _____ to work at 8:00.",
            options: [
              { option: "goes", isCorrect: true },
              { option: "go", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Fill in the blanks with the correct answer.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "I " },
              { blank: "wake up" },
              { text: " at 7:00." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "She " },
              { blank: "goes" },
              { text: " to work at 8:00." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "We " },
              { blank: "have breakfast" },
              { text: " at 8:00." },
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
            prompt: "up / wake / I / at / 7:00",
            answer: "I wake up at 7:00.",
          },
          {
            prompt: "goes / work / she / to",
            answer: "She goes to work.",
          },
          {
            prompt: "breakfast / have / we",
            answer: "We have breakfast.",
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
          value: text(["Write five sentences about your daily routine."]),
        },
        {
          value: text([
            "Tell your partner what time you wake up, eat, and sleep.",
          ]),
        },
        {
          value: text(["Describe a typical weekday using the Present Simple."]),
        },
      ],
    } satisfies ListProps,
  },
};
