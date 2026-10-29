import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe family relationships and explain advantages and disadvantages using compound family terms and noun clauses after be.",
  items: [
    [
      ["I grew up in a ", bold("nuclear family"), "."],
      "A nuclear family usually consists of parents and their children living together.",
      "Stress the first word in the compound: NUCLEAR family.",
      "nuclear family · extended family · two-income family · single-parent family",
      undefined,
      "Cresci em uma família nuclear.",
      "Family types",
    ],
    [
      ["My ", bold("great-aunt"), " lived with us, and my ", bold("sister-in-law"), " visited often."],
      "Use prefixes and suffixes to name relationships across generations and through marriage.",
      "Give the compound one main stress and pronounce each joined element clearly.",
      "great-aunt · great-grandmother · granddaughter · sister-in-law · mother-in-law",
      undefined,
      "Minha tia-avó morava conosco, e minha cunhada nos visitava com frequência.",
      "Compound family terms",
    ],
    [
      [bold("The only trouble with being in a two-income family is (that) we don't spend much time together"), "."],
      "A noun clause after be explains what the trouble is. That is optional in this structure.",
      "Pause lightly before is and stress don't spend much time together.",
      "The only trouble with + verb-ing + is (that) + subject + predicate",
      undefined,
      "O único problema de estar em uma família com duas rendas é que não passamos muito tempo juntos.",
      "Noun clauses after be",
    ],
    [
      [bold("The big advantage of having Grandma at home is (that) she can babysit more often"), "."],
      "Use a noun clause after be to identify or explain an advantage. That may be included or omitted.",
      "Stress big advantage and babysit more often; keep that unstressed when it is included.",
      "The advantage of + verb-ing + is (that) + subject + predicate",
      undefined,
      "A grande vantagem de ter a vovó em casa é que ela pode cuidar das crianças com mais frequência.",
      "Noun clauses after be",
    ],
    [
      [bold("What I value most is that we support one another"), "."],
      "A wh-clause can function as the subject, followed by be and a noun clause that identifies the key point.",
      "Stress value most and support; use a small pause before is.",
      "What + subject + verb + is (that) + subject + predicate",
      undefined,
      "O que mais valorizo é que apoiamos uns aos outros.",
      "Noun clauses as subjects",
    ],
    [
      ["Both families value independence. ", bold("One difference is that Amira grew up with more relatives"), "."],
      "Use one similarity is that and one difference is that to compare family arrangements clearly.",
      "Stress similarity or difference and the contrasting information that follows.",
      "One similarity/difference is (that) + subject + predicate",
      undefined,
      "As duas famílias valorizam a independência. Uma diferença é que Amira cresceu com mais parentes.",
      "Comparing families",
    ],
  ],
} satisfies LanguageFocusData;
