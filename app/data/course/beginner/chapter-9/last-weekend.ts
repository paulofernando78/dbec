import { audio, bold } from "@/helpers/content";

export const beginnerWhereWereYou = {
  whiteboard: {
    title: "A1 BEGINNER",
    descriptions: ["Where were you last weekend?", "I was at home."],
  },

  introduction: {
    blocks: [
      {
        type: "lines",
        value: [
          [
            audio("Where were you last weekend?"),
            "Where were you last weekend?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the place.",
        exercise: {
          questions: [
            {
              question: "Which one is a place?",
              options: [
                { option: "At home", isCorrect: true },
                { option: "Happy", isCorrect: false },
              ],
            },
            {
              question: "Which question asks about the past?",
              options: [
                { option: "Where were you last weekend?", isCorrect: true },
                { option: "Where are you now?", isCorrect: false },
              ],
            },
          ],
        },
      },
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: "Listen once: where was Laura last weekend?",
        audioSrc: "",
        lines: [
          { speaker: "Eric", line: ["Where were you last weekend?"] },
          { speaker: "Laura", line: ["I was at the park on Saturday."] },
          { speaker: "Eric", line: ["Were you alone?"] },
          { speaker: "Laura", line: ["No, I wasn't. I was with my sister."] },
          { speaker: "Eric", line: ["Was it fun?"] },
          { speaker: "Laura", line: ["Yes, it was."] },
        ],
      },
      {
        type: "radio",
        instruction: "Listen again and choose the correct answer.",
        exercise: {
          questions: [
            {
              question: "Where was Laura on Saturday?",
              options: [
                { option: "At the park", isCorrect: true },
                { option: "At school", isCorrect: false },
              ],
            },
            {
              question: "Was Laura alone?",
              options: [
                { option: "No", isCorrect: true },
                { option: "Yes", isCorrect: false },
              ],
            },
          ],
        },
      },
    ],
  },

  languageFocus: {
    blocks: [
      {
        type: "meaning",
        value: [
          { as: "p", parts: [bold("was"), " = past of am/is"] },
          { as: "p", parts: [bold("were"), " = past of are"] },
          {
            as: "p",
            parts: [bold("last weekend"), " tells us the time is in the past."],
          },
        ],
      },
      {
        type: "column",
        width: 300,
        cols: [
          {
            column: "I / he / she / it",
            items: [
              { parts: [bold("Q:"), " Where was she?"] },
              { parts: [bold("A:"), " She was at the park."] },
              { parts: [bold("N:"), " She wasn't alone."] },
            ],
          },
          {
            column: "you / we / they",
            items: [
              { parts: [bold("Q:"), " Where were you?"] },
              { parts: [bold("A:"), " We were at home."] },
              { parts: [bold("N:"), " They weren't here."] },
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: ["Is last weekend past or present?"],
            options: [
              { option: "Past", isCorrect: true },
              { option: "Present", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["Do we say I was or I were?"],
            options: [
              { option: "I was", isCorrect: true },
              { option: "I were", isCorrect: false },
            ],
          },
        ],
      },
    ],
  },

  practice: {
    blocks: [
      { type: "guess" },
      {
        type: "radio",
        instruction: "Choose the correct answer.",
        exercise: {
          questions: [
            {
              question: "I ___ at home yesterday.",
              options: [
                { option: "was", isCorrect: true },
                { option: "were", isCorrect: false },
              ],
            },
            {
              question: "Where ___ you last weekend?",
              options: [
                { option: "were", isCorrect: true },
                { option: "was", isCorrect: false },
              ],
            },
            {
              question: "She ___ at the park.",
              options: [
                { option: "was", isCorrect: true },
                { option: "were", isCorrect: false },
              ],
            },
          ],
        },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the past sentences.",
        exercise: {
          blocks: [
            {
              block: [{ text: "I " }, { blank: "was" }, { text: " at home." }],
              lineBreak: true,
            },
            {
              block: [{ text: "Where " }, { blank: "were" }, { text: " you?" }],
              lineBreak: true,
            },
            {
              block: [{ text: "She " }, { blank: "wasn't" }, { text: " alone." }],
              lineBreak: true,
            },
            {
              block: [{ text: "They " }, { blank: "were" }, { text: " at school." }],
              lineBreak: true,
            },
          ],
        },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: {
          items: [
            {
              prompt: "you / where / were / weekend / last",
              answer: "Where were you last weekend?",
            },
            {
              prompt: "was / I / home / at",
              answer: "I was at home.",
            },
            {
              prompt: "alone / wasn't / she",
              answer: "She wasn't alone.",
            },
          ],
        },
      },
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Ask and answer about last weekend:",
        listType: "checkbox",
        items: [
          { content: ["Ask where your partner was."], textarea: true },
          { content: ["Answer with a place."], textarea: true },
          { content: ["Add one more detail with was or were."], textarea: true },
        ],
      },
    ],
  },
};

export const beginnerHowWasIt = {
  whiteboard: {
    title: "A1 BEGINNER",
    descriptions: ["How was it?", "It was fantastic."],
  },

  introduction: {
    blocks: [
      {
        type: "lines",
        value: [[audio("How was your weekend?"), "How was your weekend?"]],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the opinion word.",
        exercise: {
          questions: [
            {
              question: "Which word is positive?",
              options: [
                { option: "Fantastic", isCorrect: true },
                { option: "Terrible", isCorrect: false },
              ],
            },
            {
              question: "Which question asks for an opinion?",
              options: [
                { option: "How was it?", isCorrect: true },
                { option: "Where was it?", isCorrect: false },
              ],
            },
          ],
        },
      },
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: "Listen once: was Laura's weekend good or bad?",
        audioSrc: "",
        lines: [
          { speaker: "Eric", line: ["How was your weekend?"] },
          { speaker: "Laura", line: ["It was great."] },
          { speaker: "Eric", line: ["What did you do?"] },
          { speaker: "Laura", line: ["I watched a movie and visited my grandma."] },
          { speaker: "Eric", line: ["Was the movie good?"] },
          { speaker: "Laura", line: ["Yes, it was fantastic."] },
        ],
      },
      {
        type: "radio",
        instruction: "Listen again and choose the correct answer.",
        exercise: {
          questions: [
            {
              question: "How was Laura's weekend?",
              options: [
                { option: "Great", isCorrect: true },
                { option: "Terrible", isCorrect: false },
              ],
            },
            {
              question: "What did Laura watch?",
              options: [
                { option: "A movie", isCorrect: true },
                { option: "A game", isCorrect: false },
              ],
            },
          ],
        },
      },
    ],
  },

  languageFocus: {
    blocks: [
      {
        type: "meaning",
        value: [
          { as: "p", parts: [bold("How was...?"), " asks for an opinion about the past."] },
          { as: "p", parts: [bold("It was great."), " gives a positive opinion."] },
          { as: "p", parts: [bold("It wasn't good."), " gives a negative opinion."] },
        ],
      },
      {
        type: "column",
        width: 300,
        cols: [
          {
            column: "Question",
            items: [
              { parts: [bold("Q:"), " How was your weekend?"] },
              { parts: [bold("Q:"), " Was the movie good?"] },
            ],
          },
          {
            column: "Positive",
            items: [
              { parts: [bold("A:"), " It was great."] },
              { parts: [bold("A:"), " It was fantastic."] },
            ],
          },
          {
            column: "Negative",
            items: [
              { parts: [bold("A:"), " It wasn't good."] },
              { parts: [bold("A:"), " It was terrible."] },
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: ["Does How was it? ask about the past?"],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["Is fantastic positive or negative?"],
            options: [
              { option: "Positive", isCorrect: true },
              { option: "Negative", isCorrect: false },
            ],
          },
        ],
      },
    ],
  },

  practice: {
    blocks: [
      { type: "guess" },
      {
        type: "radio",
        instruction: "Choose the correct answer.",
        exercise: {
          questions: [
            {
              question: "How ___ your weekend?",
              options: [
                { option: "was", isCorrect: true },
                { option: "were", isCorrect: false },
              ],
            },
            {
              question: "It ___ fantastic.",
              options: [
                { option: "was", isCorrect: true },
                { option: "were", isCorrect: false },
              ],
            },
            {
              question: "It wasn't ___.",
              options: [
                { option: "good", isCorrect: true },
                { option: "go", isCorrect: false },
              ],
            },
          ],
        },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the questions and opinions.",
        exercise: {
          blocks: [
            {
              block: [{ text: "How " }, { blank: "was" }, { text: " it?" }],
              lineBreak: true,
            },
            {
              block: [{ text: "It " }, { blank: "was" }, { text: " great." }],
              lineBreak: true,
            },
            {
              block: [{ text: "It " }, { blank: "wasn't" }, { text: " good." }],
              lineBreak: true,
            },
            {
              block: [{ text: "Was the movie " }, { blank: "good" }, { text: "?" }],
              lineBreak: true,
            },
          ],
        },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: {
          items: [
            {
              prompt: "was / how / weekend / your",
              answer: "How was your weekend?",
            },
            {
              prompt: "great / was / it",
              answer: "It was great.",
            },
            {
              prompt: "good / wasn't / it",
              answer: "It wasn't good.",
            },
          ],
        },
      },
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Talk about a past event:",
        listType: "checkbox",
        items: [
          { content: ["Ask how the event was."], textarea: true },
          { content: ["Answer with a positive or negative opinion."], textarea: true },
          { content: ["Add one simple past detail."], textarea: true },
        ],
      },
    ],
  },
};
