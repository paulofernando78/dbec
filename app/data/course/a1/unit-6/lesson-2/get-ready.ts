import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-6/lesson-2-every-day/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/pedro-gets-up-at-seven.avif?v=1`,
      quote: "Pedro gets up at seven every day.",
      questions: [
        {
          prompt: "What time does Pedro get up?",
          support: ["He gets up at seven.", "He gets up at eight."],
        },
      ],
    },
    {
      image: `${imageRoot}/laura-eats-breakfast.avif?v=1`,
      quote: "Laura eats breakfast in the morning.",
      questions: [
        {
          prompt: "What does Laura do in the morning?",
          support: ["She eats breakfast.", "She goes to bed."],
        },
      ],
    },
    {
      image: `${imageRoot}/eric-rides-his-bike.avif?v=1`,
      quote: "Eric rides his bike every day.",
      questions: [
        {
          prompt: "How does Eric leave home?",
          support: ["He rides his bike.", "He takes the train."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
