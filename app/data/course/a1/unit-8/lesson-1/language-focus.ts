import type { LanguageFocusData } from "../../../lesson-step-types";
import { Jobs } from "@/features/Jobs";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus", component: Jobs,
  instruction: "Listen, repeat, and notice how we ask about jobs and workplaces.",
  items: [
    [[bold("What do you do"), "? — I’m a chef."], "Ask another person’s job.", "Stress WHAT, DO, and CHEF.", "What + do + you + do? · I’m a/an + job", undefined, "Qual é o seu trabalho? — Sou chef."],
    [[bold("Where do you work"), "? — At a restaurant."], "Ask another person’s workplace.", "Stress WHERE, WORK, and RESTaurant.", "Where + do + you + work? · At / In + place", undefined, "Onde você trabalha? — Em um restaurante."],
    [[bold("What does she do"), "? — She’s a nurse."], "Ask a woman’s or girl’s job.", "Stress WHAT, SHE, and NURSE.", "What + does + he/she + do? · He’s/She’s a/an + job", undefined, "Qual é o trabalho dela? — Ela é enfermeira."],
    [[bold("Where does he work"), "? — At a hotel."], "Ask a man’s or boy’s workplace.", "Stress WHERE, WORK, and HOTEL.", "Where + does + he/she + work? · At / In + place", undefined, "Onde ele trabalha? — Em um hotel."],
  ],
} satisfies LanguageFocusData;
