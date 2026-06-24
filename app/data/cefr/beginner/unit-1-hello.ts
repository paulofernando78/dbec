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
  space
} from "@/helpers/content";

import { lessons } from "@/data/cefr/beginnerLessonCardData";

export const lesson = {
  whiteboard: {
    title: "A1 Beginner",
    subtitle: "Unit 1 • Hi, my name’s Laura.",
  },

  lessonCard: {
    lessonObjective: lessons.unitOne.lessonObjective,
    grammar: lessons.unitOne.grammar,
    vocabulary: lessons.unitOne.vocabulary,
  },

  introduction: {
    carouselWide: {
      prompt:
        "Look at the pictures. Laura and Eric are at school. Now listen to the sentences.",
      imgs: [
        // Laura says, “Hi! I'm Laura.””
        {
          src: "/assets/img/cefr/a1/unit-1-hi-my-names-laura/introduction/laura-eric-introduction1.avif",
          alt: "...",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/cefr/a1/unit-1-hello/introduction/laura-says-hi-im-laura.mp3",
                ),
                "Laura says, “Hi! I'm Laura.”",
                lineBreak(),
                portuguese("Laura diz: “Oi! Eu sou a Laura.”"),
              ],
            }),
          ],
        },
        // Eric says, “Hello! I'm Eric.””
        {
          src: "/assets/img/cefr/a1/unit-1-hi-my-names-laura/introduction/laura-eric-introduction2.avif",
          alt: "...",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/cefr/a1/unit-1-hello/introduction/eric-says-hello-im-eric.mp3",
                ),
                "Eric says, “Hello! I'm Eric.”",
                lineBreak(),
                portuguese("Eric diz: “Olá! Eu sou o Eric.”"),
              ],
            }),
          ],
        },
        // They shake hands.
        {
          src: "/assets/img/cefr/a1/unit-1-hi-my-names-laura/introduction/laura-eric-shake-hands.avif",
          alt: "...",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/cefr/a1/unit-1-hello/introduction/they-shake-hands.mp3",
                ),
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
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Laura and Eric are at home.",
            options: [
              { option: "true.", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            question: "They are new friends.",
            options: [
              { option: "true", isCorrect: true },
              { option: "false", isCorrect: false },
            ],
          },
          {
            question: "They are brothers and sisters.",
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
      prompt: "Laura and Eric meet for the first time. Listen to the dialogue.",
      audioSrc: "/assets/audio/cefr/a1/unit-1-hello/presentation/dialogue.mp3",
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
    greetings: [
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi/hi.mp3",
            ),
            "Hi!",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi/hi-there.mp3",
            ),
            "Hi there!",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi/hello.mp3",
            ),
            "Hello!",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi//hey.mp3",
            ),
            "Hey!",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi//good-morning.mp3",
            ),
            "Good morning.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi/morning.mp3",
            ),
            "Morning.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi//good-afternoon.mp3",
            ),
            "Good afternoon.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi//afternoon.mp3",
            ),
            "Afternoon.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi//good-evening.mp3",
            ),
            "Good evening.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(
              "/assets/audio/cefr/a1/unit-1-hello/language-focus/greetings/saying-hi//evening.mp3",
            ),
            "Evening.",
          ],
        }),
      ],
    ],
    askingQuestions: [
      [
        ...content({
          parts: [
            audio("/"),
            "How are you?",
            " ",
            portuguese("Como você está?"),
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio("/"),
            "How are you doing?",
            " ",
            portuguese("Como você vai?"),
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio("/"),
            "How are you?",
            " ",
            portuguese("Como você está?"),
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio("/"),
            "How are you doing?",
            " ",
            portuguese("Como você vai?"),
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio("/"),
            "I am...",
            " ",
            audio("/"),
            "I’m...",
            " ",
            portuguese("Estou..."),
          ],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "good.", " ", italic("informal")],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "pretty good.", " ", italic("informal")],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "well."],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "great."],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "fine."],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "can’t complain"],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "same as usual"],
        }),
      ],
      space(),
      [
        ...content({
          parts: [audio("/"), "How’s it going?"],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "How’s everything?"],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "How are things?"],
        }),
      ],
      space(),
      [
        ...content({
          parts: [audio("/"), "What’s up?"],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "Nothing much.", " ", portuguese("Nada demais.")],
        }),
      ],
      [
        ...content({
          parts: [
            audio("/"),
            "Not much, you?",
            " ",
            portuguese("Nada demais, e você?"),
          ],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "Just chilling.", " ", portuguese("De boa.")],
        }),
      ],
    ],
    personalInformation: [
      [
        ...content({
          parts: [bold("Common Questions & Possible Answers")],
        }),
      ],
      [
        ...content({
          parts: [
            audio(".../whats-your-name.mp3"),
            "What’s your name?",
            lineBreak(),
            audio(".../my-name-is.mp3"),
            "My name is...",
            lineBreak(),
            audio(".../my-names.mp3"),
            "My name’s...",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(".../whats-your-first-name.mp3"),
            "What’s your first name?",
            lineBreak(),
            audio(".../my-first-name-is.mp3"),
            "My first name is...",
            lineBreak(),
            audio(".../my-first-names.mp3"),
            "My first name’s...",
            lineBreak(),
            audio(".../my-first-names.mp3"),
            "(it’s) Laura.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(".../how-do-you-spell-your-first-name.mp3"),
            "How do you spell your first name?",
            lineBreak(),
            audio(".../its-p-a-l-m-e-r.mp3"),
            "(It’s) L-A-U-R-A.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(".../whats-your-last-name.mp3"),
            "What’s your last name?",
            lineBreak(),
            audio(".../my-last-name-is.mp3"),
            "My last name is...",
            lineBreak(),
            audio(".../my-last-names.mp3"),
            "My last name’s...",
            lineBreak(),
            audio(".../its-p-a-l-m-e-r.mp3"),
            "(It’s) Palmer.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(".../how-do-you-spell-your-last-name.mp3"),
            "How do you spell your last name?",
            lineBreak(),
            audio(".../its-p-a-l-m-e-r.mp3"),
            "(It’s) P-A-L-M-E-R.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            icon("spotlight"),
            audio(".../how-do-you-spell-it.mp3"),
            "How do you spell it? (it = first/last)",
            lineBreak(),
          ],
        }),
      ],
      [
        ...content({
          parts: [
            audio(".../nice-to-meet-you-1.mp3"),
            "Nice to meet you.",
            lineBreak(),
            audio(".../nice-to-meet-you-2.mp3"),
            "Nice to mee",
            underline("t y"),
            "ou.",
            lineBreak(),
            audio(".../nice-meeting-you.mp3"),
            "Nice to meeting you.",
          ],
        }),
      ],
    ],
    notes: [
      {
        as: "span",
        parts: [
          audio(
            "/assets/audio/cefr/a1/unit-1-hello/language-focus/first-name-given-name.mp3",
          ),
          bold("first name"),
          " = given name",
        ],
      },
      {
        as: "span",
        parts: [
          audio(
            "/assets/audio/cefr/a1/unit-1-hello/language-focus/last-name-surname-family-name.mp3",
          ),
          bold("last name / surname name"),
          " = family name",
        ],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["Is 'Laura' a first name or a last name?"],
      },
      {
        as: "span",
        parts: ["Is 'Palmer' a first name or a last name?"],
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
            question: "What's your last name?",
            options: [
              { option: "Palmer", isCorrect: true },
              { option: "Laura", isCorrect: false },
            ],
          },
          {
            question: "How is Eric?",
            options: [
              { option: "Pretty good.", isCorrect: true },
              { option: "Tired.", isCorrect: false },
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
    task: {
      instruction: "Complete the tasks:",
      type: "checkbox",
      items: [
        {
          value: text(["Introduce yourself to a classmate."]),
        },
        {
          value: text([
            "Ask your partner's first and last name and spell them.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
