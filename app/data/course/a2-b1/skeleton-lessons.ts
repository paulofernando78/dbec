import { a2B1 } from "../a2-b1";
import type { LessonContent } from "../a1/skeleton-lessons";
import type { LessonStepData } from "../lesson-step-types";

type LessonSeed = {
  unit: number;
  lesson: 1 | 2;
  phrases: readonly [string, string, string, string];
};

const seeds: readonly LessonSeed[] = [
  { unit: 1, lesson: 1, phrases: ["Where did you grow up?", "I grew up in a small town.", "What was your school like?", "It was small, but the teachers were great."] },
  { unit: 1, lesson: 2, phrases: ["I used to ride my bike to school.", "Did you use to live near your friends?", "Yes, we used to spend every afternoon together.", "I didn't use to stay indoors much."] },
  { unit: 2, lesson: 1, phrases: ["There are too many cars downtown.", "The city needs more reliable public transportation.", "There isn't enough affordable housing.", "Better public services would improve city life."] },
  { unit: 2, lesson: 2, phrases: ["Could you tell me where the city hall is?", "Do you know what time it opens?", "Can you tell me if this bus goes downtown?", "I'd like to know how much the ticket costs."] },
  { unit: 3, lesson: 1, phrases: ["This apartment is brighter than the other one.", "The kitchen is too small for us.", "The house is more spacious, but it's farther away.", "I think the apartment is convenient enough."] },
  { unit: 3, lesson: 2, phrases: ["I wish I lived closer to work.", "I wish my neighborhood were quieter.", "Do you wish you had more space?", "Yes, but I don't want to move away."] },
  { unit: 4, lesson: 1, phrases: ["Have you ever taken a cooking class?", "Yes, I took one last summer.", "I've never prepared Thai food.", "I made green curry for the first time yesterday."] },
  { unit: 4, lesson: 2, phrases: ["First, chop the onions and garlic.", "Next, heat some oil in a large pan.", "Then, add the vegetables and stir well.", "Finally, serve the dish with rice."] },
  { unit: 5, lesson: 1, phrases: ["I'm going to visit my cousins next month.", "I'll help you compare the flights.", "I think the trip will be amazing.", "We're going to book the hotel tonight."] },
  { unit: 5, lesson: 2, phrases: ["You should make copies of your documents.", "It's a good idea to buy travel insurance.", "Don't forget to check the local weather.", "You'd better keep some money for emergencies."] },
  { unit: 6, lesson: 1, phrases: ["Could you turn the music down?", "Sure, I'll turn it down.", "Please pick your shoes up.", "No problem. I'll put them away."] },
  { unit: 6, lesson: 2, phrases: ["Would you mind closing the window?", "No, not at all.", "Could you please wait here for a moment?", "Of course. Take your time."] },
  { unit: 7, lesson: 1, phrases: ["What do you use this app for?", "I use it to track my expenses.", "This tool is useful for opening boxes.", "You can also use it for cutting string."] },
  { unit: 7, lesson: 2, phrases: ["Try restarting the computer.", "It's a good idea to update the software.", "Why don't you contact technical support?", "Remember to back up your files first."] },
  { unit: 8, lesson: 1, phrases: ["New Year's Eve is a time when families celebrate together.", "June is the month when our town holds its festival.", "It's an event when people wear traditional clothes.", "That's the day when the parade takes place."] },
  { unit: 8, lesson: 2, phrases: ["Before the ceremony begins, everyone removes their shoes.", "When guests arrive, they greet the oldest person first.", "After people finish eating, they exchange small gifts.", "People stay until the final song ends."] },
  { unit: 9, lesson: 1, phrases: ["I studied engineering before I became a designer.", "Now I work for a small technology company.", "I'm taking a management course this semester.", "Next year, I'll apply for a leadership position."] },
  { unit: 9, lesson: 2, phrases: ["If it rains, we'll move the event indoors.", "What will you do if the train is late?", "If I miss it, I'll take the next one.", "We won't arrive on time unless we leave now."] },
  { unit: 10, lesson: 1, phrases: ["I'm good at solving practical problems.", "So am I, but I prefer working with people.", "I enjoy organizing projects and meeting deadlines.", "I do too, especially when the team communicates well."] },
  { unit: 10, lesson: 2, phrases: ["I'd like a job that allows me to be creative.", "I wouldn't enjoy that role because it's too repetitive.", "Why do you want to work from home?", "Because I can concentrate better in a quiet environment."] },
  { unit: 11, lesson: 1, phrases: ["The museum was designed by a local architect.", "The bridge was completed in 1998.", "These murals were painted by community artists.", "The monument was built to honor the city's founders."] },
  { unit: 11, lesson: 2, phrases: ["Coffee is grown in several regions of Brazil.", "Portuguese is spoken throughout the country.", "Many festivals are celebrated every year.", "Natural resources are exported around the world."] },
  { unit: 12, lesson: 1, phrases: ["I was driving home when the storm started.", "While we were waiting, the lights went out.", "She was training for a race when she injured her ankle.", "Fortunately, she recovered and finished the race months later."] },
  { unit: 12, lesson: 2, phrases: ["I've been working on a new project lately.", "How long have you been studying Spanish?", "She's been preparing for the exam since January.", "They haven't been sleeping well recently."] },
  { unit: 13, lesson: 1, phrases: ["The documentary was fascinating.", "I was surprised by the ending.", "The plot became confusing in the middle.", "Overall, it was entertaining and thought-provoking."] },
  { unit: 13, lesson: 2, phrases: ["She's an actor who performs her own stunts.", "That's the director whose film won the award.", "The studio where they filmed the scene is in London.", "It's a story that was inspired by real events."] },
  { unit: 14, lesson: 1, phrases: ["That gesture might mean good luck.", "He is probably asking us to wait.", "It could be considered rude in some cultures.", "She must be confused because she's looking around."] },
  { unit: 14, lesson: 2, phrases: ["You must wear a helmet in this area.", "Visitors aren't allowed to take photographs.", "You don't have to remove your shoes.", "Employees are required to show identification."] },
  { unit: 15, lesson: 1, phrases: ["What would you do if you found a wallet?", "I'd try to contact the owner.", "If I had more free time, I'd volunteer regularly.", "I wouldn't keep it if it belonged to someone else."] },
  { unit: 15, lesson: 2, phrases: ["I should have checked the address before leaving.", "We would have arrived earlier if we'd taken the train.", "You could have called me for help.", "I wouldn't have made that decision without more information."] },
  { unit: 16, lesson: 1, phrases: ["Maya said she couldn't attend the meeting.", "She asked me to send her the notes.", "Daniel explained that his train had been delayed.", "He told us not to wait for him."] },
  { unit: 16, lesson: 2, phrases: ["Leo said that he was changing jobs.", "He told me that the new role was more challenging.", "Did he say when he would start?", "Yes, he said he would start the following Monday."] },
];

const words = (sentence: string) => sentence.split(" ");

const createLesson = ({ unit, lesson, phrases }: LessonSeed): LessonContent => {
  const unitData = a2B1.units[unit - 1];
  const lessonData = unitData.lessons[lesson - 1];
  const lessonObjective = lessonData.description.replace(
    /^By the end of this lesson, students will be (?:better )?able to /,
    "",
  );

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
      questionInstruction: "Listen for gist. Choose the correct answer.",
      question: `The speakers are mainly discussing ${lessonData.title.toLowerCase()}.`,
      options: ["True", "False"],
      answer: "True",
      followUpInstruction: "Listen again and answer the open questions.",
      followUp: [
        { question: "What does speaker A say first?", answer: phrases[0] },
        { question: "How does speaker B respond?", answer: phrases[1] },
        { question: "What additional point does speaker A make?", answer: phrases[2] },
        { question: "How does the exchange end?", answer: phrases[3] },
      ],
    },
    {
      type: "language-focus",
      slug: "language-focus",
      label: "Language focus",
      instruction: lessonObjective,
      items: phrases.map((phrase) => [
        phrase,
        `Use this language to ${lessonData.description.charAt(0).toLowerCase()}${lessonData.description.slice(1)}`,
        "Mark sentence stress and connected speech after adding the audio.",
        "Notice the target structure and identify which words can change.",
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
      instruction: `Complete a communicative task about ${lessonData.title.toLowerCase()}.`,
      prompts: [
        `Share and develop your own ideas about ${lessonData.title.toLowerCase()}.`,
        "Use at least two examples of the target language.",
        "Ask a follow-up question and respond with your own ideas.",
      ],
      model: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", line] as const),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Can you…?",
      instruction: "Check your progress.",
      checks: [
        `Can you ${lessonObjective}`,
        `Can you understand the main idea of a conversation about ${lessonData.title.toLowerCase()}?`,
        "Can you use the target form accurately in a controlled activity?",
        "Can you use the target language in a personalized conversation?",
      ],
    },
  ];

  return {
    level: "a2-b1",
    unit: { number: unitData.number, title: unitData.title },
    lesson: { number: lesson, title: lessonData.title },
    steps,
  };
};

export const a2B1SkeletonLessons = Object.fromEntries(
  seeds.map((seed) => [`${seed.unit}/${seed.lesson}`, createLesson(seed)]),
) as Record<string, LessonContent>;
