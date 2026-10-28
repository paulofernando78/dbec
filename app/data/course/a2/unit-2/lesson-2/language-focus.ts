import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Describe routines and schedules using clock time and time expressions.",
  items: [
    [
      ["I get up ", bold("at 7:00"), ". I leave work ", bold("at 5:30"), "."],
      "Use at before a precise clock time.",
      "Stress the time. In conversation, 7:00 can be said as seven or seven o'clock.",
      "at + clock time · at seven · at seven o'clock · at 7:00 A.M./P.M.",
      undefined,
      "Eu me levanto às sete. Saio do trabalho às cinco e meia.",
    ],
    [
      ["I work ", bold("in the morning"), " and study ", bold("in the evening"), "."],
      "Use in with parts of the day, but use at with night.",
      "Stress morning, afternoon, evening, or night.",
      "in the morning · in the afternoon · in the evening · at night",
      undefined,
      "Trabalho de manhã e estudo à noite.",
    ],
    [
      ["I work ", bold("on weekdays"), ". I exercise ", bold("on Saturdays"), "."],
      "Use on with days, specific weekdays, weekdays, weeknights, and weekends.",
      "Stress the day or period that carries the new information.",
      "on Monday(s) · on weekdays · on weeknights · on weekends",
      undefined,
      "Trabalho durante a semana. Faço exercícios aos sábados.",
    ],
    [
      ["I arrive ", bold("early"), ". I have lunch ", bold("around noon"), " and work ", bold("until six"), "."],
      "Use early, late, around, before, after, and until to give less exact or relative time information.",
      "Stress the expression that explains when the activity happens.",
      "early/late · around + time · before/after + time · until + time",
      undefined,
      "Chego cedo. Almoço por volta do meio-dia e trabalho até as seis.",
    ],
  ],
} satisfies LanguageFocusData;
