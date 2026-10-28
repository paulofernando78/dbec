import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a filmmaker explain how an animated scene is produced.",
  audio: "/media/audio/course/b1/unit-14/lesson-1-how-its-made/listen/listen.mp3",
  dialogue: [
    ["Host", ["How is an animated scene created?"]],
    ["Director", ["First, a screenplay is chosen and a storyboard is prepared."]],
    ["Host", [mark("What happens after the characters are drawn?")]],
    ["Director", ["Their movements may be recorded with motion capture, and the images are created digitally."]],
    ["Host", ["Is the scene finished at that point?"]],
    ["Director", [mark("Not yet. The sound has to be added, and the final scene must be reviewed before it is released.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is prepared after a screenplay is chosen?",
  options: ["A storyboard", "A soundtrack", "A movie poster"],
  answer: "A storyboard",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How may the characters' movements be recorded?", answer: "With motion capture." },
    { question: "What has to be added after the images are created?", answer: "The sound." },
    { question: "What must happen before the scene is released?", answer: "It must be reviewed." },
  ],
} satisfies ListenData;
