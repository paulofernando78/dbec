import type { GetReadyData } from "../../../lesson-step-types";

const imagePath =
  "/media/images/course/a1/unit-2/lesson-1-whats-this/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imagePath}/laptop.avif?v=3`,
      quote: "What’s this? It’s a laptop computer.",
      questions: [
        {
          prompt: "What’s this?",
          support: ["It’s a laptop computer.", "It’s a phone."],
        },
      ],
    },
    {
      image: `${imagePath}/adapter.avif?v=3`,
      quote: "What’s this? It’s an adapter.",
      questions: [
        {
          prompt: "What’s this?",
          support: ["It’s an adapter.", "It’s a charger."],
        },
      ],
    },
    {
      image: `${imagePath}/notebooks.avif?v=3`,
      quote: "What are these? They’re notebooks.",
      questions: [
        {
          prompt: "What are these?",
          support: ["They’re notebooks.", "They’re folders."],
        },
      ],
    },
    {
      image: `${imagePath}/keys.avif?v=1`,
      quote: "What are these? They’re keys.",
      questions: [
        {
          prompt: "What are these?",
          support: ["They’re keys.", "They’re notebooks."],
        },
      ],
    },
    {
      image: `${imagePath}/headset.avif?v=1`,
      quote: "What’s this? It’s a headset.",
      questions: [
        {
          prompt: "What’s this?",
          support: ["It’s a headset.", "It’s a phone."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
