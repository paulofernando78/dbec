import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe ideal friends and partners using personality traits and relative pronouns who and that.",
  items: [
    [
      ["I like people ", bold("who/that aren't too serious"), "."],
      "Use who or that as the subject of a relative clause describing a person. The pronoun cannot be omitted when it is the subject.",
      "Link the final consonant in people to who or that and stress the key personality description.",
      "person/people + who/that + verb + complement",
      undefined,
      "Gosto de pessoas que não são sérias demais.",
    ],
    [
      ["I like people ", bold("who/that have a good sense of humor"), "."],
      "A subject relative clause adds identifying information about the kind of person you mean.",
      "Use smooth linking between who/that and the following verb.",
      "people + who/that + have/are/do ...",
      undefined,
      "Gosto de pessoas que têm um bom senso de humor.",
    ],
    [
      ["I want someone ", bold("who/that I can have fun with"), "."],
      "Use who or that as the object of a relative clause. In informal English, the object pronoun may be omitted.",
      "Stress someone and the key activity; keep the relative pronoun light.",
      "someone + who/that + subject + verb · someone + subject + verb",
      undefined,
      "Quero alguém com quem eu possa me divertir.",
    ],
    [
      ["I'd like someone ", bold("(who/that) I can talk to easily"), "."],
      "When the relative pronoun is the object, who or that is optional, and a preposition often remains at the end in conversation.",
      "Link talk to easily naturally and stress easily.",
      "someone + (who/that) + subject + verb + preposition",
      undefined,
      "Eu gostaria de alguém com quem eu pudesse conversar facilmente.",
    ],
    [
      ["An ideal partner is ", bold("supportive"), " and ", bold("outgoing"), ", but not ", bold("egotistical"), " or ", bold("unreliable"), "."],
      "Use personality adjectives to explain which qualities matter in a relationship.",
      "Stress the contrasting personality traits.",
      "easygoing · egotistical · inflexible · modest · outgoing · stingy · supportive · temperamental · unreliable",
      undefined,
      "Um parceiro ideal é solidário e extrovertido, mas não egocêntrico nem pouco confiável.",
    ],
  ],
} satisfies LanguageFocusData;
