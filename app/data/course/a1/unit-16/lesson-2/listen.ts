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
  question: "Saturday plan:",
  options: ["Nina works", "Nina studies", "Nina goes to the concert"],
  answer: "Nina works",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Nina is free:",
      answer: "On Sunday.",
    },
    {
      question: "Accepted invitation:",
      answer: "Lunch on Sunday.",
    },
    {
      question: "Restaurant:",
      answer: "An Italian restaurant.",
    },
    {
      question: "Meeting time:",
      answer: "At 1:00.",
    },
    {
      question: "Sunday morning:",
      answer: "Study.",
    },
  ],
} satisfies ListenData;
