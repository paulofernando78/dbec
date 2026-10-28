import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use tag questions to invite agreement about community issues.",
  items: [
    [
      ["Everything is really expensive nowadays, ", bold("isn't it"), "?"],
      "Add a negative tag after an affirmative statement. Repeat the auxiliary and use the matching pronoun.",
      "Use falling intonation when you expect the listener to agree.",
      "affirmative statement + negative tag",
      undefined,
      "Tudo está muito caro hoje em dia, não está?",
    ],
    [
      ["There are lots of clubs around, ", bold("aren't there"), "?"],
      "With there is or there are, repeat there in the tag.",
      "Use rising intonation when you genuinely want information.",
      "there are + ..., aren't there?",
      undefined,
      "Há muitos clubes por aqui, não há?",
    ],
    [
      ["The city should provide child care, ", bold("shouldn't it"), "?"],
      "Repeat a modal from the statement in the opposite form in the tag.",
      "Use falling intonation when expressing a strong opinion and inviting agreement.",
      "modal statement + opposite modal tag",
      undefined,
      "A cidade deveria oferecer creches, não deveria?",
    ],
    [
      ["It isn't easy to find a nice apartment, ", bold("is it"), "?"],
      "Add an affirmative tag after a negative statement.",
      "Let the intonation show whether you expect agreement or are asking a real question.",
      "negative statement + affirmative tag",
      undefined,
      "Não é fácil encontrar um bom apartamento, é?",
    ],
    [
      ["There aren't any noise pollution laws, ", bold("are there"), "?"],
      "Use an affirmative tag after a negative there statement.",
      "Keep the tag clear and separate it with a brief pause.",
      "there aren't + ..., are there?",
      undefined,
      "Não há leis sobre poluição sonora, há?",
    ],
    [
      ["You can't sleep because of the noise, ", bold("can you"), "?"],
      "Use the affirmative form of can in the tag after can't.",
      "Stress noise in the statement; the tag is usually lighter.",
      "can't + ..., can + pronoun?",
      undefined,
      "Você não consegue dormir por causa do barulho, consegue?",
    ],
    [
      ["Bullying, homelessness, inadequate health care, and noise pollution are serious community issues."],
      "Use issue vocabulary to identify local problems and ask others for their opinions.",
      "Stress the issue you want to discuss before adding a tag question.",
      "bullying · homelessness · irregular trash collection · overcrowded classrooms · street crime · vandalism",
      undefined,
      "Bullying, falta de moradia, atendimento de saúde inadequado e poluição sonora são problemas comunitários sérios.",
    ],
  ],
} satisfies LanguageFocusData;
