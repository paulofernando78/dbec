import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";
const href = "/courses/beginner/my-week";
const data = courseLessonsCardData.beginner.find(
  (lesson) => lesson.href === href,
)!;

export const beginnerMyWeek = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "My Week",
    descriptions: [
      "I always study on Monday.",
      "She sometimes plays soccer on Saturday.",
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
          alt: "Monday",
          content: [
            ...content({
              parts: ["I study English on Monday."],
            }),
          ],
        },
        {
          alt: "Wednesday",
          content: [
            ...content({
              parts: ["I go to the gym on Wednesday."],
            }),
          ],
        },
        {
          alt: "Saturday",
          content: [
            ...content({
              parts: ["I play soccer on Saturday."],
            }),
          ],
        },
        {
          alt: "Sunday",
          content: [
            ...content({
              parts: ["I relax on Sunday."],
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
            question: "Which day comes after Monday?",
            options: [
              { option: "Tuesday", isCorrect: true },
              { option: "Sunday", isCorrect: false },
            ],
          },
          {
            question: "Which day is usually part of the weekend?",
            options: [
              { option: "Saturday", isCorrect: true },
              { option: "Wednesday", isCorrect: false },
            ],
          },
          {
            question: "How many days are there in a week?",
            options: [
              { option: "7", isCorrect: true },
              { option: "5", isCorrect: false },
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
          line: text(["What do you usually do on weekends?"]),
        },
        {
          speaker: "Jake",
          line: text(["I usually play soccer on Saturday."]),
        },
        {
          speaker: "Emma",
          line: text(["Do you study on Sunday?"]),
        },
        {
          speaker: "Jake",
          line: text(["No, I never study on Sunday."]),
        },
        {
          speaker: "Emma",
          line: text(["Do you always go to school on Monday?"]),
        },
        {
          speaker: "Jake",
          line: text(["Yes, I always go to school on Monday."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What does Jake usually do on Saturday?",
            options: [
              { option: "Play soccer", isCorrect: true },
              { option: "Study", isCorrect: false },
            ],
          },
          {
            question: "Does Jake study on Sunday?",
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
        parts: ["always"],
      },
      {
        as: "span",
        parts: ["usually"],
      },
      {
        as: "span",
        parts: ["sometimes"],
      },
      {
        as: "span",
        parts: ["never"],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Frequency",
          items: [
            { parts: ["always"] },
            { parts: ["usually"] },
            { parts: ["sometimes"] },
            { parts: ["never"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Days",
          items: [
            { parts: ["Monday"] },
            { parts: ["Tuesday"] },
            { parts: ["Wednesday"] },
            { parts: ["Thursday"] },
            { parts: ["Friday"] },
            { parts: ["Saturday"] },
            { parts: ["Sunday"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Months",
          items: [
            { parts: ["January"] },
            { parts: ["February"] },
            { parts: ["March"] },
            { parts: ["April"] },
            { parts: ["May"] },
            { parts: ["June"] },
            { parts: ["July"] },
            { parts: ["August"] },
            { parts: ["September"] },
            { parts: ["October"] },
            { parts: ["November"] },
            { parts: ["December"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [bold("always"), " = 100%"],
      },
      {
        as: "span",
        parts: [bold("usually"), " = most of the time"],
      },
      {
        as: "span",
        parts: [bold("sometimes"), " = occasionally"],
      },
      {
        as: "span",
        parts: [bold("never"), " = 0%"],
      },
      {
        as: "span",
        parts: ["Put the adverb before a main verb: ", bold("I always study.")],
      },
      {
        as: "span",
        parts: [
          "Put the adverb after the verb to be: ",
          bold("She is sometimes late."),
        ],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["If I always study on Monday, do I study every Monday?"],
      },
      {
        as: "span",
        parts: ["If I never play tennis, do I play tennis?"],
      },
      {
        as: "span",
        parts: ["Is 'sometimes' more frequent than 'always'?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "I _____ go to school on Monday.",
            options: [
              { option: "always", isCorrect: true },
              { option: "never", isCorrect: false },
            ],
          },
          {
            question: "She _____ plays soccer. Maybe once or twice a month.",
            options: [
              { option: "sometimes", isCorrect: true },
              { option: "always", isCorrect: false },
            ],
          },
          {
            question: "She is _____ late, but not every day.",
            options: [
              { option: "sometimes", isCorrect: true },
              { option: "always", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Fill in the blank with the correct adverb of frequency.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "I " },
              { blank: "always" },
              { text: " study English on Monday." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "She " },
              { blank: "sometimes" },
              { text: " goes to the gym." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "They " },
              { blank: "never" },
              { text: " work on Sunday." },
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
            prompt: "always / Monday / on / study / I",
            answer: "I always study on Monday.",
          },
          {
            prompt: "soccer / sometimes / plays / she",
            answer: "She sometimes plays soccer.",
          },
          {
            prompt: "never / on / work / Sunday / they",
            answer: "They never work on Sunday.",
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
            "Write five sentences about your week using adverbs of frequency.",
          ]),
        },
        {
          content: text([
            "Talk about what you do on different days of the week.",
          ]),
        },
        {
          content: text(["Describe your favorite month and explain why."]),
        },
      ],
    } satisfies ListProps,
  },
};
