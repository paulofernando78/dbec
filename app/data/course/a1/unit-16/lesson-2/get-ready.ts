import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-16/lesson-2-youre-invited/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/weekend-choices-discussion.avif?v=1`,
      quote: "Weekend choices",
      questions: [
        { prompt: "What activities can you see?", support: ["I can see ..."] },
        { prompt: "Which activity looks best for the group?", support: ["The ... looks best."] },
      ],
    },
  ],
} satisfies GetReadyData;
