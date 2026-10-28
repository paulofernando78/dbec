import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing memorable milestones.",
  audio: "/media/audio/course/b1/unit-11/lesson-1-lifes-milestones/listen/listen.mp3",
  dialogue: [
    ["Maya", ["What was your most unforgettable first experience?"]],
    ["Leo", ["Probably my first job. Before I started it, I had never been responsible for my own money."]],
    ["Maya", [mark("Did that experience change you?")]],
    ["Leo", ["Definitely. As soon as I received my first paycheck, I opened a bank account and became more pragmatic."]],
    ["Maya", ["Mine was moving out of my parents' home for college."]],
    ["Leo", [mark("Had you ever lived away from home before?")]],
    ["Maya", ["No. By the time the first semester ended, though, I had become much more independent."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which milestone made Leo more pragmatic?",
  options: ["Moving out", "Receiving his first paycheck", "Graduating from college"],
  answer: "Receiving his first paycheck",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What had Leo never managed before his first job?", answer: "His own money." },
    { question: "Why did Maya move away from home?", answer: "To go to college." },
    { question: "How had Maya changed by the end of her first semester?", answer: "She had become much more independent." },
  ],
} satisfies ListenData;
