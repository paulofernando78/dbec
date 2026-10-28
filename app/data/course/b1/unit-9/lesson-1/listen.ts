import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to neighbors discussing services they need.",
  audio: "/media/audio/course/b1/unit-9/lesson-1-getting-things-done/listen/listen.mp3",
  dialogue: [
    ["Noah", ["Do you know a reliable home-repair service?"]],
    ["Priya", ["Yes. I had my kitchen sink fixed by a local company last month."]],
    ["Noah", [mark("Could I get my bedroom painted by them?")]],
    ["Priya", ["Probably. You can also have your carpets cleaned through the same directory."]],
    ["Noah", ["I need my computer repaired, too."]],
    ["Priya", [mark("You can get it repaired at the electronics shop on Main Street.")]],
    ["Noah", ["Great. Where do you have your car washed?"]],
    ["Priya", ["I have it washed at the auto shop next door."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What did Priya have fixed?",
  options: ["Her kitchen sink", "Her computer", "Her security system"],
  answer: "Her kitchen sink",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What does Noah want painted?", answer: "His bedroom." },
    { question: "Where can he get his computer repaired?", answer: "At the electronics shop on Main Street." },
    { question: "Where does Priya have her car washed?", answer: "At the auto shop next door." },
  ],
} satisfies ListenData;
