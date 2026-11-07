import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-15/lesson-1-family-history/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/family-album-discussion.avif?v=1`,
      quote: "Family stories",
      questions: [
        { prompt: "What do you notice in the room?", support: ["I can see ..."] },
        { prompt: "What might the family talk about?", support: ["Maybe they talk about ..."] },
      ],
    },
  ],
} satisfies GetReadyData;
