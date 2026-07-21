export const elementaryCityLife = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "City Life",
    descriptions: [
      "The city is busier than the town.",
      "The subway is faster than the bus.",
    ],
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "crowded" }, "crowded"] },
        { as: "span", parts: [{ audio: "quiet" }, "quiet"] },
        { as: "span", parts: [{ audio: "subway" }, "subway"] },
        { as: "span", parts: [{ audio: "traffic" }, "traffic"] },
      ],
      imgs: [
        { src: "/", alt: "crowded" },
        { src: "/", alt: "quiet" },
        { src: "/", alt: "subway" },
        { src: "/", alt: "traffic" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "A large busy city and a small quiet town",
          content: [
            { audio: "Metro City is bigger and busier than Lake Town." },
            "Metro City is bigger and busier than Lake Town.",
            " (Metro City é maior e mais agitada que Lake Town.)",
          ],
        },
        {
          src: "/",
          alt: "A subway and a bus in the city",
          content: [
            { audio: "The subway is faster than the bus." },
            "The subway is faster than the bus.",
            " (O metrô é mais rápido que o ônibus.)",
          ],
        },
        {
          src: "/",
          alt: "A clean quiet street in a small town",
          content: [
            { audio: "Lake Town is quieter and cleaner." },
            "Lake Town is quieter and cleaner.",
            " (Lake Town é mais tranquila e limpa.)",
          ],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Which place is noisier?",
            options: [
              { option: "Metro City", isCorrect: true },
              { option: "Ben's hometown", isCorrect: false },
            ],
          },
          {
            question: "Which transportation is faster?",
            options: [
              { option: "The subway", isCorrect: true },
              { option: "The bus", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction: "Listen and read.",
      audioSrc: "/",
      lines: [
        { speaker: "Ana", line: ["Do you like living in Metro City?"] },
        { speaker: "Ben", line: ["Yes, but it is noisier than my hometown."] },
        { speaker: "Ana", line: ["Is public transportation good?"] },
        { speaker: "Ben", line: ["Yes. The subway is faster than the bus."] },
        { speaker: "Ana", line: ["What do you miss about your hometown?"] },
        { speaker: "Ben", line: ["It is quieter, cleaner, and less crowded."] },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Which place is noisier?",
            options: [
              { option: "Metro City", isCorrect: true },
              { option: "Ben's hometown", isCorrect: false },
            ],
          },
          {
            question: "Which transportation is faster?",
            options: [
              { option: "The subway", isCorrect: true },
              { option: "The bus", isCorrect: false },
            ],
          },
          {
            question: "What does Ben miss?",
            options: [
              { option: "Quiet, clean streets", isCorrect: true },
              { option: "Heavy traffic", isCorrect: false },
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
          { part: "Comparatives", type: "bold" },
          " compares two people, places, or things.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "",
          "Use adjective + -er + than for short adjectives and more + adjective + than for many long adjectives.",
        ],
      },
      { type: "spacer" },
    ],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Short adjectives",
          items: [
            {
              parts: [
                { audio: "small → smaller than" },
                "small → smaller than",
              ],
            },
            { parts: [{ audio: "busy → busier than" }, "busy → busier than"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Long adjectives",
          items: [
            { parts: [{ audio: "more crowded than" }, "more crowded than"] },
            {
              parts: [{ audio: "more expensive than" }, "more expensive than"],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Irregular",
          items: [
            { parts: [{ audio: "good → better than" }, "good → better than"] },
            { parts: [{ audio: "bad → worse than" }, "bad → worse than"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Use than after the comparative: The city is bigger than the town.",
        ],
      },
    ],
    ccq: [
      { as: "p", parts: ["Are we comparing one place or two?"] },
      { as: "p", parts: ["Is a busier place more or less active?"] },
      { as: "p", parts: ["Do we say more faster or faster?"] },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "The city is _____ than the village.",
            options: [
              { option: "busier", isCorrect: true },
              { option: "busy", isCorrect: false },
            ],
          },
          {
            question: "The subway is _____ than the bus.",
            options: [
              { option: "faster", isCorrect: true },
              { option: "more fast", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the sentences.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "My street is " },
              { blank: "quieter" },
              { text: " than downtown." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The city is " },
              { blank: "more crowded" },
              { text: " on Fridays." },
            ],
            lineBreak: true,
          },
        ],
      },
    },
    scramble: {
      showWordBank: false,
      instruction: "Unscramble the sentence.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "town / city / bigger / the / is / than / the",
            answer: "The city is bigger than the town.",
          },
          {
            prompt: "bus / faster / subway / the / is / the / than",
            answer: "The subway is faster than the bus.",
          },
        ],
      },
    },
  },
  production: {
    task: {
      instruction: "Complete the tasks:",
      type: "checkbox",
      items: [
        {
          content: ["Compare your city with another place in four sentences."],
          textarea: true,
        },
        {
          content: ["Write two questions using comparatives."],
          textarea: true,
        },
        {
          content: ["Ask a classmate which place they prefer and why."],
          textarea: false,
        },
      ],
    },
  },
};
