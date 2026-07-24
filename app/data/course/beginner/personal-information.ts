import type { CCQ } from "@/components/content/CCQ";
import type { ListProps } from "@/components/content/List";
import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";

import { audio, content, bold, spacer } from "@/helpers/content";

export const beginnerPersonalInformation = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Personal Information",
    descriptions: ["I'm Laura. I'm from Brazil.", "What's your phone number?"],
  },

  introduction: {
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
      instruction: "Listen and read.",
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
      instruction: "Choose the correct answer.",
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
            question: "Liz: “What's your phone number?”",
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
    personalInformation: [
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "/assets/audio/course/a1/unit-1-hello/language-focus/personal-information/questions-answers/whats-your-full-name.mp3",
          ),
          bold("What's your full name?"),
          " Laura Palmer.",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "/assets/audio/course/a1/unit-1-hello/language-focus/personal-information/questions-answers/whats-your-first-name.mp3",
          ),
          bold("What's your first name?"),
          " Laura.",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "/assets/audio/course/a1/unit-1-hello/language-focus/personal-information/questions-answers/whats-your-last-name.mp3",
          ),
          bold("What's your last name?"),
          " Palmer.",
        ],
      },
      {
        display: "block",
        as: "span",
        parts: [
          audio(
            "/assets/audio/course/a1/unit-1-hello/language-focus/personal-information/questions-answers/how-do-you-spell-your-last-name.mp3",
          ),
          bold("How do you spell your last name?"),
          "P-A-L-M-E-R.",
        ],
      },
      spacer(),
      {
        display: "block",
        as: "span",
        parts: [bold("Where are you from?"), " I'm from Brazil."],
      },
      {
        display: "block",
        as: "span",
        parts: [bold("What's your phone number?"), " It's 555-0184."],
      },
    ] satisfies Meaning[],
    notes: [
      {
        as: "span",
        parts: [
          "Use fictional information when practising addresses, phone numbers, or other private details.",
        ],
      },
      {
        as: "span",
        parts: [bold("first name"), " = given name"],
      },
      {
        as: "span",
        parts: [bold("last name / surname"), " = family name"],
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
      },
      {
        as: "span",
        parts: ["Real private information in classroom practice: yes or no?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
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
  },

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
              "Check that the registration form includes all the required details.",
            ],
          }),
        },
      ],
    } satisfies ListProps,
  },
};
