import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: Luis talks about family transportation. Listen for his transport.",
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
  question: "Luis’s transport:",
  options: ["By train", "By bus", "By car"],
  answer: "By train",
  followUpInstruction: "Listen again. Match each person and transport.",
  followUp: [
    {
      question: "Luis’s wife:",
      answer: "By bus.",
    },
    {
      question: "Luis’s son:",
      answer: "By bike.",
    },
    {
      question: "Luis’s daughter walks with:",
      answer: "Her brother.",
    },
    {
      question: "Luis’s parents:",
      answer: "By subway.",
    },
    {
      question: "Luis and his wife on weekends:",
      answer: "They walk together.",
    },
  ],
} satisfies ListenData;
