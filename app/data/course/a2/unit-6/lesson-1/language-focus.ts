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
      ["You have a lot of energy, ", bold("Riley"), ". — You look tired, ", bold("Aaron"), "."],
      "Use a person's name in direct address when speaking directly to them.",
      "Direct address usually has falling intonation and a short pause before the name.",
      "statement + comma + person's name",
      undefined,
      "Você tem muita energia, Riley. — Você parece cansado, Aaron.",
    ],
  ],
} satisfies LanguageFocusData;
