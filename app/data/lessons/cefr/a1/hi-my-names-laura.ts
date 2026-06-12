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
    greetings: {
      width: 300,
      cols: [
        // Saying hi!
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Saying hi!",
          items: [
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/hi.mp3",
                ),
                "Hi!",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/hi-there.mp3",
                ),
                "Hi, there!",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/hello.mp3",
                ),
                "Hello!",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/hey.mp3",
                ),
                "Hey!",
              ],
            },
            {
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/good-morning.mp3",
                ),
                "Good morning.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/morning.mp3",
                ),
                "Morning.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/good-afternoon.mp3",
                ),
                "Good afternoon.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/afternoon.mp3",
                ),
                "Afternoon.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/good-evening.mp3",
                ),
                "Good evening.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/saying-hi/evening.mp3",
                ),
                "Evening.",
              ],
            },
          ],
        },
        // Common Questions
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Common Questions",
          items: [
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/common-questions/how-are-you.mp3",
                ),
                "How are you?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/common-questions/how-are-you-doing.mp3",
                ),
                "How are you doing?",
              ],
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/common-questions/hows-it-going.mp3",
                ),
                "How’s it going?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/common-questions/hows-everything.mp3",
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
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/common-questions/whats-up.mp3",
                ),
                "What’s up",
              ],
            },
          ],
        },
        // Possible Answers
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-black",
          column: "Possible Answers",
          items: [
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/i-am.mp3",
                ),
                "I am...",
              ],
            },
            {
              parts: [
                icon("spotlight"),
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/im.mp3",
                ),
                "I’m...",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/well.mp3",
                ),
                "well.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/great.mp3",
                ),
                "great.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/fine.mp3",
                ),
                "fine.",
              ],
              lineBreak: true,
            },
            {
              parts: [italic("informal.")],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/good.mp3",
                ),
                "good.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/pretty-good.mp3",
                ),
                "pretty good.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/cant-complain.mp3",
                ),
                "Can’t complain.",
              ],
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/nothing-much.mp3",
                ),
                "Nothing much.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/not-much-you.mp3",
                ),
                "Not much, you?.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/just-chilling.mp3",
                ),
                "Just chilling.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/greetings/possible-answers/just-working.mp3",
                ),
                "Just working.",
                " ",
                portuguese("Só trabalho"),
              ],
              lineBreak: true,
            },
          ],
        },
      ],
    },
    personalInformation: {
      width: 300,
      cols: [
        // Common Questions
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Common Questions",
          items: [
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/whats-your-name.mp3",
                ),
                "What’s your name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/whats-your-first-name.mp3",
                ),
                "What’s your first name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/how-do-you-spell-your-first-name.mp3",
                ),
                "How do you spell your first name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/whats-your-last-name.mp3",
                ),
                "What’s your last name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/how-do-you-spell-your-last-name.mp3",
                ),
                "How do you spell your last name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/how-do-you-spell-it.mp3",
                ),
                "How do you spell it? (it = first/last)",
              ],
            },
          ],
        },
        // Possible Answers
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-black",
          column: "Possible Answers",
          items: [
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-name-is.mp3",
                ),
                "My name is...",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-names.mp3",
                ),
                "My name’s...",
              ],
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-first-name-is.mp3",
                ),
                "My first name is...",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-first-names.mp3",
                ),
                "My first name’s...",
              ],
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-last-name-is.mp3",
                ),
                "My last name is...",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-last-names.mp3",
                ),
                "My last name’s...",
              ],
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/its-p-a-l-m-e-r.mp3",
                ),
                "(It’s) P-A-L-M-E-R.",
              ],
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
