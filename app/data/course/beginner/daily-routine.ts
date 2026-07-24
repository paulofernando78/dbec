import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, audio } from "@/helpers/content";

export const beginnerDailyRoutine = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Daily Routine",
    descriptions: [
      "I wake up at 7 o'clock.",
      "She goes to work in the morning.",
    ],
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          alt: "Wake up",
          content: [
            ...content({
              parts: ["I wake up at seven o'clock."],
            }),
          ],
        },
        {
          alt: "Breakfast",
          content: [
            ...content({
              parts: ["I have breakfast at eight o'clock."],
            }),
          ],
        },
        {
          alt: "Work",
          content: [
            ...content({
              parts: ["I go to work at nine o'clock."],
            }),
          ],
        },
        {
          alt: "Sleep",
          content: [
            ...content({
              parts: ["I go to bed at ten o'clock."],
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
            question: "First in the morning:",
            options: [
              { option: "Wake up", isCorrect: true },
              { option: "Go to bed", isCorrect: false },
            ],
          },
          {
            question: "Breakfast is in the:",
            options: [
              { option: "Morning", isCorrect: true },
              { option: "Night", isCorrect: false },
            ],
          },
          {
            question: "People sleep at night.",
            options: [
              { option: "True", isCorrect: true },
              { option: "False", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      instruction: "Listen to the dialogue.",
      audioSrc: "",
      lines: [
        {
          speaker: "Emma",
          line: ["What time do you wake up?"],
        },
        {
          speaker: "Jake",
          line: ["I wake up at seven o'clock."],
        },
        {
          speaker: "Emma",
          line: ["What do you do after that?"],
        },
        {
          speaker: "Jake",
          line: ["I have breakfast and go to work."],
        },
        {
          speaker: "Emma",
          line: ["What time do you go to bed?"],
        },
        {
          speaker: "Jake",
          line: ["I go to bed at ten o'clock."],
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
        parts: ["wake up"],
      },
      {
        as: "span",
        parts: ["have breakfast"],
      },
      {
        as: "span",
        parts: ["go to work"],
      },
      {
        as: "span",
        parts: ["go to bed"],
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
          items: [{ parts: ["wake up"] }, { parts: ["have breakfast"] }],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Day",
          items: [{ parts: ["go to work"] }, { parts: ["have lunch"] }],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Evening",
          items: [{ parts: ["watch TV"] }, { parts: ["go to bed"] }],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Present Simple",
          items: [
            { parts: ["I/You/We/They work."] },
            { parts: ["He/She works."] },
            { parts: ["Do you work?"] },
            { parts: ["Does he/she work?"] },
            { parts: ["He/She doesn't work."] },
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
        parts: ["I wake up at 7:00."],
      },
      {
        as: "span",
        parts: ["She goes to work at 8:00."],
      },
      {
        as: "span",
        parts: ["Remember: he/she/it + verb + s"],
      },
      {
        as: "span",
        parts: [
          "Use ",
          "do",
          " with I/you/we/they and ",
          "does",
          " with he/she/it in questions.",
        ],
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
          {
            question: "_____ you work on Saturday?",
            options: [
              { option: "Do", isCorrect: true },
              { option: "Does", isCorrect: false },
            ],
          },
          {
            question: "_____ she work on Saturday?",
            options: [
              { option: "Does", isCorrect: true },
              { option: "Do", isCorrect: false },
            ],
          },
          {
            question: "She _____ work on Sunday.",
            options: [
              { option: "doesn't", isCorrect: true },
              { option: "don't", isCorrect: false },
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
      instruction: "Prepare and share a short weekday routine:",
      type: "checkbox",
      items: [
        {
          content: [
            "Prepare four simple sentences about your weekday routine.",
          ],
          textarea: true,
        },
        {
          content: ["Give the time for at least two activities."],
        },
        {
          content: [
            "Tell your partner your routine, then ask or answer two “What time do you…?” questions.",
          ],
        },
      ],
    } satisfies ListProps,
  },
};
