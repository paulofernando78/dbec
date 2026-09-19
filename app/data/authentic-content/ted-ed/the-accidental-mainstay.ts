import { content, mark, underline } from "@/helpers/content";
import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "whimsical", phonetic: "/ˈwɪm.zɪ.kəl/", img: 0 },
  { word: "teosinte", phonetic: "/ˌteɪ.oʊˈsɪn.teɪ/", img: 0 },
  { word: "pericarp", phonetic: "/ˈper.ɪ.kɑːrp/", img: 0 },
  { word: "materialize", phonetic: "/məˈtɪr.i.ə.laɪz/", img: 0 },
  { word: "mainstay", phonetic: "/ˈmeɪn.steɪ/", img: 0 },
  { word: "roving", phonetic: "/ˈroʊ.vɪŋ/", img: 0 },
  { word: "low-brow", phonetic: "/ˌloʊˈbraʊ/", img: 0 },
  { word: "markup", phonetic: "/ˈmɑːrk.ʌp/", img: 0 },
];

export const theAccidentalMainstay = {
  metadata: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    description: "The Accidental Mainstay",
  },
  whiteboard: {
    title: "C1-C2 Videos",
    descriptions: ["The Accidental Mainstay"],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        { content: ["Which everyday products have become strongly associated with a particular place or activity?"] },
        { content: ["How can an economic crisis permanently change consumer habits?"] },
        { content: ["Why might a business reject a profitable product because of the image it wants to project?"] },
      ],
    },
    vocabulary: { words },
    gist: {
      videoPlayer: {
        videoId: "5EsICTVo2dM",
        title: "Why do we eat popcorn at the movies? - Andrew Smith",
        instruction: "Watch the video and answer the question.",
      },
      radio: {
        exercise: {
          questions: [{
            question: "What is the video mainly about?",
            options: shuffle([
              { option: "How a particular food developed scientifically, spread historically, and became commercially linked to movie theaters.", isCorrect: true },
              { option: "Why movie theaters should replace traditional snacks with healthier food.", isCorrect: false },
              { option: "How European farmers invented modern corn during the Great Depression.", isCorrect: false },
              { option: "Why all varieties of corn explode when they reach the same temperature.", isCorrect: false },
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
              question: "Where and when did people begin selectively breeding teosinte?",
              options: shuffle([
                { option: "In what is now southern Mexico, about 9,000 years ago.", isCorrect: true },
                { option: "In northern Peru, about 2,000 years ago.", isCorrect: false },
                { option: "In Europe during the late 1400s.", isCorrect: false },
                { option: "In the United States during the 1800s.", isCorrect: false },
              ]),
            },
            {
              question: "Why does a popcorn kernel burst when heated?",
              options: shuffle([
                { option: "Steam increases the internal pressure until it overcomes the pericarp's resistance.", isCorrect: true },
                { option: "Seasoning dissolves the kernel's outer shell.", isCorrect: false },
                { option: "The starch disappears and leaves the kernel hollow.", isCorrect: false },
                { option: "Heat causes air outside the kernel to force its way in.", isCorrect: false },
              ]),
            },
            {
              question: "What made preparing popcorn easier around 1837?",
              options: shuffle([
                { option: "The invention of wire-over-the-fire baskets.", isCorrect: true },
                { option: "The first microwave oven.", isCorrect: false },
                { option: "The introduction of silent films.", isCorrect: false },
                { option: "The development of thinner pericarps.", isCorrect: false },
              ]),
            },
            {
              question: "Why did many early cinema operators reject popcorn?",
              options: shuffle([
                { option: "They considered it a messy, low-brow street food that conflicted with their grand-theater image.", isCorrect: true },
                { option: "They believed its aroma would damage film equipment.", isCorrect: false },
                { option: "They could not legally sell food inside theaters.", isCorrect: false },
                { option: "They thought audiences preferred expensive meals.", isCorrect: false },
              ]),
            },
            {
              question: "Why did the Great Depression change theaters' attitude toward popcorn?",
              options: shuffle([
                { option: "It was an affordable luxury for audiences and a profitable opportunity for theaters.", isCorrect: true },
                { option: "The government required every theater to sell inexpensive food.", isCorrect: false },
                { option: "Corn became the only food available in American cities.", isCorrect: false },
                { option: "Silent movies returned and made eating less distracting.", isCorrect: false },
              ]),
            },
            {
              question: "What does the video say about modern movie-theater profits?",
              options: shuffle([
                { option: "Popcorn sales generate nearly 40% of them.", isCorrect: true },
                { option: "Ticket sales generate exactly 40% of them.", isCorrect: false },
                { option: "Microwave popcorn generates nearly 60% of them.", isCorrect: false },
                { option: "Popcorn sales no longer contribute significantly to them.", isCorrect: false },
              ]),
            },
          ]),
        },
      },
    },
    script: {
      content: [
        {
          en: [...content({ parts: ["Soft percussion and a toasted aroma accompany the violent transformation of hard seeds into cloud-like puffs. But how did people end up with such a ", mark("whimsical"), " food?"] })],
          pt: "Uma percussão suave e um aroma tostado acompanham a transformação violenta de sementes duras em flocos semelhantes a nuvens. Mas como as pessoas chegaram a um alimento tão peculiar?",
        },
        {
          en: [...content({ parts: ["All modern corn descends from a tall grass called ", mark("teosinte"), ". Indigenous people in what is now southern Mexico began selectively breeding it about ", underline("9,000 years ago"), "."] })],
          pt: "Todo o milho moderno descende de uma gramínea alta chamada teosinto. Povos indígenas do atual sul do México começaram a selecioná-la há cerca de 9 mil anos.",
        },
        {
          en: [...content({ parts: ["An ear of early teosinte produced only five to twelve small kernels. Each kernel had a hard outer shell known as the ", mark("pericarp"), ", and some varieties exploded after reaching a certain temperature."] })],
          pt: "Uma espiga do teosinto antigo produzia apenas de cinco a doze grãos pequenos. Cada grão tinha uma casca externa dura chamada pericarpo, e algumas variedades explodiam ao atingir determinada temperatura.",
        },
        {
          en: [...content({ parts: ["Water and starch are sealed inside this shell. Heat turns the moisture into steam, increasing the pressure while the solid starch becomes a gel-like substance."] })],
          pt: "Água e amido ficam selados dentro dessa casca. O calor transforma a umidade em vapor, aumentando a pressão enquanto o amido sólido se torna uma substância semelhante a gel.",
        },
        {
          en: [...content({ parts: ["Eventually, the pressure overcomes the shell's resistance. Steam and starch burst outward as a foam that rapidly cools and dries, while aromatic compounds rush into the air."] })],
          pt: "Por fim, a pressão supera a resistência da casca. Vapor e amido explodem para fora como uma espuma que esfria e seca rapidamente, enquanto compostos aromáticos se espalham pelo ar.",
        },
        {
          en: [...content({ parts: ["Indigenous American farmers also cultivated maize with larger, tastier kernels and thinner shells. Yet the hard-shelled, poppable variety persisted and spread through parts of the Americas."] })],
          pt: "Agricultores indígenas das Américas também cultivaram milho com grãos maiores e mais saborosos e cascas mais finas. Ainda assim, a variedade de casca dura capaz de estourar persistiu e se espalhou por partes das Américas.",
        },
        {
          en: [...content({ parts: ["When European colonizers arrived in the late 1400s, Indigenous peoples prepared corn in many ways. Popped corn was not a dietary staple, but European accounts recorded toasted or parched corn at some Aztec celebrations."] })],
          pt: "Quando os colonizadores europeus chegaram no final do século XV, os povos indígenas preparavam milho de muitas maneiras. O milho estourado não era um alimento básico, mas relatos europeus registraram milho tostado em algumas celebrações astecas.",
        },
        {
          en: [...content({ parts: ["Despite their initial reluctance, colonizers eventually cultivated and popped corn too. Their methods remained messy and inconsistent until wire-over-the-fire baskets appeared around ", underline("1837"), "."] })],
          pt: "Apesar da relutância inicial, os colonizadores também acabaram cultivando e estourando milho. Seus métodos continuaram bagunçados e inconsistentes até o surgimento, por volta de 1837, de cestos de arame colocados sobre o fogo.",
        },
        {
          en: [...content({ parts: ["The inexpensive and entertaining snack soon became a ", mark("mainstay"), " at public events, and hundreds of sweet and savory recipes ", mark("materialized"), "."] })],
          pt: "O lanche barato e divertido logo se tornou presença constante em eventos públicos, e centenas de receitas doces e salgadas surgiram.",
        },
        {
          en: [...content({ parts: ["At the ", underline("1893 World's Fair"), ", an inventor presented the first popcorn machine, a wagon that added seasoning while the kernels cooked. Vendors were soon ", mark("roving"), " through American streets with similar machines."] })],
          pt: "Na Feira Mundial de 1893, um inventor apresentou a primeira máquina de pipoca: uma carroça que adicionava tempero enquanto os grãos cozinhavam. Logo, vendedores circulavam pelas ruas americanas com máquinas semelhantes.",
        },
        {
          en: [...content({ parts: ["Movie theaters were a notable exception. Their operators wanted to imitate the prestige of grand theaters and considered popcorn a messy, ", mark("low-brow"), " street food."] })],
          pt: "Os cinemas eram uma exceção marcante. Seus administradores queriam imitar o prestígio dos grandes teatros e consideravam a pipoca uma comida de rua bagunçada e pouco sofisticada.",
        },
        {
          en: [...content({ parts: ["The Great Depression changed that calculation in ", underline("1929"), ". Movies offered an escape, while the recent arrival of sound made them accessible to a wider audience, including people who could not read subtitles."] })],
          pt: "A Grande Depressão mudou esse cálculo em 1929. Os filmes ofereciam uma forma de escapar da realidade, enquanto a chegada recente do som os tornava acessíveis a um público maior, incluindo pessoas que não conseguiam ler legendas.",
        },
        {
          en: [...content({ parts: ["At five or ten cents a bag, popcorn was an affordable luxury, and theater operators recognized the opportunity. Today, a medium bag may cost around sixty cents to make and sell for six dollars—a ", mark("markup"), " of roughly 1,000%."] })],
          pt: "Por cinco ou dez centavos o pacote, a pipoca era um luxo acessível, e os administradores perceberam a oportunidade. Hoje, um pacote médio pode custar cerca de sessenta centavos para produzir e ser vendido por seis dólares — um acréscimo de aproximadamente 1.000%.",
        },
        {
          en: [...content({ parts: ["Popcorn now generates nearly ", underline("40% of movie-theater profits"), ", helping offset the high prices theaters pay film studios. Its commercial value cemented the association between the snack and the cinema."] })],
          pt: "Atualmente, a pipoca gera quase 40% dos lucros dos cinemas, ajudando a compensar os altos valores pagos aos estúdios. Seu valor comercial consolidou a associação entre o lanche e o cinema.",
        },
        {
          en: [...content({ parts: ["Microwaveable popcorn created another boom in the 1980s. Today, many strains produce mushroom or butterfly shapes and have been bred for exceptional expansion—up to ", underline("fifty times"), " the kernel's original size."] })],
          pt: "A pipoca de micro-ondas provocou outro crescimento nos anos 1980. Hoje, muitas variedades produzem formatos de cogumelo ou borboleta e foram selecionadas para uma expansão excepcional — até cinquenta vezes o tamanho original do grão.",
        },
      ],
    },
    practice: {
      guess: { words: shuffle(words) },
      guessFillInTheBlanks: {
        instruction: "Complete the sentences with the words from the Guess activity.",
        exercise: { blocks: shuffle([
          { block: [{ text: "The animation gives the history a playful, " }, { blank: "whimsical" }, { text: " quality." }], lineBreak: true },
          { block: [{ text: "Modern maize developed from a grass called " }, { blank: "teosinte" }, { text: "." }], lineBreak: true },
          { block: [{ text: "Pressure must break the kernel's hard " }, { blank: "pericarp" }, { text: "." }], lineBreak: true },
          { block: [{ text: "New recipes began to " }, { blank: "materialize" }, { text: " as the snack became popular." }], lineBreak: true },
          { block: [{ text: "The product became a " }, { blank: "mainstay" }, { text: " at public events." }], lineBreak: true },
          { block: [{ text: "Mobile machines allowed " }, { blank: "roving" }, { text: " vendors to reach customers." }], lineBreak: true },
          { block: [{ text: "Cinema owners originally dismissed it as " }, { blank: "low-brow" }, { text: " street food." }], lineBreak: true },
          { block: [{ text: "The enormous " }, { blank: "markup" }, { text: " made each sale highly profitable." }], lineBreak: true },
        ]) },
      },
      fillInTheBlanks: {
        instruction: "Fill in the blanks with the correct word from the video.",
        exercise: { blocks: shuffle([
          { block: [{ text: "Moisture inside the kernel becomes " }, { blank: "steam" }, { text: "." }], lineBreak: true },
          { block: [{ text: "The solid starch changes into a gel-like " }, { blank: "substance" }, { text: "." }], lineBreak: true },
          { block: [{ text: "The first popcorn machine appeared at the 1893 World's " }, { blank: "Fair" }, { text: "." }], lineBreak: true },
          { block: [{ text: "The Great Depression began in " }, { blank: "1929" }, { text: "." }], lineBreak: true },
          { block: [{ text: "Popcorn helps theaters offset payments to film " }, { blank: "studios" }, { text: "." }], lineBreak: true },
          { block: [{ text: "Modern kernels can expand to fifty times their original " }, { blank: "size" }, { text: "." }], lineBreak: true },
        ]) },
      },
      unscramble: {
        instruction: "Unscramble the ideas from the lesson.",
        sentences: shuffle([
          { prompt: "from teosinte / modern corn / developed", answer: "Modern corn developed from teosinte." },
          { prompt: "inside the kernel / pressure / steam increases", answer: "Steam increases pressure inside the kernel." },
          { prompt: "popcorn machines / streets / vendors moved through / with", answer: "Vendors moved through streets with popcorn machines." },
          { prompt: "changed theaters' attitude / the Great Depression / toward popcorn", answer: "The Great Depression changed theaters' attitude toward popcorn." },
          { prompt: "a large share / snack sales / of theater profits / generate", answer: "Snack sales generate a large share of theater profits." },
        ]),
      },
    },
    followUp: {
      list: {
        type: "ol" as const,
        instruction: "Discuss the questions below, using ideas and evidence from the video.",
        items: [
          { content: ["Which mattered more to the product's success: technological innovation, economic conditions, or marketing? Defend your answer."] },
          { content: ["Can you identify another product that changed from being considered low-status to becoming a cultural mainstay?"] },
          { content: ["Are high concession markups fair if they help theaters cover the cost of showing films? Why or why not?"] },
        ],
      },
    },
  },
};
