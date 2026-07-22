import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold, mark } from "@/helpers/content";

export const beginnerAbilities = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Abilities",
    descriptions: ["I can swim.", "She can't play the guitar."],
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          alt: "Swimming",
          content: [
            ...content({
              parts: ["I can swim."],
            }),
          ],
        },
        {
          alt: "Playing guitar",
          content: [
            ...content({
              parts: ["She can play the guitar."],
            }),
          ],
        },
        {
          alt: "Riding a bike",
          content: [
            ...content({
              parts: ["He can ride a bike."],
            }),
          ],
        },
        {
          alt: "Playing soccer",
          content: [
            ...content({
              parts: ["They can play soccer."],
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
      instruction: "Listen and read. What can Jake do?",
      audioSrc: "",
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
        parts: ["We use ", bold("can"), " to say that someone has an ability."],
      },
      {
        as: "p",
        parts: ["After ", bold("can"), " we use the base form of the verb."],
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
              parts: ["Can you swim?"],
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
              parts: ["Yes, I can. (Yes, I can swim.)"],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Negative",
          items: [
            {
              parts: ["No, I can’t. (No, I can’t swim.)"],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [
          bold("can"),
          " and ",
          bold("can't"),
          " are followed by the base verb: can swim, can't drive.",
        ],
      },
      {
        as: "span",
        parts: [
          "In short answers, do not repeat the main verb: Yes, I can. / No, I can't.",
        ],
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
            question: "Jake is a good swimmer. He _____ swim.",
            options: [
              { option: "can", isCorrect: true },
              { option: "can't", isCorrect: false },
            ],
          },
          {
            question:
              "Mia doesn't know how to play the guitar. She _____ play it.",
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
      instruction: "Find and report three abilities:",
      type: "checkbox",
      items: [
        {
          content: text([
            mark("Prepare three questions"),
            " using “Can you…?”",
          ]),
          textarea: true,
        },
        {
          content: text([
            "Ask one or more classmates and record short answers.",
          ]),
        },
        {
          content: text(["Report three results using a clear can or can’t."]),
        },
      ],
    } satisfies ListProps,
  },
};
