import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-11/lesson-2-lets-celebrate/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/laura-prepares-party.avif?v=1`,
      quote: "Laura is going to have a party at home.",
      questions: [
        {
          prompt: "Where is she going to celebrate?",
          support: ["She’s going to celebrate at home."],
        },
      ],
    },
    {
      image: `${imageRoot}/naomi-arrives-by-taxi.avif?v=1`,
      quote: "Naomi is going to take a taxi to the party.",
      questions: [
        {
          prompt: "How is she going to get there?",
          support: ["She’s going to take a taxi."],
        },
      ],
    },
    {
      image: `${imageRoot}/friends-watch-fireworks.avif?v=1`,
      quote: "They’re going to watch fireworks at midnight.",
      questions: [
        {
          prompt: "What are they going to do at midnight?",
          support: ["They’re going to watch fireworks."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
