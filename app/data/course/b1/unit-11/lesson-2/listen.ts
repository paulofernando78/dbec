import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to former classmates reflecting on choices they made in college.",
  audio: "/media/audio/course/b1/unit-11/lesson-2-if-i-had-known/listen/listen.mp3",
  dialogue: [
    ["Nina", ["Do you ever regret anything about college?"]],
    ["Omar", ["I should have done an internship. If I'd had more experience, I could have found a job sooner."]],
    ["Nina", [mark("Why didn't you apply for one?")]],
    ["Omar", ["I spent too much time socializing. I shouldn't have ignored my professor's advice."]],
    ["Nina", ["I wish I'd studied abroad for a semester."]],
    ["Omar", [mark("Would that have changed your career?")]],
    ["Nina", ["Maybe. I would have improved my Spanish, and I might have discovered new opportunities."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What does Omar regret not doing?",
  options: ["Studying abroad", "Doing an internship", "Taking out a loan"],
  answer: "Doing an internship",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What might more experience have helped Omar do?", answer: "Find a job sooner." },
    { question: "Whose advice did Omar ignore?", answer: "His professor's advice." },
    { question: "What language would Nina have improved?", answer: "Spanish." },
  ],
} satisfies ListenData;
