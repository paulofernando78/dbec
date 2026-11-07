import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-14/lesson-2-vacation-stories/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/recife-vacation-discussion.avif?v=1`,
      quote: "A vacation in Recife",
      questions: [
        {
          prompt: "What places and activities do you notice?",
          support: ["I can see ..."],
        },
        {
          prompt: "Which place looks interesting to you?",
          support: ["The ... looks interesting."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
