import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe food preferences and agree or disagree using so, too, neither, and either.",
  items: [
    [
      ["I'm crazy about Italian food. — ", bold("So am I"), ". / ", bold("I'm crazy about it, too"), "."],
      "Use So + auxiliary + subject or a positive statement + too to agree with an affirmative statement.",
      "Stress the final word in the response: I in So am I and too in I'm ... too.",
      "So + be/auxiliary/modal + subject · subject + positive verb + too",
      undefined,
      "Sou louco por comida italiana. — Eu também.",
    ],
    [
      ["I can eat really spicy food. — ", bold("So can I"), ". / I can, ", bold("too"), ". I like Japanese food. — ", bold("So do I"), "."],
      "Match the auxiliary in the response to the verb in the original statement.",
      "Stress the final subject or too in an agreement response.",
      "be → So am/is/are ... · can → So can ... · simple present → So do/does ...",
      undefined,
      "Consigo comer comida bem apimentada. — Eu também. Gosto de comida japonesa. — Eu também.",
    ],
    [
      ["I'm not in the mood for Indian food. — ", bold("Neither am I"), ". / ", bold("I'm not either"), "."],
      "Use Neither + auxiliary + subject or a negative statement + either to agree with a negative statement.",
      "Stress the final word: I in Neither am I and either in I'm not either.",
      "Neither + be/auxiliary/modal + subject · subject + negative verb + either",
      undefined,
      "Não estou com vontade de comer comida indiana. — Eu também não.",
    ],
    [
      ["I don't like salty food. — Really? ", bold("I do"), ". I can eat spicy food. — Really? ", bold("I can't"), "."],
      "Disagree by giving the opposite short response with the correct auxiliary or modal.",
      "Stress the auxiliary or modal that expresses the contrast.",
      "positive statement → negative response · negative statement → positive response",
      undefined,
      "Não gosto de comida salgada. — Sério? Eu gosto. Consigo comer comida apimentada. — Sério? Eu não consigo.",
    ],
    [
      ["The rice is ", bold("bland"), ", the fries are ", bold("greasy"), ", and the chocolate cake is ", bold("rich"), "."],
      "Use taste and quality adjectives to explain food preferences.",
      "Stress the descriptive adjective.",
      "bland · delicious · greasy · healthy · rich · salty · spicy",
      undefined,
      "O arroz está sem sabor, as batatas estão gordurosas e o bolo de chocolate é bem pesado.",
    ],
  ],
} satisfies LanguageFocusData;
