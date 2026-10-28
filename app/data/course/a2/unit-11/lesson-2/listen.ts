import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a local guide recommending places to a visitor.",
  audio: "/media/audio/course/a2/unit-11/lesson-2-you-should-go/listen/listen.mp3",
  dialogue: [
    ["Visitor", [mark("What should I see while I'm here?")]],
    ["Guide", ["You should visit the history museum and walk around the old town."]],
    ["Visitor", ["What can I do in the evening?"]],
    ["Guide", ["You can see a concert in the main square."]],
    ["Visitor", [mark("Is there anything I shouldn't miss?")]],
    ["Guide", ["You can't miss the street-food market. It's excellent."]],
    ["Visitor", ["Should I take a taxi there?"]],
    ["Guide", ["No. You can walk easily, but you shouldn't go too late."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What shouldn't the visitor miss?",
  options: ["The street-food market", "The business district", "The train station"],
  answer: "The street-food market",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What should the visitor see?", answer: "The history museum and the old town." },
    { question: "What can the visitor do in the evening?", answer: "See a concert in the main square." },
    { question: "Should the visitor take a taxi?", answer: "No. The visitor can walk." },
  ],
} satisfies ListenData;
