import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing what they want from a career.",
  audio: "/media/audio/course/b1/unit-2/lesson-1-what-makes-a-good-job/listen/listen.mp3",
  dialogue: [
    ["Amir", ["What matters most to you in a career?"]],
    ["Julia", ["Security is important, but doing meaningful work matters more."]],
    ["Amir", [mark("Would working as a teacher appeal to you?")]],
    ["Julia", ["Maybe. Helping young people would be rewarding, but managing a classroom could be stressful."]],
    ["Amir", ["I'd love being a tour guide. Meeting people and traveling sound exciting."]],
    ["Julia", [mark("Wouldn't repeating the same information get boring?")]],
    ["Amir", ["Possibly, but learning about different cultures would keep it interesting."]],
    ["Julia", ["Then adventure is clearly one of your priorities."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What kind of work would Julia find rewarding?",
  options: ["Helping young people", "Testing video games", "Selling financial products"],
  answer: "Helping young people",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What two career priorities does Julia mention?", answer: "Security and meaningful work." },
    { question: "Which job would Amir love?", answer: "Being a tour guide." },
    { question: "What might be boring about that job?", answer: "Repeating the same information." },
  ],
} satisfies ListenData;
