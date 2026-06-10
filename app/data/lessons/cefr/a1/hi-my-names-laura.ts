import {
  content,
  text,
  icon,
  audio,
  bold,
  italic,
  mark,
  boldMark,
  underline,
  stressed,
  phonetics,
  portuguese,
} from "@/helpers/content";

export const lesson = {
  objective: [
    "By the end of this class, students will be able to greet someone, say their name, ask for basic personal information, and introduce themselves clearly.",
  ],

  introduction: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/assets/img/lessons/cefr/a1/hi-my-names-laura/introduction/laura-eric-introduction1.avif",
          alt: "...",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/introduction/laura-says-hi-im-laura.mp3",
                ),
                "Laura says, “Hi! I'm Laura.”",
                " ",
                portuguese("Laura diz: “Oi! Eu sou a Laura.”"),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/lessons/cefr/a1/hi-my-names-laura/introduction/laura-eric-introduction2.avif",
          alt: "...",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/introduction/eric-says-hello-im-eric.mp3",
                ),
                "Eric says, “Hello! I'm Eric.”",
                " ",
                portuguese("Eric diz: “Olá! Eu sou o Eric.”"),
              ],
            }),
          ],
        },
        {
          src: "/assets/img/lessons/cefr/a1/hi-my-names-laura/introduction/laura-eric-shake-hands.avif",
          alt: "...",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/introduction/they-shake-hands.mp3",
                ),
                "They",
                " ",
                mark("shake"),
                " ",
                "hands.",
                " ",
                portuguese("Eles se cumprimentam."),
              ],
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
            question: "1. Are they old friends?",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            question: "1. Are they brothers and sisters?",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "...",
          content: [
            ...content({
              parts: [
                audio(
                  "/",
                ),
                "”",
                " ",
                portuguese("”"),
              ],
            }),
          ],
        },
      ],
    },

    dialogue: {
      prompt:
        "Look at the picture, listen to the sentences and answer the questions. Then, listen to the dialogue.",
      imgSrc:
        "/assets/img/lessons/cefr/a1/hi-my-names-laura/presentation/laura-eric-school.avif",
      imgAlt: "Laura and Eric",
      sentences: [
        [
          ...content({
            parts: [audio(""), "They are ", mark("classmates"), "."],
          }),
        ],
        [
          ...content({
            parts: [audio(""), "Mr. Smith is the ", mark("teacher"), "."],
          }),
        ],
      ],
      audioSrc:
        "/assets/audio/cefr/a1/hi-my-names-laura/presentation/dialogue.mp3",
      lines: [
        {
          speaker: "Laura",
          line: text(["Hi there! How are you doing?"]),
        },
        {
          speaker: "Eric",
          line: text(["Hello, I'm pretty good. How about you?"]),
        },
        {
          speaker: "Laura",
          line: text(["I'm great, thanks. I'm Laura."]),
        },
        {
          speaker: "Eric",
          line: text(["Hello, Laura. I'm Eric."]),
        },
        {
          speaker: "Laura",
          line: text(["Nice to meet you."]),
        },
        {
          speaker: "Eric",
          line: text(["Nice to meet you too. What's your last name?"]),
        },
        {
          speaker: "Laura",
          line: text(["It's Palmer."]),
        },
        {
          speaker: "Eric",
          line: text(["How do you spell it?"]),
        },
        {
          speaker: "Laura",
          line: text(["P-A-L-M-E-R."]),
        },
        {
          speaker: "Eric",
          line: text(["Are you a new student here?"]),
        },
        {
          speaker: "Laura",
          line: text(["Yes, I am. How about you?"]),
        },
        {
          speaker: "Eric",
          line: text(["Me too. So, class starts in 5 minutes, right? Ready?"]),
        },
        {
          speaker: "Laura",
          line: text(["Yes. I am. Let's go."]),
        },
      ],
    },
  },

  languageFocus: {
    columnDrag: {
      width: 300,
      cols: [
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Greetings",
          items: [
            {
              parts: ["Hi"],
            },
            {
              parts: ["Hello"],
            },
            {
              parts: ["Good morning"],
            },
          ],
        },

        {
          borderColor: "border-red-800",
          bgColor: "bg-red-600",
          textColor: "text-white",
          column: "Questions",
          items: [
            {
              parts: ["What's your name?"],
            },
            {
              parts: ["How are you?"],
            },
          ],
        },

        {
          borderColor: "border-yellow-800",
          bgColor: "bg-yellow-500",
          textColor: "text-black",
          column: "Answers",
          items: [
            {
              parts: ["I'm Laura."],
            },
            {
              parts: ["I'm Eric."],
            },
          ],
        },
      ],
    },
  },

  practice: {
    guess: {
      words: [
        { word: "teacher", img: 0 },
        { word: "student", img: 1 },
      ],
    },

    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What's her name?",
            options: [
              { option: "Laura", isCorrect: true },
              { option: "Eric", isCorrect: false },
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
        ],
      },
    },
  },

  production: {
    prompt: [
      ...content({
        parts: [
          bold(
            "Introduce yourself to your classmates using the expressions from the lesson.",
          ),
        ],
      }),
    ],
  },
};
