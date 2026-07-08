import { audio, content, mark, underline } from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "barley", img: 0 },
  { word: "grain", img: 0 },
  { word: "malt", img: 0 },
  { word: "yeast", img: 0 },
  { word: "fermentation", img: 0 },
  { word: "hops", img: 0 },
  { word: "brewery", img: 0 },
];

export const howDidAncientCivilizationsBrewBeer = {
  slug: "a-drink-with-a-long-history",

  metadata: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    description: "A Drink with a Long History",
  },
  whiteboard: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    descriptions: ["A Drink with a Long History"],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          content: ["..."],
        },
      ],
    },
    vocabulary: {
      instruction: "Slide the pictures and describe what you see.",
      words: shuffle(words),
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
        instruction: "Watch again and listen for specific information.",
        exercise: {
          questions: shuffle([
            {
              question: "...",
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
        instruction: "Fill in the blanks with the correct answer.",
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
        instruction: "Answer the questions.",
        items: [
          {
            content: ["..."],
          },
        ],
      },
    },
  },
};
