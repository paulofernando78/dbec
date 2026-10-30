import type { GetReadyData } from "../../../lesson-step-types";
import { a1GetReadyQuestions } from "../../get-ready-questions";

const imagePath = "/media/images/course/a1/unit-2/lesson-1-whats-this/get-ready";

export const getReady = {
  type: "get-ready", slug: "get-ready", label: "Get ready",
  slides: [
    { image: `${imagePath}/laptop.avif?v=3`, quote: "What’s this? It’s a laptop computer.", questions: a1GetReadyQuestions["2/1"][0] },
    { image: `${imagePath}/adapter.avif?v=3`, quote: "What’s this? It’s an adapter.", questions: a1GetReadyQuestions["2/1"][1] },
    { image: `${imagePath}/notebooks.avif?v=3`, quote: "What are these? They’re notebooks.", questions: a1GetReadyQuestions["2/1"][2] },
    { image: `${imagePath}/keys.avif?v=1`, quote: "What are these? They’re keys.", questions: a1GetReadyQuestions["2/1"][3] },
    { image: `${imagePath}/headset.avif?v=1`, quote: "What’s this? It’s a headset.", questions: a1GetReadyQuestions["2/1"][4] },
  ],
} satisfies GetReadyData;
