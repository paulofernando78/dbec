import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends imagining what they would do with a free plane ticket.",
  audio:
    "/media/audio/course/a2-b1/unit-15/lesson-1-what-would-you-do/listen/listen.mp3",
  dialogue: [
    ["A", ["A travel website is giving away a free plane ticket. What would you do if you won?"]],
    ["B", [mark("If I received a free plane ticket"), ", I ", mark("would visit New Zealand"), "."]],
    ["A", ["Why New Zealand?"]],
    ["B", ["Because ", mark("if I received a free plane ticket"), ", I ", mark("could explore both islands"), " without spending most of my savings on the flight."]],
    ["A", ["How long would you go for?"]],
    ["B", [mark("If I received a free plane ticket"), ", I ", mark("might stay for three weeks"), ". I'd spend the first week in Auckland."]],
    ["A", ["Would you take the trip by yourself?"]],
    ["B", ["No. ", mark("If I received a free plane ticket"), ", I ", mark("wouldn't travel alone"), ". I'd invite my brother."]],
    ["A", ["What would you most like to see there?"]],
    ["B", ["I'd really like to see Milford Sound and hike near Queenstown."]],
    ["A", ["That sounds like an amazing imaginary trip."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which country would speaker B visit?",
  options: ["New Zealand", "Australia", "Canada"],
  answer: "New Zealand",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What could speaker B explore?",
      answer: "Both islands.",
    },
    {
      question: "How long might speaker B stay?",
      answer: "For three weeks.",
    },
    {
      question: "Where would speaker B spend the first week?",
      answer: "In Auckland.",
    },
    {
      question: "Who would speaker B invite?",
      answer: "The brother.",
    },
    {
      question: "Which two places would speaker B like to visit?",
      answer: "Milford Sound and Queenstown.",
    },
  ],
} satisfies ListenData;
