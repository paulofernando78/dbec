import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two people discussing challenges in their city.",
  audio:
    "/media/audio/course/a2-b1/unit-2/lesson-1-city-challenges/listen/listen.mp3",
  dialogue: [
    [
      "A",
      ["Have you noticed how bad the traffic is? There are ", mark("too many"), " cars downtown."],
    ],
    [
      "B",
      ["Definitely. And because of that, there is ", mark("too much"), " pollution."],
    ],
    [
      "A",
      ["The city should encourage people to drive less. There should be ", mark("fewer"), " cars on the road."],
    ],
    [
      "B",
      ["I agree. Then there would be ", mark("less"), " pollution and the air would be cleaner."],
    ],
    [
      "A",
      ["Walking could be safer, too. We need ", mark("more"), " streetlights in this neighborhood."],
    ],
    [
      "B",
      ["Yes, and we need ", mark("more"), " public transportation so people don't have to drive."],
    ],
    [
      "A",
      ["Safety is another problem. There aren't ", mark("enough"), " police officers here at night."],
    ],
    [
      "B",
      ["That's true. And when people do drive, there isn't ", mark("enough"), " parking downtown."],
    ],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What are the speakers mainly discussing?",
  options: [
    "Problems and services in their city",
    "Plans for a trip",
    "A new apartment",
  ],
  answer: "Problems and services in their city",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What causes pollution downtown?",
      answer: "There are too many cars.",
    },
    {
      question: "What kinds of services does the city need more of?",
      answer: "It needs more streetlights and more public transportation.",
    },
    {
      question: "What isn't there enough of?",
      answer: "There aren't enough police officers, and there isn't enough parking.",
    },
  ],
} satisfies ListenData;
