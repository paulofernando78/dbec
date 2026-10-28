import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two new classmates meeting before class.",
  audio: "/media/audio/course/a2/unit-1/lesson-1-meet-and-connect/listen/listen.mp3",
  dialogue: [
    ["Maya", [mark("Hi! I'm Maya."), " What's your name?"]],
    ["Daniel", ["I'm Daniel Ortiz. People call me Danny."]],
    ["Maya", ["Nice to meet you, Danny. ", mark("Where are you from?")]],
    ["Daniel", ["I'm from Mexico. And you?"]],
    ["Maya", ["I'm from Brazil. São Paulo is my hometown."]],
    ["Daniel", [mark("Who's your friend?")]],
    ["Maya", ["Her name's Sofia. She's my classmate, too."]],
    ["Daniel", ["Great! Our class is in room twelve, right?"]],
    ["Maya", ["Yes, it is. Come on—let's go."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why are Maya and Daniel talking?",
  options: ["They are meeting before class", "They are ordering lunch", "They are planning a trip"],
  answer: "They are meeting before class",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What do people call Daniel?", answer: "They call him Danny." },
    { question: "Where is Maya from?", answer: "She's from Brazil." },
    { question: "Who is Sofia?", answer: "She's Maya's classmate." },
  ],
} satisfies ListenData;
