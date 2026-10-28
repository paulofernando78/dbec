import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends discussing common health problems.",
  audio: "/media/audio/course/a2/unit-12/lesson-1-health-solutions/listen/listen.mp3",
  dialogue: [
    ["Maya", ["You don't look well. What's wrong?"]],
    ["Ben", ["I have a bad headache and sore muscles."]],
    ["Maya", [mark("Do you have a fever?")]],
    ["Ben", ["No, but I didn't sleep well. I also have insomnia."]],
    ["Maya", ["It's important to get some rest. It's also helpful to drink lots of liquids."]],
    ["Ben", [mark("Is it a good idea to take pain medicine?")]],
    ["Maya", ["Yes, but if you feel worse, it's important to see a doctor."]],
    ["Ben", ["Thanks. I'll go home and rest."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which problems does Ben have?",
  options: ["A cough and a cold", "A headache, sore muscles, and insomnia", "A toothache and a fever"],
  answer: "A headache, sore muscles, and insomnia",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Does Ben have a fever?", answer: "No, he doesn't." },
    { question: "What does Maya say is important?", answer: "It's important to get some rest." },
    { question: "When should Ben see a doctor?", answer: "If he feels worse." },
  ],
} satisfies ListenData;
