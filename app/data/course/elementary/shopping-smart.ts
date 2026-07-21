export const elementaryShoppingSmart = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Shopping Smart",
    descriptions: ["How much rice do we need?", "We need some apples."],
  },
  lessonCard: {
    lessonObjective:
      "By the end of this class, students will be able to talk about quantities, ask for and give information about products, discuss shopping habits, and use 'much', 'many', 'some', and 'any' correctly.",
    grammar: "Much / Many / Some / Any",
    vocabulary: "Shopping",
  },
  introduction: {
    vocabularyCarousel: {
      instruction: "Match the words to the pictures.",
      matchingContent: [
        { as: "span", parts: [{ audio: "shopping list" }, "shopping list"] },
        { as: "span", parts: [{ audio: "price" }, "price"] },
        { as: "span", parts: [{ audio: "discount" }, "discount"] },
        { as: "span", parts: [{ audio: "quantity" }, "quantity"] },
      ],
      imgs: [
        { src: "/", alt: "shopping list" },
        { src: "/", alt: "price" },
        { src: "/", alt: "discount" },
        { src: "/", alt: "quantity" },
      ],
    },
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "A woman writing a shopping list",
          content: [
            { audio: "Rosa makes a shopping list before she goes out." },
            "Rosa makes a shopping list before she goes out.",
            " (Rosa faz uma lista de compras antes de sair.)",
          ],
        },
        {
          src: "/",
          alt: "Rice and vegetables in a basket",
          content: [
            { audio: "She needs some rice and a few vegetables." },
            "She needs some rice and a few vegetables.",
            " (Ela precisa de arroz e alguns legumes.)",
          ],
        },
        {
          src: "/",
          alt: "An empty milk container",
          content: [
            { audio: "There isn't any milk at home." },
            "There isn't any milk at home.",
            " (Não há leite em casa.)",
          ],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Do they have any rice?",
            options: [
              { option: "No", isCorrect: true },
              { option: "Yes", isCorrect: false },
            ],
          },
          {
            question: "How many apples do they need?",
            options: [
              { option: "Six", isCorrect: true },
              { option: "Two", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  presentation: {
    dialogue: {
      instruction: "Listen and read.",
      audioSrc: "/",
      lines: [
        { speaker: "Rosa", line: ["Do we have any rice?"] },
        { speaker: "Tom", line: ["No, we don't have any."] },
        { speaker: "Rosa", line: ["How much rice should I buy?"] },
        {
          speaker: "Tom",
          line: ["One bag is enough. We also need some apples."],
        },
        { speaker: "Rosa", line: ["How many apples do we need?"] },
        { speaker: "Tom", line: ["Six, and please buy some milk too."] },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Do they have any rice?",
            options: [
              { option: "No", isCorrect: true },
              { option: "Yes", isCorrect: false },
            ],
          },
          {
            question: "How many apples do they need?",
            options: [
              { option: "Six", isCorrect: true },
              { option: "Two", isCorrect: false },
            ],
          },
          {
            question: "What else should Rosa buy?",
            options: [
              { option: "Milk", isCorrect: true },
              { option: "Coffee", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  languageFocus: {
    meaning: [
      {
        as: "p",
        parts: [
          { part: "Much / Many / Some / Any", type: "bold" },
          " uses much with uncountable nouns and many with countable plural nouns.",
        ],
      },
      { type: "spacer" },
      {
        as: "p",
        parts: [
          "",
          "Use some mainly in positive sentences and any mainly in questions and negatives.",
        ],
      },
      { type: "spacer" },
    ],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Much",
          items: [
            { parts: [{ audio: "How much rice?" }, "How much rice?"] },
            {
              parts: [
                { audio: "There isn't much milk." },
                "There isn't much milk.",
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Many",
          items: [
            { parts: [{ audio: "How many apples?" }, "How many apples?"] },
            {
              parts: [
                { audio: "There aren't many eggs." },
                "There aren't many eggs.",
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Some / Any",
          items: [
            {
              parts: [{ audio: "We need some bread." }, "We need some bread."],
            },
            {
              parts: [
                { audio: "Do we have any cheese?" },
                "Do we have any cheese?",
              ],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: [
          "Rice, milk, and money are uncountable; apples, bottles, and stores are countable.",
        ],
      },
    ],
    ccq: [
      { as: "p", parts: ["Can we count apples one by one?"] },
      { as: "p", parts: ["Do we use much or many with milk?"] },
      { as: "p", parts: ["Is any common in questions?"] },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "How _____ bananas do you need?",
            options: [
              { option: "many", isCorrect: true },
              { option: "much", isCorrect: false },
            ],
          },
          {
            question: "We don't have _____ bread.",
            options: [
              { option: "any", isCorrect: true },
              { option: "some", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the sentences.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "I need " },
              { blank: "some" },
              { text: " tomatoes." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "How " },
              { blank: "much" },
              { text: " water do we have?" },
            ],
            lineBreak: true,
          },
        ],
      },
    },
    scramble: {
      showWordBank: false,
      instruction: "Unscramble the sentence.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "many / need / eggs / how / we / do",
            answer: "How many eggs do we need?",
          },
          {
            prompt: "any / have / don't / milk / we",
            answer: "We don't have any milk.",
          },
        ],
      },
    },
  },
  production: {
    task: {
      instruction: "Complete the tasks:",
      type: "checkbox",
      items: [
        {
          content: ["Create a shopping list for three meals."],
          textarea: true,
        },
        {
          content: ["Write questions with how much and how many."],
          textarea: true,
        },
        {
          content: ["Plan a shopping trip with a classmate."],
          textarea: false,
        },
      ],
    },
  },
};
