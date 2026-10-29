import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two old friends discussing how their habits changed after moving away.",
  audio: "",
  dialogue: [
    ["Rosa", ["Do you remember how we used to spend every evening together?"]],
    ["Caleb", ["Of course. We would sit outside for hours and talk about our plans."]],
    ["Rosa", ["I didn't use to like change, but moving abroad made me more independent."]],
    ["Caleb", ["Same here. Whenever I had a problem, I would ask my family to solve it for me."]],
    ["Rosa", ["How did you stay connected after you moved?"]],
    ["Caleb", ["I kept in touch through weekly calls, and following local news helped me keep up with current events."]],
    ["Rosa", [mark("Keeping things in perspective helped me stay calm when everything felt unfamiliar"), "."]],
    ["Caleb", ["Exactly. Familiar routines can keep you out of trouble while you're adjusting."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "How did moving abroad affect Rosa?",
  options: [
    "It made her more independent and comfortable with change.",
    "It caused her to depend more heavily on her family.",
    "It made her stop communicating with old friends.",
  ],
  answer: "It made her more independent and comfortable with change.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What would Rosa and Caleb do in the evenings?", answer: "Sit outside and talk for hours." },
    { question: "What didn't Rosa use to like?", answer: "Change." },
    { question: "How did Caleb keep in touch?", answer: "Through weekly calls." },
    { question: "What helped Rosa remain calm?", answer: "Keeping things in perspective." },
  ],
} satisfies ListenData;
