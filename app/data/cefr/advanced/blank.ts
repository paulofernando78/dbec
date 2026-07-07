import { audio, content, mark, underline } from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

const words = [{ word: "", img: 0 }];

export const blank = {
  slug: "blank",

  metadata: {
    title: "Advanced | News | Ted-ED",
    subtitle: "News | Ted-ED:",
    description: "A ...",
  },
  whiteboard: {
    title: "Advanced",
    subtitle: "News / Ted-ED",
    descriptions: ["..."],
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
