import { audio, bold, portuguese, spacer } from "@/helpers/content";

export const beginnerCountriesAndNationalities = {
  whiteboard: {
    title: "A1 Beginner",
    descriptions: ["Where are you from?", "I'm Brazilian."],
  },

  introduction: {
    blocks: [
      {
        type: "lines",
        value: [
          [
            audio("Where are you from? What is your nationality?"),
            "Where are you from? What is your nationality?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the answer that gives a country.",
        exercise: {
          questions: [
            {
              question: "Where are you from?",
              options: [
                { option: "I'm from Brazil.", isCorrect: true },
                { option: "I'm Brazilian.", isCorrect: false },
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
        instruction: [
          "Read the conversation. Where are Laura and Eric from? ",
          portuguese("Leia a conversa e identifique os países."),
        ],
        audioSrc: "",
        lines: [
          { speaker: "Eric", line: ["Hi, I'm Eric. Where are you from?"] },
          { speaker: "Laura", line: ["I'm from Brazil. I'm Brazilian."] },
          { speaker: "Laura", line: ["And you? Are you American?"] },
          {
            speaker: "Eric",
            line: ["No, I'm not. I'm from Canada. I'm Canadian."],
          },
          { speaker: "Laura", line: ["Nice to meet you!"] },
          { speaker: "Eric", line: ["Nice to meet you, too!"] },
        ],
      },
      {
        type: "radio",
        instruction: "Choose the answer supported by the conversation.",
        exercise: {
          questions: [
            {
              question: "Where is Laura from?",
              options: [
                { option: "Brazil", isCorrect: true },
                { option: "Canada", isCorrect: false },
              ],
            },
            {
              question: "What is Eric's nationality?",
              options: [
                { option: "Canadian", isCorrect: true },
                { option: "American", isCorrect: false },
              ],
            },
          ],
        },
      },
    ],
  },

  languageFocus: {
    blocks: [
      { type: "subsection", label: "Countries and nationalities", heading: 4 },
      {
        type: "meaning",
        value: [
          {
            display: "block",
            as: "p",
            parts: [bold("Brazil"), " - Brazilian"],
          },
          { display: "block", as: "p", parts: [bold("Canada"), " - Canadian"] },
          {
            display: "block",
            as: "p",
            parts: [bold("the United States"), " - American"],
          },
          { display: "block", as: "p", parts: [bold("England"), " - English"] },
          { display: "block", as: "p", parts: [bold("Japan"), " - Japanese"] },
          { display: "block", as: "p", parts: [bold("Italy"), " - Italian"] },
          spacer(),
          {
            display: "block",
            as: "p",
            parts: [bold("Where are you from?"), " I'm from Brazil."],
          },
          {
            display: "block",
            as: "p",
            parts: [bold("Are you Brazilian?"), " Yes, I am. / No, I'm not."],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          { as: "p", parts: ["Is Brazil a country or a nationality?"] },
          { as: "p", parts: ["Is Brazilian a country or a nationality?"] },
          { as: "p", parts: ["Do we say I'm from Brazilian?"] },
        ],
      },
    ],
  },

  practice: {
    blocks: [
      { type: "guess" },
      {
        type: "radio",
        instruction: "Choose the correct country or nationality.",
        exercise: {
          questions: [
            {
              question: "I'm from Brazil. I'm ___.",
              options: [
                { option: "Brazilian", isCorrect: true },
                { option: "Brazil", isCorrect: false },
              ],
            },
            {
              question: "She's Canadian. She's from ___.",
              options: [
                { option: "Canada", isCorrect: true },
                { option: "Canadian", isCorrect: false },
              ],
            },
            {
              question: "They're from Japan. They're ___.",
              options: [
                { option: "Japanese", isCorrect: true },
                { option: "Japan", isCorrect: false },
              ],
            },
            {
              question: "He's Italian. He's from ___.",
              options: [
                { option: "Italy", isCorrect: true },
                { option: "Italian", isCorrect: false },
              ],
            },
            {
              question: "___ are you from?",
              options: [
                { option: "Where", isCorrect: true },
                { option: "What", isCorrect: false },
              ],
            },
            {
              question: "Are you American? Yes, I ___.",
              options: [
                { option: "am", isCorrect: true },
                { option: "are", isCorrect: false },
              ],
            },
            {
              question: "Is she English? No, she ___.",
              options: [
                { option: "isn't", isCorrect: true },
                { option: "aren't", isCorrect: false },
              ],
            },
            {
              question: "We ___ from Brazil.",
              options: [
                { option: "are", isCorrect: true },
                { option: "is", isCorrect: false },
              ],
            },
          ],
        },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the sentences.",
        exercise: {
          blocks: [
            {
              block: [
                { text: "I am from Brazil. I am " },
                { blank: "Brazilian" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "She is from Canada. She is " },
                { blank: "Canadian" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "They are from Japan. They are " },
                { blank: "Japanese" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "He is Italian. He is from " },
                { blank: "Italy" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [{ blank: "Where" }, { text: " are you from?" }],
              lineBreak: true,
            },
            {
              block: [
                { text: "Are you American? Yes, I " },
                { blank: "am" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Is she English? No, she " },
                { blank: "isn't" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "We " },
                { blank: "are" },
                { text: " Brazilian." },
              ],
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
              prompt: "you / where / from / are",
              answer: "Where are you from?",
            },
            { prompt: "from / I / Brazil / am", answer: "I am from Brazil." },
            { prompt: "Canadian / she / is", answer: "She is Canadian." },
            { prompt: "American / are / you", answer: "Are you American?" },
          ],
        },
      },
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Meet three classmates and complete the task:",
        listType: "checkbox",
        items: [
          { content: ["Ask: Where are you from?"], textarea: false },
          {
            content: ["Answer with a country and a nationality."],
            textarea: false,
          },
          {
            content: ["Introduce one classmate to the group."],
            textarea: true,
          },
        ],
      },
    ],
  },
};
