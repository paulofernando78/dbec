import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a visitor asking for information at a bus terminal.",
  audio:
    "/media/audio/course/a2-b1/unit-2/lesson-2-could-you-tell-me/listen/listen.mp3",
  dialogue: [
    [
      "A",
      ["Excuse me. Could you tell me ", mark("where the nearest ATM is"), "?"],
    ],
    [
      "B",
      ["Of course. It's beside the coffee shop, near the main entrance."],
    ],
    ["A", ["Thanks. Do you know ", mark("where the restrooms are"), "?"]],
    ["B", ["Yes. They're at the end of this hall, on your right."]],
    [
      "A",
      ["Great. Can you tell me ", mark("how often the buses run"), "?"]],
    ["B", ["They usually run every twenty minutes during the day."]],
    [
      "A",
      ["That's helpful. Do you know ", mark("what time the bookstore opens"), "?"],
    ],
    ["B", ["It opens at nine, so it should be open now."]],
    [
      "A",
      ["One last question: do you know ", mark("where I can catch the bus"), " to downtown?"],
    ],
    ["B", ["You can catch it at platform six, just outside these doors."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What time does the bookstore open?",
  options: ["At eight", "At nine", "At ten"],
  answer: "At nine",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Where is the nearest ATM?",
      answer: "It's beside the coffee shop, near the main entrance.",
    },
    {
      question: "How often do the buses run during the day?",
      answer: "They run every twenty minutes.",
    },
    {
      question: "Where can the visitor catch the bus downtown?",
      answer: "At platform six.",
    },
  ],
} satisfies ListenData;
