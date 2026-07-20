import { createElementaryLesson } from "./create-elementary-lesson";
export const elementaryCityLife = createElementaryLesson({
  href: "/courses/elementary/city-life",
  subtitle: "City Life",
  descriptions: [
    "The city is busier than the town.",
    "The subway is faster than the bus.",
  ],
  vocabulary: ["crowded", "quiet", "subway", "traffic"],
  story: [
    {
      sentence: "Metro City is bigger and busier than Lake Town.",
      translation: "Metro City é maior e mais agitada que Lake Town.",
      alt: "A large busy city and a small quiet town",
    },
    {
      sentence: "The subway is faster than the bus.",
      translation: "O metrô é mais rápido que o ônibus.",
      alt: "A subway and a bus in the city",
    },
    {
      sentence: "Lake Town is quieter and cleaner.",
      translation: "Lake Town é mais tranquila e limpa.",
      alt: "A clean quiet street in a small town",
    },
  ],
  dialogue: [
    { speaker: "Ana", line: "Do you like living in Metro City?" },
    { speaker: "Ben", line: "Yes, but it is noisier than my hometown." },
    { speaker: "Ana", line: "Is public transportation good?" },
    { speaker: "Ben", line: "Yes. The subway is faster than the bus." },
    { speaker: "Ana", line: "What do you miss about your hometown?" },
    { speaker: "Ben", line: "It is quieter, cleaner, and less crowded." },
  ],
  comprehension: [
    {
      question: "Which place is noisier?",
      correct: "Metro City",
      incorrect: "Ben's hometown",
    },
    {
      question: "Which transportation is faster?",
      correct: "The subway",
      incorrect: "The bus",
    },
    {
      question: "What does Ben miss?",
      correct: "Quiet, clean streets",
      incorrect: "Heavy traffic",
    },
  ],
  meaning: [
    " compares two people, places, or things.",
    "Use adjective + -er + than for short adjectives and more + adjective + than for many long adjectives.",
  ],
  columns: [
    {
      title: "Short adjectives",
      examples: ["small → smaller than", "busy → busier than"],
    },
    {
      title: "Long adjectives",
      examples: ["more crowded than", "more expensive than"],
    },
    {
      title: "Irregular",
      examples: ["good → better than", "bad → worse than"],
    },
  ],
  note: "Use than after the comparative: The city is bigger than the town.",
  ccq: [
    "Are we comparing one place or two?",
    "Is a busier place more or less active?",
    "Do we say more faster or faster?",
  ],
  practice: [
    {
      question: "The city is _____ than the village.",
      correct: "busier",
      incorrect: "busy",
    },
    {
      question: "The subway is _____ than the bus.",
      correct: "faster",
      incorrect: "more fast",
    },
  ],
  blanks: [
    { before: "My street is ", blank: "quieter", after: " than downtown." },
    { before: "The city is ", blank: "more crowded", after: " on Fridays." },
  ],
  scramble: [
    {
      prompt: "town / city / bigger / the / is / than / the",
      answer: "The city is bigger than the town.",
    },
    {
      prompt: "bus / faster / subway / the / is / the / than",
      answer: "The subway is faster than the bus.",
    },
  ],
  production: [
    "Compare your city with another place in four sentences.",
    "Write two questions using comparatives.",
    "Ask a classmate which place they prefer and why.",
  ],
});
