import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to recommendations at a city council meeting.",
  audio: "/media/audio/course/b1/unit-15/lesson-1-what-should-be-done/listen/listen.mp3",
  dialogue: [
    ["Chair", ["What should be done about noise near residential areas?"]],
    ["Resident", ["Clubs should be required to install soundproof walls."]],
    ["Owner", [mark("That sounds reasonable, but the city should help small businesses pay for them.")]],
    ["Cyclist", ["We also need safer streets. More bike lanes must be built."]],
    ["Parent", ["And children ought to be required to wear helmets while riding."]],
    ["Chair", [mark("Thank you. These recommendations will be considered by the council.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What does the club owner think the city should do?",
  options: ["Close the clubs", "Help pay for soundproofing", "Build more houses"],
  answer: "Help pay for soundproofing",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What should clubs be required to install?", answer: "Soundproof walls." },
    { question: "What must be built for cyclists?", answer: "More bike lanes." },
    { question: "What should children wear while riding?", answer: "Helmets." },
  ],
} satisfies ListenData;
