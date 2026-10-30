import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction:
    "First listen: Laura and Eric exchange contact information.",
  image:
    "/media/images/course/a1/unit-1/lesson-2-stay-in-touch/listen/contact-information.avif?v=1",
  imageAlt: "Laura watches as Eric saves her contact information on his phone",
  audio: "/media/audio/course/a1/unit-1/lesson-2-stay-in-touch/listen/listen.mp3",
  dialogue: [
    ["Eric", ["Hey, Laura. ", mark("What's your phone number?")]],
    ["Laura", [mark("It's"), " five, five, five, zero, one, eight, two."]],
    ["Eric", ["Five, five, five, zero, one, eight, three?"]],
    ["Laura", ["No. It's two, not three."]],
    ["Eric", [mark("What's your email address?")]],
    ["Laura", ["It's ", mark("laura@email.com"), ". Here's my card."]],
    ["Eric", ["Thank you."]],
    ["Laura", [mark("Goodbye. See you soon.")]],
    ["Eric", ["See you."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Eric asks for:",
  options: ["Her phone number and email", "Her job and address", "Her age and birthday"],
  answer: "Her phone number and email",
  followUpInstruction: "Listen again. Find the details.",
  followUp: [
    {
      question: "Woman’s name:",
      answer: "Laura.",
    },
    {
      question: "Laura’s phone number:",
      answer: "Five, five, five, zero, one, eight, two.",
    },
    {
      question: "Laura’s email:",
      answer: "laura@email.com.",
    },
  ],
} satisfies ListenData;
