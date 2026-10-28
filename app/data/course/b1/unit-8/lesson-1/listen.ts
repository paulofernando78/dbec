import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends choosing between different ways to learn.",
  audio: "/media/audio/course/b1/unit-8/lesson-1-id-rather/listen/listen.mp3",
  dialogue: [
    ["Rina", [mark("Would you prefer to study online or at a school?")]],
    ["Jon", ["I'd prefer to study online because I work full time."]],
    ["Rina", ["Would you rather study alone or join a study group?"]],
    ["Jon", ["I'd rather study alone than follow someone else's schedule."]],
    ["Rina", [mark("Would you rather earn a degree or get a professional certification?")]],
    ["Jon", ["I'd prefer to get a certification first. It could help me change careers sooner."]],
    ["Rina", ["I'd rather go to college. I want to meet people and expand my network."]],
    ["Jon", ["Different paths make sense for different goals."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why does Jon prefer online study?",
  options: ["He works full time", "He wants to meet people", "He dislikes technology"],
  answer: "He works full time",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Does Jon prefer a study group?", answer: "No. He'd rather study alone." },
    { question: "Which qualification does Jon want first?", answer: "A professional certification." },
    { question: "Why would Rina rather go to college?", answer: "To meet people and expand her network." },
  ],
} satisfies ListenData;
