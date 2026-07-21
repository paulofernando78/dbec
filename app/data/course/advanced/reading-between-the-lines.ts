export const advancedReadingBetweenTheLines = {
  slug: "reading-between-the-lines",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Reading Between the Lines",
    descriptions: [
      "What is stated, and what is merely suggested?",
      "Support every interpretation with evidence from the language used.",
    ],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to infer a speaker's or writer's stance, identify implied meaning, and justify an interpretation with linguistic evidence.",
    grammar: "Hedging and stance",
    vocabulary: "Inference and evaluation",
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Consider how each statement communicates more than its literal wording.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "The proposal is ambitious, although the timeline may be somewhat optimistic.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: ["The committee stopped short of endorsing the plan."],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Few observers would deny that the results raise difficult questions.",
          ],
        },
      ],
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: [
          {
            question: "What does 'somewhat optimistic' most likely imply?",
            options: [
              { option: "The timeline may be unrealistic.", isCorrect: true },
              {
                option: "The timeline is certainly achievable.",
                isCorrect: false,
              },
              {
                option: "The writer has no opinion about it.",
                isCorrect: false,
              },
            ],
          },
          {
            question: "If a committee 'stops short of endorsing' a plan, it...",
            options: [
              { option: "supports it without reservations.", isCorrect: false },
              { option: "does not give it full support.", isCorrect: true },
              { option: "refuses to discuss it.", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction:
        "Maya and Daniel are interpreting a cautious statement from a public report.",
      audioSrc: "",
      lines: [
        {
          speaker: "Maya",
          line: [
            "The report says the policy has produced 'encouraging initial signs.' That sounds positive.",
          ],
        },
        {
          speaker: "Daniel",
          line: [
            "Positive, yes, but highly qualified. 'Initial signs' suggests the evidence is not yet conclusive.",
          ],
        },
        {
          speaker: "Maya",
          line: [
            "And the phrase 'further monitoring may be advisable' avoids saying the policy is definitely working.",
          ],
        },
        {
          speaker: "Daniel",
          line: [
            "Exactly. The writers appear cautiously hopeful rather than fully convinced.",
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
            question: "How do Maya and Daniel interpret the report's stance?",
            options: [
              { option: "Unreservedly enthusiastic", isCorrect: false },
              { option: "Cautiously optimistic", isCorrect: true },
              { option: "Entirely dismissive", isCorrect: false },
            ],
          },
          {
            question: "Which expression is treated as evidence of uncertainty?",
            options: [
              { option: "definitely working", isCorrect: false },
              { option: "encouraging initial signs", isCorrect: true },
              { option: "fully convinced", isCorrect: false },
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
          "At C1, interpretation goes beyond identifying facts: readers and listeners notice qualification, omission, contrast, and connotation.",
        ],
      },
      {
        as: "p",
        parts: [
          "A strong interpretation states the inference and identifies the exact wording that supports it.",
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
          column: "Cautious stance",
          items: [
            { parts: ["appears to"], lineBreak: true },
            { parts: ["arguably"], lineBreak: true },
            { parts: ["to some extent"], lineBreak: true },
            { parts: ["may well"], lineBreak: true },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Distance or doubt",
          items: [
            { parts: ["so-called"], lineBreak: true },
            { parts: ["purportedly"], lineBreak: true },
            { parts: ["stops short of"], lineBreak: true },
            { parts: ["raises questions"], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Evidence frames",
          items: [
            { parts: ["This suggests that..."], lineBreak: true },
            { parts: ["The contrast implies..."], lineBreak: true },
            { parts: ["The wording points to..."], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Do not treat an inference as a fact. Use calibrated language such as 'suggests', 'implies', or 'appears to'.",
        ],
      },
      {
        as: "p",
        parts: [
          "An interpretation is stronger when several linguistic clues point in the same direction.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: ["Does 'may' express the same certainty as 'will'? (No.)"],
      },
      {
        as: "p",
        parts: [
          "Can an inference be justified without referring to the text? (No.)",
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
            question: "Which sentence most clearly signals scepticism?",
            options: [
              {
                option: "The scheme has been described as innovative.",
                isCorrect: false,
              },
              {
                option: "The so-called solution creates problems of its own.",
                isCorrect: true,
              },
              { option: "The scheme began in May.", isCorrect: false },
            ],
          },
          {
            question: "Which is the best evidence-based interpretation?",
            options: [
              { option: "The writer hates the plan.", isCorrect: false },
              {
                option:
                  "The writer appears doubtful, as shown by 'limited evidence' and 'may'.",
                isCorrect: true,
              },
              { option: "The plan will fail.", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction:
        "Complete the interpretations with an appropriate stance expression.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "The wording " },
              { blank: "suggests" },
              { text: " that the author remains unconvinced." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The results are " },
              { blank: ["arguably", "perhaps"] },
              { text: " less decisive than the headline claims." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The committee " },
              { blank: "stops short of" },
              { text: " recommending immediate implementation." },
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
              "suggests / the contrast / reservations / has / the speaker / that",
            answer: "The contrast suggests that the speaker has reservations.",
          },
          {
            prompt:
              "evidence / this interpretation / wording / the / is supported by",
            answer: "This interpretation is supported by the wording.",
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
            "Annotate three cautious or evaluative expressions in a short article and explain what each one implies.",
          ],
          textarea: true,
        },
        {
          content: [
            "Write an 80-120 word interpretation of the writer's stance, citing at least two pieces of linguistic evidence.",
          ],
          textarea: true,
        },
        {
          content: [
            "Rewrite one direct claim in three ways to express strong certainty, cautious confidence, and scepticism.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
