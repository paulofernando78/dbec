import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask and answer Wh-questions about jobs, workplaces, and studies using the simple present.",
  items: [
    [
      [bold("What do"), " you ", bold("do"), "? — I'm a student. I have a part-time job, too."],
      "Use What do you do? to ask about someone's occupation or main activity.",
      "Stress what and the occupation in the answer. Do is normally unstressed.",
      "What + do + I/you/we/they + do? · I/You/We/They + base verb.",
      undefined,
      "O que você faz? — Sou estudante. Também tenho um emprego de meio período.",
    ],
    [
      [bold("Where do"), " you ", bold("work"), "? — I work at a restaurant."],
      "Use Where do ...? to ask about a workplace or place of study with I, you, we, and they.",
      "Stress where, work, and the workplace in the answer.",
      "Where + do + I/you/we/they + base verb? · Subject + base verb + place.",
      undefined,
      "Onde você trabalha? — Trabalho em um restaurante.",
    ],
    [
      [bold("What does"), " Amy ", bold("do"), "? — She's a dancer. Where does she work? — She works at a dance company."],
      "Use does in Wh-questions about he, she, or one person. Use the base verb after does.",
      "Does is usually unstressed. Stress the person's name and the key information.",
      "Wh-word + does + he/she/name + base verb? · He/She + verb-s/-es.",
      undefined,
      "O que Amy faz? — Ela é dançarina. Onde ela trabalha? — Ela trabalha em uma companhia de dança.",
    ],
    [
      ["I ", bold("work"), " at a gym. My brother ", bold("works"), " in an office. He ", bold("studies"), " at night."],
      "Add -s or -es to most simple-present verbs with he, she, or it. Verbs ending in consonant + y change y to ies.",
      "The final -s may sound like /s/ or /z/; -es is often pronounced /ɪz/.",
      "work → works · take → takes · teach → teaches · study → studies · do → does · go → goes · have → has",
      undefined,
      "Eu trabalho em uma academia. Meu irmão trabalha em um escritório. Ele estuda à noite.",
    ],
    [
      ["She's a ", bold("fitness instructor"), ". He's an ", bold("office assistant"), ". She's a ", bold("web designer"), "."],
      "Use a/an before a singular job title. Use an before a vowel sound, as in an office assistant.",
      "Stress the main syllable in each job title.",
      "a fitness instructor · an office assistant · a web designer",
      undefined,
      "Ela é instrutora de academia. Ele é assistente de escritório. Ela é web designer.",
    ],
  ],
} satisfies LanguageFocusData;
