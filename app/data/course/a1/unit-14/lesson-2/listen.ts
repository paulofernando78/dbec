import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about a vacation.",
  audio: "/media/audio/course/a1/unit-14/lesson-2-vacation-stories/listen/listen.mp3",
  dialogue: [
    ["A", [mark("Did you enjoy"), " your vacation, Maya?"]],
    ["B", ["Yes, I did. I went to Recife with my family."]],
    ["A", ["Did you fly there?"]],
    ["B", ["Yes. We ", mark("flew to Recife"), " on Friday."]],
    ["A", ["Did you stay at a hotel?"]],
    ["B", ["No, we didn't. We ", mark("stayed with my aunt"), "."]],
    ["A", ["Did you visit the beach?"]],
    ["B", ["Yes, we did. We also ", mark("saw an old fort"), "."]],
    ["A", ["What did you eat?"]],
    ["B", ["We ", mark("ate local food"), " at a small restaurant."]],
    ["A", ["Did you buy anything?"]],
    ["B", ["Yes. I ", mark("bought some souvenirs"), "."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Maya's vacation:",
  options: ["She enjoyed it", "She didn't enjoy it", "She stayed home"],
  answer: "She enjoyed it",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "How did Maya travel?",
      answer: "By plane.",
    },
    {
      question: "Where did Maya's family stay?",
      answer: "At her aunt's home.",
    },
    {
      question: "What two places did they visit?",
      answer: "The beach and an old fort.",
    },
    {
      question: "Where did they eat local food?",
      answer: "At a small restaurant.",
    },
    {
      question: "What did Maya buy?",
      answer: "Some souvenirs.",
    },
  ],
} satisfies ListenData;
