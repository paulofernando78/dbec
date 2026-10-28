import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a coworker leaving several indirect messages.",
  audio: "/media/audio/course/b1/unit-3/lesson-2-can-you-tell-her/listen/listen.mp3",
  dialogue: [
    ["Nora", ["Could you give Mary a few messages for me?"]],
    ["Eli", ["Sure. What should I tell her?"]],
    ["Nora", [mark("Please tell her that she left her phone in my car.")]],
    ["Eli", ["OK. Anything else?"]],
    ["Nora", ["Ask her not to forget the students' reports, and ask whether she's graded our tests yet."]],
    ["Eli", ["Got it. Should she call you?"]],
    ["Nora", [mark("Yes. Would you ask her what time she can return my phone call?")]],
    ["Eli", ["No problem. I'll pass everything on."]],
    ["Nora", ["Thanks. I owe you a favor."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What did Mary leave in Nora's car?",
  options: ["Her phone", "The reports", "Her tests"],
  answer: "Her phone",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What shouldn't Mary forget?", answer: "The students' reports." },
    { question: "What should Eli ask about the tests?", answer: "Whether Mary has graded them yet." },
    { question: "What should Mary return?", answer: "Nora's phone call." },
  ],
} satisfies ListenData;
