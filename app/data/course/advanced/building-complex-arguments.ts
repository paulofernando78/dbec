export const advancedBuildingComplexArguments = {
  slug: "building-complex-arguments",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Building Complex Arguments",
    descriptions: [
      "A strong position acknowledges complexity.",
      "Claims need reasons, evidence, counterarguments, and proportionate conclusions.",
    ],
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Identify the claim, concession, and response in each argument.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Although a four-day week may complicate scheduling, the evidence on retention makes a trial worthwhile.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Admittedly, public transport requires investment; nevertheless, the long-term social benefits are substantial.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "The objection is valid in the short term, but it overlooks the cost of doing nothing.",
          ],
        },
      ],
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: [
          {
            question: "What is the function of 'Admittedly'?",
            options: [
              { option: "It introduces a concession.", isCorrect: true },
              { option: "It gives a final conclusion.", isCorrect: false },
              { option: "It changes the topic completely.", isCorrect: false },
            ],
          },
          {
            question: "What does the final statement criticize?",
            options: [
              { option: "The objection contains no truth.", isCorrect: false },
              {
                option: "The objection considers only one time frame.",
                isCorrect: true,
              },
              { option: "The cost of action is unknown.", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction:
        "Nora and Victor prepare opposing positions for a formal discussion.",
      audioSrc: "",
      lines: [
        {
          speaker: "Nora",
          line: [
            "I support restricting cars in city centres because pollution and pedestrian safety affect everyone.",
          ],
        },
        {
          speaker: "Victor",
          line: [
            "That is persuasive, but businesses may argue that reduced access will drive customers away.",
          ],
        },
        {
          speaker: "Nora",
          line: [
            "That concern deserves attention. However, phased restrictions and delivery exemptions could reduce the disruption.",
          ],
        },
        {
          speaker: "Victor",
          line: [
            "Then your position is not simply 'ban cars'; it is a managed transition with safeguards.",
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
            question: "How does Nora respond to the business objection?",
            options: [
              { option: "She ignores it.", isCorrect: false },
              {
                option: "She acknowledges it and proposes safeguards.",
                isCorrect: true,
              },
              { option: "She abandons her position.", isCorrect: false },
            ],
          },
          {
            question: "How does Victor reformulate Nora's position?",
            options: [
              { option: "As an immediate total ban", isCorrect: false },
              { option: "As a managed transition", isCorrect: true },
              { option: "As unrestricted car access", isCorrect: false },
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
          "A C1 argument develops a clear line of reasoning while recognizing relevant limitations and alternatives.",
        ],
      },
      {
        as: "p",
        parts: [
          "Conceding a valid point can strengthen an argument when the speaker explains why the central claim still stands.",
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
          column: "Concede",
          items: [
            { parts: ["Admittedly..."], lineBreak: true },
            { parts: ["While this concern is valid..."], lineBreak: true },
            { parts: ["It is true that..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Rebut or qualify",
          items: [
            { parts: ["Nevertheless..."], lineBreak: true },
            { parts: ["This overlooks..."], lineBreak: true },
            { parts: ["That does not necessarily mean..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Support",
          items: [
            { parts: ["A relevant example is..."], lineBreak: true },
            { parts: ["This is significant because..."], lineBreak: true },
            { parts: ["The strongest evidence is..."], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "A counterargument should be represented fairly before it is answered.",
        ],
      },
      {
        as: "p",
        parts: [
          "Avoid absolute conclusions when the evidence supports only a limited or conditional claim.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: [
          "Does acknowledging a limitation automatically weaken a position? (No.)",
        ],
      },
      {
        as: "p",
        parts: [
          "Should a rebuttal answer the actual objection rather than a weaker version? (Yes.)",
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
              "Which response addresses the counterargument most effectively?",
            options: [
              { option: "That argument is ridiculous.", isCorrect: false },
              {
                option:
                  "The cost concern is legitimate; however, it excludes the measurable cost of delay.",
                isCorrect: true,
              },
              { option: "Everyone agrees with my position.", isCorrect: false },
            ],
          },
          {
            question: "Which conclusion is appropriately qualified?",
            options: [
              {
                option: "This policy will solve every problem.",
                isCorrect: false,
              },
              {
                option:
                  "This policy is likely to reduce the problem if enforcement is consistent.",
                isCorrect: true,
              },
              { option: "No other policy could work.", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction:
        "Complete the argumentative sequence with a concession or rebuttal marker.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "" },
              { blank: "Admittedly" },
              { text: ", implementation would be expensive." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "" },
              { blank: "Nevertheless" },
              { text: ", the long-term savings justify a limited trial." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The objection is relevant, but it " },
              { blank: "overlooks" },
              { text: " the cost of inaction." },
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
              "valid / while / this concern / the evidence / remains / supports / the proposal",
            answer:
              "While this concern is valid, the evidence supports the proposal.",
          },
          {
            prompt:
              "a phased approach / disruption / could / reduce / nevertheless",
            answer: "Nevertheless, a phased approach could reduce disruption.",
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
            "Construct an argument map containing a claim, two reasons, one example, a fair counterargument, and a rebuttal.",
          ],
          textarea: true,
        },
        {
          content: [
            "Deliver a two-minute position statement using at least one concession and one qualified conclusion.",
          ],
          textarea: true,
        },
        {
          content: [
            "Respond to a partner's challenge without misrepresenting their position.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
