import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: a new employee sees a desk. Listen for the place.",
  image: "/media/images/course/a1/unit-2/lesson-1-whats-this/listen/desk-objects.avif?v=2",
  imageAlt: "A laptop, adapter, notebooks, headset, and keys together on an office desk",
  audio: "/media/audio/course/a1/unit-2/lesson-1-whats-this/listen/listen.mp3",
  dialogue: [
    ["A", ["Welcome to the office. This is your desk."]],
    ["B", ["Thank you. ", mark("This is"), " a laptop computer."]],
    ["A", ["Yes. ", mark("It's"), " your work laptop."]],
    ["B", [mark("What's this"), " next to the laptop?"]],
    ["A", [mark("It's an"), " adapter."]],
    ["B", ["And the things on the desk?"]],
    ["A", [mark("These are"), " notebooks."]],
    ["B", ["Yes. ", mark("They're"), " new notebooks. ", mark("What's this"), "?"]],
    ["A", [mark("It's a"), " headset. The blue headset is yours."]],
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
      answer: "A work laptop.",
    },
    {
      question: "Object next to the laptop:",
      answer: "An adapter.",
    },
    {
      question: "Objects on the desk:",
      answer: "Notebooks.",
    },
    {
      question: "Blue object:",
      answer: "A headset.",
    },
  ],
} satisfies ListenData;
