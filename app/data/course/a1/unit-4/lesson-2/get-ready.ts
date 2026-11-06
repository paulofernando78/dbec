import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-4/lesson-2-weather-watch/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/rainy-morning.avif?v=4`,
      quote: "Laura and Eric are wearing coats.",
      questions: [
        {
          prompt: "Is it raining?",
          support: ["Yes, it is."],
        },
        {
          prompt: "What are they wearing?",
          support: ["They're wearing coats."],
        },
      ],
    },
    {
      image: `${imageRoot}/cold-windy-day.avif?v=3`,
      quote: "It’s cold and windy. Eric is wearing a coat and a scarf.",
      questions: [
        {
          prompt: "What is Eric wearing?",
          support: ["He’s wearing a coat and a scarf."],
        },
      ],
    },
    {
      image: `${imageRoot}/hot-sunny-afternoon.avif?v=2`,
      quote: "It’s hot and sunny. They’re wearing light clothes.",
      questions: [
        {
          prompt: "What are they wearing?",
          support: ["Naomi is wearing a dress.", "Pedro is wearing shorts."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
