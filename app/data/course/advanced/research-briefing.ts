export const advancedResearchBriefing = {
  slug: "research-briefing",
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "Research Briefing",
    descriptions: [
      "Separate evidence, interpretation, limitation, and recommendation.",
      "Give decision-makers a concise and defensible account.",
    ],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to synthesize evidence from several claims, distinguish fact from inference, and present a concise briefing with justified recommendations.",
    grammar: "Evidence-based reporting",
    vocabulary: "Research and recommendations",
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Classify each statement as evidence, inference, limitation, or recommendation.",
      imgs: [
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "Survey participation increased from 42% to 61% after reminders were introduced.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "The reminders may have improved participation, although the groups were not randomly assigned.",
          ],
        },
        {
          alt: "Add a supporting image for this C1 discussion prompt.",
          content: [
            "A controlled pilot should be conducted before the system is expanded.",
          ],
        },
      ],
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: [
          {
            question: "Which statement reports directly observed evidence?",
            options: [
              { option: "The first statement", isCorrect: true },
              { option: "The second statement", isCorrect: false },
              { option: "The third statement", isCorrect: false },
            ],
          },
          {
            question: "Why is the second statement appropriately cautious?",
            options: [
              {
                option:
                  "It distinguishes a possible explanation from proof and states a limitation.",
                isCorrect: true,
              },
              {
                option: "It guarantees the reminders worked.",
                isCorrect: false,
              },
              { option: "It contains no interpretation.", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      prompt: "A research analyst briefs a director on a pilot programme.",
      audioSrc: "",
      lines: [
        {
          speaker: "Analyst",
          line: [
            "Participation rose in all three sites, with the largest increase where reminders were personalized.",
          ],
        },
        {
          speaker: "Director",
          line: ["Can we conclude that personalization caused the increase?"],
        },
        {
          speaker: "Analyst",
          line: [
            "Not conclusively. That site also had more staff support, so the effects cannot be separated with the current design.",
          ],
        },
        {
          speaker: "Director",
          line: ["Then what action does the evidence justify?"],
        },
        {
          speaker: "Analyst",
          line: [
            "A controlled comparison of standard and personalized reminders would be proportionate before a full rollout.",
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
            question: "What prevents a causal conclusion?",
            options: [
              { option: "The sites used different colours.", isCorrect: false },
              {
                option: "Personalization and staff support varied together.",
                isCorrect: true,
              },
              { option: "Participation did not change.", isCorrect: false },
            ],
          },
          {
            question: "Why is the recommendation proportionate?",
            options: [
              {
                option:
                  "It matches the uncertainty and tests the unresolved explanation.",
                isCorrect: true,
              },
              {
                option: "It assumes the strongest claim is true.",
                isCorrect: false,
              },
              { option: "It ends all data collection.", isCorrect: false },
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
          "A briefing distinguishes what was observed, what is inferred, what remains uncertain, and what action the evidence supports.",
        ],
      },
      {
        as: "p",
        parts: [
          "Recommendations should be proportionate to evidence, risk, cost, and reversibility.",
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
          column: "Evidence",
          items: [
            { parts: ["The data shows..."], lineBreak: true },
            { parts: ["Across the sample..."], lineBreak: true },
            { parts: ["The observed change was..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-green-800",
          bgColor: "bg-green-600",
          textColor: "text-white",
          column: "Interpretation",
          items: [
            { parts: ["A plausible explanation is..."], lineBreak: true },
            { parts: ["This may indicate..."], lineBreak: true },
            { parts: ["The evidence does not establish..."], lineBreak: true },
          ],
        },
        {
          borderColor: "border-amber-800",
          bgColor: "bg-amber-500",
          textColor: "text-black",
          column: "Recommendation",
          items: [
            { parts: ["The evidence supports..."], lineBreak: true },
            {
              parts: ["A proportionate next step would be..."],
              lineBreak: true,
            },
            { parts: ["Before rollout..."], lineBreak: true },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "A concise briefing omits secondary detail but never omits a limitation that changes the decision.",
        ],
      },
      {
        as: "p",
        parts: [
          "Use headings or verbal signposts so the audience can distinguish findings from recommendations.",
        ],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: ["Is an interpretation the same as an observed fact? (No.)"],
      },
      {
        as: "p",
        parts: [
          "Should recommendation strength reflect evidence strength? (Yes.)",
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
              "Which statement clearly separates finding from interpretation?",
            options: [
              {
                option:
                  "Sales rose, so the campaign definitely caused the increase.",
                isCorrect: false,
              },
              {
                option:
                  "Sales rose by 8%; the timing suggests the campaign may have contributed, though seasonal demand also increased.",
                isCorrect: true,
              },
              {
                option: "The campaign was a success because I liked it.",
                isCorrect: false,
              },
            ],
          },
          {
            question:
              "Which recommendation is proportionate to uncertain evidence?",
            options: [
              {
                option: "Implement permanently everywhere tomorrow.",
                isCorrect: false,
              },
              {
                option:
                  "Run a limited controlled pilot with predefined success criteria.",
                isCorrect: true,
              },
              { option: "Ignore the findings entirely.", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the evidence-based briefing language.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "The observed " },
              { blank: "change" },
              { text: " was an increase of nineteen percentage points." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "A plausible " },
              { blank: "explanation" },
              { text: " is the introduction of reminders." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "A proportionate next " },
              { blank: "step" },
              { text: " would be a controlled pilot." },
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
            prompt: "does not establish / the evidence / a causal link",
            answer: "The evidence does not establish a causal link.",
          },
          {
            prompt:
              "before rollout / a controlled pilot / conducted / should be",
            answer: "A controlled pilot should be conducted before rollout.",
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
            "Classify a small evidence pack into findings, interpretations, limitations, and possible actions.",
          ],
          textarea: true,
        },
        {
          content: [
            "Deliver a two-minute briefing containing one key finding, one limitation, and one proportionate recommendation.",
          ],
          textarea: true,
        },
        {
          content: [
            "Answer a challenge by identifying whether the question concerns evidence, inference, or recommendation.",
          ],
          textarea: true,
        },
      ],
    },
  },
};
