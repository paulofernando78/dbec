import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss career priorities and opinions about jobs using gerund phrases as subjects and objects.",
  items: [
    [
      [bold("Playing games all day"), " would be lots of fun."],
      "Use a gerund phrase as the subject when an activity is the topic of the sentence.",
      "Stress the main activity and the evaluation at the end of the sentence.",
      "verb-ing phrase + singular verb + complement",
      undefined,
      "Jogar o dia inteiro seria muito divertido.",
    ],
    [
      [bold("Being a flight attendant"), " sounds exciting. ", bold("Working as a veterinarian"), " could be rewarding."],
      "A gerund phrase can name a job activity or role before an evaluation with be, seem, sound, or a modal.",
      "Stress the job and the adjective that evaluates it.",
      "gerund phrase + is/seems/sounds/could be/would be/must be + adjective",
      undefined,
      "Ser comissário de bordo parece empolgante. Trabalhar como veterinário poderia ser gratificante.",
    ],
    [
      ["She'd be good at ", bold("testing games"), "."],
      "Use a gerund phrase after a preposition such as at to describe a skill or strength.",
      "Link at to the following -ing form and stress the activity.",
      "be good/bad at + gerund phrase",
      undefined,
      "Ela seria boa em testar jogos.",
    ],
    [
      ["He'd love ", bold("being a flight attendant"), ". She'd enjoy ", bold("working with animals"), "."],
      "Use a gerund phrase as the object after verbs such as love, like, enjoy, dislike, or hate.",
      "Stress the preference verb and the main activity.",
      "love/like/enjoy/dislike/hate + gerund phrase",
      undefined,
      "Ele adoraria ser comissário de bordo. Ela gostaria de trabalhar com animais.",
    ],
    [
      ["I value ", bold("security"), ", but my sister wants ", bold("adventure"), " and a high income."],
      "Use career-priority vocabulary to explain what you want from your working life.",
      "Stress the priority being contrasted.",
      "security · adventure · money · stability · variety · meaningful work · work-life balance",
      undefined,
      "Valorizo segurança, mas minha irmã quer aventura e uma renda alta.",
    ],
  ],
} satisfies LanguageFocusData;
