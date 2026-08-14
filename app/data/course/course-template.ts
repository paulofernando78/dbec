import type { CCQ } from "@/components/content/CCQ/";
import type { TextItem } from "@/components/content/Text";
import type { Notes } from "@/components/content/Notes";

import {
  content,
  audio,
  bold,
  mark,
  portuguese,
  lineBreak,
  spacer,
} from "@/helpers/content";

export const courseTemplate = {
  whiteboard: {
    title: "Course Template",
    subtitle: 'Material "import"',
    descriptions: ["Description"],
    date: "",
  },

  introduction: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
          instruction: "Look at the pictures and listen to the sentences.",
          imgs: [
            {
              src: "/.avif",
              alt: "alt",
              content: [
                ...content({
                  parts: [audio("..."), lineBreak(), portuguese("...”")],
                }),
              ],
            },
          ],
        },
      },
      {
        type: "text",
        as: "p",
        value: [
          {
            parts: [bold("Now answer the questions.")],
          },
          spacer(),
          {
            parts: [audio("Question two."), "Question two."],
          },
          {
            parts: [audio("Question two."), "Question one."],
          },
        ],
      },
      {
        type: "imageQuiz",
        words: [{ word: "option", img: 0 }],
      },
      {
        type: "radio",
        instruction: "Choose the correct answer.",
        exercise: {
          questions: [
            {
              question: "Comprehension question goes here.",
              options: [
                { option: "Correct option", isCorrect: true },
                { option: "Incorrect option", isCorrect: false },
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
        type: "image",
        src: "/.avif",
        alt: "...",
      },
      {
        type: "dialogue",
        instruction: "Listen to the dialogue.",
        audioSrc: "",
        lines: [
          {
            speaker: "Person A",
            line: ["First dialogue line goes here."],
          },
          {
            speaker: "Person B",
            line: ["Second dialogue line goes here."],
          },
        ],
      },
      {
        type: "radio",
        instruction: "Choose the answer supported by the dialogue.",
        exercise: {
          questions: [
            {
              question: "Dialogue comprehension question goes here.",
              options: [
                { option: "Incorrect option", isCorrect: false },
                { option: "Correct option", isCorrect: true },
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
            display: "block",
            as: "span",
            parts: [bold("Meaning:"), " explanation goes here."],
          },
          {
            display: "block",
            as: "span",
            parts: [bold("Form:"), " form explanation goes here."],
          },
        ] satisfies TextItem[],
      },
      {
        type: "column",
        width: 300,
        cols: [
          {
            borderColor: "border-slate-500",
            bgColor: "bg-slate-400",
            textColor: "text-white",
            column: "Column 1",
            items: [
              {
                parts: [bold("Q:"), " Example question goes here."],
              },
              {
                parts: [bold("A:"), " Example answer goes here."],
              },
            ],
          },
          {
            borderColor: "border-slate-500",
            bgColor: "bg-slate-400",
            textColor: "text-white",
            column: "Column 2",
            items: [
              {
                parts: [bold("Q:"), " Another example question goes here."],
              },
              {
                parts: [bold("A:"), " Another example answer goes here."],
              },
            ],
          },
        ],
      },
      {
        type: "notes",
        value: [
          {
            as: "span",
            parts: [bold("Note:"), " important note goes here."],
          },
        ] satisfies Notes[],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: ["Concept-checking question goes here."],
            options: [
              { option: "Correct answer", isCorrect: true },
              { option: "Incorrect answer", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["Second concept-checking question goes here."],
          },
        ] satisfies CCQ[],
      },
    ],
  },

  practice: {
    blocks: [
      {
        type: "guess",
        words: [{ word: "example" }, { word: "option" }, { word: "result" }],
      },
      {
        type: "radio",
        instruction: "Choose the correct answer.",
        exercise: {
          questions: [
            {
              question: "Practice question goes here.",
              options: [
                { option: "Correct option", isCorrect: true },
                { option: "Incorrect option", isCorrect: false },
              ],
            },
          ],
        },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        instruction: "Fill in the blanks.",
        numbered: true,
        exercise: {
          blocks: [
            {
              block: [
                { text: "Sentence start " },
                { blank: "answer" },
                { text: " sentence end." },
              ],
              lineBreak: true,
            },
          ],
        },
      },
      {
        type: "unscramble",
        showWordBank: false,
        instruction: "Unscramble the sentence.",
        numbered: true,
        exercise: {
          items: [
            {
              prompt: "sentence / example / an / is / this",
              answer: "This is an example sentence.",
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
        instruction: "Complete the final task:",
        listType: "checkbox",
        items: [
          {
            content: ["Use the target language."],
            textarea: true,
          },
          {
            content: ["Use the key vocabulary."],
            textarea: true,
          },
          {
            content: ["Practise with a partner."],
            textarea: true,
          },
        ],
      },
    ],
  },
};
