import { audio, bold, portuguese, spacer } from "@/helpers/content";

export const beginnerOfferingFood = {
  whiteboard: {
    title: "A1 Beginner",
    descriptions: ["Would you like some coffee?", "Yes, please. / No, thanks."],
  },
  introduction: {
    blocks: [
      {
        type: "text",
        value: [{ parts: [audio("What do you offer a guest in your home?"), "What do you offer a guest in your home?"] }],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the polite offer.",
        exercise: { questions: [
          { question: "Which sentence offers a drink?", options: [{ option: "Would you like some tea?", isCorrect: true }, { option: "I don't like tea.", isCorrect: false }] },
          { question: "Which answer accepts an offer?", options: [{ option: "Yes, please.", isCorrect: true }, { option: "No, I don't.", isCorrect: false }] },
        ] },
      },
    ],
  },
  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: ["Read the conversation. What does Eric accept? ", portuguese("Leia e identifique o que Eric aceita.")],
        audioSrc: "",
        lines: [
          { speaker: "Laura", line: ["Would you like some coffee?"] },
          { speaker: "Eric", line: ["Yes, please."] },
          { speaker: "Laura", line: ["Would you like a sandwich, too?"] },
          { speaker: "Eric", line: ["No, thanks. I'm not hungry."] },
          { speaker: "Laura", line: ["How about some cake?"] },
          { speaker: "Eric", line: ["That sounds great, thank you."] },
        ],
      },
      {
        type: "radio",
        instruction: "Choose the answer supported by the conversation.",
        exercise: { questions: [
          { question: "Does Eric accept the coffee?", options: [{ option: "Yes, he does.", isCorrect: true }, { option: "No, he doesn't.", isCorrect: false }] },
          { question: "What does Eric refuse?", options: [{ option: "A sandwich.", isCorrect: true }, { option: "Some cake.", isCorrect: false }] },
        ] },
      },
    ],
  },
  languageFocus: {
    blocks: [
      { type: "subsection", label: "Offering food and drinks", heading: 4 },
      {
        type: "text",
        value: [
          { display: "block", as: "p", parts: [bold("Would you like some coffee?"), " Yes, please."] },
          { display: "block", as: "p", parts: [bold("Would you like a sandwich?"), " No, thanks."] },
          { display: "block", as: "p", parts: [bold("How about some cake?"), " That sounds great."] },
          spacer(),
          { display: "block", as: "p", parts: [bold("some"), " + plural or uncountable food: some apples, some water"] },
          { display: "block", as: "p", parts: [bold("a/an"), " + one countable item: a sandwich, an apple"] },
        ],
      },
      {
        type: "ccq",
        value: [
          { as: "p", parts: ["Is Would you like...? an offer or an order?"] },
          { as: "p", parts: ["Does Yes, please accept the offer?"] },
          { as: "p", parts: ["Do we say some water or a water in this lesson?"] },
        ],
      },
    ],
  },
  practice: {
    blocks: [
      { type: "guess" },
      {
        type: "radio",
        instruction: "Choose the correct answer.",
        exercise: { questions: [
          { question: "Would you ___ some tea?", options: [{ option: "like", isCorrect: true }, { option: "likes", isCorrect: false }] },
          { question: "Yes, ___.", options: [{ option: "please", isCorrect: true }, { option: "thanks no", isCorrect: false }] },
          { question: "No, ___.", options: [{ option: "thanks", isCorrect: true }, { option: "please", isCorrect: false }] },
          { question: "Would you like ___ coffee?", options: [{ option: "some", isCorrect: true }, { option: "an", isCorrect: false }] },
          { question: "Would you like ___ apple?", options: [{ option: "an", isCorrect: true }, { option: "some", isCorrect: false }] },
          { question: "How ___ some cake?", options: [{ option: "about", isCorrect: true }, { option: "like", isCorrect: false }] },
          { question: "That ___ great.", options: [{ option: "sounds", isCorrect: true }, { option: "sound", isCorrect: false }] },
          { question: "I'm not ___. No food, thanks.", options: [{ option: "hungry", isCorrect: true }, { option: "thirsty", isCorrect: false }] },
        ] },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the offers and responses.",
        exercise: { blocks: [
          { block: [{ text: "Would you " }, { blank: "like" }, { text: " some coffee?" }], lineBreak: true },
          { block: [{ text: "Yes, " }, { blank: "please" }, { text: "." }], lineBreak: true },
          { block: [{ text: "No, " }, { blank: "thanks" }, { text: "." }], lineBreak: true },
          { block: [{ text: "How " }, { blank: "about" }, { text: " some cake?" }], lineBreak: true },
          { block: [{ text: "Would you like " }, { blank: "an" }, { text: " apple?" }], lineBreak: true },
          { block: [{ text: "Would you like " }, { blank: "some" }, { text: " water?" }], lineBreak: true },
          { block: [{ text: "That " }, { blank: "sounds" }, { text: " great." }], lineBreak: true },
          { block: [{ text: "I'm not " }, { blank: "hungry" }, { text: "." }], lineBreak: true },
        ] },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: { items: [
          { prompt: "like / coffee / would / some / you", answer: "Would you like some coffee?" },
          { prompt: "please / yes", answer: "Yes, please." },
          { prompt: "thanks / no", answer: "No, thanks." },
          { prompt: "cake / about / some / how", answer: "How about some cake?" },
        ] },
      },
    ],
  },
  production: {
    blocks: [{
      type: "task",
      instruction: "Host a classmate and offer food and drinks:",
      listType: "checkbox",
      items: [
        { content: ["Offer two drinks."], textarea: true },
        { content: ["Offer two food items."], textarea: true },
        { content: ["Accept one offer and refuse another politely."], textarea: true },
      ],
    }],
  },
};

export const beginnerQuantities = {
  whiteboard: {
    title: "A1 Beginner",
    descriptions: ["How much rice do we need?", "How many apples are there?"],
  },
  introduction: {
    blocks: [
      {
        type: "text",
        value: [{ parts: [audio("What food do you buy by number or by amount?"), "What food do you buy by number or by amount?"] }],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the correct quantity question.",
        exercise: { questions: [
          { question: "For apples:", options: [{ option: "How many apples?", isCorrect: true }, { option: "How much apples?", isCorrect: false }] },
          { question: "For water:", options: [{ option: "How much water?", isCorrect: true }, { option: "How many water?", isCorrect: false }] },
        ] },
      },
    ],
  },
  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: ["Read the conversation. What do Laura and Eric need? ", portuguese("Leia e identifique as quantidades.")],
        audioSrc: "",
        lines: [
          { speaker: "Laura", line: ["How many sandwiches do we need?"] },
          { speaker: "Eric", line: ["We need six sandwiches."] },
          { speaker: "Laura", line: ["How much juice is there?"] },
          { speaker: "Eric", line: ["There's a little juice, but not enough."] },
          { speaker: "Laura", line: ["Let's buy two bottles."] },
          { speaker: "Eric", line: ["Good idea. We also need a lot of water."] },
        ],
      },
      {
        type: "radio",
        instruction: "Choose the answer supported by the conversation.",
        exercise: { questions: [
          { question: "How many sandwiches do they need?", options: [{ option: "Six.", isCorrect: true }, { option: "Two.", isCorrect: false }] },
          { question: "Is there enough juice?", options: [{ option: "No, there isn't.", isCorrect: true }, { option: "Yes, there is.", isCorrect: false }] },
        ] },
      },
    ],
  },
  languageFocus: {
    blocks: [
      { type: "subsection", label: "How much and how many", heading: 4 },
      {
        type: "text",
        value: [
          { display: "block", as: "p", parts: [bold("How many"), " + countable plural: How many apples?"] },
          { display: "block", as: "p", parts: [bold("How much"), " + uncountable noun: How much water?"] },
          spacer(),
          { display: "block", as: "p", parts: [bold("a lot of"), " apples / water"] },
          { display: "block", as: "p", parts: [bold("a few"), " apples"] },
          { display: "block", as: "p", parts: [bold("a little"), " water"] },
          { display: "block", as: "p", parts: [bold("not enough"), " food / drinks"] },
        ],
      },
      {
        type: "ccq",
        value: [
          { as: "p", parts: ["Can we count individual apples?"] },
          { as: "p", parts: ["Do we normally count water as individual units?"] },
          { as: "p", parts: ["Does a little describe a small amount?"] },
        ],
      },
    ],
  },
  practice: {
    blocks: [
      { type: "guess" },
      {
        type: "radio",
        instruction: "Choose the correct answer.",
        exercise: { questions: [
          { question: "How ___ apples are there?", options: [{ option: "many", isCorrect: true }, { option: "much", isCorrect: false }] },
          { question: "How ___ milk do we need?", options: [{ option: "much", isCorrect: true }, { option: "many", isCorrect: false }] },
          { question: "There are ___ bananas.", options: [{ option: "a few", isCorrect: true }, { option: "a little", isCorrect: false }] },
          { question: "There is ___ coffee.", options: [{ option: "a little", isCorrect: true }, { option: "a few", isCorrect: false }] },
          { question: "We have ___ rice.", options: [{ option: "a lot of", isCorrect: true }, { option: "many of", isCorrect: false }] },
          { question: "Three ___ of water.", options: [{ option: "bottles", isCorrect: true }, { option: "waters", isCorrect: false }] },
          { question: "There isn't ___ bread.", options: [{ option: "enough", isCorrect: true }, { option: "few", isCorrect: false }] },
          { question: "How many sandwiches do we ___?", options: [{ option: "need", isCorrect: true }, { option: "needs", isCorrect: false }] },
        ] },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the quantity questions and answers.",
        exercise: { blocks: [
          { block: [{ text: "How " }, { blank: "many" }, { text: " apples are there?" }], lineBreak: true },
          { block: [{ text: "How " }, { blank: "much" }, { text: " water do we need?" }], lineBreak: true },
          { block: [{ text: "There are " }, { blank: "a few" }, { text: " oranges." }], lineBreak: true },
          { block: [{ text: "There is " }, { blank: "a little" }, { text: " milk." }], lineBreak: true },
          { block: [{ text: "We need a " }, { blank: "lot" }, { text: " of rice." }], lineBreak: true },
          { block: [{ text: "Buy two " }, { blank: "bottles" }, { text: " of juice." }], lineBreak: true },
          { block: [{ text: "There isn't " }, { blank: "enough" }, { text: " bread." }], lineBreak: true },
          { block: [{ text: "How many sandwiches do we " }, { blank: "need" }, { text: "?" }], lineBreak: true },
        ] },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: { items: [
          { prompt: "many / apples / how / there / are", answer: "How many apples are there?" },
          { prompt: "water / much / need / how / we / do", answer: "How much water do we need?" },
          { prompt: "juice / little / a / there / is", answer: "There is a little juice." },
          { prompt: "enough / bread / isn't / there", answer: "There isn't enough bread." },
        ] },
      },
    ],
  },
  production: {
    blocks: [{
      type: "task",
      instruction: "Plan food and drinks for a class event:",
      listType: "checkbox",
      items: [
        { content: ["Choose four countable items and their quantities."], textarea: true },
        { content: ["Choose three uncountable items and their amounts."], textarea: true },
        { content: ["Ask and answer two how much/how many questions."], textarea: true },
      ],
    }],
  },
};
