import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-11/lesson-1-weekend-plans/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/laura-plans-birthday.avif?v=1`,
      quote: "Laura is going to celebrate her birthday.",
      questions: [
        {
          prompt: "What is she going to celebrate?",
          support: ["She’s going to celebrate her birthday."],
        },
      ],
    },
    {
      image: `${imageRoot}/pedro-plans-pasta.avif?v=1`,
      quote: "Pedro is going to make pasta for lunch.",
      questions: [
        {
          prompt: "What is he going to make?",
          support: ["He’s going to make pasta."],
        },
      ],
    },
    {
      image: `${imageRoot}/naomi-takes-bus.avif?v=1`,
      quote: "Naomi is going to take the bus.",
      questions: [
        {
          prompt: "How is she going to travel?",
          support: ["She’s going to travel by bus."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
