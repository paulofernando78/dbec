import type { GetReadyData } from "../../../lesson-step-types";
import { a1GetReadyQuestions } from "../../get-ready-questions";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  instruction: "Look at the picture, listen, and talk.",
  slides: [
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/phone.svg",
      quote: "What’s your phone number?",
      questions: a1GetReadyQuestions["1/2"][0],
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/email.svg",
      quote: "What’s your email address?",
      questions: a1GetReadyQuestions["1/2"][1],
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/goodbye.svg",
      quote: "Goodbye. See you soon.",
      questions: a1GetReadyQuestions["1/2"][2],
    },
  ],
} satisfies GetReadyData;
