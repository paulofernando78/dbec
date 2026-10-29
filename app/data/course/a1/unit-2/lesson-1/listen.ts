import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: a new employee sees a desk. Listen for the place.",
  image: "/media/images/course/a1/unit-2/lesson-1-whats-this/get-ready/tablet.avif",
  imageAlt: "A tablet on a desk in a bright office",
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
  question: "Place:",
  options: ["In an office", "In a store", "At home"],
  answer: "In an office",
  followUpInstruction: "Listen again. Identify the objects.",
  followUp: [
    {
      question: "Object on the desk:",
      answer: "A work tablet.",
    },
    {
      question: "Object next to the tablet:",
      answer: "An adapter.",
    },
    {
      question: "Objects on the shelf:",
      answer: "Notebooks.",
    },
    {
      question: "Blue objects:",
      answer: "Headphones.",
    },
  ],
} satisfies ListenData;
