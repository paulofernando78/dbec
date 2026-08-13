import { audio, bold, portuguese, spacer } from "@/helpers/content";

export const beginnerWeatherToday = {
  whiteboard: {
    title: "A1 Beginner",
    descriptions: ["What's the weather like today?", "It's warm and sunny."],
  },
  introduction: {
    blocks: [
      {
        type: "lines",
        value: [[audio("What's the weather like today?"), "What's the weather like today?"]],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the sentence about weather.",
        exercise: {
          questions: [
            { question: "Which sentence describes today?", options: [{ option: "It's sunny.", isCorrect: true }, { option: "It's Monday.", isCorrect: false }] },
            { question: "Which word describes cold weather?", options: [{ option: "Freezing", isCorrect: true }, { option: "Teacher", isCorrect: false }] },
          ],
        },
      },
    ],
  },
  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: ["Read the conversation. What is the weather like? ", portuguese("Leia e identifique as condições do tempo.")],
        audioSrc: "",
        lines: [
          { speaker: "Laura", line: ["What's the weather like today?"] },
          { speaker: "Eric", line: ["It's sunny, but it's a little windy."] },
          { speaker: "Laura", line: ["Is it cold?"] },
          { speaker: "Eric", line: ["No, it isn't. It's warm."] },
          { speaker: "Laura", line: ["Great! Let's walk to class."] },
        ],
      },
      {
        type: "radio",
        instruction: "Choose the answer supported by the conversation.",
        exercise: {
          questions: [
            { question: "Is it sunny?", options: [{ option: "Yes, it is.", isCorrect: true }, { option: "No, it isn't.", isCorrect: false }] },
            { question: "Is it cold?", options: [{ option: "No, it isn't.", isCorrect: true }, { option: "Yes, it is.", isCorrect: false }] },
          ],
        },
      },
    ],
  },
  languageFocus: {
    blocks: [
      { type: "subsection", label: "Weather words", heading: 4 },
      {
        type: "meaning",
        value: [
          { display: "block", as: "p", parts: [bold("sunny"), " - with a lot of sun"] },
          { display: "block", as: "p", parts: [bold("cloudy"), " - with many clouds"] },
          { display: "block", as: "p", parts: [bold("rainy"), " - with rain"] },
          { display: "block", as: "p", parts: [bold("windy"), " - with a lot of wind"] },
          { display: "block", as: "p", parts: [bold("hot / warm / cool / cold"), " - temperature words"] },
          spacer(),
          { display: "block", as: "p", parts: [bold("What's the weather like?"), " It's cloudy."] },
          { display: "block", as: "p", parts: [bold("Is it cold?"), " Yes, it is. / No, it isn't."] },
        ],
      },
      {
        type: "ccq",
        value: [
          { as: "p", parts: ["Do we use it is to describe the weather?"] },
          { as: "p", parts: ["Is rainy a temperature word?"] },
          { as: "p", parts: ["Can it be sunny and windy at the same time?"] },
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
        exercise: {
          questions: [
            { question: "What's the weather ___?", options: [{ option: "like", isCorrect: true }, { option: "do", isCorrect: false }] },
            { question: "___ sunny today.", options: [{ option: "It's", isCorrect: true }, { option: "She's", isCorrect: false }] },
            { question: "Is it cold? No, it ___.", options: [{ option: "isn't", isCorrect: true }, { option: "aren't", isCorrect: false }] },
            { question: "There are many clouds. It's ___.", options: [{ option: "cloudy", isCorrect: true }, { option: "windy", isCorrect: false }] },
            { question: "There is a lot of rain. It's ___.", options: [{ option: "rainy", isCorrect: true }, { option: "sunny", isCorrect: false }] },
            { question: "Thirty-five degrees is ___.", options: [{ option: "hot", isCorrect: true }, { option: "cold", isCorrect: false }] },
            { question: "The trees are moving. It's ___.", options: [{ option: "windy", isCorrect: true }, { option: "cloudy", isCorrect: false }] },
            { question: "Is it warm? Yes, it ___.", options: [{ option: "is", isCorrect: true }, { option: "does", isCorrect: false }] },
          ],
        },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the weather report.",
        exercise: {
          blocks: [
            { block: [{ text: "What's the weather " }, { blank: "like" }, { text: " today?" }], lineBreak: true },
            { block: [{ blank: "It's" }, { text: " sunny." }], lineBreak: true },
            { block: [{ text: "It is a little " }, { blank: "windy" }, { text: "." }], lineBreak: true },
            { block: [{ text: "There are clouds. It is " }, { blank: "cloudy" }, { text: "." }], lineBreak: true },
            { block: [{ text: "Take an umbrella. It is " }, { blank: "rainy" }, { text: "." }], lineBreak: true },
            { block: [{ text: "Is it cold? No, it " }, { blank: "isn't" }, { text: "." }], lineBreak: true },
            { block: [{ text: "The afternoon is very " }, { blank: "hot" }, { text: "." }], lineBreak: true },
            { block: [{ text: "The evening is " }, { blank: "cool" }, { text: "." }], lineBreak: true },
          ],
        },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: { items: [
          { prompt: "weather / the / what's / like", answer: "What's the weather like?" },
          { prompt: "sunny / it / is / today", answer: "It is sunny today." },
          { prompt: "cold / is / it", answer: "Is it cold?" },
          { prompt: "isn't / no / it", answer: "No, it isn't." },
        ] },
      },
    ],
  },
  production: {
    blocks: [{
      type: "task",
      instruction: "Create a short weather report:",
      listType: "checkbox",
      items: [
        { content: ["Describe the weather now."], textarea: true },
        { content: ["Include one temperature word."], textarea: false },
        { content: ["Recommend one suitable activity."], textarea: true },
      ],
    }],
  },
};

export const beginnerMonthsAndSeasons = {
  whiteboard: {
    title: "A1 Beginner",
    descriptions: ["What's the weather like in summer?", "My birthday is in May."],
  },
  introduction: {
    blocks: [
      {
        type: "lines",
        value: [[audio("What month is it? What season is it?"), "What month is it? What season is it?"]],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the correct category.",
        exercise: { questions: [
          { question: "Which word is a month?", options: [{ option: "August", isCorrect: true }, { option: "Summer", isCorrect: false }] },
          { question: "Which word is a season?", options: [{ option: "Winter", isCorrect: true }, { option: "Monday", isCorrect: false }] },
        ] },
      },
    ],
  },
  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: ["Read the conversation. When is Laura's birthday? ", portuguese("Leia e identifique o mês e a estação.")],
        audioSrc: "",
        lines: [
          { speaker: "Eric", line: ["When is your birthday?"] },
          { speaker: "Laura", line: ["It's in May. That's autumn in Brazil."] },
          { speaker: "Eric", line: ["What's the weather like then?"] },
          { speaker: "Laura", line: ["It's usually cool and dry."] },
          { speaker: "Eric", line: ["My birthday is in December, in summer."] },
        ],
      },
      {
        type: "radio",
        instruction: "Choose the answer supported by the conversation.",
        exercise: { questions: [
          { question: "When is Laura's birthday?", options: [{ option: "In May.", isCorrect: true }, { option: "In December.", isCorrect: false }] },
          { question: "What is the weather usually like?", options: [{ option: "Cool and dry.", isCorrect: true }, { option: "Hot and rainy.", isCorrect: false }] },
        ] },
      },
    ],
  },
  languageFocus: {
    blocks: [
      { type: "subsection", label: "Months and seasons", heading: 4 },
      {
        type: "meaning",
        value: [
          { display: "block", as: "p", parts: [bold("January, February, March, April, May, June")] },
          { display: "block", as: "p", parts: [bold("July, August, September, October, November, December")] },
          spacer(),
          { display: "block", as: "p", parts: [bold("spring, summer, autumn/fall, winter")] },
          spacer(),
          { display: "block", as: "p", parts: [bold("When is your birthday?"), " It's in May."] },
          { display: "block", as: "p", parts: [bold("What's summer like?"), " It's usually hot."] },
          { display: "block", as: "p", parts: ["Use ", bold("in"), " with months and seasons: in July, in winter."] },
        ],
      },
      {
        type: "ccq",
        value: [
          { as: "p", parts: ["Is March a month or a season?"] },
          { as: "p", parts: ["Do we say in July or on July?"] },
          { as: "p", parts: ["Are the seasons the same at the same time everywhere?"] },
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
          { question: "The month after January is ___.", options: [{ option: "February", isCorrect: true }, { option: "December", isCorrect: false }] },
          { question: "The month before May is ___.", options: [{ option: "April", isCorrect: true }, { option: "June", isCorrect: false }] },
          { question: "My birthday is ___ August.", options: [{ option: "in", isCorrect: true }, { option: "on", isCorrect: false }] },
          { question: "December is a ___.", options: [{ option: "month", isCorrect: true }, { option: "season", isCorrect: false }] },
          { question: "Summer is usually ___.", options: [{ option: "hot", isCorrect: true }, { option: "freezing", isCorrect: false }] },
          { question: "The season after summer is ___.", options: [{ option: "autumn", isCorrect: true }, { option: "spring", isCorrect: false }] },
          { question: "___ is your birthday?", options: [{ option: "When", isCorrect: true }, { option: "Where", isCorrect: false }] },
          { question: "What's winter ___?", options: [{ option: "like", isCorrect: true }, { option: "do", isCorrect: false }] },
        ] },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the sentences.",
        exercise: { blocks: [
          { block: [{ text: "January, " }, { blank: "February" }, { text: ", March." }], lineBreak: true },
          { block: [{ text: "April, " }, { blank: "May" }, { text: ", June." }], lineBreak: true },
          { block: [{ text: "My birthday is " }, { blank: "in" }, { text: " October." }], lineBreak: true },
          { block: [{ text: "The hottest season is " }, { blank: "summer" }, { text: "." }], lineBreak: true },
          { block: [{ text: "The coldest season is " }, { blank: "winter" }, { text: "." }], lineBreak: true },
          { block: [{ blank: "When" }, { text: " is your birthday?" }], lineBreak: true },
          { block: [{ text: "What's spring " }, { blank: "like" }, { text: "?" }], lineBreak: true },
          { block: [{ text: "December is a " }, { blank: "month" }, { text: "." }], lineBreak: true },
        ] },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: { items: [
          { prompt: "birthday / when / your / is", answer: "When is your birthday?" },
          { prompt: "in / birthday / my / May / is", answer: "My birthday is in May." },
          { prompt: "summer / what's / like", answer: "What's summer like?" },
          { prompt: "hot / usually / it / is", answer: "It is usually hot." },
        ] },
      },
    ],
  },
  production: {
    blocks: [{
      type: "task",
      instruction: "Create a seasons calendar:",
      listType: "checkbox",
      items: [
        { content: ["Write the four seasons for your country."], textarea: true },
        { content: ["Add three important months or dates."], textarea: true },
        { content: ["Describe the weather in your favorite season."], textarea: true },
      ],
    }],
  },
};
