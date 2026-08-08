import { content } from "@/helpers/content";
import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "cushion", img: 0 },
  { word: "lubricate", img: 0 },
  { word: "nourish", img: 0 },
  { word: "retain", img: 0 },
  { word: "impairment", img: 0 },
  { word: "compensate for", img: 0 },
  { word: "replenish", img: 0 },
  { word: "intake", img: 0 },
  { word: "fine-tune", img: 0 },
  { word: "moisture", img: 0 },
];

export const theBodysHiddenBalance = {
  metadata: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    description: "The Body’s Hidden Balance",
  },

  whiteboard: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    descriptions: ["The Body’s Hidden Balance"],
  },

  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          content: [
            "What signs might indicate that the body is struggling to maintain its internal balance?",
          ],
        },
        {
          content: [
            "Do you think the same daily health recommendation is suitable for everyone? Why or why not?",
          ],
        },
        {
          content: [
            "Besides what we drink, what other factors might affect the amount of fluid available to the body?",
          ],
        },
      ],
    },

    vocabulary: {
      words,
    },

    gist: {
      videoPlayer: {
        instruction: "Watch the video and answer the question.",
        videoId: "9iMGFqMmUFs",
        title: "What would happen if you didn’t drink water? - Mia Nacamulli",
      },

      radio: {
        exercise: {
          questions: [
            {
              question: "What is the main purpose of the video?",
              options: [
                {
                  option:
                    "To explain how the body regulates fluid and why both deficiency and excess can be harmful.",
                  isCorrect: true,
                },
                {
                  option:
                    "To prove that every adult must drink exactly eight glasses every day.",
                  isCorrect: false,
                },
                {
                  option:
                    "To compare the digestive systems of humans, fish, and other animals.",
                  isCorrect: false,
                },
                {
                  option:
                    "To argue that beverages other than water should never be consumed.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      },
    },

    details: {
      radio: {
        instruction: "Watch again and listen for specific information.",
        exercise: {
          questions: shuffle([
            {
              question:
                "At birth, what percentage of a human baby is comprised of water?",
              options: shuffle([
                { option: "55%", isCorrect: false },
                { option: "65%", isCorrect: false },
                { option: "70%", isCorrect: false },
                { option: "75%", isCorrect: true },
              ]),
            },
            {
              question:
                "When antidiuretic hormones reach the kidneys, what is created?",
              options: shuffle([
                { option: "Aquaporins", isCorrect: true },
                { option: "ADH", isCorrect: false },
                { option: "Sweat", isCorrect: false },
                { option: "Sodium electrolytes", isCorrect: false },
              ]),
            },
            {
              question: "What processes occur in your body with dehydration?",
              options: shuffle([
                {
                  option:
                    "The body releases ADH, retains more water, produces darker urine, and may experience reduced energy and cognitive performance.",
                  isCorrect: true,
                },
                {
                  option:
                    "The kidneys release extra water, urine becomes clearer, and brain activity increases.",
                  isCorrect: false,
                },
                {
                  option:
                    "Sodium becomes diluted, cells swell, and the kidneys produce large volumes of dilute urine.",
                  isCorrect: false,
                },
                {
                  option:
                    "The lungs absorb moisture from the air and replace all the fluid that has been lost.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "What are some symptoms of overhydration?",
              options: shuffle([
                {
                  option:
                    "Headache, vomiting, seizures, and, in rare cases, death.",
                  isCorrect: true,
                },
                {
                  option:
                    "Dark urine, dry skin, low blood pressure, and reduced energy.",
                  isCorrect: false,
                },
                {
                  option:
                    "Stronger joints, increased concentration, and a faster metabolism.",
                  isCorrect: false,
                },
                {
                  option:
                    "A higher sodium concentration and permanently smaller cells.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "What are some of the different ways you can hydrate?",
              options: shuffle([
                {
                  option:
                    "By drinking water and other beverages and by eating water-rich fruits and vegetables.",
                  isCorrect: true,
                },
                {
                  option:
                    "Only by drinking plain water because other drinks and foods do not replenish fluids.",
                  isCorrect: false,
                },
                {
                  option:
                    "By avoiding fruit and vegetables and increasing salt intake.",
                  isCorrect: false,
                },
                {
                  option:
                    "Only through caffeinated drinks because they contain the most water.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "We lose 2 to 3 liters of water each day by doing which of the following?",
              options: shuffle([
                { option: "Breathing", isCorrect: false },
                { option: "Urinating", isCorrect: false },
                { option: "Sweating", isCorrect: false },
                { option: "All of the above", isCorrect: true },
              ]),
            },
            {
              question:
                "Drinking too much water in a short amount of time is referred to as:",
              options: shuffle([
                { option: "Dehydration", isCorrect: false },
                { option: "Overhydration", isCorrect: true },
                { option: "Dilution", isCorrect: false },
                { option: "Supplementation", isCorrect: false },
              ]),
            },
          ]),
        },
      },
    },

    script: {
      content: [
        {
          en: [
            ...content({
              parts: [
                "Water is found throughout the natural world and inside every human body. The exact proportion varies according to factors such as age, sex, location, and body composition. Adults are generally between 55 and 60 percent water, while newborn babies contain considerably more.",
              ],
            }),
          ],
          pt: "A água é encontrada em todo o mundo natural e dentro de cada corpo humano. A proporção exata varia de acordo com fatores como idade, sexo, localização e composição corporal. Os adultos geralmente têm entre 55% e 60% de água, enquanto os recém-nascidos contêm uma quantidade consideravelmente maior.",
        },
        {
          en: [
            ...content({
              parts: [
                "Inside the body, water cushions and lubricates joints, helps control temperature, and supports both the brain and spinal cord. The brain and heart are close to three quarters water, the lungs contain even more, and bones—despite appearing dry—also contain a significant amount.",
              ],
            }),
          ],
          pt: "Dentro do corpo, a água amortece e lubrifica as articulações, ajuda a controlar a temperatura e dá suporte tanto ao cérebro quanto à medula espinhal. O cérebro e o coração têm quase três quartos de água, os pulmões contêm ainda mais e os ossos — apesar de parecerem secos — também contêm uma quantidade significativa.",
        },
        {
          en: [
            ...content({
              parts: [
                "Normal processes such as sweating, urination, bowel movements, and breathing remove between two and three liters of fluid each day. Because these losses are unavoidable, the body has to compensate for them in order to maintain a stable internal level.",
              ],
            }),
          ],
          pt: "Processos normais como transpiração, urina, evacuação e respiração eliminam entre dois e três litros de líquido diariamente. Como essas perdas são inevitáveis, o corpo precisa compensá-las para manter um nível interno estável.",
        },
        {
          en: [
            ...content({
              parts: [
                "When receptors in the hypothalamus detect a shortage, they trigger the release of antidiuretic hormone. This causes the kidneys to create channels that allow the blood to absorb and retain more fluid. One visible result is darker, more concentrated urine.",
              ],
            }),
          ],
          pt: "Quando receptores no hipotálamo detectam uma insuficiência, eles provocam a liberação do hormônio antidiurético. Isso faz com que os rins criem canais que permitem ao sangue absorver e reter mais líquido. Um resultado visível é uma urina mais escura e concentrada.",
        },
        {
          en: [
            ...content({
              parts: [
                "As dehydration becomes more severe, energy, mood, skin moisture, and blood pressure can fall. Cognitive impairment may also occur: the brain must work harder to complete ordinary tasks and can temporarily decrease in volume.",
              ],
            }),
          ],
          pt: "À medida que a desidratação se torna mais grave, a energia, o humor, a umidade da pele e a pressão arterial podem cair. Também pode ocorrer comprometimento cognitivo: o cérebro precisa trabalhar mais para realizar tarefas comuns e pode diminuir temporariamente de volume.",
        },
        {
          en: [
            ...content({
              parts: [
                "Excess can be devastating as well. During overhydration, sodium electrolytes become diluted and cells begin to swell. If the kidneys cannot process the volume quickly enough, water intoxication may lead to headaches, vomiting, seizures, and, in rare cases, death.",
              ],
            }),
          ],
          pt: "O excesso também pode ser devastador. Durante a hiper-hidratação, os eletrólitos de sódio ficam diluídos e as células começam a inchar. Se os rins não conseguirem processar o volume com rapidez suficiente, a intoxicação por água pode causar dores de cabeça, vômitos, convulsões e, em casos raros, morte.",
        },
        {
          en: [
            ...content({
              parts: [
                "The conventional eight-glass rule has been fine-tuned. Current consensus is that requirements depend on weight, environment, health, age, and physical activity. Recommended ranges differ between men and women and rise or fall according to individual circumstances.",
              ],
            }),
          ],
          pt: "A regra convencional dos oito copos foi aperfeiçoada. O consenso atual é que as necessidades dependem do peso, do ambiente, da saúde, da idade e da atividade física. As faixas recomendadas diferem entre homens e mulheres e aumentam ou diminuem conforme as circunstâncias individuais.",
        },
        {
          en: [
            ...content({
              parts: [
                "Plain water is an excellent hydrator, but other drinks can replenish fluids too. Food supplies roughly one fifth of daily intake, and many fruits and vegetables contain more than 90 percent water. Maintaining optimal hydration can improve everyday functioning and may support long-term health.",
              ],
            }),
          ],
          pt: "A água pura é uma excelente fonte de hidratação, mas outras bebidas também podem repor líquidos. Os alimentos fornecem aproximadamente um quinto da ingestão diária, e muitas frutas e verduras contêm mais de 90% de água. Manter uma hidratação ideal pode melhorar o funcionamento cotidiano e contribuir para a saúde a longo prazo.",
        },
      ],
    },

    practice: {
      guess: {
        words: shuffle(words),
      },

      guessFillInTheBlanks: {
        instruction:
          "Complete the sentences with the words from the Guess activity.",
        exercise: {
          blocks: shuffle([
            {
              block: [
                { text: "Water helps lubricate each " },
                { blank: "joint" },
                { text: " and protect it during movement." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The brain and " },
                { blank: "spinal cord" },
                { text: " depend on sufficient fluid." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Each " },
                { blank: "kidney" },
                { text: " helps regulate the body’s fluid level." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Dark urine may be an early sign of " },
                { blank: "dehydration" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Severe " },
                { blank: "overhydration" },
                { text: " can make cells swell." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Sodium is an important " },
                { blank: "electrolyte" },
                { text: " in the human body." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Daily fluid " },
                { blank: "intake" },
                { text: " should reflect individual needs." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Fruit can provide both nutrients and " },
                { blank: "moisture" },
                { text: "." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },

      fillInTheBlanks: {
        instruction: "Fill in the blanks with the correct word from the video.",
        exercise: {
          blocks: shuffle([
            {
              block: [
                { text: "The body must " },
                { blank: "compensate" },
                { text: " for the fluid lost through normal functions." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The kidneys help the bloodstream " },
                { blank: "retain" },
                { text: " more fluid when levels are low." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Serious dehydration may cause cognitive " },
                { blank: "impairment" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "During overhydration, sodium becomes " },
                { blank: "diluted" },
                { text: " and cells begin to swell." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The old recommendation has since been " },
                { blank: "fine-tuned" },
                { text: " to reflect individual differences." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The current scientific " },
                { blank: "consensus" },
                { text: " rejects a single universal amount." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Food and other beverages can also " },
                { blank: "replenish" },
                { text: " the fluids the body loses." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },

      unscramble: {
        instruction:
          "Unscramble the sentences using advanced vocabulary from the video.",
        exercise: {
          items: shuffle([
            {
              prompt:
                "for unavoidable fluid loss / must compensate / throughout the day / the body",
              answer:
                "The body must compensate for unavoidable fluid loss throughout the day.",
            },
            {
              prompt:
                "when fluid levels fall / help the bloodstream / the kidneys / retain water",
              answer:
                "The kidneys help the bloodstream retain water when fluid levels fall.",
            },
            {
              prompt:
                "may lead to / prolonged dehydration / measurable cognitive impairment",
              answer:
                "Prolonged dehydration may lead to measurable cognitive impairment.",
            },
            {
              prompt:
                "when sodium becomes diluted / begin to swell / the body’s cells",
              answer:
                "The body’s cells begin to swell when sodium becomes diluted.",
            },
            {
              prompt:
                "has been fine-tuned / the traditional recommendation / by later research",
              answer:
                "The traditional recommendation has been fine-tuned by later research.",
            },
            {
              prompt:
                "individual circumstances / the scientific consensus / should determine intake / suggests that",
              answer:
                "The scientific consensus suggests that individual circumstances should determine intake.",
            },
            {
              prompt:
                "can help replenish / water-rich foods / fluids lost / during the day",
              answer:
                "Water-rich foods can help replenish fluids lost during the day.",
            },
          ]),
        },
      },
    },

    followUp: {
      list: {
        type: "ol" as const,
        instruction:
          "Discuss the questions below, using ideas and evidence from the video.",
        items: [
          {
            content: [
              "Why can a simple rule such as ‘eight glasses a day’ be attractive even when it is scientifically incomplete?",
            ],
          },
          {
            content: [
              "Which groups may be particularly vulnerable to dehydration or overhydration, and why?",
            ],
          },
          {
            content: [
              "To what extent should food and other beverages count toward a person’s daily fluid target?",
            ],
          },
        ],
      },
    },
  },
};
