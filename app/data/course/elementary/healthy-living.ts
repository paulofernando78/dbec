export const elementaryHealthyLiving = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Healthy Living",
    descriptions: [
      "You should drink more water.",
      "You shouldn't skip breakfast.",
    ],
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "balanced diet" }, "balanced diet"] },
        { as: "span", parts: [{ audio: "exercise" }, "exercise"] },
        { as: "span", parts: [{ audio: "sleep" }, "sleep"] },
        { as: "span", parts: [{ audio: "stress" }, "stress"] },
      ],
      imgs: [
        { src: "/", alt: "balanced diet" },
        { src: "/", alt: "exercise" },
        { src: "/", alt: "sleep" },
        { src: "/", alt: "stress" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "A tired woman in the morning",
          content: [
            { audio: "Maya feels tired every morning." },
            "Maya feels tired every morning.",
            " (Maya se sente cansada todas as manhãs.)",
          ],
        },
        {
          src: "/",
          alt: "A clock beside a bed",
          content: [
            { audio: "She should go to bed earlier." },
            "She should go to bed earlier.",
            " (Ela deveria dormir mais cedo.)",
          ],
        },
        {
          src: "/",
          alt: "A healthy balanced breakfast",
          content: [
            { audio: "She should eat a balanced breakfast." },
            "She should eat a balanced breakfast.",
            " (Ela deveria tomar um café da manhã equilibrado.)",
          ],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "How does Maya feel?",
            options: [
              { option: "Tired", isCorrect: true },
              { option: "Energetic", isCorrect: false },
            ],
          },
          {
            question: "What should Maya do?",
            options: [
              { option: "Go to bed earlier", isCorrect: true },
              { option: "Stay up later", isCorrect: false },
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
        { speaker: "Maya", line: ["I feel tired all the time."] },
        { speaker: "Noah", line: ["What time do you go to bed?"] },
        { speaker: "Maya", line: ["Usually after midnight."] },
        { speaker: "Noah", line: ["You should go to bed earlier."] },
        { speaker: "Maya", line: ["I also skip breakfast."] },
        {
          speaker: "Noah",
          line: ["You shouldn't skip it. You should eat something healthy."],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "How does Maya feel?",
            options: [
              { option: "Tired", isCorrect: true },
              { option: "Energetic", isCorrect: false },
            ],
          },
          {
            question: "What should Maya do?",
            options: [
              { option: "Go to bed earlier", isCorrect: true },
              { option: "Stay up later", isCorrect: false },
            ],
          },
          {
            question: "What shouldn't Maya skip?",
            options: [
              { option: "Breakfast", isCorrect: true },
              { option: "Exercise", isCorrect: false },
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
          { part: "Should", type: "bold" },
          " gives advice and recommendations.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "",
          "Use should + base verb; use shouldn't + base verb for negative advice.",
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
          column: "Positive",
          items: [
            { parts: [{ audio: "You should rest." }, "You should rest."] },
            {
              parts: [
                { audio: "She should exercise." },
                "She should exercise.",
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Negative",
          items: [
            {
              parts: [
                { audio: "You shouldn't smoke." },
                "You shouldn't smoke.",
              ],
            },
            {
              parts: [
                { audio: "He shouldn't skip lunch." },
                "He shouldn't skip lunch.",
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Question",
          items: [
            {
              parts: [
                { audio: "Should I see a doctor?" },
                "Should I see a doctor?",
              ],
            },
            { parts: [{ audio: "What should I eat?" }, "What should I eat?"] },
          ],
        },
      ],
    },
    notes: [
      { as: "p", parts: ["Do not use to after should: You should exercise."] },
    ],
    ccq: [
      { as: "p", parts: ["Is should an order or advice?"] },
      { as: "p", parts: ["After should, do we use the base verb?"] },
      { as: "p", parts: ["Does shouldn't mean it is a good idea?"] },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "You _____ drink more water.",
            options: [
              { option: "should", isCorrect: true },
              { option: "should to", isCorrect: false },
            ],
          },
          {
            question: "You _____ eat so much sugar.",
            options: [
              { option: "shouldn't", isCorrect: true },
              { option: "should", isCorrect: false },
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
              { text: "You " },
              { blank: "should" },
              { text: " sleep eight hours." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "He " },
              { blank: "shouldn't" },
              { text: " skip breakfast." },
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
            prompt: "should / more / water / drink / you",
            answer: "You should drink more water.",
          },
          {
            prompt: "late / shouldn't / eat / she",
            answer: "She shouldn't eat late.",
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
        { content: ["Write five tips for a healthy week."], textarea: true },
        {
          content: ["Give advice to someone who feels tired."],
          textarea: true,
        },
        {
          content: ["Compare health habits with a classmate."],
          textarea: false,
        },
      ],
    },
  },
};
