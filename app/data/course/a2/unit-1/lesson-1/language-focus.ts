import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Introduce yourself and others, use possessive adjectives, and ask Wh-questions with be.",
  items: [
    [
      [bold("I'm"), " Maya. ", bold("I'm"), " from Brazil. — ", bold("He's"), " my classmate, Leo."],
      "Use a form of be to give information about yourself or another person. Contractions are common in conversation.",
      "Stress the name and the important new information. The contracted form is usually unstressed.",
      "I am → I'm · you are → you're · he is → he's · she is → she's · it is → it's · we are → we're · they are → they're",
      undefined,
      "Eu sou a Maya. Sou do Brasil. — Ele é meu colega de classe, Leo.",
    ],
    [
      ["This is ", bold("my"), " class. Ana is ", bold("our"), " teacher, and Leo is ", bold("her"), " student."],
      "Use possessive adjectives before a noun to show who something or someone is connected to.",
      "Possessive adjectives are normally unstressed; stress the noun that follows.",
      "my · your · his · her · its · our · their + noun",
      undefined,
      "Esta é a minha turma. Ana é nossa professora, e Leo é aluno dela.",
    ],
    [
      [bold("What's"), " your name? — ", bold("My"), " name's Maya."],
      "Use What's your name? to ask for a person's name in a first meeting.",
      "In natural speech, What's your often sounds like /wʌtsjər/.",
      "What is your name? → What's your name? · My name is ... → My name's ...",
      undefined,
      "Qual é o seu nome? — Meu nome é Maya.",
    ],
    [
      [bold("Where are"), " you from? — We're from Brazil. ", bold("Who's"), " your friend? — He's my classmate."],
      "Use Wh-questions with be to ask for specific information about people and places.",
      "Stress the Wh-word and the key information in the answer.",
      "Wh-word + am/is/are + subject? · Where are you from? · Who is your friend? · What is your city like?",
      undefined,
      "De onde vocês são? — Somos do Brasil. Quem é seu amigo? — Ele é meu colega de classe.",
    ],
    [
      [bold("Hi!"), " I'm Maya. — Nice to meet you. ", bold("See you tomorrow."), " — Bye!"],
      "Use greetings to begin a conversation and leave-taking expressions to end it naturally.",
      "Use friendly rising intonation in a greeting and falling intonation when saying good-bye.",
      "Hello: Hi · Hey · Good morning · How's it going? · Good-bye: Bye · See you later · Have a good day",
      undefined,
      "Oi! Eu sou a Maya. — Prazer em conhecer você. Até amanhã. — Tchau!",
    ],
  ],
} satisfies LanguageFocusData;
