import { content, audio, bold } from "@/helpers/content";

export const beginnerMyWeek = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "My Week",
    descriptions: [
      "Laura always study on Monday.",
      "Eric sometimes plays soccer on Saturday.",
    ],
  },

  introduction: {
    blocks: [
      {
        type: "lines",
        value: [
      [
        audio("What do you usually do on Saturday?"),
        "What do you usually do on Saturday?",
      ],
    ],
        className: "mb-4",
      },
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
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
      },
      {
        type: "radio",
        ...{
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
      }
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        ...{
      instruction: [
        "Listen once: are Emma and Jake talking about daily or weekly habits?",
      ],
      audioSrc: "",
      lines: [
        {
          speaker: "Emma",
          line: ["What do you usually do on weekends?"],
        },
        {
          speaker: "Jake",
          line: ["I usually play soccer on Saturday."],
        },
        {
          speaker: "Emma",
          line: ["Do you study on Sunday?"],
        },
        {
          speaker: "Jake",
          line: ["No, I never study on Sunday."],
        },
        {
          speaker: "Emma",
          line: ["Do you always go to school on Monday?"],
        },
        {
          speaker: "Jake",
          line: ["Yes, I always go to school on Monday."],
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
      },
      {
        type: "notes",
        value: [
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
    ],
      },
      {
        type: "ccq",
        value: [
      {
        as: "span",
        parts: ["If I always study on Monday, do I study every Monday?"],
        options: [
          { option: "Yes", isCorrect: true },
          { option: "No", isCorrect: false },
        ],
      },
      {
        as: "span",
        parts: ["If I never play tennis, do I play tennis?"],
        options: [
          { option: "No", isCorrect: true },
          { option: "Yes", isCorrect: false },
        ],
      },
      {
        as: "span",
        parts: ["Is 'sometimes' more frequent than 'always'?"],
        options: [
          { option: "No", isCorrect: true },
          { option: "Yes", isCorrect: false },
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
      },
      {
        type: "fillInTheBlanks",
        ...{
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
      }
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Create and present a simple weekly schedule:",
        listType: "checkbox",
        items: [
        {
          content: [
            "Add at least four activities to a weekly schedule. Include days and times.",
          ],
          textarea: true,
        },
        {
          content: [
            "Prepare four short sentences and use at least two frequency expressions.",
          ],
        },
        {
          content: [
            "Present your schedule, then exchange schedules and find one activity, day, and time in your partner's plan.",
          ],
        },
      ],
      }
    ],
  },
};
