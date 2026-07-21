export const advancedMediationAndClarification = {
  slug: "mediation-and-clarification",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Mediation and Clarification",
    descriptions: [
      "Make complex information accessible without making it inaccurate.",
      "Notice and repair misunderstandings collaboratively.",
    ],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to explain a complex idea to a non-specialist, clarify a misunderstanding, and reformulate information without distorting it.",
    grammar: "Reformulation structures",
    vocabulary: "Explanation and clarification",
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Compare technical information with accurate, audience-friendly reformulations.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Technical: Correlation does not establish a causal mechanism.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Accessible: Two things changing together does not prove that one caused the other.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Oversimplified: Correlation means the two things are unrelated.",
          ],
        },
      ],
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: [
          {
            question: "Which reformulation preserves the original distinction?",
            options: [
              { option: "The accessible version", isCorrect: true },
              { option: "The oversimplified version", isCorrect: false },
              { option: "Neither version", isCorrect: false },
            ],
          },
          {
            question: "What is wrong with the oversimplified version?",
            options: [
              {
                option: "It denies that a relationship may exist.",
                isCorrect: true,
              },
              { option: "It uses too many examples.", isCorrect: false },
              { option: "It is too cautious.", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction:
        "A data specialist explains a finding to a community representative.",
      audioSrc: "",
      lines: [
        {
          speaker: "Specialist",
          line: [
            "The model predicts an average reduction, but the confidence interval is relatively wide.",
          ],
        },
        {
          speaker: "Representative",
          line: [
            "So you are saying the programme definitely works, but you do not know by how much?",
          ],
        },
        {
          speaker: "Specialist",
          line: [
            "Not quite. The data points toward a benefit, but the uncertainty means we cannot yet be certain that the effect is real in every setting.",
          ],
        },
        {
          speaker: "Representative",
          line: [
            "In other words, there is a promising signal, but we need more evidence before making a broad claim.",
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
            question: "What misunderstanding does the specialist correct?",
            options: [
              {
                option: "That the result proves the programme always works",
                isCorrect: true,
              },
              { option: "That the study contains data", isCorrect: false },
              { option: "That the programme has a name", isCorrect: false },
            ],
          },
          {
            question:
              "Why is the representative's final reformulation effective?",
            options: [
              { option: "It removes all uncertainty.", isCorrect: false },
              {
                option:
                  "It preserves both the positive signal and the limitation.",
                isCorrect: true,
              },
              { option: "It adds a new statistic.", isCorrect: false },
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
          "Mediation transforms access to information, not the truth conditions of the information itself.",
        ],
      },
      {
        as: "p",
        parts: [
          "Clarification checks the source of a misunderstanding and reformulates the relevant distinction.",
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
          column: "Reformulate",
          items: [
            { parts: ["In other words..."], lineBreak: true },
            { parts: ["Put more simply..."], lineBreak: true },
            { parts: ["What this means in practice is..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Clarify",
          items: [
            { parts: ["Not quite..."], lineBreak: true },
            { parts: ["The distinction is..."], lineBreak: true },
            { parts: ["What I mean is not X, but Y."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Check",
          items: [
            { parts: ["Does that distinction make sense?"], lineBreak: true },
            { parts: ["Would an example help?"], lineBreak: true },
            { parts: ["How would you restate that?"], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Replace unnecessary terminology, but retain essential distinctions, conditions, and uncertainty.",
        ],
      },
      {
        as: "p",
        parts: [
          "Examples and analogies should illuminate the concept without becoming false equivalents.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: ["Can a simpler explanation still be precise? (Yes.)"],
      },
      {
        as: "p",
        parts: [
          "Should mediation remove inconvenient limitations from the source? (No.)",
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
            question:
              "Which is the most accurate plain-language version of 'The evidence is inconclusive'?",
            options: [
              { option: "The claim is false.", isCorrect: false },
              {
                option:
                  "The available evidence does not yet support a firm conclusion.",
                isCorrect: true,
              },
              { option: "There is no evidence at all.", isCorrect: false },
            ],
          },
          {
            question: "Which question best checks understanding?",
            options: [
              { option: "You understand, right?", isCorrect: false },
              {
                option:
                  "How would you explain the difference between a signal and proof?",
                isCorrect: true,
              },
              { option: "Why were you confused?", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the clarification or reformulation.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "" },
              { blank: "In other words" },
              { text: ", the pattern is promising but not conclusive." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "" },
              { blank: "Not quite" },
              {
                text: "; the data suggests a benefit rather than proving one.",
              },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "What this means " },
              { blank: "in practice" },
              { text: " is that further testing is needed." },
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
            prompt: "does not / that / one / caused / prove / the other / it",
            answer: "It does not prove that one caused the other.",
          },
          {
            prompt: "distinction / sense / does / that / make",
            answer: "Does that distinction make sense?",
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
            "Explain a technical concept from your field to a non-specialist in 100 words without losing its main limitation.",
          ],
          textarea: true,
        },
        {
          content: [
            "Ask a partner to restate the concept, identify one misunderstanding, and clarify it collaboratively.",
          ],
          textarea: true,
        },
        {
          content: [
            "Create an analogy and then state where the analogy stops being accurate.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
