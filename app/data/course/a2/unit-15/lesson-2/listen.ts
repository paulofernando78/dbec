import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to someone leaving a phone message for a classmate.",
  audio: "/media/audio/course/a2/unit-15/lesson-2-pass-it-on/listen/listen.mp3",
  dialogue: [
    ["Receiver", ["Hello?"]],
    ["Caller", [mark("May I speak to Ana, please?")]],
    ["Receiver", ["Sorry, but she isn't here. Can I take a message?"]],
    ["Caller", ["Yes. Could you tell her that I'm going to miss class tonight?"]],
    ["Receiver", ["Of course. Is there anything else?"]],
    ["Caller", [mark("Would you ask her to take a picture of the board for me?")]],
    ["Receiver", ["Sure. I'll give her the message."]],
    ["Caller", ["Thanks very much."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why is the caller contacting Ana?",
  options: ["To invite her to an event", "To leave a class message", "To change a restaurant reservation"],
  answer: "To leave a class message",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Is Ana available?", answer: "No, she isn't." },
    { question: "What should the receiver tell Ana?", answer: "The caller is going to miss class." },
    { question: "What should Ana take a picture of?", answer: "The board." },
  ],
} satisfies ListenData;
