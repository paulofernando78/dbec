import type { LanguageFocusData } from "../../../lesson-step-types";
import { FamilyWords } from "@/features/FamilyWords";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus", component: FamilyWords,
  instruction: "Listen, repeat, and notice how we describe regular transportation.",
  items: [
    [[bold("I take"), " the train. — I don’t take the bus."], "Describe your regular transport. Use don’t for the negative.", "Stress TRAIN, DON’T, and BUS.", "I / you / we / they + verb · don’t + verb", undefined, "Eu pego o trem. — Não pego o ônibus."],
    [[bold("She goes"), " by bus. — She doesn’t drive."], "With he or she, the affirmative verb changes. Use doesn’t plus the base verb for the negative.", "Stress BUS, DOESN’T, and DRIVE.", "he / she + verb-s · doesn’t + verb", undefined, "Ela vai de ônibus. — Ela não dirige."],
    [[bold("They use"), " the subway. — We walk together."], "Use the base verb with we and they.", "Stress SUBway, WALK, and toGETHer.", "we / they + base verb", undefined, "Eles usam o metrô. — Nós caminhamos juntos."],
    [[bold("take → takes"), " · ", bold("go → goes"), " · ", bold("carry → carries")], "With he or she, usually add -s. Add -es to go. Change consonant + y to -ies.", "Say the final verb sound clearly.", "verb + s · go → goes · carry → carries", undefined, "take → takes · go → goes · carry → carries"],
  ],
} satisfies LanguageFocusData;
