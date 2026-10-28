import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two entrepreneurs discussing a new business idea.",
  audio: "/media/audio/course/b1/unit-12/lesson-1-what-success-takes/listen/listen.mp3",
  dialogue: [
    ["Rosa", ["What does our tutoring app need in order to succeed?"]],
    ["Ben", ["For the app to attract students, it has to be affordable and easy to use."]],
    ["Rosa", [mark("What about the tutors?")]],
    ["Ben", ["We need knowledgeable, experienced people. To attract them, we should offer flexible schedules."]],
    ["Rosa", ["And how are we going to finance the business?"]],
    ["Ben", [mark("We could try a crowd-funding platform before applying for a bank loan.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What kind of business are Rosa and Ben planning?",
  options: ["A tutoring app", "A personal training studio", "A news website"],
  answer: "A tutoring app",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What two qualities should the app have?", answer: "It should be affordable and easy to use." },
    { question: "What qualities do the tutors need?", answer: "They need to be knowledgeable and experienced." },
    { question: "What financing option will they try first?", answer: "A crowd-funding platform." },
  ],
} satisfies ListenData;
