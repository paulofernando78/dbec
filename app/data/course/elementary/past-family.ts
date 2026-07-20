import { createPastLesson } from "./create-past-lesson";

export const elementaryPastFamily = createPastLesson({
  href: "/courses/elementary/past-family",
  subtitle: "Family",
  description: "I visited my family. We had lunch together.",
  vocabulary: ["relatives", "family lunch", "birthday cake", "photo album"],
  story: [
    {
      alt: "Daniel visiting his grandparents",
      audio: "Daniel visited his grandparents on Saturday.",
      before: "Daniel ",
      verb: "visited",
      after: " his grandparents on Saturday. ",
      translation: "Daniel visitou os avós no sábado.",
    },
    {
      alt: "Daniel helping his grandfather",
      audio: "He helped his grandfather in the garden.",
      before: "He ",
      verb: "helped",
      after: " his grandfather in the garden. ",
      translation: "Ele ajudou o avô no jardim.",
    },
    {
      alt: "The family preparing lunch",
      audio: "His grandmother cooked a big family lunch.",
      before: "His grandmother ",
      verb: "cooked",
      after: " a big family lunch. ",
      translation: "A avó dele preparou um grande almoço em família.",
    },
    {
      alt: "The family celebrating a birthday",
      audio: "They celebrated his cousin's birthday.",
      before: "They ",
      verb: "celebrated",
      after: " his cousin's birthday. ",
      translation: "Eles comemoraram o aniversário do primo dele.",
    },
    {
      alt: "The family looking at old photographs",
      audio: "They looked at old family photos.",
      before: "They ",
      verb: "looked",
      after: " at old family photos. ",
      translation: "Eles olharam fotos antigas da família.",
    },
    {
      alt: "Daniel saying goodbye to his family",
      audio: "Daniel hugged everyone before he left.",
      before: "Daniel ",
      verb: "hugged",
      after: " everyone before he left. ",
      translation: "Daniel abraçou todos antes de ir embora.",
    },
  ],
  introQuestions: [
    { question: "Daniel visited his grandparents on Saturday.", answer: true },
    { question: "The family went to a restaurant for lunch.", answer: false },
  ],
  dialogue: [
    { speaker: "Mia", line: "Hi Daniel. What did you do on Saturday?" },
    { speaker: "Daniel", line: "I visited my grandparents." },
    { speaker: "Mia", line: "Did you have a good time?" },
    { speaker: "Daniel", line: "Yes. We celebrated my cousin's birthday." },
    { speaker: "Mia", line: "What did you eat?" },
    {
      speaker: "Daniel",
      line: "My grandmother cooked lunch, and we had chocolate cake.",
    },
    { speaker: "Mia", line: "Did you give your cousin a present?" },
    { speaker: "Daniel", line: "Yes, I gave her a book. She loved it." },
    { speaker: "Mia", line: "That sounds like a lovely family day." },
  ],
  comprehension: [
    {
      question: "Who did Daniel visit?",
      correct: "His grandparents",
      incorrect: "His teacher",
    },
    {
      question: "What did the family celebrate?",
      correct: "A cousin's birthday",
      incorrect: "A wedding",
    },
    {
      question: "What present did Daniel give?",
      correct: "A book",
      incorrect: "A game",
    },
  ],
  answers: [
    "I visited my grandparents.",
    "I went with my parents.",
    "We had a family lunch.",
    "Yes, we had fun.",
  ],
  ccqExample: "Daniel visited his grandparents on Saturday.",
  practice: {
    radio: [
      {
        question: "We _____ my aunt's birthday yesterday.",
        correct: "celebrated",
        incorrect: "celebrate",
      },
      {
        question: "My uncle _____ us an old photo.",
        correct: "showed",
        incorrect: "show",
      },
    ],
    sentences: [
      { before: "Daniel ", blank: "visited", after: " his grandparents." },
      { before: "His grandmother ", blank: "cooked", after: " lunch." },
      { before: "They ", blank: "looked", after: " at family photos." },
    ],
    scramble: [
      {
        prompt: "grandparents / visited / my / I",
        answer: "I visited my grandparents.",
      },
      {
        prompt: "lunch / family / had / we / a",
        answer: "We had a family lunch.",
      },
      {
        prompt: "birthday / celebrated / they / a",
        answer: "They celebrated a birthday.",
      },
    ],
  },
  productionTopic: "a special day with your family",
});
