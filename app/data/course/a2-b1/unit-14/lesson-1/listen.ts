import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two classmates interpreting gestures in a silent video.",
  audio:
    "/media/audio/course/a2-b1/unit-14/lesson-1-what-does-that-gesture-mean/listen/listen.mp3",
  dialogue: [
    ["A", ["The video has no sound. Why is the woman holding up one open hand?"]],
    ["B", ["It ", mark("might"), " or ", mark("may"), " mean she wants the man to wait."]],
    ["A", [mark("Maybe"), " she wants him to wait while she answers the phone."]],
    ["B", ["Now the man is raising both shoulders. What does that gesture mean?"]],
    ["A", ["It ", mark("could"), " mean he's unsure."]],
    ["B", ["Yes, it ", mark("probably"), " means he's unsure because he doesn't know which door to use."]],
    ["A", ["Look—now she's smiling and giving him two thumbs up."]],
    ["B", ["That ", mark("must"), " mean everything is fine."]],
    ["A", ["I agree. That ", mark("definitely"), " means everything is fine. He found the correct door."]],
    ["B", ["Great. Let's write those three interpretations in our assignment."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What may the woman's open hand mean?",
  options: ["She wants the man to wait", "She wants the man to leave", "She needs a new phone"],
  answer: "She wants the man to wait",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What is the woman doing while the man waits?",
      answer: "Answering the phone.",
    },
    {
      question: "Which gesture does the man make when he is unsure?",
      answer: "He raises both shoulders.",
    },
    {
      question: "Why is the man unsure?",
      answer: "Because he doesn't know which door to use.",
    },
    {
      question: "Which gesture does the woman make at the end?",
      answer: "She gives the man two thumbs up.",
    },
    {
      question: "What did the man find?",
      answer: "The correct door.",
    },
  ],
} satisfies ListenData;
