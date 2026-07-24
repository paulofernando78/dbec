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
  icon,
} from "@/helpers/content";

export const beginnerHello = {
  whiteboard: {
    title: "A1 Beginner",
    subtitle: "Hello!",
    descriptions: ["Hi! I'm Laura.", "What's your name?"],
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures. Listen to the sentences.",
      imgs: [
        {
          src: "/assets/img/course/a1/hello/introduction/pic-1.avif",
          alt: "Laura introduces herself to Eric",
          content: [
            ...content({
              parts: [
                audio("Laura says: “Hi! I'm Laura. What’s your name?”"),
                "Laura says: “Hi! I'm Laura. What’s your name?”",
                lineBreak(),
                portuguese(
                  "Laura diz: “Oi! (Eu) Sou a Laura. Qual é o seu nome?”",
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
                audio("Eric says: “Hello, Laura. I’m Eric. Nice to meet you.”"),
                "Eric says: “Hello, Laura. I’m Eric. Nice to meet you.”",
                lineBreak(),
                portuguese(
                  "Eric diz: Olá, Laura. (Eu) sou o Eric. Prazer em conhecê-la.",
                ),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a1/hello/introduction/pic-3.avif",
          alt: "Laura replies nice to meet you, too",
          content: [
            ...content({
              parts: [
                audio("Laura says, “Nice to meet you, too.”"),
                "Laura says: “Nice to meet you, too.”",
                lineBreak(),
                portuguese("Laura diz: Muito prazer."),
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

    radio: {
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
  },

  presentation: {
    dialogue: {
      instruction: "Laura and Eric meet for the first time. Listen and read.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Laura",
          line: ["Hi! I'm Laura Palmer. What's your name?"],
        },
        {
          speaker: "Eric",
          line: ["Hello! I'm Eric, Eric "],
        },
        {
          speaker: "Laura",
          line: ["Sorry? Please repeat."],
        },
        {
          speaker: "Eric",
          line: ["It‘s Eric."],
        },
        {
          speaker: "Laura",
          line: ["Nice to meet you, Eric."],
        },
        {
          speaker: "Eric",
          line: ["Nice to meet you too."],
        },
        {
          speaker: "Laura",
          line: ["See you in class!"],
        },
        {
          speaker: "Eric",
          line: ["Bye!"],
        },
      ],
    },
  },

  languageFocus: {
    greetings: [
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
    ] satisfies Meaning[],
    askingQuestions: [
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
        parts: [
          audio(
            "Good.",
          ),
          "Good. ",
          italic("informal"),
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "I’m pretty good.",
          ),
          "(I’m) pretty good. ",
          italic("informal"),
        ],
      },
      spacer(),
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "How’s it going?",
          ),
          "How’s it going?",
        ],
      },
    ] satisfies Meaning[],
    meetingSomeone: [
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
    ] satisfies Meaning[],
    notes: [
      {
        as: "span",
        parts: [audio("I’m, I am"), bold("I’m"), icon("arrow"), bold("I am")],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: [
          "...",
        ],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
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

    fillInTheBlanks: {
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

    scramble: {
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
  },

  production: {
    task: {
      instruction: "Have a short first meeting with a classmate:",
      type: "checkbox",
      items: [
        {
          content: [
            "Say hello and introduce yourself using your first name.",
          ],
        },
        {
          content: [
            "Ask your partner's first name. Say “Sorry?” or “Please repeat” if needed.",
          ],
        },
        {
          content: [
            "Say “Nice to meet you” and end with “See you!” or “Bye!”",
          ],
        },
      ],
    } satisfies ListProps,
  },
};
