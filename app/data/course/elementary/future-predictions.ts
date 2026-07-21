import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio } from "@/helpers/content";

export const elementaryFuturePredictions = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Future Predictions",
    descriptions: ["I will visit Italy one day."],
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/images/a2/unit-3-future-predictions/flying-cars.jpg",
          alt: "A futuristic city with flying cars",
          content: [
            ...content({
              parts: [
                audio("/audio/a2/unit-3-future-predictions/img-1.mp3"),
                "In the future, people will travel in flying cars.",
              ],
            }),
          ],
        },
        {
          src: "/images/a2/unit-3-future-predictions/robot-kitchen.jpg",
          alt: "A robot helping in the kitchen",
          content: [
            ...content({
              parts: [
                audio("/audio/a2/unit-3-future-predictions/img-2.mp3"),
                "Robots will help us cook and clean.",
              ],
            }),
          ],
        },
        {
          src: "/images/a2/unit-3-future-predictions/holo-phone.jpg",
          alt: "A smartphone with a holographic screen",
          content: [
            ...content({
              parts: [
                audio("/audio/a2/unit-3-future-predictions/img-3.mp3"),
                "Phones will be thinner and smarter.",
              ],
            }),
          ],
        },
        {
          src: "/images/a2/unit-3-future-predictions/solar-houses.jpg",
          alt: "Solar panels on every house roof",
          content: [
            ...content({
              parts: [
                audio("/audio/a2/unit-3-future-predictions/img-4.mp3"),
                "Every house will have solar panels.",
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
            question: "Which sentence is a prediction about the future?",
            options: [
              { option: "I ate breakfast at 7 a.m.", isCorrect: false },
              {
                option: "Robots will help us cook and clean.",
                isCorrect: true,
              },
            ],
          },
          {
            question: "Which word do we use to make predictions?",
            options: [
              { option: "did", isCorrect: false },
              { option: "will", isCorrect: true },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      instruction: "Listen to Leo and Mia talking about the future.",
      audioSrc: "/audio/a2/unit-3-future-predictions/dialogue.mp3",
      lines: [
        {
          speaker: "Leo",
          line: text(["What do you think the world will look like in 2050?"]),
        },
        {
          speaker: "Mia",
          line: text(["I think cars will fly. Look at this picture!"]),
        },
        {
          speaker: "Leo",
          line: text([
            "Really? I'm not so sure. I think robots will do most of the jobs.",
          ]),
        },
        {
          speaker: "Mia",
          line: text([
            "Maybe. But if robots do all the jobs, will people have free time?",
          ]),
        },
        {
          speaker: "Leo",
          line: text([
            "Yes, I think so. If we have more free time, we'll travel more.",
          ]),
        },
        {
          speaker: "Mia",
          line: text(["That sounds great! I hope it's true."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "According to Leo, what will robots do in the future?",
            options: [
              { option: "Most of the jobs", isCorrect: true },
              { option: "Nothing", isCorrect: false },
            ],
          },
          {
            question: "What will happen if people have more free time?",
            options: [
              { option: "They'll travel more.", isCorrect: true },
              { option: "They'll work more.", isCorrect: false },
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
        parts: [
          audio("/audio/a2/unit-3-future-predictions/meaning-1.mp3"),
          "We use 'will' + base verb to make predictions about the future.",
        ],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        // Column 1
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Affirmative",
          items: [
            {
              parts: [
                audio("/audio/a2/unit-3-future-predictions/col1-1.mp3"),
                "I will travel to Japan one day.",
              ],
            },
            {
              parts: [
                audio("/audio/a2/unit-3-future-predictions/col1-2.mp3"),
                "She'll study English at university.",
              ],
            },
          ],
        },
        // Column 2
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Negative",
          items: [
            {
              parts: [
                audio("/audio/a2/unit-3-future-predictions/col2-1.mp3"),
                "It won't rain tomorrow.",
              ],
            },
            {
              parts: [
                audio("/audio/a2/unit-3-future-predictions/col2-2.mp3"),
                "We won't be late for the meeting.",
              ],
            },
          ],
        },
        // Column 3
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Question",
          items: [
            {
              parts: [
                audio("/audio/a2/unit-3-future-predictions/col3-1.mp3"),
                "Will you come to the party?",
              ],
            },
            {
              parts: [
                audio("/audio/a2/unit-3-future-predictions/col3-2.mp3"),
                "Will it snow this winter?",
              ],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [
          audio("/audio/a2/unit-3-future-predictions/note-1.mp3"),
          "We use 'will' for predictions based on opinion, and 'going to' for predictions based on evidence we can see now.",
        ],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: [
          "Are we talking about the past, present, or future? (The future.)",
        ],
      },
      {
        as: "span",
        parts: ["Do we know 100% that this prediction will happen? (No.)"],
      },
      {
        as: "span",
        parts: ["Which word do we use to make predictions? ('will')"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "I think people ___ live on Mars in 100 years.",
            options: [
              { option: "will", isCorrect: true },
              { option: "are", isCorrect: false },
            ],
          },
          {
            question: "I don't think cars ___ need gasoline in the future.",
            options: [
              { option: "will", isCorrect: true },
              { option: "do", isCorrect: false },
            ],
          },
          {
            question: "Robots ___ help doctors in hospitals.",
            options: [
              { option: "will", isCorrect: true },
              { option: "were", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the sentences with 'will'.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "I think people " },
              { blank: "will" },
              { text: " travel to Mars one day." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Robots " },
              { blank: "will" },
              { text: " do more jobs in the future." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "I don't think books " },
              { blank: "will" },
              { text: " disappear completely." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Scientists think people " },
              { blank: "will" },
              { text: " live longer in the future." },
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
            prompt: "think / I / cars / will / fly",
            answer: "I think cars will fly.",
          },
          {
            prompt: "robots / help / will / us",
            answer: "Robots will help us.",
          },
          {
            prompt: "people / live / will / longer",
            answer: "People will live longer.",
          },
          {
            prompt: "won't / paper / use / people",
            answer: "People won't use paper.",
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
          content: text([
            "Write three predictions about the world in 2050 using 'will'.",
          ]),
          textarea: true,
        },
        {
          content: text(["Write two predictions about your city in 2050."]),
        },
        {
          content: text([
            "Record a 30-second audio talking about how technology will change your daily life.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
