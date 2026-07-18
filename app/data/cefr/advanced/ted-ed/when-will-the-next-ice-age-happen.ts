import { audio, content, mark, underline } from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "glacier", img: 0 },
  { word: "ice age", img: 0 },
  { word: "orbit", img: 0 },
  { word: "climate change", img: 0 },
  { word: "earth axis", img: 0 },
  { word: "carbon dioxide", img: 0 },
  { word: "fossil", img: 0 },
  { word: "temperature", img: 0 },
];

export const whenWillTheNextIceAgeHappen = {
  slug: "earths-climate-cycle",

  metadata: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    description: "Eath’s Climate Cycle",
  },
  whiteboard: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    descriptions: ["Eath’s Climate Cycle"],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below.",
      items: [
        { content: ["What do you know about Ice Ages?"] },
        {
          content: [
            "What factors do you think can change Earth's climate over thousands of years?",
          ],
        },
        {
          content: [
            "Do you think humans can influence the planet's climate? Why or why not?",
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
        videoId: "I4EZCy14te0",
        title: "When Will the Next Ice Age Happen?",
      },

      radio: {
        exercise: {
          questions: shuffle([
            {
              question: "What is the main purpose of the video?",
              options: shuffle([
                {
                  option:
                    "To explain how Earth's climate changes over time and what may affect the next Ice Age.",
                  isCorrect: true,
                },
                {
                  option:
                    "To describe the lives of mammoths during the Ice Age.",
                  isCorrect: false,
                },
                {
                  option: "To compare different planets in the Solar System.",
                  isCorrect: false,
                },
                {
                  option: "To explain how volcanoes are formed.",
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
              question: "What is the Last Glacial Maximum?",
              options: shuffle([
                {
                  option:
                    "The most recent period when huge ice sheets covered large areas of Earth.",
                  isCorrect: true,
                },
                {
                  option: "The hottest period in Earth's history.",
                  isCorrect: false,
                },
                {
                  option: "A future Ice Age.",
                  isCorrect: false,
                },
                { option: "A volcanic event.", isCorrect: false },
              ]),
            },
            {
              question:
                "Which gas is described as a major driver of Earth's climate?",
              options: shuffle([
                { option: "Carbon dioxide", isCorrect: true },
                { option: "Oxygen", isCorrect: false },
                { option: "Nitrogen", isCorrect: false },
                { option: "Hydrogen", isCorrect: false },
              ]),
            },
            {
              question:
                "What causes repeated glacial periods according to the video?",
              options: shuffle([
                {
                  option: "Cycles in Earth's movement around the Sun",
                  isCorrect: true,
                },
                { option: "Earthquakes", isCorrect: false },
                { option: "Ocean pollution", isCorrect: false },
                { option: "Meteor impacts", isCorrect: false },
              ]),
            },
            {
              question:
                "Why are scientists concerned about rising carbon dioxide levels?",
              options: shuffle([
                {
                  option: "They may accelerate global warming and ice loss.",
                  isCorrect: true,
                },
                {
                  option: "They will create a new Ice Age immediately.",
                  isCorrect: false,
                },
                { option: "They reduce sea levels.", isCorrect: false },
                { option: "They stop Earth's orbit.", isCorrect: false },
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
                "20,000 years ago, Earth was a cold place where ",
                mark("woolly mammoths"),
                " lived.",
              ],
            }),
          ],
          pt: "Há 20.000 anos, a Terra era um lugar frio onde viviam mamutes peludos.",
        },
        {
          en: [
            ...content({
              parts: [
                "Enormous ",
                mark("ice sheets"),
                ", thousands of meters thick, covered parts of North America, Asia, and Europe, a period popularly known as the Ice Age.",
              ],
            }),
          ],
          pt: "Enormes camadas de gelo, com milhares de metros de espessura, cobriam partes da América do Norte, Ásia e Europa, um período popularmente conhecido como Era do Gelo.",
        },
        {
          en: [
            ...content({
              parts: [
                "But ",
                mark("geologists"),
                " call it the ",
                mark("Last Glacial Maximum"),
                ".",
              ],
            }),
          ],
          pt: "Mas os geólogos chamam isso de Último Máximo Glacial.",
        },
        {
          en: [
            ...content({
              parts: [
                'This is because it is the most recent era in which ice covered a very extensive area, and "Ice Age" is an informal term without a simple, established definition.',
                " ",
              ],
            }),
          ],
          pt: 'Isso porque é a era mais recente em que o gelo cobriu uma área muito extensa, e "Era do Gelo" é um termo informal sem uma definição simples e estabelecida.',
        },
        {
          en: [
            ...content({
              parts: [
                "Over the last few million years, there have been approximately ten different ",
                mark("glacial periods"),
                ".",
              ],
            }),
          ],
          pt: "Nos últimos milhões de anos, houve aproximadamente dez períodos glaciais diferentes.",
        },
        {
          en: [
            ...content({
              parts: [
                "Throughout Earth's history, the climate has varied greatly.",
              ],
            }),
          ],
          pt: "Ao longo da história da Terra, o clima variou muito.",
        },
        {
          en: [
            ...content({
              parts: [
                "For hundreds of thousands of years, the planet had no ",
                mark("polar ice caps"),
                ".",
              ],
            }),
          ],
          pt: "Por centenas de milhares de anos, o planeta não teve calotas polares.",
        },
        {
          en: [
            ...content({
              parts: [
                "Without this ice, the sea level would be 70 meters higher.",
              ],
            }),
          ],
          pt: "Sem esse gelo, o nível do mar seria 70 metros mais alto.",
        },
        {
          en: [
            ...content({
              parts: [
                "At the other extreme, about 700 million years ago, Earth was almost entirely covered in ice during an event known as Snowball Earth",
              ],
            }),
          ],
          pt: 'No outro extremo, cerca de 700 milhões de anos atrás, a Terra estava quase totalmente coberta de gelo durante um evento conhecido como "Terra Bola de Neve".',
        },
        {
          en: [
            ...content({
              parts: [
                "So, what causes this immense fluctuation in the planet's climate?",
              ],
            }),
          ],
          pt: "Então, o que causa essa imensa flutuação no clima do planeta?",
        },
        {
          en: [
            ...content({
              parts: [
                "One of the main conductors in the atmosphere is ",
                mark("carbon dioxide"),
                ", a ",
                mark("greenhouse gas"),
                " that traps heat.",
              ],
            }),
          ],
          pt: "Um dos principais condutores na atmosfera é o dióxido de carbono, um gás de efeito estufa que retém o calor.",
        },
        {
          en: [
            ...content({
              parts: [
                "Natural processes such as ",
                mark("volcanism"),
                ", natural ",
                mark("chemical weathering"),
                ", and the burning of organic matter can cause enormous differences in ",
                mark("carbon dioxide"),
                " when they continue for millions of years.",
              ],
            }),
          ],
          pt: "Processos naturais como vulcanismo, intemperismo químico natural e queima de matéria orgânica podem causar enormes variações no dióxido de carbono quando continuam por milhões de anos.",
        },
        {
          en: [
            ...content({
              parts: [
                "Over thousands of years, ",
                mark("carbon dioxide"),
                " levels have remained relatively low, and repeated ",
                mark("glacial periods"),
                " have been caused by cycles of Earth's movement around the Sun.",
              ],
            }),
          ],
          pt: "Por milhares de anos, os níveis de dióxido de carbono permaneceram relativamente baixos, e períodos glaciais repetidos foram causados por ciclos do movimento da Terra ao redor do Sol.",
        },
        {
          en: [
            ...content({
              parts: [
                "As the Earth rotates, it ",
                mark("wobbles"),
                " its axis, and these changes in tilt alter the amount of sunlight that reaches each part of the surface.",
              ],
            }),
          ],
          pt: "À medida que a Terra gira, ela oscila em seu eixo, e essas mudanças na inclinação alteram a quantidade de luz solar que atinge cada parte da superfície.",
        },
        {
          en: [
            ...content({
              parts: [
                "These ",
                mark("oscillations"),
                ", combined with the planet's ",
                mark("elliptical orbit"),
                ", cause temperatures to vary depending on whether the ",
                mark("summer solstice"),
                " occurs when Earth is near or far from the Sun.",
              ],
            }),
          ],
          pt: "Essas oscilações, combinadas com a órbita elíptica do planeta, fazem com que as temperaturas variem dependendo se o solstício de verão ocorre quando a Terra está perto ou longe do Sol.",
        },
        {
          en: [
            ...content({
              parts: [
                "Approximately every 100,000 years, these factors align to create cold conditions for the next millennium.",
              ],
            }),
          ],
          pt: "Aproximadamente a cada 100.000 anos, esses fatores se alinham para criar condições frias para o próximo milênio.",
        },
        {
          en: [
            ...content({
              parts: [
                "Cool summers that aren't warm enough to melt the snow cause ice to ",
                mark("accumulate"),
                " year after year.",
              ],
            }),
          ],
          pt: "Verões frescos que não são quentes o suficiente para derreter a neve fazem com que o gelo se acumule ano após ano.",
        },
        {
          en: [
            ...content({
              parts: [
                "This layer of ice produces additional cooling by reflecting more solar energy back into space.",
              ],
            }),
          ],
          pt: "Essa camada de gelo produz resfriamento adicional ao refletir mais energia solar de volta ao espaço.",
        },
        {
          en: [
            ...content({
              parts: [
                "Simultaneously, cooling conditions transfer ",
                mark("carbon dioxide"),
                " from the atmosphere to the ocean, causing further cooling and expansion of glaciers.",
              ],
            }),
          ],
          pt: "Simultaneamente, condições de resfriamento transferem dióxido de carbono da atmosfera para o oceano, causando mais resfriamento e expansão das geleiras.",
        },
        {
          en: [
            ...content({
              parts: [
                "Approximately 20,000 years ago, these trends reversed when changes in Earth's orbit increased summer sunlight and the giant ",
                mark("ice sheets"),
                " began to melt.",
              ],
            }),
          ],
          pt: "Aproximadamente 20.000 anos atrás, essas tendências se inverteram quando mudanças na órbita da Terra aumentaram a luz solar do verão e as grandes camadas de gelo começaram a derreter.",
        },
        {
          en: [
            ...content({
              parts: [
                "Sea levels rose 130 meters and ",
                mark("carbon dioxide"),
                " was released from the ocean back into the atmosphere.",
              ],
            }),
          ],
          pt: "Os níveis do mar subiram 130 metros e o dióxido de carbono foi liberado do oceano de volta para a atmosfera.",
        },
        {
          en: [
            ...content({
              parts: [
                "By analyzing pollen and ",
                mark("marine fossils"),
                ", ",
                mark("geologists"),
                " can tell that temperatures peaked about 6,000 years ago before another change in Earth's orbit caused further cooling.",
              ],
            }),
          ],
          pt: "Analisando pólen e fósseis marinhos, os geólogos podem dizer que as temperaturas atingiram o pico há cerca de 6.000 anos antes que outra mudança na órbita da Terra causasse novo resfriamento.",
        },
        {
          en: [
            ...content({
              parts: ["So, what comes next?"],
            }),
          ],
          pt: "Então, o que vem a seguir?",
        },
        {
          en: [
            ...content({
              parts: [
                "Based on the repetitive cycle seen in the ",
                mark("climate record"),
                ", we normally expect the Earth to continue with ",
                mark("gradual"),
                " cooling for the next few thousand years.",
              ],
            }),
          ],
          pt: "Com base no ciclo repetitivo visto no registro climático, normalmente esperamos que a Terra continue com um resfriamento gradual pelos próximos milhares de anos.",
        },
        {
          en: [
            ...content({
              parts: [
                "However, this cooling reversed about 150 years ago. Why?",
              ],
            }),
          ],
          pt: "No entanto, esse resfriamento se reverteu há cerca de 150 anos. Por quê?",
        },
        {
          en: [
            ...content({
              parts: [
                "The level of ",
                mark("carbon dioxide"),
                " in the atmosphere has been increasing since the 19th century, when the use of ",
                mark("fossil fuels"),
                " increased.",
              ],
            }),
          ],
          pt: "O nível de dióxido de carbono na atmosfera tem aumentado desde o século 19, quando o uso de combustíveis fósseis cresceu.",
        },
        {
          en: [
            ...content({
              parts: [
                "We know this by studying the air bubbles that get trapped in Antarctica.",
              ],
            }),
          ],
          pt: "Sabemos disso estudando as bolhas de ar que ficam presas na Antártida.",
        },
        {
          en: [
            ...content({
              parts: [
                "This increase in ",
                mark("carbon dioxide"),
                " also ",
                mark("coincides"),
                " with a global temperature increase of almost 1°C.",
              ],
            }),
          ],
          pt: "Esse aumento no dióxido de carbono também coincide com um aumento global da temperatura de quase 1°C.",
        },
        {
          en: [
            ...content({
              parts: [
                mark("Ice cores"),
                " and ",
                mark("atmospheric monitoring stations"),
                " show us that ",
                mark("carbon dioxide"),
                " levels are rising rapidly to higher levels than at any point in the last 800,000 years.",
              ],
            }),
          ],
          pt: "Núcleos de gelo e estações de monitoramento atmosférico nos mostram que os níveis de dióxido de carbono estão subindo rapidamente para níveis mais altos do que em qualquer ponto dos últimos 800.000 anos.",
        },
        {
          en: [
            ...content({
              parts: [
                "Computers predict a temperature increase of 1 to 4 °C by 2100, depending on how much additional ",
                mark("fossil fuels"),
                " we will use.",
              ],
            }),
          ],
          pt: "Computadores preveem um aumento de temperatura de 1 a 4 °C até 2100, dependendo de quanto combustível fóssil adicional usaremos.",
        },
        {
          en: [
            ...content({
              parts: [
                "What does this mean for the ice in Greenland and Antarctica?",
              ],
            }),
          ],
          pt: "O que isso significa para o gelo na Groenlândia e na Antártida?",
        },
        {
          en: [
            ...content({
              parts: [
                "Past climate changes suggest that even a small shift can initiate a melting process that will continue for thousands of years.",
              ],
            }),
          ],
          pt: "Mudanças climáticas passadas sugerem que até mesmo uma pequena mudança pode iniciar um processo de derretimento que continuará por milhares de anos.",
        },
        {
          en: [
            ...content({
              parts: [
                "By studying past climates, scientists learn about what ",
                mark("drives"),
                " the changes in ice that have shaped our planet for millions of years.",
              ],
            }),
          ],
          pt: "Até o final deste século, espera-se que o gelo derretido eleve os níveis do mar entre 30 e 100 cm, o suficiente para impactar várias cidades costeiras e nações insulares.",
        },
        {
          en: [
            ...content({
              parts: [
                "If a warming of 4°C persists for several millennia, sea levels could rise by up to 10 meters.",
              ],
            }),
          ],
          pt: "Se um aquecimento de 4°C persistir por vários milênios, os níveis do mar podem subir até 10 metros.",
        },
        {
          en: [
            ...content({
              parts: [
                "By studying past climates, scientists learn about what drives the changes in ice that have shaped our planet for millions of years.",
              ],
            }),
          ],
          pt: "Estudando climas passados, os cientistas aprendem sobre o que impulsiona as mudanças no gelo que moldaram nosso planeta por milhões de anos.",
        },
        {
          en: [
            ...content({
              parts: [
                "Research suggests that if we act now to reduce ",
                mark("carbon dioxide"),
                " emissions quickly, we still have an opportunity to reduce ice loss and save coastal cities.",
              ],
            }),
          ],
          pt: "Pesquisas sugerem que, se agirmos agora para reduzir rapidamente as emissões de dióxido de carbono, ainda temos a oportunidade de reduzir a perda de gelo e salvar cidades costeiras.",
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
                {
                  text: "The Last Glacial Maximum was the most recent period when huge ",
                },
                { blank: "ice sheets" },
                { text: " covered large areas of Earth." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Carbon dioxide is a greenhouse gas that traps " },
                { blank: "heat" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "Repeated glacial periods are linked to Earth's movement around the ",
                },
                { blank: "Sun" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Scientists study " },
                { blank: "ice cores" },
                { text: " to measure ancient carbon dioxide levels." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Reducing carbon dioxide emissions may help reduce " },
                { blank: "ice loss" },
                { text: "." },
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
              prompt:
                "covered / huge / Earth / sheets / ice / large / areas / of",
              answer: "Huge ice sheets covered large areas of Earth.",
            },
            {
              prompt:
                "greenhouse / Carbon dioxide / traps / heat / a / gas / that / is",
              answer: "Carbon dioxide is a greenhouse gas that traps heat.",
            },
            {
              prompt: "around / Earth / the / moves / Sun",
              answer: "Earth moves around the Sun.",
            },
            {
              prompt: "scientists / study / ice cores / ancient / climate / to / understand",
              answer:
                "Scientists study ice cores to understand ancient climate.",
            },
            {
              prompt: "reduce / emissions / Carbon dioxide / should / we",
              answer: "We should reduce carbon dioxide emissions.",
            },
          ]),
        },
      },
    },
    followUp: {
      list: {
        type: "ol" as const,
        instruction: "Answer the questions.",
        items: [
          { content: ["Which fact from the video surprised you the most?"] },
          {
            content: [
              "What can individuals do to reduce carbon dioxide emissions?",
            ],
          },
          {
            content: [
              "Do you think governments are doing enough to address climate change?",
            ],
          },
        ],
      },
    },
  },
};
