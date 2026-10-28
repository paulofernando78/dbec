import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talking about special days in their communities.",
  audio:
    "/media/audio/course/a2-b1/unit-8/lesson-1-special-days/listen/listen.mp3",
  dialogue: [
    ["A", ["Which special day does your family enjoy most?"]],
    ["B", ["Graduation day is a day ", mark("when students celebrate their achievements"), ". My sister graduates this year."]],
    ["A", ["That's exciting! Does your town have an annual celebration too?"]],
    ["B", ["Yes. June 21 is the day ", mark("when our town holds its summer festival"), ". It starts at two in the afternoon."]],
    ["A", ["What happens at the festival?"]],
    ["B", ["Local artists perform in the park, and families bring picnic baskets."]],
    ["A", ["We have a neighborhood celebration in the fall."]],
    ["B", ["When is it?"]],
    ["A", ["The last Friday in October is an evening ", mark("when neighbors share food and music"), ". This year, I'm bringing homemade bread."]],
    ["B", ["That sounds wonderful. I'd love to visit it someday."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Who graduates this year?",
  options: ["Speaker B's sister", "Speaker A's brother", "Speaker B's cousin"],
  answer: "Speaker B's sister",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "On what date does the town hold its summer festival?",
      answer: "June 21.",
    },
    {
      question: "What time does the summer festival begin?",
      answer: "At two in the afternoon.",
    },
    {
      question: "Where do local artists perform?",
      answer: "In the park.",
    },
    {
      question: "When is the neighborhood celebration?",
      answer: "On the last Friday in October.",
    },
    {
      question: "What is speaker A bringing this year?",
      answer: "Homemade bread.",
    },
  ],
} satisfies ListenData;
