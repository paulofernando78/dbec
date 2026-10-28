import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a customer describing damage after a repair visit.",
  audio: "/media/audio/course/b1/unit-6/lesson-1-whats-the-problem/listen/listen.mp3",
  dialogue: [
    ["Agent", ["How can I help you?"]],
    ["Customer", ["Your repair service damaged my kitchen floor yesterday."]],
    ["Agent", [mark("Is the bedroom floor scratched?")]],
    ["Customer", ["No, the KITCHEN floor is scratched, and there's a dent in the refrigerator."]],
    ["Agent", ["Was the refrigerator door already damaged?"]],
    ["Customer", ["No. It was fine before the technician arrived."]],
    ["Agent", [mark("Is anything else broken?")]],
    ["Customer", ["The washing-machine hose is torn, so it's leaking now."]],
    ["Agent", ["I'm sorry. I'll arrange an inspection today."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which floor is scratched?",
  options: ["The bedroom floor", "The kitchen floor", "The bathroom floor"],
  answer: "The kitchen floor",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What is in the refrigerator?", answer: "There's a dent in it." },
    { question: "What happened to the washing-machine hose?", answer: "It was torn." },
    { question: "What will the agent arrange?", answer: "An inspection." },
  ],
} satisfies ListenData;
