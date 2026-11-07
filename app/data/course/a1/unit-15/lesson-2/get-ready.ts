import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-15/lesson-2-school-days/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/school-reunion-discussion.avif?v=1`,
      quote: "A school open day",
      questions: [
        { prompt: "What activities do you notice?", support: ["I can see ..."] },
        { prompt: "Which area looks most interesting?", support: ["The ... looks interesting."] },
      ],
    },
  ],
} satisfies GetReadyData;
