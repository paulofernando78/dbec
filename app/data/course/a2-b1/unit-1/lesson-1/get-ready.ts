import type { GetReadyData } from "../../../lesson-step-types";

const imagePath =
  "/media/images/course/a2-b1/unit-1/lesson-1-asking-about-the-past/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imagePath}/laura-eric-looking-back.avif?v=4`,
      audio: false,
      quote: "Look at Laura and Eric’s social media profiles.",
      discuss: {
        interaction: ["pairs"],
        questions: [
          {
            prompt: "What information can you see in the profiles?",
          },
          {
            prompt: "Which profile is more interesting to you? Why?",
          },
          {
            prompt: "What information do people usually share on social media profiles?",
          },
        ],
      },
    },
  ],
} satisfies GetReadyData;
