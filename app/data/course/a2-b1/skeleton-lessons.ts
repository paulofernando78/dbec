import { a2B1 } from "../a2-b1";
import type { LessonContent } from "../a1/skeleton-lessons";
import type { ConceptCheckData, LessonStepData } from "../lesson-step-types";

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

const outcomes: Record<string, string> = {
  "1/1": "Record three accurate facts about your partner's past.",
  "1/2": "Record two past habits and one clear difference from life now.",
  "2/1": "Agree on the two most urgent city problems and one service improvement.",
  "2/2": "Complete an information card with the requested place, time, route, and price.",
  "3/1": "Choose the more suitable home and record two reasons for the decision.",
  "3/2": "Create a three-change wish list and identify the highest priority.",
  "4/1": "Record one life experience and one specific past detail about it.",
  "4/2": "Produce a complete six-step recipe that another pair can follow.",
  "5/1": "Complete a plan card with one prior intention, one prediction, and one spontaneous decision.",
  "5/2": "Produce a five-item travel advice checklist ranked by importance.",
  "6/1": "Resolve three household requests and record which requests were accepted.",
  "6/2": "Complete a polite request-response role-play and record the agreed actions.",
  "7/1": "Match three objects to their purposes and add one alternative use.",
  "7/2": "Choose the best solution to a practical problem and record the action sequence.",
  "8/1": "Create a four-fact celebration profile identifying when each event happens.",
  "8/2": "Produce an ordered customs guide with four time relationships.",
  "9/1": "Create a four-point past-present-future timeline.",
  "9/2": "Agree on a response plan for three possible future conditions.",
  "10/1": "Produce a skills profile with two strengths and supporting examples.",
  "10/2": "Select the most suitable job and record two reasons and one reservation.",
  "11/1": "Create a three-fact landmark card including creator and completion details where known.",
  "11/2": "Create a four-fact country profile with accurate passive statements.",
  "12/1": "Tell and record a four-event account distinguishing background and main events.",
  "12/2": "Record two ongoing activities with duration or starting-point details.",
  "13/1": "Agree on one recommendation and record two reactions using -ed and -ing adjectives.",
  "13/2": "Produce a four-sentence entertainment profile using distinct relative clauses.",
  "14/1": "Interpret three gestures and rank each interpretation by certainty.",
  "14/2": "Produce a sign guide with one permission, obligation, prohibition, and non-obligation.",
  "15/1": "Agree on a response to two hypothetical dilemmas and record the reasons.",
  "15/2": "Produce a two-part retrospective: one regret and one alternative past result.",
  "16/1": "Relay one statement and one request, then check both against the original message.",
  "16/2": "Produce an accurate four-point report of another person's earlier statements.",
};

const ccqs: Record<string, ConceptCheckData["questions"]> = {
  "1/1": [
    { context: "Where did you grow up?", question: "Past or present?", options: ["Past", "Present"], answer: "Past" },
    { context: "What was your school like?", question: "Does this ask for a description?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "1/2": [
    { context: "I used to ride my bike to school.", question: "Was this a past habit?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I didn't use to stay indoors much.", question: "Was staying indoors common for me?", options: ["Yes", "No"], answer: "No" },
  ],
  "2/1": [
    { context: "There are too many cars.", question: "Is the number acceptable?", options: ["Yes", "No"], answer: "No" },
    { context: "There isn't enough housing.", question: "Do people need more housing?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "2/2": [
    { context: "Could you tell me where city hall is?", question: "Is this a polite request for information?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Do you know what time it opens?", question: "Does the speaker know the opening time?", options: ["Yes", "No"], answer: "No" },
  ],
  "3/1": [
    { context: "The kitchen is too small for us.", question: "Is the kitchen suitable?", options: ["Yes", "No"], answer: "No" },
    { context: "The apartment is convenient enough.", question: "Does it meet the need?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "3/2": [
    { context: "I wish I lived closer to work.", question: "Do I live close to work now?", options: ["Yes", "No"], answer: "No" },
    { context: "I wish my neighborhood were quieter.", question: "Is my neighborhood quiet enough now?", options: ["Yes", "No"], answer: "No" },
  ],
  "4/1": [
    { context: "Have you ever taken a cooking class?", question: "Is a specific past time stated?", options: ["Yes", "No"], answer: "No" },
    { context: "I took one last summer.", question: "Is a finished past time stated?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "4/2": [
    { context: "First, chop the onions. Finally, serve the dish.", question: "Does finally introduce the last step?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Next, heat some oil.", question: "Is this before or after the first step?", options: ["Before", "After"], answer: "After" },
  ],
  "5/1": [
    { context: "We're going to book the hotel tonight.", question: "Is this an intention already formed?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I'll help you compare the flights.", question: "Is this an offer made now?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "5/2": [
    { context: "You should make copies.", question: "Advice or obligation?", options: ["Advice", "Obligation"], answer: "Advice" },
    { context: "You'd better keep emergency money.", question: "Is there a possible negative result if you don't?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "6/1": [
    { context: "Could you turn the music down?", question: "Does the speaker want lower volume?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Please pick your shoes up.", question: "Should the shoes remain on the floor?", options: ["Yes", "No"], answer: "No" },
  ],
  "6/2": [
    { context: "Would you mind closing the window?", question: "Is this a polite request?", options: ["Yes", "No"], answer: "Yes" },
    { context: "No, not at all.", question: "Does the person agree to help?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "7/1": [
    { context: "I use it to track expenses.", question: "Does this explain purpose?", options: ["Yes", "No"], answer: "Yes" },
    { context: "It's useful for opening boxes.", question: "Is opening boxes one use?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "7/2": [
    { context: "Try restarting the computer.", question: "Is this a suggestion?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Remember to back up your files first.", question: "Should the backup happen before the other action?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "8/1": [
    { context: "June is the month when our town holds its festival.", question: "Does when identify a time?", options: ["Yes", "No"], answer: "Yes" },
    { context: "That's the day when the parade takes place.", question: "Does the clause identify which day?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "8/2": [
    { context: "Before the ceremony begins, everyone removes their shoes.", question: "Which happens first?", options: ["Removing shoes", "The ceremony begins"], answer: "Removing shoes" },
    { context: "People stay until the final song ends.", question: "Do they leave before the final song ends?", options: ["Yes", "No"], answer: "No" },
  ],
  "9/1": [
    { context: "I studied engineering before I became a designer.", question: "Which happened first?", options: ["Studied engineering", "Became a designer"], answer: "Studied engineering" },
    { context: "Next year, I'll apply for a position.", question: "Past, present, or future?", options: ["Past", "Present", "Future"], answer: "Future" },
  ],
  "9/2": [
    { context: "If it rains, we'll move indoors.", question: "Is rain certain?", options: ["Yes", "No"], answer: "No" },
    { context: "We won't arrive on time unless we leave now.", question: "Must we leave now to arrive on time?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "10/1": [
    { context: "I'm good at solving problems.", question: "Does this describe a skill?", options: ["Yes", "No"], answer: "Yes" },
    { context: "So am I.", question: "Agreement or disagreement?", options: ["Agreement", "Disagreement"], answer: "Agreement" },
  ],
  "10/2": [
    { context: "I wouldn't enjoy it because it's repetitive.", question: "Does because introduce a reason?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I'd like a job that allows creativity.", question: "Does the clause identify the kind of job?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "11/1": [
    { context: "The museum was designed by a local architect.", question: "Is the focus the museum or the architect?", options: ["The museum", "The architect"], answer: "The museum" },
    { context: "The bridge was completed in 1998.", question: "Is the person who completed it important here?", options: ["Yes", "No"], answer: "No" },
  ],
  "11/2": [
    { context: "Coffee is grown in several regions.", question: "Is this a general fact?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Portuguese is spoken throughout the country.", question: "Is the focus on the language or individual speakers?", options: ["The language", "Individual speakers"], answer: "The language" },
  ],
  "12/1": [
    { context: "I was driving when the storm started.", question: "Which action was already in progress?", options: ["Driving", "The storm started"], answer: "Driving" },
    { context: "While we were waiting, the lights went out.", question: "Did the lights go out during the wait?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "12/2": [
    { context: "I've been working on a project lately.", question: "Is the activity connected to the recent period?", options: ["Yes", "No"], answer: "Yes" },
    { context: "She's been preparing since January.", question: "Did the preparation start in January?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "13/1": [
    { context: "The documentary was fascinating.", question: "Does this describe the documentary or the viewer's feeling?", options: ["The documentary", "The viewer's feeling"], answer: "The documentary" },
    { context: "I was surprised by the ending.", question: "Does this describe the person's feeling?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "13/2": [
    { context: "an actor who performs her own stunts", question: "Does who refer to a person?", options: ["Yes", "No"], answer: "Yes" },
    { context: "the director whose film won", question: "Does whose show a relationship with the film?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "14/1": [
    { context: "That gesture might mean good luck.", question: "Is the speaker certain?", options: ["Yes", "No"], answer: "No" },
    { context: "She must be confused.", question: "Weak or strong conclusion?", options: ["Weak", "Strong"], answer: "Strong" },
  ],
  "14/2": [
    { context: "You must wear a helmet.", question: "Is it required?", options: ["Yes", "No"], answer: "Yes" },
    { context: "You don't have to remove your shoes.", question: "Is removing shoes necessary?", options: ["Yes", "No"], answer: "No" },
  ],
  "15/1": [
    { context: "What would you do if you found a wallet?", question: "Is this an imagined situation?", options: ["Yes", "No"], answer: "Yes" },
    { context: "If I had more time, I'd volunteer.", question: "Do I have more time now?", options: ["Yes", "No"], answer: "No" },
  ],
  "15/2": [
    { context: "I should have checked the address.", question: "Did I check it?", options: ["Yes", "No"], answer: "No" },
    { context: "We would have arrived earlier if we'd taken the train.", question: "Did we take the train?", options: ["Yes", "No"], answer: "No" },
  ],
  "16/1": [
    { context: "Maya said she couldn't attend.", question: "Are these Maya's exact words?", options: ["Yes", "No"], answer: "No" },
    { context: "She asked me to send the notes.", question: "Did she make a request?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "16/2": [
    { context: "Leo said he was changing jobs.", question: "Is the speaker reporting Leo's words?", options: ["Yes", "No"], answer: "Yes" },
    { context: "He said he would start the following Monday.", question: "Does following Monday mean the Monday after the original conversation?", options: ["Yes", "No"], answer: "Yes" },
  ],
};

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
      question: "Which topic best summarizes the conversation?",
      options: [
        lessonData.title,
        unitData.lessons[lesson === 1 ? 1 : 0].title,
        a2B1.units[unit % a2B1.units.length].lessons[0].title,
      ],
      answer: lessonData.title,
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
      type: "concept-check",
      slug: "check-meaning",
      label: "Check meaning",
      instruction: "Choose the answer. Use the context, not only the grammar form.",
      questions: ccqs[`${unit}/${lesson}`],
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
      instruction: `Complete the task twice and produce a clear outcome about ${lessonData.title.toLowerCase()}.`,
      prompts: [
        "Round 1: follow the model. Change the people, places, times, and key details.",
        "Use at least two target expressions and ask one relevant follow-up question.",
        "Round 2: close the model and complete a new exchange with your own or imagined information.",
        outcomes[`${unit}/${lesson}`],
      ],
      model: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", line] as const),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Your progress",
      instruction: "Check your progress.",
      checks: [
        `Target: ${outcomes[`${unit}/${lesson}`]}`,
        `I identify the main idea and relevant details in a conversation about ${lessonData.title.toLowerCase()}.`,
        "I use the target form accurately in controlled practice.",
        "I complete an independent exchange and produce the required outcome.",
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
