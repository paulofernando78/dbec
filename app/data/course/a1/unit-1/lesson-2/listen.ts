import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction:
    "First listen: Sofia and Daniel meet again. Listen for phone and email.",
  audio: "/media/audio/course/a1/unit-1/lesson-2-stay-in-touch/listen/listen.mp3",
  dialogue: [
    ["A", ["Are you Daniel Costa?"]],
    ["B", ["No, I'm not. I'm Daniel Santos. Are you Sofia Mendes?"]],
    ["A", ["Yes, I am. I'm Sofia Mendes. Sorry about that."]],
    ["B", ["Nice to see you again, Sofia. How are you?"]],
    ["A", ["I'm great, thanks. This is Lucas. He's my coworker."]],
    ["B", ["And who is the woman with him?"]],
    ["A", ["She's our new designer, Marina."]],
    ["B", ["I'd like to stay in touch. ", mark("What's your phone number?")]],
    ["A", [mark("It's"), " my work number: five, five, one, zero, eight, two, four, six."]],
    ["B", ["Got it. ", mark("What's your email address"), "?"]],
    ["A", ["It's sofia_mendes-work@example.com. That's Sofia ", mark("underscore"), " Mendes ", mark("dash"), " work ", mark("at"), " example ", mark("dot"), " com."]],
    ["B", ["Thanks. You're in my contacts now."]],
    ["A", ["Great. ", mark("See you at the office on Monday.")]],
    ["B", [mark("See you then.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Daniel asks for:",
  options: ["Her phone number and email", "Her job and address", "Her age and birthday"],
  answer: "Her phone number and email",
  followUpInstruction: "Listen again. Find the details.",
  followUp: [
    {
      question: "Woman’s name:",
      answer: "Sofia Mendes.",
    },
    {
      question: "Sofia’s work number:",
      answer: "Five, five, one, zero, eight, two, four, six.",
    },
    {
      question: "@ =",
      answer: "At.",
    },
    {
      question: ". =",
      answer: "Dot.",
    },
  ],
} satisfies ListenData;
