import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe creative people and qualifications using creative-quality vocabulary and reduced relative clauses.",
  items: [
    [
      ["Someone ", bold("who is able to think quickly"), " could be a good surgeon."],
      "A full relative clause uses who or that plus be to describe a person's quality or ability.",
      "Keep the relative pronoun light and stress the key ability.",
      "person + who/that + be + adjective or past participle",
      undefined,
      "Alguém que consegue pensar rapidamente poderia ser um bom cirurgião.",
      "Full relative clauses",
    ],
    [
      ["Someone ", bold("able to think quickly"), " could be a good surgeon."],
      "Shorten a relative clause by dropping the relative pronoun and the verb be.",
      "Link the reduced description directly to the noun and stress the qualification.",
      "who/that + be + adjective/past participle → adjective/past participle phrase",
      undefined,
      "Alguém capaz de pensar rapidamente poderia ser um bom cirurgião.",
      "Reduced relative clauses",
    ],
    [
      ["A person ", bold("who is looking for adventure"), " might enjoy investigative work."],
      "When the relative clause contains be plus a present participle, omit who or that and be to reduce it.",
      "Stress the -ing activity and the main result.",
      "who/that + be + verb-ing → verb-ing phrase",
      undefined,
      "Uma pessoa que procura aventura pode gostar de trabalho investigativo.",
      "Reduced active clauses",
    ],
    [
      ["A person ", bold("looking for adventure"), " might enjoy investigative work."],
      "The reduced -ing phrase directly modifies the noun and expresses an active meaning.",
      "Do not pause between the noun and its reduced modifier.",
      "noun + verb-ing phrase",
      undefined,
      "Uma pessoa em busca de aventura pode gostar de trabalho investigativo.",
      "Reduced active clauses",
    ],
    [
      ["A person ", bold("who has a good voice"), " could be a presenter. → A person ", bold("with a good voice"), " could be a presenter."],
      "In many relative clauses, who or that plus have can be replaced by with.",
      "Stress the possessed quality after with.",
      "who/that + have + noun → with + noun",
      undefined,
      "Uma pessoa com uma boa voz poderia ser apresentadora.",
      "Relative clauses with have",
    ],
    [
      ["A creative person may show ", bold("curiosity, decisiveness, determination, discipline, innovation, knowledge, motivation, originality, passion, patience, perception"), ", and ", bold("resourcefulness"), "."],
      "Use noun and adjective forms accurately when describing qualities or the people who possess them.",
      "Notice stress shifts between related nouns and adjectives.",
      "curiosity/curious · decisiveness/decisive · determination/determined · discipline/disciplined · innovation/innovative · knowledge/knowledgeable · motivation/motivated · originality/original · passion/passionate · patience/patient · perception/perceptive · resourcefulness/resourceful",
      undefined,
      "Uma pessoa criativa pode demonstrar curiosidade, determinação, disciplina, inovação, conhecimento, motivação, originalidade, paixão, paciência, percepção e inventividade.",
      "Creative qualities",
    ],
  ],
} satisfies LanguageFocusData;
