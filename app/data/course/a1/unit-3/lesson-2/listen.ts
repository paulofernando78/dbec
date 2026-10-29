import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: Lucas talks about people in his class. Listen for Nina.",
  audio: "/media/audio/course/a1/unit-3/lesson-2-what-are-they-like/listen/listen.mp3",
  dialogue: [
    ["A", [mark("What's your name"), "?"]],
    ["B", ["My name is Lucas."]],
    ["A", [mark("Where are you from"), "?"]],
    ["B", ["I'm from Recife."]],
    ["A", [mark("How are you today"), "?"]],
    ["B", ["I'm great, thanks."]],
    ["A", [mark("Who's that"), "?"]],
    ["B", ["She's my cousin, Nina."]],
    ["A", [mark("How old is she"), "?"]],
    ["B", ["She's twenty-four."]],
    ["A", [mark("What's she like"), "?"]],
    ["B", ["She's friendly and quiet."]],
    ["A", [mark("Who are they"), "?"]],
    ["B", ["They're her friends."]],
    ["A", [mark("Where are they from"), "?"]],
    ["B", ["They're from Chile."]],
    ["A", [mark("What's Santiago like"), "?"]],
    ["B", ["It's big and busy."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Lucas’s city:",
  options: ["Recife", "Santiago", "Lima"],
  answer: "Recife",
  followUpInstruction: "Listen again. Find the details.",
  followUp: [
    {
      question: "Nina:",
      answer: "Lucas's cousin.",
    },
    {
      question: "Nina’s age:",
      answer: "Twenty-four.",
    },
    {
      question: "Nina’s personality:",
      answer: "Friendly and quiet.",
    },
    {
      question: "Friends’ country:",
      answer: "Chile.",
    },
    {
      question: "Santiago:",
      answer: "Big and busy.",
    },
  ],
} satisfies ListenData;
