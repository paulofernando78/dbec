import {
  bold,
  content,
  mark,
  portuguese,
} from "@/helpers/content";

export const lesson = {
  objective: [
    "By the end of this class, students will be able to identify common classroom people and objects, understand basic classroom instructions, and ask what something is.",
  ],

  introduction: {
    lines: [
      content({
        parts: [
          "Laura and Eric enter the ",
          mark("classroom"),
          ". ",
          portuguese("Laura e Eric entram na sala de aula."),
        ],
      }),
      content({
        parts: [
          "Mr. Smith is their ",
          mark("teacher"),
          ". ",
          portuguese("O Sr. Smith é o professor deles."),
        ],
      }),
      content({
        parts: [
          "Laura and Eric are ",
          mark("students"),
          ". ",
          portuguese("Laura e Eric são alunos."),
        ],
      }),
    ],
  },

  presentation: {
    vocabulary: {
      width: 250,
      cols: [
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "People",
          items: [
            { parts: ["teacher"] },
            { parts: ["student"] },
            { parts: ["classmate"] },
          ],
        },
        {
          borderColor: "border-blue-800",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Objects",
          items: [
            { parts: ["book"] },
            { parts: ["notebook"] },
            { parts: ["pen"] },
            { parts: ["pencil"] },
            { parts: ["desk"] },
            { parts: ["chair"] },
            { parts: ["board"] },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Instructions",
          items: [
            { parts: ["Sit down."] },
            { parts: ["Stand up."] },
            { parts: ["Open your book."] },
            { parts: ["Close your book."] },
            { parts: ["Listen and repeat."] },
          ],
        },
      ],
    },
  },

  languageFocus: {
    patterns: {
      width: 300,
      cols: [
        {
          borderColor: "border-red-800",
          bgColor: "bg-red-600",
          textColor: "text-white",
          column: "Questions",
          items: [
            { parts: ["What is this?"] },
            { parts: ["What is that?"] },
            { parts: ["Who is he?"] },
            { parts: ["Who is she?"] },
          ],
        },
        {
          borderColor: "border-yellow-800",
          bgColor: "bg-yellow-500",
          textColor: "text-black",
          column: "Answers",
          items: [
            { parts: ["It is a book."] },
            { parts: ["That is the board."] },
            { parts: ["He is the teacher."] },
            { parts: ["She is a student."] },
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
            question: "Who is Mr. Smith?",
            options: [
              { option: "He is the teacher.", isCorrect: true },
              { option: "He is a book.", isCorrect: false },
            ],
          },
          {
            question: "What do you sit on?",
            options: [
              { option: "A chair.", isCorrect: true },
              { option: "A board.", isCorrect: false },
            ],
          },
          {
            question: "What do you write with?",
            options: [
              { option: "A pen or a pencil.", isCorrect: true },
              { option: "A desk.", isCorrect: false },
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
              { text: "Mr. Smith is the" },
              { blank: "teacher" },
              { text: "." },
            ],
          },
          {
            block: [
              { text: "Laura is a" },
              { blank: "student" },
              { text: "." },
            ],
          },
          {
            block: [
              { text: "Open your" },
              { blank: "book" },
              { text: "." },
            ],
          },
          {
            block: [
              { text: "Sit on the" },
              { blank: "chair" },
              { text: "." },
            ],
          },
        ],
      },
    },

    scramble: {
      showWordBank: false,
      instruction: "Unscramble the sentences.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "this / what / is",
            answer: "What is this?",
          },
          {
            prompt: "a / it / book / is",
            answer: "It is a book.",
          },
          {
            prompt: "your / open / book",
            answer: "Open your book.",
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
            "Work with a partner. Point to classroom objects, ask “What is this?”, and answer with “It is a/an...”. Then practice two classroom instructions.",
          ),
        ],
      }),
    ],
  },
};
