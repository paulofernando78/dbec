import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

import { cefrLessonsCardData } from "@/data/cefr/cefr-lessons-card-data";
const href = "/cefr/beginner/food-and-drinks"
const data = cefrLessonsCardData.beginner.find(
  (lesson) => lesson.href === href
)!;

export const beginnerFoodAndDrinks = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Food and Drinks",
    descriptions: ["I like pizza.", "I don't like coffee."],
  },

  lessonCard: {
    lessonObjective: data.lessonObjective,
    grammar: data.grammar,
    vocabulary: data.vocabulary,
  },

  introduction: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "Pizza",
          content: [
            ...content({
              parts: [audio("/"), "I like pizza."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Coffee",
          content: [
            ...content({
              parts: [audio("/"), "I don't like coffee."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Juice",
          content: [
            ...content({
              parts: [audio("/"), "I like orange juice."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Salad",
          content: [
            ...content({
              parts: [audio("/"), "I like salad."],
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
            question: "Which one is a drink?",
            options: [
              { option: "Coffee", isCorrect: true },
              { option: "Pizza", isCorrect: false },
            ],
          },
          {
            question: "Which one is food?",
            options: [
              { option: "Burger", isCorrect: true },
              { option: "Milk", isCorrect: false },
            ],
          },
          {
            question: "Do people eat pizza?",
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      prompt: "Listen to the dialogue.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Emma",
          line: text(["Do you like pizza?"]),
        },
        {
          speaker: "Jake",
          line: text(["Yes, I do. I love pizza."]),
        },
        {
          speaker: "Emma",
          line: text(["Do you like coffee?"]),
        },
        {
          speaker: "Jake",
          line: text(["No, I don't."]),
        },
        {
          speaker: "Emma",
          line: text(["What do you like to drink?"]),
        },
        {
          speaker: "Jake",
          line: text(["I like orange juice and water."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Does Jake like pizza?",
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
          {
            question: "Does Jake like coffee?",
            options: [
              { option: "No", isCorrect: true },
              { option: "Yes", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  languageFocus: {
    meaning: [
      {
        as: "span",
        parts: [audio("/"), "pizza"],
      },
      {
        as: "span",
        parts: [audio("/"), "burger"],
      },
      {
        as: "span",
        parts: [audio("/"), "coffee"],
      },
      {
        as: "span",
        parts: [audio("/"), "juice"],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Food",
          items: [
            { parts: [audio("/"), "pizza"] },
            { parts: [audio("/"), "burger"] },
            { parts: [audio("/"), "salad"] },
            { parts: [audio("/"), "sandwich"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Drinks",
          items: [
            { parts: [audio("/"), "coffee"] },
            { parts: [audio("/"), "water"] },
            { parts: [audio("/"), "juice"] },
            { parts: [audio("/"), "tea"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Grammar",
          items: [
            { parts: [audio("/"), "I like..."] },
            { parts: [audio("/"), "I don't like..."] },
            { parts: [audio("/"), "Do you like...?"] },
            { parts: [audio("/"), "Yes, I do / No, I don't"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: ["Use ", bold("like"), " for preferences."],
      },
      {
        as: "span",
        parts: ["Use ", bold("don't like"), " for negative preferences."],
      },
      {
        as: "span",
        parts: [audio("/"), "I like pizza."],
      },
      {
        as: "span",
        parts: [audio("/"), "I don't like coffee."],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["If I like pizza, do I enjoy pizza?"],
      },
      {
        as: "span",
        parts: ["If I don't like coffee, do I enjoy coffee?"],
      },
      {
        as: "span",
        parts: ["Is 'I don't like tea' positive or negative?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "I _____ pizza.",
            options: [
              { option: "like", isCorrect: true },
              { option: "don't", isCorrect: false },
            ],
          },
          {
            question: "I _____ coffee.",
            options: [
              { option: "don't like", isCorrect: true },
              { option: "like", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "...",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [{ text: "I " }, { blank: "like" }, { text: " pizza." }],
            lineBreak: true,
          },
          {
            block: [
              { text: "I " },
              { blank: "don't like" },
              { text: " coffee." },
            ],
            lineBreak: true,
          },
          {
            block: [{ text: "Do you " }, { blank: "like" }, { text: " tea?" }],
            lineBreak: true,
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
            prompt: "like / pizza / I",
            answer: "I like pizza.",
          },
          {
            prompt: "don't / coffee / like / I",
            answer: "I don't like coffee.",
          },
          {
            prompt: "you / do / like / tea",
            answer: "Do you like tea?",
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
          content: text(["Write five foods you like."]),
        },
        {
          content: text(["Write three foods or drinks you don't like."]),
        },
        {
          content: text([
            "Ask a classmate about their food preferences and report the answers.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
