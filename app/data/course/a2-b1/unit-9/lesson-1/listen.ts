import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two neighbors discussing how food shopping has changed.",
  audio:
    "/media/audio/course/a2-b1/unit-9/lesson-1-then-now-and-next/listen/listen.mp3",
  dialogue: [
    ["A", ["This neighborhood has changed a lot, hasn't it?"]],
    ["B", ["It has. Ten years ago, the neighborhood ", mark("had"), " only one small market."]],
    ["A", ["That's right. We ", mark("used to walk"), " several blocks to buy groceries."]],
    ["B", ["Shopping is much easier now. These days, local farmers ", mark("are selling"), " produce at a weekly street market."]],
    ["A", ["And now, many residents ", mark("order"), " groceries through an app. I use it twice a month."]],
    ["B", ["There are more changes ahead. Next year, the city ", mark("will open"), " a larger public market near the station."]],
    ["A", ["Do you think technology will change shopping even more?"]],
    ["B", ["Probably. In the future, delivery robots ", mark("might become"), " common."]],
    ["A", ["That would be convenient, but I'd still visit the street market for fresh vegetables."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "How many small markets did the neighborhood have ten years ago?",
  options: ["One", "Two", "Three"],
  answer: "One",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "How far did the neighbors use to walk for groceries?",
      answer: "Several blocks.",
    },
    {
      question: "Where are local farmers selling produce these days?",
      answer: "At a weekly street market.",
    },
    {
      question: "How often does speaker A order groceries through an app?",
      answer: "Twice a month.",
    },
    {
      question: "Where will the city open a public market next year?",
      answer: "Near the station.",
    },
    {
      question: "What might become common in the future?",
      answer: "Delivery robots.",
    },
  ],
} satisfies ListenData;
