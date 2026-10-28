import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two customers ordering at a restaurant.",
  audio: "/media/audio/course/a2/unit-13/lesson-2-ready-to-order/listen/listen.mp3",
  dialogue: [
    ["Server", [mark("What would you like?")]],
    ["Nina", ["I'd like the veggie burger with a mango salad, please."]],
    ["Server", ["And what will you have?"]],
    ["Leo", ["I'll have the soup of the day and a sandwich."]],
    ["Server", [mark("What would you like to drink?")]],
    ["Nina", ["I'll have a lemonade."]],
    ["Leo", ["I'd like a large orange juice."]],
    ["Server", ["Would you like anything else?"]],
    ["Nina", ["No, that's all, thanks."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What does Nina order to eat?",
  options: ["A veggie burger and mango salad", "Soup and a sandwich", "Sushi and French fries"],
  answer: "A veggie burger and mango salad",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What does Leo order to eat?", answer: "The soup of the day and a sandwich." },
    { question: "What does Nina order to drink?", answer: "A lemonade." },
    { question: "Does Nina want anything else?", answer: "No. That's all." },
  ],
} satisfies ListenData;
