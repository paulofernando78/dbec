import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-16/lesson-1-leave-a-message/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/missed-call-discussion.avif?v=1`,
      quote: "A busy moment",
      questions: [
        { prompt: "What is happening in the picture?", support: ["I think ..."] },
        { prompt: "What could Laura do next?", support: ["She could ..."] },
      ],
    },
  ],
} satisfies GetReadyData;
