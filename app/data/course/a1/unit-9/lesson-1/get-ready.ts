import type { GetReadyData } from "../../../lesson-step-types";
import { a1GetReadyQuestions } from "../../get-ready-questions";

const imagePath =
  "/media/images/course/a1/unit-9/lesson-1-whats-in-the-kitchen/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imagePath}/checking-for-milk.avif?v=1`,
      quote: "Is there any milk?",
      questions: a1GetReadyQuestions["9/1"][0],
    },
    {
      image: `${imagePath}/some-milk.avif?v=1`,
      quote: "Yes, there is some milk.",
      questions: a1GetReadyQuestions["9/1"][1],
    },
    {
      image: `${imagePath}/a-few-tomatoes.avif?v=1`,
      quote: "We need a few tomatoes.",
      questions: a1GetReadyQuestions["9/1"][2],
    },
  ],
} satisfies GetReadyData;
