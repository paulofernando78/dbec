import type { GetReadyData } from "../../../lesson-step-types";

const imagePath =
  "/media/images/course/a1/unit-9/lesson-1-whats-in-the-kitchen/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imagePath}/checking-for-milk.avif?v=2`,
      quote: "Is there any milk?",
      questions: [
        { prompt: "What food can you see?", support: ["I can see …"] },
      ],
    },
    {
      image: `${imagePath}/some-milk.avif?v=2`,
      quote: "Yes, there is some milk.",
      questions: [
        {
          prompt: "Is there any milk?",
          support: ["Yes, there is.", "No, there isn’t."],
        },
      ],
    },
    {
      image: `${imagePath}/a-few-tomatoes.avif?v=2`,
      quote: "We need a few tomatoes.",
      questions: [{ prompt: "What do we need?", support: ["We need …"] }],
    },
  ],
} satisfies GetReadyData;
