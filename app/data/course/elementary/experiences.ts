export const elementaryExperiences = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Experiences",
    descriptions: [
      "I have visited another country.",
      "Have you ever tried sushi?",
    ],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to talk about life experiences, describe things they have done, ask about experiences, and use the Present Perfect correctly in basic situations.",
    grammar: "Present Perfect (basic)",
    vocabulary: "Life experiences",
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "abroad" }, "abroad"] },
        { as: "span", parts: [{ audio: "adventure" }, "adventure"] },
        { as: "span", parts: [{ audio: "concert" }, "concert"] },
        {
          as: "span",
          parts: [{ audio: "traditional food" }, "traditional food"],
        },
      ],
      imgs: [
        { src: "/", alt: "abroad" },
        { src: "/", alt: "adventure" },
        { src: "/", alt: "concert" },
        { src: "/", alt: "traditional food" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "A traveler looking at a world map",
          content: [
            { audio: "Eva has visited three countries." },
            "Eva has visited three countries.",
            " (Eva visitou três países.)",
          ],
        },
        {
          src: "/",
          alt: "Different traditional foods",
          content: [
            { audio: "She has tried many traditional foods." },
            "She has tried many traditional foods.",
            " (Ela experimentou muitas comidas tradicionais.)",
          ],
        },
        {
          src: "/",
          alt: "A traveler with friends",
          content: [
            { audio: "She has never traveled alone." },
            "She has never traveled alone.",
            " (Ela nunca viajou sozinha.)",
          ],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Which country has Max visited?",
            options: [
              { option: "Chile", isCorrect: true },
              { option: "Peru", isCorrect: false },
            ],
          },
          {
            question: "Has Max tried curanto?",
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
        { speaker: "Eva", line: ["Have you ever traveled abroad?"] },
        { speaker: "Max", line: ["Yes, I have. I have visited Chile."] },
        { speaker: "Eva", line: ["Have you ever tried Chilean food?"] },
        {
          speaker: "Max",
          line: ["Yes, I have, but I have never tried curanto."],
        },
        { speaker: "Eva", line: ["Have you ever traveled alone?"] },
        {
          speaker: "Max",
          line: ["No, I haven't. I usually travel with my family."],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Which country has Max visited?",
            options: [
              { option: "Chile", isCorrect: true },
              { option: "Peru", isCorrect: false },
            ],
          },
          {
            question: "Has Max tried curanto?",
            options: [
              { option: "No", isCorrect: true },
              { option: "Yes", isCorrect: false },
            ],
          },
          {
            question: "Who does Max travel with?",
            options: [
              { option: "His family", isCorrect: true },
              { option: "He travels alone", isCorrect: false },
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
          { part: "Present Perfect (basic)", type: "bold" },
          " talks about life experiences when the exact time is not important.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "",
          "Use have/has + past participle; ever asks about any time and never means at no time.",
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
            {
              parts: [
                { audio: "I have traveled abroad." },
                "I have traveled abroad.",
              ],
            },
            {
              parts: [
                { audio: "She has tried sushi." },
                "She has tried sushi.",
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
                { audio: "I haven't been there." },
                "I haven't been there.",
              ],
            },
            {
              parts: [{ audio: "He has never flown." }, "He has never flown."],
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
                { audio: "Have you ever traveled?" },
                "Have you ever traveled?",
              ],
            },
            { parts: [{ audio: "Has she tried it?" }, "Has she tried it?"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: ["Use the past participle: go → gone, see → seen, eat → eaten."],
      },
    ],
    ccq: [
      { as: "p", parts: ["Is the exact past time important?"] },
      { as: "p", parts: ["Do we use have with I and you?"] },
      { as: "p", parts: ["Does never describe zero experiences?"] },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "She _____ visited Argentina.",
            options: [
              { option: "has", isCorrect: true },
              { option: "have", isCorrect: false },
            ],
          },
          {
            question: "Have you ever _____ sushi?",
            options: [
              { option: "eaten", isCorrect: true },
              { option: "ate", isCorrect: false },
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
              { text: "I have " },
              { blank: "seen" },
              { text: " that movie." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "He has never " },
              { blank: "flown" },
              { text: " in a plane." },
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
            prompt: "ever / you / traveled / have / abroad",
            answer: "Have you ever traveled abroad?",
          },
          {
            prompt: "never / she / sushi / has / tried",
            answer: "She has never tried sushi.",
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
          content: ["Write five sentences about your life experiences."],
          textarea: true,
        },
        { content: ["Write three Have you ever questions."], textarea: true },
        {
          content: ["Interview a classmate about new experiences."],
          textarea: false,
        },
      ],
    },
  },
};
