import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two students talking about their part-time jobs.",
  audio: "/media/audio/course/a2/unit-2/lesson-1-what-do-you-do/listen/listen.mp3",
  dialogue: [
    ["Nina", [mark("What do you do, Alex?")]],
    ["Alex", ["I'm a student, and I have a part-time job."]],
    ["Nina", [mark("Where do you work?")]],
    ["Alex", ["I work at a gym. I'm a fitness instructor."]],
    ["Nina", ["That sounds fun. How do you like it?"]],
    ["Alex", ["I really like it. What about your sister? What does she do?"]],
    ["Nina", ["She's an office assistant. She works at a design company."]],
    ["Alex", [mark("Does she study, too?")]],
    ["Nina", ["Yes, she does. She studies web design at night."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Conversation topic:",
  options: ["Work and studies", "Shopping", "Family vacation"],
  answer: "Work and studies",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Where does Alex work?", answer: "He works at a gym." },
    { question: "What does Nina's sister do?", answer: "She's an office assistant." },
    { question: "What does Nina's sister study?", answer: "She studies web design." },
  ],
} satisfies ListenData;
