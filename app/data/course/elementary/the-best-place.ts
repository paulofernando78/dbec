export const elementaryTheBestPlace = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "The Best Place",
    descriptions: [
      "This is the most beautiful beach.",
      "It is the best place to relax.",
    ],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to describe the best and worst places, compare multiple options, express preferences, and use superlative adjectives correctly.",
    grammar: "Superlatives",
    vocabulary: "Travel destinations",
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "view" }, "view"] },
        { as: "span", parts: [{ audio: "waterfall" }, "waterfall"] },
        { as: "span", parts: [{ audio: "historic" }, "historic"] },
        { as: "span", parts: [{ audio: "peaceful" }, "peaceful"] },
      ],
      imgs: [
        { src: "/", alt: "view" },
        { src: "/", alt: "waterfall" },
        { src: "/", alt: "historic" },
        { src: "/", alt: "peaceful" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "A peaceful beach at sunset",
          content: [
            { audio: "Sunset Beach is the most peaceful place on the island." },
            "Sunset Beach is the most peaceful place on the island.",
            " (Sunset Beach é o lugar mais tranquilo da ilha.)",
          ],
        },
        {
          src: "/",
          alt: "A wide view from a mountain",
          content: [
            { audio: "Blue Mountain has the best view." },
            "Blue Mountain has the best view.",
            " (Blue Mountain tem a melhor vista.)",
          ],
        },
        {
          src: "/",
          alt: "Historic buildings in an old town",
          content: [
            { audio: "Old Town is the most historic area." },
            "Old Town is the most historic area.",
            " (Old Town é a região mais histórica.)",
          ],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Which place is the most beautiful for Sam?",
            options: [
              { option: "Blue Mountain", isCorrect: true },
              { option: "Old Town", isCorrect: false },
            ],
          },
          {
            question: "Which place has the best view?",
            options: [
              { option: "Blue Mountain", isCorrect: true },
              { option: "Sunset Beach", isCorrect: false },
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
        { speaker: "Lia", line: ["What is the best place to visit here?"] },
        {
          speaker: "Sam",
          line: ["I think Blue Mountain is the most beautiful."],
        },
        { speaker: "Lia", line: ["Is it difficult to get there?"] },
        {
          speaker: "Sam",
          line: ["Yes, but it has the best view in the region."],
        },
        { speaker: "Lia", line: ["What is the easiest place to visit?"] },
        { speaker: "Sam", line: ["Old Town. It is the closest attraction."] },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Which place is the most beautiful for Sam?",
            options: [
              { option: "Blue Mountain", isCorrect: true },
              { option: "Old Town", isCorrect: false },
            ],
          },
          {
            question: "Which place has the best view?",
            options: [
              { option: "Blue Mountain", isCorrect: true },
              { option: "Sunset Beach", isCorrect: false },
            ],
          },
          {
            question: "Which attraction is the closest?",
            options: [
              { option: "Old Town", isCorrect: true },
              { option: "Blue Mountain", isCorrect: false },
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
          { part: "Superlatives", type: "bold" },
          " identifies one person, place, or thing as number one in a group.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: ["", "Use the + adjective-est or the most + adjective."],
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
            { parts: [{ audio: "the tallest" }, "the tallest"] },
            { parts: [{ audio: "the easiest" }, "the easiest"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Long adjectives",
          items: [
            { parts: [{ audio: "the most beautiful" }, "the most beautiful"] },
            { parts: [{ audio: "the most peaceful" }, "the most peaceful"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Irregular",
          items: [
            { parts: [{ audio: "good → the best" }, "good → the best"] },
            { parts: [{ audio: "bad → the worst" }, "bad → the worst"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: ["Use the before a superlative: It is the best place."],
      },
    ],
    ccq: [
      { as: "p", parts: ["Are we comparing two places or a whole group?"] },
      { as: "p", parts: ["Is the best place number one?"] },
      { as: "p", parts: ["Do we say the most beautiful or the beautifulest?"] },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "This is _____ restaurant in town.",
            options: [
              { option: "the best", isCorrect: true },
              { option: "the better", isCorrect: false },
            ],
          },
          {
            question: "It is _____ beach on the island.",
            options: [
              { option: "the most peaceful", isCorrect: true },
              { option: "the peacefulest", isCorrect: false },
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
              { text: "That is " },
              { blank: "the tallest" },
              { text: " building here." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "June is " },
              { blank: "the busiest" },
              { text: " month." },
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
            prompt: "best / this / place / the / is",
            answer: "This is the best place.",
          },
          {
            prompt: "most / city / beautiful / the / is / it",
            answer: "It is the most beautiful city.",
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
          content: ["Describe the best place in your region."],
          textarea: true,
        },
        {
          content: ["Write three superlative sentences about places."],
          textarea: true,
        },
        { content: ["Recommend one place to a classmate."], textarea: false },
      ],
    },
  },
};
