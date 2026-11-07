import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-9/lesson-2-eating-habits/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/laura-eats-breakfast.avif?v=1`,
      quote: "Laura always eats breakfast.",
      questions: [
        {
          prompt: "Do you eat breakfast every day?",
          support: ["Yes, I do.", "No, I don’t."],
        },
      ],
    },
    {
      image: `${imageRoot}/pedro-cooks-at-home.avif?v=1`,
      quote: "Pedro often cooks at home.",
      questions: [
        {
          prompt: "Do you cook at home?",
          support: ["I usually …", "I never …"],
        },
      ],
    },
    {
      image: `${imageRoot}/eric-drinks-tea.avif?v=1`,
      quote: "Eric never drinks coffee. He often drinks tea.",
      questions: [
        {
          prompt: "What do you drink in the morning?",
          support: ["I drink …"],
        },
      ],
    },
  ],
} satisfies GetReadyData;
