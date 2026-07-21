export const advancedNegotiationAndConsensus = {
  slug: "negotiation-and-consensus",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Negotiation and Consensus",
    descriptions: [
      "Compare priorities before defending solutions.",
      "A workable compromise preserves what matters most to each side.",
    ],
  },
  introduction: {
    storyCarousel: {
      instruction: "Identify the priority protected by each proposal.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "We could accept the earlier launch provided the safety review remains unchanged.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "If the budget cannot increase, we would need to reduce the scope rather than the testing period.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "A possible middle ground would be to pilot the service in two regions before expanding it.",
          ],
        },
      ],
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: [
          {
            question: "What is non-negotiable in the first proposal?",
            options: [
              { option: "The launch date", isCorrect: false },
              { option: "The safety review", isCorrect: true },
              { option: "The number of regions", isCorrect: false },
            ],
          },
          {
            question: "Why is the pilot a compromise?",
            options: [
              { option: "It rejects expansion permanently.", isCorrect: false },
              {
                option: "It allows limited progress while managing risk.",
                isCorrect: true,
              },
              { option: "It removes all conditions.", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction:
        "A community group and transport team negotiate a late-night bus pilot.",
      audioSrc: "",
      lines: [
        {
          speaker: "Community",
          line: [
            "Our priority is reliable service after midnight, particularly for hospital and hospitality workers.",
          ],
        },
        {
          speaker: "Transport",
          line: [
            "We support the goal, but running every route hourly would exceed the pilot budget.",
          ],
        },
        {
          speaker: "Community",
          line: [
            "Could we identify the three highest-demand corridors and guarantee connections from those stops?",
          ],
        },
        {
          speaker: "Transport",
          line: [
            "That could work, provided usage is reviewed after three months before any wider commitment.",
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
            question:
              "What does the community preserve in its revised proposal?",
            options: [
              { option: "Coverage of every route", isCorrect: false },
              {
                option: "Reliable access for the highest-demand corridors",
                isCorrect: true,
              },
              { option: "An unlimited budget", isCorrect: false },
            ],
          },
          {
            question: "What condition does the transport team request?",
            options: [
              { option: "A review after three months", isCorrect: true },
              { option: "Immediate permanent expansion", isCorrect: false },
              { option: "No evening service", isCorrect: false },
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
          "C1 negotiation involves identifying underlying interests, not only repeating preferred positions.",
        ],
      },
      {
        as: "p",
        parts: [
          "A consensus statement records the shared goal, agreed action, conditions, and unresolved issues.",
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
          column: "Explore interests",
          items: [
            { parts: ["What is the main concern behind...?"], lineBreak: true },
            { parts: ["Which element is essential?"], lineBreak: true },
            { parts: ["Where is there flexibility?"], lineBreak: true },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Offer conditions",
          items: [
            { parts: ["We could agree provided that..."], lineBreak: true },
            { parts: ["If X, we would be willing to Y."], lineBreak: true },
            { parts: ["On the condition that..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Build consensus",
          items: [
            { parts: ["A possible middle ground..."], lineBreak: true },
            { parts: ["What we appear to agree on..."], lineBreak: true },
            { parts: ["The remaining issue is..."], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Positions are proposed solutions; interests are the needs those solutions are intended to protect.",
        ],
      },
      {
        as: "p",
        parts: [
          "Do not announce consensus until conditions and remaining disagreements are explicit.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: [
          "Does compromise require both sides to abandon every priority? (No.)",
        ],
      },
      {
        as: "p",
        parts: [
          "Should a conditional agreement state its condition clearly? (Yes.)",
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
            question: "Which question explores an underlying interest?",
            options: [
              { option: "Why is your proposal wrong?", isCorrect: false },
              {
                option: "Which outcome must the final plan protect?",
                isCorrect: true,
              },
              { option: "Will you accept my plan now?", isCorrect: false },
            ],
          },
          {
            question: "Which is a clear conditional offer?",
            options: [
              { option: "Maybe something could happen.", isCorrect: false },
              {
                option:
                  "We could accept a shorter pilot provided the safety threshold remains unchanged.",
                isCorrect: true,
              },
              { option: "We accept everything.", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the negotiation language.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "We could accept the change " },
              { blank: "provided that" },
              { text: " the review date remains fixed." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "A possible " },
              { blank: "middle ground" },
              { text: " would be a limited regional pilot." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "What we appear to " },
              { blank: "agree on" },
              { text: " is the need for reliable access." },
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
              "provided / agree / could / remains / the budget / stable / we",
            answer: "We could agree provided the budget remains stable.",
          },
          {
            prompt: "remaining issue / how / the / measure success / is / to",
            answer: "The remaining issue is how to measure success.",
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
            "Rank the interests of two stakeholder groups before proposing any solution.",
          ],
          textarea: true,
        },
        {
          content: [
            "Negotiate a pilot plan containing scope, timeline, success criteria, and one explicit condition.",
          ],
          textarea: true,
        },
        {
          content: [
            "Write a consensus statement that distinguishes agreements from unresolved issues.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
