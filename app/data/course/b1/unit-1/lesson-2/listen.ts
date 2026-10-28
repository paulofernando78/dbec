import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing behaviors they appreciate and dislike.",
  audio: "/media/audio/course/b1/unit-1/lesson-2-things-i-appreciate/listen/listen.mp3",
  dialogue: [
    ["Mina", ["What behavior really annoys you?"]],
    ["Owen", [mark("I can't stand it when people arrive very late without calling.")]],
    ["Mina", ["That bothers me, too. I also hate it when someone checks their phone during dinner."]],
    ["Owen", ["I don't mind it when they need to answer an important message."]],
    ["Mina", ["Maybe, but it upsets me when they ignore everyone at the table."]],
    ["Owen", [mark("What makes you happy?")]],
    ["Mina", ["I love it when a friend remembers a small detail from an old conversation."]],
    ["Owen", ["Me too. It makes me happy when people listen carefully."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What behavior can't Owen stand?",
  options: ["People arriving late without calling", "Friends remembering details", "People listening carefully"],
  answer: "People arriving late without calling",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "When doesn't Owen mind phone use?", answer: "When someone needs to answer an important message." },
    { question: "What upsets Mina at dinner?", answer: "When someone ignores everyone at the table." },
    { question: "What makes both speakers happy?", answer: "When people listen and remember details." },
  ],
} satisfies ListenData;
