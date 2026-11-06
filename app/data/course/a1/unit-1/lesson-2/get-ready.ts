import type { GetReadyData } from "../../../lesson-step-types";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/phone-number.avif?v=1",
      quote: "What’s your phone number?",
      questions: [
        {
          prompt: "Phone number or email?",
          support: ["Phone number.", "Email."],
        },
      ],
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/email.avif?v=2",
      quote: "Here’s my card.",
      questions: [
        { prompt: "Is this an email address?", support: ["Yes.", "No."] },
      ],
    },
    {
      image:
        "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/goodbye.avif?v=1",
      quote: "Goodbye. See you soon.",
      questions: [
        { prompt: "Hello or goodbye?", support: ["Hello.", "Goodbye."] },
      ],
    },
  ],
} satisfies GetReadyData;
