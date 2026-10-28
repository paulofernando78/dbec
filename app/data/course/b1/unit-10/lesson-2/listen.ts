import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to students predicting how life may change.",
  audio: "/media/audio/course/b1/unit-10/lesson-2-looking-ahead/listen/listen.mp3",
  dialogue: [
    ["Student A", ["What will daily life be like in 2050?"]],
    ["Student B", ["People will use cleaner energy, and many cars will drive themselves."]],
    ["Student A", [mark("Will people be living on Mars?")]],
    ["Student B", ["Probably not, but scientists will be working there."]],
    ["Student A", ["What will they have accomplished by then?"]],
    ["Student B", ["They may have built a small research center."]],
    ["Student A", [mark("Will tourism have reached the moon?")]],
    ["Student B", ["Possibly. A company may have opened a small lunar hotel."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What may scientists have built on Mars?",
  options: ["A research center", "A large city", "A vacation resort"],
  answer: "A research center",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What kind of energy will people use?", answer: "Cleaner energy." },
    { question: "What will many cars do?", answer: "Drive themselves." },
    { question: "What may a company have opened on the moon?", answer: "A small lunar hotel." },
  ],
} satisfies ListenData;
