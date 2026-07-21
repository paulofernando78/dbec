import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold, mark } from "@/helpers/content";

export const beginnerWhatAreYouDoing = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "What Are You Doing?",
    descriptions: ["I am studying English.", "They are playing soccer."],
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          alt: "Studying",
          content: [
            ...content({
              parts: ["She is studying."],
            }),
          ],
        },
        {
          alt: "Reading",
          content: [
            ...content({
              parts: ["He is reading a book."],
            }),
          ],
        },
        {
          alt: "Playing",
          content: [
            ...content({
              parts: ["They are playing soccer."],
            }),
          ],
        },
        {
          alt: "Watching TV",
          content: [
            ...content({
              parts: ["We are watching TV."],
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
            question: "What is she doing?",
            options: [
              { option: "Studying", isCorrect: true },
              { option: "Sleeping", isCorrect: false },
            ],
          },
          {
            question: "What are they doing?",
            options: [
              { option: "Playing soccer", isCorrect: true },
              { option: "Reading", isCorrect: false },
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
          line: text(["Hi Jake. What are you doing?"]),
        },
        {
          speaker: "Jake",
          line: text(["I'm studying English."]),
        },
        {
          speaker: "Emma",
          line: text(["Are you doing homework too?"]),
        },
        {
          speaker: "Jake",
          line: text(["No, I'm reading an article."]),
        },
        {
          speaker: "Emma",
          line: text(["What is your brother doing?"]),
        },
        {
          speaker: "Jake",
          line: text(["He's watching TV."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What is Jake doing?",
            options: [
              { option: "Studying English", isCorrect: true },
              { option: "Watching TV", isCorrect: false },
            ],
          },
          {
            question: "What is Jake's brother doing?",
            options: [
              { option: "Watching TV", isCorrect: true },
              { option: "Reading", isCorrect: false },
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
        parts: [
          "Present Continuous describes actions happening ",
          mark("now"),
          ".",
        ],
      },
      {
        as: "span",
        parts: ["Form: ", bold("subject + am/is/are + verb-ing"), "."],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          column: "Question",
          items: [
            {
              parts: ["What are you doing?"],
            },
            {
              parts: ["What is he doing?"],
            },
            {
              parts: ["What is she doing?"],
            },
            {
              parts: ["What are they doing?"],
            },
          ],
        },
        {
          column: "Affirmative",
          items: [
            {
              parts: ["I’m studying English."],
            },
            {
              parts: ["He’s reading a book."],
            },
            {
              parts: ["She’s cooking dinner."],
            },
            {
              parts: ["They’re playing soccer."],
            },
          ],
        },
        {
          column: "Negative",
          items: [
            {
              parts: ["I’m not studying English."],
            },
            {
              parts: ["He isn’t reading a book."],
            },
            {
              parts: ["She isn’t cooking dinner."],
            },
            {
              parts: ["They aren’t playing soccer."],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [
          "Most verbs add ",
          bold("-ing"),
          ": read → reading, play → playing.",
        ],
      },
      {
        as: "span",
        parts: ["Verbs ending in -e usually drop the e: write → writing."],
      },
      {
        as: "span",
        parts: [
          "Common contractions: ",
          bold("I'm"),
          ", ",
          bold("he's"),
          ", ",
          bold("they're"),
        ],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["If I'm studying now, is the action happening at this moment?"],
      },
      {
        as: "span",
        parts: [
          "Do we use Present Continuous for actions happening now or every day?",
        ],
      },
      {
        as: "span",
        parts: ["In 'They are playing', is the subject singular or plural?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "She _____ a book.",
            options: [
              { option: "is reading", isCorrect: true },
              { option: "reads", isCorrect: false },
            ],
          },
          {
            question: "They _____ soccer.",
            options: [
              { option: "are playing", isCorrect: true },
              { option: "play", isCorrect: false },
            ],
          },
          {
            question: "_____ she cooking dinner now?",
            options: [
              { option: "Is", isCorrect: true },
              { option: "Does", isCorrect: false },
            ],
          },
          {
            question: "He _____ watching TV. He is reading.",
            options: [
              { option: "isn't", isCorrect: true },
              { option: "doesn't", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the sentences with the Present Continuous form.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "I " },
              { blank: "am studying" },
              { text: " English." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "She " },
              { blank: "is reading" },
              { text: " a book." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "They " },
              { blank: "are playing" },
              { text: " soccer." },
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
            prompt: "am / I / studying",
            answer: "I am studying.",
          },
          {
            prompt: "reading / she / is / book / a",
            answer: "She is reading a book.",
          },
          {
            prompt: "soccer / are / they / playing",
            answer: "They are playing soccer.",
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
          content: text([
            "Describe five actions happening around you right now.",
          ]),
        },
        {
          content: text([
            "Ask a classmate 'What are you doing?' and report the answers.",
          ]),
        },
        {
          content: text([
            "Write five Present Continuous sentences about people in your home.",
          ]),
          textarea: true,
        },
      ],
    } satisfies ListProps,
  },
};
