import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to an experienced traveler giving advice for an international trip.",
  audio:
    "/media/audio/course/a2-b1/unit-5/lesson-2-smart-travel/listen/listen.mp3",
  dialogue: [
    ["A", ["I'm taking my first international trip next month. What should I do first?"]],
    ["B", ["You ", mark("must check"), " the visa requirements."]],
    ["A", ["How early should I get to the airport?"]],
    ["B", ["You ", mark("need to arrive"), " at the airport three hours early."]],
    ["A", ["What about my documents and money?"]],
    [
      "B",
      ["You ", mark("have to keep"), " your passport accessible, but you ", mark("don't have to exchange"), " all your money before the trip."],
    ],
    ["A", ["Is there anything useful I should put on my phone?"]],
    ["B", ["You", mark("'d better download"), " an offline map."]],
    ["A", ["Should I tell anyone where I'm going?"]],
    ["B", ["You ", mark("ought to register"), " your trip with your embassy."]],
    ["A", ["What should I pack for the weather?"]],
    ["B", ["You ", mark("should pack"), " a light rain jacket."]],
    ["A", ["Do you have one final safety tip?"]],
    ["B", ["You ", mark("shouldn't keep"), " valuables in your back pocket."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What must speaker A check first?",
  options: ["Visa requirements", "Restaurant reviews", "Train schedules"],
  answer: "Visa requirements",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "How early does speaker A need to arrive at the airport?",
      answer: "Three hours early.",
    },
    {
      question: "What document does speaker A have to keep accessible?",
      answer: "A passport.",
    },
    {
      question: "What should speaker A download?",
      answer: "An offline map.",
    },
    {
      question: "What should speaker A pack?",
      answer: "A light rain jacket.",
    },
    {
      question: "Where shouldn't speaker A keep valuables?",
      answer: "In a back pocket.",
    },
  ],
} satisfies ListenData;
