import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two coworkers discussing how to keep a new work phone secure.",
  audio:
    "/media/audio/course/a2-b1/unit-7/lesson-2-heres-an-idea/listen/listen.mp3",
  dialogue: [
    ["A", ["I just got my new work phone. Do you have any security suggestions?"]],
    ["B", [mark("Be sure to enable"), " two-factor authentication first."]],
    ["A", ["Good idea. What should I do with my documents and photos?"]],
    ["B", [mark("Make sure to save"), " backup copies of your files every Friday."]],
    ["A", ["All right. Is there anything I should do while I'm at the office?"]],
    ["B", [mark("Remember to lock"), " your screen when you leave your desk."]],
    ["A", ["What about the apps on the phone?"]],
    ["B", [mark("Don't forget to check"), " your privacy settings once a month."]],
    ["A", ["And is it safe to post where I am online?"]],
    ["B", [mark("Try not to share"), " your location publicly. Send it privately only when someone you trust needs it."]],
    ["A", ["Thanks. I'll set everything up before tomorrow's meeting."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What should speaker A enable first?",
  options: ["Two-factor authentication", "Public location sharing", "Automatic posting"],
  answer: "Two-factor authentication",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When should speaker A save backup copies?",
      answer: "Every Friday.",
    },
    {
      question: "What should speaker A do when leaving the desk?",
      answer: "Lock the phone's screen.",
    },
    {
      question: "How often should speaker A check the privacy settings?",
      answer: "Once a month.",
    },
    {
      question: "How should speaker A share a location when necessary?",
      answer: "Privately and only with someone they trust.",
    },
    {
      question: "When will speaker A finish setting everything up?",
      answer: "Before tomorrow's meeting.",
    },
  ],
} satisfies ListenData;
