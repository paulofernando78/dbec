import { audio, content, mark, underline } from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "", img: 0 },
  { word: "", img: 0 },
  { word: "", img: 0 },
  { word: "", img: 0 },
  { word: "", img: 0 },
  { word: "", img: 0 },
  { word: "", img: 0 },
  { word: "", img: 0 },
  { word: "", img: 0 },
  { word: "", img: 0 },
];

export const template = {
  metadata: {
    title: "Authentic Content",
    subtitle: "News | Ted-ED",
    description: "...",
  },

  whiteboard: {
    title: "Authentic Content",
    subtitle: "News | Ted-ED",
    descriptions: ["..."],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      content: [
        {
          question: ["..."],
        },
      ],
    },
    vocabulary: {
      instruction: "Match the words to the pictures.",
      words: words,
    },
    gist: {
      videoPlayer: {
        instruction: "Watch the video and answer the question.",
        videoId: "...",
        title: "...",
      },

      radio: {
        exercise: {
          questions: shuffle([
            {
              question: "What is it mainly about?",
              options: [
                {
                  option: "...",
                  isCorrect: true,
                },
              ],
            },
          ]),
        },
      },
    },
    details: {
      radio: {
        instruction: "Watch again for specific information.",
        exercise: {
          questions: shuffle([
            {
              question: "...",
              options: shuffle([
                {
                  option: "...",
                  isCorrect: true,
                },
              ]),
            },
          ]),
        },
      },
    },
    script: {
      content: [
        {
          en: [
            ...content({
              parts: [audio("..."), "...", mark("..."), underline("...")],
            }),
          ],
          pt: "...",
        },
      ],
    },
    practice: {
      guess: {
        words: shuffle(words),
      },
      fillInTheBlanks: {
        instruction:
          "Fill in the blanks with the correct answer. Then, click the words to be crosshed out.",
        exercise: {
          blocks: shuffle([
            {
              block: [{ text: "..." }, { blank: "..." }, { text: "..." }],
              lineBreak: true,
            },
          ]),
        },
      },
      unscramble: {
        instruction: "Unscramble the sentences.",
        exercise: {
          items: shuffle([
            {
              prompt: "... / ",
              answer: "...",
            },
          ]),
        },
      },
    },
    followUp: {
      list: {
        type: "ol" as const,
        instruction: "Discuss the questions below, using ideas and examples from the video.",
        items: [
          {
            content: ["..."],
          },
        ],
      },
    },
  },
};
