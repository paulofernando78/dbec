import { createPastLesson } from "./create-past-lesson";

export const elementaryPastHome = createPastLesson({
  href: "/courses/elementary/past-home",
  subtitle: "Home",
  description: "I stayed at home. I cleaned and relaxed.",
  vocabulary: ["laundry", "vacuum cleaner", "living room", "takeout"],
  story: [
    {
      alt: "Nina staying at home on a rainy Saturday",
      audio: "Nina stayed at home on Saturday.",
      before: "Nina ",
      verb: "stayed",
      after: " at home on Saturday. ",
      translation: "Nina ficou em casa no sábado.",
    },
    {
      alt: "Nina doing the laundry",
      audio: "She did the laundry in the morning.",
      before: "She ",
      verb: "did",
      after: " the laundry in the morning. ",
      translation: "Ela lavou a roupa de manhã.",
    },
    {
      alt: "Nina cleaning the living room",
      audio: "She vacuumed the living room.",
      before: "She ",
      verb: "vacuumed",
      after: " the living room. ",
      translation: "Ela aspirou a sala de estar.",
    },
    {
      alt: "Nina cooking soup",
      audio: "She made soup for lunch.",
      before: "She ",
      verb: "made",
      after: " soup for lunch. ",
      translation: "Ela fez sopa para o almoço.",
    },
    {
      alt: "Nina reading on the sofa",
      audio: "She read a book on the sofa.",
      before: "She ",
      verb: "read",
      after: " a book on the sofa. ",
      translation: "Ela leu um livro no sofá.",
    },
    {
      alt: "Nina calling her friend",
      audio: "In the evening, she called a friend and ordered takeout.",
      before: "In the evening, she ",
      verb: "called",
      after: " a friend and ordered takeout. ",
      translation: "À noite, ela ligou para uma amiga e pediu comida.",
    },
  ],
  introQuestions: [
    { question: "Nina stayed at home on Saturday.", answer: true },
    { question: "Nina ate lunch at a restaurant.", answer: false },
  ],
  dialogue: [
    { speaker: "Nina", line: "Hi Leo. How was your weekend?" },
    { speaker: "Leo", line: "Busy! I went out all day. What about you?" },
    { speaker: "Nina", line: "I stayed at home because it rained." },
    { speaker: "Leo", line: "What did you do at home?" },
    { speaker: "Nina", line: "I did the laundry and cleaned the living room." },
    { speaker: "Leo", line: "Did you relax too?" },
    { speaker: "Nina", line: "Yes. I read a book and listened to music." },
    { speaker: "Leo", line: "What did you have for dinner?" },
    { speaker: "Nina", line: "I ordered takeout and called a friend." },
  ],
  comprehension: [
    {
      question: "Why did Nina stay home?",
      correct: "Because it rained",
      incorrect: "Because she was sick",
    },
    {
      question: "What room did Nina clean?",
      correct: "The living room",
      incorrect: "The bathroom",
    },
    {
      question: "What did Nina do to relax?",
      correct: "She read a book",
      incorrect: "She played soccer",
    },
  ],
  answers: [
    "I stayed at home.",
    "I was alone.",
    "I cleaned the living room.",
    "Yes, I relaxed.",
  ],
  ccqExample: "Nina stayed at home on Saturday.",
  practice: {
    radio: [
      {
        question: "Yesterday I _____ the laundry.",
        correct: "did",
        incorrect: "do",
      },
      {
        question: "She _____ soup for lunch.",
        correct: "made",
        incorrect: "make",
      },
    ],
    sentences: [
      { before: "Nina ", blank: "stayed", after: " at home." },
      { before: "She ", blank: "vacuumed", after: " the living room." },
      { before: "She ", blank: "ordered", after: " takeout." },
    ],
    scramble: [
      { prompt: "home / stayed / at / I", answer: "I stayed at home." },
      { prompt: "laundry / did / the / she", answer: "She did the laundry." },
      { prompt: "book / read / a / we", answer: "We read a book." },
    ],
  },
  productionTopic: "a day you stayed at home",
});
