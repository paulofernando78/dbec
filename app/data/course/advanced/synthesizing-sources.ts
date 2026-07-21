export const advancedSynthesizingSources = {
  slug: "synthesizing-sources",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Synthesizing Sources",
    descriptions: [
      "Combine sources without producing a list of summaries.",
      "Show agreement, difference, limitation, and significance.",
    ],
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Compare the claims. Decide whether the sources agree, qualify one another, or conflict.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Source A: Remote work increases autonomy and reduces commuting time.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Source B: Remote work can weaken informal collaboration and blur personal boundaries.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Source C: Hybrid schedules produce different results depending on role and team culture.",
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
              "What is the most accurate relationship between Sources A and B?",
            options: [
              { option: "They are exact opposites.", isCorrect: false },
              {
                option:
                  "They emphasize different consequences of the same practice.",
                isCorrect: true,
              },
              { option: "They discuss unrelated subjects.", isCorrect: false },
            ],
          },
          {
            question: "How does Source C affect the comparison?",
            options: [
              {
                option:
                  "It adds a condition that may explain different outcomes.",
                isCorrect: true,
              },
              { option: "It proves Source A is false.", isCorrect: false },
              {
                option: "It repeats Source B word for word.",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction: "Leah and Amir plan a neutral synthesis of two reports.",
      audioSrc: "",
      lines: [
        {
          speaker: "Leah",
          line: [
            "The first report links remote work to higher job satisfaction, whereas the second warns about isolation.",
          ],
        },
        {
          speaker: "Amir",
          line: [
            "We should not present that as a simple contradiction. One measures autonomy; the other focuses on social connection.",
          ],
        },
        {
          speaker: "Leah",
          line: [
            "So the synthesis could say that remote work may improve individual control while creating interpersonal costs.",
          ],
        },
        {
          speaker: "Amir",
          line: [
            "Yes, and both sources indicate that management practices influence the outcome.",
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
            question: "What mistake do the speakers avoid?",
            options: [
              { option: "Using any reporting verbs", isCorrect: false },
              {
                option:
                  "Treating different research focuses as a direct contradiction",
                isCorrect: true,
              },
              { option: "Mentioning a shared conclusion", isCorrect: false },
            ],
          },
          {
            question: "What shared factor do both reports identify?",
            options: [
              { option: "Management practices", isCorrect: true },
              { option: "Office rent", isCorrect: false },
              { option: "Employee age", isCorrect: false },
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
          "Synthesis organizes information by relationship or theme, not source order.",
        ],
      },
      {
        as: "p",
        parts: [
          "A neutral synthesis preserves each source's degree of certainty and does not invent agreement or conflict.",
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
          column: "Agreement",
          items: [
            { parts: ["Both sources indicate..."], lineBreak: true },
            { parts: ["A point shared by both..."], lineBreak: true },
            { parts: ["Similarly..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Contrast",
          items: [
            { parts: ["Whereas..."], lineBreak: true },
            { parts: ["By contrast..."], lineBreak: true },
            { parts: ["This differs from..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Qualification",
          items: [
            { parts: ["This finding is limited by..."], lineBreak: true },
            { parts: ["Taken together..."], lineBreak: true },
            { parts: ["A possible explanation is..."], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Use reporting verbs accurately: a source may suggest, indicate, argue, acknowledge, challenge, or demonstrate.",
        ],
      },
      {
        as: "p",
        parts: [
          "Do not strengthen a cautious source by changing 'may' into 'proves' or 'shows conclusively'.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: [
          "Is synthesis the same as writing one paragraph per source? (No.)",
        ],
      },
      {
        as: "p",
        parts: [
          "Should a synthesis preserve uncertainty in the original evidence? (Yes.)",
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
              "Which sentence is a synthesis rather than two separate summaries?",
            options: [
              {
                option: "Source A discusses cost. Source B discusses access.",
                isCorrect: false,
              },
              {
                option:
                  "Taken together, the sources suggest that lower cost may improve access, although location remains a barrier.",
                isCorrect: true,
              },
              { option: "I agree with Source A.", isCorrect: false },
            ],
          },
          {
            question: "Which reporting verb best preserves a cautious claim?",
            options: [
              { option: "proves", isCorrect: false },
              { option: "suggests", isCorrect: true },
              { option: "guarantees", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction:
        "Complete the synthesis with a relationship or reporting expression.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "Both reports " },
              { blank: "indicate" },
              { text: " that context influences the outcome." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The first study reports higher autonomy, " },
              { blank: "whereas" },
              { text: " the second emphasizes isolation." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "" },
              { blank: "Taken together" },
              { text: ", the findings point to a context-dependent effect." },
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
              "sources / both / a role / acknowledge / that / leadership / plays",
            answer: "Both sources acknowledge that leadership plays a role.",
          },
          {
            prompt:
              "the evidence / taken together / a mixed picture / presents",
            answer: "Taken together, the evidence presents a mixed picture.",
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
            "Create a comparison grid that records each source's claim, evidence, certainty, and limitations.",
          ],
          textarea: true,
        },
        {
          content: [
            "Write a neutral 150-word synthesis organized around two relationships between the sources.",
          ],
          textarea: true,
        },
        {
          content: [
            "Review the synthesis and underline every phrase that attributes or qualifies a claim.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
