import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends explaining why someone missed an important dinner.",
  audio: "/media/audio/course/b1/unit-13/lesson-1-what-must-have-happened/listen/listen.mp3",
  dialogue: [
    ["Iris", ["Sam never arrived for the anniversary dinner. He must have forgotten."]],
    ["Noah", ["He couldn't have forgotten. He talked about it yesterday."]],
    ["Iris", [mark("Then what do you think happened?")]],
    ["Noah", ["He may have had an emergency, or his phone might have stopped working."]],
    ["Iris", ["He always calls when he is late, so he must not have had my number with him."]],
    ["Noah", [mark("Let's wait before we criticize him. There could have been a good reason.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why does Noah think Sam could not have forgotten?",
  options: ["Sam called Iris", "Sam discussed the dinner yesterday", "Sam arrived early"],
  answer: "Sam discussed the dinner yesterday",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What two possible explanations does Noah give?", answer: "Sam may have had an emergency, or his phone might have stopped working." },
    { question: "What does Sam usually do when he is late?", answer: "He calls." },
    { question: "What does Noah suggest before criticizing Sam?", answer: "Waiting to learn what happened." },
  ],
} satisfies ListenData;
