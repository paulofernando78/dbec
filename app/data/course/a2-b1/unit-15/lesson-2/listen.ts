import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two coworkers discussing a computer problem and past decisions.",
  audio:
    "/media/audio/course/a2-b1/unit-15/lesson-2-if-only-i-had-known/listen/listen.mp3",
  dialogue: [
    ["A", ["My computer stopped working last night, and I lost the final version of my presentation."]],
    ["B", ["Oh no. Didn't you save a copy online?"]],
    ["A", ["No. What ", mark("should I have done"), "?"]],
    ["B", ["You ", mark("should have backed up"), " your files before installing the new software."]],
    ["A", ["The computer showed a warning, but I closed it."]],
    ["B", ["You ", mark("shouldn't have ignored"), " the warning message. What did you do next?"]],
    ["A", ["I restarted the computer five times. What ", mark("would you have done"), "?"]],
    ["B", ["I ", mark("would have contacted"), " technical support after the first warning."]],
    ["A", ["So you wouldn't have kept restarting it?"]],
    ["B", ["No, I ", mark("wouldn't have restarted"), " the computer repeatedly. But support may still recover your file."]],
    ["A", ["I'll call them at nine this morning. My presentation isn't until tomorrow afternoon."]],
    ["B", ["Good. You still have time to solve the problem."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What did speaker A lose?",
  options: ["The final version of a presentation", "A new computer", "A warning message"],
  answer: "The final version of a presentation",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When did speaker A's computer stop working?",
      answer: "Last night.",
    },
    {
      question: "When should speaker A have backed up the files?",
      answer: "Before installing the new software.",
    },
    {
      question: "How many times did speaker A restart the computer?",
      answer: "Five times.",
    },
    {
      question: "Who would speaker B have contacted?",
      answer: "Technical support.",
    },
    {
      question: "When is speaker A's presentation?",
      answer: "Tomorrow afternoon.",
    },
  ],
} satisfies ListenData;
