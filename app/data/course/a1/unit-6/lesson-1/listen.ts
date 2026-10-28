import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about their families and transportation.",
  audio: "/media/audio/course/a1/unit-6/lesson-1-getting-around/listen/listen.mp3",
  dialogue: [
    ["A", ["How do you get to work, Luis?"]],
    ["B", [mark("I take the train"), ". I don't take the bus."]],
    ["A", ["What about your wife?"]],
    ["B", [mark("She goes by bus"), ". She doesn't drive."]],
    ["A", ["And your son?"]],
    ["B", [mark("He rides his bike"), " to school."]],
    ["A", ["Does your daughter ride her bike too?"]],
    ["B", ["No. ", mark("She walks to school"), " with her brother."]],
    ["A", ["How do your parents get around?"]],
    ["B", [mark("They use the subway"), ". They don't live near us."]],
    ["A", ["And you and your wife on weekends?"]],
    ["B", [mark("We walk together"), ". We don't need a car."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "How does Luis get to work?",
  options: ["By train", "By bus", "By car"],
  answer: "By train",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "How does Luis's wife travel?",
      answer: "By bus.",
    },
    {
      question: "How does Luis's son go to school?",
      answer: "By bike.",
    },
    {
      question: "Who walks to school with Luis's daughter?",
      answer: "Her brother.",
    },
    {
      question: "How do Luis's parents get around?",
      answer: "By subway.",
    },
    {
      question: "What do Luis and his wife do on weekends?",
      answer: "They walk together.",
    },
  ],
} satisfies ListenData;
