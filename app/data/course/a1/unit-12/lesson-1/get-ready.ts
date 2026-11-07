import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-12/lesson-1-feeling-sick/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/eric-has-cold.avif?v=1`,
      quote: "Eric has a cold. He doesn’t feel well.",
      questions: [
        {
          prompt: "What’s the matter?",
          support: ["He has a cold."],
        },
      ],
    },
    {
      image: `${imageRoot}/pedro-has-fever.avif?v=1`,
      quote: "Pedro has a fever. He feels awful.",
      questions: [
        {
          prompt: "How does he feel?",
          support: ["He feels awful."],
        },
      ],
    },
    {
      image: `${imageRoot}/naomi-sore-throat.avif?v=1`,
      quote: "Naomi has a sore throat.",
      questions: [
        {
          prompt: "Which part of her body is sore?",
          support: ["Her throat is sore."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
