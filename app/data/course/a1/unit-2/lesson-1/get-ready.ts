import type { GetReadyData } from "../../../lesson-step-types";
import { a1GetReadyQuestions } from "../../get-ready-questions";

const imagePath = "/media/images/course/a1/unit-2/lesson-1-whats-this/get-ready";

export const getReady = {
  type: "get-ready", slug: "get-ready", label: "Get ready",
  instruction: "Look at the picture, listen, and talk.",
  slides: [
    { image: `${imagePath}/tablet.avif`, quote: "What’s this? It’s a tablet.", questions: a1GetReadyQuestions["2/1"][0] },
    { image: `${imagePath}/adapter.avif`, quote: "What’s this? It’s an adapter.", questions: a1GetReadyQuestions["2/1"][1] },
    { image: `${imagePath}/notebooks.avif`, quote: "What are these? They’re notebooks.", questions: a1GetReadyQuestions["2/1"][2] },
  ],
} satisfies GetReadyData;
