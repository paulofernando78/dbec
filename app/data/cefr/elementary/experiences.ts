import { createElementaryLesson } from "./create-elementary-lesson";
export const elementaryExperiences = createElementaryLesson({
  href: "/cefr/elementary/experiences",
  subtitle: "Experiences",
  descriptions: [
    "I have visited another country.",
    "Have you ever tried sushi?",
  ],
  vocabulary: ["abroad", "adventure", "concert", "traditional food"],
  story: [
    {
      sentence: "Eva has visited three countries.",
      translation: "Eva visitou três países.",
      alt: "A traveler looking at a world map",
    },
    {
      sentence: "She has tried many traditional foods.",
      translation: "Ela experimentou muitas comidas tradicionais.",
      alt: "Different traditional foods",
    },
    {
      sentence: "She has never traveled alone.",
      translation: "Ela nunca viajou sozinha.",
      alt: "A traveler with friends",
    },
  ],
  dialogue: [
    { speaker: "Eva", line: "Have you ever traveled abroad?" },
    { speaker: "Max", line: "Yes, I have. I have visited Chile." },
    { speaker: "Eva", line: "Have you ever tried Chilean food?" },
    { speaker: "Max", line: "Yes, I have, but I have never tried curanto." },
    { speaker: "Eva", line: "Have you ever traveled alone?" },
    { speaker: "Max", line: "No, I haven't. I usually travel with my family." },
  ],
  comprehension: [
    {
      question: "Which country has Max visited?",
      correct: "Chile",
      incorrect: "Peru",
    },
    { question: "Has Max tried curanto?", correct: "No", incorrect: "Yes" },
    {
      question: "Who does Max travel with?",
      correct: "His family",
      incorrect: "He travels alone",
    },
  ],
  meaning: [
    " talks about life experiences when the exact time is not important.",
    "Use have/has + past participle; ever asks about any time and never means at no time.",
  ],
  columns: [
    {
      title: "Positive",
      examples: ["I have traveled abroad.", "She has tried sushi."],
    },
    {
      title: "Negative",
      examples: ["I haven't been there.", "He has never flown."],
    },
    {
      title: "Question",
      examples: ["Have you ever traveled?", "Has she tried it?"],
    },
  ],
  note: "Use the past participle: go → gone, see → seen, eat → eaten.",
  ccq: [
    "Is the exact past time important?",
    "Do we use have with I and you?",
    "Does never describe zero experiences?",
  ],
  practice: [
    {
      question: "She _____ visited Argentina.",
      correct: "has",
      incorrect: "have",
    },
    {
      question: "Have you ever _____ sushi?",
      correct: "eaten",
      incorrect: "ate",
    },
  ],
  blanks: [
    { before: "I have ", blank: "seen", after: " that movie." },
    { before: "He has never ", blank: "flown", after: " in a plane." },
  ],
  scramble: [
    {
      prompt: "ever / you / traveled / have / abroad",
      answer: "Have you ever traveled abroad?",
    },
    {
      prompt: "never / she / sushi / has / tried",
      answer: "She has never tried sushi.",
    },
  ],
  production: [
    "Write five sentences about your life experiences.",
    "Write three Have you ever questions.",
    "Interview a classmate about new experiences.",
  ],
});
