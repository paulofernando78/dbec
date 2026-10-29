import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: two coworkers and missing office items. Listen for the situation.",
  audio: "/media/audio/course/a1/unit-2/lesson-2-where-is-it/listen/listen.mp3",
  dialogue: [
    ["A", ["Is this your ID card?"]],
    ["B", ["No, it's not. Mine is blue."]],
    ["A", [mark("Where's"), " your ID card?"]],
    ["B", [mark("It's in"), " the drawer."]],
    ["A", ["Here it is. Is this your ID card?"]],
    ["B", ["Yes, it is."]],
    ["A", ["Are these your keys?"]],
    ["B", ["Yes, they are. Thank you."]],
    ["A", ["Good. ", mark("Where are"), " my keys?"]],
    ["B", [mark("They're on"), " the desk."]],
    ["A", ["Where's the charger?"]],
    ["B", [mark("It's under"), " the monitor."]],
    ["A", ["Are these your folders?"]],
    ["B", ["No, they're not."]],
    ["A", ["And where are the folders?"]],
    ["B", [mark("They're next to"), " the printer."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Situation:",
  options: ["Looking for office items", "Buying office furniture", "Cleaning the office"],
  answer: "Looking for office items",
  followUpInstruction: "Listen again. Find each location.",
  followUp: [
    {
      question: "ID card location:",
      answer: "In the drawer.",
    },
    {
      question: "Keys location:",
      answer: "On the desk.",
    },
    {
      question: "Charger location:",
      answer: "Under the monitor.",
    },
    {
      question: "Folders location:",
      answer: "Next to the printer.",
    },
  ],
} satisfies ListenData;
