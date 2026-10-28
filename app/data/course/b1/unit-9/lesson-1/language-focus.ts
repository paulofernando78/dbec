import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss professional services using causative structures with get and have.",
  items: [
    [
      ["I clean my house every week. — I ", bold("get my house cleaned"), " every week."],
      "Use get or have + object + past participle when another person performs a service for you.",
      "Stress the object noun and the service action.",
      "get/have + object + past participle",
      undefined,
      "Eu limpo minha casa toda semana. — Mando limpar minha casa toda semana.",
    ],
    [
      ["He is painting his bedroom. — He ", bold("is having his bedroom painted"), "."],
      "Keep the tense on get or have to show when the arranged service happens.",
      "Stress bedroom and painted; reduce the auxiliary naturally.",
      "be + getting/having + object + past participle",
      undefined,
      "Ele está pintando o quarto. — Ele está mandando pintar o quarto.",
    ],
    [
      ["They fixed the sink. — They ", bold("got the sink fixed"), "."],
      "Use got or had + object + past participle for a completed service in the past.",
      "Stress the object and final participle.",
      "got/had + object + past participle",
      undefined,
      "Eles consertaram a pia. — Eles mandaram consertar a pia.",
    ],
    [
      ["Where can I ", bold("have my car washed"), "? — You can ", bold("have it washed"), " at the auto shop."],
      "Replace a repeated object with a pronoun. Object pronouns are normally unstressed.",
      "When the object becomes it or them, shift the main stress to the service action and location.",
      "have/get + it/them + past participle",
      undefined,
      "Onde posso mandar lavar meu carro? — Você pode mandar lavá-lo na oficina.",
    ],
    [
      ["I can get my computer ", bold("repaired"), ", my carpet ", bold("cleaned"), ", and my security system ", bold("checked"), "."],
      "Use service-directory vocabulary to identify the professional service you need.",
      "Stress the object and past participle in each service.",
      "auto repair · car wash · computer repair/data recovery · security-system repair · carpet cleaning · home repairs · laundry/dry cleaning · language tutoring",
      undefined,
      "Posso mandar consertar o computador, limpar o carpete e revisar o sistema de segurança.",
    ],
  ],
} satisfies LanguageFocusData;
