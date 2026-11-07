import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-6/lesson-1-getting-around/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/pedro-takes-the-train.avif?v=1`,
      quote: "I take the train.",
      questions: [
        {
          prompt: "How does Pedro travel?",
          support: ["He takes the train.", "He drives a car."],
        },
      ],
    },
    {
      image: `${imageRoot}/laura-goes-by-bus.avif?v=1`,
      quote: "Laura goes by bus.",
      questions: [
        {
          prompt: "How does Laura travel?",
          support: ["She goes by bus.", "She walks."],
        },
      ],
    },
    {
      image: `${imageRoot}/eric-rides-his-bike.avif?v=1`,
      quote: "Eric rides his bike.",
      questions: [
        {
          prompt: "How does Eric travel?",
          support: ["He rides his bike.", "He takes the bus."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
