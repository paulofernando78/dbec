import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Express regret and describe hypothetical past situations.",
  items: [
    [
      ["I ", bold("should have done"), " an internship while I was in college."],
      "Use should have plus the past participle to express regret about a past action you did not take.",
      "In conversation, have is reduced: should've done.",
      "should have + past participle",
      undefined,
      "Eu deveria ter feito um estágio enquanto estava na faculdade.",
    ],
    [
      ["I ", bold("shouldn't have taken"), " out a student loan."],
      "Use shouldn't have plus the past participle to regret an action you did take.",
      "Have is reduced after shouldn't in natural speech.",
      "shouldn't have + past participle",
      undefined,
      "Eu não deveria ter feito um empréstimo estudantil.",
    ],
    [
      ["If I'd listened to my professors, I ", bold("would have taken"), " additional courses."],
      "Use would have for the probable result of an unreal past condition.",
      "Would have is commonly reduced to would've; had can contract to 'd.",
      "if + past perfect, would have + past participle",
      undefined,
      "Se eu tivesse ouvido meus professores, teria feito cursos adicionais.",
    ],
    [
      ["If I hadn't been so irresponsible, I ", bold("could have gotten"), " better grades."],
      "Use could have for a possible result of an unreal past condition.",
      "Have and been are reduced in connected speech: could've and /bɪn/.",
      "if + past perfect, could have + past participle",
      undefined,
      "Se eu não tivesse sido tão irresponsável, poderia ter tirado notas melhores.",
    ],
    [
      ["If she had asked for advice, she ", bold("might have made"), " a different choice."],
      "Use might have when the hypothetical result is less certain.",
      "Reduce have after the modal and stress the result.",
      "if + past perfect, might have + past participle",
      undefined,
      "Se ela tivesse pedido conselho, talvez tivesse feito uma escolha diferente.",
    ],
    [
      ["I ", bold("wish I had taken"), " more time to consider my options."],
      "Use wish plus the past perfect to express regret about a past situation.",
      "Had is often contracted to 'd after the subject.",
      "wish + subject + had + past participle",
      undefined,
      "Eu gostaria de ter dedicado mais tempo para considerar minhas opções.",
    ],
  ],
} satisfies LanguageFocusData;
