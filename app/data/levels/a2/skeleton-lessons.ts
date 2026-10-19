import { a2 } from "../a2";
import type { LessonStepData } from "../lesson-step-types";
import type { LessonContent } from "../a1/skeleton-lessons";

type LessonSeed = {
  unit: number;
  lesson: 1 | 2;
  phrases: readonly [string, string, string, string];
};

const seeds: readonly LessonSeed[] = [
  { unit: 1, lesson: 1, phrases: ["Hi, I'm Camila. What's your name?", "I'm Ben. It's nice to meet you.", "Where do you live?", "I live near the city center."] },
  { unit: 1, lesson: 2, phrases: ["Do you work around here?", "Yes, I do.", "Are you from this city?", "No, I'm not."] },
  { unit: 2, lesson: 1, phrases: ["What do you do?", "I'm a software developer.", "Where does your sister work?", "She works at a hospital."] },
  { unit: 2, lesson: 2, phrases: ["I start work at half past eight.", "I have lunch around noon.", "When do you finish work?", "I usually finish at six."] },
  { unit: 3, lesson: 1, phrases: ["How much is this backpack?", "It's forty-five dollars.", "How much are those shoes?", "They're sixty dollars."] },
  { unit: 3, lesson: 2, phrases: ["Which jacket do you prefer?", "I prefer the lighter one.", "Is the blue one cheaper?", "Yes, but the black one is better."] },
  { unit: 4, lesson: 1, phrases: ["What kind of shows do you watch?", "I really like comedies.", "Do you enjoy documentaries?", "No, I don't watch them very often."] },
  { unit: 4, lesson: 2, phrases: ["Would you like to see a movie tonight?", "Yes, I'd love to.", "Do you want to meet at seven?", "Sorry, I have to work."] },
  { unit: 5, lesson: 1, phrases: ["Who is standing next to your mother?", "That's my uncle Leo.", "What are the children doing?", "They're playing in the garden."] },
  { unit: 5, lesson: 2, phrases: ["How many cousins do you have?", "I have a lot of cousins.", "Are there many children in your family?", "No, there are only a few."] },
  { unit: 6, lesson: 1, phrases: ["I go running after work.", "I play tennis on Saturdays.", "Do you exercise at home?", "Yes, I follow online classes."] },
  { unit: 6, lesson: 2, phrases: ["How often do you go swimming?", "I go twice a week.", "Do you ever ride a bike?", "Yes, but not very often."] },
  { unit: 7, lesson: 1, phrases: ["What did you do yesterday?", "I met some friends downtown.", "Did you have dinner together?", "Yes, we went to a new restaurant."] },
  { unit: 7, lesson: 2, phrases: ["Where were you on vacation?", "I was in Florianópolis.", "How was the weather?", "It was warm and sunny."] },
  { unit: 8, lesson: 1, phrases: ["Is there a bank near here?", "Yes, there's one across from the park.", "Are there any cafés nearby?", "There's a good café on King Street."] },
  { unit: 8, lesson: 2, phrases: ["There are a lot of stores nearby.", "There isn't much traffic at night.", "Are there many parks?", "Yes, there are several green areas."] },
  { unit: 9, lesson: 1, phrases: ["What does your new teacher look like?", "She's tall and has curly hair.", "Does she wear glasses?", "Yes, she does."] },
  { unit: 9, lesson: 2, phrases: ["Which person is your brother?", "He's the man wearing a green jacket.", "Is he the one talking to Mia?", "No, he's standing by the window."] },
  { unit: 10, lesson: 1, phrases: ["Have you finished the report yet?", "Yes, I've already sent it.", "Has Nina called the client yet?", "No, she hasn't called yet."] },
  { unit: 10, lesson: 2, phrases: ["Have you ever traveled alone?", "Yes, I went to Chile last year.", "How long have you lived here?", "I've lived here for five years."] },
  { unit: 11, lesson: 1, phrases: ["My hometown is small but lively.", "You can visit the old market.", "Where should I have lunch?", "You should try the cafés by the river."] },
  { unit: 11, lesson: 2, phrases: ["You should visit the art museum.", "You can take the bus from downtown.", "Where can we see the sunset?", "You should go to Hilltop Park."] },
  { unit: 12, lesson: 1, phrases: ["It's important to get enough sleep.", "It's a good idea to drink more water.", "What's the best thing to do for a cold?", "The best thing is to rest."] },
  { unit: 12, lesson: 2, phrases: ["Could you recommend something for a cough?", "You could try these tablets.", "May I take them before meals?", "Yes, but read the instructions first."] },
  { unit: 13, lesson: 1, phrases: ["I love spicy food.", "So do I.", "I don't eat meat.", "Neither do I."] },
  { unit: 13, lesson: 2, phrases: ["I'd like the vegetable soup, please.", "I'll have the grilled chicken.", "Would you like anything to drink?", "Yes, I'll have sparkling water."] },
  { unit: 14, lesson: 1, phrases: ["The Amazon is larger than many forests.", "Everest is the highest mountain in the world.", "Which ocean is the deepest?", "The Pacific is the deepest ocean."] },
  { unit: 14, lesson: 2, phrases: ["How far is the airport?", "It's about fifteen kilometers away.", "How high is that mountain?", "It's nearly two thousand meters high."] },
  { unit: 15, lesson: 1, phrases: ["I'm meeting Carla tomorrow morning.", "We're going to discuss the new project.", "Are you doing anything on Friday?", "I'm having lunch with a client."] },
  { unit: 15, lesson: 2, phrases: ["Please tell Marcus the meeting is at ten.", "Can you ask him to call me?", "What should I tell Ana?", "Tell her to bring the documents."] },
  { unit: 16, lesson: 1, phrases: ["My new apartment is much quieter.", "I changed jobs two months ago.", "Have you made many new friends?", "Yes, I've met some great people."] },
  { unit: 16, lesson: 2, phrases: ["I plan to study engineering.", "I'd like to work abroad.", "Do you hope to travel next year?", "Yes, I want to visit Canada."] },
];

const words = (sentence: string) => sentence.split(" ");

const createLesson = ({ unit, lesson, phrases }: LessonSeed): LessonContent => {
  const unitData = a2.units[unit - 1];
  const lessonData = unitData.lessons[lesson - 1];

  const steps: readonly LessonStepData[] = [
    {
      type: "get-ready",
      slug: "get-ready",
      label: "Get ready",
      slides: phrases.slice(0, 3).map((quote) => ({ image: "", audio: "", quote })),
    },
    {
      type: "listen",
      slug: "listen",
      label: "Listen",
      instruction: `Listen to a conversation about ${lessonData.title.toLowerCase()}.`,
      audio: "",
      dialogue: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", [line]] as const),
      questionInstruction: "Choose the correct answer.",
      question: "Do the speakers discuss the lesson topic?",
      options: ["True", "False"],
      answer: "True",
      followUpInstruction: "Answer the open questions.",
      followUp: [
        { question: "What does speaker A say first?", answer: phrases[0] },
        { question: "How does speaker B respond?", answer: phrases[1] },
        { question: "What does speaker A say next?", answer: phrases[2] },
        { question: "What is speaker B's final response?", answer: phrases[3] },
      ],
    },
    {
      type: "language-focus",
      slug: "language-focus",
      label: "Language focus",
      instruction: lessonData.description,
      items: phrases.map((phrase) => [
        phrase,
        `Use this expression to communicate about ${lessonData.title.toLowerCase()}.`,
        "Pronunciation to be added.",
        "Form notes to be added.",
        undefined,
        "Portuguese translation to be added.",
      ] as const),
    },
    {
      type: "try-it",
      slug: "try-it",
      label: "Try it",
      instruction: "Put the words in the correct order.",
      items: phrases.map((phrase) => {
        const answer = words(phrase);
        return { words: [...answer].reverse(), answer };
      }),
    },
    {
      type: "use-it",
      slug: "use-it",
      label: "Use it",
      instruction: `Practice ${lessonData.title.toLowerCase()} with a partner.`,
      prompts: [
        lessonData.description,
        "Use at least two expressions from this lesson.",
        "Personalize the exchange with your own information.",
      ],
      model: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", line] as const),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Can you…?",
      instruction: "Check your progress.",
      checks: [
        `Can you ${lessonData.description.charAt(0).toLowerCase()}${lessonData.description.slice(1)}`,
        `Can you understand key expressions about ${lessonData.title.toLowerCase()}?`,
        "Can you ask and answer questions about this topic?",
        "Can you complete a short communicative task using the target language?",
      ],
    },
  ];

  return {
    level: "a2",
    unit: { number: unitData.number, title: unitData.title },
    lesson: { number: lesson, title: lessonData.title },
    steps,
  };
};

export const a2SkeletonLessons = Object.fromEntries(
  seeds.map((seed) => [`${seed.unit}/${seed.lesson}`, createLesson(seed)]),
) as Record<string, LessonContent>;
