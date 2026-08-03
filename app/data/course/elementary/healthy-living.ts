import { shuffle } from "@/utils/shuffle";
import { audio } from "@/helpers/content";

export const elementaryHealthyLiving = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Healthy Living",
    descriptions: [
      "If you sleep well, you feel better.",
    ],
  },

  introduction: {
    blocks: [
      {
        type: "lines",
        value: [
      [
        audio("What healthy habit gives you more energy?"),
        "What healthy habit gives you more energy?",
      ],
    ],
        className: "mb-4",
      },
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
      instruction: "Look at the pictures and notice what usually happens.",
      imgs: [
        {
          src: "/",
          alt: "A tired person after a short night",
          content: [
            { audio: "If Maya sleeps for only five hours, she feels tired." },
            "If Maya sleeps for only five hours, she feels tired.",
          ],
        },
        {
          src: "/",
          alt: "A person drinking water after exercise",
          content: [
            { audio: "When Maya exercises, she drinks more water." },
            "When Maya exercises, she drinks more water.",
          ],
        },
        {
          src: "/",
          alt: "A healthy breakfast",
          content: [
            { audio: "If Maya eats breakfast, she has more energy." },
            "If Maya eats breakfast, she has more energy.",
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
          word: "A balanced meal",
          imgSrc: "/",
          imgAlt: "A balanced meal",
          options: shuffle([
            { option: "A balanced meal", isCorrect: true },
            { option: "A person exercising", isCorrect: false },
            { option: "A person sleeping", isCorrect: false },
            { option: "A stressed person", isCorrect: false },
          ]),
        },
        {
          word: "A person exercising",
          imgSrc: "/",
          imgAlt: "A person exercising",
          options: shuffle([
            { option: "A balanced meal", isCorrect: false },
            { option: "A person exercising", isCorrect: true },
            { option: "A person sleeping", isCorrect: false },
            { option: "A stressed person", isCorrect: false },
          ]),
        },
        {
          word: "A person sleeping",
          imgSrc: "/",
          imgAlt: "A person sleeping",
          options: shuffle([
            { option: "A balanced meal", isCorrect: false },
            { option: "A person exercising", isCorrect: false },
            { option: "A person sleeping", isCorrect: true },
            { option: "A stressed person", isCorrect: false },
          ]),
        },
        {
          word: "A stressed person",
          imgSrc: "/",
          imgAlt: "A stressed person",
          options: shuffle([
            { option: "A balanced meal", isCorrect: false },
            { option: "A person exercising", isCorrect: false },
            { option: "A person sleeping", isCorrect: false },
            { option: "A stressed person", isCorrect: true },
          ]),
        },
      ],
    },
      },
      {
        type: "radio",
        ...{
      instruction: "Choose the result that is generally true.",
      exercise: {
        questions: [
          {
            question: "What happens if Maya sleeps for only five hours?",
            options: [
              { option: "She feels tired.", isCorrect: true },
              { option: "She feels more energetic.", isCorrect: false },
            ],
          },
          {
            question: "What does Maya do when she exercises?",
            options: [
              { option: "She drinks more water.", isCorrect: true },
              { option: "She skips breakfast.", isCorrect: false },
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
        "Listen once: which habits are causing Maya's problems? Then listen again for causes and results.",
      audioSrc: "",
      lines: [
        { speaker: "Maya", line: ["I feel tired every morning."] },
        { speaker: "Noah", line: ["How many hours do you usually sleep?"] },
        { speaker: "Maya", line: ["About five hours."] },
        {
          speaker: "Noah",
          line: ["That explains it. If you don't sleep enough, you feel tired."],
        },
        { speaker: "Maya", line: ["I also skip breakfast when I'm busy."] },
        {
          speaker: "Noah",
          line: [
            "When you skip breakfast, you have less energy. You should eat something healthy.",
          ],
        },
        {
          speaker: "Maya",
          line: ["You're right. If I plan my morning, I eat better."],
        },
      ],
    },
      },
      {
        type: "radio",
        ...{
      instruction: "Choose the answer supported by the dialogue.",
      exercise: {
        questions: [
          {
            question: "Why does Maya feel tired?",
            options: [
              { option: "She doesn't sleep enough.", isCorrect: true },
              { option: "She exercises too much.", isCorrect: false },
            ],
          },
          {
            question: "What happens when Maya skips breakfast?",
            options: [
              { option: "She has less energy.", isCorrect: true },
              { option: "She sleeps longer.", isCorrect: false },
            ],
          },
          {
            question: "Is Noah talking about one unusual event?",
            options: [
              { option: "No, he is describing a general result.", isCorrect: true },
              { option: "Yes, he is predicting tomorrow.", isCorrect: false },
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
          { part: "Zero Conditional: ", type: "bold" },
          "Use it for facts, routines, and results that generally happen whenever a condition is true.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          { part: "Form: ", type: "bold" },
          "if/when + Present Simple, Present Simple.",
        ],
      },
    ],
      },
      {
        type: "column",
        ...{
      width: 310,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-500",
          textColor: "text-white",
          column: "If-clause first",
          items: [
            {
              parts: [
                { audio: "If I sleep well, I feel better." },
                "If I sleep well, I feel better.",
              ],
            },
            {
              parts: [
                { audio: "If she skips lunch, she gets hungry." },
                "If she skips lunch, she gets hungry.",
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-500",
          textColor: "text-white",
          column: "Result first",
          items: [
            {
              parts: [
                { audio: "I feel better if I sleep well." },
                "I feel better if I sleep well.",
              ],
            },
            {
              parts: [
                { audio: "She gets hungry if she skips lunch." },
                "She gets hungry if she skips lunch.",
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-500",
          textColor: "text-white",
          column: "If or when",
          items: [
            {
              parts: [
                { audio: "When I exercise, I drink more water." },
                "When I exercise, I drink more water.",
              ],
            },
            {
              parts: [
                { audio: "If I exercise, I drink more water." },
                "If I exercise, I drink more water.",
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
          "Use a comma when the if/when clause comes first. Do not use will for a general result.",
        ],
      },
      {
        as: "p",
        parts: [
          "After explaining the result, use should or shouldn't to give advice: If you feel tired, you should rest.",
        ],
      },
    ],
      },
      {
        type: "ccq",
        value: [
      { as: "p", parts: ["Is this about one occasion or a general result?"] },
      { as: "p", parts: ["Which tense appears in both clauses?"] },
      { as: "p", parts: ["Can when replace if when the result is regular?"] },
      { as: "p", parts: ["Do we normally use will in a Zero Conditional?"] },
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
      instruction: "Choose the correct form.",
      exercise: {
        questions: [
          {
            question: "If you _____ enough water, you feel thirsty.",
            options: [
              { option: "don't drink", isCorrect: true },
              { option: "won't drink", isCorrect: false },
            ],
          },
          {
            question: "When Leo exercises, he _____ better.",
            options: [
              { option: "sleeps", isCorrect: true },
              { option: "will sleep", isCorrect: false },
            ],
          },
          {
            question: "I get a headache if I _____ meals.",
            options: [
              { option: "skip", isCorrect: true },
              { option: "will skip", isCorrect: false },
            ],
          },
          {
            question: "If Ana feels stressed, she _____ a short walk.",
            options: [
              { option: "takes", isCorrect: true },
              { option: "will take tomorrow", isCorrect: false },
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
      instruction: "Complete the general health results.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "If I sleep well, I " },
              { blank: "feel" },
              { text: " energetic." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "When she " },
              { blank: "skips" },
              { text: " breakfast, she gets hungry early." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "People feel better if they " },
              { blank: "exercise" },
              { text: " regularly." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "If he doesn't rest, he " },
              { blank: "feels" },
              { text: " tired." },
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
      instruction: "Unscramble the sentences.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "feel tired / if / I / don't sleep",
            answer: "I feel tired if I don't sleep.",
          },
          {
            prompt: "when / drinks water / she exercises / she",
            answer: "She drinks water when she exercises.",
          },
          {
            prompt: "you / if / eat well / have more energy / you",
            answer: "If you eat well, you have more energy.",
          },
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
        instruction: "Create and discuss a simple healthy-habits guide.",
        listType: "checkbox",
        items: [
        {
          content: [
            "Write three Zero Conditional sentences about sleep, food, exercise, or stress.",
          ],
          textarea: true,
        },
        {
          content: [
            "Use if in at least one sentence and when in another sentence.",
          ],
          textarea: true,
        },
        {
          content: [
            "Choose one result and add advice with should or shouldn't.",
          ],
          textarea: true,
        },
        {
          content: [
            "Compare your guide with a partner and agree on the two most useful habits.",
          ],
          textarea: false,
        },
      ],
      }
    ],
  },
};
