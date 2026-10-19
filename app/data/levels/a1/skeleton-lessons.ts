import { a1 } from "../a1";
import type { LessonStepData } from "../lesson-step-types";

type LessonSeed = {
  unit: number;
  lesson: 1 | 2;
  phrases: readonly [string, string, string, string];
};

export type LessonContent = {
  level: string;
  unit: { number: number; title: string };
  lesson: { number: number; title: string };
  steps: readonly LessonStepData[];
};

const seeds: readonly LessonSeed[] = [
  { unit: 1, lesson: 2, phrases: ["Goodbye. See you soon.", "What's your phone number?", "My email address is maria@example.com.", "Are you on social media?"] },
  { unit: 2, lesson: 1, phrases: ["What's this?", "It's a notebook.", "What are these?", "They're keys."] },
  { unit: 2, lesson: 2, phrases: ["Where is the phone?", "It's on the desk.", "Is it under the chair?", "Yes, it is."] },
  { unit: 3, lesson: 1, phrases: ["Where are you from?", "I'm from Brazil.", "Are you Brazilian?", "Yes, I am."] },
  { unit: 3, lesson: 2, phrases: ["What does she look like?", "She's tall and friendly.", "How old is he?", "He's twenty-five years old."] },
  { unit: 4, lesson: 1, phrases: ["Whose jacket is this?", "It's mine.", "Is this Ana's scarf?", "No, hers is blue."] },
  { unit: 4, lesson: 2, phrases: ["What's the weather like?", "It's cold and windy.", "What are you wearing?", "I'm wearing a warm coat."] },
  { unit: 5, lesson: 1, phrases: ["What time is it there?", "It's nine o'clock.", "Is it morning in Tokyo?", "No, it's evening."] },
  { unit: 5, lesson: 2, phrases: ["What are they doing?", "They're having lunch.", "Is he working now?", "No, he's taking a break."] },
  { unit: 6, lesson: 1, phrases: ["How do you get to work?", "I take the bus.", "My sister drives to school.", "We walk home together."] },
  { unit: 6, lesson: 2, phrases: ["What time do you get up?", "I get up at seven.", "Do you study every day?", "Yes, I do."] },
  { unit: 7, lesson: 1, phrases: ["Do you live in a house?", "No, I live in an apartment.", "How many bedrooms are there?", "There are two bedrooms."] },
  { unit: 7, lesson: 2, phrases: ["There is a sofa in the living room.", "There are two lamps by the bed.", "Is there a dishwasher?", "Yes, there is."] },
  { unit: 8, lesson: 1, phrases: ["What do you do?", "I'm a designer.", "Where do you work?", "I work in an office."] },
  { unit: 8, lesson: 2, phrases: ["Being a nurse is rewarding.", "It's a stressful job.", "The hours are flexible.", "That sounds interesting."] },
  { unit: 9, lesson: 1, phrases: ["Is there any milk?", "Yes, there is some milk.", "We need a few tomatoes.", "I don't have any rice."] },
  { unit: 9, lesson: 2, phrases: ["I usually eat breakfast.", "She often cooks at home.", "We rarely order takeout.", "He never drinks coffee."] },
  { unit: 10, lesson: 1, phrases: ["What sports do you play?", "I play volleyball.", "Do you watch soccer?", "Yes, I watch it every weekend."] },
  { unit: 10, lesson: 2, phrases: ["I can play the guitar.", "She can dance very well.", "Can you draw?", "No, I can't."] },
  { unit: 11, lesson: 1, phrases: ["What are you going to do tonight?", "I'm going to watch a movie.", "Are you going to travel this weekend?", "No, I'm going to stay home."] },
  { unit: 11, lesson: 2, phrases: ["How are you going to celebrate?", "We're going to have a party.", "Who is going to come?", "Our friends and family are coming."] },
  { unit: 12, lesson: 1, phrases: ["What's wrong?", "I have a headache.", "I feel tired.", "My back hurts."] },
  { unit: 12, lesson: 2, phrases: ["Get some rest.", "Drink plenty of water.", "Take this medicine.", "Don't go to work today."] },
  { unit: 13, lesson: 1, phrases: ["Where can I buy a charger?", "There's an electronics store near here.", "It's across from the bank.", "The pharmacy is next to the supermarket."] },
  { unit: 13, lesson: 2, phrases: ["How do I get to the station?", "Go straight for two blocks.", "Turn left at the corner.", "It's on your right."] },
  { unit: 14, lesson: 1, phrases: ["What did you do last weekend?", "I visited my grandparents.", "We went to a concert.", "I stayed home and relaxed."] },
  { unit: 14, lesson: 2, phrases: ["Did you enjoy your vacation?", "Yes, I did.", "Where did you stay?", "We stayed at a small hotel."] },
  { unit: 15, lesson: 1, phrases: ["Where were you born?", "I was born in Recife.", "My grandparents were farmers.", "We were a big family."] },
  { unit: 15, lesson: 2, phrases: ["What was your favorite subject?", "I loved history.", "Did you like your teachers?", "Yes, they were very kind."] },
  { unit: 16, lesson: 1, phrases: ["Can I speak to Julia, please?", "She's not here right now.", "Can I leave her a message?", "Please ask her to call me."] },
  { unit: 16, lesson: 2, phrases: ["Would you like to come to my party?", "I'd love to.", "Do you want to have dinner on Friday?", "Sorry, I can't make it."] },
];

const ccqs: Record<string, readonly { question: string; answer: string }[]> = {
  "1/2": [
    { question: "Are the speakers ending their conversation?", answer: "Yes." },
    { question: "Do they want to contact each other again?", answer: "Yes." },
  ],
  "2/1": [
    { question: "Does “this” refer to one thing?", answer: "Yes." },
    { question: "Does “these” refer to more than one thing?", answer: "Yes." },
  ],
  "2/2": [
    { question: "Is the phone on top of the desk?", answer: "Yes." },
    { question: "Does “under” mean lower than something?", answer: "Yes." },
  ],
  "3/1": [
    { question: "Is Brazil the speaker's country of origin?", answer: "Yes." },
    { question: "Does “Brazilian” describe nationality?", answer: "Yes." },
  ],
  "3/2": [
    { question: "Does “What does she look like?” ask about appearance?", answer: "Yes." },
    { question: "Does “How old” ask about age?", answer: "Yes." },
  ],
  "4/1": [
    { question: "Does “mine” mean it belongs to me?", answer: "Yes." },
    { question: "Does “hers” mean it belongs to a woman or girl?", answer: "Yes." },
  ],
  "4/2": [
    { question: "Is the weather cold now?", answer: "Yes." },
    { question: "Is the person wearing the coat now?", answer: "Yes." },
  ],
  "5/1": [
    { question: "Are the speakers asking about the present time?", answer: "Yes." },
    { question: "Can it be morning in one city and evening in another?", answer: "Yes." },
  ],
  "5/2": [
    { question: "Are the activities happening now?", answer: "Yes." },
    { question: "Is he working at this moment?", answer: "No." },
  ],
  "6/1": [
    { question: "Does the speaker regularly use the bus?", answer: "Yes." },
    { question: "Does the sister travel by car?", answer: "Yes." },
  ],
  "6/2": [
    { question: "Is getting up at seven a routine?", answer: "Yes." },
    { question: "Does “every day” mean only once?", answer: "No." },
  ],
  "7/1": [
    { question: "Does the speaker live in a house?", answer: "No." },
    { question: "Are there two bedrooms in the apartment?", answer: "Yes." },
  ],
  "7/2": [
    { question: "Do we use “there is” for one sofa?", answer: "Yes." },
    { question: "Do we use “there are” for two lamps?", answer: "Yes." },
  ],
  "8/1": [
    { question: "Does “What do you do?” ask about a job?", answer: "Yes." },
    { question: "Does the designer work in an office?", answer: "Yes." },
  ],
  "8/2": [
    { question: "Does the speaker think nursing has a positive result?", answer: "Yes." },
    { question: "Does “stressful” describe a relaxed job?", answer: "No." },
  ],
  "9/1": [
    { question: "Is there milk in the kitchen?", answer: "Yes." },
    { question: "Is there rice available?", answer: "No." },
  ],
  "9/2": [
    { question: "Does “usually” mean most of the time?", answer: "Yes." },
    { question: "Does “never” mean zero times?", answer: "Yes." },
  ],
  "10/1": [
    { question: "Does the speaker participate in volleyball?", answer: "Yes." },
    { question: "Does the speaker watch soccer regularly?", answer: "Yes." },
  ],
  "10/2": [
    { question: "Does “can” express an ability here?", answer: "Yes." },
    { question: "Is the speaker able to draw?", answer: "No." },
  ],
  "11/1": [
    { question: "Are these plans for the future?", answer: "Yes." },
    { question: "Has the speaker decided to watch a movie?", answer: "Yes." },
  ],
  "11/2": [
    { question: "Is the party a future plan?", answer: "Yes." },
    { question: "Are friends and family expected to attend?", answer: "Yes." },
  ],
  "12/1": [
    { question: "Does the speaker feel completely well?", answer: "No." },
    { question: "Is a headache a problem with the head?", answer: "Yes." },
  ],
  "12/2": [
    { question: "Are these sentences giving advice?", answer: "Yes." },
    { question: "Does “Don't go” tell someone to avoid going?", answer: "Yes." },
  ],
  "13/1": [
    { question: "Can the speaker buy a charger at the electronics store?", answer: "Yes." },
    { question: "Is the pharmacy beside the supermarket?", answer: "Yes." },
  ],
  "13/2": [
    { question: "Should the person continue forward first?", answer: "Yes." },
    { question: "Should the person turn right at the corner?", answer: "No." },
  ],
  "14/1": [
    { question: "Are the speakers talking about a finished weekend?", answer: "Yes." },
    { question: "Did the visit happen in the past?", answer: "Yes." },
  ],
  "14/2": [
    { question: "Is the vacation finished?", answer: "Yes." },
    { question: "Did they stay at a large hotel?", answer: "No." },
  ],
  "15/1": [
    { question: "Is the speaker talking about their birthplace?", answer: "Yes." },
    { question: "Are the grandparents farmers now?", answer: "We don't know." },
  ],
  "15/2": [
    { question: "Is the speaker describing school in the past?", answer: "Yes." },
    { question: "Were the teachers unkind?", answer: "No." },
  ],
  "16/1": [
    { question: "Is Julia available to speak now?", answer: "No." },
    { question: "Does the caller want Julia to call later?", answer: "Yes." },
  ],
  "16/2": [
    { question: "Is the first sentence an invitation?", answer: "Yes." },
    { question: "Does “I can't make it” decline an invitation?", answer: "Yes." },
  ],
};

const words = (sentence: string) => sentence.split(" ");

const createLesson = ({ unit, lesson, phrases }: LessonSeed): LessonContent => {
  const unitData = a1.units[unit - 1];
  const lessonData = unitData.lessons[lesson - 1];
  const steps: readonly LessonStepData[] = [
    {
      type: "get-ready",
      slug: "get-ready",
      label: "Get ready",
      slides: phrases.slice(0, 3).map((quote) => ({
        image: "",
        audio: "",
        quote,
      })),
    },
    {
      type: "listen",
      slug: "listen",
      label: "Listen",
      instruction: `Listen to a short conversation about ${lessonData.title.toLowerCase()}.`,
      audio: "",
      dialogue: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", [line]] as const),
      questionInstruction: "Choose the correct answer.",
      question: `The speakers are talking about ${lessonData.title.toLowerCase()}.`,
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
        "Change the details to make the conversation true for you.",
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
        "Can you ask and answer a simple question about this topic?",
        "Can you use the lesson language in a short conversation?",
      ],
    },
  ];

  return {
    level: "a1",
    unit: { number: unitData.number, title: unitData.title },
    lesson: { number: lesson, title: lessonData.title },
    steps,
  };
};

export const a1SkeletonLessons = Object.fromEntries(
  seeds.map((seed) => [`${seed.unit}/${seed.lesson}`, createLesson(seed)]),
) as Record<string, LessonContent>;
