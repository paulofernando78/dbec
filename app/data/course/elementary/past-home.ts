
export const elementaryPastHome = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "A Weekend at Home",
    descriptions: ["I stayed at home. I cleaned, relaxed, and didn't go out."],
  },
  introduction: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
      instruction:
        "Look at the pictures. What kind of day did Nina have? Then listen and check.",
      imgs: [
        {
          src: "/assets/img/home/home-me.png",
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
          src: "/assets/img/home/home-me.png",
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
          src: "/assets/img/home/home-me.png",
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
          src: "/assets/img/course/a1/woman-eat-dinner.png",
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
          src: "/assets/img/course/a1/man-study-home.png",
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
          src: "/assets/img/course/a1/man-watch-tv-evening.png",
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
      },
      {
        type: "radio",
        ...{
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
      }
    ],
  },
  presentation: {
    blocks: [
      {
        type: "dialogue",
        ...{
      instruction:
        "Listen once. Was Nina's weekend busy, relaxing, or both? Then listen again for details.",
      audioSrc: "",
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
      },
      {
        type: "radio",
        ...{
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
          "Use the ",
          { part: "Past Simple", type: "bold" },
          " for activities that started and finished in the past.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "Positive: I ",
          { part: "cleaned", type: "bold" },
          " the living room. Negative: I ",
          { part: "didn't clean", type: "bold" },
          " the kitchen.",
        ],
      },
      {
        as: "p",
        parts: [
          "After ",
          { part: "didn't", type: "bold" },
          ", use the base verb: didn't cook, didn't go, didn't watch.",
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
          column: "Ask",
          items: [
            {
              parts: [{ part: "Did", type: "bold" }, " + subject + base verb:"],
            },
            { type: "spacer" },
            {
              parts: [
                { audio: "What did you do at home?" },
                "What did you do at home?",
              ],
            },
            {
              parts: [
                { audio: "Did you do any housework?" },
                "Did you do any housework?",
              ],
            },
            { parts: [{ audio: "Did you cook?" }, "Did you cook?"] },
            { parts: [{ audio: "Did you relax?" }, "Did you relax?"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Answer",
          items: [
            { parts: [{ audio: "I stayed at home." }, "I stayed at home."] },
            {
              parts: [
                { audio: "I cleaned the living room." },
                "I cleaned the living room.",
              ],
            },
            { parts: [{ audio: "No, I didn't cook." }, "No, I didn't cook."] },
            {
              parts: [{ audio: "Yes, I read a book." }, "Yes, I read a book."],
            },
          ],
        },
      ],
    },
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
      },
      {
        type: "notes",
        value: [
      {
        as: "p",
        parts: [
          "Don't say: I didn't ",
          { part: "cooked", type: "bold" },
          ". Say: I didn't ",
          { part: "cook", type: "bold" },
          ".",
        ],
      },
      {
        as: "p",
        parts: [
          "Use the Past Simple for completed activities at home. Add a time reference or detail: on Saturday, in the morning, or after lunch.",
        ],
      },
    ],
      },
      {
        type: "ccq",
        value: [
      {
        parts: ["Is Nina's Saturday finished now?"],
        options: [
          { option: "Yes", isCorrect: true },
          { option: "No", isCorrect: false },
        ],
      },
      {
        parts: ["In 'I didn't cook', did I cook?"],
        options: [
          { option: "No", isCorrect: true },
          { option: "Yes", isCorrect: false },
        ],
      },
      {
        parts: ["After didn't, do we use cook or cooked?"],
        options: [
          { option: "cook", isCorrect: true },
          { option: "cooked", isCorrect: false },
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
            question: "Yesterday I _____ the laundry.",
            options: [
              { option: "did", isCorrect: true },
              { option: "do", isCorrect: false },
            ],
          },
          {
            question: "She _____ dinner because she ordered takeout.",
            options: [
              { option: "didn't make", isCorrect: true },
              { option: "didn't made", isCorrect: false },
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
              { blank: "didn't cook" },
              { text: " dinner; she ordered takeout." },
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
          { prompt: "home / stayed / at / I", answer: "I stayed at home." },
          {
            prompt: "laundry / did / the / she",
            answer: "She did the laundry.",
          },
          { prompt: "book / read / a / we", answer: "We read a book." },
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
        instruction: "Compare two weekends at home:",
        listType: "checkbox",
        items: [
        {
          content: [
            "Prepare four true or invented details: two things you did and two things you didn't do.",
          ],
          textarea: true,
        },
        {
          content: [
            "Interview a partner. Ask at least three follow-up questions with Did you…?",
          ],
        },
        {
          content: [
            "Find two similarities or differences, then report them to the class.",
          ],
        },
      ],
      }
    ],
  },
};
