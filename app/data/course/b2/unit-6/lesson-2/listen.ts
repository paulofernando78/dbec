import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to a traveler telling a surprising story about a lost bag.",
  audio: "",
  dialogue: [
    ["Mina", ["I've got to tell you about what happened at the airport yesterday."]],
    ["Luis", ["What happened?"]],
    ["Mina", ["I'd been waiting for my suitcase for nearly an hour when everyone else left."]],
    ["Luis", ["Had the airline lost it?"]],
    ["Mina", ["That's what I thought. Up until then, I'd never lost anything important while traveling."]],
    ["Luis", ["So what did you do?"]],
    ["Mina", ["I filed a report. Meanwhile, an employee had been calling my name at another carousel."]],
    ["Luis", ["Why?"]],
    ["Mina", [mark("The thing you have to know is that I'd been standing in the wrong terminal the whole time"), "."]],
    ["Luis", ["You're kidding!"]],
    ["Mina", ["No. In the end, I found my suitcase exactly where it was supposed to be. To make a long story short, the airline hadn't lost it—I had lost myself."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why couldn't Mina find her suitcase?",
  options: [
    "She was waiting in the wrong terminal.",
    "The airline sent it to another country.",
    "Another passenger took it by mistake.",
  ],
  answer: "She was waiting in the wrong terminal.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How long had Mina been waiting?", answer: "For nearly an hour." },
    { question: "What had never happened to her before?", answer: "She had never lost anything important while traveling." },
    { question: "What was an employee doing meanwhile?", answer: "Calling Mina's name at another carousel." },
    { question: "Where was the suitcase in the end?", answer: "Exactly where it was supposed to be." },
  ],
} satisfies ListenData;
