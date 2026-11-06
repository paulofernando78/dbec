import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-4/lesson-1-whose-is-it/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/whose-blue-jacket.avif?v=2`,
      quote: "Whose jacket is this? — It’s Eric’s.",
      questions: [
        {
          prompt: "Whose jacket is this?",
          support: ["It’s Eric’s.", "It’s Laura’s."],
        },
      ],
    },
    {
      image: `${imageRoot}/is-this-your-scarf.avif?v=1`,
      quote: "Is this your scarf? — Yes, it’s mine.",
      questions: [
        {
          prompt: "Is this Naomi’s scarf?",
          support: ["Yes, it is.", "No, it isn’t."],
        },
      ],
    },
    {
      image: `${imageRoot}/whose-gloves.avif?v=1`,
      quote: "Whose gloves are these? — They’re Laura’s.",
      questions: [
        {
          prompt: "Whose gloves are these?",
          support: ["They’re Laura’s.", "They’re Naomi’s."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
