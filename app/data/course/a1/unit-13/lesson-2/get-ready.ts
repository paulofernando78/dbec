import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-13/lesson-2-which-way/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/laura-asks-directions.avif?v=1`,
      quote: "Laura asks Eric for directions.",
      questions: [
        {
          prompt: "How can she get to the square?",
          support: ["Go straight along the avenue."],
        },
      ],
    },
    {
      image: `${imageRoot}/pedro-walks-straight.avif?v=1`,
      quote: "Pedro walks straight for two blocks.",
      questions: [
        {
          prompt: "Which way should he go?",
          support: ["He should go straight."],
        },
      ],
    },
    {
      image: `${imageRoot}/naomi-turns-right.avif?v=1`,
      quote: "Naomi turns right at the park.",
      questions: [
        {
          prompt: "Does she turn left or right?",
          support: ["She turns right."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
