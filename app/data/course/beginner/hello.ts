import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import {
  content,
  text,
  audio,
  bold,
  italic,
  mark,
  portuguese,
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
    storyCarousel: {
      instruction: "Look at the pictures. Listen to the sentences.",
      words: [
        {
          src: "/assets/img/courses/a1/hello/introduction/pic-1.avif",
          alt: "Laura introduces herself to Eric",
          content: [
            ...content({
              parts: [
                audio("Laura says: “Hi! I'm Laura. What’s your name?”"),
                "Laura says: “Hi! I'm Laura. What’s your name?",
                lineBreak(),
                portuguese(
                  "Laura diz: “Oi! (Eu) Sou a Laura. Qual é o seu nome?”",
                ),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/courses/a1/hello/introduction/pic-2.avif",
          alt: "Eric introduces himself to Laura",
          content: [
            ...content({
              parts: [
                audio("Eric says: “Hi, Laura. I’m Eric. Nice to meet you.”"),
                "Eric says: “Hello, Laura. I’m Eric. Nice to meet you.",
                lineBreak(),
                portuguese("Eric diz: Olá, Laura. (Eu) Sou o Eric. Prazer em conhecê-la."),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/courses/a1/hello/introduction/pic-3.avif",
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
          src: "/assets/img/courses/a1/hello/introduction/pic-4.avif",
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
          src: "/assets/img/courses/a1/hello/introduction/pic-5.avif",
          alt: "Laura waves goodbye",
          content: [
            ...content({
              parts: [
                audio("Lauras says: Bye. See you in class."),
                "Laura says: Bye. See you in class.",
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
            question: "Eric says, “Bye.”",
            options: [
              { option: "True", isCorrect: false },
              { option: "False", isCorrect: true },
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
          line: [...text(["Hi! I'm Laura Palmer. What's your name?"])],
        },
        {
          speaker: "Eric",
          line: [...text(["Hello! I'm Eric, Eric "])],
        },
        {
          speaker: "Laura",
          line: [...text(["Sorry? Please repeat."])],
        },
        {
          speaker: "Eric",
          line: [...text(["It‘s Eric."])],
        },
        {
          speaker: "Laura",
          line: [...text(["Nice to meet you, Eric."])],
        },
        {
          speaker: "Eric",
          line: [...text(["Nice to meet you too."])],
        },
        {
          speaker: "Laura",
          line: [...text(["See you in class!"])],
        },
        {
          speaker: "Eric",
          line: [...text(["Bye!"])],
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
          audio("Good afternoon. / Afternoon."),
          "Good afternoon. / Afternoon.",
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
          audio(
            "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/questions-and-answers/how-are-you.mp3",
          ),
          "How are you?",
          " ",
          portuguese("Como você está?"),
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/questions-and-answers/how-are-you-doing.mp3",
          ),
          "How are you doing?",
          " ",
          portuguese("Como você vai?"),
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/questions-and-answers/i-am.mp3",
          ),
          "I am...",
          " ",
          audio(
            "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/questions-and-answers/im.mp3",
          ),
          "I’m...",
          " ",
          portuguese("Estou..."),
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/questions-and-answers/good.mp3",
          ),
          "good.",
          " ",
          italic("informal"),
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/questions-and-answers/pretty-good.mp3",
          ),
          "pretty good.",
          " ",
          italic("informal"),
        ],
      },
      spacer(),
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/questions-and-answers/hows-it-going.mp3",
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
        parts: [audio("See you. Bye."), "See you. / Bye."],
      },
    ] satisfies Meaning[],
    notes: [
      {
        as: "span",
        parts: [bold("I am"), " → ", bold("I’m")],
      },
      {
        as: "span",
        parts: [bold("What is"), " → ", bold("What’s")],
      },
      {
        as: "span",
        parts: [
          "Use ",
          bold("Sorry?"),
          " or ",
          bold("Please repeat."),
          " when you do not understand.",
        ],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: [
          "When I say “I’m Laura”, am I introducing myself or another person?",
        ],
      },
      {
        as: "span",
        parts: [
          "Do I already know the person’s name when I ask “What’s your name?”",
        ],
      },
      {
        as: "span",
        parts: [
          "Do I say “Nice to meet you” when I meet someone for the first time?",
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
            question: "What's your first name?",
            options: [
              { option: "Laura", isCorrect: true },
              { option: "Palmer", isCorrect: false },
            ],
          },
          {
            question:
              "What do you say when you meet someone for the first time?",
            options: [
              { option: "Nice to meet you.", isCorrect: true },
              { option: "Good night.", isCorrect: false },
            ],
          },
          {
            question:
              "What does Laura say when she does not understand Eric's name?",
            options: [
              { option: "Please repeat.", isCorrect: true },
              { option: "Good night.", isCorrect: false },
            ],
          },
          {
            question: "Laura says:",
            options: [
              { option: "Nice to meet you.", isCorrect: true },
              { option: "Good night.", isCorrect: false },
            ],
          },
          {
            question: "How do you ask someone's name?",
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
            block: [{ text: "My name" }, { blank: "is" }, { text: "Laura." }],
            lineBreak: true,
          },
          {
            block: [
              { text: "My first" },
              { blank: "name" },
              { text: "is Laura." },
            ],
            lineBreak: true,
          },
          {
            block: [{ text: "What" }, { blank: "is" }, { text: "your name?" }],
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
            prompt: "name / my / Laura / is",
            answer: "My name is Laura.",
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
          content: text([
            "Say hello and introduce yourself using your first name.",
          ]),
        },
        {
          content: text([
            "Ask your partner's first name. Say “Sorry?” or “Please repeat” if needed.",
          ]),
        },
        {
          content: text([
            "Say “Nice to meet you” and end with “See you!” or “Bye!”",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
