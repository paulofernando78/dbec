import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends planning a presentation about famous works and their creators.",
  audio:
    "/media/audio/course/a2-b1/unit-11/lesson-1-built-by-genius/listen/listen.mp3",
  dialogue: [
    ["A", ["Which famous work should we put first in our presentation?"]],
    ["B", ["Let's begin with the Mona Lisa. Leonardo da Vinci ", mark("painted"), " it, so we can say, ‘The Mona Lisa ", mark("was painted by"), " Leonardo da Vinci.’"]],
    ["A", ["Good. The painting is displayed in the Louvre Museum in Paris."]],
    ["B", ["Then let's add the Eiffel Tower. Gustave Eiffel's company ", mark("built"), " it."]],
    ["A", ["Right. The Eiffel Tower ", mark("was built by"), " Gustave Eiffel's company for the 1889 World's Fair."]],
    ["B", ["We need one modern structure too."]],
    ["A", ["How about the Louvre Pyramid? I. M. Pei ", mark("designed"), " it."]],
    ["B", ["Perfect. The Louvre Pyramid ", mark("was designed by"), " I. M. Pei, and it opened in 1989."]],
    ["A", ["Great. I'll prepare the images, and you can write the captions."]],
    ["B", ["All right. We'll finish the presentation tonight."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Who painted the Mona Lisa?",
  options: ["Leonardo da Vinci", "I. M. Pei", "Gustave Eiffel"],
  answer: "Leonardo da Vinci",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Where is the Mona Lisa displayed?",
      answer: "In the Louvre Museum in Paris.",
    },
    {
      question: "Who built the Eiffel Tower?",
      answer: "Gustave Eiffel's company.",
    },
    {
      question: "What event was the Eiffel Tower built for?",
      answer: "The 1889 World's Fair.",
    },
    {
      question: "Who designed the Louvre Pyramid?",
      answer: "I. M. Pei.",
    },
    {
      question: "When did the Louvre Pyramid open?",
      answer: "In 1989.",
    },
  ],
} satisfies ListenData;
