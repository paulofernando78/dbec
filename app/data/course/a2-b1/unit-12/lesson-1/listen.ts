import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talking about an eventful afternoon.",
  audio:
    "/media/audio/course/a2-b1/unit-12/lesson-1-when-it-happened/listen/listen.mp3",
  dialogue: [
    ["A", ["Why were you so late yesterday afternoon?"]],
    ["B", ["First, I ", mark("was waiting"), " for the bus when a cyclist ", mark("dropped"), " a bag."]],
    ["A", ["Did you help the cyclist?"]],
    ["B", ["Yes. I picked up the bag, but then I missed my bus at three fifteen."]],
    ["A", ["So what did you do next?"]],
    ["B", ["My cousin met me, and we walked downtown. We ", mark("were crossing"), " the bridge when the storm ", mark("started"), "."]],
    ["A", ["You must have gotten very wet."]],
    ["B", ["We did. Then, ", mark("while I was taking"), " photos of the clouds, my phone ", mark("slipped"), " out of my hand."]],
    ["A", ["Oh no! Did it fall into the river?"]],
    ["B", ["Luckily, no. It landed on my backpack, so it wasn't damaged."]],
    ["A", ["What an afternoon! At least your phone is all right."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What did the cyclist drop?",
  options: ["A bag", "A phone", "A backpack"],
  answer: "A bag",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What time did speaker B miss the bus?",
      answer: "At three fifteen.",
    },
    {
      question: "Who met speaker B after the missed bus?",
      answer: "Speaker B's cousin.",
    },
    {
      question: "Where were they when the storm started?",
      answer: "They were crossing the bridge.",
    },
    {
      question: "What was speaker B doing when the phone slipped?",
      answer: "Taking photos of the clouds.",
    },
    {
      question: "Where did the phone land?",
      answer: "On speaker B's backpack.",
    },
  ],
} satisfies ListenData;
