import { content, mark, underline } from "@/helpers/content";
import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "virion", phonetic: "/ˈvɪr.i.ɑːn/", img: 0 },
  { word: "mammal", phonetic: "/ˈmæm.əl/", img: 0 },
  { word: "saliva", phonetic: "/səˈlaɪ.və/", img: 0 },
  { word: "axon", phonetic: "/ˈæk.sɑːn/", img: 0 },
  {
    word: "blood-brain barrier",
    phonetic: "/ˌblʌd ˈbreɪn ˌber.i.ɚ/",
    img: 0,
  },
  { word: "paralysis", phonetic: "/pəˈræl.ə.sɪs/", img: 0 },
  { word: "hydrophobia", phonetic: "/ˌhaɪ.drəˈfoʊ.bi.ə/", img: 0 },
  { word: "prophylaxis", phonetic: "/ˌproʊ.fəˈlæk.sɪs/", img: 0 },
];

export const theSilentRaceToTheBrain = {
  metadata: {
    title: "C1-C2 Videos",
    subtitle: "TED-Ed",
    description: "The Silent Race to the Brain",
  },
  whiteboard: {
    title: "C1-C2 Videos",
    descriptions: ["The Silent Race to the Brain"],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          content: [
            "Why can the same infectious disease be preventable before symptoms appear but extremely difficult to treat afterward?",
          ],
        },
        {
          content: [
            "How might the location of an animal bite affect the speed at which an infection develops?",
          ],
        },
        {
          content: [
            "What should someone do immediately after possible exposure to a dangerous animal-borne disease?",
          ],
        },
      ],
    },
    vocabulary: { words },
    gist: {
      videoPlayer: {
        videoId: "gePOX4nbMU4",
        title:
          "Why is getting bitten by a rabid animal so dangerous? - Charles Rupprecht",
        instruction: "Watch the video and answer the question.",
      },
      radio: {
        exercise: {
          questions: [
            {
              question: "What is the main purpose of the video?",
              options: shuffle([
                {
                  option:
                    "To explain how rabies reaches the nervous system, why symptoms are so dangerous, and why early prevention is essential.",
                  isCorrect: true,
                },
                {
                  option:
                    "To compare the hunting behavior of dogs, bats, foxes, and raccoons.",
                  isCorrect: false,
                },
                {
                  option:
                    "To argue that every animal bite leads to the same infectious disease.",
                  isCorrect: false,
                },
                {
                  option:
                    "To describe a new treatment that cures rabies after symptoms begin.",
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
              question: "Which animals maintain Lyssaviruses over long periods?",
              options: shuffle([
                { option: "Bat populations", isCorrect: true },
                { option: "Only domestic cats", isCorrect: false },
                { option: "Reptiles and amphibians", isCorrect: false },
                { option: "Fish populations", isCorrect: false },
              ]),
            },
            {
              question: "How does the virus usually enter a new host?",
              options: shuffle([
                {
                  option:
                    "Virus-carrying saliva enters tissue through a bite or contact with a vulnerable area.",
                  isCorrect: true,
                },
                {
                  option: "It passes through intact skin from the air.",
                  isCorrect: false,
                },
                {
                  option: "It is transmitted only through contaminated food.",
                  isCorrect: false,
                },
                {
                  option: "It develops naturally inside every mammal.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "Why can an infection near the head progress faster?",
              options: shuffle([
                {
                  option:
                    "The virus has a shorter route through nerve cells to the brain.",
                  isCorrect: true,
                },
                {
                  option: "The skin is always thinner near the head.",
                  isCorrect: false,
                },
                {
                  option: "Vaccines cannot be given above the shoulders.",
                  isCorrect: false,
                },
                {
                  option: "The blood moves more slowly in that area.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "Why is the immune system less effective once the virus reaches nerve cells?",
              options: shuffle([
                {
                  option:
                    "Nerve cells shelter the virus, and the blood-brain barrier limits access for immune cells and treatments.",
                  isCorrect: true,
                },
                {
                  option:
                    "The nervous system permanently stops producing blood.",
                  isCorrect: false,
                },
                {
                  option: "The virus becomes a harmless bacterium.",
                  isCorrect: false,
                },
                {
                  option: "Immune cells cannot recognize any virus.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "What does hydrophobia involve in people with rabies?",
              options: shuffle([
                {
                  option:
                    "Painful throat spasms that make swallowing water difficult.",
                  isCorrect: true,
                },
                {
                  option: "An allergy to all liquids.",
                  isCorrect: false,
                },
                {
                  option: "A temporary loss of hearing near water.",
                  isCorrect: false,
                },
                {
                  option: "A preference for very cold drinks.",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "When are rabies vaccinations most effective?",
              options: shuffle([
                {
                  option:
                    "Before symptoms develop and the virus reaches the central nervous system.",
                  isCorrect: true,
                },
                {
                  option: "Only after paralysis begins.",
                  isCorrect: false,
                },
                {
                  option: "Only several years after exposure.",
                  isCorrect: false,
                },
                {
                  option: "After the patient enters a coma.",
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
                "In 1885, nine-year-old Joseph Meister survived an attack by a rabid dog. His mother took him to Louis Pasteur, whose experimental vaccine offered a narrow chance of survival.",
              ],
            }),
          ],
          pt: "Em 1885, Joseph Meister, de nove anos, sobreviveu ao ataque de um cão com raiva. Sua mãe o levou até Louis Pasteur, cuja vacina experimental oferecia uma pequena chance de sobrevivência.",
        },
        {
          en: [
            ...content({
              parts: [
                "Rabies is caused by viruses in the Lyssavirus genus. These viruses attack the nervous system of a ",
                mark("mammal"),
                ", and bats are especially important long-term hosts.",
              ],
            }),
          ],
          pt: "A raiva é causada por vírus do gênero Lyssavirus. Esses vírus atacam o sistema nervoso de mamíferos, e os morcegos são hospedeiros especialmente importantes a longo prazo.",
        },
        {
          en: [
            ...content({
              parts: [
                "An infection begins when virus-laden ",
                mark("saliva"),
                " reaches vulnerable tissue. A bite is the clearest route, but a lick near the eyes, mouth, or an open wound can also create exposure.",
              ],
            }),
          ],
          pt: "Uma infecção começa quando saliva com o vírus alcança um tecido vulnerável. Uma mordida é a forma mais evidente, mas uma lambida perto dos olhos, da boca ou de uma ferida aberta também pode causar exposição.",
        },
        {
          en: [
            ...content({
              parts: [
                "Inside the host, each virus particle—called a ",
                mark("virion"),
                "—begins moving toward the brain. The virus may remain hidden for days, months, or occasionally much longer before symptoms appear.",
              ],
            }),
          ],
          pt: "Dentro do hospedeiro, cada partícula viral — chamada vírion — começa a se deslocar em direção ao cérebro. O vírus pode permanecer oculto por dias, meses ou, ocasionalmente, muito mais tempo antes do aparecimento dos sintomas.",
        },
        {
          en: [
            ...content({
              parts: [
                "Virions enter nerve cells and use transport systems along the ",
                mark("axon"),
                ". They can travel roughly ",
                underline("100 millimeters a day"),
                ", so distance from the brain can affect the timeline.",
              ],
            }),
          ],
          pt: "Os vírions entram nas células nervosas e usam os sistemas de transporte ao longo do axônio. Eles podem percorrer cerca de 100 milímetros por dia, portanto a distância até o cérebro pode afetar a evolução da doença.",
        },
        {
          en: [
            ...content({
              parts: [
                "Once the virus reaches the central nervous system, the situation changes dramatically. The ",
                mark("blood-brain barrier"),
                " makes it difficult for immune cells and medicines to reach the infection quickly.",
              ],
            }),
          ],
          pt: "Quando o vírus chega ao sistema nervoso central, a situação muda drasticamente. A barreira hematoencefálica dificulta que células de defesa e medicamentos alcancem rapidamente a infecção.",
        },
        {
          en: [
            ...content({
              parts: [
                "Early signs can resemble the flu. Later, paralytic rabies can produce weakness and ",
                mark("paralysis"),
                ", while furious rabies may cause agitation, uncontrolled movement, hallucinations, and aggression.",
              ],
            }),
          ],
          pt: "Os primeiros sinais podem se parecer com uma gripe. Mais tarde, a forma paralítica pode causar fraqueza e paralisia, enquanto a forma furiosa pode provocar agitação, movimentos descontrolados, alucinações e agressividade.",
        },
        {
          en: [
            ...content({
              parts: [
                "The virus can accumulate in salivary glands and increase saliva production. It may also cause ",
                mark("hydrophobia"),
                ", in which throat spasms make drinking painful and difficult.",
              ],
            }),
          ],
          pt: "O vírus pode se acumular nas glândulas salivares e aumentar a produção de saliva. Também pode causar hidrofobia, na qual espasmos na garganta tornam doloroso e difícil beber água.",
        },
        {
          en: [
            ...content({
              parts: [
                "After clinical symptoms begin, rabies is almost always fatal. This is why prevention must interrupt the virus before it becomes established in the nervous system.",
              ],
            }),
          ],
          pt: "Depois que os sintomas clínicos começam, a raiva é quase sempre fatal. Por isso, a prevenção precisa interromper o vírus antes que ele se estabeleça no sistema nervoso.",
        },
        {
          en: [
            ...content({
              parts: [
                "Modern pre- and post-exposure ",
                mark("prophylaxis"),
                " is highly effective when delivered in time. Anyone with a possible exposure should seek medical evaluation immediately rather than wait for symptoms.",
              ],
            }),
          ],
          pt: "A profilaxia moderna antes e depois da exposição é altamente eficaz quando aplicada a tempo. Qualquer pessoa com possível exposição deve procurar avaliação médica imediatamente, em vez de esperar pelos sintomas.",
        },
        {
          en: [
            ...content({
              parts: [
                "Rabies still causes an estimated ",
                underline("59,000 deaths each year"),
                ", and the real number may be higher where access to medical care is limited.",
              ],
            }),
          ],
          pt: "A raiva ainda causa cerca de 59 mil mortes por ano, e o número real pode ser maior em lugares onde o acesso ao atendimento médico é limitado.",
        },
        {
          en: [
            ...content({
              parts: [
                "Because the virus has many animal hosts, complete eradication is extremely difficult. Vaccination, rapid medical care, and careful investigation of possible exposure remain essential.",
              ],
            }),
          ],
          pt: "Como o vírus possui muitos hospedeiros animais, a erradicação completa é extremamente difícil. Vacinação, atendimento médico rápido e investigação cuidadosa de possíveis exposições continuam essenciais.",
        },
      ],
    },
    practice: {
      guess: { words: shuffle(words) },
      guessFillInTheBlanks: {
        instruction:
          "Complete the sentences with the words from the Guess activity.",
        exercise: {
          blocks: shuffle([
            {
              block: [
                { text: "A complete virus particle is called a " },
                { blank: "virion" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Rabies can infect any " },
                { blank: "mammal" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The virus may be transmitted through infected " },
                { blank: "saliva" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "A nerve signal travels along an " },
                { blank: "axon" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The " },
                { blank: "blood-brain barrier" },
                { text: " protects brain tissue from many substances." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Loss of voluntary movement is called " },
                { blank: "paralysis" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Painful swallowing can contribute to " },
                { blank: "hydrophobia" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Preventive medical treatment is known as " },
                { blank: "prophylaxis" },
                { text: "." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },
      fillInTheBlanks: {
        instruction: "Fill in the blanks with information from the video.",
        exercise: {
          blocks: shuffle([
            {
              block: [
                { text: "The virus travels toward the " },
                { blank: "brain" },
                { text: " through nerve cells." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Most human infections worldwide come from " },
                { blank: "dogs" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Virions can travel about 100 millimeters per " },
                { blank: "day" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Vaccination works best before clinical " },
                { blank: "symptoms" },
                { text: " appear." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Possible exposure requires prompt medical " },
                { blank: "investigation" },
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
            prompt: "through nerve cells / travels / the virus / toward the brain",
            answer: "The virus travels toward the brain through nerve cells.",
          },
          {
            prompt: "may delay / the immune response / rabies virions",
            answer: "Rabies virions may delay the immune response.",
          },
          {
            prompt: "before symptoms / is most effective / vaccination",
            answer: "Vaccination is most effective before symptoms.",
          },
          {
            prompt: "medical care / possible exposure / requires immediate",
            answer: "Possible exposure requires immediate medical care.",
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
              "Why is waiting for symptoms especially dangerous in this disease?",
            ],
          },
          {
            content: [
              "How do unequal access to vaccines and medical care affect global rabies deaths?",
            ],
          },
          {
            content: [
              "Which public-health actions could reduce exposure in communities where rabies is common?",
            ],
          },
        ],
      },
    },
  },
};
