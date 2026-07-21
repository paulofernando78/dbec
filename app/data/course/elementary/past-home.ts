export const elementaryPastHome = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Home",
    descriptions: ["I stayed at home. I cleaned and relaxed."],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to talk about past activities and describe what they did at home using the Past Simple.",
    grammar: "Past Simple",
    vocabulary: "Household chores, Activities at home, Free-time activities",
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "laundry" }, "laundry"] },
        { as: "span", parts: [{ audio: "vacuum cleaner" }, "vacuum cleaner"] },
        { as: "span", parts: [{ audio: "living room" }, "living room"] },
        { as: "span", parts: [{ audio: "takeout" }, "takeout"] },
      ],
      imgs: [
        { src: "/", alt: "laundry" },
        { src: "/", alt: "vacuum cleaner" },
        { src: "/", alt: "living room" },
        { src: "/", alt: "takeout" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "Nina staying at home on a rainy Saturday",
          content: [
            { audio: "Nina stayed at home on Saturday." },
            "Nina ",
            { part: "stayed", type: "mark" },
            " at home on Saturday. ",
            { part: "Nina ficou em casa no sábado.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Nina doing the laundry",
          content: [
            { audio: "She did the laundry in the morning." },
            "She ",
            { part: "did", type: "mark" },
            " the laundry in the morning. ",
            { part: "Ela lavou a roupa de manhã.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Nina cleaning the living room",
          content: [
            { audio: "She vacuumed the living room." },
            "She ",
            { part: "vacuumed", type: "mark" },
            " the living room. ",
            { part: "Ela aspirou a sala de estar.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Nina cooking soup",
          content: [
            { audio: "She made soup for lunch." },
            "She ",
            { part: "made", type: "mark" },
            " soup for lunch. ",
            { part: "Ela fez sopa para o almoço.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Nina reading on the sofa",
          content: [
            { audio: "She read a book on the sofa." },
            "She ",
            { part: "read", type: "mark" },
            " a book on the sofa. ",
            { part: "Ela leu um livro no sofá.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Nina calling her friend",
          content: [
            {
              audio: "In the evening, she called a friend and ordered takeout.",
            },
            "In the evening, she ",
            { part: "called", type: "mark" },
            " a friend and ordered takeout. ",
            {
              part: "À noite, ela ligou para uma amiga e pediu comida.",
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
            question: "Nina stayed at home on Saturday.",
            options: [
              { option: "true", isCorrect: true },
              { option: "false", isCorrect: false },
            ],
          },
          {
            question: "Nina ate lunch at a restaurant.",
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
      prompt: "Listen and read.",
      audioSrc: "/",
      lines: [
        { speaker: "Nina", line: ["Hi Leo. How was your weekend?"] },
        { speaker: "Leo", line: ["Busy! I went out all day. What about you?"] },
        { speaker: "Nina", line: ["I stayed at home because it rained."] },
        { speaker: "Leo", line: ["What did you do at home?"] },
        {
          speaker: "Nina",
          line: ["I did the laundry and cleaned the living room."],
        },
        { speaker: "Leo", line: ["Did you relax too?"] },
        {
          speaker: "Nina",
          line: ["Yes. I read a book and listened to music."],
        },
        { speaker: "Leo", line: ["What did you have for dinner?"] },
        { speaker: "Nina", line: ["I ordered takeout and called a friend."] },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Why did Nina stay home?",
            options: [
              { option: "Because it rained", isCorrect: true },
              { option: "Because she was sick", isCorrect: false },
            ],
          },
          {
            question: "What room did Nina clean?",
            options: [
              { option: "The living room", isCorrect: true },
              { option: "The bathroom", isCorrect: false },
            ],
          },
          {
            question: "What did Nina do to relax?",
            options: [
              { option: "She read a book", isCorrect: true },
              { option: "She played soccer", isCorrect: false },
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
            { parts: [{ audio: "I stayed at home." }, "I stayed at home."] },
            { parts: [{ audio: "I was alone." }, "I was alone."] },
            {
              parts: [
                { audio: "I cleaned the living room." },
                "I cleaned the living room.",
              ],
            },
            { parts: [{ audio: "Yes, I relaxed." }, "Yes, I relaxed."] },
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
      { parts: ['In the sentence: "Nina stayed at home on Saturday."'] },
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
            question: "Yesterday I _____ the laundry.",
            options: [
              { option: "did", isCorrect: true },
              { option: "do", isCorrect: false },
            ],
          },
          {
            question: "She _____ soup for lunch.",
            options: [
              { option: "made", isCorrect: true },
              { option: "make", isCorrect: false },
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
              { text: "Nina " },
              { blank: "stayed" },
              { text: " at home." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "She " },
              { blank: "vacuumed" },
              { text: " the living room." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "She " },
              { blank: "ordered" },
              { text: " takeout." },
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
          { prompt: "home / stayed / at / I", answer: "I stayed at home." },
          {
            prompt: "laundry / did / the / she",
            answer: "She did the laundry.",
          },
          { prompt: "book / read / a / we", answer: "We read a book." },
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
          content: ["Write five sentences about a day you stayed at home."],
          textarea: true,
        },
        {
          content: ["Write three Past Simple questions and answer them."],
          textarea: true,
        },
        { content: ["Interview a classmate about a day you stayed at home."] },
      ],
    },
  },
};
