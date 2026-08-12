import { shuffle } from "@/utils/shuffle";
import { audio } from "@/helpers/content";

export const elementaryHobbies = {
  whiteboard: {
    title: "A2 Elementary",
    descriptions: ["I enjoy taking photos.", "I'd like to learn to paint."],
  },
  introduction: {
    blocks: [
      {
        type: "lines",
        value: [
          [
            audio("What do you enjoy doing in your free time?"),
            "What do you enjoy doing in your free time?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
          instruction: "Look at the pictures and listen to the sentences.",
          imgs: [
            {
              src: "/",
              alt: "A person taking photographs in a park",
              content: [
                { audio: "Kai enjoys taking photos in the park." },
                "Kai enjoys taking photos in the park.",
                " (Kai gosta de tirar fotos no parque.)",
              ],
            },
            {
              src: "/",
              alt: "A beginner painting on a canvas",
              content: [
                { audio: "He wants to learn to paint." },
                "He wants to learn to paint.",
                " (Ele quer aprender a pintar.)",
              ],
            },
            {
              src: "/",
              alt: "Friends playing a board game",
              content: [
                { audio: "His friends like playing board games." },
                "His friends like playing board games.",
                " (Os amigos dele gostam de jogar jogos de tabuleiro.)",
              ],
            },
          ],
        },
      },
      {
        type: "imageQuiz",
        ...{
          questions: [
            {
              word: "photography",
              imgSrc: "/",
              imgAlt: "photography",
              options: shuffle([
                { option: "photography", isCorrect: true },
                { option: "gardening", isCorrect: false },
                { option: "painting", isCorrect: false },
                { option: "board games", isCorrect: false },
              ]),
            },
            {
              word: "gardening",
              imgSrc: "/",
              imgAlt: "gardening",
              options: shuffle([
                { option: "photography", isCorrect: false },
                { option: "gardening", isCorrect: true },
                { option: "painting", isCorrect: false },
                { option: "board games", isCorrect: false },
              ]),
            },
            {
              word: "painting",
              imgSrc: "/",
              imgAlt: "painting",
              options: shuffle([
                { option: "photography", isCorrect: false },
                { option: "gardening", isCorrect: false },
                { option: "painting", isCorrect: true },
                { option: "board games", isCorrect: false },
              ]),
            },
            {
              word: "board games",
              imgSrc: "/",
              imgAlt: "board games",
              options: shuffle([
                { option: "photography", isCorrect: false },
                { option: "gardening", isCorrect: false },
                { option: "painting", isCorrect: false },
                { option: "board games", isCorrect: true },
              ]),
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
                question: "What does Nora love doing?",
                options: [
                  { option: "Gardening and cooking", isCorrect: true },
                  { option: "Running and swimming", isCorrect: false },
                ],
              },
              {
                question: "What would Nora like to learn?",
                options: [
                  { option: "To play the guitar", isCorrect: true },
                  { option: "To paint", isCorrect: false },
                ],
              },
            ],
          },
        },
      },
    ],
  },
  presentation: {
    blocks: [
      {
        type: "dialogue",
        ...{
          instruction:
            "Listen once: which hobbies do Nora and Kai want to learn? Then listen again for their current interests.",
          audioSrc: "",
          lines: [
            {
              speaker: "Kai",
              line: ["What do you like doing in your free time?"],
            },
            { speaker: "Nora", line: ["I love gardening and cooking."] },
            { speaker: "Kai", line: ["Would you like to try a new hobby?"] },
            {
              speaker: "Nora",
              line: ["Yes. I'd like to learn to play the guitar."],
            },
            { speaker: "Kai", line: ["I want to learn to paint."] },
            { speaker: "Nora", line: ["We could take an art class together."] },
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
                question: "What does Nora love doing?",
                options: [
                  { option: "Gardening and cooking", isCorrect: true },
                  { option: "Running and swimming", isCorrect: false },
                ],
              },
              {
                question: "What would Nora like to learn?",
                options: [
                  { option: "To play the guitar", isCorrect: true },
                  { option: "To paint", isCorrect: false },
                ],
              },
              {
                question: "What class could they take?",
                options: [
                  { option: "An art class", isCorrect: true },
                  { option: "A dance class", isCorrect: false },
                ],
              },
            ],
          },
        },
      },
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
              { part: "Gerunds & Infinitives", type: "bold" },
              " uses verb + -ing after enjoy, love, and like to describe activities.",
            ],
          },
          { type: "spacer" },
          {
            as: "p",
            parts: [
              "",
              "Use to + base verb after want and would like to describe wishes and plans.",
            ],
          },
          { type: "spacer" },
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
              column: "Verb + -ing",
              items: [
                { parts: [{ audio: "I enjoy reading." }, "I enjoy reading."] },
                {
                  parts: [
                    { audio: "She loves dancing." },
                    "She loves dancing.",
                  ],
                },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Verb + to",
              items: [
                { parts: [{ audio: "I want to paint." }, "I want to paint."] },
                {
                  parts: [
                    { audio: "We'd like to learn." },
                    "We'd like to learn.",
                  ],
                },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Questions",
              items: [
                {
                  parts: [
                    { audio: "What do you enjoy doing?" },
                    "What do you enjoy doing?",
                  ],
                },
                {
                  parts: [
                    { audio: "What would you like to try?" },
                    "What would you like to try?",
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
              "Say enjoy reading, but want to read. The pattern depends on the first verb.",
            ],
          },
          {
            as: "p",
            parts: [
              "Learn the verb pattern as a complete chunk. To extend the conversation, ask how often, where, or who the person does the hobby with.",
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          { as: "p", parts: ["After enjoy, do we use read or reading?"] },
          { as: "p", parts: ["After want, do we use to + verb?"] },
          { as: "p", parts: ["Is a hobby a free-time activity?"] },
        ],
      },
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
                question: "I enjoy _____ photos.",
                options: [
                  { option: "taking", isCorrect: true },
                  { option: "to take", isCorrect: false },
                ],
              },
              {
                question: "She wants _____ the guitar.",
                options: [
                  { option: "to learn", isCorrect: true },
                  { option: "learning", isCorrect: false },
                ],
              },
              {
                question: "Your friend asks about your free time.",
                options: [
                  { option: "I enjoy painting landscapes.", isCorrect: true },
                  { option: "I enjoy to paint landscapes.", isCorrect: false },
                ],
              },
              {
                question: "You are interested in a new hobby.",
                options: [
                  { option: "I'd like to try pottery.", isCorrect: true },
                  { option: "I'd like trying pottery.", isCorrect: false },
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
                  { text: "They love " },
                  { blank: "playing" },
                  { text: " board games." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "I'd like " },
                  { blank: "to try" },
                  { text: " gardening." },
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
              {
                prompt: "enjoy / photos / taking / I",
                answer: "I enjoy taking photos.",
              },
              {
                prompt: "learn / wants / paint / to / she / to",
                answer: "She wants to learn to paint.",
              },
            ],
          },
        },
      },
    ],
  },
  production: {
    blocks: [
      {
        type: "task",
        instruction: "Find a hobby you and a partner could try together:",
        listType: "checkbox",
        items: [
          { content: ["Describe three hobbies you enjoy."], textarea: true },
          {
            content: ["Write about two hobbies you would like to try."],
            textarea: true,
          },
          {
            content: [
              "Interview a classmate about their free-time activities.",
            ],
            textarea: false,
          },
        ],
      },
    ],
  },
};
