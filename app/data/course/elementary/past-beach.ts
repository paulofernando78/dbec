
export const elementaryPastBeach = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "A Day at the Beach",
    descriptions: ["We went to the beach, swam, and watched the sunset."],
  },
  introduction: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
      instruction:
        "Look at the pictures. What made Laura's day special? Then listen and check.",
      imgs: [
        {
          src: "/assets/img/course/a2/past-beach/laura-beach.avif",
          alt: "Laura spending the day at the beach",
          content: [
            { audio: "Laura went to the beach on Sunday." },
            "Laura ",
            { part: "went", type: "mark" },
            " to the beach on Sunday. ",
            { part: "Laura foi à praia no domingo.", type: "portuguese" },
          ],
        },
        {
          src: "/assets/img/course/a2/past-beach/laura-beach.avif",
          alt: "Laura putting on sunscreen",
          content: [
            { audio: "She put on sunscreen." },
            "She ",
            { part: "put on", type: "mark" },
            " sunscreen. ",
            { part: "Ela passou protetor solar.", type: "portuguese" },
          ],
        },
        {
          src: "/assets/img/course/a2/past-beach/laura-beach.avif",
          alt: "Laura swimming in the ocean",
          content: [
            { audio: "She swam in the ocean." },
            "She ",
            { part: "swam", type: "mark" },
            " in the ocean. ",
            { part: "Ela nadou no mar.", type: "portuguese" },
          ],
        },
        {
          src: "/assets/img/course/a2/past-beach/laura-beach.avif",
          alt: "Laura and her friends playing beach volleyball",
          content: [
            { audio: "They played beach volleyball." },
            "They ",
            { part: "played", type: "mark" },
            " beach volleyball. ",
            { part: "Eles jogaram vôlei de praia.", type: "portuguese" },
          ],
        },
        {
          src: "/assets/img/course/a2/past-beach/laura-beach.avif",
          alt: "Laura and her friends having a snack",
          content: [
            { audio: "They ate fruit and drank coconut water." },
            "They ",
            { part: "ate", type: "mark" },
            " fruit and drank coconut water. ",
            {
              part: "Eles comeram frutas e beberam água de coco.",
              type: "portuguese",
            },
          ],
        },
        {
          src: "/assets/img/course/a2/past-beach/laura-beach.avif",
          alt: "Laura watching the sunset",
          content: [
            { audio: "Laura watched the sunset before she went home." },
            "Laura ",
            { part: "watched", type: "mark" },
            " the sunset before she went home. ",
            {
              part: "Laura viu o pôr do sol antes de ir para casa.",
              type: "portuguese",
            },
          ],
        },
      ],
    },
      },
      {
        type: "radio",
        ...{
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Laura went to the beach on Sunday.",
            options: [
              { option: "true", isCorrect: true },
              { option: "false", isCorrect: false },
            ],
          },
          {
            question: "Laura stayed out after sunset.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
        ],
      },
    },
      }
    ],
  },
  presentation: {
    blocks: [
      {
        type: "dialogue",
        ...{
      instruction:
        "Listen once. Did Laura enjoy her beach day? Then listen again for details.",
      audioSrc: "",
      lines: [
        { speaker: "Laura", line: ["Hey Eric. How's it going?"] },
        { speaker: "Eric", line: ["Pretty good. How was your weekend?"] },
        {
          speaker: "Laura",
          line: ["It was great. I went to the beach on Sunday."],
        },
        { speaker: "Eric", line: ["Nice! Who did you go with?"] },
        { speaker: "Laura", line: ["I went with two friends."] },
        { speaker: "Eric", line: ["What did you do there?"] },
        {
          speaker: "Laura",
          line: ["We swam, played volleyball, and watched the sunset."],
        },
        { speaker: "Eric", line: ["Was the water cold?"] },
        { speaker: "Laura", line: ["No, it was warm and calm."] },
      ],
    },
      },
      {
        type: "radio",
        ...{
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Where did Laura go?",
            options: [
              { option: "To the beach", isCorrect: true },
              { option: "To the movies", isCorrect: false },
            ],
          },
          {
            question: "Who went with Laura?",
            options: [
              { option: "Two friends", isCorrect: true },
              { option: "Her parents", isCorrect: false },
            ],
          },
          {
            question: "What was the water like?",
            options: [
              { option: "Warm and calm", isCorrect: true },
              { option: "Cold and rough", isCorrect: false },
            ],
          },
        ],
      },
    },
      }
    ],
  },
  languageFocus: {
    blocks: [
      {
        type: "meaning",
        value: [
      {
        as: "p",
        parts: [
          "Use common ",
          { part: "irregular Past Simple verbs", type: "bold" },
          " to describe a finished day: go ➜ went, swim ➜ swam, eat ➜ ate.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "Ask for details with ",
          { part: "did + base verb", type: "bold" },
          ": Where did you go? What did you eat?",
        ],
      },
      {
        as: "p",
        parts: [
          "Use ",
          { part: "then", type: "bold" },
          " and ",
          { part: "after that", type: "bold" },
          " to connect the main events.",
        ],
      },
    ],
      },
      {
        type: "column",
        ...{
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Questions",
          items: [
            {
              parts: [{ part: "Did", type: "bold" }, " + subject + base verb:"],
            },
            { type: "spacer" },
            {
              parts: [
                { audio: "What did you do last weekend?" },
                "What did you do last weekend?",
              ],
            },
            { parts: [{ audio: "Where did you go?" }, "Where did you go?"] },
            {
              parts: [
                { audio: "Who did you go with?" },
                "Who did you go with?",
              ],
            },
            { parts: [{ audio: "Did you have fun?" }, "Did you have fun?"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Answers",
          items: [
            {
              parts: [
                { audio: "I went to the beach." },
                "I went to the beach.",
              ],
            },
            {
              parts: [
                { audio: "I went with my friends." },
                "I went with my friends.",
              ],
            },
            {
              parts: [
                { audio: "We swam in the ocean." },
                "We swam in the ocean.",
              ],
            },
            { parts: [{ audio: "Yes, we had fun." }, "Yes, we had fun."] },
          ],
        },
      ],
    },
      },
      {
        type: "column",
        ...{
      width: 250,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Base verb",
          items: [
            { parts: [{ audio: "go" }, "go"] },
            { parts: [{ audio: "swim" }, "swim"] },
            { parts: [{ audio: "eat" }, "eat"] },
            { parts: [{ audio: "drink" }, "drink"] },
            { parts: [{ audio: "have" }, "have"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Past form",
          items: [
            { parts: [{ audio: "went" }, "went"] },
            { parts: [{ audio: "swam" }, "swam"] },
            { parts: [{ audio: "ate" }, "ate"] },
            { parts: [{ audio: "drank" }, "drank"] },
            { parts: [{ audio: "had" }, "had"] },
          ],
        },
      ],
    },
      },
      {
        type: "notes",
        value: [
      {
        as: "p",
        parts: [
          "Don't say: Did you ",
          { part: "went", type: "bold" },
          "? Say: Did you ",
          { part: "go", type: "bold" },
          "?",
        ],
      },
      {
        as: "p",
        parts: [
          "Use the Past Simple to tell a finished beach-day story. After the first answer, ask a follow-up such as Who did you go with? or What did you do there?",
        ],
      },
    ],
      },
      {
        type: "ccq",
        value: [
      {
        parts: ["Is Laura's beach day finished?"],
        options: [
          { option: "Yes", isCorrect: true },
          { option: "No", isCorrect: false },
        ],
      },
      {
        parts: ["What is the past form of swim?"],
        options: [
          { option: "swam", isCorrect: true },
          { option: "swimmed", isCorrect: false },
        ],
      },
      {
        parts: ["Which question is correct?"],
        options: [
          { option: "Where did you go?", isCorrect: true },
          { option: "Where did you went?", isCorrect: false },
        ],
      },
    ],
      }
    ],
  },
  practice: {
    blocks: [
      {
        type: "guess",
      },
      {
        type: "radio",
        ...{
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Yesterday we _____ in the ocean.",
            options: [
              { option: "swam", isCorrect: true },
              { option: "swim", isCorrect: false },
            ],
          },
          {
            question: "They _____ volleyball on the sand.",
            options: [
              { option: "played", isCorrect: true },
              { option: "play", isCorrect: false },
            ],
          },
          {
            question: "What did you _____ at the beach?",
            options: [
              { option: "eat", isCorrect: true },
              { option: "ate", isCorrect: false },
            ],
          },
        ],
      },
    },
      },
      {
        type: "fillInTheBlanks",
        ...{
      showWordBank: true,
      instruction: "Complete the sentences.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "Laura " },
              { blank: "went" },
              { text: " to the beach." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "We " },
              { blank: "watched" },
              { text: " the sunset." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "They " },
              { blank: "drank" },
              { text: " coconut water." },
            ],
            lineBreak: true,
          },
        ],
      },
    },
      },
      {
        type: "unscramble",
        ...{
      showWordBank: false,
      instruction: "Unscramble the sentence.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "beach / went / the / we / to",
            answer: "We went to the beach.",
          },
          {
            prompt: "ocean / swam / the / in / I",
            answer: "I swam in the ocean.",
          },
          {
            prompt: "volleyball / played / they",
            answer: "They played volleyball.",
          },
        ],
      },
    },
      }
    ],
  },
  production: {
    blocks: [
      {
        type: "task",
        instruction: "Share a real or invented beach story:",
        listType: "checkbox",
        items: [
        {
          content: [
            "Prepare five notes: when, who with, weather, three activities, and one memorable detail.",
          ],
          textarea: true,
        },
        {
          content: [
            "Tell your story to a partner using then or after that. Do not read complete sentences.",
          ],
        },
        {
          content: [
            "Your partner asks at least two follow-up questions. Change roles and repeat.",
          ],
        },
        {
          content: ["Retell one interesting detail from your partner's story."],
        },
      ],
      }
    ],
  },
};
