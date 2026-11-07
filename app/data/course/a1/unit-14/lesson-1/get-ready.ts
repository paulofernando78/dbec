import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-14/lesson-1-last-weekend/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/weekend-picnic-discussion.avif?v=1`,
      quote: "A weekend together",
      questions: [
        {
          prompt: "What do you notice in the picture?",
          support: ["I can see ..."],
        },
        {
          prompt: "Which activity looks interesting to you?",
          support: ["The ... looks interesting."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
