import type { GetReadyData } from "../../../lesson-step-types";

const image = "/media/images/course/a1/unit-2/lesson-2-where-is-it/get-ready/desk.svg";

export const getReady = {
  type: "get-ready", slug: "get-ready", label: "Get ready",
  slides: [
    { image, quote: "The keys are on the desk." },
    { image, quote: "The charger is under the monitor." },
    { image, quote: "The folders are next to the printer." },
  ],
} satisfies GetReadyData;
