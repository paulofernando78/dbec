import type { TextItem } from "@/components/content/Text";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, audio, bold, mark } from "@/helpers/content";

export const beginnerWhatAreYouDoing = {
  whiteboard: {
    title: "A1 BEGINNER",
    descriptions: ["I am studying English.", "They are playing soccer."],
  },

  introduction: {
    blocks: [
      {
        type: "text",
        value: [{ parts: [audio("What are you doing now?"), "What are you doing now?"] }],
        className: "mb-4",
      },
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
          instruction: "Look at the pictures and listen to the sentences.",
          imgs: [
            {
              alt: "Studying",
              content: [
                ...content({
                  parts: ["She is studying."],
                }),
              ],
            },
            {
              alt: "Reading",
              content: [
                ...content({
                  parts: ["He is reading a book."],
                }),
              ],
            },
            {
              alt: "Playing",
              content: [
                ...content({
                  parts: ["They are playing soccer."],
                }),
              ],
            },
            {
              alt: "Watching TV",
              content: [
                ...content({
                  parts: ["We are watching TV."],
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
                question: "What is she doing?",
                options: [
                  { option: "Studying", isCorrect: true },
                  { option: "Sleeping", isCorrect: false },
                ],
              },
              {
                question: "What are they doing?",
                options: [
                  { option: "Playing soccer", isCorrect: true },
                  { option: "Reading", isCorrect: false },
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
            "Listen once: are the actions happening now or every day?",
          audioSrc: "",
          lines: [
            {
              speaker: "Emma",
              line: ["Hi Jake. What are you doing?"],
            },
            {
              speaker: "Jake",
              line: ["I'm studying English."],
            },
            {
              speaker: "Emma",
              line: ["Are you doing homework too?"],
            },
            {
              speaker: "Jake",
              line: ["No, I'm reading an article."],
            },
            {
              speaker: "Emma",
              line: ["What is your brother doing?"],
            },
            {
              speaker: "Jake",
              line: ["He's watching TV."],
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
                question: "What is Jake doing?",
                options: [
                  { option: "Studying English", isCorrect: true },
                  { option: "Watching TV", isCorrect: false },
                ],
              },
              {
                question: "What is Jake's brother doing?",
                options: [
                  { option: "Watching TV", isCorrect: true },
                  { option: "Reading", isCorrect: false },
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
            as: "span",
            parts: [
              "Present Continuous describes actions happening ",
              mark("now"),
              ".",
            ],
          },
          {
            as: "span",
            parts: ["Form: ", bold("subject + am/is/are + verb-ing"), "."],
          },
        ],
      },
      {
        type: "column",
        ...{
          width: 300,
          cols: [
            {
              column: "Question",
              items: [
                {
                  parts: ["What are you doing?"],
                },
                {
                  parts: ["What is he doing?"],
                },
                {
                  parts: ["What is she doing?"],
                },
                {
                  parts: ["What are they doing?"],
                },
              ],
            },
            {
              column: "Affirmative",
              items: [
                {
                  parts: ["I’m studying English."],
                },
                {
                  parts: ["He’s reading a book."],
                },
                {
                  parts: ["She’s cooking dinner."],
                },
                {
                  parts: ["They’re playing soccer."],
                },
              ],
            },
            {
              column: "Negative",
              items: [
                {
                  parts: ["I’m not studying English."],
                },
                {
                  parts: ["He isn’t reading a book."],
                },
                {
                  parts: ["She isn’t cooking dinner."],
                },
                {
                  parts: ["They aren’t playing soccer."],
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
              "Most verbs add ",
              bold("-ing"),
              ": read → reading, play → playing.",
            ],
          },
          {
            as: "span",
            parts: ["Verbs ending in -e usually drop the e: write → writing."],
          },
          {
            as: "span",
            parts: [
              "Common contractions: ",
              bold("I'm"),
              ", ",
              bold("he's"),
              ", ",
              bold("they're"),
            ],
          },
          {
            as: "span",
            parts: [
              "Use the Present Continuous for an action happening now: ",
              bold("am/is/are + verb-ing"),
              ". Ask a follow-up about the activity instead of repeating the same question.",
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: [
              "If I'm studying now, is the action happening at this moment?",
            ],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: [
              "Do we use Present Continuous for actions happening now or every day?",
            ],
            options: [
              { option: "Actions happening now", isCorrect: true },
              { option: "Regular everyday routines", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: [
              "In 'They are playing', is the subject singular or plural?",
            ],
            options: [
              { option: "Plural", isCorrect: true },
              { option: "Singular", isCorrect: false },
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
                question: "She _____ a book.",
                options: [
                  { option: "is reading", isCorrect: true },
                  { option: "reads", isCorrect: false },
                ],
              },
              {
                question: "They _____ soccer.",
                options: [
                  { option: "are playing", isCorrect: true },
                  { option: "play", isCorrect: false },
                ],
              },
              {
                question: "_____ she cooking dinner now?",
                options: [
                  { option: "Is", isCorrect: true },
                  { option: "Does", isCorrect: false },
                ],
              },
              {
                question: "He _____ watching TV. He is reading.",
                options: [
                  { option: "isn't", isCorrect: true },
                  { option: "doesn't", isCorrect: false },
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
          instruction:
            "Complete the sentences with the Present Continuous form.",
          numbered: true,
          exercise: {
            blocks: [
              {
                block: [
                  { text: "I " },
                  { blank: "am studying" },
                  { text: " English." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "She " },
                  { blank: "is reading" },
                  { text: " a book." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "They " },
                  { blank: "are playing" },
                  { text: " soccer." },
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
                prompt: "am / I / studying",
                answer: "I am studying.",
              },
              {
                prompt: "reading / she / is / book / a",
                answer: "She is reading a book.",
              },
              {
                prompt: "soccer / are / they / playing",
                answer: "They are playing soccer.",
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
        instruction: "Choose a lesson picture and help a partner identify it:",
        listType: "checkbox",
        items: [
          {
            content: [
              "Choose a picture without showing or naming it to your partner.",
            ],
          },
          {
            content: [
              "Describe at least three actions using am/is/are + verb-ing.",
            ],
          },
          {
            content: [
              "Your partner listens and identifies the picture. Then change roles.",
            ],
          },
        ],
      },
    ],
  },
};
