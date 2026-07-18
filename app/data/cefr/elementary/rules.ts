import { createElementaryLesson } from "./create-elementary-lesson";
export const elementaryRules = createElementaryLesson({
  href: "/cefr/elementary/rules",
  subtitle: "Rules",
  descriptions: ["You must wear a helmet.", "We have to arrive on time."],
  vocabulary: ["helmet", "uniform", "permission", "prohibited"],
  story: [
    {
      sentence: "Visitors must show identification.",
      translation: "Visitantes devem mostrar identificação.",
      alt: "A visitor showing identification",
    },
    {
      sentence: "Employees have to wear a uniform.",
      translation: "Funcionários precisam usar uniforme.",
      alt: "Employees wearing uniforms",
    },
    {
      sentence: "You mustn't take photos here.",
      translation: "Você não pode tirar fotos aqui.",
      alt: "A no photography sign",
    },
  ],
  dialogue: [
    {
      speaker: "Guide",
      line: "Welcome to the science lab. There are some rules.",
    },
    { speaker: "Leo", line: "Do we have to wear safety glasses?" },
    { speaker: "Guide", line: "Yes, you must wear them at all times." },
    { speaker: "Leo", line: "Can we bring food inside?" },
    { speaker: "Guide", line: "No. You mustn't eat or drink in the lab." },
    { speaker: "Leo", line: "Do we have to turn off our phones?" },
    { speaker: "Guide", line: "Yes, and you have to follow the instructor." },
  ],
  comprehension: [
    {
      question: "What must visitors wear?",
      correct: "Safety glasses",
      incorrect: "A hat",
    },
    {
      question: "Can visitors eat in the lab?",
      correct: "No",
      incorrect: "Yes",
    },
    {
      question: "Who must visitors follow?",
      correct: "The instructor",
      incorrect: "Another visitor",
    },
  ],
  meaning: [
    " and have to express obligation.",
    "Mustn't means something is prohibited; don't have to means it is not necessary.",
  ],
  columns: [
    { title: "Must", examples: ["You must be careful.", "You must show ID."] },
    {
      title: "Have to",
      examples: ["We have to leave now.", "She has to work."],
    },
    {
      title: "Negative",
      examples: ["You mustn't park here.", "You don't have to pay."],
    },
  ],
  note: "Mustn't and don't have to are different: prohibited versus not necessary.",
  ccq: [
    "Is a rule optional?",
    "Does mustn't mean prohibited?",
    "Does don't have to mean you can choose?",
  ],
  practice: [
    {
      question: "You _____ use your phone during the test.",
      correct: "mustn't",
      incorrect: "don't have to",
    },
    {
      question: "She _____ wear a uniform at work.",
      correct: "has to",
      incorrect: "have to",
    },
  ],
  blanks: [
    { before: "Visitors ", blank: "must", after: " show identification." },
    { before: "We ", blank: "have to", after: " arrive on time." },
  ],
  scramble: [
    {
      prompt: "helmet / wear / must / a / you",
      answer: "You must wear a helmet.",
    },
    {
      prompt: "to / we / early / have / leave",
      answer: "We have to leave early.",
    },
  ],
  production: [
    "Write five rules for a classroom or workplace.",
    "Explain what visitors must and mustn't do.",
    "Compare rules with a classmate.",
  ],
});
