import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two coworkers comparing life experiences.",
  audio: "/media/audio/course/a2/unit-10/lesson-2-life-experiences/listen/listen.mp3",
  dialogue: [
    ["Nora", [mark("Have you ever ridden a motorcycle?")]],
    ["Carlos", ["Yes, I have. I rode one when I lived in Miami."]],
    ["Nora", ["How long did you live there?"]],
    ["Carlos", ["I lived there for four years. How long have you lived in Orlando?"]],
    ["Nora", ["I've lived here since 2022."]],
    ["Carlos", [mark("Have you ever driven a sports car?")]],
    ["Nora", ["No, I've never driven one, but I've ridden in one."]],
    ["Carlos", ["When was that?"]],
    ["Nora", ["Last summer. My cousin rented one for a day."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Carlos talks about:",
  options: ["Life experiences", "A restaurant order", "Health problems"],
  answer: "Life experiences",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "When did Carlos ride a motorcycle?", answer: "When he lived in Miami." },
    { question: "How long has Nora lived in Orlando?", answer: "Since 2022." },
    { question: "Has Nora ever driven a sports car?", answer: "No, she hasn't, but she has ridden in one." },
  ],
} satisfies ListenData;
