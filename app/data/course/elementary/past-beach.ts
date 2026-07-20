import { createPastLesson } from "./create-past-lesson";

export const elementaryPastBeach = createPastLesson({
  href: "/courses/elementary/past-beach",
  subtitle: "Beach",
  description: "We went to the beach. The weather was beautiful.",
  vocabulary: ["beach", "swimsuit", "sunscreen", "waves"],
  story: [
    {
      src: "/assets/img/cefr/a2/unit-1-last-weekend/laura-beach.avif",
      alt: "Laura spending the day at the beach",
      audio: "Laura went to the beach on Sunday.",
      before: "Laura ",
      verb: "went",
      after: " to the beach on Sunday. ",
      translation: "Laura foi à praia no domingo.",
    },
    {
      alt: "Laura putting on sunscreen",
      audio: "She put on sunscreen.",
      before: "She ",
      verb: "put on",
      after: " sunscreen. ",
      translation: "Ela passou protetor solar.",
    },
    {
      alt: "Laura swimming in the ocean",
      audio: "She swam in the ocean.",
      before: "She ",
      verb: "swam",
      after: " in the ocean. ",
      translation: "Ela nadou no mar.",
    },
    {
      alt: "Laura and her friends playing beach volleyball",
      audio: "They played beach volleyball.",
      before: "They ",
      verb: "played",
      after: " beach volleyball. ",
      translation: "Eles jogaram vôlei de praia.",
    },
    {
      alt: "Laura and her friends having a snack",
      audio: "They ate fruit and drank coconut water.",
      before: "They ",
      verb: "ate",
      after: " fruit and drank coconut water. ",
      translation: "Eles comeram frutas e beberam água de coco.",
    },
    {
      alt: "Laura watching the sunset",
      audio: "Laura watched the sunset before she went home.",
      before: "Laura ",
      verb: "watched",
      after: " the sunset before she went home. ",
      translation: "Laura viu o pôr do sol antes de ir para casa.",
    },
  ],
  introQuestions: [
    { question: "Laura went to the beach on Sunday.", answer: true },
    { question: "Laura stayed out after sunset.", answer: false },
  ],
  dialogue: [
    { speaker: "Laura", line: "Hey Eric. How's it going?" },
    { speaker: "Eric", line: "Pretty good. How was your weekend?" },
    { speaker: "Laura", line: "It was great. I went to the beach on Sunday." },
    { speaker: "Eric", line: "Nice! Who did you go with?" },
    { speaker: "Laura", line: "I went with two friends." },
    { speaker: "Eric", line: "What did you do there?" },
    {
      speaker: "Laura",
      line: "We swam, played volleyball, and watched the sunset.",
    },
    { speaker: "Eric", line: "Was the water cold?" },
    { speaker: "Laura", line: "No, it was warm and calm." },
  ],
  comprehension: [
    {
      question: "Where did Laura go?",
      correct: "To the beach",
      incorrect: "To the movies",
    },
    {
      question: "Who went with Laura?",
      correct: "Two friends",
      incorrect: "Her parents",
    },
    {
      question: "What was the water like?",
      correct: "Warm and calm",
      incorrect: "Cold and rough",
    },
  ],
  answers: [
    "I went to the beach.",
    "I went with my friends.",
    "We swam in the ocean.",
    "Yes, we had fun.",
  ],
  ccqExample: "Laura went to the beach on Sunday.",
  practice: {
    radio: [
      {
        question: "Yesterday we _____ in the ocean.",
        correct: "swam",
        incorrect: "swim",
      },
      {
        question: "They _____ volleyball on the sand.",
        correct: "played",
        incorrect: "play",
      },
    ],
    sentences: [
      { before: "Laura ", blank: "went", after: " to the beach." },
      { before: "We ", blank: "watched", after: " the sunset." },
      { before: "They ", blank: "drank", after: " coconut water." },
    ],
    scramble: [
      {
        prompt: "beach / went / the / we / to",
        answer: "We went to the beach.",
      },
      { prompt: "ocean / swam / the / in / I", answer: "I swam in the ocean." },
      {
        prompt: "volleyball / played / they",
        answer: "They played volleyball.",
      },
    ],
  },
  productionTopic: "your last day at the beach",
});
