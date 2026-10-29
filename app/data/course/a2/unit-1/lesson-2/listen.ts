import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to Maya and Daniel getting to know each other after class.",
  audio: "/media/audio/course/a2/unit-1/lesson-2-getting-to-know-you/listen/listen.mp3",
  dialogue: [
    ["Daniel", [mark("Are you free after class?")]],
    ["Maya", ["Yes, I am. Is the student café open?"]],
    ["Daniel", ["Yes, it is. Do you like your classes so far?"]],
    ["Maya", ["Yes, I do. They're really interesting."]],
    ["Daniel", [mark("Is geography your favorite subject?")]],
    ["Maya", ["No, it isn't. My favorite subject is biology. What about you?"]],
    ["Daniel", ["I like history, but chemistry isn't easy for me."]],
    ["Maya", [mark("Are your chemistry classes in the morning?")]],
    ["Daniel", ["No, they aren't. They're in the afternoon."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why are Maya and Daniel talking?",
  options: ["To get to know each other", "To order food", "To plan a vacation"],
  answer: "To get to know each other",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Is Maya free after class?", answer: "Yes, she is." },
    { question: "Is chemistry easy for Daniel?", answer: "No, it isn't." },
    { question: "Are Daniel's chemistry classes in the morning?", answer: "No, they aren't. They're in the afternoon." },
  ],
} satisfies ListenData;
