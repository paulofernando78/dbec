import { content, mark, underline } from "@/helpers/content";
import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "sustenance", phonetic: "/ˈsʌs.tə.nəns/", img: 0 },
  { word: "lineage", phonetic: "/ˈlɪn.i.ɪdʒ/", img: 0 },
  { word: "predilection", phonetic: "/ˌpred.əlˈek.ʃən/", img: 0 },
  { word: "evade", phonetic: "/ɪˈveɪd/", img: 0 },
  { word: "volatile compound", phonetic: "/ˈvɑː.lə.t̬əl ˈkɑːm.paʊnd/", img: 0 },
  { word: "microbiome", phonetic: "/ˌmaɪ.kroʊˈbaɪ.oʊm/", img: 0 },
  { word: "repellent", phonetic: "/rɪˈpel.ənt/", img: 0 },
  { word: "transmission", phonetic: "/trænzˈmɪʃ.ən/", img: 0 },
];

export const theUnseenInvitation = {
  metadata: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    description: "The Unseen Invitation",
  },
  whiteboard: {
    title: "C1-C2 Videos",
    descriptions: ["The Unseen Invitation"],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        { content: ["Why might two people in the same place experience very different encounters with the natural world?"] },
        { content: ["Which invisible signals can animals use to locate humans or other animals?"] },
        { content: ["How can understanding animal behavior contribute to public health?"] },
      ],
    },
    vocabulary: { words },
    gist: {
      videoPlayer: {
        videoId: "V6rRifwIaio",
        title: "Why mosquitoes bite some people more than others - Maria Elena De Obaldia",
        instruction: "Watch the video and answer the question.",
      },
      radio: {
        exercise: {
          questions: [{
            question: "What is the video mainly about?",
            options: shuffle([
              { option: "Why some people attract more mosquitoes and how this knowledge could improve disease prevention.", isCorrect: true },
              { option: "Why all mosquito species prefer human blood to every other food source.", isCorrect: false },
              { option: "How cities can eliminate mosquitoes by removing every source of standing water.", isCorrect: false },
              { option: "Why blood type is the only reliable predictor of mosquito bites.", isCorrect: false },
            ]),
          }],
        },
      },
    },
    details: {
      radio: {
        instruction: "Watch again and listen for specific information.",
        exercise: {
          questions: shuffle([
            {
              question: "Why do mosquitoes bite humans?",
              options: shuffle([
                { option: "Mosquitoes like to annoy us.", isCorrect: false },
                { option: "Our blood tastes sweet to mosquitoes.", isCorrect: false },
                { option: "Female mosquitoes need nutrients from blood to develop their eggs.", isCorrect: true },
                { option: "Mosquitoes will die if they do not bite a human during their lifetime.", isCorrect: false },
              ]),
            },
            {
              question: "Which of these diseases is spread by mosquitoes?",
              options: shuffle([
                { option: "Chickenpox", isCorrect: false },
                { option: "Lyme disease", isCorrect: false },
                { option: "Malaria", isCorrect: true },
                { option: "Poison ivy", isCorrect: false },
              ]),
            },
            {
              question: "Why do scientists think that some mosquitoes evolved to bite humans?",
              options: shuffle([
                { option: "They like the same foods as humans.", isCorrect: false },
                { option: "Human blood is more nutritious than blood from other animals.", isCorrect: false },
                { option: "Human settlements provided reliable access to standing water, which mosquitoes need to reproduce.", isCorrect: true },
                { option: "Humans are easy targets because they do not defend themselves against bites.", isCorrect: false },
              ]),
            },
            {
              question: "How do female mosquitoes detect odors?",
              options: shuffle([
                { option: "Through receptors in their mouthparts.", isCorrect: false },
                { option: "Through odor receptors in hair-like structures on their antennae.", isCorrect: true },
                { option: "Through smell receptors on their wings.", isCorrect: false },
                { option: "Through receptors in their legs only.", isCorrect: false },
              ]),
            },
          ]),
        },
      },
    },
    script: {
      content: [
        {
          en: [...content({ parts: ["Some people seem to be hunted by mosquitoes while companions sitting nearby remain untouched. The question is whether that difference is real—and, if it is, what causes it."] })],
          pt: "Algumas pessoas parecem ser perseguidas por mosquitos enquanto companheiros sentados por perto permanecem intocados. A questão é se essa diferença é real e, caso seja, o que a provoca.",
        },
        {
          en: [...content({ parts: ["It begins with how and why mosquitoes find us. Males rely on nectar for ", mark("sustenance"), ", whereas females also seek blood to obtain nutrients for their eggs."] })],
          pt: "Tudo começa com como e por que os mosquitos nos encontram. Os machos dependem do néctar para se alimentar, enquanto as fêmeas também procuram sangue para obter nutrientes para seus ovos.",
        },
        {
          en: [...content({ parts: ["Different species evolved to feed on different animals. Within roughly the last ", underline("10,000 years"), ", several mosquito ", mark("lineages"), " independently developed a ", mark("predilection"), " for humans."] })],
          pt: "Diferentes espécies evoluíram para se alimentar de animais distintos. Aproximadamente nos últimos 10 mil anos, várias linhagens de mosquitos desenvolveram, de forma independente, uma preferência por seres humanos.",
        },
        {
          en: [...content({ parts: ["Permanent settlements helped that adaptation. Even during severe dry seasons, containers and standing water around people allowed mosquitoes to reproduce throughout the year."] })],
          pt: "Os assentamentos permanentes favoreceram essa adaptação. Mesmo durante períodos de seca intensa, recipientes e água parada próximos às pessoas permitiam que os mosquitos se reproduzissem o ano inteiro.",
        },
        {
          en: [...content({ parts: ["A female mosquito's antennae carry hair-like structures with odor receptors. Human-seeking species became highly efficient at locating us, biting where we are unlikely to notice, and using visual cues and changes in air movement to ", mark("evade"), " our attempts to swat them."] })],
          pt: "As antenas de uma fêmea possuem estruturas semelhantes a pelos com receptores de odores. As espécies que procuram humanos se tornaram muito eficientes em nos localizar, picar onde dificilmente percebemos e usar sinais visuais e mudanças no ar para escapar de nossas tentativas de abatê-las.",
        },
        {
          en: [...content({ parts: ["They may even learn to avoid people who defend themselves particularly well. Before reaching that point, however, several signals reveal that a potential host is nearby."] })],
          pt: "Elas podem até aprender a evitar pessoas que se defendem especialmente bem. Antes de chegar a esse ponto, porém, vários sinais revelam que um possível hospedeiro está próximo.",
        },
        {
          en: [...content({ parts: ["Females can detect the carbon dioxide in human breath from about ", underline("ten meters away"), ". Once alerted, they become interested in dark, high-contrast objects and wavelengths associated with human skin."] })],
          pt: "As fêmeas conseguem detectar o dióxido de carbono da respiração humana a cerca de dez metros de distância. Depois desse alerta, elas se interessam por objetos escuros de alto contraste e por comprimentos de onda associados à pele humana.",
        },
        {
          en: [...content({ parts: ["As they follow the carbon-dioxide trail, body heat and odor provide more information. Microorganisms living on our skin break down sweat and oils, producing ", mark("volatile compounds"), " that mosquitoes can detect."] })],
          pt: "Ao seguir a trilha de dióxido de carbono, o calor corporal e o odor fornecem mais informações. Microrganismos que vivem em nossa pele decompõem suor e óleos, produzindo compostos voláteis que os mosquitos conseguem detectar.",
        },
        {
          en: [...content({ parts: ["Sweating, drinking alcohol, and pregnancy can temporarily make someone more attractive. The malaria parasite can also alter an infected person's skin chemistry, increasing the likelihood of another mosquito visit."] })],
          pt: "Suar, consumir álcool e estar grávida podem tornar alguém temporariamente mais atraente. O parasita da malária também pode alterar a química da pele de uma pessoa infectada, aumentando a probabilidade da visita de outro mosquito.",
        },
        {
          en: [...content({ parts: ["Beyond these temporary effects, studies suggest that roughly ", underline("20% of people"), " are naturally more attractive. Carbon dioxide and heat identify a warm-blooded animal, but the body's unique odor helps distinguish one individual from another."] })],
          pt: "Além desses efeitos temporários, estudos sugerem que cerca de 20% das pessoas são naturalmente mais atraentes. O dióxido de carbono e o calor identificam um animal de sangue quente, mas o odor corporal único ajuda a distinguir um indivíduo de outro.",
        },
        {
          en: [...content({ parts: ["Each person's skin ", mark("microbiome"), " produces a distinctive chemical profile. Experiments indicate that specific mosquito receptors are essential for recognizing humans and that higher levels of certain skin acids are associated with stronger attraction."] })],
          pt: "O microbioma da pele de cada pessoa produz um perfil químico distinto. Experimentos indicam que receptores específicos dos mosquitos são essenciais para reconhecer seres humanos e que níveis mais altos de certos ácidos da pele estão associados a uma atração maior.",
        },
        {
          en: [...content({ parts: ["Genetics may help determine this microbial community. Mosquitoes show similar attraction to identical twins, while their responses to fraternal twins are less consistent."] })],
          pt: "A genética pode ajudar a determinar essa comunidade microbiana. Os mosquitos demonstram atração semelhante por gêmeos idênticos, enquanto suas respostas a gêmeos fraternos são menos consistentes.",
        },
        {
          en: [...content({ parts: ["The aim is not merely to prove that some people are mosquito magnets. Mosquito-borne diseases kill hundreds of thousands every year, and protective resources do not always reach those at greatest risk."] })],
          pt: "O objetivo não é apenas provar que algumas pessoas são ímãs de mosquitos. Doenças transmitidas por esses insetos matam centenas de milhares de pessoas todos os anos, e os recursos de proteção nem sempre chegam a quem corre maior risco.",
        },
        {
          en: [...content({ parts: ["The findings could support more effective ", mark("repellents"), " that alter skin microbes or mask attractive odors. They could also help direct bed nets, vaccines, diagnostic tests, and treatment toward people who need them most."] })],
          pt: "As descobertas podem contribuir para repelentes mais eficazes que alterem os micróbios da pele ou escondam odores atraentes. Também podem ajudar a direcionar mosquiteiros, vacinas, testes diagnósticos e tratamentos a quem mais precisa.",
        },
        {
          en: [...content({ parts: ["The result would mean more than fewer itchy bites: targeted prevention could break cycles of disease ", mark("transmission"), " and save many lives."] })],
          pt: "O resultado significaria mais do que menos picadas com coceira: a prevenção direcionada poderia interromper ciclos de transmissão de doenças e salvar muitas vidas.",
        },
      ],
    },
    practice: {
      guess: { words: shuffle(words) },
      guessFillInTheBlanks: {
        instruction: "Complete the sentences with the words from the Guess activity.",
        exercise: { blocks: shuffle([
          { block: [{ text: "Nectar provides " }, { blank: "sustenance" }, { text: " for male mosquitoes." }], lineBreak: true },
          { block: [{ text: "A biological " }, { blank: "lineage" }, { text: " connects organisms through descent." }], lineBreak: true },
          { block: [{ text: "Some species developed a " }, { blank: "predilection" }, { text: " for human hosts." }], lineBreak: true },
          { block: [{ text: "Mosquitoes use sensory cues to " }, { blank: "evade" }, { text: " a defensive hand." }], lineBreak: true },
          { block: [{ text: "The skin " }, { blank: "microbiome" }, { text: " helps shape a person's distinctive odor." }], lineBreak: true },
          { block: [{ text: "An effective " }, { blank: "repellent" }, { text: " can reduce exposure to insect bites." }], lineBreak: true },
          { block: [{ text: "Prevention can interrupt disease " }, { blank: "transmission" }, { text: "." }], lineBreak: true },
        ]) },
      },
      fillInTheBlanks: {
        instruction: "Fill in the blanks with the correct word from the video.",
        exercise: { blocks: shuffle([
          { block: [{ text: "Female mosquitoes need nutrients for their " }, { blank: "eggs" }, { text: "." }], lineBreak: true },
          { block: [{ text: "They can detect carbon dioxide from about ten " }, { blank: "meters" }, { text: " away." }], lineBreak: true },
          { block: [{ text: "Microorganisms break down sweat and skin " }, { blank: "oils" }, { text: "." }], lineBreak: true },
          { block: [{ text: "Roughly twenty percent of people may be especially " }, { blank: "attractive" }, { text: "." }], lineBreak: true },
          { block: [{ text: "Identical twins show more similar patterns than " }, { blank: "fraternal" }, { text: " twins." }], lineBreak: true },
          { block: [{ text: "Better prevention could save many " }, { blank: "lives" }, { text: "." }], lineBreak: true },
        ]) },
      },
      unscramble: {
        instruction: "Unscramble the ideas from the lesson.",
        sentences: shuffle([
          { prompt: "blood / female mosquitoes / for their eggs / seek", answer: "Female mosquitoes seek blood for their eggs." },
          { prompt: "carbon dioxide / from a distance / mosquitoes / detect", answer: "Mosquitoes detect carbon dioxide from a distance." },
          { prompt: "distinctive odors / skin microbes / produce", answer: "Skin microbes produce distinctive odors." },
          { prompt: "may influence / mosquito attraction / genetics", answer: "Genetics may influence mosquito attraction." },
          { prompt: "disease transmission / targeted prevention / can reduce", answer: "Targeted prevention can reduce disease transmission." },
        ]),
      },
    },
    followUp: {
      list: {
        type: "ol" as const,
        instruction: "Discuss the questions below, using ideas and evidence from the video.",
        items: [
          { content: ["Why do you think mosquito-borne diseases are only common in some parts of the world?"] },
          { content: ["What can be done to stop the transmission of mosquito-borne diseases?"] },
          { content: ["What could you do to understand what makes some people mosquito magnets? How have scientists used gene-editing technology to study this question?"] },
        ],
      },
    },
  },
};
