import { content, mark, underline } from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "runoff", phonetic: "/ˈrʌn.ɔːf/", img: 0 },
  { word: "roots", phonetic: "/ruːts/", img: 0 },
  { word: "pollutants", phonetic: "/pəˈluː.t̬ənts/", img: 0 },
  { word: "shade", phonetic: "/ʃeɪd/", img: 0 },
  { word: "resilience", phonetic: "/rɪˈzɪl.jəns/", img: 0 },
  { word: "biodiversity", phonetic: "/ˌbaɪ.oʊ.daɪˈvɝː.sə.t̬i/", img: 0 },
  { word: "vertical garden", phonetic: "/ˈvɝː.t̬ə.kəl ˈɡɑːr.dən/", img: 0 },
  { word: "landmass", phonetic: "/ˈlænd.mæs/", img: 0 },
];

export const whyCitiesNeedTrees = {
  metadata: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    description: "Why Cities Need Trees",
  },
  whiteboard: {
    title: "C1-C2 Videos",
    descriptions: ["Why Cities Need Trees"],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          content: [
            "What practical problems can a city face if it has too few trees?",
          ],
        },
        {
          content: [
            "Do you think trees are mainly decorative in cities, or are they part of urban infrastructure? Why?",
          ],
        },
        {
          content: [
            "Which city do you think is more comfortable to live in: a very green city or a highly built-up one? Explain.",
          ],
        },
      ],
    },
    vocabulary: {
      words,
    },
    gist: {
      videoPlayer: {
        videoId: "zarll9bx6FI",
        title: "What happens if you cut down all of a city's trees?",
        instruction: "Watch the video and answer the question.",
      },
      radio: {
        exercise: {
          questions: [
            {
              question: "What is the video mainly about?",
              options: shuffle([
                {
                  option:
                    "Why trees are essential to urban health, infrastructure, and long-term planning.",
                  isCorrect: true,
                },
                {
                  option:
                    "Why ancient cities failed because they built too many parks.",
                  isCorrect: false,
                },
                {
                  option:
                    "How to replace public transport with vertical gardens.",
                  isCorrect: false,
                },
                {
                  option:
                    "Why modern cities should avoid planting large trees.",
                  isCorrect: false,
                },
              ]),
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
                "What happened in Uruk when farmers cut down trees to expand agriculture?",
              options: shuffle([
                {
                  option:
                    "Its irrigation system became contaminated and the soil became too salty.",
                  isCorrect: true,
                },
                {
                  option:
                    "Its population immediately moved to another region.",
                  isCorrect: false,
                },
                {
                  option:
                    "Its forests expanded and protected the water supply.",
                  isCorrect: false,
                },
                {
                  option: "Its air quality improved for several centuries.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "Why did Anuradhapura protect and plant additional trees?",
              options: shuffle([
                {
                  option:
                    "Because trees were sacred and integrated into the city's life.",
                  isCorrect: true,
                },
                {
                  option: "Because the city had no irrigation system.",
                  isCorrect: false,
                },
                {
                  option:
                    "Because foreign traders required tree planting by law.",
                  isCorrect: false,
                },
                {
                  option: "Because the city had no space for crops.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "How do tree roots help cities?",
              options: shuffle([
                {
                  option:
                    "They protect against mudslides, retain water, and help prevent floods.",
                  isCorrect: true,
                },
                {
                  option:
                    "They raise air temperature and reduce soil stability.",
                  isCorrect: false,
                },
                {
                  option:
                    "They replace the need for all roads and bridges.",
                  isCorrect: false,
                },
                {
                  option:
                    "They store electricity for nearby neighborhoods.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "Why did Manhattan become especially dangerous during summer heat waves in the 1870s?",
              options: shuffle([
                {
                  option:
                    "Without enough trees, buildings absorbed much more solar radiation and the heat worsened sanitation problems.",
                  isCorrect: true,
                },
                {
                  option:
                    "Because its parks were completely removed after a storm.",
                  isCorrect: false,
                },
                {
                  option:
                    "Because most buildings were underground and trapped humidity.",
                  isCorrect: false,
                },
                {
                  option:
                    "Because its water system was designed around forest parks.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "What problem does Hong Kong illustrate in the video?",
              options: shuffle([
                {
                  option:
                    "Dense construction can make it hard for trees to grow, contributing to poor air quality.",
                  isCorrect: true,
                },
                {
                  option:
                    "It has too many parks and too little public transport.",
                  isCorrect: false,
                },
                {
                  option:
                    "Its citizens refuse to walk to nearby green spaces.",
                  isCorrect: false,
                },
                {
                  option:
                    "Its trees increase the risk of cholera in hospitals.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "What makes Singapore the strongest modern example in the video?",
              options: shuffle([
                {
                  option:
                    "It has planted over 1.2 million trees and now has vegetation covering over 50% of its landmass.",
                  isCorrect: true,
                },
                {
                  option:
                    "It banned all new buildings after 1967.",
                  isCorrect: false,
                },
                {
                  option:
                    "It replaced all parks with underground water systems.",
                  isCorrect: false,
                },
                {
                  option:
                    "It depends entirely on imported oxygen from forests abroad.",
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
                "This is the tale of two ancient cities and the trees that determined their destinies.",
              ],
            }),
          ],
          pt: "Esta é a história de duas cidades antigas e das árvores que determinaram seus destinos.",
        },
        {
          en: [
            ...content({
              parts: [
                "In ",
                underline("3000 BC"),
                ", Uruk was more densely populated than modern-day New York City and had to keep expanding its irrigation system to feed its growing population.",
              ],
            }),
          ],
          pt: "Em 3000 a.C., Uruk era mais densamente povoada do que a atual cidade de Nova York e precisava expandir continuamente seu sistema de irrigação para alimentar sua população crescente.",
        },
        {
          en: [
            ...content({
              parts: [
                "About ",
                underline("2,500 years later"),
                ", Anuradhapura in Sri Lanka faced a similar challenge, but the two cities responded in very different ways.",
              ],
            }),
          ],
          pt: "Cerca de 2.500 anos depois, Anuradhapura, no Sri Lanka, enfrentou um desafio semelhante, mas as duas cidades reagiram de maneiras muito diferentes.",
        },
        {
          en: [
            ...content({
              parts: [
                "As Uruk grew, farmers chopped down trees to make room for more crops. In Anuradhapura, however, trees were ",
                mark("sacred"),
                ", and this respect encouraged the city to preserve and even plant more of them.",
              ],
            }),
          ],
          pt: "À medida que Uruk crescia, os agricultores derrubavam árvores para abrir espaço para mais plantações. Em Anuradhapura, porém, as árvores eram sagradas, e esse respeito incentivou a cidade a preservá-las e até a plantar mais.",
        },
        {
          en: [
            ...content({
              parts: [
                "At first, Uruk's expansion seemed successful. But without trees to filter the water supply, the irrigation system became ",
                mark("contaminated"),
                ", and mineral deposits eventually made the soil too salty for agriculture.",
              ],
            }),
          ],
          pt: "No início, a expansão de Uruk parecia bem-sucedida. Mas, sem árvores para filtrar o abastecimento de água, o sistema de irrigação foi contaminado, e os depósitos minerais acabaram deixando o solo salgado demais para a agricultura.",
        },
        {
          en: [
            ...content({
              parts: [
                "By contrast, Anuradhapura's irrigation system worked together with the surrounding forest, and the city eventually grew to more than twice Uruk's population.",
              ],
            }),
          ],
          pt: "Em contraste, o sistema de irrigação de Anuradhapura funcionava em conjunto com a floresta ao redor, e a cidade acabou crescendo para mais do que o dobro da população de Uruk.",
        },
        {
          en: [
            ...content({
              parts: [
                "Trees act like a natural sponge, absorbing storm-water ",
                mark("runoff"),
                " before releasing it back into the atmosphere.",
              ],
            }),
          ],
          pt: "As árvores agem como uma esponja natural, absorvendo o escoamento da água da chuva antes de liberá-la de volta para a atmosfera.",
        },
        {
          en: [
            ...content({
              parts: [
                "Their ",
                mark("roots"),
                " protect against mudslides, help soil retain water, filter out toxins, and reduce the need for storm drains and water treatment plants.",
              ],
            }),
          ],
          pt: "Suas raízes protegem contra deslizamentos de terra, ajudam o solo a reter água, filtram toxinas e reduzem a necessidade de galerias pluviais e estações de tratamento.",
        },
        {
          en: [
            ...content({
              parts: [
                "Their leaves also purify the air by trapping carbon and other ",
                mark("pollutants"),
                ", which makes them important in the fight against climate change.",
              ],
            }),
          ],
          pt: "Suas folhas também purificam o ar ao capturar carbono e outros poluentes, o que as torna importantes no combate às mudanças climáticas.",
        },
        {
          en: [
            ...content({
              parts: [
                "In the 1870s, Manhattan had few trees outside its parks. Without enough ",
                mark("shade"),
                ", buildings absorbed far more solar radiation during deadly heat waves.",
              ],
            }),
          ],
          pt: "Na década de 1870, Manhattan tinha poucas árvores fora de seus parques. Sem sombra suficiente, os prédios absorviam muito mais radiação solar durante ondas de calor mortais.",
        },
        {
          en: [
            ...content({
              parts: [
                "In modern Hong Kong, dense skyscrapers and underground infrastructure make it difficult for trees to grow, contributing to poor air quality and related health problems.",
              ],
            }),
          ],
          pt: "Na Hong Kong atual, arranha-céus densos e infraestrutura subterrânea dificultam o crescimento das árvores, contribuindo para a má qualidade do ar e problemas de saúde relacionados.",
        },
        {
          en: [
            ...content({
              parts: [
                "Urban trees also support mental health. Research shows that green foliage can improve attention and reduce stress, and even hospital patients recover faster when they can see trees.",
              ],
            }),
          ],
          pt: "As árvores urbanas também favorecem a saúde mental. Pesquisas mostram que a presença de folhagem verde pode melhorar a atenção e reduzir o estresse, e até pacientes em hospitais se recuperam mais rápido quando conseguem ver árvores.",
        },
        {
          en: [
            ...content({
              parts: [
                "City planners have recognized this for centuries. Savannah was designed so that no neighborhood was more than a two-minute walk from a park, and Copenhagen later increased urban ",
                mark("resilience"),
                " by directing development along green corridors.",
              ],
            }),
          ],
          pt: "Os urbanistas reconhecem isso há séculos. Savannah foi planejada para que nenhum bairro ficasse a mais de dois minutos a pé de um parque, e Copenhague mais tarde aumentou a resiliência urbana ao direcionar o desenvolvimento ao longo de corredores verdes.",
        },
        {
          en: [
            ...content({
              parts: [
                "Trees also protect urban ",
                mark("biodiversity"),
                ". Portland's Forest Park supports many local species, and Singapore has planted over ",
                underline("1.2 million trees"),
                ", including those in 50-meter-tall ",
                mark("vertical gardens"),
                " called supertrees.",
              ],
            }),
          ],
          pt: "As árvores também protegem a biodiversidade urbana. O Forest Park de Portland abriga muitas espécies locais, e Singapura plantou mais de 1,2 milhão de árvores, incluindo as que estão em jardins verticais de 50 metros de altura chamados supertrees.",
        },
        {
          en: [
            ...content({
              parts: [
                "Today, vegetation covers more than ",
                underline("50% of Singapore's landmass"),
                ", reducing the need for air conditioning and encouraging lower-pollution transportation.",
              ],
            }),
          ],
          pt: "Hoje, a vegetação cobre mais de 50% da área territorial de Singapura, reduzindo a necessidade de ar-condicionado e incentivando meios de transporte menos poluentes.",
        },
        {
          en: [
            ...content({
              parts: [
                "By 2050, more than 65% of the world's population is expected to live in cities, so greener planning may be essential for making urban life healthier and more sustainable.",
              ],
            }),
          ],
          pt: "Até 2050, espera-se que mais de 65% da população mundial viva em cidades, então um planejamento mais verde pode ser essencial para tornar a vida urbana mais saudável e sustentável.",
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
                { text: "Tree " },
                { blank: "roots" },
                { text: " help hold soil in place during heavy rain." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Without enough " },
                { blank: "shade" },
                { text: ", city streets can become dangerously hot." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Storm-water " },
                { blank: "runoff" },
                { text: " can overwhelm drainage systems." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Trees trap airborne " },
                { blank: "pollutants" },
                { text: " and help clean the air." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Urban forests can improve " },
                { blank: "biodiversity" },
                { text: " by creating habitats for many species." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "A city with strong environmental planning may show greater " },
                { blank: "resilience" },
                { text: " after disasters." },
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
                { text: "In Anuradhapura, trees were considered " },
                { blank: "sacred" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Without trees, Uruk's irrigation system became " },
                { blank: "contaminated" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Green corridors can increase a city's " },
                { blank: "resilience" },
                { text: " to pollution and natural disasters." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Singapore built tall " },
                { blank: "supertrees" },
                { text: " that help support a greener city." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Trees can filter toxins and improve air " },
                { blank: "quality" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Vegetation covers over half of Singapore's " },
                { blank: "landmass" },
                { text: "." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },
      unscramble: {
        instruction: "Unscramble the ideas from the lesson.",
        sentences: shuffle([
          {
            prompt: "like a sponge / storm-water runoff / trees absorb",
            answer: "Trees absorb storm-water runoff like a sponge.",
          },
          {
            prompt: "filter out toxins / roots help / the soil and water",
            answer: "Roots help filter out toxins in the soil and water.",
          },
          {
            prompt: "few trees / Manhattan / outside its parks / had",
            answer: "Manhattan had few trees outside its parks.",
          },
          {
            prompt: "over 1.2 million / Singapore / has planted / trees",
            answer: "Singapore has planted over 1.2 million trees.",
          },
          {
            prompt: "urban trees / protect / and infrastructure / public health",
            answer: "Urban trees protect public health and infrastructure.",
          },
        ]),
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
              "Which benefit of urban trees seems most urgent in your city: cleaner air, cooler temperatures, better water management, or mental health support? Explain.",
            ],
          },
          {
            content: [
              "Do you think cities should treat trees as essential infrastructure in the same way they treat roads, drains, and public transport? Why?",
            ],
          },
          {
            content: [
              "If your neighborhood had funding for only one green project, what would you choose and how would you justify it?",
            ],
          },
        ],
      },
    },
  },
};
