import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to Alex describing a typical busy day.",
  audio: "/media/audio/course/a2/unit-2/lesson-2-busy-days/listen/listen.mp3",
  dialogue: [
    ["Nina", ["What time do you get up on weekdays?"]],
    ["Alex", ["I get up ", mark("at 6:30 in the morning"), "."]],
    ["Nina", ["That's early! When do you start work?"]],
    ["Alex", ["I start at eight and work until noon."]],
    ["Nina", ["What do you do in the afternoon?"]],
    ["Alex", ["I have classes from two to five."]],
    ["Nina", [mark("Do you study in the evening?")]],
    ["Alex", ["Usually. I study after dinner and go to bed around eleven."]],
    ["Nina", ["What about weekends?"]],
    ["Alex", ["I work on Saturdays, but I sleep late on Sundays."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "When does Alex have classes?",
  options: ["In the morning", "In the afternoon", "At night"],
  answer: "In the afternoon",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What time does Alex get up?", answer: "He gets up at 6:30 in the morning." },
    { question: "How late does he work in the morning?", answer: "He works until noon." },
    { question: "What does he do on Sundays?", answer: "He sleeps late." },
  ],
} satisfies ListenData;
