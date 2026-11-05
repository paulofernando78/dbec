import type { GrammarTopic } from "./types";

export const coreGrammarTopics = [
  {
    id: "verb-be-present-past",
    title: "Verb Be: Present and Past",
    description: "Use o verbo be para identificar, descrever e localizar pessoas e coisas.",
    introduction:
      "O verbo be muda de acordo com o sujeito e conforme a frase se refere ao presente ou ao passado.",
    usages: [
      {
        title: "Presente: am, is, are",
        meaning:
          "Use am com I, is com he, she e it, e are com you, we e they.",
        pattern: "sujeito + am/is/are + complemento",
        examples: [
          { english: "I am ready.", portuguese: "Eu estou pronto." },
          { english: "They are at school.", portuguese: "Eles estão na escola." },
        ],
      },
      {
        title: "Passado: was, were",
        meaning:
          "Use was com I, he, she e it. Use were com you, we e they.",
        pattern: "sujeito + was/were + complemento",
        examples: [
          { english: "She was tired yesterday.", portuguese: "Ela estava cansada ontem." },
          { english: "We were in Recife last week.", portuguese: "Nós estávamos em Recife na semana passada." },
        ],
      },
      {
        title: "Negativas e perguntas",
        meaning:
          "Acrescente not nas negativas. Coloque be antes do sujeito para formar perguntas.",
        pattern: "sujeito + be + not · be + sujeito + complemento?",
        examples: [
          { english: "He isn't busy.", portuguese: "Ele não está ocupado." },
          { english: "Were you at home?", portuguese: "Você estava em casa?" },
        ],
      },
    ],
    quickRule:
      "O verbo be não usa do ou did: diga Is she ready? e Was he there?",
  },
  {
    id: "present-continuous",
    title: "Present Progressive",
    description: "Fale sobre ações em andamento, situações temporárias, mudanças e planos futuros.",
    introduction:
      "O present progressive, também chamado de present continuous, combina am, is ou are com um verbo terminado em -ing.",
    usages: [
      {
        title: "Ações acontecendo agora",
        meaning: "Use para algo que está acontecendo no momento da fala ou próximo dele.",
        pattern: "sujeito + am/is/are + verbo-ing",
        examples: [
          { english: "I'm studying right now.", portuguese: "Estou estudando agora." },
          { english: "They're waiting outside.", portuguese: "Eles estão esperando lá fora." },
        ],
      },
      {
        title: "Situações temporárias",
        meaning: "Use para situações verdadeiras por um período limitado.",
        pattern: "sujeito + be + verbo-ing + expressão de tempo temporária",
        examples: [
          { english: "She's working from home this week.", portuguese: "Ela está trabalhando de casa esta semana." },
          { english: "We're staying with friends.", portuguese: "Estamos hospedados com amigos." },
        ],
      },
      {
        title: "Mudanças ao longo do tempo",
        meaning: "Use para situações que estão se desenvolvendo ou mudando.",
        pattern: "sujeito + be + verbo-ing",
        examples: [
          { english: "The weather is getting warmer.", portuguese: "O clima está ficando mais quente." },
          { english: "Your English is improving.", portuguese: "Seu inglês está melhorando." },
        ],
      },
      {
        title: "Compromissos futuros",
        meaning: "Use para um plano futuro que já foi combinado ou organizado.",
        pattern: "sujeito + be + verbo-ing + tempo futuro",
        examples: [
          { english: "I'm meeting Ana tomorrow.", portuguese: "Vou encontrar a Ana amanhã." },
          { english: "We're flying on Friday.", portuguese: "Vamos viajar de avião na sexta-feira." },
        ],
      },
      {
        title: "Negativas e perguntas",
        meaning: "Acrescente not depois de be nas negativas. Coloque be antes do sujeito nas perguntas.",
        pattern: "sujeito + be + not + verbo-ing · be + sujeito + verbo-ing?",
        examples: [
          { english: "She isn't working today.", portuguese: "Ela não está trabalhando hoje." },
          { english: "Are you waiting for someone?", portuguese: "Você está esperando alguém?" },
        ],
      },
    ],
    warnings: [
      {
        title: "Verbos de estado",
        explanation:
          "Verbos que descrevem estados, como know, want, need, believe e understand, normalmente não são usados na forma progressiva.",
        examples: [
          { english: "I understand the question.", portuguese: "Eu entendo a pergunta." },
          { english: "She wants a new phone.", portuguese: "Ela quer um celular novo." },
        ],
      },
    ],
    quickRule:
      "Sempre use am, is ou are antes da forma em -ing: She is working, e não She working.",
  },
  {
    id: "simple-present",
    title: "Simple Present",
    description: "Descreva rotinas, ações repetidas, fatos e situações permanentes.",
    introduction:
      "O simple present expressa o que acontece habitualmente ou o que é verdadeiro de modo geral.",
    usages: [
      {
        title: "Hábitos e rotinas",
        meaning: "Use com expressões de frequência para ações repetidas.",
        pattern: "sujeito + verbo base · he/she/it + verbo-s",
        examples: [
          { english: "I exercise every morning.", portuguese: "Eu me exercito todas as manhãs." },
          { english: "He takes the bus to work.", portuguese: "Ele pega o ônibus para o trabalho." },
        ],
      },
      {
        title: "Fatos e situações permanentes",
        meaning: "Use para verdades gerais e estados relativamente permanentes.",
        pattern: "sujeito + verbo no simple present",
        examples: [
          { english: "Water boils at 100°C.", portuguese: "A água ferve a 100°C." },
          { english: "She lives in São Paulo.", portuguese: "Ela mora em São Paulo." },
        ],
      },
      {
        title: "Negativas e perguntas",
        meaning: "Use do ou does com a forma base do verbo principal.",
        pattern: "do/does + sujeito + verbo base? · sujeito + don't/doesn't + verbo base",
        examples: [
          { english: "Does he speak English?", portuguese: "Ele fala inglês?" },
          { english: "She doesn't drive.", portuguese: "Ela não dirige." },
        ],
      },
    ],
    quickRule:
      "Somente he, she e it recebem -s na afirmativa; depois de does ou doesn't, use o verbo na forma base.",
  },
  {
    id: "simple-past",
    title: "Simple Past",
    description: "Fale sobre ações concluídas e situações encerradas no passado.",
    introduction:
      "O simple past situa uma ação ou estado em um período já encerrado no passado.",
    usages: [
      {
        title: "Ações concluídas no passado",
        meaning: "Use a forma do passado quando a ação estiver concluída.",
        pattern: "sujeito + verbo regular-ed / forma irregular do passado",
        examples: [
          { english: "We watched a movie last night.", portuguese: "Assistimos a um filme ontem à noite." },
          { english: "She went to Salvador in July.", portuguese: "Ela foi a Salvador em julho." },
        ],
      },
      {
        title: "Sequência de ações passadas",
        meaning: "Use para acontecimentos consecutivos em uma narrativa.",
        pattern: "ação passada + ação passada + ação passada",
        examples: [
          { english: "He opened the door and walked inside.", portuguese: "Ele abriu a porta e entrou." },
          { english: "I woke up, got dressed, and left.", portuguese: "Acordei, me vesti e saí." },
        ],
      },
      {
        title: "Negativas e perguntas",
        meaning: "Use did com a forma base do verbo principal.",
        pattern: "did + sujeito + verbo base? · sujeito + didn't + verbo base",
        examples: [
          { english: "Did you call her?", portuguese: "Você ligou para ela?" },
          { english: "They didn't arrive early.", portuguese: "Eles não chegaram cedo." },
        ],
      },
    ],
    quickRule:
      "Depois de did ou didn't, use o verbo na forma base: Did she go?, e não Did she went?",
  },
  {
    id: "present-perfect",
    title: "Present Perfect",
    description: "Relacione ações e experiências passadas ao presente.",
    introduction:
      "O present perfect usa have ou has mais o particípio passado quando o resultado ou o período presente é relevante.",
    usages: [
      {
        title: "Experiências de vida",
        meaning: "Use para experiências sem informar exatamente quando aconteceram.",
        pattern: "sujeito + have/has + particípio passado",
        examples: [
          { english: "I've visited Argentina.", portuguese: "Eu já visitei a Argentina." },
          { english: "Has she ever tried sushi?", portuguese: "Ela já experimentou sushi?" },
        ],
      },
      {
        title: "Ações recentes e resultados no presente",
        meaning: "Use quando uma ação concluída apresenta um resultado no presente.",
        pattern: "have/has + just/already/not yet + particípio passado",
        examples: [
          { english: "He's just finished the report.", portuguese: "Ele acabou de terminar o relatório." },
          { english: "We haven't eaten yet.", portuguese: "Ainda não comemos." },
        ],
      },
      {
        title: "Períodos ainda não encerrados",
        meaning: "Use since para indicar o ponto inicial e for para indicar a duração.",
        pattern: "have/has + particípio passado + since/for",
        examples: [
          { english: "I've lived here for five years.", portuguese: "Moro aqui há cinco anos." },
          { english: "She's known him since 2022.", portuguese: "Ela o conhece desde 2022." },
        ],
      },
    ],
    quickRule:
      "Use o simple past com um tempo já encerrado, como yesterday ou in 2024.",
  },
  {
    id: "future-forms",
    title: "Simple Future: Will and Going To",
    description: "Escolha entre will e be going to para decisões, intenções, promessas e previsões.",
    introduction:
      "O inglês costuma usar will ou be going to para falar do futuro. A escolha depende de a ideia representar uma decisão espontânea, um plano anterior, uma promessa ou uma previsão.",
    usages: [
      {
        title: "Will: decisões, ofertas e promessas",
        meaning: "Use will para decisões tomadas no momento, ofertas, promessas e previsões baseadas em opinião.",
        pattern: "sujeito + will + verbo base",
        examples: [
          { english: "I'll help you with that.", portuguese: "Vou ajudar você com isso." },
          { english: "I think it'll be sunny.", portuguese: "Acho que fará sol." },
        ],
      },
      {
        title: "Be going to: planos e evidências",
        meaning: "Use para intenções anteriores e previsões baseadas em evidências presentes.",
        pattern: "sujeito + be + going to + verbo base",
        examples: [
          { english: "We're going to move next year.", portuguese: "Vamos nos mudar no próximo ano." },
          { english: "Look at the sky. It's going to rain.", portuguese: "Olhe para o céu. Vai chover." },
        ],
      },
      {
        title: "Negativas",
        meaning: "Coloque not depois de will ou da forma correta de be. Will not geralmente se contrai para won't.",
        pattern: "sujeito + won't + verbo base · sujeito + be + not + going to + verbo base",
        examples: [
          { english: "I won't forget your birthday.", portuguese: "Não vou esquecer seu aniversário." },
          { english: "She isn't going to buy it.", portuguese: "Ela não vai comprar isso." },
        ],
      },
      {
        title: "Perguntas",
        meaning: "Coloque will ou a forma correta de be antes do sujeito.",
        pattern: "will + sujeito + verbo base? · be + sujeito + going to + verbo base?",
        examples: [
          { english: "Will you call me later?", portuguese: "Você vai me ligar mais tarde?" },
          { english: "Are they going to travel?", portuguese: "Eles vão viajar?" },
        ],
      },
    ],
    warnings: [
      {
        title: "Will e going to nem sempre são intercambiáveis",
        explanation:
          "Use will para uma decisão tomada no momento da fala. Use going to quando o plano já existia antes da conversa ou quando uma evidência presente sustenta a previsão.",
        examples: [
          { english: "The phone is ringing. I'll answer it.", portuguese: "O telefone está tocando. Eu vou atender." },
          { english: "I've bought the tickets. We're going to travel in July.", portuguese: "Comprei as passagens. Vamos viajar em julho." },
        ],
      },
    ],
    quickRule:
      "Use will para uma decisão tomada agora ou uma opinião; use going to para uma intenção anterior ou evidência visível.",
  },
  {
    id: "prefixes-suffixes",
    title: "Prefixes and Suffixes",
    description: "Forme e compreenda palavras acrescentando elementos antes ou depois de uma palavra-base.",
    introduction:
      "Um prefixo aparece antes da palavra-base e geralmente altera seu significado. Um sufixo aparece depois da palavra-base e frequentemente altera seu significado ou sua classe gramatical.",
    usages: [
      {
        title: "Prefixos de negação e oposição",
        meaning: "Prefixos como un-, in-, im-, il-, ir- e dis- podem dar à palavra um sentido negativo ou oposto.",
        pattern: "prefixo negativo + palavra-base",
        examples: [
          { english: "This answer is incorrect.", portuguese: "Esta resposta está incorreta." },
          { english: "They disagreed with the decision.", portuguese: "Eles discordaram da decisão." },
        ],
      },
      {
        title: "Prefixos de tempo, repetição e intensidade",
        meaning: "Entre os prefixos comuns estão pre- (antes), re- (novamente), over- (em excesso) e under- (insuficiente ou abaixo).",
        pattern: "pre-/re-/over-/under- + palavra-base",
        examples: [
          { english: "Please rewrite the sentence.", portuguese: "Por favor, reescreva a frase." },
          { english: "The meat is undercooked.", portuguese: "A carne está malpassada." },
        ],
      },
      {
        title: "Sufixos de substantivos e adjetivos",
        meaning: "Sufixos como -ness, -ment e -tion frequentemente formam substantivos; -ful, -less, -able e -ous costumam formar adjetivos.",
        pattern: "palavra-base + sufixo de substantivo/adjetivo",
        examples: [
          { english: "Her kindness made everyone feel welcome.", portuguese: "A gentileza dela fez todos se sentirem bem-vindos." },
          { english: "This information is useful.", portuguese: "Esta informação é útil." },
        ],
      },
      {
        title: "Sufixos de verbos e advérbios",
        meaning: "Sufixos como -ize e -ify podem formar verbos, enquanto -ly costuma formar advérbios.",
        pattern: "palavra-base + -ize/-ify/-ly",
        examples: [
          { english: "We need to simplify the instructions.", portuguese: "Precisamos simplificar as instruções." },
          { english: "She explained it clearly.", portuguese: "Ela explicou isso claramente." },
        ],
      },
    ],
    warnings: [
      {
        title: "A grafia pode mudar",
        explanation:
          "Acrescentar um sufixo pode alterar as letras finais da palavra-base. Aprenda a palavra derivada completa em vez de acrescentar qualquer sufixo mecanicamente.",
        examples: [
          { english: "happy → happiness", portuguese: "feliz → felicidade" },
          { english: "possible → possibility", portuguese: "possível → possibilidade" },
        ],
      },
    ],
    quickRule:
      "Observe a posição: prefixos vêm antes da base; sufixos vêm depois. Em seguida, identifique como o elemento altera o sentido ou a classe gramatical.",
  },
  {
    id: "modal-verbs",
    title: "Modal Verbs",
    description: "Expresse capacidade, possibilidade, permissão, conselho e obrigação.",
    introduction:
      "Os modal verbs aparecem antes da forma base e não mudam com he, she ou it.",
    usages: [
      {
        title: "Capacidade e possibilidade",
        meaning: "Use can para capacidade e may, might ou could para possibilidade.",
        pattern: "sujeito + can/may/might/could + verbo base",
        examples: [
          { english: "She can swim.", portuguese: "Ela sabe nadar." },
          { english: "It might rain later.", portuguese: "Talvez chova mais tarde." },
        ],
      },
      {
        title: "Conselho e obrigação",
        meaning: "Use should para conselhos e must ou have to para obrigação forte.",
        pattern: "sujeito + should/must + verbo base",
        examples: [
          { english: "You should get some rest.", portuguese: "Você deveria descansar." },
          { english: "Employees must wear an ID badge.", portuguese: "Os funcionários devem usar crachá." },
        ],
      },
      {
        title: "Permissão e pedidos",
        meaning: "Use can, could ou may para pedir permissão ou fazer pedidos.",
        pattern: "can/could/may + sujeito + verbo base?",
        examples: [
          { english: "Could you open the window?", portuguese: "Você poderia abrir a janela?" },
          { english: "May I come in?", portuguese: "Posso entrar?" },
        ],
      },
    ],
    warnings: [
      {
        title: "Maybe × may be",
        explanation:
          "Maybe é uma única palavra e significa talvez. May be é o modal may seguido do verbo be na forma base.",
        examples: [
          {
            english: "Maybe she is busy.",
            portuguese: "Talvez ela esteja ocupada.",
          },
          {
            english: "She may be busy.",
            portuguese: "Ela talvez esteja ocupada.",
          },
        ],
      },
    ],
    quickRule:
      "Use o verbo na forma base depois de um modal: She can drive, e não She can drives.",
  },
  {
    id: "conditionals",
    title: "Conditionals",
    description: "Descreva fatos, possibilidades, situações imaginárias e arrependimentos do passado.",
    introduction:
      "As orações condicionais relacionam uma condição, apresentada pela oração com if, ao seu resultado.",
    usages: [
      {
        title: "Zero e first conditional",
        meaning: "Use a zero conditional para fatos gerais e a first conditional para possibilidades futuras reais.",
        pattern: "if + presente, presente · if + presente, will + verbo base",
        examples: [
          { english: "If you heat ice, it melts.", portuguese: "Se você aquece gelo, ele derrete." },
          { english: "If it rains, we'll stay home.", portuguese: "Se chover, ficaremos em casa." },
        ],
      },
      {
        title: "Second conditional",
        meaning: "Use para situações presentes ou futuras imaginárias ou improváveis.",
        pattern: "if + simple past, would + verbo base",
        examples: [
          { english: "If I had more time, I'd travel more.", portuguese: "Se eu tivesse mais tempo, viajaria mais." },
          { english: "What would you do if you won?", portuguese: "O que você faria se ganhasse?" },
        ],
      },
      {
        title: "Third conditional",
        meaning: "Use para uma condição irreal no passado e seu resultado imaginado.",
        pattern: "if + past perfect, would have + particípio passado",
        examples: [
          { english: "If we'd left earlier, we wouldn't have missed the train.", portuguese: "Se tivéssemos saído antes, não teríamos perdido o trem." },
          { english: "She would have passed if she'd studied.", portuguese: "Ela teria passado se tivesse estudado." },
        ],
      },
    ],
    quickRule:
      "Normalmente, não use will diretamente depois de if em uma oração condicional.",
  },
  {
    id: "passive-voice",
    title: "Passive Voice",
    description: "Dê destaque à ação ou ao resultado, em vez de destacar quem realiza a ação.",
    introduction:
      "A passive voice usa be mais o particípio passado e é útil quando o agente é desconhecido, óbvio ou menos importante.",
    usages: [
      {
        title: "Passiva no presente",
        meaning: "Use am, is ou are mais o particípio passado para fatos e processos no presente.",
        pattern: "sujeito + am/is/are + particípio passado",
        examples: [
          { english: "Coffee is grown in Brazil.", portuguese: "Café é cultivado no Brasil." },
          { english: "The rooms are cleaned daily.", portuguese: "Os quartos são limpos diariamente." },
        ],
      },
      {
        title: "Passiva no passado",
        meaning: "Use was ou were mais o particípio passado para ações concluídas no passado.",
        pattern: "sujeito + was/were + particípio passado",
        examples: [
          { english: "The bridge was built in 1950.", portuguese: "A ponte foi construída em 1950." },
          { english: "The documents were sent yesterday.", portuguese: "Os documentos foram enviados ontem." },
        ],
      },
      {
        title: "Indicação do agente",
        meaning: "Use by somente quando a pessoa ou coisa que realiza a ação for relevante.",
        pattern: "forma passiva + by + agente",
        examples: [
          { english: "The novel was written by George Orwell.", portuguese: "O romance foi escrito por George Orwell." },
          { english: "The window was broken.", portuguese: "A janela foi quebrada." },
        ],
      },
    ],
    quickRule:
      "Marque o tempo verbal em be; o verbo principal permanece no particípio passado.",
  },
  {
    id: "reported-speech",
    title: "Reported Speech",
    description: "Relate afirmações, perguntas e pedidos sem citar exatamente as palavras originais.",
    introduction:
      "O reported speech frequentemente altera pronomes, referências de tempo e tempos verbais para adequá-los ao contexto do relato.",
    usages: [
      {
        title: "Relato de afirmações",
        meaning: "Use say ou tell e, em geral, recue o tempo verbal original em um nível.",
        pattern: "said (that) + oração · told + pessoa + oração",
        examples: [
          { english: "“I'm tired.” → She said she was tired.", portuguese: "“Estou cansada.” → Ela disse que estava cansada." },
          { english: "He told me he had finished.", portuguese: "Ele me disse que tinha terminado." },
        ],
      },
      {
        title: "Relato de perguntas",
        meaning: "Use a ordem de uma frase afirmativa e omita do, does e did.",
        pattern: "asked + palavra interrogativa/if + sujeito + verbo",
        examples: [
          { english: "“Where do you live?” → She asked where I lived.", portuguese: "“Onde você mora?” → Ela perguntou onde eu morava." },
          { english: "“Are you ready?” → He asked if I was ready.", portuguese: "“Você está pronto?” → Ele perguntou se eu estava pronto." },
        ],
      },
      {
        title: "Relato de pedidos e ordens",
        meaning: "Use ask ou tell mais uma pessoa e o infinitivo com to.",
        pattern: "asked/told + pessoa + (not) to + verbo base",
        examples: [
          { english: "“Please wait.” → She asked me to wait.", portuguese: "“Por favor, espere.” → Ela pediu que eu esperasse." },
          { english: "“Don't touch it.” → He told us not to touch it.", portuguese: "“Não toque nisso.” → Ele nos disse para não tocar." },
        ],
      },
    ],
    quickRule:
      "Use say something, mas tell someone something; perguntas relatadas seguem a ordem de uma frase afirmativa.",
  },
  {
    id: "present-perfect-progressive",
    title: "Present Perfect Progressive",
    description: "Descreva ações que começaram no passado e continuam ou apresentam resultado no presente.",
    introduction:
      "O present perfect progressive usa have ou has been mais um verbo terminado em -ing.",
    usages: [
      {
        title: "Ações que continuam até agora",
        meaning: "Use quando uma atividade começou no passado e ainda está em andamento.",
        pattern: "sujeito + have/has been + verbo-ing + since/for",
        examples: [
          { english: "I've been studying for two hours.", portuguese: "Estou estudando há duas horas." },
          { english: "She's been working here since May.", portuguese: "Ela trabalha aqui desde maio." },
        ],
      },
      {
        title: "Atividade recente com resultado presente",
        meaning: "Use quando uma atividade recente explica algo que podemos observar agora.",
        pattern: "sujeito + have/has been + verbo-ing",
        examples: [
          { english: "It's been raining.", portuguese: "Tem chovido." },
          { english: "You've been running.", portuguese: "Você esteve correndo." },
        ],
      },
    ],
    quickRule: "Use have/has been + verbo-ing e destaque a atividade ou sua duração.",
  },
  {
    id: "past-perfect",
    title: "Past Perfect",
    description: "Mostre que uma ação passada aconteceu antes de outra ação ou momento no passado.",
    introduction:
      "O past perfect usa had mais o particípio passado para deixar claro qual acontecimento ocorreu primeiro.",
    usages: [
      {
        title: "Ação anterior no passado",
        meaning: "Use para uma ação concluída antes de outra ação passada.",
        pattern: "sujeito + had + particípio passado",
        examples: [
          { english: "The train had left before we arrived.", portuguese: "O trem tinha partido antes de chegarmos." },
          { english: "She had finished when I called.", portuguese: "Ela já tinha terminado quando liguei." },
        ],
      },
      {
        title: "Causa ou explicação no passado",
        meaning: "Use para explicar a causa anterior de uma situação passada.",
        pattern: "resultado passado + because + sujeito + had + particípio passado",
        examples: [
          { english: "He was tired because he hadn't slept.", portuguese: "Ele estava cansado porque não tinha dormido." },
          { english: "They knew the city because they had visited it before.", portuguese: "Eles conheciam a cidade porque já a tinham visitado." },
        ],
      },
    ],
    quickRule: "Use had + particípio passado para o primeiro de dois acontecimentos passados.",
  },
  {
    id: "past-perfect-progressive",
    title: "Past Perfect Progressive",
    description: "Enfatize a duração de uma atividade anterior a outro momento no passado.",
    introduction:
      "O past perfect progressive usa had been mais um verbo terminado em -ing.",
    usages: [
      {
        title: "Atividade contínua anterior a um acontecimento passado",
        meaning: "Use para uma atividade que continuou até outro momento no passado.",
        pattern: "sujeito + had been + verbo-ing + since/for",
        examples: [
          { english: "They had been waiting for an hour when the bus arrived.", portuguese: "Eles estavam esperando havia uma hora quando o ônibus chegou." },
          { english: "I'd been working there since January.", portuguese: "Eu trabalhava lá desde janeiro." },
        ],
      },
      {
        title: "Atividade passada com resultado visível",
        meaning: "Use quando uma atividade anterior explica uma condição posterior no passado.",
        pattern: "resultado passado + because + sujeito + had been + verbo-ing",
        examples: [
          { english: "The ground was wet because it had been raining.", portuguese: "O chão estava molhado porque tinha chovido." },
          { english: "She was tired because she had been studying.", portuguese: "Ela estava cansada porque estava estudando." },
        ],
      },
    ],
    quickRule: "Use had been + verbo-ing para enfatizar a duração antes de um momento passado.",
  },
] as const satisfies readonly GrammarTopic[];
