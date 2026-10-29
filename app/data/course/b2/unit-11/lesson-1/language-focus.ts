import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss ethical choices using present unreal conditionals with unless, only if, and even if, and evaluate behavior with prefixed adjectives.",
  items: [
    [
      ["I ", bold("wouldn't keep it unless"), " there were no way to find the owner."],
      "Unless introduces an exception that would change the speaker's hypothetical decision. It generally means if not.",
      "Stress the decision and the exceptional condition.",
      "would + base verb + unless + simple past",
      undefined,
      "Eu não ficaria com ela, a menos que não houvesse como encontrar o dono.",
      "Unreal conditions with unless",
    ],
    [
      ["I would accept a reward ", bold("only if"), " the owner genuinely offered one."],
      "Only if emphasizes that a condition is necessary for the hypothetical result.",
      "Stress only and the necessary condition.",
      "would + base verb + only if + simple past",
      undefined,
      "Eu aceitaria uma recompensa somente se o dono realmente oferecesse uma.",
      "Necessary unreal conditions",
    ],
    [
      [bold("Even if"), " I needed the money, I'd return it."],
      "Even if introduces a condition that would not change the hypothetical result.",
      "Stress even and the unchanged decision.",
      "even if + simple past, would + base verb",
      undefined,
      "Mesmo que eu precisasse do dinheiro, eu o devolveria.",
      "Unexpected conditions",
    ],
    [
      ["If I ", bold("were"), " in that situation, I ", bold("would report"), " it."],
      "Use the simple past in the condition and would plus a base verb in the result for an unreal or unlikely present situation. Were is preferred for all persons in formal usage.",
      "Stress the hypothetical situation and result; reduce would to 'd where natural.",
      "if + subject + simple past, subject + would + base verb",
      undefined,
      "Se eu estivesse nessa situação, eu denunciaria.",
      "Present unreal conditional",
    ],
    [
      ["Keeping the wallet would be ", bold("unethical, dishonest, illegal"), ", and ", bold("irresponsible"), "."],
      "Add negative prefixes to adjectives to form opposites, choosing the conventional prefix for each word.",
      "Keep the prefix attached to the adjective and preserve the word's main stress.",
      "dis-: disagreeable, dishonest, disapproving · il-: illegal, illogical · ir-: irrational, irresponsible · un-: unacceptable, unfair, unethical, unscrupulous, untrustworthy",
      undefined,
      "Ficar com a carteira seria antiético, desonesto, ilegal e irresponsável.",
      "Negative prefixes",
    ],
    [
      ["A responsible choice should be ", bold("ethical, fair, rational, scrupulous"), ", and ", bold("trustworthy"), "."],
      "Use precise ethics and attitude adjectives to evaluate decisions and conduct.",
      "Use list intonation and stress the evaluative adjectives.",
      "acceptable · agreeable · approving · ethical · fair · honest · legal · logical · rational · responsible · scrupulous · trustworthy",
      undefined,
      "Uma escolha responsável deve ser ética, justa, racional, cuidadosa e confiável.",
      "Ethics and attitudes",
    ],
  ],
} satisfies LanguageFocusData;
