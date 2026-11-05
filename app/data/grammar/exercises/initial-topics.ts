import type { GrammarExercise } from "./types";

export const initialGrammarExercises = {
  "present-continuous": [
    {
      id: "present-progressive-use",
      title: "1. Uso e contexto",
      type: "radio",
      instruction: "Escolha a alternativa mais adequada para cada contexto.",
      questions: [
        {
          question: "Please be quiet. The baby ___ right now.",
          options: [
            { option: "sleeps" },
            { option: "is sleeping", isCorrect: true },
            { option: "sleep" },
          ],
        },
        {
          question: "Carla usually works at the office, but this week she ___ from home.",
          options: [
            { option: "works" },
            { option: "is working", isCorrect: true },
            { option: "work" },
          ],
        },
        {
          question: "Which sentence describes a changing situation?",
          options: [
            { option: "The days are getting longer.", isCorrect: true },
            { option: "The sun rises in the east." },
            { option: "I know the answer." },
          ],
        },
        {
          question: "We ___ our science teacher after class tomorrow. Everything is arranged.",
          options: [
            { option: "meet" },
            { option: "are meeting", isCorrect: true },
            { option: "meeting" },
          ],
        },
        {
          question: "Which sentence is normally correct with a stative verb?",
          options: [
            { option: "I am understanding the lesson." },
            { option: "I understand the lesson.", isCorrect: true },
            { option: "I understanding the lesson." },
          ],
        },
      ],
    },
    {
      id: "present-progressive-form",
      title: "2. Formação",
      type: "fill",
      instruction: "Complete com a forma correta do present progressive.",
      showWordBank: false,
      blocks: [
        { block: [{ text: "Lucas " }, { blank: ["is studying", "'s studying"] }, { text: " for the exam now. (study)" }] },
        { block: [{ text: "We " }, { blank: ["are not watching", "aren't watching"] }, { text: " television at the moment. (not watch)" }] },
        { block: [{ blank: ["Are they waiting"] }, { text: " for the bus? (they / wait)" }] },
        { block: [{ text: "I " }, { blank: ["am writing", "'m writing"] }, { text: " an email to my teacher. (write)" }] },
        { block: [{ text: "The climate " }, { blank: ["is changing", "'s changing"] }, { text: " rapidly. (change)" }] },
      ],
    },
    {
      id: "present-progressive-errors",
      title: "3. Correção de erros",
      type: "error-correction",
      items: [
        {
          sentence: "She studying for the test now.",
          answer: ["She is studying for the test now.", "She's studying for the test now."],
          explanation: "O present progressive exige am, is ou are antes do verbo em -ing.",
        },
        {
          sentence: "They is playing outside.",
          answer: ["They are playing outside.", "They're playing outside."],
          explanation: "Com they, use are.",
        },
        {
          sentence: "Are you study for the exam?",
          answer: "Are you studying for the exam?",
          explanation: "Depois de be, o verbo principal deve terminar em -ing.",
        },
        {
          sentence: "I am knowing the answer.",
          answer: "I know the answer.",
          explanation: "Know é normalmente um stative verb e não costuma ser usado no progressive.",
        },
      ],
    },
    {
      id: "present-progressive-transform",
      title: "4. Transformação de frases",
      type: "sentence-transformation",
      instruction: "Reescreva conforme a orientação, sem alterar a informação principal.",
      items: [
        {
          sentence: "She is reading the article.",
          cue: "Passe para a forma negativa.",
          answer: ["She is not reading the article.", "She isn't reading the article."],
        },
        {
          sentence: "They are preparing dinner.",
          cue: "Transforme em pergunta.",
          answer: "Are they preparing dinner?",
        },
        {
          sentence: "I have an arranged meeting with the principal tomorrow.",
          cue: "Use o present progressive.",
          answer: ["I am meeting the principal tomorrow.", "I'm meeting the principal tomorrow."],
        },
        {
          sentence: "The number of students increases every year.",
          cue: "Destaque que a mudança está acontecendo atualmente.",
          answer: [
            "The number of students is increasing.",
            "The number of students is increasing every year.",
          ],
        },
      ],
    },
  ],

  "future-forms": [
    {
      id: "future-choice",
      title: "1. Will ou going to?",
      type: "radio",
      instruction: "Escolha a forma que melhor corresponde ao contexto.",
      questions: [
        {
          question: "The phone is ringing. I ___ it.",
          options: [
            { option: "am going to answer" },
            { option: "will answer", isCorrect: true },
            { option: "answering" },
          ],
        },
        {
          question: "We bought the tickets yesterday. We ___ to Recife in July.",
          options: [
            { option: "are going to travel", isCorrect: true },
            { option: "will travel" },
            { option: "travel" },
          ],
        },
        {
          question: "Look at those dark clouds! It ___ rain.",
          options: [
            { option: "will" },
            { option: "is going to", isCorrect: true },
            { option: "going" },
          ],
        },
        {
          question: "I think our team ___ the championship.",
          options: [
            { option: "will win", isCorrect: true },
            { option: "is going to winning" },
            { option: "will wins" },
          ],
        },
        {
          question: "Don't worry. I ___ anyone your secret.",
          options: [
            { option: "won't tell", isCorrect: true },
            { option: "am not tell" },
            { option: "won't telling" },
          ],
        },
      ],
    },
    {
      id: "future-form",
      title: "2. Formação",
      type: "fill",
      instruction: "Complete com will, won't ou a forma correta de be going to.",
      showWordBank: false,
      blocks: [
        { block: [{ text: "I promise I " }, { blank: ["will call", "'ll call"] }, { text: " you after the exam. (call)" }] },
        { block: [{ text: "They have a plan. They " }, { blank: ["are going to open", "'re going to open"] }, { text: " a new store. (open)" }] },
        { block: [{ text: "She " }, { blank: ["will not forget", "won't forget"] }, { text: " your message. (not forget)" }] },
        { block: [{ blank: ["Are you going to study"] }, { text: " tonight? (you / study)" }] },
        { block: [{ text: "I think technology " }, { blank: ["will change", "'ll change"] }, { text: " education. (change)" }] },
      ],
    },
    {
      id: "future-transform",
      title: "3. Transformação de frases",
      type: "sentence-transformation",
      instruction: "Reescreva usando a forma futura indicada.",
      items: [
        {
          sentence: "I decided before this conversation to study medicine.",
          cue: "Use be going to.",
          answer: ["I am going to study medicine.", "I'm going to study medicine."],
        },
        {
          sentence: "The doorbell is ringing. I have decided now to open the door.",
          cue: "Use will.",
          answer: ["I will open the door.", "I'll open the door."],
        },
        {
          sentence: "They are going to move next month.",
          cue: "Passe para a forma negativa.",
          answer: ["They are not going to move next month.", "They aren't going to move next month."],
        },
        {
          sentence: "She will participate in the competition.",
          cue: "Transforme em pergunta.",
          answer: "Will she participate in the competition?",
        },
      ],
    },
    {
      id: "future-errors",
      title: "4. Correção de erros",
      type: "error-correction",
      items: [
        {
          sentence: "She will to travel tomorrow.",
          answer: "She will travel tomorrow.",
          explanation: "Depois de will, use o verbo na forma base sem to.",
        },
        {
          sentence: "They is going to study tonight.",
          answer: "They are going to study tonight.",
          explanation: "Com they, a forma correta de be é are.",
        },
        {
          sentence: "Will he goes to college next year?",
          answer: "Will he go to college next year?",
          explanation: "Depois de will, o verbo permanece na forma base.",
        },
        {
          sentence: "I going to buy a new notebook.",
          answer: ["I am going to buy a new notebook.", "I'm going to buy a new notebook."],
          explanation: "Be going to exige a forma adequada do verbo be.",
        },
      ],
    },
  ],

  "prefixes-suffixes": [
    {
      id: "affix-meaning",
      title: "1. Significado dos afixos",
      type: "matching",
      instruction: "Selecione um item da coluna esquerda e depois sua correspondência na coluna direita.",
      pairs: [
        { left: "un-", right: "negação ou sentido oposto" },
        { left: "re-", right: "novamente" },
        { left: "pre-", right: "antes" },
        { left: "-less", right: "sem ou ausência de" },
        { left: "-ness", right: "estado ou qualidade" },
        { left: "-ly", right: "modo como uma ação acontece" },
      ],
    },
    {
      id: "affix-formation",
      title: "2. Formação de palavras",
      type: "fill",
      instruction: "Complete com a palavra derivada correta a partir da palavra entre parênteses.",
      showWordBank: false,
      blocks: [
        { block: [{ text: "Her " }, { blank: "kindness", placeholder: "kind" }, { text: " made everyone feel welcome. (kind)" }] },
        { block: [{ text: "Please " }, { blank: "rewrite", placeholder: "write" }, { text: " the final paragraph. (write)" }] },
        { block: [{ text: "This chair is very " }, { blank: "comfortable", placeholder: "comfort" }, { text: ". (comfort)" }] },
        { block: [{ text: "The instructions were " }, { blank: "unclear", placeholder: "clear" }, { text: ". (clear)" }] },
        { block: [{ text: "She answered the question " }, { blank: "carefully", placeholder: "careful" }, { text: ". (careful)" }] },
      ],
    },
    {
      id: "affix-word-class",
      title: "3. Classe e sentido das palavras",
      type: "radio",
      instruction: "Escolha a alternativa correta de acordo com a formação da palavra.",
      questions: [
        {
          question: "Which word is a noun formed from an adjective?",
          options: [
            { option: "happiness", isCorrect: true },
            { option: "happily" },
            { option: "unhappy" },
          ],
        },
        {
          question: "In the word careless, the suffix -less means:",
          options: [
            { option: "full of care" },
            { option: "without care", isCorrect: true },
            { option: "care again" },
          ],
        },
        {
          question: "Which word means to organize again?",
          options: [
            { option: "preorganize" },
            { option: "reorganize", isCorrect: true },
            { option: "organization" },
          ],
        },
        {
          question: "Which suffix commonly changes an adjective into an adverb?",
          options: [
            { option: "-ness" },
            { option: "-ment" },
            { option: "-ly", isCorrect: true },
          ],
        },
        {
          question: "Which spelling is correct?",
          options: [
            { option: "happyment" },
            { option: "happyness" },
            { option: "happiness", isCorrect: true },
          ],
        },
      ],
    },
  ],
} as const satisfies Record<string, readonly GrammarExercise[]>;
