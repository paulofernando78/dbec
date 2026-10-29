import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask tactful questions, describe emotional reactions, and respond with empathy while resolving complaints.",
  items: [
    [
      ["Why did my bill increase? → I'd like to know ", bold("why my bill increased"), "."],
      "A simple indirect question begins with an introductory expression and uses statement word order.",
      "Keep the introduction light and use falling intonation in the indirect clause.",
      "introductory phrase + question word + subject + verb",
      undefined,
      "Por que minha conta aumentou? → Gostaria de saber por que minha conta aumentou.",
      "Simple indirect questions",
    ],
    [
      ["Will the charge continue? → My main concern is ", bold("whether the charge will continue"), "."],
      "Use whether or if for an indirect yes/no question and retain statement word order.",
      "Stress the concern and the key outcome; do not use direct-question intonation.",
      "clause or noun phrase + whether/if + subject + verb",
      undefined,
      "A cobrança continuará? → Minha principal preocupação é se a cobrança continuará.",
      "Complex indirect questions",
    ],
    [
      [bold("I wonder how anyone could activate it"), " without permission."],
      "Complex indirect questions can begin or end with a clause expressing concern, uncertainty, or difficulty.",
      "Use falling intonation and stress the surprising or problematic detail.",
      "I wonder / My concern is / What I don't understand is + indirect question",
      undefined,
      "Eu me pergunto como alguém poderia ativar isso sem permissão.",
      "Framing concerns",
    ],
    [
      ["The unexplained charge left me ", bold("baffled and frustrated"), "."],
      "Use -ed adjectives to classify emotional reactions as confusion, anger, or sadness.",
      "Stress the emotion adjective and use appropriate expressive intonation.",
      "confused: baffled, confused, mystified, stunned · angry: annoyed, enraged, frustrated, infuriated, insulted, irritated · sad: demoralized, depressed, discouraged, humiliated, saddened",
      undefined,
      "A cobrança sem explicação me deixou perplexo e frustrado.",
      "Feelings",
    ],
    [
      [bold("I know exactly what you mean"), ". / ", bold("Yeah, I hate that too"), ". / ", bold("You can say that again"), "."],
      "Use these expressions to agree with a complaint and show that you share or understand the feeling.",
      "Use warm, emphatic stress on exactly, hate, or again.",
      "agreement/empathy expression + optional supporting comment",
      undefined,
      "Sei exatamente o que você quer dizer. / Sim, também odeio isso. / Nem me fale.",
      "Agreeing and showing sympathy",
    ],
    [
      [bold("I understand why you're frustrated"), ". I'll refund the charge and prevent it from happening again."],
      "A good complaint response acknowledges the emotion, states the remedy, and explains prevention.",
      "Use a calm tone and stress the concrete actions being offered.",
      "acknowledge + apologize if appropriate + remedy + prevention",
      undefined,
      "Entendo por que você está frustrado. Vou devolver o valor e impedir que isso aconteça novamente.",
      "Resolving complaints",
    ],
  ],
} satisfies LanguageFocusData;
