import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two classmates compare their families.",
  audio: "",
  dialogue: [
    ["Nina", ["Do you have a big family, Leo?"]],
    ["Leo", ["Yes. I have ", mark("a lot of cousins"), "."]],
    ["Nina", ["How many brothers and sisters do you have?"]],
    ["Leo", ["No. I have one sister. What about you?"]],
    ["Nina", ["My family is small. I have ", mark("a few cousins"), "."]],
    ["Leo", ["Any brothers or sisters?"]],
    ["Nina", ["No, I ", mark("don't have any brothers or sisters"), "."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Nina and Leo compare:",
  options: ["Their families", "Their jobs", "Their neighborhoods"],
  answer: "Their families",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Leo's cousins: many or few?", answer: "Many." },
    { question: "Leo's sisters:", answer: "One." },
    { question: "Nina's brothers and sisters:", answer: "None." },
  ],
} satisfies ListenData;
