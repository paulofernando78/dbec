import type { LanguageFocusData } from "../../../lesson-step-types";
import { TimeExpressions } from "@/features/TimeExpressions";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus", component: TimeExpressions,
  instruction: "Listen, repeat, and notice how we ask about routines.",
  items: [
    [[bold("Do you eat"), " breakfast at home? — Yes, I do. / No, I don’t."], "Ask another person about a routine.", "Use rising intonation. Stress BREAKfast, YES, or NO.", "Do + you + verb? · Yes, I do. / No, I don’t.", undefined, "Você toma café da manhã em casa? — Sim. / Não."],
    [[bold("Does he take"), " the bus? — No, he doesn’t."], "Ask about he or she. The main verb stays in the base form after does.", "Stress BUS and DOESN’T.", "Does + he / she + verb? · Yes, he / she does. / No, he / she doesn’t.", undefined, "Ele pega o ônibus? — Não."],
    [[bold("What time do you leave"), " home? — At seven forty-five."], "Ask for an exact routine time.", "Stress WHAT TIME, LEAVE, and SEVen FORty-FIVE.", "What time + do + you + verb? · At + time", undefined, "A que horas você sai de casa? — Às sete e quarenta e cinco."],
    [[bold("When do you visit"), " your parents? — On Sundays."], "Ask for a day or general time.", "Stress WHEN, VISit, and SUNdays.", "When + do + you + verb? · On + day", undefined, "Quando você visita seus pais? — Aos domingos."],
  ],
} satisfies LanguageFocusData;
