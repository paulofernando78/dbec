import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import {
  content,
  audio,
  bold,
  italic,
  mark,
  portuguese,
  underline,
  lineBreak,
  spacer,
} from "@/helpers/content";

export const beginnerHello = {
  whiteboard: {
    title: "A1 Beginner",
    subtitle: "Hello!",
    descriptions: ["Hi! I'm Laura.", "What's your name?"],
  },

  introduction: {
    blocks: [
      {
        type: "lines",
        value: [
      [
        audio("What do you say when you meet someone for the first time?"),
        "What do you say when you meet someone for the first time?",
      ],
    ],
        className: "mb-4",
      },
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
      instruction: "Look at the pictures. Listen to the sentences.",
      imgs: [
        {
          src: "/assets/img/course/a1/hello/introduction/pic-1.avif",
          alt: "Laura introduces herself to Eric",
          content: [
            ...content({
              parts: [
                audio("Laura says: “Hi! I'm Laura.”"),
                "Laura says: “Hi! I'm Laura.”",
                lineBreak(),
                portuguese(
                  "Laura diz: “Oi! (Eu) Sou a Laura.”",
                ),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a1/hello/introduction/pic-2.avif",
          alt: "Eric introduces himself to Laura",
          content: [
            ...content({
              parts: [
                audio("Eric says: “Hello. I’m Eric.”"),
                "Eric says: “Hello. I’m Eric.”",
                lineBreak(),
                portuguese(
                  "Eric diz: Olá, (Eu) sou o Eric.",
                ),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a1/hello/introduction/pic-4.avif",
          alt: "Laura and Eric shake hands",
          content: [
            ...content({
              parts: [
                audio("They shake hands."),
                "They ",
                mark("shake"),
                " hands.",
                lineBreak(),
                portuguese("Eles apertam as mãos."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a1/hello/introduction/pic-5.avif",
          alt: "Laura waves goodbye",
          content: [
            ...content({
              parts: [
                audio("Laura says: “Bye. See you in class.”"),
                "Laura says: “Bye. See you in class.”",
                lineBreak(),
                portuguese("Laura diz: Tchau. Vejo você na aula."),
              ],
            }),
          ],
        },
      ],
    },
      },
      {
        type: "radio",
        ...{
      instruction: "Choose True or False.",
      exercise: {
        questions: [
          {
            question: "Laura says, “I'm Laura.”",
            options: [
              { option: "True", isCorrect: true },
              { option: "False", isCorrect: false },
            ],
          },
          {
            question: "Eric says, “I'm Laura.”",
            options: [
              { option: "True", isCorrect: false },
              { option: "False", isCorrect: true },
            ],
          },
          {
            question: "They shake hands.",
            options: [
              { option: "True", isCorrect: true },
              { option: "False", isCorrect: false },
            ],
          },
          {
            question: "Laura says, “Bye.”",
            options: [
              { option: "True", isCorrect: true },
              { option: "False", isCorrect: false },
            ],
          },
        ],
      },
    },
      }
    ],
  },

  presentation: {
    blocks: [
      {
        type: "image",
        src: "/assets/img/course/a1/hello/introduction/pic-3.avif",
        alt: "Laura and Eric are talking",
      },
      {
        type: "dialogue",
        ...{
      instruction: "Laura and Eric meet for the first time.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Laura",
          line: ["Hi! I'm Laura Palmer. What's your name?"],
        },
        {
          speaker: "Eric",
          line: ["Hello! I’m Eric. Eric Garcia."],
        },
        {
          speaker: "Laura",
          line: ["Nice to meet you, Eric."],
        },
        {
          speaker: "Eric",
          line: ["Nice to meet you, too."],
        },
        {
          speaker: "Laura",
          line: ["Sorry? What’s your last name again?"],
        },
        {
          speaker: "Eric",
          line: ["It’s Garcia."],
        },
        {
          speaker: "Laura",
          line: ["See you in class. Bye."],
        },
        {
          speaker: "Eric",
          line: ["Bye!"],
        },
      ],
    },
      },
      {
        type: "radio",
        ...{
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What's your name?",
            options: [
              { option: "Nice to met you", isCorrect: false },
              { option: "Eric Garcia", isCorrect: true },
            ],
          },
          {
            question: "What's Eric's last name?",
            options: [
              { option: "Palmer", isCorrect: false },
              { option: "Garcia", isCorrect: true },
            ],
          },
        ],
      },
    },
      }
    ],
  },

  languageFocus: {
    blocks: [
      {
        type: "subsection",
        label: "Greetings",
        heading: 4,
      },
      {
        type: "subsection",
        label: "Saying hi!",
        heading: 5,
      },
      {
        type: "meaning",
        value: [
      {
        display: "block",
        as: "span",
        parts: [audio("Hi!"), "Hi!"],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Hi there!"), "Hi there!"],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Hello!"), "Hello!"],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Hey there!"), "Hey (there)!"],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Good morning. Morning."), "Good morning. / Morning."],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio("Good afternoon. Afternoon."),
          "Good after",
          underline("noon"),
          ".",
          " After",
          underline("noon"),
          ".",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Good evening. / Evening."), "Good evening. / Evening."],
      },
    ],
      },
      {
        type: "subsection",
        label: "Questions & Answers",
        heading: 5,
      },
      {
        type: "meaning",
        value: [
      {
        display: "block",
        as: "span",
        parts: [
          audio("How are you?"),
          "How are you? ",
          portuguese("Como você está?"),
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio("How are you doing?"),
          "How are you doing? ",
          portuguese("Como você vai?"),
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Good."), "Good. ", italic("informal")],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio("I’m pretty good."),
          "(I’m) pretty good. ",
          italic("informal"),
        ],
      },
      spacer(),
      {
        display: "block",
        as: "span",
        parts: [audio("How’s it going?"), "How’s it going?"],
      },
    ],
      },
      {
        type: "subsection",
        label: "Meeting Someone",
        heading: 4,
      },
      {
        type: "meaning",
        value: [
      {
        display: "block",
        as: "span",
        parts: [
          audio("I'm Laura. What's your name?"),
          "I'm Laura. What's your name?",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Sorry? Please repeat."), "Sorry? / Please repeat."],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Nice to meet you."), "Nice to meet you."],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Glad to meet you."), "Glad to meet you."],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("Pleased to meet you."), "Pleased to meet you."],
      },
      {
        display: "block",
        as: "span",
        parts: [audio("See you. Bye."), "See you. / Bye."],
      },
    ],
      },
      {
        type: "notes",
        value: [
      {
        as: "span",
        parts: [
          audio("I’m. = I am"),
          "I’m. = I am",
        ],
      },
      {
        as: "span",
        parts: [
          audio("What’s = What is"),
          "What’s = What is",
        ],
      },
    ],
      },
      {
        type: "ccq",
        value: [
      {
        as: "span",
        parts: ["..."],
        options: [
          { option: "true", isCorrect: true },
          { option: "false", isCorrect: false },
        ],
      },
    ],
      }
    ],
  },

  practice: {
    blocks: [
      {
        type: "guess",
      },
      {
        type: "radio",
        ...{
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "To introduce yourself:",
            options: [
              { option: "I'm Laura.", isCorrect: true },
              { option: "What's your name?", isCorrect: false },
            ],
          },
          {
            question: "At a first meeting:",
            options: [
              { option: "Nice to meet you.", isCorrect: true },
              { option: "Good night.", isCorrect: false },
            ],
          },
          {
            question: "To hear a name again:",
            options: [
              { option: "Please repeat.", isCorrect: true },
              { option: "Good night.", isCorrect: false },
            ],
          },
          {
            question: "To end the conversation:",
            options: [
              { option: "Bye!", isCorrect: true },
              { option: "What's your name?", isCorrect: false },
            ],
          },
          {
            question: "To ask a name:",
            options: [
              { option: "What's your name?", isCorrect: true },
              { option: "How old are you?", isCorrect: false },
            ],
          },
        ],
      },
    },
      },
      {
        type: "fillInTheBlanks",
        ...{
      showWordBank: true,
      instruction: "Complete the sentences.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [{ text: "" }, { blank: "I'm" }, { text: " Laura." }],
            lineBreak: true,
          },
          {
            block: [
              { text: "What " },
              { blank: "is" },
              { text: " your name?" },
            ],
            lineBreak: true,
          },
          {
            block: [{ text: "Nice to " }, { blank: "meet" }, { text: " you." }],
          },
        ],
      },
    },
      },
      {
        type: "unscramble",
        ...{
      showWordBank: false,
      instruction: "Unscramble the sentence.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "Laura / I'm",
            answer: "I'm Laura.",
          },
          {
            prompt: "your / what / name / is",
            answer: "What is your name?",
          },
          {
            prompt: "meet / nice / you / to",
            answer: "Nice to meet you.",
          },
        ],
      },
    },
      }
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Have a short first meeting with a classmate:",
        listType: "checkbox",
        items: [
        {
          content: ["Say hello and introduce yourself using your first name."],
        },
        {
          content: [
            "Ask your partner's first name. Say “Sorry?” or “Please repeat” if needed.",
          ],
        },
        {
          content: ["Say “Nice to meet you” and end with “See you!” or “Bye!”"],
        },
      ],
      }
    ],
  },
};
