import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a tourist ask for directions in New York City.",
  audio: "/media/audio/course/a1/unit-13/lesson-2-which-way/listen/listen.mp3",
  dialogue: [
    ["A", ["Excuse me. ", mark("How do I get to Times Square"), "?"]],
    ["B", [mark("Walk up Broadway"), " for two blocks."]],
    ["A", ["Then what?"]],
    ["B", [mark("Turn left on 46th Street"), ". Times Square is on the right."]],
    ["A", ["Thank you. And how can I get to Central Park from there?"]],
    ["B", [mark("Go up Seventh Avenue"), " to 59th Street."]],
    ["A", ["Do I turn left or right?"]],
    ["B", [mark("Turn right on 59th Street"), ". Central Park is on the left."]],
    ["A", ["Is it far?"]],
    ["B", ["No. It's about ten minutes from Times Square."]],
    ["A", ["Great. Thanks for your help!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "First destination:",
  options: ["Times Square", "Central Park", "Brooklyn Bridge"],
  answer: "Times Square",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "First street:",
      answer: "Broadway.",
    },
    {
      question: "Left turn:",
      answer: "On 46th Street.",
    },
    {
      question: "Avenue to Central Park:",
      answer: "Seventh Avenue.",
    },
    {
      question: "Right turn:",
      answer: "On 59th Street.",
    },
    {
      question: "Walk time:",
      answer: "About ten minutes.",
    },
  ],
} satisfies ListenData;
