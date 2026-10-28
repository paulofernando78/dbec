import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use the passive to explain how films and other products are made.",
  items: [
    [
      ["A screenplay ", bold("is chosen"), "."],
      "Use is or are plus the past participle when the process is more important than the person performing it.",
      "Stress the past participle that names the process step.",
      "is / are + past participle",
      undefined,
      "Um roteiro é escolhido.",
    ],
    [
      ["Many drawings ", bold("are presented"), "."],
      "Match the form of be to the singular or plural subject.",
      "Are is reduced in connected speech; presented carries the main stress.",
      "plural subject + are + past participle",
      undefined,
      "Muitos desenhos são apresentados.",
    ],
    [
      ["The characters ", bold("have to be drawn"), " just right."],
      "Use a modal expression plus be and a past participle to describe a necessary process step.",
      "Reduce to and be; stress drawn and just right.",
      "have to + be + past participle",
      undefined,
      "Os personagens precisam ser desenhados da maneira certa.",
    ],
    [
      ["The drawings ", bold("might be changed"), " ten times."],
      "Use might be plus the past participle when a process step is possible but not certain.",
      "Be is normally unstressed after the modal.",
      "modal + be + past participle",
      undefined,
      "Os desenhos podem ser alterados dez vezes.",
    ],
    [
      ["The scenes are filmed digitally, edited, and then released in theaters."],
      "Use a sequence of passive forms to describe the stages of a production process.",
      "Give each process verb clear stress and use a slight rise before the final step.",
      "first · next · after that · then · finally",
      undefined,
      "As cenas são filmadas digitalmente, editadas e depois lançadas nos cinemas.",
    ],
    [
      ["Motion capture is used to record an actor's movements for a digital character."],
      "Use technical cinema vocabulary when explaining modern production methods.",
      "Stress technical terms such as motion capture and digital.",
      "screenplay · animation · motion capture · digital film · simultaneous release · frame rate",
      undefined,
      "A captura de movimento é usada para registrar os movimentos de um ator para um personagem digital.",
    ],
  ],
} satisfies LanguageFocusData;
