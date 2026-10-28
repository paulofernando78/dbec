import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends discussing qualities they value in a partner.",
  audio: "/media/audio/course/b1/unit-1/lesson-1-the-people-we-connect-with/listen/listen.mp3",
  dialogue: [
    ["Mina", ["What qualities do you look for in a partner?"]],
    ["Owen", [mark("I like people who have a good sense of humor.")]],
    ["Mina", ["So you want someone who's outgoing?"]],
    ["Owen", ["Yes, but I also value someone I can talk to easily."]],
    ["Mina", ["For me, a supportive person is more important than an outgoing one."]],
    ["Owen", [mark("Would you date someone who's temperamental?")]],
    ["Mina", ["Probably not. I prefer people who stay calm and don't change moods suddenly."]],
    ["Owen", ["I agree. Reliability matters a lot, too."]],
    ["Mina", ["Exactly. I want someone I can depend on."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which quality do both speakers value?",
  options: ["Reliability", "Stinginess", "Inflexibility"],
  answer: "Reliability",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What kind of people does Owen like?", answer: "People who have a good sense of humor." },
    { question: "What quality is especially important to Mina?", answer: "Being supportive." },
    { question: "Would Mina prefer a temperamental person?", answer: "No, probably not." },
  ],
} satisfies ListenData;
