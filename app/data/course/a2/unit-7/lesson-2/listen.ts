import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends talking about a recent vacation.",
  audio: "/media/audio/course/a2/unit-7/lesson-2-vacation-memories/listen/listen.mp3",
  dialogue: [
    ["Noah", [mark("Where were you on vacation?")]],
    ["Mia", ["I was in California with my cousin."]],
    ["Noah", ["Were your parents there, too?"]],
    ["Mia", ["No, they weren't. They were at home."]],
    ["Noah", [mark("How was the weather?")]],
    ["Mia", ["It was warm and sunny, but the ocean was cold."]],
    ["Noah", ["How long were you away?"]],
    ["Mia", ["We were there for a week."]],
    ["Noah", ["Was the hotel nice?"]],
    ["Mia", ["Yes, it was. The vacation was excellent."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Who was on vacation with Mia?",
  options: ["Her parents", "Her cousin", "Her friend"],
  answer: "Her cousin",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Where was Mia?", answer: "She was in California." },
    { question: "How was the weather?", answer: "It was warm and sunny." },
    { question: "How long was she away?", answer: "She was away for a week." },
  ],
} satisfies ListenData;
