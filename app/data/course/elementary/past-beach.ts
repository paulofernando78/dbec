export const elementaryPastBeach = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Beach",
    descriptions: ["We went to the beach. The weather was beautiful."],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to talk about past activities and describe a day at the beach using the Past Simple.",
    grammar: "Past Simple",
    vocabulary: "Beach activities, Weather, Seaside places",
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "beach" }, "beach"] },
        { as: "span", parts: [{ audio: "swimsuit" }, "swimsuit"] },
        { as: "span", parts: [{ audio: "sunscreen" }, "sunscreen"] },
        { as: "span", parts: [{ audio: "waves" }, "waves"] },
      ],
      imgs: [
        {
          src: "/assets/img/cefr/a2/unit-1-last-weekend/laura-beach.avif",
          alt: "beach",
        },
        { src: "/", alt: "swimsuit" },
        { src: "/", alt: "sunscreen" },
        { src: "/", alt: "waves" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/assets/img/cefr/a2/unit-1-last-weekend/laura-beach.avif",
          alt: "Laura spending the day at the beach",
          content: [
            { audio: "Laura went to the beach on Sunday." },
            "Laura ",
            { part: "went", type: "mark" },
            " to the beach on Sunday. ",
            { part: "Laura foi à praia no domingo.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Laura putting on sunscreen",
          content: [
            { audio: "She put on sunscreen." },
            "She ",
            { part: "put on", type: "mark" },
            " sunscreen. ",
            { part: "Ela passou protetor solar.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Laura swimming in the ocean",
          content: [
            { audio: "She swam in the ocean." },
            "She ",
            { part: "swam", type: "mark" },
            " in the ocean. ",
            { part: "Ela nadou no mar.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Laura and her friends playing beach volleyball",
          content: [
            { audio: "They played beach volleyball." },
            "They ",
            { part: "played", type: "mark" },
            " beach volleyball. ",
            { part: "Eles jogaram vôlei de praia.", type: "portuguese" },
          ],
        },
        {
          src: "/",
          alt: "Laura and her friends having a snack",
          content: [
            { audio: "They ate fruit and drank coconut water." },
            "They ",
            { part: "ate", type: "mark" },
            " fruit and drank coconut water. ",
            {
              part: "Eles comeram frutas e beberam água de coco.",
              type: "portuguese",
            },
          ],
        },
        {
          src: "/",
          alt: "Laura watching the sunset",
          content: [
            { audio: "Laura watched the sunset before she went home." },
            "Laura ",
            { part: "watched", type: "mark" },
            " the sunset before she went home. ",
            {
              part: "Laura viu o pôr do sol antes de ir para casa.",
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
            question: "Laura went to the beach on Sunday.",
            options: [
              { option: "true", isCorrect: true },
              { option: "false", isCorrect: false },
            ],
          },
          {
            question: "Laura stayed out after sunset.",
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
        { speaker: "Laura", line: ["Hey Eric. How's it going?"] },
        { speaker: "Eric", line: ["Pretty good. How was your weekend?"] },
        {
          speaker: "Laura",
          line: ["It was great. I went to the beach on Sunday."],
        },
        { speaker: "Eric", line: ["Nice! Who did you go with?"] },
        { speaker: "Laura", line: ["I went with two friends."] },
        { speaker: "Eric", line: ["What did you do there?"] },
        {
          speaker: "Laura",
          line: ["We swam, played volleyball, and watched the sunset."],
        },
        { speaker: "Eric", line: ["Was the water cold?"] },
        { speaker: "Laura", line: ["No, it was warm and calm."] },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Where did Laura go?",
            options: [
              { option: "To the beach", isCorrect: true },
              { option: "To the movies", isCorrect: false },
            ],
          },
          {
            question: "Who went with Laura?",
            options: [
              { option: "Two friends", isCorrect: true },
              { option: "Her parents", isCorrect: false },
            ],
          },
          {
            question: "What was the water like?",
            options: [
              { option: "Warm and calm", isCorrect: true },
              { option: "Cold and rough", isCorrect: false },
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
                { audio: "I went to the beach." },
                "I went to the beach.",
              ],
            },
            {
              parts: [
                { audio: "I went with my friends." },
                "I went with my friends.",
              ],
            },
            {
              parts: [
                { audio: "We swam in the ocean." },
                "We swam in the ocean.",
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
      { parts: ['In the sentence: "Laura went to the beach on Sunday."'] },
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
            question: "Yesterday we _____ in the ocean.",
            options: [
              { option: "swam", isCorrect: true },
              { option: "swim", isCorrect: false },
            ],
          },
          {
            question: "They _____ volleyball on the sand.",
            options: [
              { option: "played", isCorrect: true },
              { option: "play", isCorrect: false },
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
              { text: "Laura " },
              { blank: "went" },
              { text: " to the beach." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "We " },
              { blank: "watched" },
              { text: " the sunset." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "They " },
              { blank: "drank" },
              { text: " coconut water." },
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
            prompt: "beach / went / the / we / to",
            answer: "We went to the beach.",
          },
          {
            prompt: "ocean / swam / the / in / I",
            answer: "I swam in the ocean.",
          },
          {
            prompt: "volleyball / played / they",
            answer: "They played volleyball.",
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
          content: ["Write five sentences about your last day at the beach."],
          textarea: true,
        },
        {
          content: ["Write three Past Simple questions and answer them."],
          textarea: true,
        },
        {
          content: ["Interview a classmate about your last day at the beach."],
        },
      ],
    },
  },
};
