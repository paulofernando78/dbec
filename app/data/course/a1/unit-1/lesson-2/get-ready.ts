import type { GetReadyData } from "../../../lesson-step-types";
import { a1GetReadyQuestions } from "../../get-ready-questions";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/phone.avif",
      quote: "What’s your phone number?",
      questions: a1GetReadyQuestions["1/2"][0],
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/email.avif",
      quote: "What’s your email address?",
      questions: a1GetReadyQuestions["1/2"][1],
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/goodbye.avif",
      quote: "Goodbye. See you soon.",
      questions: a1GetReadyQuestions["1/2"][2],
    },
  ],
} satisfies GetReadyData;
