import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Make polite requests with modals or Would you mind followed by a gerund.",
  items: [
    [
      [bold("Can"), " you ", bold("bring"), " the recycling bins inside, please? — ", bold("Would you mind bringing"), " the recycling bins inside?"],
      "Use a modal plus the simple form or Would you mind plus a gerund to make a polite request.",
      "Use polite rising intonation and stress the requested action.",
      "Can + subject + base verb? · Would you mind + gerund?",
      undefined,
      "Você pode trazer as lixeiras de reciclagem para dentro, por favor? — Você se importaria de trazer as lixeiras de reciclagem para dentro?",
    ],
    [
      [bold("Could"), " you ", bold("turn down"), " the television, please? — ", bold("Would you mind turning"), " the television down?"],
      "Could you is polite; Would you mind plus a gerund is often softer and more indirect.",
      "Stress turn down or turning down and keep the rest of the request lighter.",
      "Could + subject + base verb? · Would you mind + gerund?",
      undefined,
      "Você poderia abaixar o volume da televisão, por favor? — Você se importaria de abaixar o volume da televisão?",
    ],
    [
      [bold("Would"), " you please ", bold("move"), " your shoes away from the doorway? — ", bold("Would you mind not leaving"), " your shoes by the doorway?"],
      "Use Would you mind not plus a gerund to politely ask someone to stop or avoid an action.",
      "Stress move, not leaving, shoes, and doorway.",
      "Would + subject + please + base verb? · Would you mind not + gerund?",
      undefined,
      "Você poderia tirar seus sapatos da entrada, por favor? — Você se importaria de não deixar seus sapatos perto da entrada?",
    ],
  ],
} satisfies LanguageFocusData;
