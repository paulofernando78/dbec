import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import {
  icon,
  content,
  text,
  audio,
  bold,
  italic,
  mark,
  underline,
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
      instruction:
        "Look at the pictures. Laura and Eric are at school. Now listen to the sentences.",
      words: [
        // Laura says, “Hi! I'm Laura.””
        {
          src: "/assets/img/courses/a1/hello/introduction/laura-eric-introduction1.avif",
          alt: "Laura introduces herself to Eric",
          content: [
            ...content({
              parts: [
                audio("Laura says, “Hi! I'm Laura.”"),
                "Laura says, “Hi! I'm Laura.”",
                lineBreak(),
                portuguese("Laura diz: “Oi! Eu sou a Laura.”"),
              ],
            }),
          ],
        },
        // Eric says, “Hello! I'm Eric.””
        {
          src: "/assets/img/courses/a1/hello/introduction/laura-eric-introduction2.avif",
          alt: "Eric introduces himself to Laura",
          content: [
            ...content({
              parts: [
                audio("Eric says, “Hello! I'm Eric.”"),
                "Eric says, “Hello! I'm Eric.”",
                lineBreak(),
                portuguese("Eric diz: “Olá! Eu sou o Eric.”"),
              ],
            }),
          ],
        },
        // They shake hands.
        {
          src: "/assets/img/courses/a1/hello/introduction/laura-eric-shake-hands.avif",
          alt: "Laura and Eric shake hands",
          content: [
            ...content({
              parts: [
                audio("They shake hands."),
                "They",
                " ",
                mark("shake"),
                " ",
                "hands.",
                lineBreak(),
                portuguese("Eles se cumprimentam."),
              ],
            }),
          ],
        },
      ],
    },

    radio: {
      instruction: "Look at the pictures and choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Where are Laura and Eric?",
            options: [
              { option: "At school", isCorrect: true },
              { option: "At home", isCorrect: false },
            ],
          },
          {
            question: "Who says “Hello!”?",
            options: [
              { option: "Laura", isCorrect: false },
              { option: "Eric", isCorrect: true },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      instruction: "Laura and Eric meet for the first time. Listen and read.",
      audioSrc: "",
      lines: [
        {
          speaker: "Laura",
          line: [
            audio("Hi! I'm Laura. What's your name?"),
            ...text(["Hi! I'm Laura. What's your name?"]),
          ],
        },
        {
          speaker: "Eric",
          line: [audio("Hello! I'm Eric."), ...text(["Hello! I'm Eric."])],
        },
        {
          speaker: "Laura",
          line: [
            audio("How do you spell it?"),
            ...text(["How do you spell it?"]),
          ],
        },
        {
          speaker: "Eric",
          line: [audio("E-R-I-C."), ...text(["E-R-I-C."])],
        },
        {
          speaker: "Laura",
          line: [audio("Nice to meet you."), ...text(["Nice to meet you."])],
        },
        {
          speaker: "Eric",
          line: [
            audio("Nice to meet you too."),
            ...text(["Nice to meet you too."]),
          ],
        },
        {
          speaker: "Laura",
          line: [audio("See you in class!"), ...text(["See you in class!"])],
        },
        {
          speaker: "Eric",
          line: [audio("Bye!"), ...text(["Bye!"])],
        },
      ],
    },
  },

  languageFocus: {
    greetings: [
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "Hi!",
          ),
          "Hi!",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "Hi there!",
          ),
          "Hi there!",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "Hello!",
          ),
          "Hello!",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "Hey there!",
          ),
          "Hey (there)!",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "Good morning. Morning.",
          ),
          "Good morning. / Morning.",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "Good afternoon. / Afternoon.",
          ),
          "Good afternoon. / Afternoon.",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "Good evening. / Evening.",
          ),
          "Good evening. / Evening.",
        ],
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
    notes: [
      {
        as: "span",
        parts: [bold("I am"), " → ", bold("I’m")],
      },
      {
        as: "span",
        parts: [bold("What is"), " → ", bold("What’s")],
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
            question: "How does Eric spell his name?",
            options: [
              { option: "E-R-I-C.", isCorrect: true },
              { option: "L-A-U-R-A.", isCorrect: false },
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
            prompt: "spell / how / it / do / you",
            answer: "How do you spell it?",
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
          content: text(["Introduce yourself to a classmate."]),
        },
        {
          content: text([
            "Ask your partner's first name and ask them to spell it.",
          ]),
        },
        {
          content: text(["End the conversation with “See you!” or “Bye!”"]),
        },
      ],
    } satisfies ListProps,
  },
};
