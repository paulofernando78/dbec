import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends make plans for the weekend.",
  audio: "/media/audio/course/a1/unit-16/lesson-2-youre-invited/listen/listen.mp3",
  dialogue: [
    ["A", [mark("Do you want to go"), " to a concert on Saturday, Nina?"]],
    ["B", ["I'd like to, but I ", mark("have to work"), " on Saturday."]],
    ["A", ["That's too bad. What about Sunday?"]],
    ["B", ["I'm free on Sunday."]],
    ["A", [mark("Would you like to have lunch"), " with me?"]],
    ["B", ["Yes, ", mark("I'd love to"), "."]],
    ["A", ["Great. Do you want to try the new Italian restaurant?"]],
    ["B", ["Sure. What time?"]],
    ["A", ["How about one o'clock?"]],
    ["B", ["That's perfect. I need to study in the morning, but I'm free at one."]],
    ["A", ["Excellent. See you on Sunday!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why can't Nina go to the concert?",
  options: ["She has to work", "She has to study", "She is sick"],
  answer: "She has to work",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When is Nina free?",
      answer: "On Sunday.",
    },
    {
      question: "What invitation does Nina accept?",
      answer: "Lunch on Sunday.",
    },
    {
      question: "What kind of restaurant are they going to try?",
      answer: "An Italian restaurant.",
    },
    {
      question: "What time are they going to meet?",
      answer: "At 1:00.",
    },
    {
      question: "What does Nina need to do on Sunday morning?",
      answer: "Study.",
    },
  ],
} satisfies ListenData;
