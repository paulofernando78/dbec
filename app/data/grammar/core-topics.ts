import type { GrammarTopic } from "./types";

export const coreGrammarTopics = [
  {
    id: "verb-be-present-past",
    title: "Verb Be: Present and Past",
    description: "Use be to identify, describe, and locate people and things.",
    introduction:
      "The verb be changes according to the subject and whether the sentence refers to the present or the past.",
    usages: [
      {
        title: "Present: am, is, are",
        meaning:
          "Use am with I, is with he, she, and it, and are with you, we, and they.",
        pattern: "subject + am/is/are + complement",
        examples: [
          { english: "I am ready.", portuguese: "Eu estou pronto." },
          { english: "They are at school.", portuguese: "Eles estão na escola." },
        ],
      },
      {
        title: "Past: was, were",
        meaning:
          "Use was with I, he, she, and it. Use were with you, we, and they.",
        pattern: "subject + was/were + complement",
        examples: [
          { english: "She was tired yesterday.", portuguese: "Ela estava cansada ontem." },
          { english: "We were in Recife last week.", portuguese: "Nós estávamos em Recife na semana passada." },
        ],
      },
      {
        title: "Negatives and questions",
        meaning:
          "Add not for negatives. Move be before the subject to form questions.",
        pattern: "subject + be + not · be + subject + complement?",
        examples: [
          { english: "He isn't busy.", portuguese: "Ele não está ocupado." },
          { english: "Were you at home?", portuguese: "Você estava em casa?" },
        ],
      },
    ],
    quickRule:
      "Be does not use do or did: say Is she ready? and Was he there?",
  },
  {
    id: "present-continuous",
    title: "Present Continuous",
    description: "Talk about actions in progress, temporary situations, and arrangements.",
    introduction:
      "The present continuous combines the present form of be with a verb ending in -ing.",
    usages: [
      {
        title: "Actions happening now",
        meaning: "Use it for something happening at or around the moment of speaking.",
        pattern: "subject + am/is/are + verb-ing",
        examples: [
          { english: "I'm studying right now.", portuguese: "Estou estudando agora." },
          { english: "They're waiting outside.", portuguese: "Eles estão esperando lá fora." },
        ],
      },
      {
        title: "Temporary situations",
        meaning: "Use it for situations that are true for a limited period.",
        pattern: "subject + be + verb-ing + temporary time expression",
        examples: [
          { english: "She's working from home this week.", portuguese: "Ela está trabalhando de casa esta semana." },
          { english: "We're staying with friends.", portuguese: "Estamos hospedados com amigos." },
        ],
      },
      {
        title: "Future arrangements",
        meaning: "Use it for a future plan that has already been arranged.",
        pattern: "subject + be + verb-ing + future time",
        examples: [
          { english: "I'm meeting Ana tomorrow.", portuguese: "Vou encontrar a Ana amanhã." },
          { english: "We're flying on Friday.", portuguese: "Vamos viajar de avião na sexta-feira." },
        ],
      },
    ],
    quickRule:
      "Use be before the -ing form: She is working, not She working.",
  },
  {
    id: "simple-present",
    title: "Simple Present",
    description: "Describe routines, repeated actions, facts, and permanent situations.",
    introduction:
      "The simple present expresses what usually happens or what is generally true.",
    usages: [
      {
        title: "Habits and routines",
        meaning: "Use it with frequency expressions for repeated actions.",
        pattern: "subject + base verb · he/she/it + verb-s",
        examples: [
          { english: "I exercise every morning.", portuguese: "Eu me exercito todas as manhãs." },
          { english: "He takes the bus to work.", portuguese: "Ele pega o ônibus para o trabalho." },
        ],
      },
      {
        title: "Facts and permanent situations",
        meaning: "Use it for general truths and relatively permanent states.",
        pattern: "subject + simple-present verb",
        examples: [
          { english: "Water boils at 100°C.", portuguese: "A água ferve a 100°C." },
          { english: "She lives in São Paulo.", portuguese: "Ela mora em São Paulo." },
        ],
      },
      {
        title: "Negatives and questions",
        meaning: "Use do or does with the base form of the main verb.",
        pattern: "do/does + subject + base verb? · subject + don't/doesn't + base verb",
        examples: [
          { english: "Does he speak English?", portuguese: "Ele fala inglês?" },
          { english: "She doesn't drive.", portuguese: "Ela não dirige." },
        ],
      },
    ],
    quickRule:
      "Only affirmative he, she, and it take -s; after does or doesn't, use the base verb.",
  },
  {
    id: "simple-past",
    title: "Simple Past",
    description: "Talk about completed actions and finished situations in the past.",
    introduction:
      "The simple past places an action or state in a finished past time.",
    usages: [
      {
        title: "Completed past actions",
        meaning: "Use the past form when the action is finished.",
        pattern: "subject + regular verb-ed / irregular past form",
        examples: [
          { english: "We watched a movie last night.", portuguese: "Assistimos a um filme ontem à noite." },
          { english: "She went to Salvador in July.", portuguese: "Ela foi a Salvador em julho." },
        ],
      },
      {
        title: "Past sequences",
        meaning: "Use it for consecutive events in a story.",
        pattern: "past action + past action + past action",
        examples: [
          { english: "He opened the door and walked inside.", portuguese: "Ele abriu a porta e entrou." },
          { english: "I woke up, got dressed, and left.", portuguese: "Acordei, me vesti e saí." },
        ],
      },
      {
        title: "Negatives and questions",
        meaning: "Use did with the base form of the main verb.",
        pattern: "did + subject + base verb? · subject + didn't + base verb",
        examples: [
          { english: "Did you call her?", portuguese: "Você ligou para ela?" },
          { english: "They didn't arrive early.", portuguese: "Eles não chegaram cedo." },
        ],
      },
    ],
    quickRule:
      "After did or didn't, use the base verb: Did she go?, not Did she went?",
  },
  {
    id: "present-perfect",
    title: "Present Perfect",
    description: "Connect past actions and experiences to the present.",
    introduction:
      "The present perfect uses have or has plus the past participle when the present result or period matters.",
    usages: [
      {
        title: "Life experience",
        meaning: "Use it for experiences without saying exactly when they happened.",
        pattern: "subject + have/has + past participle",
        examples: [
          { english: "I've visited Argentina.", portuguese: "Eu já visitei a Argentina." },
          { english: "Has she ever tried sushi?", portuguese: "Ela já experimentou sushi?" },
        ],
      },
      {
        title: "Recent actions and present results",
        meaning: "Use it when a completed action has a result now.",
        pattern: "have/has + just/already/not yet + past participle",
        examples: [
          { english: "He's just finished the report.", portuguese: "Ele acabou de terminar o relatório." },
          { english: "We haven't eaten yet.", portuguese: "Ainda não comemos." },
        ],
      },
      {
        title: "Unfinished periods",
        meaning: "Use since for a starting point and for for a duration.",
        pattern: "have/has + past participle + since/for",
        examples: [
          { english: "I've lived here for five years.", portuguese: "Moro aqui há cinco anos." },
          { english: "She's known him since 2022.", portuguese: "Ela o conhece desde 2022." },
        ],
      },
    ],
    quickRule:
      "Use the simple past with a finished time such as yesterday or in 2024.",
  },
  {
    id: "future-forms",
    title: "Future Forms",
    description: "Choose between will, be going to, and the present continuous.",
    introduction:
      "English uses different forms for future decisions, intentions, predictions, and arrangements.",
    usages: [
      {
        title: "Will",
        meaning: "Use will for decisions made now, offers, promises, and opinion-based predictions.",
        pattern: "subject + will + base verb",
        examples: [
          { english: "I'll help you with that.", portuguese: "Vou ajudar você com isso." },
          { english: "I think it'll be sunny.", portuguese: "Acho que fará sol." },
        ],
      },
      {
        title: "Be going to",
        meaning: "Use it for prior intentions and predictions based on present evidence.",
        pattern: "subject + be + going to + base verb",
        examples: [
          { english: "We're going to move next year.", portuguese: "Vamos nos mudar no próximo ano." },
          { english: "Look at the sky. It's going to rain.", portuguese: "Olhe para o céu. Vai chover." },
        ],
      },
      {
        title: "Present continuous",
        meaning: "Use it for arrangements with a specific time or place.",
        pattern: "subject + be + verb-ing + future time",
        examples: [
          { english: "I'm seeing the dentist at three.", portuguese: "Vou ao dentista às três." },
          { english: "They're arriving on Monday.", portuguese: "Eles chegam na segunda-feira." },
        ],
      },
    ],
    quickRule:
      "Ask whether the future is a decision now, an intention/evidence, or a fixed arrangement.",
  },
  {
    id: "modal-verbs",
    title: "Modal Verbs",
    description: "Express ability, possibility, permission, advice, and obligation.",
    introduction:
      "Modal verbs come before the base form and do not change for he, she, or it.",
    usages: [
      {
        title: "Ability and possibility",
        meaning: "Use can for ability and may, might, or could for possibility.",
        pattern: "subject + can/may/might/could + base verb",
        examples: [
          { english: "She can swim.", portuguese: "Ela sabe nadar." },
          { english: "It might rain later.", portuguese: "Talvez chova mais tarde." },
        ],
      },
      {
        title: "Advice and obligation",
        meaning: "Use should for advice and must or have to for strong obligation.",
        pattern: "subject + should/must + base verb",
        examples: [
          { english: "You should get some rest.", portuguese: "Você deveria descansar." },
          { english: "Employees must wear an ID badge.", portuguese: "Os funcionários devem usar crachá." },
        ],
      },
      {
        title: "Permission and requests",
        meaning: "Use can, could, or may to ask for permission or make requests.",
        pattern: "can/could/may + subject + base verb?",
        examples: [
          { english: "Could you open the window?", portuguese: "Você poderia abrir a janela?" },
          { english: "May I come in?", portuguese: "Posso entrar?" },
        ],
      },
    ],
    warnings: [
      {
        title: "Maybe vs. may be",
        explanation:
          "Maybe is one word and means perhaps. May be is the modal may followed by the base verb be.",
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
      "Use the base verb after a modal: She can drive, not She can drives.",
  },
  {
    id: "conditionals",
    title: "Conditionals",
    description: "Describe facts, possibilities, imaginary situations, and past regrets.",
    introduction:
      "Conditional sentences connect a condition in an if clause to its result.",
    usages: [
      {
        title: "Zero and first conditional",
        meaning: "Use zero for general facts and first for realistic future possibilities.",
        pattern: "if + present, present · if + present, will + base verb",
        examples: [
          { english: "If you heat ice, it melts.", portuguese: "Se você aquece gelo, ele derrete." },
          { english: "If it rains, we'll stay home.", portuguese: "Se chover, ficaremos em casa." },
        ],
      },
      {
        title: "Second conditional",
        meaning: "Use it for imaginary or unlikely present and future situations.",
        pattern: "if + simple past, would + base verb",
        examples: [
          { english: "If I had more time, I'd travel more.", portuguese: "Se eu tivesse mais tempo, viajaria mais." },
          { english: "What would you do if you won?", portuguese: "O que você faria se ganhasse?" },
        ],
      },
      {
        title: "Third conditional",
        meaning: "Use it for an unreal past condition and its imagined result.",
        pattern: "if + past perfect, would have + past participle",
        examples: [
          { english: "If we'd left earlier, we wouldn't have missed the train.", portuguese: "Se tivéssemos saído antes, não teríamos perdido o trem." },
          { english: "She would have passed if she'd studied.", portuguese: "Ela teria passado se tivesse estudado." },
        ],
      },
    ],
    quickRule:
      "Do not normally use will directly after if in a conditional clause.",
  },
  {
    id: "passive-voice",
    title: "Passive Voice",
    description: "Focus on an action or result instead of the person who performs it.",
    introduction:
      "The passive voice uses be plus a past participle and is useful when the agent is unknown, obvious, or less important.",
    usages: [
      {
        title: "Present passive",
        meaning: "Use am, is, or are plus the past participle for present facts and processes.",
        pattern: "subject + am/is/are + past participle",
        examples: [
          { english: "Coffee is grown in Brazil.", portuguese: "Café é cultivado no Brasil." },
          { english: "The rooms are cleaned daily.", portuguese: "Os quartos são limpos diariamente." },
        ],
      },
      {
        title: "Past passive",
        meaning: "Use was or were plus the past participle for completed past actions.",
        pattern: "subject + was/were + past participle",
        examples: [
          { english: "The bridge was built in 1950.", portuguese: "A ponte foi construída em 1950." },
          { english: "The documents were sent yesterday.", portuguese: "Os documentos foram enviados ontem." },
        ],
      },
      {
        title: "Mentioning the agent",
        meaning: "Use by only when the person or thing performing the action is relevant.",
        pattern: "passive form + by + agent",
        examples: [
          { english: "The novel was written by George Orwell.", portuguese: "O romance foi escrito por George Orwell." },
          { english: "The window was broken.", portuguese: "A janela foi quebrada." },
        ],
      },
    ],
    quickRule:
      "Keep the tense on be; the main verb remains in the past participle.",
  },
  {
    id: "reported-speech",
    title: "Reported Speech",
    description: "Report statements, questions, and requests without quoting the exact words.",
    introduction:
      "Reported speech often changes pronouns, time references, and verb tense to match the reporting context.",
    usages: [
      {
        title: "Reported statements",
        meaning: "Use say or tell and commonly move the original tense one step back.",
        pattern: "said (that) + clause · told + person + clause",
        examples: [
          { english: "“I'm tired.” → She said she was tired.", portuguese: "“Estou cansada.” → Ela disse que estava cansada." },
          { english: "He told me he had finished.", portuguese: "Ele me disse que tinha terminado." },
        ],
      },
      {
        title: "Reported questions",
        meaning: "Use statement word order and omit do, does, and did.",
        pattern: "asked + question word/if + subject + verb",
        examples: [
          { english: "“Where do you live?” → She asked where I lived.", portuguese: "“Onde você mora?” → Ela perguntou onde eu morava." },
          { english: "“Are you ready?” → He asked if I was ready.", portuguese: "“Você está pronto?” → Ele perguntou se eu estava pronto." },
        ],
      },
      {
        title: "Reported requests and commands",
        meaning: "Use ask or tell plus a person and a to-infinitive.",
        pattern: "asked/told + person + (not) to + base verb",
        examples: [
          { english: "“Please wait.” → She asked me to wait.", portuguese: "“Por favor, espere.” → Ela pediu que eu esperasse." },
          { english: "“Don't touch it.” → He told us not to touch it.", portuguese: "“Não toque nisso.” → Ele nos disse para não tocar." },
        ],
      },
    ],
    quickRule:
      "Say something, but tell someone something; reported questions use statement order.",
  },
] as const satisfies readonly GrammarTopic[];
