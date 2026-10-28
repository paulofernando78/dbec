import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends comparing local businesses.",
  audio: "/media/audio/course/b1/unit-12/lesson-2-explaining-why/listen/listen.mp3",
  dialogue: [
    ["Dana", ["Why is the Harbor Café so successful?"]],
    ["Luis", ["It is popular because the food is affordable and the staff is charming."]],
    ["Dana", [mark("Then why is there always a long line?")]],
    ["Luis", ["Since the café is small, it cannot serve many customers at once."]],
    ["Dana", ["The place is also famous for its creative desserts."]],
    ["Luis", [mark("Exactly. The reason people return is that the menu changes every week.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why is there usually a long line at the Harbor Café?",
  options: ["The service is slow", "The café is small", "The menu is expensive"],
  answer: "The café is small",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Why is the café popular?", answer: "Because the food is affordable and the staff is charming." },
    { question: "What is it famous for?", answer: "Its creative desserts." },
    { question: "Why do people return?", answer: "Because the menu changes every week." },
  ],
} satisfies ListenData;
