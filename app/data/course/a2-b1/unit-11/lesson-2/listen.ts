import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two students preparing facts for an international fair.",
  audio:
    "/media/audio/course/a2-b1/unit-11/lesson-2-countries-in-focus/listen/listen.mp3",
  dialogue: [
    ["A", ["We need three facts for our international fair display. Which country should we start with?"]],
    ["B", ["Let's start with Brazil. People ", mark("speak"), " Portuguese there, so we can write, ‘Portuguese ", mark("is spoken"), " in Brazil.’"]],
    ["A", ["Good. More than two hundred million people live there."]],
    ["B", ["For our second fact, farmers ", mark("grow"), " coffee in Colombia."]],
    ["A", ["Right. Coffee ", mark("is grown"), " in Colombia, especially in the country's central region."]],
    ["B", ["What should our final country be?"]],
    ["A", ["Iceland. Many homes ", mark("use"), " geothermal energy there."]],
    ["B", ["Then let's write, ‘Geothermal energy ", mark("is used"), " in many Icelandic homes.’ It helps heat buildings and water."]],
    ["A", ["Perfect. I'll print a map for each country this afternoon."]],
    ["B", ["And I'll add the facts to the display before class tomorrow."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which language is spoken in Brazil?",
  options: ["Portuguese", "Spanish", "English"],
  answer: "Portuguese",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "How many people live in Brazil according to speaker A?",
      answer: "More than two hundred million.",
    },
    {
      question: "What product is grown in Colombia?",
      answer: "Coffee.",
    },
    {
      question: "In which part of Colombia is coffee especially grown?",
      answer: "In the central region.",
    },
    {
      question: "What is geothermal energy used to heat in Iceland?",
      answer: "Buildings and water.",
    },
    {
      question: "When will speaker B add the facts to the display?",
      answer: "Before class tomorrow.",
    },
  ],
} satisfies ListenData;
