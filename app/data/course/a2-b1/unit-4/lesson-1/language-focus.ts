import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use the present perfect for experiences and the simple past for details at a definite time.",
  items: [
    [
      [bold("Have"), " you ever ", bold("visited"), " a volcano? — Yes, I ", bold("have"), ". I ", bold("climbed"), " one in Costa Rica three years ago."],
      "Use the present perfect to ask about experience up to now. Use the simple past to say when or where it happened.",
      "Stress ever and the main verbs visited and climbed.",
      "Have + subject + ever + past participle? · subject + simple past + definite past time",
      undefined,
      "Você já visitou um vulcão? — Sim. Eu subi em um na Costa Rica há três anos.",
      "Experience and past details",
    ],
    [
      [bold("Did"), " you ", bold("enjoy"), " the trip? — Yes, I ", bold("did"), ". The views ", bold("were"), " incredible."],
      "Use the simple past to ask for details about a completed experience.",
      "Stress enjoy, did, and incredible.",
      "Did + subject + base verb? · Yes, subject + did. · subject + past form",
      undefined,
      "Você gostou da viagem? — Sim. As vistas eram incríveis.",
      "Simple past follow-up",
    ],
    [
      [bold("Have"), " you ever ", bold("taken"), " a pottery class? — No, I ", bold("haven't"), ". But I ", bold("joined"), " a photography workshop last summer."],
      "Use the present perfect for an experience at an unspecified time and the simple past for a completed event with a definite time.",
      "Stress taken, haven't, joined, and last summer.",
      "Have + subject + ever + past participle? · subject + haven't · simple past + definite time",
      undefined,
      "Você já fez um curso de cerâmica? — Não. Mas participei de uma oficina de fotografia no verão passado.",
      "Experience and definite time",
    ],
    [
      [bold("Did"), " you ", bold("go"), " alone? — No, I ", bold("went"), " with my cousin."],
      "Use did plus the base verb in a past question and the past form in the answer.",
      "Stress go, went, and cousin.",
      "Did + subject + base verb? · subject + past verb",
      undefined,
      "Você foi sozinho? — Não. Fui com meu primo.",
      "Simple past details",
    ],
  ],
} satisfies LanguageFocusData;
