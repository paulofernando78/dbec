import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-7/lesson-1-home-tour/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/laura-lives-in-an-apartment.avif?v=1`,
      quote: "Laura lives in an apartment.",
      questions: [
        {
          prompt: "House or apartment?",
          support: ["A house.", "An apartment."],
        },
      ],
    },
    {
      image: `${imageRoot}/pedro-has-a-balcony.avif?v=1`,
      quote: "Pedro's apartment has a balcony.",
      questions: [
        {
          prompt: "Does it have a balcony?",
          support: ["Yes, it does.", "No, it doesn’t."],
        },
      ],
    },
    {
      image: `${imageRoot}/naomi-shows-her-apartment.avif?v=1`,
      quote: "Naomi lives in a cozy apartment.",
      questions: [
        {
          prompt: "Do you live in a house or an apartment?",
          support: ["I live in …"],
        },
      ],
    },
  ],
} satisfies GetReadyData;
