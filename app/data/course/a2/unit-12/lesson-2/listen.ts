import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a customer asking for advice at a pharmacy.",
  audio: "/media/audio/course/a2/unit-12/lesson-2-at-the-pharmacy/listen/listen.mp3",
  dialogue: [
    ["Pharmacist", ["May I help you?"]],
    ["Customer", [mark("Could I have something for a backache?")]],
    ["Pharmacist", ["You could try this new cream."]],
    ["Customer", ["Do you have a heating pad, too?"]],
    ["Pharmacist", ["Yes. You should get this small one. It's easy to use."]],
    ["Customer", [mark("May I also have a bottle of pain medicine?")]],
    ["Pharmacist", ["Of course. Why don't you try these pills?"]],
    ["Customer", ["Great. I'll take the cream, the heating pad, and the pills."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What problem does the customer have?",
  options: ["A cough", "A backache", "A toothache"],
  answer: "A backache",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What does the pharmacist first suggest?", answer: "A new cream." },
    { question: "Which heating pad does the pharmacist recommend?", answer: "The small one." },
    { question: "What does the customer buy?", answer: "Cream, a heating pad, and pain pills." },
  ],
} satisfies ListenData;
