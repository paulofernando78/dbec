import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Give clear reasons for opinions and outcomes.",
  items: [
    [
      ["The Firefly is famous ", bold("for"), " its fantastic music."],
      "Use for plus a noun phrase to give a reason or explain a reputation.",
      "For is often reduced in connected speech.",
      "for + noun phrase",
      undefined,
      "O Firefly é famoso por sua música fantástica.",
    ],
    [
      ["I like the Dizzy Lizard ", bold("because"), " it is always packed."],
      "Use because before a complete clause that directly answers why.",
      "Stress the important information after because.",
      "because + subject + verb",
      undefined,
      "Gosto do Dizzy Lizard porque está sempre lotado.",
    ],
    [
      [bold("Since"), " it is always so packed, there is a long wait outside the club."],
      "Use since when the reason is already known or presented as background information.",
      "Pause after a reason clause placed first.",
      "since + clause, result clause",
      undefined,
      "Como está sempre lotado, há uma longa espera do lado de fora do clube.",
    ],
    [
      ["It is popular ", bold("because of"), " the trendy people."],
      "Use because of before a noun or noun phrase, not a complete clause.",
      "Link because of smoothly before the noun phrase.",
      "because of + noun phrase",
      undefined,
      "É popular por causa das pessoas modernas.",
    ],
    [
      [bold("Due to"), " the crowds, the Dizzy Lizard is difficult to get into."],
      "Use due to plus a noun phrase; it is more formal than because of.",
      "Stress the cause and the result.",
      "due to + noun phrase",
      undefined,
      "Devido às multidões, é difícil entrar no Dizzy Lizard.",
    ],
    [
      ["The ", bold("reason that"), " people go there is just to be seen."],
      "Use the reason that or the reason why to introduce an explanation.",
      "That can be reduced or omitted in informal conversation.",
      "the reason (that/why) + clause + be + explanation",
      undefined,
      "A razão pela qual as pessoas vão lá é simplesmente para serem vistas.",
    ],
  ],
} satisfies LanguageFocusData;
