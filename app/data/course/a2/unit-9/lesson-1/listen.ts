import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to someone describing a new coworker.",
  audio: "/media/audio/course/a2/unit-9/lesson-1-what-do-they-look-like/listen/listen.mp3",
  dialogue: [
    ["Ava", [mark("What does your new coworker look like?")]],
    ["Sam", ["Her name is Lena. She's pretty tall and has long, curly brown hair."]],
    ["Ava", ["Does she wear glasses?"]],
    ["Sam", ["No, she doesn't. She wears contacts."]],
    ["Ava", [mark("How old is she?")]],
    ["Sam", ["She's about thirty. She's in her early thirties."]],
    ["Ava", ["And how tall is she?"]],
    ["Sam", ["She's about one meter seventy-five."]],
    ["Ava", ["I think I saw her this morning."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What kind of hair does Lena have?",
  options: ["Short blond hair", "Long curly brown hair", "Straight black hair"],
  answer: "Long curly brown hair",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Does Lena wear glasses?", answer: "No. She wears contacts." },
    { question: "How old is she?", answer: "She's in her early thirties." },
    { question: "How tall is she?", answer: "She's about one meter seventy-five." },
  ],
} satisfies ListenData;
