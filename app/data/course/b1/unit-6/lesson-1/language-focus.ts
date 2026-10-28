import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe faults and damage using past participles as adjectives and nouns.",
  items: [
    [
      ["The suitcase lining is ", bold("torn"), ". The car is ", bold("damaged"), "."],
      "Use a past participle after be as an adjective to describe the condition of an object.",
      "Stress the participle that names the damage.",
      "subject + be + past-participle adjective",
      undefined,
      "O forro da mala está rasgado. O carro está danificado.",
    ],
    [
      ["The coffee mug is ", bold("chipped"), ", my pants are ", bold("stained"), ", and the camera lens is ", bold("scratched"), "."],
      "Use specific participle adjectives to describe visible damage or marks.",
      "Stress the damage word and link be naturally to the following adjective.",
      "chipped · stained · scratched · torn · damaged",
      undefined,
      "A caneca está lascada, minha calça está manchada e a lente está arranhada.",
    ],
    [
      ["There's ", bold("a tear"), " in the lining and ", bold("a dent"), " in the bumper."],
      "Use a noun after there is/are or have to name the physical problem directly.",
      "Stress the problem noun and its location.",
      "a tear/hole/chip/stain/leak · a dent · a few scratches",
      undefined,
      "Há um rasgo no forro e um amassado no para-choque.",
    ],
    [
      ["The washing machine ", bold("is leaking"), ". It has ", bold("a leak"), "."],
      "Use the present continuous for an active leak and the noun a leak to identify the problem.",
      "Stress leaking or leak according to the structure used.",
      "be + leaking · have + a leak",
      undefined,
      "A máquina de lavar está vazando. Ela tem um vazamento.",
    ],
    [
      ["Is the ", bold("BEDROOM"), " window cracked? — No, the ", bold("KITCHEN"), " window is cracked."],
      "Use contrastive stress to correct which object, part, or condition is being discussed.",
      "Place strong stress on the word that corrects the misunderstanding.",
      "contrast location · contrast object · contrast condition",
      undefined,
      "A janela do QUARTO está rachada? — Não, a janela da COZINHA está rachada.",
    ],
    [
      ["The provider bills me incorrectly, the connection is unreliable, and the repair service hasn't fixed the TV."],
      "Use complaint vocabulary to explain faults in banking, shopping, services, vehicles, or repairs.",
      "Stress the service and the specific complaint.",
      "incorrect bill/size · unreliable connection · poor service · excessive fuel use · repeated repair failure · damaged property",
      undefined,
      "A operadora cobra errado, a conexão não é confiável e a assistência não consertou a TV.",
    ],
  ],
} satisfies LanguageFocusData;
