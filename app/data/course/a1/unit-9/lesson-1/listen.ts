import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two people make a shopping list.",
  audio: "/media/audio/course/a1/unit-9/lesson-1-whats-in-the-kitchen/listen/listen.mp3",
  dialogue: [
    ["A", ["Let's make a shopping list. Do we have any vegetables?"]],
    ["B", ["We have ", mark("some carrots"), ", but we don't have any onions."]],
    ["A", ["Okay. Let's get ", mark("some onions"), ". Do we need any potatoes?"]],
    ["B", ["No, we don't. We have six potatoes."]],
    ["A", ["Do we have any rice?"]],
    ["B", ["No. We need ", mark("some rice"), "."]],
    ["A", ["What about bread?"]],
    ["B", ["We have some bread, but we don't have any cheese."]],
    ["A", ["Let's get ", mark("some cheese"), ". Do we need any milk?"]],
    ["B", ["No, we don't. We have milk."]],
    ["A", ["Great. Onions, rice, and cheese."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which vegetables do they need?",
  options: ["Onions", "Carrots", "Potatoes"],
  answer: "Onions",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Do they have any carrots?",
      answer: "Yes, they do.",
    },
    {
      question: "How many potatoes do they have?",
      answer: "Six.",
    },
    {
      question: "Do they need rice?",
      answer: "Yes, they do.",
    },
    {
      question: "What dairy food do they need?",
      answer: "Cheese.",
    },
    {
      question: "What three items are on the shopping list?",
      answer: "Onions, rice, and cheese.",
    },
  ],
} satisfies ListenData;
