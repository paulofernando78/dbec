import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to someone explaining a surprising chain of past events.",
  audio: "/media/audio/course/b1/unit-4/lesson-2-what-had-happened/listen/listen.mp3",
  dialogue: [
    ["Dana", ["Why were you late yesterday?"]],
    ["Kai", ["When I came out of the café, my bike had disappeared."]],
    ["Dana", [mark("Had someone stolen it?")]],
    ["Kai", ["That's what I thought. I called the police because I had forgotten where I parked it."]],
    ["Dana", ["So what had actually happened?"]],
    ["Kai", ["A worker had moved it before cleaning the sidewalk."]],
    ["Dana", [mark("Had the police already arrived when you found it?")]],
    ["Kai", ["Yes. By the time I saw the bike, an officer had already taken my statement."]],
    ["Dana", ["What a strange mishap—and a lucky break!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What had happened to Kai's bike?",
  options: ["A worker had moved it", "Someone had stolen it", "The police had taken it"],
  answer: "A worker had moved it",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Why did Kai call the police?", answer: "He thought someone had stolen his bike." },
    { question: "Why had the worker moved the bike?", answer: "To clean the sidewalk." },
    { question: "What had the officer done before Kai found it?", answer: "The officer had taken his statement." },
  ],
} satisfies ListenData;
