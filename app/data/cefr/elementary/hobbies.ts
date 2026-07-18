import { createElementaryLesson } from "./create-elementary-lesson";
export const elementaryHobbies = createElementaryLesson({
  href: "/cefr/elementary/hobbies",
  subtitle: "Hobbies",
  descriptions: ["I enjoy taking photos.", "I'd like to learn to paint."],
  vocabulary: ["photography", "gardening", "painting", "board games"],
  story: [
    {
      sentence: "Kai enjoys taking photos in the park.",
      translation: "Kai gosta de tirar fotos no parque.",
      alt: "A person taking photographs in a park",
    },
    {
      sentence: "He wants to learn to paint.",
      translation: "Ele quer aprender a pintar.",
      alt: "A beginner painting on a canvas",
    },
    {
      sentence: "His friends like playing board games.",
      translation: "Os amigos dele gostam de jogar jogos de tabuleiro.",
      alt: "Friends playing a board game",
    },
  ],
  dialogue: [
    { speaker: "Kai", line: "What do you like doing in your free time?" },
    { speaker: "Nora", line: "I love gardening and cooking." },
    { speaker: "Kai", line: "Would you like to try a new hobby?" },
    { speaker: "Nora", line: "Yes. I'd like to learn to play the guitar." },
    { speaker: "Kai", line: "I want to learn to paint." },
    { speaker: "Nora", line: "We could take an art class together." },
  ],
  comprehension: [
    {
      question: "What does Nora love doing?",
      correct: "Gardening and cooking",
      incorrect: "Running and swimming",
    },
    {
      question: "What would Nora like to learn?",
      correct: "To play the guitar",
      incorrect: "To paint",
    },
    {
      question: "What class could they take?",
      correct: "An art class",
      incorrect: "A dance class",
    },
  ],
  meaning: [
    " uses verb + -ing after enjoy, love, and like to describe activities.",
    "Use to + base verb after want and would like to describe wishes and plans.",
  ],
  columns: [
    {
      title: "Verb + -ing",
      examples: ["I enjoy reading.", "She loves dancing."],
    },
    {
      title: "Verb + to",
      examples: ["I want to paint.", "We'd like to learn."],
    },
    {
      title: "Questions",
      examples: ["What do you enjoy doing?", "What would you like to try?"],
    },
  ],
  note: "Say enjoy reading, but want to read. The pattern depends on the first verb.",
  ccq: [
    "After enjoy, do we use read or reading?",
    "After want, do we use to + verb?",
    "Is a hobby a free-time activity?",
  ],
  practice: [
    {
      question: "I enjoy _____ photos.",
      correct: "taking",
      incorrect: "to take",
    },
    {
      question: "She wants _____ the guitar.",
      correct: "to learn",
      incorrect: "learning",
    },
  ],
  blanks: [
    { before: "They love ", blank: "playing", after: " board games." },
    { before: "I'd like ", blank: "to try", after: " gardening." },
  ],
  scramble: [
    { prompt: "enjoy / photos / taking / I", answer: "I enjoy taking photos." },
    {
      prompt: "learn / wants / paint / to / she / to",
      answer: "She wants to learn to paint.",
    },
  ],
  production: [
    "Describe three hobbies you enjoy.",
    "Write about two hobbies you would like to try.",
    "Interview a classmate about their free-time activities.",
  ],
});
