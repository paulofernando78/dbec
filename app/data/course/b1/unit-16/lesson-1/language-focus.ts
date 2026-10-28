import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Describe completed and ongoing accomplishments.",
  items: [
    [
      ["I ", bold("managed to quit"), " my nine-to-five job two years ago."],
      "Use the simple past for an accomplishment at a finished time in the past.",
      "Keep a regular rhythm by stressing the important content words.",
      "managed to + base verb + finished past time",
      undefined,
      "Consegui deixar meu emprego de horário comercial há dois anos.",
    ],
    [
      ["I ", bold("didn't manage to get"), " good grades in school."],
      "Use didn't manage to for a past goal that was not achieved.",
      "Stress manage, good grades, and school.",
      "didn't manage to + base verb",
      undefined,
      "Não consegui tirar boas notas na escola.",
    ],
    [
      ["I ", bold("was able to finish"), " the marathon last year."],
      "Use was or were able to for a specific successful action in the past.",
      "Reduce to and keep even spacing between stressed words.",
      "was / were able to + base verb",
      undefined,
      "Consegui terminar a maratona no ano passado.",
    ],
    [
      ["I ", bold("have managed to make"), " a living with my music."],
      "Use the present perfect for an accomplishment connected to the present with no finished time stated.",
      "Have is often reduced; stress managed, living, and music.",
      "have / has managed to + base verb",
      undefined,
      "Consegui ganhar a vida com minha música.",
    ],
    [
      ["I ", bold("haven't been able to achieve"), " many of my goals yet."],
      "Use haven't or hasn't been able to for a result that has not happened up to now.",
      "Have and been are reduced; yet receives emphasis at the end.",
      "haven't / hasn't been able to + base verb + yet",
      undefined,
      "Ainda não consegui alcançar muitos dos meus objetivos.",
    ],
    [
      [bold("Completing my degree while working full time"), " is my proudest accomplishment."],
      "Use a gerund phrase as the subject to name a complex personal achievement.",
      "Stress the key actions and the word accomplishment.",
      "gerund phrase + singular verb + achievement",
      undefined,
      "Concluir minha graduação enquanto trabalhava em tempo integral é minha maior realização.",
    ],
    [
      ["Becoming more adaptable and self-sufficient helped me succeed."],
      "Use personal-characteristic antonyms to describe growth and the qualities behind an achievement.",
      "Use contrastive stress when comparing opposite characteristics.",
      "adaptable ≠ rigid · courageous ≠ timid · insensitive ≠ compassionate · resourceful ≠ unimaginative · self-sufficient ≠ dependent · upbeat ≠ cynical",
      undefined,
      "Tornar-me mais adaptável e autossuficiente me ajudou a ter sucesso.",
    ],
  ],
} satisfies LanguageFocusData;
