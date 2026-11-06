import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-3/lesson-2-what-are-they-like/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/lucas-points-to-nina.avif?v=1`,
      quote: "Who’s that? — She’s my cousin, Nina.",
      questions: [
        {
          prompt: "What does Nina look like?",
          support: ["She’s tall.", "She has long, curly hair."],
        },
      ],
    },
    {
      image: `${imageRoot}/how-old-is-nina.avif?v=1`,
      quote: "How old is she? — She’s twenty-four.",
      questions: [
        {
          prompt: "Young or old?",
          support: ["She’s young.", "She’s old."],
        },
      ],
    },
    {
      image: `${imageRoot}/nina-friendly-and-quiet.avif?v=1`,
      quote: "What’s she like? — She’s friendly and quiet.",
      questions: [
        {
          prompt: "Friendly or serious?",
          support: ["She’s friendly.", "She’s serious."],
        },
        {
          prompt: "Quiet or talkative?",
          support: ["She’s quiet.", "She’s talkative."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
