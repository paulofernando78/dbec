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
    prompt: [
      ...content({
        parts: [bold("Look at the picture and listen to the sentences.")],
      }),
    ],

    image: {
      src: "/assets/img/lessons/cefr/a1/hi-my-names-laura/introduction/laura-eric-introduction.avif",
      alt: "Laura and Eric introducing themselves.",
      applyPadding: true,
    },

    sentences: [
      [
        ...content({
          parts: [audio("/"), "This is an ", mark("English School"), "."],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "Laura and Eric are ", mark("students"), "."],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "They're in the ", mark("classroom"), "."],
        }),
      ],
      [
        ...content({
          parts: [audio("/"), "Mr. Smith is the ", mark("teacher"), "."],
        }),
      ],
    ],

    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "1. Question",
            options: [
              { option: "option 1", isCorrect: true },
              { option: "option 2", isCorrect: false },
              { option: "option 3", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialoguePrompt: [
      ...content({
        parts: [bold("Listen and follow the dialogue.")],
      }),
    ],

    dialogue: {
      instruction: "Look at the picture, listen to the sentences and answer the questions. Then, listen to the dialogue.",
      imgSrc:
        "/assets/img/lessons/cefr/a1/hi-my-names-laura/introduction/laura-eric-introduction.avif",
      imgAlt: "Laura and Eric",
      audioSrc: "/",
      lines: [
        {
          speaker: "Laura",
          line: text(["Hi! I'm Laura. What's your name?"]),
        },
        {
          speaker: "Eric",
          line: text(["Hi Laura. I'm Eric."]),
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
          borderColor: "border-blue-800",
          bgColor: "bg-blue-600",
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
            block: [
              { text: "My name" },
              { blank: "is" },
              { text: "Laura." },
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
        ],
      },
    },
  },

  production: {
    prompt: [
      ...content({
        parts: [
          bold(
            "Introduce yourself to your classmates using the expressions from the lesson."
          ),
        ],
      }),
    ],
  },
};
