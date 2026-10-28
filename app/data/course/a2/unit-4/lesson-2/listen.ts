import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends making plans for the weekend.",
  audio: "/media/audio/course/a2/unit-4/lesson-2-join-us/listen/listen.mp3",
  dialogue: [
    ["Jade", [mark("Would you like to go to a concert on Friday?")]],
    ["Marco", ["I'd love to. Who's playing?"]],
    ["Jade", ["A local salsa band. The show starts at eight."]],
    ["Marco", ["Great. Would your sister like to come, too?"]],
    ["Jade", ["I'd like to ask her, but she has to work late."]],
    ["Marco", [mark("Do you want to meet at seven?")]],
    ["Jade", ["Yes. I need to buy the tickets first."]],
    ["Marco", ["OK. Message me when you have them."]],
    ["Jade", ["I will. TTYL!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What are Jade and Marco planning to do?",
  options: ["Go to a concert", "Watch a movie", "Visit Jade's parents"],
  answer: "Go to a concert",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Does Marco accept the invitation?", answer: "Yes. He'd love to go." },
    { question: "Why probably can't Jade's sister go?", answer: "She has to work late." },
    { question: "What does Jade need to do first?", answer: "She needs to buy the tickets." },
  ],
} satisfies ListenData;
