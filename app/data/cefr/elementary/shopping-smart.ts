import { createElementaryLesson } from "./create-elementary-lesson";
export const elementaryShoppingSmart = createElementaryLesson({
  href: "/cefr/elementary/shopping-smart",
  subtitle: "Shopping Smart",
  descriptions: ["How much rice do we need?", "We need some apples."],
  vocabulary: ["shopping list", "price", "discount", "quantity"],
  story: [
    {
      sentence: "Rosa makes a shopping list before she goes out.",
      translation: "Rosa faz uma lista de compras antes de sair.",
      alt: "A woman writing a shopping list",
    },
    {
      sentence: "She needs some rice and a few vegetables.",
      translation: "Ela precisa de arroz e alguns legumes.",
      alt: "Rice and vegetables in a basket",
    },
    {
      sentence: "There isn't any milk at home.",
      translation: "Não há leite em casa.",
      alt: "An empty milk container",
    },
  ],
  dialogue: [
    { speaker: "Rosa", line: "Do we have any rice?" },
    { speaker: "Tom", line: "No, we don't have any." },
    { speaker: "Rosa", line: "How much rice should I buy?" },
    { speaker: "Tom", line: "One bag is enough. We also need some apples." },
    { speaker: "Rosa", line: "How many apples do we need?" },
    { speaker: "Tom", line: "Six, and please buy some milk too." },
  ],
  comprehension: [
    { question: "Do they have any rice?", correct: "No", incorrect: "Yes" },
    {
      question: "How many apples do they need?",
      correct: "Six",
      incorrect: "Two",
    },
    {
      question: "What else should Rosa buy?",
      correct: "Milk",
      incorrect: "Coffee",
    },
  ],
  meaning: [
    " uses much with uncountable nouns and many with countable plural nouns.",
    "Use some mainly in positive sentences and any mainly in questions and negatives.",
  ],
  columns: [
    { title: "Much", examples: ["How much rice?", "There isn't much milk."] },
    {
      title: "Many",
      examples: ["How many apples?", "There aren't many eggs."],
    },
    {
      title: "Some / Any",
      examples: ["We need some bread.", "Do we have any cheese?"],
    },
  ],
  note: "Rice, milk, and money are uncountable; apples, bottles, and stores are countable.",
  ccq: [
    "Can we count apples one by one?",
    "Do we use much or many with milk?",
    "Is any common in questions?",
  ],
  practice: [
    {
      question: "How _____ bananas do you need?",
      correct: "many",
      incorrect: "much",
    },
    {
      question: "We don't have _____ bread.",
      correct: "any",
      incorrect: "some",
    },
  ],
  blanks: [
    { before: "I need ", blank: "some", after: " tomatoes." },
    { before: "How ", blank: "much", after: " water do we have?" },
  ],
  scramble: [
    {
      prompt: "many / need / eggs / how / we / do",
      answer: "How many eggs do we need?",
    },
    {
      prompt: "any / have / don't / milk / we",
      answer: "We don't have any milk.",
    },
  ],
  production: [
    "Create a shopping list for three meals.",
    "Write questions with how much and how many.",
    "Plan a shopping trip with a classmate.",
  ],
});
