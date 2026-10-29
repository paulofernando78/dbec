import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a new resident asking about places nearby.",
  audio: "/media/audio/course/a2/unit-8/lesson-1-around-here/listen/listen.mp3",
  dialogue: [
    ["Resident", [mark("Is there a laundromat near here?")]],
    ["Neighbor", ["Yes. There's one across from the shopping center."]],
    ["Resident", ["Great. Are there any grocery stores nearby?"]],
    ["Neighbor", ["There are some on Pine Street. The closest one is next to the library."]],
    ["Resident", [mark("Is there a Wi-Fi hot spot around here?")]],
    ["Neighbor", ["Yes. The coffee shop on the corner has free Wi-Fi."]],
    ["Resident", ["Is it near the post office?"]],
    ["Neighbor", ["Yes. It's between the post office and the drugstore."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "The speakers discuss:",
  options: ["Places nearby", "A family photo", "A restaurant order"],
  answer: "Places nearby",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Where are the grocery stores?", answer: "They're on Pine Street." },
    { question: "Which place has free Wi-Fi?", answer: "The coffee shop." },
    { question: "What is the coffee shop between?", answer: "The post office and the drugstore." },
  ],
} satisfies ListenData;
