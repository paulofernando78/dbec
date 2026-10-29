import type { GetReadyData } from "../../../lesson-step-types";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/phone.svg",
      quote: "What’s your phone number?",
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/email.svg",
      quote: "What’s your email address?",
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/goodbye.svg",
      quote: "Goodbye. See you soon.",
    },
  ],
} satisfies GetReadyData;
