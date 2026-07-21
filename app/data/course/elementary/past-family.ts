export const elementaryPastFamily = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Family",
    descriptions: ["I visited my family. We had lunch together."],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to talk about past activities and describe time spent with family using the Past Simple.",
    grammar: "Past Simple",
    vocabulary: "Family members, Family activities, Celebrations",
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "relatives" }, "relatives"] },
        { as: "span", parts: [{ audio: "family lunch" }, "family lunch"] },
        { as: "span", parts: [{ audio: "birthday cake" }, "birthday cake"] },
        { as: "span", parts: [{ audio: "photo album" }, "photo album"] },
      ],
      imgs: [
        { src: "/", alt: "relatives" },
        { src: "/", alt: "family lunch" },
        { src: "/", alt: "birthday cake" },
        { src: "/", alt: "photo album" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "Daniel visiting his grandparents",
          content: [
            { audio: "Daniel visited his grandparents on Saturday." },
            "Daniel ",
            { part: "visited", type: "mark" },
            " his grandparents on Saturday. ",
            { part: "Daniel visitou os avós no sábado.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Daniel helping his grandfather",
          content: [
            { audio: "He helped his grandfather in the garden." },
            "He ",
            { part: "helped", type: "mark" },
            " his grandfather in the garden. ",
            { part: "Ele ajudou o avô no jardim.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "The family preparing lunch",
          content: [
            { audio: "His grandmother cooked a big family lunch." },
            "His grandmother ",
            { part: "cooked", type: "mark" },
            " a big family lunch. ",
            {
              part: "A avó dele preparou um grande almoço em família.",
              type: "portuguese",
            },
          ],
        },
        {
          src: "/",
          alt: "The family celebrating a birthday",
          content: [
            { audio: "They celebrated his cousin's birthday." },
            "They ",
            { part: "celebrated", type: "mark" },
            " his cousin's birthday. ",
            {
              part: "Eles comemoraram o aniversário do primo dele.",
              type: "portuguese",
            },
          ],
        },
        {
          src: "/",
          alt: "The family looking at old photographs",
          content: [
            { audio: "They looked at old family photos." },
            "They ",
            { part: "looked", type: "mark" },
            " at old family photos. ",
            {
              part: "Eles olharam fotos antigas da família.",
              type: "portuguese",
            },
          ],
        },
        {
          src: "/",
          alt: "Daniel saying goodbye to his family",
          content: [
            { audio: "Daniel hugged everyone before he left." },
            "Daniel ",
            { part: "hugged", type: "mark" },
            " everyone before he left. ",
            {
              part: "Daniel abraçou todos antes de ir embora.",
              type: "portuguese",
            },
          ],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Daniel visited his grandparents on Saturday.",
            options: [
              { option: "true", isCorrect: true },
              { option: "false", isCorrect: false },
            ],
          },
          {
            question: "The family went to a restaurant for lunch.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
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
        { speaker: "Mia", line: ["Hi Daniel. What did you do on Saturday?"] },
        { speaker: "Daniel", line: ["I visited my grandparents."] },
        { speaker: "Mia", line: ["Did you have a good time?"] },
        {
          speaker: "Daniel",
          line: ["Yes. We celebrated my cousin's birthday."],
        },
        { speaker: "Mia", line: ["What did you eat?"] },
        {
          speaker: "Daniel",
          line: ["My grandmother cooked lunch, and we had chocolate cake."],
        },
        { speaker: "Mia", line: ["Did you give your cousin a present?"] },
        { speaker: "Daniel", line: ["Yes, I gave her a book. She loved it."] },
        { speaker: "Mia", line: ["That sounds like a lovely family day."] },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Who did Daniel visit?",
            options: [
              { option: "His grandparents", isCorrect: true },
              { option: "His teacher", isCorrect: false },
            ],
          },
          {
            question: "What did the family celebrate?",
            options: [
              { option: "A cousin's birthday", isCorrect: true },
              { option: "A wedding", isCorrect: false },
            ],
          },
          {
            question: "What present did Daniel give?",
            options: [
              { option: "A book", isCorrect: true },
              { option: "A game", isCorrect: false },
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
          "Use the ",
          { part: "Past Simple", type: "bold" },
          " to talk about finished actions in the past.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "Regular verbs usually end in ",
          { part: "-ed", type: "bold" },
          ": watched, played, visited.",
        ],
      },
      {
        as: "p",
        parts: [
          "Some verbs are irregular: go ",
          { part: "➜ went", type: "bold" },
          ", have ",
          { part: "➜ had", type: "bold" },
          ", eat ",
          { part: "➜ ate", type: "bold" },
          ".",
        ],
      },
    ],
    columnQuestions: {
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
                { audio: "I visited my grandparents." },
                "I visited my grandparents.",
              ],
            },
            {
              parts: [
                { audio: "I went with my parents." },
                "I went with my parents.",
              ],
            },
            {
              parts: [
                { audio: "We had a family lunch." },
                "We had a family lunch.",
              ],
            },
            { parts: [{ audio: "Yes, we had fun." }, "Yes, we had fun."] },
          ],
        },
      ],
    },
    columnVerbs: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "/t/",
          items: [
            {
              as: "span",
              parts: [
                { audio: "watch" },
                "watch ➜ ",
                { audio: "watched" },
                "watch",
                { part: "ed", type: "bold" },
                " ",
                { part: "/t/", type: "phonetics" },
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "/d/",
          items: [
            {
              as: "span",
              parts: [
                { audio: "play" },
                "play ➜ ",
                { audio: "played" },
                "play",
                { part: "ed", type: "bold" },
                " ",
                { part: "/d/", type: "phonetics" },
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "/ɪd/",
          items: [
            {
              as: "span",
              parts: [
                { audio: "visit" },
                "visit ➜ ",
                { audio: "visited" },
                "visit",
                { part: "ed", type: "bold" },
                " ",
                { part: "/ɪd/", type: "phonetics" },
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
          "Don't say: Did you ",
          { part: "went", type: "bold" },
          "? Say: Did you ",
          { part: "go", type: "bold" },
          "?",
        ],
      },
    ],
    ccq: [
      {
        parts: [
          'In the sentence: "Daniel visited his grandparents on Saturday."',
        ],
      },
      { parts: ["Are we talking about the past or the future?"] },
      { parts: ["Is the action finished?"] },
      { parts: ["After did, do we use the base verb or the past form?"] },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "We _____ my aunt's birthday yesterday.",
            options: [
              { option: "celebrated", isCorrect: true },
              { option: "celebrate", isCorrect: false },
            ],
          },
          {
            question: "My uncle _____ us an old photo.",
            options: [
              { option: "showed", isCorrect: true },
              { option: "show", isCorrect: false },
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
              { text: "Daniel " },
              { blank: "visited" },
              { text: " his grandparents." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "His grandmother " },
              { blank: "cooked" },
              { text: " lunch." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "They " },
              { blank: "looked" },
              { text: " at family photos." },
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
            prompt: "grandparents / visited / my / I",
            answer: "I visited my grandparents.",
          },
          {
            prompt: "lunch / family / had / we / a",
            answer: "We had a family lunch.",
          },
          {
            prompt: "birthday / celebrated / they / a",
            answer: "They celebrated a birthday.",
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
          content: [
            "Write five sentences about a special day with your family.",
          ],
          textarea: true,
        },
        {
          content: ["Write three Past Simple questions and answer them."],
          textarea: true,
        },
        {
          content: [
            "Interview a classmate about a special day with your family.",
          ],
        },
      ],
    },
  },
};
