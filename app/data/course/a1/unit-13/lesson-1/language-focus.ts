import type { LanguageFocusData } from "../../../lesson-step-types";
import { PlacesAndThings } from "@/features/PlacesAndThings";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  component: PlacesAndThings,
  instruction: "Use prepositions of place to say where stores and other places are.",
  items: [
    [
      ["The bookstore is ", bold("on Pine Street"), "."],
      "Use on before the name of a street or avenue.",
      "Stress bookstore and Pine Street.",
      "place + be + on + street",
      undefined,
      "A livraria fica na Pine Street.",
      "Prepositions of place",
    ],
    [
      ["The coffee shop is ", bold("on the corner of Pine and First"), "."],
      "Use on the corner of before two street names.",
      "Stress corner, Pine, and First.",
      "on the corner of + street + and + street",
      undefined,
      "A cafeteria fica na esquina da Pine com a First.",
      "Prepositions of place",
    ],
    [
      ["The bank is ", bold("across from the supermarket"), "."],
      "Across from means on the opposite side.",
      "Stress bank and supermarket.",
      "place + be + across from + place",
      undefined,
      "O banco fica em frente ao supermercado.",
      "Prepositions of place",
    ],
    [
      ["The drugstore is ", bold("next to the bookstore"), "."],
      "Next to means directly beside another place.",
      "Stress drugstore and bookstore.",
      "place + be + next to + place",
      undefined,
      "A farmácia fica ao lado da livraria.",
      "Prepositions of place",
    ],
    [
      ["The post office is ", bold("between the bank and the coffee shop"), "."],
      "Use between for a place in the middle of two other places.",
      "Stress post office, bank, and coffee shop.",
      "between + place + and + place",
      undefined,
      "O correio fica entre o banco e a cafeteria.",
      "Prepositions of place",
    ],
  ],
} satisfies LanguageFocusData;
