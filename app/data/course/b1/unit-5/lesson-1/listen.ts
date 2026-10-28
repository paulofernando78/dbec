import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends discussing how they might feel living abroad.",
  audio: "/media/audio/course/b1/unit-5/lesson-1-life-abroad/listen/listen.mp3",
  dialogue: [
    ["Lena", ["Would you like to live in another country?"]],
    ["Mateo", ["Yes. One thing I'd be excited about is learning about a different culture."]],
    ["Lena", [mark("Is there anything you'd be worried about?")]],
    ["Mateo", ["Speaking a foreign language every day is something I'd feel insecure about at first."]],
    ["Lena", ["The thing I'd miss most is my grandmother's cooking."]],
    ["Mateo", [mark("Who are the people you'd miss the most?")]],
    ["Lena", ["My family, definitely. But I'd be enthusiastic about making new friends."]],
    ["Mateo", ["Me too. I think curiosity would help us adjust."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What would make Mateo feel insecure?",
  options: ["Speaking a foreign language", "Trying new foods", "Making new friends"],
  answer: "Speaking a foreign language",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What would excite Mateo?", answer: "Learning about a different culture." },
    { question: "What would Lena miss most?", answer: "Her grandmother's cooking." },
    { question: "What would help them adjust?", answer: "Curiosity." },
  ],
} satisfies ListenData;
