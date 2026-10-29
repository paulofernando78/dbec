import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends comparing their exercise routines.",
  audio: "/media/audio/course/a2/unit-6/lesson-2-how-often/listen/listen.mp3",
  dialogue: [
    ["Aaron", [mark("How often do you go jogging?")]],
    ["Riley", ["Usually three times a week. What about you?"]],
    ["Aaron", ["I hardly ever jog, but I play soccer twice a week."]],
    ["Riley", [mark("How long do you practice?")]],
    ["Aaron", ["About two hours each time."]],
    ["Riley", ["How well does your team play?"]],
    ["Aaron", ["Pretty well. We almost always win."]],
    ["Riley", ["Nice! I'm not very good at team sports."]],
    ["Aaron", ["That's OK. You're a great runner, Riley."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "The speakers compare:",
  options: ["Free-time routines", "Family sizes", "Workplaces"],
  answer: "Free-time routines",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How often does Riley go jogging?", answer: "Usually three times a week." },
    { question: "How long does Aaron practice soccer?", answer: "About two hours each time." },
    { question: "Does Aaron's team often win?", answer: "Yes. They almost always win." },
  ],
} satisfies ListenData;
