import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-3/lesson-1-where-are-you-from/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/international-event.avif?v=1`,
      quote: "Where are you from?",
      questions: [
        {
          prompt: "What can you see?",
          support: ["A world map."],
        },
      ],
    },
    {
      image: `${imageRoot}/laura-pedro-eric-naomi.avif?v=2`,
      quote:
        "Laura is from Los Angeles. Pedro is from São Paulo. Eric is from London. Naomi is from Tokyo.",
      questions: [
        {
          prompt: "Where are they from?",
          support: [
            "Laura is from the United States.",
            "Pedro is from Brazil.",
            "Eric is from England.",
            "Naomi is from Japan.",
          ],
        },
      ],
    },
    {
      image: `${imageRoot}/brazilian-participant.avif?v=3`,
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
