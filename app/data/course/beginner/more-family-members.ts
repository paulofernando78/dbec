import type { CCQ } from "@/components/content/CCQ";
import type { ListProps } from "@/components/content/List";
import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";

import { audio, bold, portuguese } from "@/helpers/content";

export const beginnerMoreFamilyMembers = {
  whiteboard: {
    title: "A1 Beginner",
    subtitle: "More Family Members",
    descriptions: ["This is my husband, Daniel.", "Sofia is my half-sister."],
  },

  introduction: {
    blocks: [
      {
        type: "line",
        value: ["Think about different kinds of families."],
        className: "font-bold mb-4",
      },
      {
        type: "image",
        src: "/assets/img/course/a1/more-family-members/introduction/extended-family.png",
        alt: "Laura with members of her extended, married, and blended family",
      },
      {
        type: "lines",
        value: [
      [
        audio("Who lives in your home?"),
        "Who lives in your home?",
        portuguese("Quem mora na sua casa?"),
      ],
      [
        audio("Do all families look the same?"),
        "Do all families look the same?",
        portuguese("Todas as famílias são iguais?"),
      ],
    ],
        className: "mb-4",
      },
      {
        type: "radio",
        ...{
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Your brother’s son is your:",
            options: [
              { option: "nephew", isCorrect: true },
              { option: "husband", isCorrect: false },
            ],
          },
          {
            question: "Your wife’s parents are your:",
            options: [
              { option: "in-laws", isCorrect: true },
              { option: "siblings", isCorrect: false },
            ],
          },
        ],
      },
    },
      }
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        ...{
      instruction:
        "Listen once: is Laura describing a small immediate family or a larger extended family?",
      audioSrc: "",
      lines: [
        {
          speaker: "Laura",
          line: ["Liz, this is another photo of my family."],
        },
        {
          speaker: "Liz",
          line: ["Who are they?"],
        },
        {
          speaker: "Laura",
          line: [
            "This is my sister Kate and her husband, Daniel. They have a son and a daughter.",
          ],
        },
        {
          speaker: "Liz",
          line: [
            "So their son is your nephew and their daughter is your niece.",
          ],
        },
        {
          speaker: "Laura",
          line: ["That’s right. My sister’s in-laws are in the photo too."],
        },
        {
          speaker: "Liz",
          line: ["And who’s the man next to your mother?"],
        },
        {
          speaker: "Laura",
          line: [
            "He’s my stepfather. The boy next to him is my half-brother, Lucas.",
          ],
        },
        {
          speaker: "Liz",
          line: ["You have a big family!"],
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
            question: "Daniel is Kate’s:",
            options: [
              { option: "husband", isCorrect: true },
              { option: "son", isCorrect: false },
            ],
          },
          {
            question: "Lucas is Laura’s:",
            options: [
              { option: "half-brother", isCorrect: true },
              { option: "nephew", isCorrect: false },
            ],
          },
          {
            question: "Kate’s daughter is Laura’s:",
            options: [
              { option: "niece", isCorrect: true },
              { option: "wife", isCorrect: false },
            ],
          },
        ],
      },
    },
      }
    ],
  },

  languageFocus: {
    blocks: [
      {
        type: "meaning",
        value: [
      {
        as: "span",
        parts: [
          bold(
            "Family words describe relationships, not one fixed family structure.",
          ),
        ],
      },
      {
        as: "span",
        parts: [
          "Use ",
          bold("person + ’s + family member"),
          " to show a relationship: ",
          bold("Kate’s husband"),
          ".",
        ],
      },
    ],
      },
      {
        type: "column",
        ...{
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Possessive ’s",
          items: [
            {
              parts: [
                audio("Kate’s husband"),
                "Kate’s husband ",
                portuguese("o marido da Kate"),
              ],
            },
            {
              parts: [
                audio("Laura’s nephew"),
                "Laura’s nephew ",
                portuguese("o sobrinho da Laura"),
              ],
            },
            {
              parts: [
                audio("my sister’s in-laws"),
                "my sister’s in-laws ",
                portuguese("os sogros da minha irmã"),
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Describe the relationship",
          items: [
            {
              parts: [
                audio("Daniel is Kate’s husband."),
                "Daniel is Kate’s husband. ",
                portuguese("Daniel é o marido da Kate."),
              ],
            },
            {
              parts: [
                audio("The boy is Laura’s nephew."),
                "The boy is Laura’s nephew. ",
                portuguese("O menino é sobrinho da Laura."),
              ],
            },
          ],
        },
      ],
    },
      },
      {
        type: "column",
        ...{
      width: 250,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Couple",
          items: [
            {
              parts: [audio("husband"), "husband ", portuguese("marido")],
            },
            {
              parts: [audio("wife"), "wife ", portuguese("esposa")],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Children",
          items: [
            { parts: [audio("son"), "son ", portuguese("filho")] },
            { parts: [audio("daughter"), "daughter ", portuguese("filha")] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Extended family",
          items: [
            {
              parts: [audio("nephew"), "nephew ", portuguese("sobrinho")],
            },
            { parts: [audio("niece"), "niece ", portuguese("sobrinha")] },
            {
              parts: [
                audio("in-laws"),
                "in-laws ",
                portuguese("parentes por casamento, sogros"),
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Blended family",
          items: [
            {
              parts: [
                audio("stepfather"),
                "stepfather ",
                portuguese("padrasto"),
              ],
            },
            {
              parts: [
                audio("half-brother"),
                "half-brother ",
                portuguese("meio-irmão"),
              ],
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
          bold("in-laws"),
          " is a general term. ",
          bold("mother-in-law"),
          " means sogra and ",
          bold("father-in-law"),
          " means sogro.",
        ],
      },
      {
        as: "span",
        parts: [
          bold("stepfather"),
          " and ",
          bold("half-brother"),
          " describe different relationships: a half-brother shares one biological parent.",
        ],
      },
      {
        as: "span",
        parts: [
          "When speaking about families, use the words people choose for their own relationships.",
        ],
      },
      {
        as: "span",
        parts: [
          audio("Kate’s husband. Laura’s nephew."),
          "The possessive ending is pronounced /s/ after the final sound in ",
          bold("Kate’s"),
          " and /z/ in ",
          bold("Laura’s"),
          ".",
        ],
      },
    ],
      },
      {
        type: "ccq",
        value: [
      {
        as: "span",
        parts: ["Is your sister’s daughter your niece or your wife?"],
        options: [
          { option: "Your niece", isCorrect: true },
          { option: "Your wife", isCorrect: false },
        ],
      },
      {
        as: "span",
        parts: ["Does a half-brother share one parent or no parents with you?"],
        options: [
          { option: "One parent", isCorrect: true },
          { option: "No parents", isCorrect: false },
        ],
      },
      {
        as: "span",
        parts: ["Is your spouse’s father your father-in-law?"],
        options: [
          { option: "Yes", isCorrect: true },
          { option: "No", isCorrect: false },
        ],
      },
    ],
      }
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
      instruction: "Choose the correct family word.",
      exercise: {
        questions: [
          {
            question: "My sister has a son. He is my ____.",
            options: [
              { option: "nephew", isCorrect: true },
              { option: "stepfather", isCorrect: false },
            ],
          },
          {
            question: "Ana and Leo are married. Leo is Ana’s ____.",
            options: [
              { option: "husband", isCorrect: true },
              { option: "half-brother", isCorrect: false },
            ],
          },
          {
            question: "My mother’s new husband is my ____.",
            options: [
              { option: "stepfather", isCorrect: true },
              { option: "son", isCorrect: false },
            ],
          },
          {
            question: "My brother has a daughter. She is my ____.",
            options: [
              { option: "niece", isCorrect: true },
              { option: "wife", isCorrect: false },
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
      instruction: "Complete the sentences with the correct family word.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "Paula is married to Ben. She is his " },
              { blank: "wife" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Their male child is their " },
              { blank: "son" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Their female child is their " },
              { blank: "daughter" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Ben’s parents are Paula’s " },
              { blank: "in-laws" },
              { text: "." },
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
            prompt: "nephew / is / my / he",
            answer: "He is my nephew.",
          },
          {
            prompt: "daughter / their / is / Mia",
            answer: "Mia is their daughter.",
          },
          {
            prompt: "half-brother / Lucas / Laura’s / is",
            answer: "Lucas is Laura’s half-brother.",
          },
        ],
      },
    },
      }
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Create a fictional family tree:",
        listType: "checkbox",
        items: [
        {
          content: ["Add at least six people to the family tree."],
        },
        {
          content: [
            "Use at least four new words from this lesson to describe their relationships.",
          ],
          textarea: true,
        },
        {
          content: [
            "Include one sentence with a possessive adjective and one with possessive ’s.",
          ],
        },
        {
          content: [
            "Exchange family trees with a partner and ask two questions about the relationships.",
          ],
        },
      ],
      }
    ],
  },
};
