export const elementaryRules = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Rules",
    descriptions: ["You must wear a helmet.", "We have to arrive on time."],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to talk about obligations and rules, describe responsibilities, explain what is necessary or prohibited, and use 'must' and 'have to' correctly.",
    grammar: "Must / Have to",
    vocabulary: "Rules and obligations",
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "helmet" }, "helmet"] },
        { as: "span", parts: [{ audio: "uniform" }, "uniform"] },
        { as: "span", parts: [{ audio: "permission" }, "permission"] },
        { as: "span", parts: [{ audio: "prohibited" }, "prohibited"] },
      ],
      imgs: [
        { src: "/", alt: "helmet" },
        { src: "/", alt: "uniform" },
        { src: "/", alt: "permission" },
        { src: "/", alt: "prohibited" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "A visitor showing identification",
          content: [
            { audio: "Visitors must show identification." },
            "Visitors must show identification.",
            " (Visitantes devem mostrar identificação.)",
          ],
        },
        {
          src: "/",
          alt: "Employees wearing uniforms",
          content: [
            { audio: "Employees have to wear a uniform." },
            "Employees have to wear a uniform.",
            " (Funcionários precisam usar uniforme.)",
          ],
        },
        {
          src: "/",
          alt: "A no photography sign",
          content: [
            { audio: "You mustn't take photos here." },
            "You mustn't take photos here.",
            " (Você não pode tirar fotos aqui.)",
          ],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What must visitors wear?",
            options: [
              { option: "Safety glasses", isCorrect: true },
              { option: "A hat", isCorrect: false },
            ],
          },
          {
            question: "Can visitors eat in the lab?",
            options: [
              { option: "No", isCorrect: true },
              { option: "Yes", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      prompt: "Listen and read.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Guide",
          line: ["Welcome to the science lab. There are some rules."],
        },
        { speaker: "Leo", line: ["Do we have to wear safety glasses?"] },
        { speaker: "Guide", line: ["Yes, you must wear them at all times."] },
        { speaker: "Leo", line: ["Can we bring food inside?"] },
        {
          speaker: "Guide",
          line: ["No. You mustn't eat or drink in the lab."],
        },
        { speaker: "Leo", line: ["Do we have to turn off our phones?"] },
        {
          speaker: "Guide",
          line: ["Yes, and you have to follow the instructor."],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What must visitors wear?",
            options: [
              { option: "Safety glasses", isCorrect: true },
              { option: "A hat", isCorrect: false },
            ],
          },
          {
            question: "Can visitors eat in the lab?",
            options: [
              { option: "No", isCorrect: true },
              { option: "Yes", isCorrect: false },
            ],
          },
          {
            question: "Who must visitors follow?",
            options: [
              { option: "The instructor", isCorrect: true },
              { option: "Another visitor", isCorrect: false },
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
          { part: "Must / Have to", type: "bold" },
          " and have to express obligation.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "",
          "Mustn't means something is prohibited; don't have to means it is not necessary.",
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
          column: "Must",
          items: [
            {
              parts: [
                { audio: "You must be careful." },
                "You must be careful.",
              ],
            },
            { parts: [{ audio: "You must show ID." }, "You must show ID."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Have to",
          items: [
            {
              parts: [
                { audio: "We have to leave now." },
                "We have to leave now.",
              ],
            },
            { parts: [{ audio: "She has to work." }, "She has to work."] },
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
                { audio: "You mustn't park here." },
                "You mustn't park here.",
              ],
            },
            {
              parts: [
                { audio: "You don't have to pay." },
                "You don't have to pay.",
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
          "Mustn't and don't have to are different: prohibited versus not necessary.",
        ],
      },
    ],
    ccq: [
      { as: "p", parts: ["Is a rule optional?"] },
      { as: "p", parts: ["Does mustn't mean prohibited?"] },
      { as: "p", parts: ["Does don't have to mean you can choose?"] },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "You _____ use your phone during the test.",
            options: [
              { option: "mustn't", isCorrect: true },
              { option: "don't have to", isCorrect: false },
            ],
          },
          {
            question: "She _____ wear a uniform at work.",
            options: [
              { option: "has to", isCorrect: true },
              { option: "have to", isCorrect: false },
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
              { text: "Visitors " },
              { blank: "must" },
              { text: " show identification." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "We " },
              { blank: "have to" },
              { text: " arrive on time." },
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
            prompt: "helmet / wear / must / a / you",
            answer: "You must wear a helmet.",
          },
          {
            prompt: "to / we / early / have / leave",
            answer: "We have to leave early.",
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
          content: ["Write five rules for a classroom or workplace."],
          textarea: true,
        },
        {
          content: ["Explain what visitors must and mustn't do."],
          textarea: true,
        },
        { content: ["Compare rules with a classmate."], textarea: false },
      ],
    },
  },
};
