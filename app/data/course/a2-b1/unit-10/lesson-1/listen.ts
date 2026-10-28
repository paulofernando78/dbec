import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two coworkers comparing their professional skills and preferences.",
  audio:
    "/media/audio/course/a2-b1/unit-10/lesson-1-skills-at-work/listen/listen.mp3",
  dialogue: [
    ["A", ["We need to divide the tasks for next month's conference. What do you like doing?"]],
    ["B", ["I ", mark("enjoy organizing"), " events."]],
    ["A", [mark("So do I"), ". We can plan the schedule together."]],
    ["B", ["Great. I'm also ", mark("good at explaining"), " new procedures."]],
    ["A", [mark("I'm not"), ". You should lead the volunteer training on Monday."]],
    ["B", ["That's fine. I ", mark("don't mind answering"), " late emails either."]],
    ["A", ["Actually, ", mark("I do"), ". I turn off my work phone at eight."]],
    ["B", ["Fair enough. I'm ", mark("not interested in managing"), " the budget."]],
    ["A", [mark("Well, I am"), ". I can review the expenses every Friday."]],
    ["B", ["Perfect. One more thing: I ", mark("can't stand sitting"), " in long meetings."]],
    ["A", [mark("Neither can I"), ". Let's limit each planning meeting to thirty minutes."]],
    ["B", ["Deal. I think we'll make a good team."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What will speakers A and B plan together?",
  options: ["The conference schedule", "The company budget", "The volunteer interviews"],
  answer: "The conference schedule",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Who will lead the volunteer training?",
      answer: "Speaker B.",
    },
    {
      question: "What time does speaker A turn off the work phone?",
      answer: "At eight.",
    },
    {
      question: "Who will manage the budget?",
      answer: "Speaker A.",
    },
    {
      question: "How often will speaker A review the expenses?",
      answer: "Every Friday.",
    },
    {
      question: "How long will each planning meeting be?",
      answer: "Thirty minutes.",
    },
  ],
} satisfies ListenData;
