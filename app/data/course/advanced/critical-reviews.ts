export const advancedCriticalReviews = {
  slug: "critical-reviews",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Critical Reviews",
    descriptions: [
      "Move from personal reaction to criteria-based judgment.",
      "Balance strengths, limitations, evidence, and audience needs.",
    ],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to evaluate a cultural or media work using explicit criteria and support a balanced judgment with specific evidence.",
    grammar: "Evaluative structures",
    vocabulary: "Critical appraisal",
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Distinguish unsupported opinion from criteria-based evaluation.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: ["I loved the documentary. It was amazing."],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "The documentary makes a complex issue accessible, although its reliance on a single case limits the argument.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "The visual design reinforces the central contrast, but the conclusion resolves the tension too neatly.",
          ],
        },
      ],
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: [
          {
            question:
              "Which statement contains both a criterion and a limitation?",
            options: [
              { option: "The first statement", isCorrect: false },
              { option: "The second statement", isCorrect: true },
              { option: "Neither statement", isCorrect: false },
            ],
          },
          {
            question: "What is evaluated in the third statement?",
            options: [
              {
                option: "Visual function and narrative resolution",
                isCorrect: true,
              },
              { option: "Ticket price only", isCorrect: false },
              { option: "The reviewer's mood", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      prompt: "Two reviewers compare their judgments of a documentary.",
      audioSrc: "",
      lines: [
        {
          speaker: "Ravi",
          line: [
            "The film is compelling because it turns abstract statistics into personal consequences.",
          ],
        },
        {
          speaker: "Sofia",
          line: [
            "I agree about the emotional impact, but the personal focus sometimes substitutes anecdote for broader evidence.",
          ],
        },
        {
          speaker: "Ravi",
          line: [
            "That is fair. Perhaps its strength as storytelling is also a limitation as analysis.",
          ],
        },
        {
          speaker: "Sofia",
          line: [
            "Exactly. I would recommend it as an introduction, not as a comprehensive account.",
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
            question: "What shared judgment do the reviewers reach?",
            options: [
              { option: "The documentary fails completely.", isCorrect: false },
              {
                option:
                  "Its storytelling is effective but analytically limited.",
                isCorrect: true,
              },
              { option: "Statistics should never be used.", isCorrect: false },
            ],
          },
          {
            question: "How does Sofia qualify her recommendation?",
            options: [
              {
                option: "She recommends it as a complete authority.",
                isCorrect: false,
              },
              {
                option: "She recommends it as an introduction.",
                isCorrect: true,
              },
              {
                option: "She refuses to recommend it to anyone.",
                isCorrect: false,
              },
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
          "Critical appraisal makes the basis of judgment visible: purpose, evidence, structure, style, impact, or audience suitability.",
        ],
      },
      {
        as: "p",
        parts: [
          "A balanced review can be decisive while still recognizing where a strength creates a limitation.",
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
          column: "Criteria",
          items: [
            { parts: ["in terms of..."], lineBreak: true },
            { parts: ["as an example of..."], lineBreak: true },
            { parts: ["judged against its aim..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Balance",
          items: [
            { parts: ["its main strength lies in..."], lineBreak: true },
            { parts: ["this is partly undermined by..."], lineBreak: true },
            { parts: ["effective though..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Judgment",
          items: [
            { parts: ["ultimately..."], lineBreak: true },
            { parts: ["on balance..."], lineBreak: true },
            { parts: ["best suited to an audience that..."], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Evidence may include a scene, quotation, structural choice, visual technique, or pattern across the work.",
        ],
      },
      {
        as: "p",
        parts: [
          "Avoid plot summary unless the detail is necessary to support evaluation.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: [
          "Is 'I liked it' sufficient evidence for a critical judgment? (No.)",
        ],
      },
      {
        as: "p",
        parts: [
          "Can the same feature function as both a strength and a limitation? (Yes.)",
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
            question: "Which sentence is the most analytical?",
            options: [
              { option: "The ending was bad.", isCorrect: false },
              {
                option:
                  "The abrupt ending preserves ambiguity, although it leaves the central ethical conflict underdeveloped.",
                isCorrect: true,
              },
              { option: "The film ended after two hours.", isCorrect: false },
            ],
          },
          {
            question:
              "Which recommendation is appropriately audience-specific?",
            options: [
              { option: "Everyone must watch it.", isCorrect: false },
              {
                option:
                  "It is best suited to viewers seeking an accessible introduction rather than a technical account.",
                isCorrect: true,
              },
              { option: "It is objectively perfect.", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the balanced evaluation.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "Its main " },
              { blank: "strength" },
              { text: " lies in making the issue emotionally immediate." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "This is partly " },
              { blank: "undermined by" },
              { text: " the narrow range of evidence." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "" },
              { blank: "On balance" },
              {
                text: ", it succeeds as an introduction rather than a definitive account.",
              },
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
            prompt: "strength / its / also / a limitation / becomes / greatest",
            answer: "Its greatest strength also becomes a limitation.",
          },
          {
            prompt:
              "the intended audience / effective / judged against / it is",
            answer:
              "It is effective when judged against the intended audience.",
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
            "Choose three explicit criteria and collect one piece of evidence for each before drafting a review.",
          ],
          textarea: true,
        },
        {
          content: [
            "Write a 180-word critical review that balances strengths and limitations and identifies the appropriate audience.",
          ],
          textarea: true,
        },
        {
          content: [
            "Exchange reviews and identify any judgment that lacks specific evidence.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
