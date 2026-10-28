import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe changes in life using the present, simple past, present perfect, and comparative forms.",
  items: [
    [
      ["I'm not in school anymore. I ", bold("wear contacts now"), "."],
      "Use the present tense with now or not ... anymore to describe a current situation that is different from the past.",
      "Stress now or anymore and the changed information.",
      "present tense + now · don't/doesn't + verb + anymore · be not + complement + anymore",
      undefined,
      "Não estou mais estudando. Agora uso lentes de contato.",
    ],
    [
      ["I ", bold("majored"), " in business administration. I ", bold("got engaged"), "."],
      "Use the simple past for a completed change or life event at a finished past time.",
      "Stress the past verb and key event.",
      "subject + simple-past verb + complement",
      undefined,
      "Eu me formei em administração de empresas. Fiquei noivo.",
    ],
    [
      ["I've just ", bold("started"), " a new job. I've ", bold("bought"), " a new apartment."],
      "Use the present perfect for a recent change that is relevant now. Just emphasizes that it happened very recently.",
      "Stress just and the past participle.",
      "have/has + just + past participle · have/has + past participle",
      undefined,
      "Acabei de começar um novo emprego. Comprei um apartamento novo.",
    ],
    [
      ["My new neighborhood is ", bold("less noisy than"), " downtown. My hair is ", bold("longer"), " now."],
      "Use comparative forms to show how a person, place, or situation has changed.",
      "Stress the comparative adjective and the contrasted information.",
      "adjective-er · more + adjective · less + adjective + than",
      undefined,
      "Meu novo bairro é menos barulhento que o centro. Meu cabelo está mais comprido agora.",
    ],
    [
      ["I've ", bold("dyed my hair"), ", ", bold("opened a savings account"), ", and ", bold("started an online course"), "."],
      "Use change vocabulary to discuss appearance, money, and skills.",
      "Stress the changed action and important noun.",
      "Appearance: dye hair, grow a beard, pierce ears, wear contacts · Money: get a loan/card/raise, open an account · Skills: improve vocabulary, learn a sport/dance, start a course",
      undefined,
      "Pintei o cabelo, abri uma conta poupança e comecei um curso on-line.",
    ],
  ],
} satisfies LanguageFocusData;
