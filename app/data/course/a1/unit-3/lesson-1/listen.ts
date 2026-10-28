import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two people meet at an international event.",
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
  question: "Where is speaker B from?",
  options: ["Quito", "Bogotá", "Madrid"],
  answer: "Quito",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Is speaker A late?",
      answer: "No, speaker A is early.",
    },
    {
      question: "Where is the woman from?",
      answer: "Argentina.",
    },
    {
      question: "Where is the man from?",
      answer: "Spain.",
    },
    {
      question: "Which room are the speakers in?",
      answer: "Room 5.",
    },
    {
      question: "Where are the two people from?",
      answer: "Austria.",
    },
  ],
} satisfies ListenData;
