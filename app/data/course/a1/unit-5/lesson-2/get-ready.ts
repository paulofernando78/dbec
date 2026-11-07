import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-5/lesson-2-what-are-they-doing/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/studying-english-evening.avif?v=1`,
      quote: "What are you doing? — I’m studying English.",
      questions: [
        {
          prompt: "What is he doing?",
          support: ["He’s studying English.", "He’s watching TV."],
        },
      ],
    },
    {
      image: `${imageRoot}/eva-sleeping-at-night.avif?v=1`,
      quote: "What’s Eva doing? — She’s sleeping.",
      questions: [
        {
          prompt: "Is she sleeping?",
          support: ["Yes, she is.", "No, she isn’t."],
        },
      ],
    },
    {
      image: `${imageRoot}/mia-leo-watching-tv.avif?v=1`,
      quote: "What are they doing? — They’re watching TV.",
      questions: [
        {
          prompt: "What are they doing?",
          support: ["They’re watching TV.", "They’re working."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
