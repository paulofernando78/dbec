import { audio, content, mark, phonetics, underline } from "@/helpers/content";
import { shuffle } from "@/utils/shuffle";

// Palavras e conceitos-chave extraídos diretamente da legenda
const words = [
  { word: "recipe", phonetic: "/ˈresəpi/", img: 1 },
  { word: "settler", phonetic: "/ˈsetlər/", img: 1 },
  { word: "patent", phonetic: "/ˈpæt.ənt/", img: 0 },
  { word: "trade", phonetic: "/ˈtreɪd/", img: 1 },
  { word: "vendor", phonetic: "/ˈvɛndər/", img: 0 },
  {
    word: "soda fountain",
    phonetic: "/ˈsoʊdə ˌfaʊntən/",
    img: 1,
  },
  {
    word: "refrigeration",
    phonetic: "/rɪˌfrɪdʒ.əˈreɪ.ʃən/",
    img: 0,
  },
];

export const howDidAncientCivilizationsMakeIceCream = {
  metadata: {
    title: "Authentic Content",
    subtitle: "Ted-ED",
    description: "The History of a Popular Ice Treat",
  },

  whiteboard: {
    title: "Authentic Content",
    subtitle: "Ted-ED",
    descriptions: ["The History of a Popular Ice Treat"],
  },

  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          content: [
            "How do you think ancient civilizations kept drinks and desserts cold before electric refrigerators existed?",
          ],
        },
        {
          content: [
            "Why do you think ice cream was historically a luxury dessert reserved only for the elite?",
          ],
        },
        {
          content: [
            "What unusual ice cream flavors (like vegetable or spice flavors) have you heard of or tried?",
          ],
        },
      ],
    },

    vocabulary: {
      words: words,
      matchingContent: shuffle(
        words.map(({ word, phonetic }) => ({
          as: "span" as const,
          parts: [audio(word), word, " ", phonetics(phonetic)],
        })),
      ),
    },

    gist: {
      videoPlayer: {
        instruction: "Watch the video and answer the question.",
        videoId: "7K3KdgDcdYc",
        title: "How did ancient civilizations make ice cream? - Vivian Jiang",
      },

      radio: {
        exercise: {
          questions: shuffle([
            {
              question: "What is the main topic of the video?",
              options: [
                {
                  option:
                    "A detailed biography of Cuban leader Fidel Castro and his favorite foods.",
                  isCorrect: false,
                },
                {
                  option:
                    "Instructions on how to build a soda fountain in your own home.",
                  isCorrect: false,
                },
                {
                  option:
                    "The history of ice cream, its technological developments, and how it became popular worldwide.",
                  isCorrect: true,
                },
                {
                  option:
                    "The economic conflict between European settlers and Asian traders.",
                  isCorrect: false,
                },
              ],
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
              question:
                "Why did the CIA's 1963 plot to poison Fidel Castro's milkshake fail?",
              options: shuffle([
                {
                  option:
                    "The poison pill froze to the freezer coils and broke.",
                  isCorrect: true,
                },
                {
                  option:
                    "Fidel Castro decided not to order ice cream that day.",
                  isCorrect: false,
                },
                {
                  option: "The waiter accidentally dropped the milkshake.",
                  isCorrect: false,
                },
                {
                  option:
                    "The CIA agents were caught before entering the hotel.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "How did ancient Persians freeze water in shallow pools at night?",
              options: shuffle([
                {
                  option:
                    "By utilizing a technique called sky cooling, radiating heat into the desert sky.",
                  isCorrect: true,
                },
                {
                  option:
                    "By importing snow from the high Mediterranean mountains.",
                  isCorrect: false,
                },
                {
                  option:
                    "By mixing large amounts of salt into the water pools.",
                  isCorrect: false,
                },
                {
                  option: "By using early mechanical ice machines.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "Who recorded a milk-based recipe in 1692 that historians call the first ice cream?",
              options: shuffle([
                { option: "Antonio Latini", isCorrect: true },
                { option: "Nancy Johnson", isCorrect: false },
                { option: "Frederic Tudor", isCorrect: false },
                { option: "George Washington", isCorrect: false },
              ]),
            },
            {
              question:
                "What happened when the sale of alcohol was banned in America in 1920?",
              options: shuffle([
                {
                  option:
                    "Saloons turned into soda fountains and breweries started producing ice cream.",
                  isCorrect: true,
                },
                {
                  option:
                    "Ice cream sales dropped dramatically across North America.",
                  isCorrect: false,
                },
                {
                  option: "Street vendors were banned from selling ice cream.",
                  isCorrect: false,
                },
                {
                  option:
                    "People stopped going to drugstores for social meetings.",
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
            ...content({
              parts: [
                "On a hot spring afternoon in 1963, two men, sent by the American CIA, snuck into the cafeteria of the Havana Libre Hotel. Their directive was to retrieve a poison pill from the freezer and slip it into the chocolate milkshake of Fidel Castro, the Cuban leader who was known to devour up to 18 scoops of ice cream after lunch. While exact details of the story are contested, it's rumored that the pill, however, froze to the freezer coils and broke, foiling the CIA’s plan and granting Castro many more days to satiate his sweet tooth.",
              ],
            }),
          ],
          pt: "Numa tarde quente de primavera de 1963, dois homens, enviados pela CIA americana, entraram sorrateiramente na cafeteria do Hotel Havana Libre. A missão deles era pegar uma pílula de veneno no congelador e colocá-la no milkshake de chocolate de Fidel Castro, o líder cubano que era conhecido por devorar até 18 bolas de sorvete depois do almoço. Embora os detalhes exatos da história sejam contestados, há rumores de que a pílula, no entanto, congelou nas serpentinas do congelador e se quebrou, frustrando o plano da CIA e dando a Castro muitos mais dias para satisfazer seu gosto por doces.",
        },
        {
          en: [
            ...content({
              parts: [
                "Ice cream has held a unique role in our world’s history, culture, and cravings— but where did it come from? The first accounts of cold desserts and iced drinks date back as early as the first century. In civilizations including ancient Rome, Mughal India, and Tang dynasty China, these icy treats were mainly enjoyed by the royal elites.",
              ],
            }),
          ],
          pt: "O sorvete desempenhou um papel único na história, cultura e desejos do nosso mundo — mas de onde ele veio? Os primeiros relatos de sobremesas frias e bebidas geladas datam do primeiro século. Em civilizações como a Roma antiga, a Índia Mughal e a China da dinastia Tang, essas guloseimas geladas eram apreciadas principalmente pelas elites reais.",
        },
        {
          en: [
            ...content({
              parts: [
                "And finding the means to freeze these delicacies wasn’t always easy. Wealthy Mediterranean nobility sent laborers to trek up high mountains to harvest glacial ice and snow. Meanwhile, ancient Persians built shallow insulated pools of water and utilized a technique known as sky cooling. At night, the shallow pools would naturally radiate heat into the dry desert skies, causing them to dip below the ambient temperature and freeze.",
              ],
            }),
          ],
          pt: "E encontrar meios para congelar essas iguarias nem sempre era fácil. A rica nobreza mediterrânea enviava trabalhadores para escalar altas montanhas a fim de colher gelo glacial e neve. Enquanto isso, os antigos persas construíram piscinas rasas e isoladas com água e utilizaram uma técnica conhecida como resfriamento pelo céu. À noite, as poças rasas irradiariam naturalmente calor para o céu seco do deserto, fazendo com que sua temperatura caísse abaixo da temperatura ambiente e congelasse.",
        },
        {
          en: [
            ...content({
              parts: [
                "Yet the cream-based treat we know today made a much later debut. It was originally inspired by sherbet, or sharbat in Arabic, an icy drink believed to have originated in Persia, and subsequently gained popularity in the Middle Ages. European travelers brought sharbat recipes home, and began creating their own chocolate, pinecone, and even eggplant flavored takes on the refreshment.",
              ],
            }),
          ],
          pt: "No entanto, a guloseima à base de creme que conhecemos hoje surgiu muito mais tarde. Originalmente, foi inspirado no sherbet, ou sharbat em árabe, uma bebida gelada que se acredita ter se originado na Pérsia e que posteriormente ganhou popularidade na Idade Média. Os viajantes europeus trouxeram receitas de sharbat para casa e começaram a criar suas próprias versões da bebida, com sabores de chocolate, pinha e até berinjela.",
        },
        {
          en: [
            ...content({
              parts: [
                "In 1692, Antonio Latini, a Neapolitan chef, recorded a recipe for a unique milk-based version, which some historians dub the first ice cream. In the 18th century, ice cream expanded its reach as these recipes set sail alongside European settlers to North America. Yet it was still mainly enjoyed by the upper classes as the process to make it was quite laborious, and its main ingredients— sugar, salt, and cream— were expensive. George Washington is said to have spent the equivalent of $6,600 in today’s dollars on ice cream in one summer alone.",
              ],
            }),
          ],
          pt: "Em 1692, Antonio Latini, um chef napolitano, registrou uma receita para uma versão única à base de leite, que alguns historiadores consideram o primeiro sorvete. No século XVIII, o sorvete expandiu seu alcance à medida que essas receitas viajaram com os colonizadores europeus para a América do Norte. No entanto, ainda era apreciado principalmente pelas classes mais altas, pois o processo de preparo era bastante trabalhoso e seus principais ingredientes — açúcar, sal e creme — eram caros. Diz-se que George Washington gastou o equivalente a 6.600 dólares em valores atuais apenas com sorvete durante um único verão.",
        },
        {
          en: [
            ...content({
              parts: [
                "It was on American soil that the frozen dessert entered its golden age, as inventors and entrepreneurs began to engineer ways to bring it to the masses. In Philadelphia in 1843, Nancy Johnson patented a revolutionary ice cream-making machine featuring a crank and beater, which made the process easier for any home cook. And storing ice cream was no longer an obstacle, as by the mid-1830s, New England businessman “Ice King” Frederic Tudor had greatly improved the ice trade, shipping thousands of tons of ice to households across the globe. Soon, ice cream was on every street corner.",
              ],
            }),
          ],
          pt: 'Foi em solo americano que a sobremesa gelada entrou em sua era de ouro, à medida que inventores e empreendedores começaram a desenvolver maneiras de levá-la às massas. Em Filadélfia, em 1843, Nancy Johnson patenteou uma revolucionária máquina de fazer sorvete com uma manivela e um batedor, o que tornou o processo mais fácil para qualquer cozinheiro doméstico. E armazenar sorvete deixou de ser um obstáculo, pois em meados da década de 1830, o empresário da Nova Inglaterra, "Rei do Gelo", Frederic Tudor, havia melhorado muito o comércio de gelo, enviando milhares de toneladas de gelo para residências em todo o mundo. Em pouco tempo, havia sorvete em cada esquina.',
        },
        {
          en: [
            ...content({
              parts: [
                "In the late 1880s, political turmoil brought Italian immigrants to cities like London, Glasgow, and New York, where many took up jobs as street vendors selling licks of ice cream for roughly a penny each. Meanwhile, American druggists discovered the appeal of combining soda, a drink thought to have therapeutic properties at the time, with ice cream, and a new social spot was born: the soda fountain.",
              ],
            }),
          ],
          pt: "No final da década de 1880, a turbulência política levou imigrantes italianos a cidades como Londres, Glasgow e Nova Iorque, onde muitos começaram a trabalhar como vendedores ambulantes, vendendo pequenas porções de sorvete por cerca de um centavo cada. Entretanto, os farmacêuticos americanos descobriram o apelo da combinação de refrigerante, uma bebida que na época era considerada terapêutica, com sorvete, e assim nasceu um novo ponto de encontro social: a fonte de refrigerantes.",
        },
        {
          en: [
            ...content({
              parts: [
                "When the sale of alcohol was banned in 1920, many American saloons reinvented themselves as soda fountains, and breweries like Anheuser-Busch and Yuengling pivoted to producing ice cream. At the same time, refrigeration technology was improving rapidly. By the end of World War II, the average American home had a freezer that could house a quart of ice cream. Even trucks could be equipped with freezers full of frozen treats.",
              ],
            }),
          ],
          pt: "Quando a venda de álcool foi proibida em 1920, muitos bares americanos se reinventaram como sorveterias, e cervejarias como a Anheuser-Busch e a Yuengling passaram a produzir sorvetes. Ao mesmo tempo, a tecnologia de refrigeração estava melhorando rapidamente. Ao final da Segunda Guerra Mundial, a casa americana média possuía um congelador com capacidade para um litro de sorvete. Até mesmo caminhões poderiam ser equipados com congeladores cheios de guloseimas congeladas.",
        },
        {
          en: [
            ...content({
              parts: [
                "Today, ice cream continues to take on new forms. And while some of its mysteries may never be solved, one thing is certain: our love for ice cream will never thaw.",
              ],
            }),
          ],
          pt: "Hoje em dia, o sorvete continua a assumir novas formas. E embora alguns de seus mistérios talvez nunca sejam resolvidos, uma coisa é certa: nosso amor por sorvete jamais derreterá.",
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
                { text: "The earliest recorded ice cream " },
                { blank: "recipe" },
                { text: " appeared in the seventeenth century." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "A European " },
                { blank: "settler" },
                { text: " could encounter new ingredients in America." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Nancy Johnson received a " },
                { blank: "patent" },
                { text: " for her ice cream machine." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The international ice " },
                { blank: "trade" },
                { text: " made frozen desserts easier to store." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "An Italian street " },
                { blank: "vendor" },
                { text: " sold small servings of ice cream." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The " },
                { blank: "soda fountain" },
                { text: " became a popular social meeting place." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Modern " },
                { blank: "refrigeration" },
                { text: " transformed the production of frozen desserts." },
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
                { text: "The frozen poison pill broke, ultimately " },
                { blank: "foiling" },
                { text: " the assassination plan." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Making ice cream remained a highly " },
                { blank: "laborious" },
                { text: " process for the upper classes." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "During Prohibition, several breweries " },
                { blank: "pivoted" },
                { text: " to producing ice cream." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The pools could fall below the " },
                { blank: "ambient" },
                { text: " temperature during the night." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Political " },
                { blank: "turmoil" },
                { text: " drove many Italian immigrants to other cities." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Carbonated drinks were believed to possess " },
                { blank: "therapeutic" },
                { text: " properties." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },

      unscramble: {
        instruction:
          "Unscramble the sentences using vocabulary from the video.",
        exercise: {
          items: shuffle([
            {
              prompt:
                "an unexpected failure / the agents' mission / ended up / foiling",
              answer:
                "An unexpected failure ended up foiling the agents' mission.",
            },
            {
              prompt:
                "for mountain workers / harvesting glacial ice / a laborious task / was",
              answer:
                "Harvesting glacial ice was a laborious task for mountain workers.",
            },
            {
              prompt:
                "during Prohibition / breweries / toward frozen desserts / pivoted",
              answer:
                "Breweries pivoted toward frozen desserts during Prohibition.",
            },
            {
              prompt:
                "below ambient temperature / during clear nights / the desert pools / cooled",
              answer:
                "The desert pools cooled below ambient temperature during clear nights.",
            },
            {
              prompt: "many families / political turmoil / to migrate / forced",
              answer: "Political turmoil forced many families to migrate.",
            },
            {
              prompt:
                "as having therapeutic properties / promoted / druggists / soda water",
              answer:
                "Druggists promoted soda water as having therapeutic properties.",
            },
          ]),
        },
      },
    },

    followUp: {
      list: {
        type: "ol" as const,
        instruction:
          "Discuss the questions below, using ideas and examples from the video.",
        items: [
          {
            content: [
              "To what extent did technological innovation democratize ice cream consumption?",
            ],
          },
          {
            content: [
              "Which had a greater influence on the popularity of ice cream: technological progress, migration, or changing social habits? Justify your answer.",
            ],
          },
          {
            content: [
              "The history of ice cream involves cultural exchange between Persia, Europe, and North America. When does cultural adaptation become cultural appropriation?",
            ],
          },
          {
            content: [
              "How might the environmental cost of modern refrigeration change the way frozen products are produced and transported in the future?",
            ],
          },
          {
            content: [
              "If you had to create an unconventional ice cream flavor, which ingredient would you choose, and how would you persuade consumers to try it?",
            ],
          },
        ],
      },
    },
  },
};
