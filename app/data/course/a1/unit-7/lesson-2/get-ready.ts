import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-7/lesson-2-dream-home/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/laura-on-the-sofa.avif?v=1`,
      quote: "There is a sofa in the living room.",
      questions: [
        {
          prompt: "What is in the room?",
          support: ["There is a sofa.", "There are two lamps."],
        },
      ],
    },
    {
      image: `${imageRoot}/naomi-and-two-lamps.avif?v=1`,
      quote: "There are two lamps by the bed.",
      questions: [
        {
          prompt: "How many lamps are there?",
          support: ["There are two lamps."],
        },
      ],
    },
    {
      image: `${imageRoot}/pedro-opens-the-dishwasher.avif?v=1`,
      quote: "Is there a dishwasher? — Yes, there is.",
      questions: [
        {
          prompt: "Is there a dishwasher?",
          support: ["Yes, there is.", "No, there isn’t."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
