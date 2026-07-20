import { createElementaryLesson } from "./create-elementary-lesson";
export const elementaryHealthyLiving = createElementaryLesson({
  href: "/courses/elementary/healthy-living",
  subtitle: "Healthy Living",
  descriptions: [
    "You should drink more water.",
    "You shouldn't skip breakfast.",
  ],
  vocabulary: ["balanced diet", "exercise", "sleep", "stress"],
  story: [
    {
      sentence: "Maya feels tired every morning.",
      translation: "Maya se sente cansada todas as manhãs.",
      alt: "A tired woman in the morning",
    },
    {
      sentence: "She should go to bed earlier.",
      translation: "Ela deveria dormir mais cedo.",
      alt: "A clock beside a bed",
    },
    {
      sentence: "She should eat a balanced breakfast.",
      translation: "Ela deveria tomar um café da manhã equilibrado.",
      alt: "A healthy balanced breakfast",
    },
  ],
  dialogue: [
    { speaker: "Maya", line: "I feel tired all the time." },
    { speaker: "Noah", line: "What time do you go to bed?" },
    { speaker: "Maya", line: "Usually after midnight." },
    { speaker: "Noah", line: "You should go to bed earlier." },
    { speaker: "Maya", line: "I also skip breakfast." },
    {
      speaker: "Noah",
      line: "You shouldn't skip it. You should eat something healthy.",
    },
  ],
  comprehension: [
    {
      question: "How does Maya feel?",
      correct: "Tired",
      incorrect: "Energetic",
    },
    {
      question: "What should Maya do?",
      correct: "Go to bed earlier",
      incorrect: "Stay up later",
    },
    {
      question: "What shouldn't Maya skip?",
      correct: "Breakfast",
      incorrect: "Exercise",
    },
  ],
  meaning: [
    " gives advice and recommendations.",
    "Use should + base verb; use shouldn't + base verb for negative advice.",
  ],
  columns: [
    {
      title: "Positive",
      examples: ["You should rest.", "She should exercise."],
    },
    {
      title: "Negative",
      examples: ["You shouldn't smoke.", "He shouldn't skip lunch."],
    },
    {
      title: "Question",
      examples: ["Should I see a doctor?", "What should I eat?"],
    },
  ],
  note: "Do not use to after should: You should exercise.",
  ccq: [
    "Is should an order or advice?",
    "After should, do we use the base verb?",
    "Does shouldn't mean it is a good idea?",
  ],
  practice: [
    {
      question: "You _____ drink more water.",
      correct: "should",
      incorrect: "should to",
    },
    {
      question: "You _____ eat so much sugar.",
      correct: "shouldn't",
      incorrect: "should",
    },
  ],
  blanks: [
    { before: "You ", blank: "should", after: " sleep eight hours." },
    { before: "He ", blank: "shouldn't", after: " skip breakfast." },
  ],
  scramble: [
    {
      prompt: "should / more / water / drink / you",
      answer: "You should drink more water.",
    },
    {
      prompt: "late / shouldn't / eat / she",
      answer: "She shouldn't eat late.",
    },
  ],
  production: [
    "Write five tips for a healthy week.",
    "Give advice to someone who feels tired.",
    "Compare health habits with a classmate.",
  ],
});
