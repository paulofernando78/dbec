import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss trends and historic events using accurate references to past time.",
  items: [
    [
      ["When was the first video game console released? — ", bold("During the 1970s"), ". / ", bold("In the 1970s"), ". / ", bold("Over 40 years ago"), "."],
      "Use during or in with a past period and ago for an amount of time before now.",
      "Stress the decade or amount of time.",
      "during/in + past period · amount of time + ago",
      undefined,
      "Quando foi lançado o primeiro console? — Durante os anos 1970. / Há mais de 40 anos.",
    ],
    [
      ["How long were the Beatles together? — ", bold("From 1960 to 1970"), ". / ", bold("For 10 years"), "."],
      "Use from ... to ... for beginning and ending points and for for the complete duration.",
      "Stress both dates or the duration.",
      "from + starting point + to + ending point · for + duration",
      undefined,
      "Por quanto tempo os Beatles ficaram juntos? — De 1960 a 1970. / Por dez anos.",
    ],
    [
      ["How long has Washington, D.C., been the capital? — ", bold("Since 1800"), ". / ", bold("For about 220 years"), "."],
      "Use since for a starting point and for for duration when a past situation continues into the present.",
      "Stress the starting point or duration.",
      "present perfect + since + point · present perfect + for + duration",
      undefined,
      "Há quanto tempo Washington é a capital? — Desde 1800. / Há cerca de 220 anos.",
    ],
    [
      ["The console became an overnight ", bold("sensation"), ", while another product remained a short-lived ", bold("fad"), "."],
      "Use trend vocabulary to describe how products and ideas gain or lose popularity over time.",
      "Stress the year and the word describing popularity.",
      "trend · fad · craze · gain popularity · widely released · overnight sensation · stress reliever",
      undefined,
      "O console virou sensação da noite para o dia, enquanto outro produto foi uma moda passageira.",
    ],
    [
      ["The discovery was a major ", bold("achievement"), ", while the epidemic became a historic ", bold("catastrophe"), "."],
      "Use historic-event nouns to classify important positive and negative events.",
      "In longer words, maintain clear primary and secondary stress: iDENtify, disadVANtage, communiCAtion.",
      "achievement · assassination · discovery · election · epidemic · natural disaster · revolution · terrorist act",
      undefined,
      "A descoberta foi uma grande conquista, enquanto a epidemia se tornou uma catástrofe histórica.",
    ],
  ],
} satisfies LanguageFocusData;
