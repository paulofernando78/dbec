import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to an international student asking about local etiquette.",
  audio: "/media/audio/course/b1/unit-5/lesson-2-what-to-expect/listen/listen.mp3",
  dialogue: [
    ["Mateo", ["I'm having dinner at my host family's home. What should I know?"]],
    ["Lena", [mark("When you visit someone, it's the custom to bring a small gift.")]],
    ["Mateo", ["Am I supposed to arrive early?"]],
    ["Lena", ["No. You aren't supposed to arrive too early, but you're expected to be on time."]],
    ["Mateo", [mark("What if I want to bring a friend?")]],
    ["Lena", ["If you want to bring someone, ask your host first. It's not acceptable to bring a guest without asking."]],
    ["Mateo", ["Should I remove my shoes?"]],
    ["Lena", ["Watch what your hosts do. If they remove theirs, you should remove yours, too."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What should Mateo bring?",
  options: ["A small gift", "Another guest", "His own food"],
  answer: "A small gift",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Is Mateo supposed to arrive very early?", answer: "No, he isn't." },
    { question: "What should he do before bringing a friend?", answer: "Ask the host first." },
    { question: "When should he remove his shoes?", answer: "If his hosts remove theirs." },
  ],
} satisfies ListenData;
