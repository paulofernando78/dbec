import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-10/lesson-2-show-your-talent/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/laura-can-dance.avif?v=1`,
      quote: "Laura can dance very well.",
      questions: [
        {
          prompt: "Can she dance?",
          support: ["Yes, she can."],
        },
      ],
    },
    {
      image: `${imageRoot}/eric-can-play-guitar.avif?v=1`,
      quote: "Eric can play the guitar.",
      questions: [
        {
          prompt: "What can he do?",
          support: ["He can play the guitar."],
        },
      ],
    },
    {
      image: `${imageRoot}/naomi-can-draw.avif?v=1`,
      quote: "Naomi can draw.",
      questions: [
        {
          prompt: "What can you do well?",
          support: ["I can …"],
        },
      ],
    },
  ],
} satisfies GetReadyData;
