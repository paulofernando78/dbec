import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus",
  instruction: "Listen, repeat, and notice how we ask for and tell the time.",
  items: [
    [[bold("What time is it"), "? — It’s seven o’clock."], "Ask for the time now. Use o’clock for an exact hour.", "Stress TIME and SEVen. Use falling intonation.", "What time + is + it? · It’s + hour + o’clock", undefined, "Que horas são? — São sete horas."],
    [["It’s ", bold("seven fifteen"), ". — It’s ", bold("six thirty"), ". — It’s ", bold("ten forty-five"), "."], "Say the hour first and then the minutes.", "Stress the hour and minutes.", "It’s + hour + minutes", undefined, "São sete e quinze. — São seis e meia. — São dez e quarenta e cinco."],
    [["It’s seven ", bold("A.M."), " — It’s seven ", bold("P.M."), ""], "A.M. is before noon. P.M. is after noon.", "Say A.M. and P.M. as separate letters.", "time + A.M. / P.M.", undefined, "São sete da manhã. — São sete da noite."],
    [["12:00 P.M. = ", bold("noon"), " · 12:00 A.M. = ", bold("midnight")], "Noon is the middle of the day. Midnight is the middle of the night.", "Stress NOON and MIDnight.", "12:00 P.M. = noon · 12:00 A.M. = midnight", undefined, "12:00 P.M. = meio-dia · 12:00 A.M. = meia-noite"],
  ],
} satisfies LanguageFocusData;
