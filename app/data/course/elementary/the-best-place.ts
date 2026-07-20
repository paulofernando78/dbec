import { createElementaryLesson } from "./create-elementary-lesson";
export const elementaryTheBestPlace = createElementaryLesson({
  href: "/courses/elementary/the-best-place",
  subtitle: "The Best Place",
  descriptions: [
    "This is the most beautiful beach.",
    "It is the best place to relax.",
  ],
  vocabulary: ["view", "waterfall", "historic", "peaceful"],
  story: [
    {
      sentence: "Sunset Beach is the most peaceful place on the island.",
      translation: "Sunset Beach é o lugar mais tranquilo da ilha.",
      alt: "A peaceful beach at sunset",
    },
    {
      sentence: "Blue Mountain has the best view.",
      translation: "Blue Mountain tem a melhor vista.",
      alt: "A wide view from a mountain",
    },
    {
      sentence: "Old Town is the most historic area.",
      translation: "Old Town é a região mais histórica.",
      alt: "Historic buildings in an old town",
    },
  ],
  dialogue: [
    { speaker: "Lia", line: "What is the best place to visit here?" },
    { speaker: "Sam", line: "I think Blue Mountain is the most beautiful." },
    { speaker: "Lia", line: "Is it difficult to get there?" },
    { speaker: "Sam", line: "Yes, but it has the best view in the region." },
    { speaker: "Lia", line: "What is the easiest place to visit?" },
    { speaker: "Sam", line: "Old Town. It is the closest attraction." },
  ],
  comprehension: [
    {
      question: "Which place is the most beautiful for Sam?",
      correct: "Blue Mountain",
      incorrect: "Old Town",
    },
    {
      question: "Which place has the best view?",
      correct: "Blue Mountain",
      incorrect: "Sunset Beach",
    },
    {
      question: "Which attraction is the closest?",
      correct: "Old Town",
      incorrect: "Blue Mountain",
    },
  ],
  meaning: [
    " identifies one person, place, or thing as number one in a group.",
    "Use the + adjective-est or the most + adjective.",
  ],
  columns: [
    { title: "Short adjectives", examples: ["the tallest", "the easiest"] },
    {
      title: "Long adjectives",
      examples: ["the most beautiful", "the most peaceful"],
    },
    { title: "Irregular", examples: ["good → the best", "bad → the worst"] },
  ],
  note: "Use the before a superlative: It is the best place.",
  ccq: [
    "Are we comparing two places or a whole group?",
    "Is the best place number one?",
    "Do we say the most beautiful or the beautifulest?",
  ],
  practice: [
    {
      question: "This is _____ restaurant in town.",
      correct: "the best",
      incorrect: "the better",
    },
    {
      question: "It is _____ beach on the island.",
      correct: "the most peaceful",
      incorrect: "the peacefulest",
    },
  ],
  blanks: [
    { before: "That is ", blank: "the tallest", after: " building here." },
    { before: "June is ", blank: "the busiest", after: " month." },
  ],
  scramble: [
    {
      prompt: "best / this / place / the / is",
      answer: "This is the best place.",
    },
    {
      prompt: "most / city / beautiful / the / is / it",
      answer: "It is the most beautiful city.",
    },
  ],
  production: [
    "Describe the best place in your region.",
    "Write three superlative sentences about places.",
    "Recommend one place to a classmate.",
  ],
});
