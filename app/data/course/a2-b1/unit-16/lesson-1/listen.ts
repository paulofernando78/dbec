import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two coworkers reviewing requests from their team.",
  audio:
    "/media/audio/course/a2-b1/unit-16/lesson-1-excuses-and-requests/listen/listen.mp3",
  dialogue: [
    ["A", ["I missed the morning briefing. What did Sofia ask us to do?"]],
    ["B", ["She said, ‘Please submit the report before noon.’ In other words, she ", mark("asked me to submit"), " the report before noon."]],
    ["A", ["Was it only a suggestion?"]],
    ["B", ["No, it was a firm instruction. She ", mark("told me to submit"), " the report before noon."]],
    ["A", ["Did the security officer mention the visitor system?"]],
    ["B", ["Yes. He said, ‘Don't share the access code.’ He ", mark("asked me not to share"), " the access code with visitors."]],
    ["A", ["So that rule is mandatory."]],
    ["B", ["Exactly. He ", mark("told me not to share"), " the access code. Visitors must call reception instead."]],
    ["A", ["Was there anything else from the manager?"]],
    ["B", ["She said, ‘Could you reserve the conference room?’ The manager ", mark("asked me to reserve"), " the conference room for three o'clock."]],
    ["A", ["I'll prepare the slides while you make the reservation."]],
    ["B", ["Perfect. We'll be ready before the clients arrive."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "When must the report be submitted?",
  options: ["Before noon", "At three o'clock", "After the clients arrive"],
  answer: "Before noon",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Who mentioned the visitor system?",
      answer: "The security officer.",
    },
    {
      question: "What must speaker B not share?",
      answer: "The access code.",
    },
    {
      question: "Who must visitors call instead?",
      answer: "Reception.",
    },
    {
      question: "What time is the conference room needed?",
      answer: "At three o'clock.",
    },
    {
      question: "What will speaker A prepare?",
      answer: "The slides.",
    },
  ],
} satisfies ListenData;
