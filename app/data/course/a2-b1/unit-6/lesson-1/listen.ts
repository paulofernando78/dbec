import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two roommates organizing the kitchen after dinner.",
  audio:
    "/media/audio/course/a2-b1/unit-6/lesson-1-could-you-turn-it-down/listen/listen.mp3",
  dialogue: [
    ["A", ["Could you ", mark("turn off"), " the kitchen light when you're done?"]],
    [
      "B",
      ["Sure. I", mark("'ll turn"), " the kitchen light ", mark("off"), " after I finish the dishes."],
    ],
    ["A", ["Thanks. If the room is still too bright, just turn ", mark("it"), " off now."]],
    ["B", ["No problem. Is there anything else?"]],
    ["A", ["Please ", mark("pick up"), " the packages by the door."]],
    [
      "B",
      ["Okay. I", mark("'ll pick them up"), " and put them on the table."],
    ],
    ["A", ["And can you ", mark("put away"), " the groceries?"]],
    ["B", ["All right. I", mark("'ll put them away"), " after I move the packages."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What are the speakers doing?",
  options: ["Organizing the kitchen", "Packing for a trip", "Cleaning an office"],
  answer: "Organizing the kitchen",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When will speaker B turn off the kitchen light?",
      answer: "After finishing the dishes.",
    },
    {
      question: "Where are the packages?",
      answer: "By the door.",
    },
    {
      question: "Where will speaker B put the packages?",
      answer: "On the table.",
    },
    {
      question: "What does speaker A ask speaker B to put away?",
      answer: "The groceries.",
    },
  ],
} satisfies ListenData;
