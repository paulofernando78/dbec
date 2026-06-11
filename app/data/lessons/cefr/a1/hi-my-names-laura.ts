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
    dialogue: {
      prompt: "Listen to the dialogue.",
      audioSrc:
        "/assets/audio/lessons/cefr/a1/hi-my-names-laura/presentation/dialogue.mp3",
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
              parts: [
                audio(
                  "/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/hi.mp3",
                ),
                "Hi!",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/hi-there.mp3",
                ),
                "Hi, there!",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/hello.mp3",
                ),
                "Hello!",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/hey.mp3",
                ),
                "Hey!",
              ],
            },
            {
              lineBreak: true,
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/good-morning.mp3"), "Good morning."],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/morning.mp3"), "Morning."],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/good-afternoon.mp3"), "Good afternoon."],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/afternoon.mp3"), "Afternoon."],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/good-evening.mp3"), "Good evening."],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/evening.mp3"), "Evening."],
            },
          ],
        },

        {
          borderColor: "border-red-800",
          bgColor: "bg-red-600",
          textColor: "text-white",
          column: "Common Questions",
          items: [
            {
              parts: [
                audio(
                  "/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/questions/how-are-you.mp3",
                ),
                "How are you?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/questions/how-are-you-doing.mp3",
                ),
                "How are you doing?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/questions/hows-it-going.mp3",
                ),
                "How’s it going?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/questions/hows-everything.mp3",
                ),
                "How’s everything",
              ],
            },
            {
              lineBreak: true,
            },
            {
              parts: [italic("Informal")],
            },
            {
              parts: [
                audio(
                  "/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/questions/whats-up.mp3",
                ),
                "What’s up",
              ],
            },
            {
              lineBreak: true,
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/common-questions/whats-your-name.mp3"), "What’s your name?"],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/common-questions/whats-your-first-name.mp3"), "What’s your first name?"],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/common-questions/how-do-you-spell-your-first-name.mp3"), "How do you spell your first name?"],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/common-questions/whats-your-last-name.mp3"), "What’s your last name?"],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/common-questions/how-do-you-spell-your-last-name.mp3"), "How do you spell your last name?"],
            },
            {
              parts: [audio("/assets/img/lessons/cefr/a1/hi-my-names-laura/language-focus/common-questions/how-do-you-spell-it.mp3"), "How do you spell it? (it = first/last)"],
            },
          ],
        },

        {
          borderColor: "border-yellow-800",
          bgColor: "bg-yellow-500",
          textColor: "text-black",
          column: "Possible Answers",
          items: [
            {
              parts: [audio("/"), "I'm well."],
            },
            {
              parts: [audio("/"), "I'm fine."],
            },
            {
              parts: [audio("/"), "My first name is Laura."],
            },
            {
              parts: [audio("/"), "My last name is Palmer."],
            },
            {
              parts: [audio("/"), "(Its) P-A-L-M-E-R."],
            },
          ],
        },
      ],
    },
  },

  practice: {
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
          {
            question: "What is Laura's last name?",
            options: [
              { option: "Palmer", isCorrect: true },
              { option: "Eric", isCorrect: false },
            ],
          },
          {
            question: "How is Eric?",
            options: [
              { option: "He is pretty good.", isCorrect: true },
              { option: "His name is Palmer.", isCorrect: false },
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
            block: [
              { text: "My last name" },
              { blank: "is" },
              { text: "Palmer." },
            ],
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
            prompt: "your / what / name / last / is",
            answer: "What is your last name?",
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
