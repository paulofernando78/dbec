import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use clauses with because to explain job preferences and career choices.",
  items: [
    [
      ["I'd make a good event planner ", bold("because I'm highly organized"), "."],
      "Use because to introduce the reason for a positive opinion about a job.",
      "Stress event planner, because, and highly organized.",
      "statement + because + reason",
      undefined,
      "Eu seria um bom organizador de eventos porque sou muito organizado.",
    ],
    [
      ["I could be a park ranger ", bold("because I enjoy working outdoors"), "."],
      "Use because to connect a possible career to a personal preference.",
      "Stress park ranger, because, and outdoors.",
      "could + base verb + because + reason",
      undefined,
      "Eu poderia ser guarda-parque porque gosto de trabalhar ao ar livre.",
    ],
    [
      ["I wouldn't want to be a surgeon ", bold("because I dislike working under pressure"), "."],
      "Use because to explain why a job is not suitable for someone.",
      "Stress wouldn't want, surgeon, because, and pressure.",
      "wouldn't want + infinitive + because + reason",
      undefined,
      "Eu não gostaria de ser cirurgião porque não gosto de trabalhar sob pressão.",
    ],
    [
      ["I could never be a tour guide ", bold("because I have trouble remembering names"), "."],
      "Use because to give a reason after a strong negative statement about a career.",
      "Stress never, tour guide, because, and remembering names.",
      "could never + base verb + because + reason",
      undefined,
      "Eu nunca poderia ser guia turístico porque tenho dificuldade para lembrar nomes.",
    ],
  ],
} satisfies LanguageFocusData;
