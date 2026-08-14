import type { TextItem } from "@/components/content/Text";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, audio, bold, mark } from "@/helpers/content";

export const beginnerAbilities = {
  whiteboard: {
    title: "A1 BEGINNER",
    descriptions: ["I can swim.", "She can't play the guitar."],
  },

  introduction: {
    blocks: [
      {
        type: "text",
        value: [{ parts: [audio("What can you do well?"), "What can you do well?"] }],
        className: "mb-4",
      },
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
          instruction: "Look at the pictures and listen to the sentences.",
          imgs: [
            {
              alt: "Swimming",
              content: [
                ...content({
                  parts: ["I can swim."],
                }),
              ],
            },
            {
              alt: "Playing guitar",
              content: [
                ...content({
                  parts: ["She can play the guitar."],
                }),
              ],
            },
            {
              alt: "Riding a bike",
              content: [
                ...content({
                  parts: ["He can ride a bike."],
                }),
              ],
            },
            {
              alt: "Playing soccer",
              content: [
                ...content({
                  parts: ["They can play soccer."],
                }),
              ],
            },
          ],
        },
      },
      {
        type: "radio",
        ...{
          instruction: "Choose the correct answer.",
          exercise: {
            questions: [
              {
                question: "Which activity happens in water?",
                options: [
                  { option: "Swimming", isCorrect: true },
                  { option: "Cycling", isCorrect: false },
                ],
              },
              {
                question: "Which sport uses a ball?",
                options: [
                  { option: "Soccer", isCorrect: true },
                  { option: "Swimming", isCorrect: false },
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
        type: "dialogue",
        ...{
          instruction:
            "Listen once: can Jake do every activity Emma asks about?",
          audioSrc: "",
          lines: [
            {
              speaker: "Emma",
              line: ["Can you play soccer?"],
            },
            {
              speaker: "Jake",
              line: ["Yes, I can."],
            },
            {
              speaker: "Emma",
              line: ["Can you play the guitar?"],
            },
            {
              speaker: "Jake",
              line: ["No, I can't."],
            },
            {
              speaker: "Emma",
              line: ["What can you do?"],
            },
            {
              speaker: "Jake",
              line: ["I can swim and ride a bike."],
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
                question: "Can Jake play soccer?",
                options: [
                  { option: "Yes", isCorrect: true },
                  { option: "No", isCorrect: false },
                ],
              },
              {
                question: "Can Jake play the guitar?",
                options: [
                  { option: "No", isCorrect: true },
                  { option: "Yes", isCorrect: false },
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
        type: "text",
        value: [
          {
            as: "p",
            parts: [
              "We use ",
              bold("can"),
              " to say that someone has an ability.",
            ],
          },
          {
            as: "p",
            parts: [
              "After ",
              bold("can"),
              " we use the base form of the verb.",
            ],
          },
        ],
      },
      {
        type: "column",
        ...{
          width: 300,
          cols: [
            // Column 1
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Question",
              items: [
                {
                  parts: ["Can you swim?"],
                },
              ],
            },
            // Column 2
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Affirmative",
              items: [
                {
                  parts: ["Yes, I can. (Yes, I can swim.)"],
                },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Negative",
              items: [
                {
                  parts: ["No, I can’t. (No, I can’t swim.)"],
                },
              ],
            },
          ],
        },
      },
      {
        type: "notes",
        value: [
          {
            as: "span",
            parts: [
              bold("can"),
              " and ",
              bold("can't"),
              " are followed by the base verb: can swim, can't drive.",
            ],
          },
          {
            as: "span",
            parts: [
              "In short answers, do not repeat the main verb: Yes, I can. / No, I can't.",
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: ["If I can swim, am I able to swim?"],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["If I can't drive, can I drive a car?"],
            options: [
              { option: "No", isCorrect: true },
              { option: "Yes", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["After 'can', do we use the base verb or 'to + verb'?"],
            options: [
              { option: "The base verb", isCorrect: true },
              { option: "To + verb", isCorrect: false },
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
          instruction: "Choose the correct answer.",
          exercise: {
            questions: [
              {
                question: "Jake is a good swimmer. He _____ swim.",
                options: [
                  { option: "can", isCorrect: true },
                  { option: "can't", isCorrect: false },
                ],
              },
              {
                question:
                  "Mia is not able to play the guitar. She _____ play it.",
                options: [
                  { option: "can't", isCorrect: true },
                  { option: "can", isCorrect: false },
                ],
              },
            ],
          },
        },
      },
      {
        type: "fillInTheBlanks",
        ...{
          showWordBank: false,
          instruction: "Fill in the blanks with can / can’t.",
          numbered: true,
          exercise: {
            blocks: [
              {
                block: [{ text: "I " }, { blank: "can" }, { text: " swim." }],
                lineBreak: true,
              },
              {
                block: [
                  { text: "She " },
                  { blank: "can't" },
                  { text: " drive." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "They " },
                  { blank: "can" },
                  { text: " play soccer." },
                ],
                lineBreak: true,
              },
            ],
          },
        },
      },
      {
        type: "unscramble",
        ...{
          showWordBank: false,
          instruction: "Unscramble the sentence.",
          numbered: true,
          exercise: {
            items: [
              {
                prompt: "can / swim / I",
                answer: "I can swim.",
              },
              {
                prompt: "can't / she / drive",
                answer: "She can't drive.",
              },
              {
                prompt: "play / can / soccer / they",
                answer: "They can play soccer.",
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
        instruction: "Find and report three abilities:",
        listType: "checkbox",
        items: [
          {
            content: [mark("Prepare three questions"), " using “Can you…?”"],
            textarea: true,
          },
          {
            content: ["Ask one or more classmates and record short answers."],
          },
          {
            content: ["Report three results using a clear can or can’t."],
          },
        ],
      },
    ],
  },
};

export const beginnerCouldYouHelpMe = {
  whiteboard: {
    title: "A1 BEGINNER",
    descriptions: ["Could you help me?", "Sure, no problem."],
  },

  introduction: {
    blocks: [
      {
        type: "text",
        value: [
          [
            audio("When do you ask someone for help?"),
            "When do you ask someone for help?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the polite request.",
        exercise: {
          questions: [
            {
              question: "Which sentence asks for help politely?",
              options: [
                { option: "Could you help me?", isCorrect: true },
                { option: "You help me now.", isCorrect: false },
              ],
            },
            {
              question: "Which answer accepts a request?",
              options: [
                { option: "Sure, no problem.", isCorrect: true },
                { option: "No help.", isCorrect: false },
              ],
            },
          ],
        },
      },
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: "Listen once: what does Emma need help with?",
        audioSrc: "",
        lines: [
          {
            speaker: "Emma",
            line: ["Excuse me. Could you help me?"],
          },
          {
            speaker: "Jake",
            line: ["Sure, no problem."],
          },
          {
            speaker: "Emma",
            line: ["Can you open this window, please?"],
          },
          {
            speaker: "Jake",
            line: ["Of course."],
          },
          {
            speaker: "Emma",
            line: ["Thank you."],
          },
          {
            speaker: "Jake",
            line: ["You're welcome."],
          },
        ],
      },
      {
        type: "radio",
        instruction: "Listen again and choose the correct answer.",
        exercise: {
          questions: [
            {
              question: "What does Emma ask Jake to open?",
              options: [
                { option: "The window", isCorrect: true },
                { option: "The door", isCorrect: false },
              ],
            },
            {
              question: "Does Jake agree to help?",
              options: [
                { option: "Yes", isCorrect: true },
                { option: "No", isCorrect: false },
              ],
            },
          ],
        },
      },
    ],
  },

  languageFocus: {
    blocks: [
      {
        type: "text",
        value: [
          {
            as: "p",
            parts: [bold("Could you...?"), " is a polite request."],
          },
          {
            as: "p",
            parts: [bold("Can I...?"), " asks for permission."],
          },
          {
            as: "p",
            parts: [bold("Sure, no problem."), " accepts a request."],
          },
        ],
      },
      {
        type: "column",
        width: 300,
        cols: [
          {
            column: "Request",
            items: [
              { parts: [bold("Q:"), " Could you help me?"] },
              { parts: [bold("A:"), " Sure, no problem."] },
            ],
          },
          {
            column: "Permission",
            items: [
              { parts: [bold("Q:"), " Can I sit here?"] },
              { parts: [bold("A:"), " Of course."] },
            ],
          },
          {
            column: "Thanks",
            items: [
              { parts: [bold("A:"), " Thank you."] },
              { parts: [bold("A:"), " You're welcome."] },
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: ["Is Could you help me? polite?"],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["Does Sure, no problem accept the request?"],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
        ],
      },
    ],
  },

  practice: {
    blocks: [
      { type: "guess" },
      {
        type: "radio",
        instruction: "Choose the correct answer.",
        exercise: {
          questions: [
            {
              question: "___ you help me?",
              options: [
                { option: "Could", isCorrect: true },
                { option: "Helping", isCorrect: false },
              ],
            },
            {
              question: "Can I sit here? ___ course.",
              options: [
                { option: "Of", isCorrect: true },
                { option: "On", isCorrect: false },
              ],
            },
          ],
        },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the requests and responses.",
        exercise: {
          blocks: [
            {
              block: [{ blank: "Could" }, { text: " you help me?" }],
              lineBreak: true,
            },
            {
              block: [{ text: "Sure, no " }, { blank: "problem" }, { text: "." }],
              lineBreak: true,
            },
            {
              block: [{ blank: "Can" }, { text: " I sit here?" }],
              lineBreak: true,
            },
            {
              block: [{ text: "Of " }, { blank: "course" }, { text: "." }],
              lineBreak: true,
            },
          ],
        },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: {
          items: [
            {
              prompt: "you / could / help / me",
              answer: "Could you help me?",
            },
            {
              prompt: "problem / sure / no",
              answer: "Sure, no problem.",
            },
            {
              prompt: "sit / can / here / I",
              answer: "Can I sit here?",
            },
          ],
        },
      },
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Role-play a short help request:",
        listType: "checkbox",
        items: [
          { content: ["Ask for help politely."], textarea: true },
          { content: ["Accept the request."], textarea: true },
          { content: ["Say thank you and respond politely."], textarea: true },
        ],
      },
    ],
  },
};
