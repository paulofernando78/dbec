export const advancedPrecisionAndNuance = {
  slug: "precision-and-nuance",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Precision and Nuance",
    descriptions: [
      "Choose language that matches the strength of the evidence.",
      "Express attitude without turning possibility into certainty.",
    ],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to express fine shades of certainty and attitude by selecting precise hedging, emphasis, and qualification devices.",
    grammar: "Modality and qualification",
    vocabulary: "Degrees of certainty",
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Place the statements on a scale from tentative to highly confident.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: ["The change might have contributed to the decline."],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: ["The change is likely to have contributed to the decline."],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: ["The change almost certainly contributed to the decline."],
        },
      ],
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: [
          {
            question: "Which statement expresses the weakest certainty?",
            options: [
              { option: "might have contributed", isCorrect: true },
              { option: "is likely to have contributed", isCorrect: false },
              { option: "almost certainly contributed", isCorrect: false },
            ],
          },
          {
            question: "Does 'almost certainly' mean absolute certainty?",
            options: [
              { option: "Yes", isCorrect: false },
              { option: "No", isCorrect: true },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction: "Researchers calibrate the language of a preliminary finding.",
      audioSrc: "",
      lines: [
        {
          speaker: "Aisha",
          line: ["The intervention caused the improvement."],
        },
        {
          speaker: "Ben",
          line: [
            "That is stronger than the design allows. Other variables were not fully controlled.",
          ],
        },
        {
          speaker: "Aisha",
          line: [
            "Then perhaps: the intervention appears to have contributed to the improvement.",
          ],
        },
        {
          speaker: "Ben",
          line: [
            "Yes. That reflects the positive pattern without presenting correlation as proof.",
          ],
        },
      ],
    },
    radio: {
      instruction:
        "Read or listen again. Choose the interpretation best supported by the text.",
      exercise: {
        questions: [
          {
            question: "Why is Aisha's first claim too strong?",
            options: [
              {
                option: "The study did not control every relevant variable.",
                isCorrect: true,
              },
              { option: "The sentence is too short.", isCorrect: false },
              { option: "No improvement occurred.", isCorrect: false },
            ],
          },
          {
            question: "What relationship does the revised wording express?",
            options: [
              { option: "A possible contribution", isCorrect: true },
              { option: "Certain exclusive causation", isCorrect: false },
              { option: "No relationship", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  languageFocus: {
    meaning: [
      {
        as: "p",
        parts: [
          "Precision means matching wording to evidence, purpose, and intended strength—not always choosing the strongest expression.",
        ],
      },
      {
        as: "p",
        parts: [
          "C1 users can qualify claims and distinguish possibility, probability, strong confidence, and certainty.",
        ],
      },
    ],
    column: {
      width: 310,
      cols: [
        {
          borderColor: "border-blue-800",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Tentative",
          items: [
            { parts: ["might"], lineBreak: true },
            { parts: ["could conceivably"], lineBreak: true },
            { parts: ["appears to"], lineBreak: true },
            { parts: ["cannot be ruled out"], lineBreak: true },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Probable",
          items: [
            { parts: ["is likely to"], lineBreak: true },
            { parts: ["probably"], lineBreak: true },
            { parts: ["there is good reason to believe"], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Strong but qualified",
          items: [
            { parts: ["almost certainly"], lineBreak: true },
            { parts: ["strongly suggests"], lineBreak: true },
            { parts: ["in all likelihood"], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Hedging is not weakness when uncertainty is genuine; it is a form of accuracy.",
        ],
      },
      {
        as: "p",
        parts: [
          "Boosters such as 'clearly' or 'undoubtedly' need evidence and can sound manipulative when overused.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: [
          "Should every claim in an academic discussion sound certain? (No.)",
        ],
      },
      {
        as: "p",
        parts: [
          "Can 'strongly suggests' still allow another explanation? (Yes.)",
        ],
      },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the most precise and context-appropriate option.",
      exercise: {
        questions: [
          {
            question: "Which claim best fits limited preliminary evidence?",
            options: [
              {
                option: "The treatment cures the condition.",
                isCorrect: false,
              },
              {
                option:
                  "The early results suggest that the treatment may reduce symptoms.",
                isCorrect: true,
              },
              {
                option: "The treatment undoubtedly works for everyone.",
                isCorrect: false,
              },
            ],
          },
          {
            question:
              "Which expression signals strong confidence without absolute certainty?",
            options: [
              { option: "possibly", isCorrect: false },
              { option: "almost certainly", isCorrect: true },
              { option: "maybe", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction:
        "Choose a degree of certainty that matches the evidence described.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "The preliminary pattern " },
              { blank: "appears to" },
              { text: " support the hypothesis." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The decline was " },
              { blank: "likely to have been" },
              { text: " influenced by several factors." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The new evidence " },
              { blank: "strongly suggests" },
              { text: " that the earlier estimate was too low." },
            ],
            lineBreak: true,
          },
        ],
      },
    },
    scramble: {
      showWordBank: false,
      instruction:
        "Reconstruct each sentence so that the relationship between ideas is clear.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt:
              "have contributed / appears / the change / to / the decline / to",
            answer: "The change appears to have contributed to the decline.",
          },
          {
            prompt: "another explanation / cannot / ruled out / be",
            answer: "Another explanation cannot be ruled out.",
          },
        ],
      },
    },
  },
  production: {
    task: {
      instruction:
        "Complete the C1 performance tasks. Support interpretations and claims with specific evidence.",
      type: "checkbox",
      items: [
        {
          content: [
            "Create a certainty scale for eight expressions and explain one important distinction between adjacent items.",
          ],
          textarea: true,
        },
        {
          content: [
            "Revise five overconfident claims so that each matches the evidence provided.",
          ],
          textarea: true,
        },
        {
          content: [
            "Defend one wording choice by explaining why a stronger or weaker alternative would be misleading.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
