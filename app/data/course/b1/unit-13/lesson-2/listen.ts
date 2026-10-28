import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends evaluate a disappointing anniversary.",
  audio: "/media/audio/course/b1/unit-13/lesson-2-what-could-have-been-done/listen/listen.mp3",
  dialogue: [
    ["Helena", ["Drew forgot our anniversary. He should have written the date down."]],
    ["Marta", ["He could have set a reminder on his phone."]],
    ["Helena", [mark("And he made an excuse instead of apologizing.")]],
    ["Marta", ["I would have admitted the mistake and planned a special dinner."]],
    ["Helena", ["I criticized him, but maybe I shouldn't have made assumptions about why he forgot."]],
    ["Marta", [mark("You could have asked him what happened before reacting.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What alternative does Marta first suggest?",
  options: ["Writing a letter", "Setting a phone reminder", "Buying a gift"],
  answer: "Setting a phone reminder",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What did Drew do instead of apologizing?", answer: "He made an excuse." },
    { question: "What would Marta have done?", answer: "She would have admitted the mistake and planned a special dinner." },
    { question: "What does Helena think she should not have done?", answer: "She should not have made assumptions." },
  ],
} satisfies ListenData;
