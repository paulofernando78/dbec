import type { CCQ } from "@/components/content/CCQ";
import { completePractice } from "@/data/course/completePractice";
import type { ListProps } from "@/components/content/List";
import type { Notes } from "@/components/content/Notes";

import { audio, content, bold } from "@/helpers/content";

export const beginnerPersonalInformation = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Personal Information",
    descriptions: ["I’m Laura. I’m from Brazil.", "What’s your phone number?"],
  },

  introduction: {
    questions: [
      [
        audio("What information do people usually share when they meet?"),
        "What information do people usually share when they meet?",
      ],
    ],
    radio: {
      instruction:
        "Choose the information people commonly use to introduce themselves.",
      exercise: {
        questions: [
          {
            question: "Which is personal information?",
            options: [
              { option: "My name is Laura.", isCorrect: true },
              { option: "Close the window.", isCorrect: false },
            ],
          },
          {
            question: "For country or nationality:",
            options: [
              { option: "Where are you from?", isCorrect: true },
              { option: "What time is it?", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      instruction:
        "Listen once: is Liz asking about Laura’s family or her personal information?",
      audioSrc: "",
      lines: [
        {
          speaker: "Liz",
          line: ["Hi! What's your full name?"],
        },
        {
          speaker: "Laura",
          line: ["I'm Laura Silva."],
        },
        {
          speaker: "Liz",
          line: ["What's your first name?"],
        },
        {
          speaker: "Laura",
          line: ["Laura."],
        },
        {
          speaker: "Liz",
          line: ["What's your last name? How do you spell it?"],
        },
        {
          speaker: "Laura",
          line: ["Silva. S-I-L-V-A."],
        },
        {
          speaker: "Liz",
          line: ["Where are you from?"],
        },
        {
          speaker: "Laura",
          line: ["I'm from Brazil. I'm Brazilian."],
        },
        {
          speaker: "Liz",
          line: ["What's your phone number?"],
        },
        {
          speaker: "Laura",
          line: ["It's 555-0184."],
        },
      ],
    },
    radio: {
      instruction: "Listen again and choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Where is Laura from?",
            options: [
              { option: "Brazil", isCorrect: true },
              { option: "Canada", isCorrect: false },
            ],
          },
          {
            question: "What is Laura's phone number?",
            options: [
              { option: "555-0184", isCorrect: true },
              { option: "Laura Silva", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  languageFocus: {
    personalInformation: {
      width: 302,
      cols: [
        {
          column: "Questions",
          items: [
            {
              parts: [
                audio("What’s your full name?"),
                bold("What’s your full name?"),
              ],
            },
            {
              parts: [
                audio("What’s your first name?"),
                bold("What’s your first name?"),
              ],
            },
            {
              parts: [
                audio("What’s your last name?"),
                bold("What’s your last name?"),
              ],
            },
            {
              parts: [
                audio("How do you spell your last name?"),
                bold("How do you spell your last name?"),
              ],
            },
            {
              parts: [
                audio("Where are you from?"),
                bold("Where are you from?"),
              ],
            },
            {
              parts: [
                audio("What’s your phone number?"),
                bold("What’s your phone number?"),
              ],
            },
          ],
        },
        {
          column: "Answers",
          items: [
            { parts: ["Laura Palmer."] },
            { parts: ["Laura."] },
            { parts: ["Palmer."] },
            { parts: ["P-A-L-M-E-R."] },
            { parts: ["I’m from Brazil."] },
            { parts: ["It’s 555-0184."] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [
          "Use fictional information when practising addresses, phone numbers, or other private details.",
        ],
      },
      {
        as: "span",
        parts: [
          audio("first name = given name"),
          bold("first name"),
          " = given name",
        ],
      },
      {
        as: "span",
        parts: [
          audio("last name / surname = family name"),
          bold("last name / surname"),
          " = family name",
        ],
      },
      {
        as: "span",
        parts: [
          "In conversation, ",
          bold("What is"),
          " often becomes ",
          bold("What's"),
          ".",
        ],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["“Where are you from?”: a place or a phone number?"],
        options: [
          { option: "A place", isCorrect: true },
          { option: "A phone number", isCorrect: false },
        ],
      },
    ] satisfies CCQ[],
  },

  practice: completePractice({
    radio: {
      instruction: "Choose the best response.",
      exercise: {
        questions: [
          {
            question: "What's your full name?",
            options: [
              { option: "I'm Alex Costa.", isCorrect: true },
              { option: "I'm from Mexico.", isCorrect: false },
            ],
          },
          {
            question: "What's your last name?",
            options: [
              { option: "Costa.", isCorrect: true },
              { option: "Alex.", isCorrect: false },
            ],
          },
          {
            question: "Where are you from?",
            options: [
              { option: "I'm from Japan.", isCorrect: true },
              { option: "I'm twenty.", isCorrect: false },
            ],
          },
          {
            question: "How do you spell your last name?",
            options: [
              { option: "C-O-S-T-A.", isCorrect: true },
              { option: "I'm Alex Costa.", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the questions with the missing words.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "What " },
              { blank: "is" },
              { text: " your full name?" },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "What is your last " },
              { blank: "name" },
              { text: "?" },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Where " },
              { blank: "are" },
              { text: " you from?" },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "What is " },
              { blank: "your" },
              { text: " phone number?" },
            ],
            lineBreak: true,
          },
        ],
      },
    },
  }, [
    ["My first _____ is Alex.", "name", "number"],
    ["How do you _____ Costa?", "spell", "speak"],
    ["I _____ from Brazil.", "am", "is"],
    ["What's your phone _____?", "number", "country"],
  ]),

  production: {
    task: {
      instruction: "Interview a partner using fictional contact details:",
      type: "checkbox",
      items: [
        {
          content: content({
            parts: ["Ask their full, first, and last name."],
          }),
        },
        { content: content({ parts: ["Ask them to spell their last name."] }) },
        { content: content({ parts: ["Ask where they are from."] }) },
        {
          content: content({
            parts: ["Ask for a fictional phone number or email address."],
          }),
        },
        {
          content: content({
            parts: [
              "Record the answers in a simple registration form or note.",
            ],
          }),
          textarea: true,
        },
        {
          content: content({
            parts: [
              "Read the details back to your partner. Your partner confirms or corrects them.",
            ],
          }),
        },
      ],
    } satisfies ListProps,
  },
};
