import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold, mark } from "@/helpers/content";

import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";
const href = "/courses/beginner/abilities";
const data = courseLessonsCardData.beginner.find(
  (lesson) => lesson.href === href,
)!;

export const beginnerAbilities = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Abilities",
    descriptions: ["I can swim.", "She can't play the guitar."],
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
          alt: "Swimming",
          content: [
            ...content({
              parts: [audio("/"), "I can swim."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Playing guitar",
          content: [
            ...content({
              parts: [audio("/"), "She can play the guitar."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Riding a bike",
          content: [
            ...content({
              parts: [audio("/"), "He can ride a bike."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Playing soccer",
          content: [
            ...content({
              parts: [audio("/"), "They can play soccer."],
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
            question: "Which activity happens in water?",
            options: [
              { option: "Swimming", isCorrect: true },
              { option: "Cycling", isCorrect: false },
            ],
          },
          {
            question: "Which sport uses a ball?",
            options: [
              { option: "Soccer", isCorrect: true },
              { option: "Swimming", isCorrect: false },
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
          speaker: "Emma",
          line: text(["Can you play soccer?"]),
        },
        {
          speaker: "Jake",
          line: text(["Yes, I can."]),
        },
        {
          speaker: "Emma",
          line: text(["Can you play the guitar?"]),
        },
        {
          speaker: "Jake",
          line: text(["No, I can't."]),
        },
        {
          speaker: "Emma",
          line: text(["What can you do?"]),
        },
        {
          speaker: "Jake",
          line: text(["I can swim and ride a bike."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Can Jake play soccer?",
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
          {
            question: "Can Jake play the guitar?",
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
        as: "p",
        parts: [audio("/"), "We use ", bold("can"), " ..."],
      },
      {
        as: "p",
        parts: [
          audio("/"),
          "After ",
          bold("can"),
          " we use the base form of the verb.",
        ],
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
          column: "Question",
          items: [
            {
              parts: [audio("/"), "Can you swim?"],
            },
          ],
        },
        // Column 2
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Affirmative",
          items: [
            {
              parts: [audio("/"), "Yes, I can. (Yes, I can swim.)"],
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
              parts: [audio("/"), "No, I can’t. (No, I can’t swim.)"],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: ["!!! pronunciation"],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["If I can swim, am I able to swim?"],
      },
      {
        as: "span",
        parts: ["If I can't drive, can I drive a car?"],
      },
      {
        as: "span",
        parts: ["After 'can', do we use the base verb or 'to + verb'?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "I _____ swim.",
            options: [
              { option: "can", isCorrect: true },
              { option: "can't", isCorrect: false },
            ],
          },
          {
            question: "She _____ play the guitar.",
            options: [
              { option: "can't", isCorrect: true },
              { option: "can", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: false,
      instruction: "Fill in the blanks with can / can’t.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [{ text: "I " }, { blank: "can" }, { text: " swim." }],
            lineBreak: true,
          },
          {
            block: [{ text: "She " }, { blank: "can't" }, { text: " drive." }],
            lineBreak: true,
          },
          {
            block: [
              { text: "They " },
              { blank: "can" },
              { text: " play soccer." },
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
            prompt: "can / swim / I",
            answer: "I can swim.",
          },
          {
            prompt: "can't / she / drive",
            answer: "She can't drive.",
          },
          {
            prompt: "play / can / soccer / they",
            answer: "They can play soccer.",
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
          content: text([mark("Write three things"), "you can do."]),
          textarea: true,
        },
        {
          content: text([mark("Write three things"), "you can't do."]),
          textarea: true,
        },
        {
          content: text([
            "Interview a classmate about their abilities and write the answers.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
