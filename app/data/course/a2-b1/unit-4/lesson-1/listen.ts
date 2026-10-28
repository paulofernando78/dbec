import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing travel and learning experiences.",
  audio:
    "/media/audio/course/a2-b1/unit-4/lesson-1-life-experiences/listen/listen.mp3",
  dialogue: [
    ["A", [mark("Have"), " you ever ", mark("visited"), " a volcano?"]],
    [
      "B",
      ["Yes, I ", mark("have"), ". I ", mark("climbed"), " one in Costa Rica three years ago."],
    ],
    ["A", [mark("Did"), " you ", mark("enjoy"), " the trip?"]],
    [
      "B",
      ["Yes, I ", mark("did"), ". The views ", mark("were"), " incredible."],
    ],
    [
      "B",
      ["What about you? ", mark("Have"), " you ever ", mark("taken"), " a pottery class?"],
    ],
    [
      "A",
      ["No, I ", mark("haven't"), ". But I ", mark("joined"), " a photography workshop last summer."],
    ],
    ["B", [mark("Did"), " you ", mark("go"), " alone?"]],
    ["A", ["No, I ", mark("went"), " with my cousin."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where did speaker B climb a volcano?",
  options: ["Costa Rica", "Thailand", "Argentina"],
  answer: "Costa Rica",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When did speaker B climb the volcano?",
      answer: "Speaker B climbed it three years ago.",
    },
    {
      question: "How were the views?",
      answer: "The views were incredible.",
    },
    {
      question: "Has speaker A ever taken a pottery class?",
      answer: "No, speaker A hasn't.",
    },
    {
      question: "What workshop did speaker A join last summer?",
      answer: "A photography workshop.",
    },
    {
      question: "Who went to the workshop with speaker A?",
      answer: "Speaker A's cousin.",
    },
  ],
} satisfies ListenData;
