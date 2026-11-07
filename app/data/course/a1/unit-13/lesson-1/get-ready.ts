import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-13/lesson-1-shopping-around/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/drugstore-next-to-bookstore.avif?v=1`,
      quote: "The drugstore is next to the bookstore.",
      questions: [
        {
          prompt: "Where can Laura buy cold medicine?",
          support: ["At the drugstore."],
        },
      ],
    },
    {
      image: `${imageRoot}/post-office-between-shops.avif?v=1`,
      quote: "The post office is between the bank and the coffee shop.",
      questions: [
        {
          prompt: "Where can Pedro buy stamps?",
          support: ["At the post office."],
        },
      ],
    },
    {
      image: `${imageRoot}/coffee-shop-on-corner.avif?v=1`,
      quote: "The coffee shop is on the corner.",
      questions: [
        {
          prompt: "Where is the coffee shop?",
          support: ["It’s on the corner."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
