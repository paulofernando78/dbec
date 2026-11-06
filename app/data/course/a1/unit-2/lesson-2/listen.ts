import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: two coworkers and missing office items. Listen for the situation.",
  image:
    "/media/images/course/a1/unit-2/lesson-2-where-is-it/listen/eric-pedro-office-conversation.avif?v=1",
  imageAlt: "Pedro and Eric talking beside a desk while looking for office items.",
  audio: "/media/audio/course/a1/unit-2/lesson-2-where-is-it/listen/listen.mp3",
  dialogue: [
    ["Eric", ["Is this your ID card?"]],
    ["Pedro", ["No, it's not. Mine is blue."]],
    ["Eric", [mark("Where's"), " your ID card?"]],
    ["Pedro", [mark("It's in"), " the drawer."]],
    ["Eric", ["Here it is. Is this your ID card?"]],
    ["Pedro", ["Yes, it is."]],
    ["Eric", ["Are these your keys?"]],
    ["Pedro", ["Yes, they are. Thank you."]],
    ["Eric", ["Good. ", mark("Where are"), " my keys?"]],
    ["Pedro", [mark("They're on"), " the desk."]],
    ["Eric", ["Where's the charger?"]],
    ["Pedro", [mark("It's under"), " the monitor."]],
    ["Eric", ["Are these your folders?"]],
    ["Pedro", ["No, they're not."]],
    ["Eric", ["And where are the folders?"]],
    ["Pedro", [mark("They're next to"), " the printer."]],
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
