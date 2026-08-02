
export const elementaryPastFamily = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "A Family Celebration",
    descriptions: ["First we prepared lunch. Then we celebrated a birthday."],
  },
  introduction: {
    storyCarousel: {
      instruction:
        "Look at the pictures. What did the family celebrate? Then listen and check.",
      imgs: [
        {
          src: "/assets/img/course/a1/more-family-members/introduction/extended-family.png",
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
          src: "/assets/img/course/a1/more-family-members/introduction/extended-family.png",
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
          src: "/assets/img/course/a1/Lauras-birthday.png",
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
          src: "/assets/img/course/a1/Lauras-birthday.png",
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
          src: "/assets/img/course/a1/my-family/presentation/laura-liz-photo-album.avif",
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
          src: "/assets/img/course/a1/more-family-members/introduction/extended-family.png",
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
      instruction:
        "Listen once. Was Daniel's visit an ordinary day or a celebration? Then listen again for details.",
      audioSrc: "",
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
          "A clear story gives events in ",
          { part: "chronological order", type: "bold" },
          ": beginning, middle, and end.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "Use ",
          { part: "first, then, after that", type: "bold" },
          ", and ",
          { part: "finally", type: "bold" },
          " to help the listener follow the story.",
        ],
      },
      {
        as: "p",
        parts: [
          "Use Past Simple verbs for the events: visited, helped, cooked, had, gave, and left.",
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
          column: "Keep the story going",
          items: [
            {
              parts: [{ part: "Follow-up questions", type: "bold" }],
            },
            { type: "spacer" },
            {
              parts: [
                { audio: "What happened first?" },
                "What happened first?",
              ],
            },
            {
              parts: [{ audio: "What happened next?" }, "What happened next?"],
            },
            { parts: [{ audio: "Who was there?" }, "Who was there?"] },
            {
              parts: [
                { audio: "How did everyone feel?" },
                "How did everyone feel?",
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Tell the story",
          items: [
            {
              parts: [
                { audio: "First, I visited my grandparents." },
                "First, I visited my grandparents.",
              ],
            },
            {
              parts: [
                { audio: "Then, we prepared lunch." },
                "Then, we prepared lunch.",
              ],
            },
            {
              parts: [
                { audio: "After that, we celebrated a birthday." },
                "After that, we celebrated a birthday.",
              ],
            },
            {
              parts: [
                { audio: "Finally, I hugged everyone and left." },
                "Finally, I hugged everyone and left.",
              ],
            },
          ],
        },
      ],
    },
    columnVerbs: {
      width: 260,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Story stage",
          items: [
            { parts: [{ part: "Beginning", type: "bold" }] },
            { parts: [{ part: "Next event", type: "bold" }] },
            { parts: [{ part: "Later event", type: "bold" }] },
            { parts: [{ part: "Ending", type: "bold" }] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Sequencer",
          items: [
            { parts: [{ audio: "First" }, "First, …"] },
            { parts: [{ audio: "Then" }, "Then, …"] },
            { parts: [{ audio: "After that" }, "After that, …"] },
            { parts: [{ audio: "Finally" }, "Finally, …"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Use sequencers to connect events, but do not begin every sentence with ",
          { part: "then", type: "bold" },
          ".",
        ],
      },
      {
        as: "p",
        parts: [
          "Use follow-up questions such as What happened next? and How did everyone feel? to keep a family story moving.",
        ],
      },
    ],
    ccq: [
      {
        parts: ["Does first introduce the beginning or the ending?"],
        options: [
          { option: "The beginning", isCorrect: true },
          { option: "The ending", isCorrect: false },
        ],
      },
      {
        parts: ["Does finally normally introduce the last event?"],
        options: [
          { option: "Yes", isCorrect: true },
          { option: "No", isCorrect: false },
        ],
      },
      {
        parts: ["Which question asks for the next event?"],
        options: [
          { option: "What happened next?", isCorrect: true },
          { option: "Who is it?", isCorrect: false },
        ],
      },
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
            question: "_____ that, we looked at old photos.",
            options: [
              { option: "After", isCorrect: true },
              { option: "First of", isCorrect: false },
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
            prompt: "grandparents / first / my / visited / I",
            answer: "First, I visited my grandparents.",
          },
          {
            prompt: "lunch / then / family / had / we / a",
            answer: "Then, we had a family lunch.",
          },
          {
            prompt: "finally / cake / ate / they",
            answer: "Finally, they ate cake.",
          },
        ],
      },
    },
  },
  production: {
    task: {
      instruction: "Tell a family celebration story:",
      type: "checkbox",
      items: [
        {
          content: [
            "Prepare six keywords for a real or invented event: occasion, people, place, beginning, middle, and ending.",
          ],
          textarea: true,
        },
        {
          content: [
            "Tell the story without reading complete sentences. Use at least three sequencers.",
          ],
        },
        {
          content: [
            "Your partner asks two follow-up questions and then retells the main events in order.",
          ],
        },
        { content: ["Change roles and repeat."] },
      ],
    },
  },
};
