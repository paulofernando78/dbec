import { shuffle } from "@/utils/shuffle";
import { audio } from "@/helpers/content";

export const elementaryCityLife = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "City Life",
    descriptions: [
      "The city is busier than the town.",
      "The subway is faster than the bus.",
    ],
  },
  introduction: {
    blocks: [
      {
        type: "lines",
        value: [
      [
        audio("Do you prefer city life or life in a small town? Why?"),
        "Do you prefer city life or life in a small town? Why?",
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
          alt: "A large busy city and a small quiet town",
          content: [
            { audio: "Metro City is bigger and busier than Lake Town." },
            "Metro City is bigger and busier than Lake Town.",
            " (Metro City é maior e mais agitada que Lake Town.)",
          ],
        },
        {
          src: "/",
          alt: "A subway and a bus in the city",
          content: [
            { audio: "The subway is faster than the bus." },
            "The subway is faster than the bus.",
            " (O metrô é mais rápido que o ônibus.)",
          ],
        },
        {
          src: "/",
          alt: "A clean quiet street in a small town",
          content: [
            { audio: "Lake Town is quieter and cleaner." },
            "Lake Town is quieter and cleaner.",
            " (Lake Town é mais tranquila e limpa.)",
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
          word: "crowded",
          imgSrc: "/",
          imgAlt: "crowded",
          options: shuffle([
            { option: "crowded", isCorrect: true },
            { option: "quiet", isCorrect: false },
            { option: "subway", isCorrect: false },
            { option: "traffic", isCorrect: false },
          ]),
        },
        {
          word: "quiet",
          imgSrc: "/",
          imgAlt: "quiet",
          options: shuffle([
            { option: "crowded", isCorrect: false },
            { option: "quiet", isCorrect: true },
            { option: "subway", isCorrect: false },
            { option: "traffic", isCorrect: false },
          ]),
        },
        {
          word: "subway",
          imgSrc: "/",
          imgAlt: "subway",
          options: shuffle([
            { option: "crowded", isCorrect: false },
            { option: "quiet", isCorrect: false },
            { option: "subway", isCorrect: true },
            { option: "traffic", isCorrect: false },
          ]),
        },
        {
          word: "traffic",
          imgSrc: "/",
          imgAlt: "traffic",
          options: shuffle([
            { option: "crowded", isCorrect: false },
            { option: "quiet", isCorrect: false },
            { option: "subway", isCorrect: false },
            { option: "traffic", isCorrect: true },
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
            question: "Which place is noisier?",
            options: [
              { option: "Metro City", isCorrect: true },
              { option: "Ben's hometown", isCorrect: false },
            ],
          },
          {
            question: "Which transportation is faster?",
            options: [
              { option: "The subway", isCorrect: true },
              { option: "The bus", isCorrect: false },
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
        "Listen once: which place is quieter, Metro City or Ben's hometown? Then listen again for the comparisons.",
      audioSrc: "",
      lines: [
        { speaker: "Ana", line: ["Do you like living in Metro City?"] },
        { speaker: "Ben", line: ["Yes, but it is noisier than my hometown."] },
        { speaker: "Ana", line: ["Is public transportation good?"] },
        { speaker: "Ben", line: ["Yes. The subway is faster than the bus."] },
        { speaker: "Ana", line: ["What do you miss about your hometown?"] },
        { speaker: "Ben", line: ["It is quieter, cleaner, and less crowded."] },
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
            question: "Which place is noisier?",
            options: [
              { option: "Metro City", isCorrect: true },
              { option: "Ben's hometown", isCorrect: false },
            ],
          },
          {
            question: "Which transportation is faster?",
            options: [
              { option: "The subway", isCorrect: true },
              { option: "The bus", isCorrect: false },
            ],
          },
          {
            question: "What does Ben miss?",
            options: [
              { option: "Quiet, clean streets", isCorrect: true },
              { option: "Heavy traffic", isCorrect: false },
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
          { part: "Comparatives", type: "bold" },
          " compares two people, places, or things.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "",
          "Use adjective + -er + than for short adjectives and more + adjective + than for many long adjectives.",
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
          column: "Short adjectives",
          items: [
            {
              parts: [
                { audio: "small → smaller than" },
                "small → smaller than",
              ],
            },
            { parts: [{ audio: "busy → busier than" }, "busy → busier than"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Long adjectives",
          items: [
            { parts: [{ audio: "more crowded than" }, "more crowded than"] },
            {
              parts: [{ audio: "more expensive than" }, "more expensive than"],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Irregular",
          items: [
            { parts: [{ audio: "good → better than" }, "good → better than"] },
            { parts: [{ audio: "bad → worse than" }, "bad → worse than"] },
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
          "Use than after the comparative: The city is bigger than the town.",
        ],
      },
      {
        as: "p",
        parts: [
          "Use comparatives to support a real choice between two places. Avoid double comparatives: say faster, not more faster.",
        ],
      },
    ],
      },
      {
        type: "ccq",
        value: [
      { as: "p", parts: ["Are we comparing one place or two?"] },
      { as: "p", parts: ["Is a busier place more or less active?"] },
      { as: "p", parts: ["Do we say more faster or faster?"] },
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
            question: "The city is _____ than the village.",
            options: [
              { option: "busier", isCorrect: true },
              { option: "busy", isCorrect: false },
            ],
          },
          {
            question: "The subway is _____ than the bus.",
            options: [
              { option: "faster", isCorrect: true },
              { option: "more fast", isCorrect: false },
            ],
          },
          {
            question: "Which sentence compares two places?",
            options: [
              {
                option: "Downtown is noisier than my neighborhood.",
                isCorrect: true,
              },
              { option: "Downtown is very noisy.", isCorrect: false },
            ],
          },
          {
            question: "You prefer the park because it is _____.",
            options: [
              { option: "quieter than the main square", isCorrect: true },
              { option: "the quieter the main square", isCorrect: false },
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
              { text: "My street is " },
              { blank: "quieter" },
              { text: " than downtown." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The city is " },
              { blank: "more crowded" },
              { text: " on Fridays." },
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
            prompt: "town / city / bigger / the / is / than / the",
            answer: "The city is bigger than the town.",
          },
          {
            prompt: "bus / faster / subway / the / is / the / than",
            answer: "The subway is faster than the bus.",
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
        instruction: "Compare two places and decide which one you prefer:",
        listType: "checkbox",
        items: [
        {
          content: ["Compare your city with another place in four sentences."],
          textarea: true,
        },
        {
          content: ["Write two questions using comparatives."],
          textarea: true,
        },
        {
          content: ["Ask a classmate which place they prefer and why."],
          textarea: false,
        },
      ],
      }
    ],
  },
};
