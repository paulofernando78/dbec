import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to someone describing their hometown.",
  audio: "/media/audio/course/a2/unit-11/lesson-1-hometown-guide/listen/listen.mp3",
  dialogue: [
    ["Guide", ["My hometown is fairly small, but it's really interesting."]],
    ["Visitor", [mark("Is it a good place to relax?")]],
    ["Guide", ["Yes. The parks are quiet and spacious, and the riverfront is beautiful."]],
    ["Visitor", ["What is the downtown area like?"]],
    ["Guide", ["It's lively and pretty crowded. It can be noisy, though."]],
    ["Visitor", [mark("Is it expensive?")]],
    ["Guide", ["Some restaurants are expensive, but the local market is very cheap."]],
    ["Visitor", ["It sounds like a nice place to visit."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is the downtown area like?",
  options: ["Quiet and spacious", "Lively and crowded", "Ugly and polluted"],
  answer: "Lively and crowded",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What are the parks like?", answer: "They're quiet and spacious." },
    { question: "Which place is beautiful?", answer: "The riverfront." },
    { question: "Where can visitors find cheap food?", answer: "At the local market." },
  ],
} satisfies ListenData;
