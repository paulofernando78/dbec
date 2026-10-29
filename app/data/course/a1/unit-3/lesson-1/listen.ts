import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: two people at an international event. Listen for speaker B’s city.",
  audio: "/media/audio/course/a1/unit-3/lesson-1-where-are-you-from/listen/listen.mp3",
  dialogue: [
    ["A", ["Hello. ", mark("Are you"), " from Bogotá?"]],
    ["B", ["No, ", mark("I'm not"), ". I'm from Quito."]],
    ["A", ["Oh, you're from Quito. ", mark("Am I"), " early for the event?"]],
    ["B", ["Yes, ", mark("you are"), ". ", mark("You're not"), " late."]],
    ["A", ["Who is that woman? ", mark("Is she"), " Colombian?"]],
    ["B", ["No, ", mark("she's not"), ". She's Argentinian."]],
    ["A", ["And the man with her? ", mark("Is he"), " from Italy?"]],
    ["B", ["No, ", mark("he's not"), ". He's from Spain."]],
    ["A", ["Is the language on his name tag Portuguese?"]],
    ["B", ["No, ", mark("it's not"), ". ", mark("Is it"), " Spanish? Yes, ", mark("it is"), "."]],
    ["A", [mark("Are we"), " in Room 4?"]],
    ["B", ["No, ", mark("we're not"), ". We're in Room 5."]],
    ["A", ["And those two people—", mark("are they"), " from Germany?"]],
    ["B", ["No, ", mark("they're not"), ". They're from Austria."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Speaker B’s city:",
  options: ["Quito", "Bogotá", "Madrid"],
  answer: "Quito",
  followUpInstruction: "Listen again. Match people and places.",
  followUp: [
    {
      question: "Speaker A: early or late?",
      answer: "No, speaker A is early.",
    },
    {
      question: "Woman’s country:",
      answer: "Argentina.",
    },
    {
      question: "Man’s country:",
      answer: "Spain.",
    },
    {
      question: "Room number:",
      answer: "Room 5.",
    },
    {
      question: "Two people’s country:",
      answer: "Austria.",
    },
  ],
} satisfies ListenData;
