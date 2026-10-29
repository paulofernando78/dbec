import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two people identifying guests at a party.",
  audio: "/media/audio/course/a2/unit-9/lesson-2-which-person/listen/listen.mp3",
  dialogue: [
    ["Ava", ["Which person is Lena?"]],
    ["Sam", ["She's the woman talking to Rob."]],
    ["Ava", [mark("Is Rob the man wearing the red shirt?")]],
    ["Sam", ["No, he's the one wearing the black shirt."]],
    ["Ava", ["Who are the Harrisons?"]],
    ["Sam", ["They're the people sitting next to the window."]],
    ["Ava", [mark("Are they the ones on the couch?")]],
    ["Sam", ["No, the people on the couch are the Martins. The Harrisons are by the window."]],
    ["Ava", ["Thanks. Now I see everyone."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "The speakers are trying to:",
  options: ["Identify people", "Choose clothes", "Plan a party"],
  answer: "Identify people",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What is Lena doing?", answer: "She's talking to Rob." },
    { question: "Where are the Harrisons?", answer: "They're next to the window." },
    { question: "Who is on the couch?", answer: "The Martins are on the couch." },
  ],
} satisfies ListenData;
