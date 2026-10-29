import type { GetReadyData } from "../../../lesson-step-types";

const image = "/media/images/course/a1/unit-2/lesson-1-whats-this/get-ready/objects.svg";

export const getReady = {
  type: "get-ready", slug: "get-ready", label: "Get ready",
  slides: [
    { image, quote: "What’s this? It’s a tablet." },
    { image, quote: "What’s this? It’s an adapter." },
    { image, quote: "What are these? They’re notebooks." },
  ],
} satisfies GetReadyData;
