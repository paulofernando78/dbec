import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two coworkers talk about things in an office.",
  audio: "/media/audio/course/a1/unit-2/lesson-1-whats-this/listen/listen.mp3",
  dialogue: [
    ["A", ["Welcome to the office. This is your desk."]],
    ["B", ["Thank you. ", mark("This is"), " a tablet."]],
    ["A", ["Yes. ", mark("It's"), " your work tablet."]],
    ["B", [mark("What's this"), " next to the tablet?"]],
    ["A", [mark("It's an"), " adapter."]],
    ["B", ["And the things on the shelf?"]],
    ["A", [mark("These are"), " notebooks."]],
    ["B", ["Yes. ", mark("They're"), " new notebooks. ", mark("What are these"), "?"]],
    ["A", [mark("They're"), " headphones. The blue headphones are yours."]],
    ["B", ["And the keys?"]],
    ["A", ["This is one ", mark("key"), " for the desk. These are two ", mark("keys"), " for the cabinet."]],
    ["B", ["Great. Thank you."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where are the speakers?",
  options: ["In an office", "In a store", "At home"],
  answer: "In an office",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What is on the desk?",
      answer: "A work tablet.",
    },
    {
      question: "What is next to the tablet?",
      answer: "An adapter.",
    },
    {
      question: "Are the notebooks new?",
      answer: "Yes, they are.",
    },
    {
      question: "What color are speaker B's headphones?",
      answer: "Blue.",
    },
    {
      question: "How many keys are there?",
      answer: "Three.",
    },
  ],
} satisfies ListenData;
