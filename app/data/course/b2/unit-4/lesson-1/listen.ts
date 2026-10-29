import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two coworkers discussing energy, routines, and avoiding burnout.",
  audio: "",
  dialogue: [
    ["Camila", ["You look exhausted. Have you been working late again?"]],
    ["Noah", ["Yes. After finishing my regular work, I stayed up to prepare tomorrow's report."]],
    ["Camila", ["You'll burn out if you keep doing that. How do you perk up during the day?"]],
    ["Noah", ["I usually have coffee right after waking up, but it doesn't help for long."]],
    ["Camila", ["Try taking a short walk. Whenever I feel sleepy, I race off outside for ten minutes."]],
    ["Noah", ["I sometimes doze off at my desk after lunch. Maybe I need a power nap."]],
    ["Camila", [mark("Before returning to work, take a few minutes to calm down and reset"), "."]],
    ["Noah", ["Good idea. I'll also turn in earlier tonight instead of trying to catch up on everything."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is the main cause of Noah's low energy?",
  options: [
    "He has been working late and not getting enough rest.",
    "He exercises for too long before work.",
    "He takes too many naps during the afternoon.",
  ],
  answer: "He has been working late and not getting enough rest.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What did Noah do after finishing his regular work?", answer: "He prepared the next day's report." },
    { question: "What does Camila do whenever she feels sleepy?", answer: "She takes a short walk outside." },
    { question: "What happens to Noah after lunch?", answer: "He sometimes dozes off at his desk." },
    { question: "What will Noah try to do tonight?", answer: "Turn in earlier." },
  ],
} satisfies ListenData;
