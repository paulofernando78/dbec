export const advancedAcademicPresentations = {
  slug: "academic-presentations",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Academic Presentations",
    descriptions: [
      "Guide the audience through a complex line of thought.",
      "Integrate subthemes and close with a meaningful conclusion.",
    ],
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Identify which signposts help an audience follow structure and significance.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "I will begin by defining the problem before turning to two competing explanations.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "This brings us to the broader question of who benefits from the policy.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "The main point I would like you to take away is that context changes the effect.",
          ],
        },
      ],
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: [
          {
            question: "Which phrase explicitly previews the structure?",
            options: [
              {
                option: "I will begin by... before turning to...",
                isCorrect: true,
              },
              { option: "The policy exists.", isCorrect: false },
              { option: "Context changes.", isCorrect: false },
            ],
          },
          {
            question: "What is the function of 'This brings us to'?",
            options: [
              {
                option: "It signals a transition linked to the previous point.",
                isCorrect: true,
              },
              {
                option: "It introduces an unrelated anecdote.",
                isCorrect: false,
              },
              { option: "It apologizes for an error.", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction: "Two presenters revise the structure of a talk on urban heat.",
      audioSrc: "",
      lines: [
        {
          speaker: "Elena",
          line: [
            "My slides cover causes, unequal impacts, and possible interventions, but the talk still feels like three separate lists.",
          ],
        },
        {
          speaker: "Jon",
          line: [
            "Make the relationship explicit. The causes explain where heat accumulates; that pattern explains who is most exposed.",
          ],
        },
        {
          speaker: "Elena",
          line: [
            "Then the interventions can be evaluated according to whether they address both temperature and inequality.",
          ],
        },
        {
          speaker: "Jon",
          line: [
            "Exactly. Your conclusion should return to that combined criterion rather than merely repeat the sections.",
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
            question: "What structural problem does Elena identify?",
            options: [
              {
                option: "The slides contain no information.",
                isCorrect: false,
              },
              {
                option: "The sections are not connected into one argument.",
                isCorrect: true,
              },
              { option: "The talk has too few images.", isCorrect: false },
            ],
          },
          {
            question: "What should the conclusion do?",
            options: [
              {
                option: "Introduce a completely new subject",
                isCorrect: false,
              },
              {
                option: "Return to the combined criterion and overall argument",
                isCorrect: true,
              },
              { option: "Repeat every sentence", isCorrect: false },
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
          "A C1 presentation makes relationships between subthemes explicit and highlights why each stage matters.",
        ],
      },
      {
        as: "p",
        parts: [
          "A conclusion synthesizes the argument and its significance; it does not simply announce that the talk has ended.",
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
          column: "Preview",
          items: [
            { parts: ["I will first..."], lineBreak: true },
            {
              parts: ["The presentation is organized around..."],
              lineBreak: true,
            },
            {
              parts: ["I will consider X before turning to Y."],
              lineBreak: true,
            },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Connect",
          items: [
            { parts: ["This is significant because..."], lineBreak: true },
            { parts: ["This brings us to..."], lineBreak: true },
            { parts: ["Seen in this context..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Conclude",
          items: [
            { parts: ["Taken together..."], lineBreak: true },
            { parts: ["The central implication is..."], lineBreak: true },
            { parts: ["The main point to retain is..."], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Use signposting selectively. Too many mechanical markers can obscure rather than clarify structure.",
        ],
      },
      {
        as: "p",
        parts: [
          "Examples should support the central line of reasoning, not become disconnected stories.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: [
          "Should the audience have to guess why one section follows another? (No.)",
        ],
      },
      {
        as: "p",
        parts: ["Is a conclusion more than a list of repeated points? (Yes.)"],
      },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the most precise and context-appropriate option.",
      exercise: {
        questions: [
          {
            question: "Which transition best shows a causal link?",
            options: [
              { option: "Anyway, here is another slide.", isCorrect: false },
              {
                option:
                  "This pattern of exposure leads directly to the second issue: unequal health outcomes.",
                isCorrect: true,
              },
              { option: "Next topic.", isCorrect: false },
            ],
          },
          {
            question: "Which is the strongest conclusion?",
            options: [
              { option: "That is everything I know.", isCorrect: false },
              {
                option:
                  "Taken together, the evidence suggests that effective cooling policy must address both design and inequality.",
                isCorrect: true,
              },
              { option: "I discussed three things.", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the presentation signposts.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "I will begin by defining the issue before " },
              { blank: "turning to" },
              { text: " its wider consequences." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "This finding is " },
              { blank: "significant because" },
              { text: " it challenges the standard explanation." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "" },
              { blank: "Taken together" },
              {
                text: ", the three cases point to the same structural problem.",
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
            prompt: "brings / this / broader question / us / to / the",
            answer: "This brings us to the broader question.",
          },
          {
            prompt:
              "central implication / the / context / effect / changes / is that / the",
            answer:
              "The central implication is that context changes the effect.",
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
            "Create a presentation map with a central claim, two connected subthemes, evidence, and a synthesized conclusion.",
          ],
          textarea: true,
        },
        {
          content: [
            "Deliver a three-minute presentation using explicit but natural signposting.",
          ],
          textarea: true,
        },
        {
          content: [
            "Answer two follow-up questions by clarifying or extending a point rather than repeating it.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
