import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about their eating habits.",
  audio: "/media/audio/course/a1/unit-9/lesson-2-eating-habits/listen/listen.mp3",
  dialogue: [
    ["A", ["Do you eat breakfast every day, Mia?"]],
    ["B", ["Yes. I ", mark("always eat breakfast"), "."]],
    ["A", ["What do you usually have?"]],
    ["B", ["I ", mark("usually have cereal and fruit"), "."]],
    ["A", ["Do you ever drink coffee?"]],
    ["B", ["No. I ", mark("never drink coffee"), ". I often drink tea."]],
    ["A", ["Do you cook lunch at home?"]],
    ["B", [mark("Sometimes I do"), ". I often eat at work."]],
    ["A", ["What about dinner?"]],
    ["B", ["I usually cook dinner. I ", mark("hardly ever order food"), "."]],
    ["A", ["Do you ever eat dessert?"]],
    ["B", ["Yes. I ", mark("sometimes eat yogurt"), " after dinner."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "How often does Mia eat breakfast?",
  options: ["Always", "Sometimes", "Never"],
  answer: "Always",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What does Mia usually have for breakfast?",
      answer: "Cereal and fruit.",
    },
    {
      question: "Does Mia drink coffee?",
      answer: "No, she never drinks coffee.",
    },
    {
      question: "What does Mia often drink?",
      answer: "Tea.",
    },
    {
      question: "How often does Mia order food for dinner?",
      answer: "Hardly ever.",
    },
    {
      question: "What dessert does Mia sometimes eat?",
      answer: "Yogurt.",
    },
  ],
} satisfies ListenData;
