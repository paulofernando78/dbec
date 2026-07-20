import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";
const href = "/courses/elementary/travel-plans";
const data = courseLessonsCardData.elementary.find(
  (lesson) => lesson.href === href,
)!;

export const elementaryTravelPlans = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Travel Plans",
    descriptions: [
      "I'm going to visit Rio next month.",
      "We're going to stay in a hotel near the beach.",
    ],
  },

  lessonCard: {
    lessonObjective: data.lessonObjective,
    grammar: data.grammar,
    vocabulary: data.vocabulary,
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "Packing a suitcase",
          content: [
            ...content({
              parts: [
                audio("/"),
                "Emma is going to pack her suitcase tonight.",
              ],
            }),
          ],
        },
        {
          src: "/",
          alt: "Airport",
          content: [
            ...content({
              parts: [audio("/"), "Jake is going to fly to Recife on Friday."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Hotel near the beach",
          content: [
            ...content({
              parts: [
                audio("/"),
                "They are going to stay in a hotel near the beach.",
              ],
            }),
          ],
        },
        {
          src: "/",
          alt: "Museum visit",
          content: [
            ...content({
              parts: [
                audio("/"),
                "They are going to visit a museum on Saturday.",
              ],
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
            question: "What is Emma going to pack?",
            options: [
              { option: "Her suitcase", isCorrect: true },
              { option: "Her bicycle", isCorrect: false },
            ],
          },
          {
            question: "Where are they going to stay?",
            options: [
              { option: "In a hotel", isCorrect: true },
              { option: "At school", isCorrect: false },
            ],
          },
          {
            question: "When are they going to visit a museum?",
            options: [
              { option: "On Saturday", isCorrect: true },
              { option: "Yesterday", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      prompt:
        "Emma and Jake are talking about their travel plans. Listen and read.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Emma",
          line: text(["Are you going to travel next month?"]),
        },
        {
          speaker: "Jake",
          line: text(["Yes, I am. I'm going to visit Recife with my family."]),
        },
        {
          speaker: "Emma",
          line: text(["That sounds great. Where are you going to stay?"]),
        },
        {
          speaker: "Jake",
          line: text(["We're going to stay in a hotel near the beach."]),
        },
        {
          speaker: "Emma",
          line: text(["What are you going to do there?"]),
        },
        {
          speaker: "Jake",
          line: text([
            "We're going to swim, visit a museum, and try local food.",
          ]),
        },
        {
          speaker: "Emma",
          line: text(["Are you going to take many pictures?"]),
        },
        {
          speaker: "Jake",
          line: text(["Of course. I'm going to take pictures every day."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Where is Jake going to travel?",
            options: [
              { option: "Recife", isCorrect: true },
              { option: "Canada", isCorrect: false },
            ],
          },
          {
            question: "Who is Jake going to travel with?",
            options: [
              { option: "His family", isCorrect: true },
              { option: "His teacher", isCorrect: false },
            ],
          },
          {
            question: "What is Jake going to take every day?",
            options: [
              { option: "Pictures", isCorrect: true },
              { option: "Classes", isCorrect: false },
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
        parts: [audio("/"), "travel"],
      },
      {
        as: "span",
        parts: [audio("/"), "pack a suitcase"],
      },
      {
        as: "span",
        parts: [audio("/"), "book a hotel"],
      },
      {
        as: "span",
        parts: [audio("/"), "visit a museum"],
      },
      {
        as: "span",
        parts: [audio("/"), "try local food"],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Going to: Plans",
          items: [
            {
              parts: [bold("Q:"), " What are you going to do?"],
            },
            {
              parts: [bold("A:"), " I'm going to visit Recife."],
            },
            {
              parts: [bold("A:"), " We're going to stay in a hotel."],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Travel Vocabulary",
          items: [
            {
              parts: [audio("/"), "pack a suitcase"],
            },
            {
              parts: [audio("/"), "book a flight"],
            },
            {
              parts: [audio("/"), "stay in a hotel"],
            },
            {
              parts: [audio("/"), "visit a museum"],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Time Expressions",
          items: [
            {
              parts: [audio("/"), "next month"],
            },
            {
              parts: [audio("/"), "on Friday"],
            },
            {
              parts: [audio("/"), "this weekend"],
            },
            {
              parts: [audio("/"), "tomorrow morning"],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [
          bold("be going to"),
          " + base verb is used for future plans and intentions.",
        ],
      },
      {
        as: "span",
        parts: [
          "Use ",
          bold("am / is / are"),
          " before going to: I am going to travel. She is going to pack.",
        ],
      },
      {
        as: "span",
        parts: [
          "Use future time expressions such as ",
          bold("tomorrow"),
          ", ",
          bold("next week"),
          " and ",
          bold("next month"),
          ".",
        ],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: [
          "Is 'I'm going to travel next month' about the past or the future?",
        ],
      },
      {
        as: "span",
        parts: ["In 'She is going to pack', do we need 'is'?"],
      },
      {
        as: "span",
        parts: ["After 'going to', do we use the base verb?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "I _____ visit my cousins next week.",
            options: [
              { option: "am going to", isCorrect: true },
              { option: "went to", isCorrect: false },
            ],
          },
          {
            question: "She is going to _____ a hotel.",
            options: [
              { option: "book", isCorrect: true },
              { option: "booked", isCorrect: false },
            ],
          },
          {
            question: "They _____ going to take pictures.",
            options: [
              { option: "are", isCorrect: true },
              { option: "is", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Fill in the blanks with the correct words.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "I " },
              { blank: "am" },
              { text: " going to travel next month." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "She is going to " },
              { blank: "pack" },
              { text: " her suitcase tonight." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "We are going to " },
              { blank: "stay" },
              { text: " in a hotel." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "They are going to " },
              { blank: "visit" },
              { text: " a museum." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Jake is going to take " },
              { blank: "pictures" },
              { text: " every day." },
            ],
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
            prompt: "going to / I / travel / am / next month",
            answer: "I am going to travel next month.",
          },
          {
            prompt: "stay / We / going to / are / in a hotel",
            answer: "We are going to stay in a hotel.",
          },
          {
            prompt: "she / pack / is going to / her suitcase",
            answer: "She is going to pack her suitcase.",
          },
          {
            prompt: "What / you / are / going to do",
            answer: "What are you going to do?",
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
          content: text(["Plan a short trip for next weekend."]),
          textarea: true,
        },
        {
          content: text(["Write four sentences with going to."]),
          textarea: true,
        },
        {
          content: text(["Ask your partner about their travel plans."]),
        },
      ],
    } satisfies ListProps,
  },
};
