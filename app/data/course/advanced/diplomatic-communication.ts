export const advancedDiplomaticCommunication = {
  slug: "diplomatic-communication",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Diplomatic Communication",
    descriptions: [
      "Protect the relationship without hiding the message.",
      "Adapt directness, register, and tone to the situation.",
    ],
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Compare the impact of direct and mitigated versions of the same message.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: ["You misunderstood the brief."],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "There may have been a slight difference in how we interpreted the brief.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "I can see the logic of that approach, although I have some reservations about the timing.",
          ],
        },
      ],
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: [
          {
            question: "Why is the second statement more diplomatic?",
            options: [
              { option: "It removes the problem entirely.", isCorrect: false },
              {
                option:
                  "It distributes responsibility and reduces direct blame.",
                isCorrect: true,
              },
              { option: "It is less grammatical.", isCorrect: false },
            ],
          },
          {
            question: "What does 'I can see the logic' do before disagreement?",
            options: [
              {
                option: "It acknowledges the other perspective.",
                isCorrect: true,
              },
              { option: "It promises agreement.", isCorrect: false },
              { option: "It ends the discussion.", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction:
        "A manager and a consultant discuss a delayed project without assigning unnecessary blame.",
      audioSrc: "",
      lines: [
        {
          speaker: "Manager",
          line: [
            "I appreciate the work completed so far. That said, the current timeline may not leave enough room for testing.",
          ],
        },
        {
          speaker: "Consultant",
          line: [
            "I understand the concern. We may have underestimated the approval stage.",
          ],
        },
        {
          speaker: "Manager",
          line: [
            "Would it be possible to revise the sequence rather than move the final deadline immediately?",
          ],
        },
        {
          speaker: "Consultant",
          line: [
            "That seems reasonable. We could bring the testing team in earlier, provided the scope remains stable.",
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
            question: "How does the manager introduce the problem?",
            options: [
              { option: "With direct personal blame", isCorrect: false },
              {
                option: "With acknowledgement followed by a qualified concern",
                isCorrect: true,
              },
              { option: "By avoiding the timeline", isCorrect: false },
            ],
          },
          {
            question:
              "What condition does the consultant attach to the solution?",
            options: [
              { option: "The scope must remain stable.", isCorrect: true },
              { option: "The deadline must be cancelled.", isCorrect: false },
              { option: "Testing must be removed.", isCorrect: false },
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
          "Diplomatic language calibrates directness according to power, risk, relationship, and purpose.",
        ],
      },
      {
        as: "p",
        parts: [
          "Mitigation should soften the interpersonal impact without making the request or concern impossible to understand.",
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
          column: "Acknowledge",
          items: [
            { parts: ["I appreciate that..."], lineBreak: true },
            { parts: ["I can see why..."], lineBreak: true },
            { parts: ["That is a fair point..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Mitigate",
          items: [
            { parts: ["There may be..."], lineBreak: true },
            { parts: ["I have some reservations..."], lineBreak: true },
            { parts: ["It might be worth reconsidering..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Propose",
          items: [
            { parts: ["Would it be possible to...?"], lineBreak: true },
            { parts: ["One option might be..."], lineBreak: true },
            { parts: ["Could we explore...?"], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Over-mitigation can obscure the message. State the core issue and requested action clearly.",
        ],
      },
      {
        as: "p",
        parts: [
          "Register depends on context: an internal chat, formal complaint, and executive meeting require different choices.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: [
          "Does diplomatic language require agreeing with the other person? (No.)",
        ],
      },
      {
        as: "p",
        parts: [
          "Should the listener still understand what action is requested? (Yes.)",
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
            question: "Which sentence is diplomatic but still clear?",
            options: [
              { option: "This is wrong. Fix it.", isCorrect: false },
              {
                option:
                  "I may be missing some context, but the figures appear inconsistent. Could we review them together?",
                isCorrect: true,
              },
              {
                option: "Perhaps something somewhere could change.",
                isCorrect: false,
              },
            ],
          },
          {
            question: "Which phrase appropriately acknowledges disagreement?",
            options: [
              { option: "You clearly do not understand.", isCorrect: false },
              {
                option:
                  "I see the reasoning, although I reach a different conclusion.",
                isCorrect: true,
              },
              { option: "Whatever you say.", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction:
        "Complete each sensitive message with a clear mitigating expression.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "" },
              { blank: "I can see why" },
              {
                text: " that option is attractive, although the legal risk remains.",
              },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "There " },
              { blank: "may have been" },
              { text: " a misunderstanding about the deadline." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "" },
              { blank: "Would it be possible to" },
              { text: " review the wording before publication?" },
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
            prompt: "some reservations / I / the timing / have / about",
            answer: "I have some reservations about the timing.",
          },
          {
            prompt: "explore / could / another option / we / perhaps",
            answer: "Perhaps we could explore another option.",
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
            "Rewrite three overly direct workplace messages so that they remain clear but protect the relationship.",
          ],
          textarea: true,
        },
        {
          content: [
            "Role-play a disagreement between people with unequal authority and adapt the level of directness appropriately.",
          ],
          textarea: true,
        },
        {
          content: [
            "Write a concise follow-up message that records the concern, proposed action, and condition for agreement.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
