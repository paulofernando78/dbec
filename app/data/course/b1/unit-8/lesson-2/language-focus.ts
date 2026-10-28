import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Explain learning methods and skill development using by + gerund.",
  items: [
    [
      ["You could improve your accent ", bold("by watching movies"), "."],
      "Use by + gerund to explain the method used to achieve a result.",
      "Keep by unstressed and emphasize the learning activity.",
      "result/action + by + verb-ing",
      undefined,
      "Você poderia melhorar seu sotaque assistindo a filmes.",
    ],
    [
      ["I learn new words best ", bold("by writing them down and reviewing them"), " many times."],
      "Coordinate gerunds after by to describe multiple parts of a learning method.",
      "Use parallel stress on each gerund phrase.",
      "by + verb-ing + and + verb-ing",
      undefined,
      "Aprendo palavras novas melhor anotando-as e revisando-as várias vezes.",
    ],
    [
      ["The best way to learn slang is not ", bold("by watching the news"), " but ", bold("by watching TV series"), "."],
      "Use not by ... but by ... to contrast an ineffective method with a preferred one.",
      "Use contrastive stress on the two methods.",
      "not by + gerund, but by + gerund",
      undefined,
      "A melhor maneira de aprender gírias não é assistindo ao noticiário, mas a séries.",
    ],
    [
      ["You can become more organized ", bold("by using a daily planner"), " and more confident ", bold("by taking a public-speaking class"), "."],
      "Use by + gerund to connect an activity with the quality or skill it develops.",
      "Stress the target quality and development activity.",
      "develop quality/skill + by + activity",
      undefined,
      "Você pode se tornar mais organizado usando uma agenda e mais confiante fazendo um curso de oratória.",
    ],
    [
      ["People learn teamwork ", bold("by playing a team sport"), " and responsibility ", bold("by volunteering"), "."],
      "Choose practical activities that provide repeated opportunities to develop a personal quality.",
      "Stress the quality and corresponding activity.",
      "use a planner · volunteer · take a class · perform · visit museums · learn a martial art · play a team sport · make a budget",
      undefined,
      "As pessoas aprendem trabalho em equipe praticando esportes coletivos e responsabilidade fazendo voluntariado.",
    ],
  ],
} satisfies LanguageFocusData;
