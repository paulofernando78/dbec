import type { LanguageFocusData } from "../../../lesson-step-types";
import { FurnitureAndAppliances } from "@/features/FurnitureAndAppliances";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus", component: FurnitureAndAppliances,
  instruction: "Listen, repeat, and notice how we say what is and is not in a home.",
  items: [
    [[bold("There’s"), " a desk in the bedroom."], "Use there is for one thing.", "Stress DESK and BEDroom.", "There is + a/an + singular noun + place", undefined, "Há uma escrivaninha no quarto."],
    [[bold("There isn’t"), " a rug in the kitchen."], "Use there isn’t for one thing that is not present.", "Stress ISN’T, RUG, and KITCHen.", "There isn’t + a/an + singular noun", undefined, "Não há tapete na cozinha."],
    [[bold("There are"), " two lamps in the living room."], "Use there are for more than one thing.", "Stress TWO, LAMPS, and LIVing room.", "There are + number + plural noun + place", undefined, "Há duas luminárias na sala."],
    [[bold("There aren’t any"), " curtains in the office."], "Use there aren’t any for plural things that are not present.", "Stress AREN’T, CURtains, and OFFice.", "There aren’t any + plural noun", undefined, "Não há cortinas no escritório."],
  ],
} satisfies LanguageFocusData;
