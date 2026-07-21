export const elementaryHobbies = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Hobbies",
    descriptions: ["I enjoy taking photos.", "I'd like to learn to paint."],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to describe hobbies they enjoy and would like to try using a small taught set of verb patterns.",
    grammar: "Gerunds & Infinitives",
    vocabulary: "Hobbies",
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "photography" }, "photography"] },
        { as: "span", parts: [{ audio: "gardening" }, "gardening"] },
        { as: "span", parts: [{ audio: "painting" }, "painting"] },
        { as: "span", parts: [{ audio: "board games" }, "board games"] },
      ],
      imgs: [
        { src: "/", alt: "photography" },
        { src: "/", alt: "gardening" },
        { src: "/", alt: "painting" },
        { src: "/", alt: "board games" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "A person taking photographs in a park",
          content: [
            { audio: "Kai enjoys taking photos in the park." },
            "Kai enjoys taking photos in the park.",
            " (Kai gosta de tirar fotos no parque.)",
          ],
        },
        {
          src: "/",
          alt: "A beginner painting on a canvas",
          content: [
            { audio: "He wants to learn to paint." },
            "He wants to learn to paint.",
            " (Ele quer aprender a pintar.)",
          ],
        },
        {
          src: "/",
          alt: "Friends playing a board game",
          content: [
            { audio: "His friends like playing board games." },
            "His friends like playing board games.",
            " (Os amigos dele gostam de jogar jogos de tabuleiro.)",
          ],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What does Nora love doing?",
            options: [
              { option: "Gardening and cooking", isCorrect: true },
              { option: "Running and swimming", isCorrect: false },
            ],
          },
          {
            question: "What would Nora like to learn?",
            options: [
              { option: "To play the guitar", isCorrect: true },
              { option: "To paint", isCorrect: false },
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
        { speaker: "Kai", line: ["What do you like doing in your free time?"] },
        { speaker: "Nora", line: ["I love gardening and cooking."] },
        { speaker: "Kai", line: ["Would you like to try a new hobby?"] },
        {
          speaker: "Nora",
          line: ["Yes. I'd like to learn to play the guitar."],
        },
        { speaker: "Kai", line: ["I want to learn to paint."] },
        { speaker: "Nora", line: ["We could take an art class together."] },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What does Nora love doing?",
            options: [
              { option: "Gardening and cooking", isCorrect: true },
              { option: "Running and swimming", isCorrect: false },
            ],
          },
          {
            question: "What would Nora like to learn?",
            options: [
              { option: "To play the guitar", isCorrect: true },
              { option: "To paint", isCorrect: false },
            ],
          },
          {
            question: "What class could they take?",
            options: [
              { option: "An art class", isCorrect: true },
              { option: "A dance class", isCorrect: false },
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
          { part: "Gerunds & Infinitives", type: "bold" },
          " uses verb + -ing after enjoy, love, and like to describe activities.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "",
          "Use to + base verb after want and would like to describe wishes and plans.",
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
          column: "Verb + -ing",
          items: [
            { parts: [{ audio: "I enjoy reading." }, "I enjoy reading."] },
            { parts: [{ audio: "She loves dancing." }, "She loves dancing."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Verb + to",
          items: [
            { parts: [{ audio: "I want to paint." }, "I want to paint."] },
            {
              parts: [{ audio: "We'd like to learn." }, "We'd like to learn."],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Questions",
          items: [
            {
              parts: [
                { audio: "What do you enjoy doing?" },
                "What do you enjoy doing?",
              ],
            },
            {
              parts: [
                { audio: "What would you like to try?" },
                "What would you like to try?",
              ],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Say enjoy reading, but want to read. The pattern depends on the first verb.",
        ],
      },
    ],
    ccq: [
      { as: "p", parts: ["After enjoy, do we use read or reading?"] },
      { as: "p", parts: ["After want, do we use to + verb?"] },
      { as: "p", parts: ["Is a hobby a free-time activity?"] },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "I enjoy _____ photos.",
            options: [
              { option: "taking", isCorrect: true },
              { option: "to take", isCorrect: false },
            ],
          },
          {
            question: "She wants _____ the guitar.",
            options: [
              { option: "to learn", isCorrect: true },
              { option: "learning", isCorrect: false },
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
              { text: "They love " },
              { blank: "playing" },
              { text: " board games." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "I'd like " },
              { blank: "to try" },
              { text: " gardening." },
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
            prompt: "enjoy / photos / taking / I",
            answer: "I enjoy taking photos.",
          },
          {
            prompt: "learn / wants / paint / to / she / to",
            answer: "She wants to learn to paint.",
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
        { content: ["Describe three hobbies you enjoy."], textarea: true },
        {
          content: ["Write about two hobbies you would like to try."],
          textarea: true,
        },
        {
          content: ["Interview a classmate about their free-time activities."],
          textarea: false,
        },
      ],
    },
  },
};
