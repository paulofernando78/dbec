import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to residents discussing environmental changes in their community.",
  audio: "/media/audio/course/b1/unit-7/lesson-1-our-changing-environment/listen/listen.mp3",
  dialogue: [
    ["Resident A", ["Have you noticed how much waste is being produced?"]],
    ["Resident B", ["Yes. Thousands of plastic bottles are being discarded every week."]],
    ["Resident A", [mark("What is being done about it?")]],
    ["Resident B", ["A recycling program has been created, but it isn't being used enough."]],
    ["Resident A", ["Our river has also been polluted by industrial waste."]],
    ["Resident B", [mark("And several parks have been lost through overbuilding.")]],
    ["Resident A", ["The problem is getting worse due to weak enforcement."]],
    ["Resident B", ["We need stronger action before more damage is done."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What has been created?",
  options: ["A recycling program", "An industrial park", "A new landfill"],
  answer: "A recycling program",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What is being discarded?", answer: "Thousands of plastic bottles." },
    { question: "What has polluted the river?", answer: "Industrial waste." },
    { question: "Why is the problem getting worse?", answer: "Due to weak enforcement." },
  ],
} satisfies ListenData;
