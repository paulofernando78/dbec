import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-3/lesson-1-where-are-you-from/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/international-event.avif`,
      quote: "Where are you from?",
      questions: [
        {
          prompt: "What can you see?",
          support: ["A world map."],
        },
      ],
    },
    {
      image: `${imageRoot}/quito-ecuador.avif`,
      quote: "I’m from Quito, Ecuador.",
      questions: [
        {
          prompt: "Is Quito a city or a country?",
          support: ["It’s a city.", "It’s a country."],
        },
      ],
    },
    {
      image: `${imageRoot}/brazilian-participant.avif`,
      quote: "Are you Brazilian? — Yes, I am.",
      questions: [
        {
          prompt: "Where are you from?",
          support: ["I’m from …"],
        },
      ],
    },
  ],
} satisfies GetReadyData;
