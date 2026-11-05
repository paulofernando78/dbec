import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-5/lesson-1-what-time-is-it-there/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/seven-oclock.avif`,
      quote: "What time is it? — It’s seven o’clock.",
      questions: [
        {
          prompt: "What time is it?",
          support: ["It’s seven o’clock."],
        },
      ],
    },
    {
      image: `${imageRoot}/sao-paulo-london.avif`,
      quote: "It’s 6:45 A.M. in São Paulo. It’s 10:45 A.M. in London.",
      questions: [
        {
          prompt: "Is it the same time in both cities?",
          support: ["No, it isn’t."],
        },
      ],
    },
    {
      image: `${imageRoot}/lunch-at-twelve-thirty.avif`,
      quote: "Lunch is at 12:30 P.M.",
      questions: [
        {
          prompt: "What time is your lunch?",
          support: ["My lunch is at …"],
        },
      ],
    },
  ],
} satisfies GetReadyData;
