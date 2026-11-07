import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-12/lesson-2-feel-better/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/eric-rests-at-home.avif?v=1`,
      quote: "Rest at home today.",
      questions: [
        {
          prompt: "What should Eric do?",
          support: ["He should rest at home."],
        },
      ],
    },
    {
      image: `${imageRoot}/naomi-drinks-tea.avif?v=1`,
      quote: "Drink warm chamomile tea.",
      questions: [
        {
          prompt: "What is Naomi drinking?",
          support: ["She’s drinking warm chamomile tea."],
        },
      ],
    },
    {
      image: `${imageRoot}/pedro-does-not-exercise.avif?v=1`,
      quote: "Don’t exercise with a fever.",
      questions: [
        {
          prompt: "Should Pedro exercise today?",
          support: ["No, he shouldn’t."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
