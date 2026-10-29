import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Talk about sports, fitness activities, and exercise habits.",
  items: [
    [
      ["I ", bold("play soccer"), " after work. My sister ", bold("plays basketball"), " on Saturdays."],
      "Use play with many team sports and games.",
      "Stress the name of the sport. The final -s in plays is pronounced /z/.",
      "play + soccer/football/baseball/basketball/ice hockey",
      undefined,
      "Jogo futebol depois do trabalho. Minha irmã joga basquete aos sábados.",
    ],
    [
      ["I ", bold("go jogging"), " in the park. We ", bold("go bowling"), " on Fridays."],
      "Use go with activities ending in -ing.",
      "Stress the activity after go.",
      "go + running/jogging/walking/bowling",
      undefined,
      "Faço jogging no parque. Jogamos boliche às sextas-feiras.",
    ],
    [
      ["I ", bold("do weight training"), " at the gym. I also ", bold("walk on the treadmill"), "."],
      "Use do with exercise programs and use specific action verbs with fitness equipment.",
      "Stress weight training and treadmill.",
      "do weight training · run/walk on the treadmill",
      undefined,
      "Faço musculação na academia. Também caminho na esteira.",
    ],
    [
      [bold("Do"), " you exercise at home? — Yes, I do. ", bold("What do"), " you do at the gym? — I do weight training."],
      "Use a yes/no question to confirm a habit and a Wh-question to ask for the specific activity.",
      "Use rising intonation in the yes/no question and falling intonation in the Wh-question.",
      "Do + you + base verb? · What + do + you + base verb?",
      undefined,
      "Você se exercita em casa? — Sim. O que você faz na academia? — Faço musculação.",
    ],
  ],
} satisfies LanguageFocusData;
