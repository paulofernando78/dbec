import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask about places nearby using there is, there are, one, any, some, and prepositions of place.",
  items: [
    [
      [bold("Is there"), " a laundromat near here? — Yes, ", bold("there is"), ". There's one across from the shopping center."],
      "Use Is there ...? to ask whether one place or thing exists nearby.",
      "Use rising intonation in the question. Stress the place and location in the answer.",
      "Is there + a/an + singular noun? · Yes, there is. · No, there isn't. · one = one place or thing",
      undefined,
      "Há uma lavanderia por aqui? — Sim. Há uma em frente ao shopping.",
    ],
    [
      [bold("Are there any"), " grocery stores around here? — Yes, ", bold("there are"), ". There are some on Pine Street."],
      "Use Are there any ...? for plural questions. Use some in affirmative statements and any in most questions and negatives.",
      "Stress any in the question and the location in the answer.",
      "Are there any + plural noun? · There are some ... · There aren't any ...",
      undefined,
      "Há supermercados por aqui? — Sim. Há alguns na Pine Street.",
    ],
    [
      ["The drugstore is ", bold("next to"), " the library and ", bold("across from"), " the coffee shop."],
      "Use prepositions of place to explain where a place is located.",
      "Stress the location phrase and the place names.",
      "near · next to · across from · between · on the corner of",
      undefined,
      "A farmácia fica ao lado da biblioteca e em frente à cafeteria.",
    ],
    [
      ["There's a ", bold("laundromat"), ", a ", bold("grocery store"), ", and a ", bold("coffee shop"), " near the library."],
      "Use common place words to ask for and locate useful services in a neighborhood.",
      "Stress the main word in each place name.",
      "laundromat · grocery store · coffee shop · drugstore · library · post office",
      undefined,
      "Há uma lavanderia, um supermercado e uma cafeteria perto da biblioteca.",
    ],
  ],
} satisfies LanguageFocusData;
