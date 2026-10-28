import type { LanguageFocusData } from "../../../lesson-step-types";
import { NYCAttractions } from "@/features/NYCAttractions";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  component: NYCAttractions,
  instruction: "Ask for and give simple directions to places in a city.",
  items: [
    [
      [bold("How do I get to"), " Times Square? / ", bold("How can I get to"), " Times Square?"],
      "Use either question to ask for directions to a place.",
      "Stress how, get, and Times Square.",
      "How do/can I get to + place?",
      undefined,
      "Como eu chego à Times Square?",
      "Asking for directions",
    ],
    [
      [bold("Walk up"), " Broadway. / ", bold("Go up"), " Broadway."],
      "Use walk up or go up to tell someone to continue along a street in one direction.",
      "Stress walk, go, up, and Broadway.",
      "Walk/Go up + street.",
      undefined,
      "Suba a Broadway a pé. / Siga pela Broadway.",
      "Giving directions",
    ],
    [
      [bold("Walk down"), " Park Avenue. / ", bold("Go down"), " Park Avenue."],
      "Use walk down or go down to tell someone to continue along a street in the other direction.",
      "Stress walk, go, down, and Park Avenue.",
      "Walk/Go down + street.",
      undefined,
      "Desça a Park Avenue a pé. / Siga pela Park Avenue.",
      "Giving directions",
    ],
    [
      [bold("Turn left"), " on 46th Street. — It's ", bold("on the right"), "."],
      "Use turn left to change direction. Use on the right to say where the place is.",
      "Stress left, 46th Street, and right.",
      "Turn left on + street. · It's on the right.",
      undefined,
      "Vire à esquerda na Rua 46. — Fica à direita.",
      "Left and right",
    ],
    [
      [bold("Turn right"), " on 59th Street. — It's ", bold("on the left"), "."],
      "Use turn right to change direction. Use on the left to say where the place is.",
      "Stress right, 59th Street, and left.",
      "Turn right on + street. · It's on the left.",
      undefined,
      "Vire à direita na Rua 59. — Fica à esquerda.",
      "Left and right",
    ],
  ],
} satisfies LanguageFocusData;
