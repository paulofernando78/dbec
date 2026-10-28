import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Express preferences about learning paths and benefits using would rather and would prefer.",
  items: [
    [
      [bold("Would you rather take"), " an art course or a professional course? — I'd rather take an art course."],
      "Use would rather + base verb to choose between alternatives.",
      "In a choice question, intonation rises on the first option and falls on the final one.",
      "would rather + base verb · would = 'd",
      undefined,
      "Você preferiria fazer um curso de arte ou profissional? — Eu preferiria o curso de arte.",
    ],
    [
      ["I'd rather ", bold("not take"), " either. I'd rather take a language course than study art."],
      "Put not before the base verb for a negative preference. Use rather ... than ... to contrast actions.",
      "Stress the preferred action and the contrasted alternative.",
      "would rather not + base verb · would rather + verb + than + verb",
      undefined,
      "Eu preferiria não fazer nenhum dos dois. Preferiria fazer um curso de idiomas a estudar arte.",
    ],
    [
      [bold("Would you prefer to take"), " an online course or a traditional course? — I'd prefer to take an online course."],
      "Use would prefer + infinitive for a specific preference.",
      "Use choice-question intonation and stress the selected option.",
      "would prefer + to + base verb",
      undefined,
      "Você preferiria fazer um curso on-line ou tradicional? — Eu preferiria um curso on-line.",
    ],
    [
      ["Let's join a study group. — I'd rather not. / I'd prefer ", bold("not to"), "."],
      "Use would rather not + base verb or would prefer not to + base verb to decline a suggestion.",
      "Use a polite falling tone and stress not.",
      "would rather not + verb · would prefer not to + verb",
      undefined,
      "Vamos entrar em um grupo de estudos. — Eu preferiria não entrar.",
    ],
    [
      ["I'd rather ", bold("take online courses"), " to change careers, but I'd prefer ", bold("attending conferences"), " to expand my network."],
      "Use learning-path and benefit vocabulary to explain why a particular option suits a goal.",
      "Stress the learning path and intended benefit.",
      "go to college · take online/traditional classes · study independently · join a group · attend conferences · watch lectures · get a degree · expand a network · earn a certification",
      undefined,
      "Prefiro cursos on-line para mudar de carreira, mas prefiro participar de conferências para ampliar minha rede.",
    ],
  ],
} satisfies LanguageFocusData;
