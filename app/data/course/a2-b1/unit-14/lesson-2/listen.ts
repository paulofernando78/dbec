import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a visitor asking a museum employee about the rules.",
  audio:
    "/media/audio/course/a2-b1/unit-14/lesson-2-signs-and-rules/listen/listen.mp3",
  dialogue: [
    ["A", ["Excuse me, can I take a picture near the entrance?"]],
    ["B", ["Yes, you ", mark("can take"), " photos in the lobby, but photography isn't permitted inside the special exhibition."]],
    ["A", ["All right. Where can I put my bag?"]],
    ["B", ["You're ", mark("allowed to use"), " the free lockers next to the information desk."]],
    ["A", ["Do I need to put this backpack there?"]],
    ["B", ["Yes. You ", mark("have to leave"), " large backpacks downstairs."]],
    ["A", ["Can I throw my ticket away after I enter?"]],
    ["B", ["No. You've ", mark("got to keep"), " your ticket until you exit because the guard may check it."]],
    ["A", ["Understood. Are there any other important rules?"]],
    ["B", ["You ", mark("can't touch"), " the exhibits, and drinks ", mark("aren't allowed"), " in the galleries."]],
    ["A", ["No problem. The café is upstairs, right?"]],
    ["B", ["Yes, it's on the second floor and closes at five thirty."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where can visitors take photos?",
  options: ["In the lobby", "Inside the special exhibition", "In every gallery"],
  answer: "In the lobby",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Where are the free lockers?",
      answer: "Next to the information desk.",
    },
    {
      question: "Where do visitors have to leave large backpacks?",
      answer: "Downstairs.",
    },
    {
      question: "Why must visitors keep their tickets?",
      answer: "Because the guard may check them.",
    },
    {
      question: "What two things are prohibited in the galleries?",
      answer: "Touching the exhibits and bringing drinks.",
    },
    {
      question: "What time does the café close?",
      answer: "At five thirty.",
    },
  ],
} satisfies ListenData;
