import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two coworkers look for things in an office.",
  audio: "/media/audio/course/a1/unit-2/lesson-2-where-is-it/listen/listen.mp3",
  dialogue: [
    ["A", [mark("Is this"), " your ID card?"]],
    ["B", ["No, ", mark("it's not"), ". Mine is blue."]],
    ["A", [mark("Where's"), " your ID card?"]],
    ["B", [mark("It's in"), " the drawer."]],
    ["A", ["Here it is. Is this your ID card?"]],
    ["B", ["Yes, ", mark("it is"), "."]],
    ["A", [mark("Are these"), " your keys?"]],
    ["B", ["Yes, ", mark("they are"), ". Thank you."]],
    ["A", ["Good. ", mark("Where are"), " my keys?"]],
    ["B", [mark("They're on"), " the desk."]],
    ["A", ["Where's the charger?"]],
    ["B", [mark("It's under"), " the monitor."]],
    ["A", ["Are these your folders?"]],
    ["B", ["No, ", mark("they're not"), "."]],
    ["A", ["And where are the folders?"]],
    ["B", [mark("They're next to"), " the printer."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What color is speaker B's ID card?",
  options: ["Blue", "Black", "White"],
  answer: "Blue",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Where is speaker B's ID card?",
      answer: "In the drawer.",
    },
    {
      question: "Are the first keys speaker B's?",
      answer: "Yes, they are.",
    },
    {
      question: "Where are speaker A's keys?",
      answer: "On the desk.",
    },
    {
      question: "Where is the charger?",
      answer: "Under the monitor.",
    },
    {
      question: "Where are the folders?",
      answer: "Next to the printer.",
    },
  ],
} satisfies ListenData;
