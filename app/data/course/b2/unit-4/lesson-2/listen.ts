import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two friends discussing sleeping habits and possible solutions.",
  audio: "",
  dialogue: [
    ["Lena", ["You seem tired. Did you have another sleepless night?"]],
    ["Ravi", ["Pretty much. Even if I'm exhausted, I stay wide awake as soon as I get into bed."]],
    ["Lena", ["Could it be your evening routine?"]],
    ["Ravi", ["Possibly. I work late and check messages just in case a client needs something."]],
    ["Lena", ["Considering that your brain never gets a chance to slow down, it's not surprising you can't drift off."]],
    ["Ravi", ["I can manage on five hours of sleep as long as I take a power nap, but that isn't ideal."]],
    ["Lena", [mark("Unless you create a proper bedtime routine, the problem may continue"), "."]],
    ["Ravi", ["You're right. I'll silence my phone and only check it if there's a genuine emergency."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What most likely contributes to Ravi's sleeping problem?",
  options: [
    "He works and checks messages late at night.",
    "He sleeps too deeply after getting into bed.",
    "He wakes up early only when he has an appointment.",
  ],
  answer: "He works and checks messages late at night.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How does Ravi feel when he gets into bed?", answer: "He remains wide awake even when he is exhausted." },
    { question: "Why does Ravi check messages late at night?", answer: "In case a client needs something." },
    { question: "Under what condition can Ravi manage on five hours of sleep?", answer: "As long as he takes a power nap." },
    { question: "What change will Ravi make?", answer: "He will silence his phone and check it only for a genuine emergency." },
  ],
} satisfies ListenData;
