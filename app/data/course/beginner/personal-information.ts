import { content, audio, bold, italic, portuguese, spacer } from "@/helpers/content";

export const beginnerPersonalInformation = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Personal Information",
    descriptions: ["I’m Laura. I’m from Brazil.", "What’s your phone number?"],
  },

  introduction: {
    blocks: [
      {
        type: "lines",
        value: [
          [
            audio("What information do people usually share when they meet?"),
            "What information do people usually share when they meet?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "radio",
        ...{
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
    ],
  },

  presentation: {
    blocks: [
      {
        type: "image",
        src: "/",
        alt: "Laura and Eric are talking",
      },
      {
        type: "dialogue",
        ...{
          instruction: [
            "Listen to Laura and Eric having a conversation. ",
            portuguese("Laura e Eric se encontram pela primeira vez."),
          ],
          audioSrc: "/",
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
      },
      {
        type: "radio",
        ...{
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
    ],
  },

  languageFocus: {
    blocks: [
      {
        type: "subsection",
        label: "Personal Information",
        heading: 4,
      },
      {
        type: "subsection",
        label: "Saying hi!",
        heading: 5,
      },
      {
        type: "meaning",
        value: [
          {
            display: "block",
            as: "p",
            parts: [audio("How are you?"), "How are you?"],
          },
          {
            display: "block",
            as: "p",
            parts: [audio("How are you doing?"), "How are you doing?"],
          },
          spacer(),
          {
            display: "block",
            as: "span",
            parts: [audio("opmistic"), italic("opmistic")],
          },
          {
            display: "block",
            as: "p",
            parts: [audio("Doing great!"), "Doing great!"],
          },
          spacer(),
          {
            display: "block",
            as: "span",
            parts: [audio("pessimist"), italic("pessimist")],
          },
          {
            display: "block",
            as: "p",
            parts: [audio("Can’t complain!"), "Can’t complain!"],
          },
          {
            display: "block",
            as: "p",
            parts: [audio("Could be worse."), "Could be worse."],
          },
        ],
      },
      {
        type: "subsection",
        label: "Personal Information",
        heading: 4,
      },
      {
        type: "subsection",
        label: "Questions and Answers",
        heading: 5,
      },
      {
        type: "meaning",
        value: [
          {
            display: "block",
            as: "p",
            parts: [
              audio("What’s your first name? Laura."),
              "What’s your first name? Laura.",
            ],
          },
          {
            display: "block",
            as: "p",
            parts: [
              audio("How do you spell your first name? L-A-U-R-A."),
              "How do you spell your first name? L-A-U-R-A.",
            ],
          },
          {
            display: "block",
            as: "p",
            parts: [
              audio("What’s your last name? Palmer."),
              "What’s your last name? Palmer.",
            ],
          },
          {
            display: "block",
            as: "p",
            parts: [
              audio("How do you spell your last name? P-A-L-M-E-R."),
              "How do you spell your last name? P-A-L-M-E-R.",
            ],
          },
          {
            display: "block",
            as: "p",
            parts: [
              audio("What’s your full name?"),
              "What’s your full name? Laura Palmer.",
            ],
          },
          {
            display: "block",
            as: "p",
            parts: [
              audio("Where are you from? I’m from the United States."),
              "Where are you from? I’m from the United States.",
            ],
          },
          {
            display: "block",
            as: "p",
            parts: [
              audio("What’s your phone number? It’s 555-01-84."),
              "What’s your phone number? It’s 555-01-84.",
            ],
          },
        ],
      },
      {
        type: "notes",
        value: [
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
        ],
      },
      {
        type: "alphabet",
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: ["“Where are you from?”: a place or a phone number?"],
            options: [
              { option: "A place", isCorrect: true },
              { option: "A phone number", isCorrect: false },
            ],
          },
        ],
      },
    ],
  },

  practice: {
    blocks: [
      {
        type: "guess",
      },
      {
        type: "radio",
        ...{
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
      },
      {
        type: "fillInTheBlanks",
        ...{
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
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Interview a partner using fictional contact details:",
        listType: "checkbox",
        items: [
          {
            content: content({
              parts: ["Ask their full, first, and last name."],
            }),
          },
          {
            content: content({ parts: ["Ask them to spell their last name."] }),
          },
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
      },
    ],
  },
};
