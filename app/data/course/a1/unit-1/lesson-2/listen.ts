import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two people meeting again and exchanging contact information.",
  audio: "/media/audio/course/a1/unit-1/lesson-2-stay-in-touch/listen/listen.mp3",
  dialogue: [
    ["A", [mark("Are you"), " Daniel Costa?"]],
    ["B", ["No, ", mark("I'm not"), ". I'm Daniel Santos. Are you Sofia Mendes?"]],
    ["A", ["Yes, ", mark("I am"), ". ", mark("I'm"), " Sofia Mendes. Sorry about that."]],
    ["B", ["Nice to see you again, Sofia. ", mark("How are you"), "?"]],
    ["A", [mark("I'm great"), ", thanks. This is Lucas. ", mark("He's"), " my coworker."]],
    ["B", ["And who is the woman with him?"]],
    ["A", [mark("She's"), " our new designer, Marina."]],
    ["B", ["I'd like to stay in touch. What's your phone number?"]],
    ["A", [mark("It's"), " my work number: five, five, one, zero, eight, two, four, six."]],
    ["B", ["Got it. ", mark("What's your email address"), "?"]],
    ["A", ["It's sofia_mendes-work@example.com. That's Sofia ", mark("underscore"), " Mendes ", mark("dash"), " work ", mark("at"), " example ", mark("dot"), " com."]],
    ["B", ["Thanks. ", mark("You're"), " in my contacts now."]],
    ["A", ["Great. See you at the office on Monday."]],
    ["B", ["See you then."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is speaker A's name?",
  options: ["Sofia Mendes", "Marina Costa", "Daniel Santos"],
  answer: "Sofia Mendes",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What is Daniel's last name?",
      answer: "Santos.",
    },
    {
      question: "Who is Lucas?",
      answer: "Sofia's coworker.",
    },
    {
      question: "What is Marina's job?",
      answer: "She is the new designer.",
    },
    {
      question: "What is Sofia's work number?",
      answer: "Five, five, one, zero, eight, two, four, six.",
    },
    {
      question: "What is Sofia's email address?",
      answer: "sofia_mendes-work@example.com.",
    },
    {
      question: "When will they see each other again?",
      answer: "On Monday.",
    },
  ],
} satisfies ListenData;
