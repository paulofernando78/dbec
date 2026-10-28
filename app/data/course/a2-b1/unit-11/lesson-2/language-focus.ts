import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use the simple present passive without by to focus on a country's features rather than the people responsible.",
  items: [
    [
      ["People ", bold("speak"), " Portuguese in Brazil. — Portuguese ", bold("is spoken"), " in Brazil."],
      "Use is plus the past participle for a singular subject in the simple present passive.",
      "Stress Portuguese, spoken, and Brazil.",
      "active: subject + present verb + object · passive: object + is/are + past participle",
      undefined,
      "As pessoas falam português no Brasil. — O português é falado no Brasil.",
    ],
    [
      ["Farmers ", bold("grow"), " coffee in Colombia. — Coffee ", bold("is grown"), " in Colombia."],
      "Omit by when the person or group performing the action is general or unimportant.",
      "Stress coffee, grown, and Colombia.",
      "singular subject + is + past participle",
      undefined,
      "Agricultores cultivam café na Colômbia. — Café é cultivado na Colômbia.",
    ],
    [
      ["Many homes ", bold("use"), " geothermal energy in Iceland. — Geothermal energy ", bold("is used"), " in many Icelandic homes."],
      "Move the important information to the subject position and use the present passive.",
      "Stress geothermal energy, used, and Icelandic homes.",
      "singular uncountable subject + is + past participle",
      undefined,
      "Muitas casas usam energia geotérmica na Islândia. — Energia geotérmica é usada em muitas casas islandesas.",
    ],
  ],
} satisfies LanguageFocusData;
