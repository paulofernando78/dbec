import type { GrammarExercise } from "./types";

export const remainingGrammarExercises = {
  "verb-be-present-past": [
    {
      id: "be-context", title: "1. Presente ou passado?", type: "radio",
      instruction: "Escolha a forma correta do verbo be de acordo com o sujeito e o contexto.",
      questions: [
        { question: "My parents ___ at work now.", options: [{ option: "is" }, { option: "are", isCorrect: true }, { option: "was" }] },
        { question: "The test ___ very difficult yesterday.", options: [{ option: "is" }, { option: "were" }, { option: "was", isCorrect: true }] },
        { question: "I ___ nervous before the presentation last week.", options: [{ option: "am" }, { option: "was", isCorrect: true }, { option: "were" }] },
        { question: "Where ___ the students this morning?", options: [{ option: "was" }, { option: "were", isCorrect: true }, { option: "are being" }] },
      ],
    },
    {
      id: "be-form", title: "2. Formação", type: "fill", showWordBank: false,
      instruction: "Complete com am, is, are, was ou were. Use a forma negativa quando necessário.",
      blocks: [
        { block: [{ text: "Julia " }, { blank: "is" }, { text: " my best friend. (be)" }] },
        { block: [{ text: "We " }, { blank: ["were not", "weren't"] }, { text: " at school yesterday. (not be)" }] },
        { block: [{ blank: "Are" }, { text: " you ready for the exam? (be)" }] },
        { block: [{ text: "The books " }, { blank: "were" }, { text: " on the desk this morning. (be)" }] },
      ],
    },
    {
      id: "be-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "She are very tired today.", answer: "She is very tired today.", explanation: "Com she, use is." },
        { sentence: "Did he be at home yesterday?", answer: "Was he at home yesterday?", explanation: "O verbo be não usa did; ele próprio vai para o início da pergunta." },
        { sentence: "They wasn't late for class.", answer: ["They were not late for class.", "They weren't late for class."], explanation: "Com they no passado, use were ou weren't." },
        { sentence: "I is responsible for the project.", answer: "I am responsible for the project.", explanation: "Com I no presente, use am." },
      ],
    },
  ],

  "simple-present": [
    {
      id: "simple-present-use", title: "1. Hábitos e fatos", type: "radio",
      instruction: "Escolha a alternativa adequada para hábitos, rotinas e fatos gerais.",
      questions: [
        { question: "Marina ___ English every evening.", options: [{ option: "study" }, { option: "studies", isCorrect: true }, { option: "is study" }] },
        { question: "Water ___ at 100°C at sea level.", options: [{ option: "boils", isCorrect: true }, { option: "is boiling" }, { option: "boil" }] },
        { question: "My brothers ___ coffee in the morning.", options: [{ option: "drinks" }, { option: "drink", isCorrect: true }, { option: "drinking" }] },
        { question: "Which sentence expresses a routine?", options: [{ option: "She is reading now." }, { option: "She reads before bed.", isCorrect: true }, { option: "She read yesterday." }] },
      ],
    },
    {
      id: "simple-present-form", title: "2. Formação", type: "fill", showWordBank: false,
      instruction: "Complete com a forma correta do simple present.",
      blocks: [
        { block: [{ text: "He " }, { blank: "watches" }, { text: " the news every night. (watch)" }] },
        { block: [{ text: "We " }, { blank: ["do not live", "don't live"] }, { text: " near the school. (not live)" }] },
        { block: [{ blank: "Does she speak" }, { text: " Spanish? (she / speak)" }] },
        { block: [{ text: "The bus " }, { blank: "leaves" }, { text: " at seven. (leave)" }] },
      ],
    },
    {
      id: "simple-present-errors", title: "3. Erros frequentes", type: "error-correction",
      items: [
        { sentence: "He don't like mathematics.", answer: ["He does not like mathematics.", "He doesn't like mathematics."], explanation: "Com he, use does not ou doesn't." },
        { sentence: "Does she studies every day?", answer: "Does she study every day?", explanation: "Depois de does, o verbo volta à forma base." },
        { sentence: "My sister go to school by bus.", answer: "My sister goes to school by bus.", explanation: "Na terceira pessoa do singular, acrescente -s ou -es." },
        { sentence: "They doesn't understand the question.", answer: ["They do not understand the question.", "They don't understand the question."], explanation: "Com they, use do not ou don't." },
      ],
    },
  ],

  "simple-past": [
    {
      id: "simple-past-use", title: "1. Ações concluídas", type: "radio",
      instruction: "Escolha a forma correta para ações concluídas em um tempo passado definido.",
      questions: [
        { question: "We ___ the museum last Saturday.", options: [{ option: "visit" }, { option: "visited", isCorrect: true }, { option: "have visited" }] },
        { question: "She ___ her keys two hours ago.", options: [{ option: "loses" }, { option: "lost", isCorrect: true }, { option: "has lost yesterday" }] },
        { question: "Which sequence is correct?", options: [{ option: "He woke up, ate breakfast and left.", isCorrect: true }, { option: "He wakes up, ate breakfast and left." }, { option: "He did woke up and left." }] },
        { question: "___ you see the film yesterday?", options: [{ option: "Did", isCorrect: true }, { option: "Do" }, { option: "Were" }] },
      ],
    },
    {
      id: "simple-past-form", title: "2. Verbos regulares e irregulares", type: "fill", showWordBank: false,
      instruction: "Complete com a forma correta do simple past.",
      blocks: [
        { block: [{ text: "They " }, { blank: "arrived" }, { text: " early yesterday. (arrive)" }] },
        { block: [{ text: "I " }, { blank: "went" }, { text: " to the library after class. (go)" }] },
        { block: [{ text: "Laura " }, { blank: ["did not buy", "didn't buy"] }, { text: " the book. (not buy)" }] },
        { block: [{ blank: "Did they finish" }, { text: " the project on time? (they / finish)" }] },
      ],
    },
    {
      id: "simple-past-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "Did you went to class yesterday?", answer: "Did you go to class yesterday?", explanation: "Depois de did, use a forma base do verbo." },
        { sentence: "She didn't understood the text.", answer: ["She did not understand the text.", "She didn't understand the text."], explanation: "Depois de didn't, use understand, não understood." },
        { sentence: "We studyed for the test.", answer: "We studied for the test.", explanation: "Em verbos terminados em consoante + y, troque y por i antes de -ed." },
        { sentence: "He buyed a new computer last month.", answer: "He bought a new computer last month.", explanation: "Buy é irregular: seu passado é bought." },
      ],
    },
  ],

  "present-perfect": [
    {
      id: "present-perfect-choice", title: "1. Present perfect ou simple past?", type: "radio",
      instruction: "Observe os marcadores temporais e escolha o tempo verbal adequado.",
      questions: [
        { question: "I ___ that film three times.", options: [{ option: "saw yesterday" }, { option: "have seen", isCorrect: true }, { option: "am seeing" }] },
        { question: "She ___ to Salvador in 2024.", options: [{ option: "has gone" }, { option: "went", isCorrect: true }, { option: "has went" }] },
        { question: "We ___ our homework yet.", options: [{ option: "didn't finish" }, { option: "haven't finished", isCorrect: true }, { option: "don't finished" }] },
        { question: "Which sentence refers to an unfinished period?", options: [{ option: "I read two books last month." }, { option: "I have read two books this month.", isCorrect: true }, { option: "I was reading two books." }] },
      ],
    },
    {
      id: "present-perfect-form", title: "2. Formação e particípios", type: "fill", showWordBank: false,
      instruction: "Complete com have/has e o past participle correto.",
      blocks: [
        { block: [{ text: "He " }, { blank: ["has already finished", "has finished"] }, { text: " the report. (finish)" }] },
        { block: [{ text: "They " }, { blank: ["have never visited", "haven't visited"] }, { text: " London. (visit)" }] },
        { block: [{ blank: "Have you ever eaten" }, { text: " sushi? (you / eat)" }] },
        { block: [{ text: "My teacher " }, { blank: "has written" }, { text: " three books. (write)" }] },
      ],
    },
    {
      id: "present-perfect-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "She has went to the library.", answer: "She has gone to the library.", explanation: "O past participle de go é gone." },
        { sentence: "I have seen him yesterday.", answer: "I saw him yesterday.", explanation: "Yesterday indica tempo passado encerrado; use simple past." },
        { sentence: "Did you ever visit Argentina?", answer: "Have you ever visited Argentina?", explanation: "Para experiência de vida sem tempo definido, use present perfect." },
        { sentence: "He haven't finished yet.", answer: ["He has not finished yet.", "He hasn't finished yet."], explanation: "Com he, use has ou hasn't." },
      ],
    },
  ],

  "modal-verbs": [
    {
      id: "modals-meaning", title: "1. Sentido e intenção", type: "radio",
      instruction: "Escolha o modal que expressa corretamente capacidade, conselho, obrigação ou possibilidade.",
      questions: [
        { question: "You ___ wear a seat belt. It is required by law.", options: [{ option: "might" }, { option: "must", isCorrect: true }, { option: "could" }] },
        { question: "You look tired. You ___ rest.", options: [{ option: "should", isCorrect: true }, { option: "mustn't" }, { option: "can" }] },
        { question: "It ___ rain later, but the forecast is uncertain.", options: [{ option: "must" }, { option: "might", isCorrect: true }, { option: "shouldn't" }] },
        { question: "When she was five, she ___ read very well.", options: [{ option: "could", isCorrect: true }, { option: "can" }, { option: "must" }] },
      ],
    },
    {
      id: "modals-form", title: "2. Estrutura dos modais", type: "fill", showWordBank: false,
      instruction: "Complete com o modal indicado e o verbo na forma base.",
      blocks: [
        { block: [{ text: "Students " }, { blank: "must follow" }, { text: " the rules. (obrigação / follow)" }] },
        { block: [{ text: "You " }, { blank: ["should not skip", "shouldn't skip"] }, { text: " breakfast. (conselho negativo / skip)" }] },
        { block: [{ blank: "Could you help" }, { text: " me, please? (pedido educado / help)" }] },
        { block: [{ text: "She " }, { blank: "may be" }, { text: " at home now. (possibilidade / be)" }] },
      ],
    },
    {
      id: "modals-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "He can to swim very fast.", answer: "He can swim very fast.", explanation: "Depois de um modal, use o verbo sem to." },
        { sentence: "She musts finish the work.", answer: "She must finish the work.", explanation: "Modais não recebem -s na terceira pessoa." },
        { sentence: "You don't should worry.", answer: ["You should not worry.", "You shouldn't worry."], explanation: "A negativa é formada diretamente com modal + not." },
        { sentence: "Maybe he late for class.", answer: "Maybe he is late for class.", explanation: "Maybe é advérbio; a oração ainda precisa de verbo. May be são duas palavras quando funcionam como verbo." },
      ],
    },
  ],

  "conditionals": [
    {
      id: "conditionals-identify", title: "1. Tipos de conditional", type: "radio",
      instruction: "Escolha a estrutura adequada para fatos, possibilidades, hipóteses e situações passadas irreais.",
      questions: [
        { question: "If you heat ice, it ___.", options: [{ option: "melts", isCorrect: true }, { option: "will melt" }, { option: "would melt" }] },
        { question: "If it rains tomorrow, we ___ at home.", options: [{ option: "stay" }, { option: "will stay", isCorrect: true }, { option: "would have stayed" }] },
        { question: "If I had more time, I ___ another language.", options: [{ option: "will learn" }, { option: "would learn", isCorrect: true }, { option: "learned" }] },
        { question: "If she had studied, she ___ the exam.", options: [{ option: "would pass" }, { option: "would have passed", isCorrect: true }, { option: "will have passed" }] },
      ],
    },
    {
      id: "conditionals-form", title: "2. Formação", type: "fill", showWordBank: false,
      instruction: "Complete cada período condicional com a forma verbal correta.",
      blocks: [
        { block: [{ text: "If people " }, { blank: "do not drink" }, { text: " water, they get thirsty. (not drink)" }] },
        { block: [{ text: "If you study, you " }, { blank: "will improve" }, { text: " your grades. (improve)" }] },
        { block: [{ text: "If I " }, { blank: "were" }, { text: " you, I would accept the offer. (be)" }] },
        { block: [{ text: "If they had left earlier, they " }, { blank: ["would have caught", "'d have caught"] }, { text: " the train. (catch)" }] },
      ],
    },
    {
      id: "conditionals-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "If it will rain, we will cancel the game.", answer: "If it rains, we will cancel the game.", explanation: "No first conditional, a oração com if usa simple present." },
        { sentence: "If I was you, I would apologize.", answer: "If I were you, I would apologize.", explanation: "Em hipóteses formais com o verbo be, use were para todas as pessoas." },
        { sentence: "If she studied, she would have passed.", answer: "If she had studied, she would have passed.", explanation: "O third conditional usa if + past perfect." },
        { sentence: "If he had more money, he will travel.", answer: "If he had more money, he would travel.", explanation: "No second conditional, use would + verbo na oração principal." },
      ],
    },
  ],

  "passive-voice": [
    {
      id: "passive-recognition", title: "1. Voz ativa e passiva", type: "radio",
      instruction: "Escolha a frase passiva correta, mantendo o tempo verbal original.",
      questions: [
        { question: "People speak Portuguese in Brazil.", options: [{ option: "Portuguese speaks in Brazil." }, { option: "Portuguese is spoken in Brazil.", isCorrect: true }, { option: "Portuguese was spoken in Brazil." }] },
        { question: "The scientist discovered the cure.", options: [{ option: "The cure was discovered by the scientist.", isCorrect: true }, { option: "The cure is discovered by the scientist." }, { option: "The cure discovered the scientist." }] },
        { question: "Which sentence correctly omits an unimportant agent?", options: [{ option: "My phone was stolen.", isCorrect: true }, { option: "My phone stole." }, { option: "My phone was stole by someone." }] },
        { question: "They clean the classrooms every day.", options: [{ option: "The classrooms are cleaned every day.", isCorrect: true }, { option: "The classrooms were clean every day." }, { option: "The classrooms cleaned every day." }] },
      ],
    },
    {
      id: "passive-transform", title: "2. Transformação", type: "sentence-transformation",
      instruction: "Passe da voz ativa para a passiva. Inclua o agente somente quando ele for relevante.",
      items: [
        { sentence: "Shakespeare wrote Hamlet.", cue: "Use a voz passiva no passado.", answer: "Hamlet was written by Shakespeare." },
        { sentence: "People use smartphones worldwide.", cue: "Use a voz passiva no presente.", answer: "Smartphones are used worldwide." },
        { sentence: "The school organizes the event every year.", cue: "Mantenha o agente.", answer: "The event is organized by the school every year." },
        { sentence: "Someone broke the window last night.", cue: "Omita o agente desconhecido.", answer: "The window was broken last night." },
      ],
    },
    {
      id: "passive-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "English is speak in many countries.", answer: "English is spoken in many countries.", explanation: "A passiva usa be + past participle: spoken." },
        { sentence: "The letters were send yesterday.", answer: "The letters were sent yesterday.", explanation: "O particípio de send é sent." },
        { sentence: "The book was wrote by George Orwell.", answer: "The book was written by George Orwell.", explanation: "O particípio de write é written." },
        { sentence: "The meals is prepared every morning.", answer: "The meals are prepared every morning.", explanation: "Meals está no plural; use are." },
      ],
    },
  ],

  "reported-speech": [
    {
      id: "reported-statements", title: "1. Relato de afirmações", type: "sentence-transformation",
      instruction: "Reescreva em reported speech, considerando que o relato é posterior à fala.",
      items: [
        { sentence: "Anna said, ‘I am tired.’", answer: "Anna said that she was tired." },
        { sentence: "Pedro said, ‘I finished the project.’", answer: "Pedro said that he had finished the project." },
        { sentence: "They said, ‘We will call you.’", answer: "They said that they would call me." },
        { sentence: "Laura said, ‘I can help.’", answer: "Laura said that she could help." },
      ],
    },
    {
      id: "reported-questions-commands", title: "2. Perguntas, pedidos e ordens", type: "sentence-transformation",
      instruction: "Passe as perguntas e ordens para o discurso indireto.",
      items: [
        { sentence: "He asked me, ‘Where do you live?’", answer: "He asked me where I lived." },
        { sentence: "She asked, ‘Are you ready?’", answer: "She asked if I was ready." },
        { sentence: "The teacher said, ‘Open your books.’", answer: "The teacher told us to open our books." },
        { sentence: "My mother said, ‘Don't be late.’", answer: "My mother told me not to be late." },
      ],
    },
    {
      id: "reported-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "She said me that she was busy.", answer: "She told me that she was busy.", explanation: "Use tell + objeto; say não recebe objeto diretamente nessa estrutura." },
        { sentence: "He asked where did I live.", answer: "He asked where I lived.", explanation: "Perguntas indiretas seguem a ordem de uma afirmação, sem did." },
        { sentence: "The teacher told that we should study.", answer: "The teacher told us that we should study.", explanation: "Tell precisa indicar a pessoa que recebe a informação." },
        { sentence: "She asked me that I was tired.", answer: "She asked me if I was tired.", explanation: "Perguntas de sim ou não usam if ou whether." },
      ],
    },
  ],

  "present-perfect-progressive": [
    {
      id: "present-perfect-progressive-use", title: "1. Duração e atividade recente", type: "radio",
      instruction: "Escolha a forma que destaca duração ou uma atividade recente com efeito presente.",
      questions: [
        { question: "She ___ for the exam for three hours.", options: [{ option: "has been studying", isCorrect: true }, { option: "studied yesterday" }, { option: "is study" }] },
        { question: "Your clothes are wet. ___ in the rain?", options: [{ option: "Did you walk yesterday" }, { option: "Have you been walking", isCorrect: true }, { option: "Are you walked" }] },
        { question: "We ___ here since 8 a.m.", options: [{ option: "have been waiting", isCorrect: true }, { option: "waited last week" }, { option: "are wait" }] },
        { question: "Which marker normally introduces the starting point?", options: [{ option: "for" }, { option: "since", isCorrect: true }, { option: "ago" }] },
      ],
    },
    {
      id: "present-perfect-progressive-form", title: "2. Formação", type: "fill", showWordBank: false,
      instruction: "Complete com have/has been + verbo em -ing.",
      blocks: [
        { block: [{ text: "I " }, { blank: ["have been reading", "'ve been reading"] }, { text: " this book all afternoon. (read)" }] },
        { block: [{ text: "He " }, { blank: "has been working" }, { text: " here since January. (work)" }] },
        { block: [{ text: "They " }, { blank: ["have not been sleeping", "haven't been sleeping"] }, { text: " well lately. (not sleep)" }] },
        { block: [{ blank: "Has she been practicing" }, { text: " the piano? (she / practice)" }] },
      ],
    },
    {
      id: "present-perfect-progressive-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "She has studying since noon.", answer: "She has been studying since noon.", explanation: "A estrutura exige has been + verbo em -ing." },
        { sentence: "I have been waiting since two hours.", answer: "I have been waiting for two hours.", explanation: "Use for com duração e since com ponto inicial." },
        { sentence: "They has been working all day.", answer: "They have been working all day.", explanation: "Com they, use have." },
        { sentence: "Have you been study for long?", answer: "Have you been studying for long?", explanation: "Depois de been, use o verbo em -ing." },
      ],
    },
  ],

  "past-perfect": [
    {
      id: "past-perfect-order", title: "1. Ordem dos acontecimentos", type: "radio",
      instruction: "Identifique a ação que aconteceu primeiro e escolha a forma adequada.",
      questions: [
        { question: "When I arrived, the film ___.", options: [{ option: "already started" }, { option: "had already started", isCorrect: true }, { option: "has started" }] },
        { question: "She was tired because she ___ well the night before.", options: [{ option: "hadn't slept", isCorrect: true }, { option: "doesn't sleep" }, { option: "hasn't slept" }] },
        { question: "After they ___ dinner, they went for a walk.", options: [{ option: "had finished", isCorrect: true }, { option: "have finished" }, { option: "finish" }] },
        { question: "Which action happened first: ‘He had left before I called’ ?", options: [{ option: "I called." }, { option: "He left.", isCorrect: true }, { option: "They happened at the same time." }] },
      ],
    },
    {
      id: "past-perfect-form", title: "2. Formação", type: "fill", showWordBank: false,
      instruction: "Complete com had + past participle.",
      blocks: [
        { block: [{ text: "The train " }, { blank: "had left" }, { text: " before we reached the station. (leave)" }] },
        { block: [{ text: "I " }, { blank: ["had not seen", "hadn't seen"] }, { text: " that place before. (not see)" }] },
        { block: [{ blank: "Had she finished" }, { text: " the test when the bell rang? (she / finish)" }] },
        { block: [{ text: "They were hungry because they " }, { blank: ["had not eaten", "hadn't eaten"] }, { text: ". (not eat)" }] },
      ],
    },
    {
      id: "past-perfect-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "When we arrived, they have left.", answer: "When we arrived, they had left.", explanation: "Para uma ação anterior a outra ação passada, use past perfect." },
        { sentence: "She had went home before the storm.", answer: "She had gone home before the storm.", explanation: "O particípio de go é gone." },
        { sentence: "Had you saw the message before class?", answer: "Had you seen the message before class?", explanation: "O particípio de see é seen." },
        { sentence: "He didn't had finished the work.", answer: ["He had not finished the work.", "He hadn't finished the work."], explanation: "A negativa do past perfect é had not; não use did." },
      ],
    },
  ],

  "past-perfect-progressive": [
    {
      id: "past-perfect-progressive-use", title: "1. Duração anterior no passado", type: "radio",
      instruction: "Escolha a forma que enfatiza uma atividade contínua anterior a outro fato passado.",
      questions: [
        { question: "They ___ for an hour when the bus finally arrived.", options: [{ option: "had been waiting", isCorrect: true }, { option: "have waited" }, { option: "are waiting" }] },
        { question: "The ground was wet because it ___.", options: [{ option: "had been raining", isCorrect: true }, { option: "has rained" }, { option: "rains" }] },
        { question: "She was exhausted because she ___ all morning.", options: [{ option: "had been running", isCorrect: true }, { option: "has been running" }, { option: "will run" }] },
        { question: "Which sentence emphasizes duration before a past event?", options: [{ option: "He studied yesterday." }, { option: "He had been studying for hours when I called.", isCorrect: true }, { option: "He has studied for hours." }] },
      ],
    },
    {
      id: "past-perfect-progressive-form", title: "2. Formação", type: "fill", showWordBank: false,
      instruction: "Complete com had been + verbo em -ing.",
      blocks: [
        { block: [{ text: "We " }, { blank: ["had been studying", "'d been studying"] }, { text: " for two hours when the lights went out. (study)" }] },
        { block: [{ text: "He " }, { blank: ["had not been feeling", "hadn't been feeling"] }, { text: " well before the trip. (not feel)" }] },
        { block: [{ blank: "Had they been working" }, { text: " there for long before they moved? (they / work)" }] },
        { block: [{ text: "Her eyes were red because she " }, { blank: ["had been crying", "'d been crying"] }, { text: ". (cry)" }] },
      ],
    },
    {
      id: "past-perfect-progressive-errors", title: "3. Correção de erros", type: "error-correction",
      items: [
        { sentence: "They had waiting for thirty minutes.", answer: "They had been waiting for thirty minutes.", explanation: "A estrutura exige had been + verbo em -ing." },
        { sentence: "She had been work all day.", answer: "She had been working all day.", explanation: "Depois de been, use o verbo em -ing." },
        { sentence: "Had he been studied before the exam started?", answer: "Had he been studying before the exam started?", explanation: "A forma progressiva usa studying, não studied." },
        { sentence: "I have been sleeping for an hour when you called.", answer: "I had been sleeping for an hour when you called.", explanation: "A atividade ocorreu antes de outro fato passado; use had been." },
      ],
    },
  ],
} as const satisfies Record<string, readonly GrammarExercise[]>;
