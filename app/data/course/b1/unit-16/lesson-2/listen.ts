import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends imagine what they will have accomplished in the future.",
  audio: "/media/audio/course/b1/unit-16/lesson-2-by-this-time-next-year/listen/listen.mp3",
  dialogue: [
    ["Lena", ["What do you hope you'll have achieved by this time next year?"]],
    ["Ravi", ["I'll have completed my certification, and I hope I'll have found a job that lets me help others."]],
    ["Lena", [mark("What would you like to have achieved in five years?")]],
    ["Ravi", ["I'd like to have started a nonprofit and run my first marathon. What about you?"]],
    ["Lena", ["I hope I'll have traveled to six new countries and learned to live with less."]],
    ["Ravi", [mark("Those are ambitious goals. Which one will you work on first?")]],
    ["Lena", ["The marathon. By next spring, I'll have completed my first long-distance race."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What will Ravi have completed by this time next year?",
  options: ["A marathon", "A certification", "A trip abroad"],
  answer: "A certification",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What would Ravi like to have started in five years?", answer: "A nonprofit." },
    { question: "How many new countries does Lena hope to have visited?", answer: "Six." },
    { question: "Which goal will Lena work on first?", answer: "Running a marathon." },
  ],
} satisfies ListenData;
