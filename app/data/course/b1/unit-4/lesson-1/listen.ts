import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends discussing an unusual news report.",
  audio: "/media/audio/course/b1/unit-4/lesson-1-what-was-happening/listen/listen.mp3",
  dialogue: [
    ["Dana", ["Did you see the story about the closed streets?"]],
    ["Kai", ["No. What happened?"]],
    ["Dana", [mark("A man was looking for his cat when he found a suspicious package.")]],
    ["Kai", ["What were people doing when the police arrived?"]],
    ["Dana", ["Shop owners were closing their stores while officers were blocking the road."]],
    ["Kai", [mark("Did the package contain anything dangerous?")]],
    ["Dana", ["No. When experts opened it, they discovered some old clothes."]],
    ["Kai", ["So the cat created a major news story!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What was the man doing when he found the package?",
  options: ["Looking for his cat", "Closing a store", "Blocking the road"],
  answer: "Looking for his cat",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What were shop owners doing?", answer: "They were closing their stores." },
    { question: "What were officers doing?", answer: "They were blocking the road." },
    { question: "What was inside the package?", answer: "Some old clothes." },
  ],
} satisfies ListenData;
