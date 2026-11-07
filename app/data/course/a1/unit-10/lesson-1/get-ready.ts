import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-10/lesson-1-game-day/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/pedro-plays-volleyball.avif?v=1`,
      quote: "Pedro plays volleyball.",
      questions: [
        {
          prompt: "What sport is this?",
          support: ["It’s volleyball."],
        },
      ],
    },
    {
      image: `${imageRoot}/naomi-plays-tennis.avif?v=1`,
      quote: "Naomi plays tennis.",
      questions: [
        {
          prompt: "Do you play this sport?",
          support: ["Yes, I do.", "No, I don’t."],
        },
      ],
    },
    {
      image: `${imageRoot}/eric-watches-soccer.avif?v=1`,
      quote: "Eric watches soccer every weekend.",
      questions: [
        {
          prompt: "What sports do you watch?",
          support: ["I watch …"],
        },
      ],
    },
  ],
} satisfies GetReadyData;
