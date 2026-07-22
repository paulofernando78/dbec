import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

export const beginnerFoodAndDrinks = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "Food and Drinks",
    descriptions: ["I like pizza.", "I don't like coffee."],
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          alt: "Pizza",
          content: [
            ...content({
              parts: ["I like pizza."],
            }),
          ],
        },
        {
          alt: "Coffee",
          content: [
            ...content({
              parts: ["I don't like coffee."],
            }),
          ],
        },
        {
          alt: "Juice",
          content: [
            ...content({
              parts: ["I like orange juice."],
            }),
          ],
        },
        {
          alt: "Salad",
          content: [
            ...content({
              parts: ["I like salad."],
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
      instruction: "Listen to the dialogue.",
      audioSrc: "",
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
        {
          speaker: "Server",
          line: text(["Hello. Can I help you?"]),
        },
        {
          speaker: "Jake",
          line: text(["Can I have an orange juice, please?"]),
        },
        {
          speaker: "Server",
          line: text(["Here you are."]),
        },
        {
          speaker: "Jake",
          line: text(["Thank you."]),
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
          {
            question: "What does Jake order?",
            options: [
              { option: "An orange juice", isCorrect: true },
              { option: "A coffee", isCorrect: false },
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
        parts: ["pizza"],
      },
      {
        as: "span",
        parts: ["burger"],
      },
      {
        as: "span",
        parts: ["coffee"],
      },
      {
        as: "span",
        parts: ["juice"],
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
            { parts: ["pizza"] },
            { parts: ["burger"] },
            { parts: ["salad"] },
            { parts: ["sandwich"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Drinks",
          items: [
            { parts: ["coffee"] },
            { parts: ["water"] },
            { parts: ["juice"] },
            { parts: ["tea"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Grammar",
          items: [
            { parts: ["I like..."] },
            { parts: ["I don't like..."] },
            { parts: ["Do you like...?"] },
            { parts: ["Yes, I do / No, I don't"] },
          ],
        },
        {
          borderColor: "border-amber-700",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "At a café",
          items: [
            { parts: ["Can I have..., please?"] },
            { parts: ["Here you are."] },
            { parts: ["Thank you."] },
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
        parts: ["I like pizza."],
      },
      {
        as: "span",
        parts: ["I don't like coffee."],
      },
      {
        as: "span",
        parts: [
          "Use ",
          bold("Can I have..., please?"),
          " to order one item politely.",
        ],
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
      {
        as: "span",
        parts: [
          "Does “Can I have water, please?” ask for an item or express a preference?",
        ],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: 'Complete: "Pizza is my favorite food. I _____ pizza."',
            options: [
              { option: "like", isCorrect: true },
              { option: "don't like", isCorrect: false },
            ],
          },
          {
            question: 'Complete: "Coffee is not for me. I _____ coffee."',
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
      instruction: "Complete the sentences with like or don't like.",
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
          {
            prompt: "have / can / water / I / please",
            answer: "Can I have water, please?",
          },
        ],
      },
    },
  },

  production: {
    task: {
      instruction: "Complete a preference survey and a café role-play:",
      type: "checkbox",
      items: [
        {
          content: text([
            "Ask a partner two “Do you like…?” questions and record the answers.",
          ]),
          textarea: true,
        },
        {
          content: text([
            "Report two preferences using “likes” or “doesn’t like”.",
          ]),
        },
        {
          content: text([
            "Role-play a short café exchange: order one item, use “please”, and say “thank you”.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
