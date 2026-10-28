import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Judge past actions and suggest alternative choices.",
  items: [
    [
      ["You ", bold("should have asked"), " your sister to help."],
      "Use should have to say that a different past action was advisable.",
      "Have is reduced after should in conversation.",
      "should have + past participle",
      undefined,
      "Você deveria ter pedido ajuda à sua irmã.",
    ],
    [
      ["He ", bold("shouldn't have used"), " your car."],
      "Use shouldn't have to criticize an action that happened.",
      "Stress shouldn't and the action being judged.",
      "shouldn't have + past participle",
      undefined,
      "Ele não deveria ter usado seu carro.",
    ],
    [
      ["You ", bold("could have told"), " them that you had to get up early."],
      "Use could have to suggest an alternative action that was possible.",
      "Reduce have and stress the alternative action.",
      "could have + past participle",
      undefined,
      "Você poderia ter dito a eles que precisava acordar cedo.",
    ],
    [
      ["I ", bold("would have asked"), " them to help clean up the place."],
      "Use would have to explain what you would have done in the same situation.",
      "Would have is commonly pronounced would've.",
      "would have + past participle",
      undefined,
      "Eu teria pedido a eles que ajudassem a limpar o lugar.",
    ],
    [
      ["I ", bold("wouldn't have invited"), " them to spend the weekend."],
      "Use wouldn't have to describe an alternative action you would have avoided.",
      "Keep the negative form clear and reduce have.",
      "wouldn't have + past participle",
      undefined,
      "Eu não os teria convidado para passar o fim de semana.",
    ],
    [
      ["Her response was a warning, not an excuse or a suggestion."],
      "Classify reactions according to their purpose and tone.",
      "Stress the reaction noun when contrasting possibilities.",
      "assumption · criticism · demand · excuse · prediction · suggestion · suspicion · warning",
      undefined,
      "A resposta dela foi um aviso, não uma desculpa nem uma sugestão.",
    ],
  ],
} satisfies LanguageFocusData;
