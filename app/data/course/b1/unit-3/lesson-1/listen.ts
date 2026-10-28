import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a friend asking for several favors.",
  audio: "/media/audio/course/b1/unit-3/lesson-1-could-you-do-me-a-favor/listen/listen.mp3",
  dialogue: [
    ["Nora", ["I was wondering if you could help me move on Saturday."]],
    ["Eli", ["Sure. What time do you need me?"]],
    ["Nora", [mark("Would you mind coming around nine?")]],
    ["Eli", ["That's fine. Do you have a truck?"]],
    ["Nora", ["No. Would it be all right if I borrowed yours?"]],
    ["Eli", ["Of course, as long as you drive carefully."]],
    ["Nora", [mark("Could you also help me take a sofa downstairs?")]],
    ["Eli", ["I can, but we'll need another person."]],
    ["Nora", ["I'll ask my brother. Thanks for doing me such a big favor."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What does Nora want to borrow?",
  options: ["Eli's truck", "Eli's credit card", "Eli's phone"],
  answer: "Eli's truck",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "When is Nora moving?", answer: "On Saturday." },
    { question: "What time does she want Eli to come?", answer: "Around nine." },
    { question: "Why do they need another person?", answer: "To help move a sofa downstairs." },
  ],
} satisfies ListenData;
