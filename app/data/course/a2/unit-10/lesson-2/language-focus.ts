import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss life experiences using the present perfect, simple past, for, and since.",
  items: [
    [
      [bold("Have you ever eaten"), " Cuban food? — Yes, I have. I've had it many times. / No, I haven't. I've never tried it."],
      "Use the present perfect with ever or never to discuss an experience at an indefinite time in life.",
      "Stress ever or never and the experience verb.",
      "Have/Has + subject + ever + past participle? · subject + have/has never + past participle",
      undefined,
      "Você já comeu comida cubana? — Sim, muitas vezes. / Não, nunca experimentei.",
    ],
    [
      ["I ", bold("ate"), " Cuban food when I lived in Miami. I ", bold("saw"), " an alligator last week."],
      "Use the simple past for a completed event at a specific past time.",
      "Stress the past verb and the specific time expression.",
      "simple past + yesterday/last week/in 2024/when ...",
      undefined,
      "Comi comida cubana quando morei em Miami. Vi um jacaré na semana passada.",
    ],
    [
      [bold("How long have"), " you lived in Orlando? — I've lived here ", bold("for three years"), "."],
      "Use for with a length of time to describe a situation that began in the past and continues now.",
      "Stress the length of time after for.",
      "present perfect + for + two weeks/a few months/several years/a long time",
      undefined,
      "Há quanto tempo você mora em Orlando? — Moro aqui há três anos.",
    ],
    [
      ["I've worked at the hotel ", bold("since last year"), "."],
      "Use since with the starting point of a situation that continues now.",
      "Stress the starting point after since.",
      "present perfect + since + 6:45/last weekend/2009/elementary school",
      undefined,
      "Trabalho no hotel desde o ano passado.",
    ],
    [
      ["Have you ever ", bold("ridden a motorcycle"), " or ", bold("worn a costume"), "? — I've driven a sports car, but I've never lost my phone."],
      "Use common verb-noun combinations to talk about varied life experiences.",
      "Stress the main noun in each experience.",
      "eat sushi/octopus · drink chocolate soda/iced coffee · drive a truck/a sports car · lose your books/phone · ride a bike/motorcycle · wear a costume/uniform",
      undefined,
      "Você já andou de moto ou usou uma fantasia? — Já dirigi um carro esportivo, mas nunca perdi meu celular.",
    ],
  ],
} satisfies LanguageFocusData;
