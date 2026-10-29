import type { LanguageFocusData } from "../../../lesson-step-types";
import { ClothesAndColors } from "@/features/ClothesAndColors";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus", component: ClothesAndColors,
  instruction: "Listen, repeat, and notice how we ask and say who owns clothes.",
  items: [
    [["This is ", bold("my"), " jacket. — The jacket is ", bold("mine"), "."], "My comes before a noun. Mine replaces my + noun.", "Stress JACKET and MINE.", "my + noun · be + mine", undefined, "Esta é minha jaqueta. — A jaqueta é minha."],
    [["This is ", bold("your"), " scarf. — The scarf is ", bold("yours"), "."], "Your comes before a noun. Yours replaces your + noun.", "Stress SCARF and YOURS.", "your + noun · be + yours", undefined, "Este é seu cachecol. — O cachecol é seu."],
    [["These are ", bold("his"), " shoes. — This is ", bold("her"), " bag."], "His shows a male owner. Her shows a female owner.", "Stress HIS, SHOES, HER, and BAG.", "his + noun · her + noun", undefined, "Estes são os sapatos dele. — Esta é a bolsa dela."],
    [[bold("Whose jacket is this"), "? — It’s Leo’s."], "Ask about the owner. Add ’s to a person’s name in the answer.", "Stress WHOSE and LEO’S. Use falling intonation.", "Whose + noun + is this? · It’s + name’s", undefined, "De quem é esta jaqueta? — É do Leo."],
  ],
} satisfies LanguageFocusData;
