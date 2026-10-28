import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two roommates preparing a polite note about shared-house rules.",
  audio:
    "/media/audio/course/a2-b1/unit-6/lesson-2-would-you-mind/listen/listen.mp3",
  dialogue: [
    ["A", ["We should write a polite note about the shared areas."]],
    ["B", ["Good idea. Let's start with the recycling bins."]],
    ["A", [mark("Can"), " you ", mark("bring"), " the recycling bins inside, please?"]],
    ["B", ["That's fine. We could also say, ", mark("Would you mind bringing"), " the recycling bins inside?"]],
    ["A", ["Next, we need something about noise at night."]],
    ["B", ["How about: ", mark("Could"), " you ", mark("turn down"), " the television, please?"]],
    ["A", ["Or we could write: ", mark("Would you mind turning"), " the television down?"]],
    ["B", ["Perfect. The shoes by the entrance are another problem."]],
    ["A", [mark("Would"), " you please ", mark("move"), " your shoes away from the doorway?"]],
    ["B", ["I like this better: ", mark("Would you mind not leaving"), " your shoes by the doorway?"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What are the speakers preparing?",
  options: ["A polite note", "A shopping list", "A travel itinerary"],
  answer: "A polite note",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What should people bring inside?",
      answer: "The recycling bins.",
    },
    {
      question: "What should people turn down at night?",
      answer: "The television.",
    },
    {
      question: "What is the problem near the entrance?",
      answer: "Shoes are being left by the doorway.",
    },
    {
      question: "Which final request does speaker B prefer?",
      answer: "Would you mind not leaving your shoes by the doorway?",
    },
  ],
} satisfies ListenData;
