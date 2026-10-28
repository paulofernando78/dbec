import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing customs at a family dinner.",
  audio:
    "/media/audio/course/a2-b1/unit-8/lesson-2-customs-and-traditions/listen/listen.mp3",
  dialogue: [
    ["A", ["I'm having dinner with your family on Saturday. Is there anything I should know?"]],
    ["B", [mark("When guests enter the house"), ", they take off their shoes and leave them by the door."]],
    ["A", ["That's easy. What happens when we go to the dining room?"]],
    ["B", [mark("After everyone sits down"), ", the host serves tea. My grandmother is the host this time."]],
    ["A", ["Should I start eating as soon as the food arrives?"]],
    ["B", ["Not yet. ", mark("Before the meal begins"), ", the family expresses gratitude for about one minute."]],
    ["A", ["Thanks for explaining. Should I bring anything?"]],
    ["B", ["You can bring fruit. We usually share it after dinner."]],
    ["A", ["Great. I'll bring some oranges, and I'll arrive at seven."]],
    ["B", ["Perfect. Everyone will be happy to meet you."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where do guests leave their shoes?",
  options: ["By the door", "Under the table", "In the dining room"],
  answer: "By the door",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Who serves tea after everyone sits down?",
      answer: "The host, speaker B's grandmother.",
    },
    {
      question: "What does the family do before the meal begins?",
      answer: "They express gratitude.",
    },
    {
      question: "How long does the family express gratitude?",
      answer: "For about one minute.",
    },
    {
      question: "What will speaker A bring?",
      answer: "Some oranges.",
    },
    {
      question: "What time will speaker A arrive?",
      answer: "At seven.",
    },
  ],
} satisfies ListenData;
