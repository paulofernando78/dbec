import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to someone reporting several recurring electronics problems.",
  audio: "/media/audio/course/b1/unit-6/lesson-2-it-needs-fixing/listen/listen.mp3",
  dialogue: [
    ["Technician", ["What problems are you having?"]],
    ["Customer", ["The TV screen keeps flickering, and the remote keeps sticking."]],
    ["Technician", [mark("Does the TV need to be replaced?")]],
    ["Customer", ["I hope not, but it definitely needs checking."]],
    ["Technician", ["What about your computer?"]],
    ["Customer", ["It keeps freezing, and the printer keeps jamming."]],
    ["Technician", [mark("The printer may need to be cleaned.")]],
    ["Customer", ["Maybe, but the computer needs to be repaired first. I use it for work."]],
    ["Technician", ["I'll test both devices and let you know."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which device does the customer need most for work?",
  options: ["The television", "The computer", "The remote control"],
  answer: "The computer",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What does the TV screen keep doing?", answer: "It keeps flickering." },
    { question: "What does the printer keep doing?", answer: "It keeps jamming." },
    { question: "What may the printer need?", answer: "It may need to be cleaned." },
  ],
} satisfies ListenData;
