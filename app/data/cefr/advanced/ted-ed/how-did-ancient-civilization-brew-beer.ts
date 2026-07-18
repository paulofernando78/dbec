import { audio, content, mark, underline } from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "barley", img: 0 },
  { word: "grain", img: 0 },
  { word: "malt", img: 0 },
  { word: "yeast", img: 0 },
  { word: "fermentation", img: 0 },
  { word: "hops", img: 0 },
  { word: "brewery", img: 0 },
];

export const howDidAncientCivilizationsBrewBeer = {
  slug: "a-drink-with-a-long-history",

  metadata: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    description: "A Drink with a Long History",
  },
  whiteboard: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    descriptions: ["A Drink with a Long History"],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          content: ["Have you ever visited a brewery or seen beer being made?"],
        },
        {
          content: ["What ingredients do you think are needed to make beer?"],
        },
        {
          content: [
            "Why do you think people started brewing beer thousands of years ago?",
          ],
        },
        {
          content: [
            "Do you think beer has played an important role in human history? Why or why not?",
          ],
        },
      ],
    },
    vocabulary: {
      instruction: "Slide the pictures and describe what you see.",
      words: shuffle(words),
    },
    gist: {
      videoPlayer: {
        instruction: "Watch the video and answer the question.",

        videoId: "YpFrrTHM1XQ",

        title: "A Drink with a Long History",
      },

      radio: {
        exercise: {
          questions: shuffle([
            {
              question: "What is the video mainly about?",

              options: shuffle([
                {
                  option:
                    "The history of beer, how it evolved, and the science behind brewing.",

                  isCorrect: true,
                },

                {
                  option: "Why wine became more popular than beer.",

                  isCorrect: false,
                },

                {
                  option: "How modern breweries produce beer.",

                  isCorrect: false,
                },

                {
                  option: "The history of monasteries in Europe.",

                  isCorrect: false,
                },
              ]),
            },
          ]),
        },
      },
    },
    details: {
      radio: {
        instruction: "Watch again and listen for specific information.",

        exercise: {
          questions: shuffle([
            {
              question: "Where was the oldest evidence of beer brewing found?",

              options: shuffle([
                {
                  option: "Modern-day Israel",
                  isCorrect: true,
                },
                {
                  option: "Ancient Egypt",
                  isCorrect: false,
                },
                {
                  option: "Switzerland",
                  isCorrect: false,
                },
                {
                  option: "China",
                  isCorrect: false,
                },
              ]),
            },

            {
              question: "What had to happen before fermentation could begin?",

              options: shuffle([
                {
                  option:
                    "The starches had to be converted into fermentable sugars.",
                  isCorrect: true,
                },
                {
                  option: "The beer had to be cooled.",
                  isCorrect: false,
                },
                {
                  option: "Hops had to be added.",
                  isCorrect: false,
                },
                {
                  option: "The grains had to be roasted.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "How did wild yeast reach the beer mixture?",
              options: shuffle([
                {
                  option: "Through the air, fruit, or reused brewing tools.",
                  isCorrect: true,
                },
                {
                  option: "It was mixed into the water by hand.",
                  isCorrect: false,
                },
                {
                  option: "It naturally formed inside the grains.",
                  isCorrect: false,
                },
                {
                  option: "It came from the hops.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "Why did brewers begin adding hops?",
              options: shuffle([
                {
                  option: "To add bitterness and help preserve the beer.",
                  isCorrect: true,
                },
                {
                  option: "To make beer sweeter.",
                  isCorrect: false,
                },

                {
                  option: "To increase the alcohol content.",
                  isCorrect: false,
                },
                {
                  option: "To speed up fermentation.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "Who identified yeast's role in beer fermentation?",
              options: shuffle([
                {
                  option: "Louis Pasteur",
                  isCorrect: true,
                },
                {
                  option: "Hammurabi",
                  isCorrect: false,
                },
                {
                  option: "Ninkasi",
                  isCorrect: false,
                },
                {
                  option: "A Bavarian duke",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "Which type of beer ferments at colder temperatures?",
              options: shuffle([
                {
                  option: "Lagers",
                  isCorrect: true,
                },
                {
                  option: "Ales",
                  isCorrect: false,
                },
                {
                  option: "Lambics",
                  isCorrect: false,
                },
                {
                  option: "Stouts",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "What makes Belgian Lambics different?",
              options: shuffle([
                {
                  option:
                    "They rely on spontaneous fermentation with wild yeast.",
                  isCorrect: true,
                },
                {
                  option: "They are made without barley.",
                  isCorrect: false,
                },
                {
                  option: "They contain no alcohol.",
                  isCorrect: false,
                },
                {
                  option: "They are fermented only in wooden barrels.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "What challenge do many brewers face today?",
              options: shuffle([
                {
                  option: "Producing non-alcoholic beer without losing flavor.",
                  isCorrect: true,
                },
                {
                  option: "Finding enough barley in Europe.",
                  isCorrect: false,
                },
                {
                  option: "Replacing hops with other flowers.",
                  isCorrect: false,
                },
                {
                  option: "Making beer safer to drink than water.",
                  isCorrect: false,
                },
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
            "Somewhere in medieval Switzerland, a weary traveler is relieved to see a monastery up ahead.",
          ],
          pt: "Em algum lugar da Suíça medieval, um viajante cansado sente alívio ao avistar um mosteiro logo à frente.",
        },
        {
          en: [
            "He’s welcomed, guided to a crowded guesthouse, and promptly served the abbey’s specialty: a tall glass of beer.",
          ],
          pt: "Ele é recebido, conduzido a uma hospedaria lotada e logo servido com a especialidade da abadia: um grande copo de cerveja.",
        },
        {
          en: [
            "For centuries, monasteries across modern-day Europe were the primary large-scale brewers of beer.",
          ],
          pt: "Durante séculos, os mosteiros da Europa foram os principais produtores de cerveja em larga escala.",
        },
        {
          en: ["But this is hardly where this drink’s journey began."],
          pt: "Mas dificilmente foi aí que a história dessa bebida começou.",
        },
        {
          en: [
            "Beer refers to any alcoholic beverage made from fermented cereal ",
            mark("grains"),
            " — the edible seeds of a particular group of grasses.",
          ],
          pt: "Cerveja refere-se a qualquer bebida alcoólica feita a partir da fermentação de grãos de cereais — as sementes comestíveis de um determinado grupo de gramíneas.",
        },
        {
          en: [
            "The oldest evidence of beer brewing dates back ",
            underline("13,000 years"),
            " to what’s now modern-day ",
            underline("Israel"),
            ", but experts believe the drink developed independently across the world.",
          ],
          pt: "A evidência mais antiga da produção de cerveja remonta a 13 mil anos, no que hoje é Israel, mas especialistas acreditam que a bebida surgiu de forma independente em diferentes partes do mundo.",
        },
        {
          en: [
            "In each of these regions, its composition was shaped by native ",
            mark("grains"),
            ".",
          ],
          pt: "Em cada uma dessas regiões, sua composição foi moldada pelos grãos nativos.",
        },
        {
          en: [
            "For example, ",
            underline("9,000 years ago"),
            ", in eastern ",
            underline("China"),
            ", people drank a sweet, cloudy beer made from rice, millet, and tubers.",
          ],
          pt: "Por exemplo, há 9 mil anos, no leste da China, as pessoas bebiam uma cerveja doce e turva feita de arroz, milho-miúdo e tubérculos.",
        },
        {
          en: [
            "In the Andean region of South America, ",
            underline("5,000-year-old"),
            " pottery suggests production of chicha, a brew of fermented maize.",
          ],
          pt: "Na região dos Andes, na América do Sul, cerâmicas de 5 mil anos indicam a produção da chicha, uma bebida fermentada de milho.",
        },
        {
          en: [
            "Whatever the ingredients, ancient beer brewing required two main steps.",
          ],
          pt: "Independentemente dos ingredientes, a produção antiga de cerveja exigia duas etapas principais.",
        },
        {
          en: [
            "First, the starches in the cereal ",
            mark("grains"),
            " had to be converted into fermentable sugars.",
          ],
          pt: "Primeiro, os amidos presentes nos grãos de cereais precisavam ser convertidos em açúcares fermentáveis.",
        },
        {
          en: [
            "Some groups achieved this by chewing them, while others soaked them in water to trigger germination, a process that naturally breaks down starches.",
          ],
          pt: "Alguns povos conseguiam isso mastigando os grãos, enquanto outros os deixavam de molho em água para provocar a germinação, um processo que decompõe naturalmente o amido.",
        },
        {
          en: ["The second step was ", mark("fermentation"), "."],
          pt: "A segunda etapa era a fermentação.",
        },
        {
          en: [
            "Unbeknownst to brewers at the time, wild ",
            mark("yeast"),
            " found its way into the mixture — carried through the air, on fruit, or via reused tools still harboring yeasts from prior brews.",
          ],
          pt: "Sem que os cervejeiros da época soubessem, leveduras selvagens chegavam à mistura pelo ar, por frutas ou por ferramentas reutilizadas que ainda continham leveduras de produções anteriores.",
        },
        {
          en: [
            "With time and storage, ",
            mark("yeasts"),
            " converted some of these sugars into alcohol while releasing carbon dioxide.",
          ],
          pt: "Com o tempo e o armazenamento, as leveduras transformavam parte desses açúcares em álcool enquanto liberavam dióxido de carbono.",
        },
        {
          en: [
            "This ancient beer was often imperfectly filtered, so it contained much more fiber, B vitamins, and protein than modern beer.",
          ],
          pt: "Essa cerveja antiga geralmente era filtrada de forma imperfeita, por isso continha muito mais fibras, vitaminas do complexo B e proteínas do que a cerveja moderna.",
        },
        {
          en: [
            "And some cultures boiled the initial sugar mixture, which killed many unwanted microorganisms, making it safer to drink than other available water sources.",
          ],
          pt: "Além disso, algumas culturas ferviam a mistura inicial de açúcares, eliminando muitos microrganismos indesejados e tornando a bebida mais segura do que outras fontes de água disponíveis.",
        },
        {
          en: [
            "The oldest surviving recipe describing this process appears in a Sumerian poem dedicated to their goddess of beer, ",
            underline("Ninkasi"),
            ".",
          ],
          pt: "A receita mais antiga conhecida que descreve esse processo aparece em um poema sumério dedicado à deusa da cerveja, Ninkasi.",
        },
        {
          en: [
            "The Babylonians built on this adoration — ",
            underline("Hammurabi's Code"),
            " mandated daily beer rations for every citizen.",
          ],
          pt: "Os babilônios ampliaram essa admiração — o Código de Hamurábi determinava uma ração diária de cerveja para todos os cidadãos.",
        },
        {
          en: [
            "And any brewer caught overcharging for a pint was condemned to death by drowning.",
          ],
          pt: "E qualquer cervejeiro que cobrasse um preço abusivo por uma caneca era condenado à morte por afogamento.",
        },
        {
          en: [
            "In Ancient ",
            underline("Egypt"),
            ", beer was primarily made in the home by women, and was a staple of the daily diet.",
          ],
          pt: "No Antigo Egito, a cerveja era produzida principalmente pelas mulheres em casa e fazia parte da alimentação diária.",
        },
        {
          en: [
            "It also played a central role in religious festivals, and served as an offering at temples and the tombs of pharaohs.",
          ],
          pt: "Ela também desempenhava um papel central em festivais religiosos e era oferecida em templos e nos túmulos dos faraós.",
        },
        {
          en: [
            "By the ",
            underline("20th century BCE"),
            ", beer had spilled over from Egypt into ",
            underline("Greece"),
            ", though it wasn't as popular as wine.",
          ],
          pt: "Por volta do século XX a.C., a cerveja havia se espalhado do Egito para a Grécia, embora não fosse tão popular quanto o vinho.",
        },
        {
          en: [
            "Nevertheless, over the following centuries, a thirst for beer spread through Europe and beyond.",
          ],
          pt: "Mesmo assim, ao longo dos séculos seguintes, o gosto pela cerveja espalhou-se pela Europa e por outras regiões.",
        },
        {
          en: [
            "In the early ",
            underline("Middle Ages"),
            ", European monasteries pioneered large-scale beer production, both to provide to traveling pilgrims and to sell to support monastery upkeep.",
          ],
          pt: "No início da Idade Média, os mosteiros europeus foram pioneiros na produção de cerveja em larga escala, tanto para servir aos peregrinos quanto para financiar a manutenção dos mosteiros.",
        },
        {
          en: [
            "Around this same time, brewers from Central and Eastern Europe made a key change to their recipe: they began adding ",
            mark("hops"),
            ".",
          ],
          pt: "Nessa mesma época, cervejeiros da Europa Central e Oriental fizeram uma mudança importante na receita: passaram a adicionar lúpulo.",
        },
        {
          en: [
            "These green flowers are rich in acidic compounds, imbuing beer with a new bitter flavor and acting as a preservative.",
          ],
          pt: "Essas flores verdes são ricas em compostos ácidos, dando à cerveja um novo sabor amargo e funcionando como conservante.",
        },
        {
          en: [
            mark("Hops"),
            " became so closely associated with beer that in ",
            underline("1516"),
            ", a Bavarian duke issued a beer purity law, known as the ",
            underline("Reinheitsgebot"),
            ", that defined beer's composition as strictly ",
            mark("barley"),
            ", ",
            mark("hops"),
            ", and water.",
          ],
          pt: "O lúpulo tornou-se tão associado à cerveja que, em 1516, um duque da Baviera promulgou uma lei de pureza da cerveja, conhecida como Reinheitsgebot, que definia sua composição apenas como cevada, lúpulo e água.",
        },
        {
          en: [
            "The ",
            underline("Industrial Revolution"),
            " ushered in other essential beer innovations, including advances in refrigeration.",
          ],
          pt: "A Revolução Industrial trouxe outras inovações essenciais para a cerveja, incluindo avanços na refrigeração.",
        },
        {
          en: [
            "In ",
            underline("1876"),
            ", French chemist ",
            underline("Louis Pasteur"),
            " identified ",
            mark("yeast"),
            "'s role in beer ",
            mark("fermentation"),
            ".",
          ],
          pt: "Em 1876, o químico francês Louis Pasteur identificou o papel da levedura na fermentação da cerveja.",
        },
        {
          en: ["With this, a key beer ingredient was finally made visible."],
          pt: "Com isso, um ingrediente fundamental da cerveja finalmente pôde ser compreendido.",
        },
        {
          en: [
            "Brewers began selecting for different ",
            mark("yeasts"),
            " to refine recipes and experiment with flavor.",
          ],
          pt: "Os cervejeiros passaram a selecionar diferentes leveduras para aperfeiçoar receitas e experimentar novos sabores.",
        },
        {
          en: [
            "Today, there are well over ",
            underline("100"),
            " distinct beer varieties, with lagers and ales being the two main types.",
          ],
          pt: "Hoje, existem bem mais de 100 variedades de cerveja, sendo as lagers e as ales os dois principais tipos.",
        },
        {
          en: [
            underline("Lagers"),
            ", which include pilsners and bocks, are fermented with ",
            mark("yeasts"),
            " that thrive at colder temperatures and live at the bottom of fermentation vessels.",
          ],
          pt: "As lagers, que incluem as pilsners e as bocks, são fermentadas com leveduras que prosperam em temperaturas mais baixas e permanecem no fundo dos tanques de fermentação.",
        },
        {
          en: [
            underline("Ales"),
            ", like porters, stouts, and pale ales, ferment quicker, with ",
            mark("yeasts"),
            " that live at higher temperatures and float at the top of the mixture.",
          ],
          pt: "As ales, como porter, stout e pale ale, fermentam mais rapidamente, com leveduras que vivem em temperaturas mais altas e flutuam na parte superior da mistura.",
        },
        {
          en: ["But some beers break this mold."],
          pt: "Mas algumas cervejas fogem desse padrão.",
        },
        {
          en: [
            underline("Kölsches"),
            ", for example, start with ale yeast, but are finished at colder temperatures like lagers.",
          ],
          pt: "As Kölsches, por exemplo, começam com levedura de ale, mas terminam o processo em temperaturas mais baixas, como as lagers.",
        },
        {
          en: [
            "Others draw on ancient methods, like Belgian ",
            underline("Lambics"),
            ", which rely on spontaneous ",
            mark("fermentation"),
            " with wild ",
            mark("yeast"),
            ".",
          ],
          pt: "Outras recorrem a métodos antigos, como as Lambics belgas, que dependem da fermentação espontânea com leveduras selvagens.",
        },
        {
          en: [
            "Meanwhile, there are still new challenges to navigate. The growing demand for non-alcoholic beers has pushed producers to find ways to limit or remove alcohol while still preserving flavor.",
          ],
          pt: "Enquanto isso, ainda há novos desafios a enfrentar. A crescente demanda por cervejas sem álcool levou os produtores a encontrar maneiras de limitar ou remover o álcool sem perder o sabor.",
        },
        {
          en: [
            "And if history is any indication, beer's story will continue brewing for many years to come.",
          ],
          pt: "E, se a história serve de indicação, a história da cerveja continuará sendo escrita por muitos anos.",
        },
      ],
    },
    practice: {
      guess: {
        words: shuffle(words),
      },
      fillInTheBlanks: {
        instruction: "Fill in the blanks with the correct answer.",
        exercise: {
          blocks: shuffle([
            {
              block: [
                { text: "Beer is made from fermented cereal " },
                { blank: "grains" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The second step in brewing is " },
                { blank: "fermentation" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Wild " },
                { blank: "yeast" },
                { text: " converts sugars into alcohol." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "European brewers began adding " },
                { blank: "hops" },
                { text: " to improve flavor and preserve beer." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The Reinheitsgebot stated that beer should contain " },
                { blank: "barley" },
                { text: ", hops, and water." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Louis Pasteur discovered the role of " },
                { blank: "yeast" },
                { text: " in beer fermentation." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Today there are more than " },
                { blank: "100" },
                { text: " different varieties of beer." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Lagers ferment at " },
                { blank: "colder" },
                { text: " temperatures than ales." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },
      unscramble: {
        instruction: "Unscramble the sentences.",
        exercise: {
          items: shuffle([
            {
              prompt: "beer / fermented / grains / is / from / made",
              answer: "Beer is made from fermented grains.",
            },
            {
              prompt: "wild / alcohol / yeast / into / sugars / converts",
              answer: "Wild yeast converts sugars into alcohol.",
            },
            {
              prompt: "help / preserve / hops / beer",
              answer: "Hops help preserve beer.",
            },
            {
              prompt: "identified / Pasteur / role / yeast's / Louis",
              answer: "Louis Pasteur identified yeast's role.",
            },
            {
              prompt: "at / colder / ferment / lagers / temperatures",
              answer: "Lagers ferment at colder temperatures.",
            },
            {
              prompt: "than / beer / water / safer / was / often",
              answer: "Beer was often safer than water.",
            },
          ]),
        },
      },
    },
    followUp: {
      list: {
        type: "ol" as const,
        instruction:
          "Complete the tasks. Organize information coherently and support evaluations with details from the video.",
        items: [
          {
            content: [
              "Reconstruct the development of brewing from early cereal mixtures to controlled modern production. Select the turning points that matter most.",
            ],
          },
          {
            content: [
              "Explain the causal stages of fermentation and how temperature, yeast, and ingredients affect the result.",
            ],
          },
          {
            content: [
              "Evaluate how scientific knowledge changed beer production. Discuss one benefit and one possible trade-off between standardization and tradition.",
            ],
          },
        ],
      },
    },
  },
};
