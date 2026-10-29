import type { GetReadyData } from "../../../lesson-step-types";
import { a1GetReadyQuestions } from "../../get-ready-questions";

const image = "/media/images/course/a1/unit-2/lesson-2-where-is-it/get-ready/desk.svg";

export const getReady = {
  type: "get-ready", slug: "get-ready", label: "Get ready",
  instruction: "Look at the picture, listen, and talk.",
  slides: [
    { image, quote: "The keys are on the desk.", questions: a1GetReadyQuestions["2/2"][0] },
    { image, quote: "The charger is under the monitor.", questions: a1GetReadyQuestions["2/2"][1] },
    { image, quote: "The folders are next to the printer.", questions: a1GetReadyQuestions["2/2"][2] },
  ],
} satisfies GetReadyData;
