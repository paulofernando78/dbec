import { audio, content, mark, underline } from "@/helpers/content";

export const blank = {
  slug: "blank",

  metadata: {
    title: "Advanced | News | ",
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
          value: ["..."],
        },
      ],
    },
    vocabulary: {
      prompt: "Slide the pictures and describe what you see.",
      imgs: [
        {
          word: "...",
          img: 0,
        },
      ],
    },
    gist: {
      paragraph: [
        ...content({
          parts: ["Watch the video once and choose the best summary."],
        }),
      ],

      videoPlayer: {
        videoId: "...",
        title: "...",
        instruction: "Watch the video and answer the question.",
      },

      radio: {
        exercise: {
          questions: [
            {
              question: "...",
              options: [
                {
                  option: "...",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
      },
    },
    details: {
      radio: {
        instruction: "Watch again and listen for specific information.",
        exercise: {
          questions: [
            {
              question: "...",
              options: [
                {
                  option: "...",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
      },
    },
    script: {
      content: [
        {
          en: [
            ...content({
              parts: [""],
            }),
          ],
          pt: "...",
        },
      ],
    },
    practice: {
      guess: {
        words: [
          {
            word: "cat",
            img: 0,
          },
        ],
      },
      fillInTheBlanks: {
        instruction: "Fill in the blanks with the correct answer.",
        exercise: {
          blocks: [
            {
              block: [{ text: "..." }, { blank: "..." }, { text: "..." }],
              lineBreak: true,
            },
          ],
        },
      },
      unscramble: {
        instruction: "Unscramble the sentences.",
        exercise: {
          items: [
            {
              prompt: "... / ",
              answer: "...",
            },
          ],
        },
      },
    },
    followUp: {
      list: {
        type: "ol" as const,
        instruction: "Answer the questions.",
        items: [
          {
            value: ["..."],
          },
        ],
      },
    },
  },
};
