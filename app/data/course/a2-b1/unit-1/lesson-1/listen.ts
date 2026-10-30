import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two people talking about the past.",
  image:
    "/media/images/course/a2-b1/unit-1/lesson-1-asking-about-the-past/listen/laura-eric-park-conversation.avif?v=1",
  imageAlt: "Laura and Eric talking on a bench in a city park",
  audio:
    "/media/audio/course/a2-b1/unit-1/lesson-1-asking-about-the-past/listen/listen.mp3",
  dialogue: [
    ["Eric", ["Where ", mark("were"), " you born?"]],
    ["Laura", ["I ", mark("was"), " born in Argentina."]],
    ["Eric", [mark("Were"), " you born in Buenos Aires?"]],
    [
      "Laura",
      ["No, I ", mark("wasn't"), ". I ", mark("was"), " born in Córdoba."],
    ],
    [
      "Eric",
      ["When ", mark("did"), " you ", mark("move"), " to Los Angeles?"],
    ],
    [
      "Laura",
      [
        "I ",
        mark("moved"),
        " here ten years ago. I ",
        mark("didn't speak"),
        " English then.",
      ],
    ],
    [
      "Eric",
      [mark("Did"), " you ", mark("take"), " English classes in Argentina?"],
    ],
    [
      "Laura",
      [
        "Yes, I ",
        mark("did"),
        ". I ",
        mark("took"),
        " classes for a year. My aunt also ",
        mark("taught"),
        " me at home.",
      ],
    ],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where was Laura born?",
  options: ["Buenos Aires", "Córdoba", "Los Angeles"],
  answer: "Córdoba",
  followUpInstruction: "Listen for details. Answer the questions.",
  followUp: [
    {
      question: "When did Laura move to Los Angeles?",
      answer: "Laura moved there ten years ago.",
    },
    {
      question: "Did Laura speak English after moving?",
      answer: "No, Laura didn't.",
    },
    {
      question: "Who taught Laura English at home?",
      answer: "Laura's aunt taught her at home.",
    },
  ],
  extraDialogue: {
    instruction: "Listen to another conversation about the past.",
    audio:
      "/media/audio/course/a2-b1/unit-1/lesson-1-asking-about-the-past/listen/laura-eric-second-dialogue.mp3",
    dialogue: [
      ["Laura", ["Where ", mark("did"), " you grow up?"]],
      ["Eric", ["I ", mark("grew up"), " in São Paulo."]],
      ["Laura", ["What ", mark("was"), " your first job?"]],
      [
        "Eric",
        ["I ", mark("worked"), " in a small design studio."],
      ],
      [
        "Laura",
        ["When ", mark("did"), " you ", mark("move"), " to Los Angeles?"],
      ],
      ["Eric", ["I ", mark("moved"), " here six years ago."]],
      ["Laura", [mark("Did"), " you know anyone here?"]],
      [
        "Eric",
        [
          "Yes. My cousin ",
          mark("lived"),
          " here and ",
          mark("helped"),
          " me find an apartment.",
        ],
      ],
    ],
    questionInstruction: "Listen for details. Answer the questions.",
    questions: [
      "Where did Eric grow up?",
      "What was Eric's first job?",
      "When did Eric move to Los Angeles?",
      "Who helped Eric find an apartment?",
    ],
  },
} satisfies ListenData;
