import type { LanguageFocusData } from "../../../lesson-step-types";
import { WeatherAndSeasons } from "@/features/WeatherAndSeasons";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus", component: WeatherAndSeasons,
  instruction: "Listen, repeat, and notice how we describe clothes and weather now.",
  items: [
    [[bold("I’m wearing"), " a raincoat. — I’m not wearing a hat."], "The action is happening now. Add not for the negative.", "Stress WEARing, RAINcoat, and HAT.", "I’m + verb-ing · I’m not + verb-ing", undefined, "Estou usando uma capa de chuva. — Não estou usando chapéu."],
    [[bold("She’s wearing"), " a sweater. — He’s wearing gloves."], "Use she for a woman or girl and he for a man or boy.", "Stress SWEATer and GLOVES.", "She’s / He’s + verb-ing + clothes", undefined, "Ela está usando um suéter. — Ele está usando luvas."],
    [[bold("Are you wearing"), " a raincoat? — Yes, I am. / No, I’m not."], "Check another person’s clothes now.", "Use rising intonation. Stress RAINcoat, YES, or NO.", "Are + you + verb-ing? · Yes, I am. / No, I’m not.", undefined, "Você está usando uma capa de chuva? — Sim. / Não."],
    [[bold("It’s raining"), ". — It isn’t snowing."], "Describe weather happening now.", "Stress RAINing and SNOWing.", "It’s / It isn’t + weather verb-ing", undefined, "Está chovendo. — Não está nevando."],
  ],
} satisfies LanguageFocusData;
