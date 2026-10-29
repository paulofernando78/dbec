import { a2 } from "../a2";
import type { LessonStepData } from "../lesson-step-types";
import type { LessonContent } from "../a1/skeleton-lessons";

type LessonSeed = {
  unit: number;
  lesson: 1 | 2;
  phrases: readonly [string, string, string, string];
};

const seeds: readonly LessonSeed[] = [
  { unit: 1, lesson: 1, phrases: ["Hi, I'm Camila. What's your name?", "I'm Ben. It's nice to meet you.", "Where are you from?", "I'm from Brazil."] },
  { unit: 1, lesson: 2, phrases: ["Are you free after class?", "Yes, I am.", "Is biology your favorite subject?", "No, it isn't."] },
  { unit: 2, lesson: 1, phrases: ["What do you do?", "I'm a fitness instructor.", "Where does your sister work?", "She works at a design company."] },
  { unit: 2, lesson: 2, phrases: ["I start work at eight.", "I work in the morning.", "I work on weekdays.", "I finish around six."] },
  { unit: 3, lesson: 1, phrases: ["How much is this backpack?", "It's forty-five dollars.", "How much are those shoes?", "They're sixty dollars."] },
  { unit: 3, lesson: 2, phrases: ["Which jacket do you prefer?", "I prefer the lighter one.", "Is the blue one cheaper?", "No, the black one is more stylish."] },
  { unit: 4, lesson: 1, phrases: ["What kind of shows do you watch?", "I really like comedies.", "Do you enjoy documentaries?", "No, I don't watch them very often."] },
  { unit: 4, lesson: 2, phrases: ["Would you like to see a movie tonight?", "Yes, I'd love to.", "Do you want to meet at seven?", "I'd like to, but I have to work."] },
  { unit: 5, lesson: 1, phrases: ["Is your sister working in another city?", "Yes, she is.", "What are your parents doing?", "They're studying English."] },
  { unit: 5, lesson: 2, phrases: ["How many cousins do you have?", "I have a lot of cousins.", "I have a few cousins.", "I don't have any brothers or sisters."] },
  { unit: 6, lesson: 1, phrases: ["I go running after work.", "I play tennis on Saturdays.", "Do you exercise at home?", "Yes, I do weight training."] },
  { unit: 6, lesson: 2, phrases: ["How often do you go swimming?", "I go twice a week.", "How long do you swim?", "About an hour each time."] },
  { unit: 7, lesson: 1, phrases: ["What did you do last weekend?", "I went shopping downtown.", "Did you have dinner there?", "Yes, we went to a new restaurant."] },
  { unit: 7, lesson: 2, phrases: ["Where were you on vacation?", "I was in Florianópolis.", "How was the weather?", "It was warm and sunny."] },
  { unit: 8, lesson: 1, phrases: ["Is there a bank near here?", "Yes, there's one across from the park.", "Are there any cafés nearby?", "There's a good café on King Street."] },
  { unit: 8, lesson: 2, phrases: ["Are there many stores nearby?", "There are a few.", "How much traffic is there?", "There isn't much traffic at night."] },
  { unit: 9, lesson: 1, phrases: ["What does your new teacher look like?", "She's tall, has curly hair, and wears glasses.", "How old is she?", "She's in her thirties."] },
  { unit: 9, lesson: 2, phrases: ["Which person is your brother?", "He's the man wearing a green jacket.", "Is he the one talking to Mia?", "No, he's the one standing by the window."] },
  { unit: 10, lesson: 1, phrases: ["Have you visited the space center yet?", "Yes, I've already been there.", "Has Nina tried Cuban food yet?", "No, she hasn't tried it yet."] },
  { unit: 10, lesson: 2, phrases: ["Have you ever traveled alone?", "Yes, I went to Chile last year.", "How long have you lived here?", "I've lived here for five years."] },
  { unit: 11, lesson: 1, phrases: ["My hometown is fairly small.", "It's lively and interesting.", "Downtown is crowded, but the parks are quiet.", "It can be noisy, though."] },
  { unit: 11, lesson: 2, phrases: ["You should visit the art museum.", "You can take the bus from downtown.", "You can't miss the old market.", "You shouldn't go too late."] },
  { unit: 12, lesson: 1, phrases: ["I have a bad headache.", "It's important to get some rest.", "I have a cold.", "It's a good idea to drink liquids."] },
  { unit: 12, lesson: 2, phrases: ["Could I have something for a cough?", "You could try these tablets.", "May I have a bottle of pain medicine?", "Why don't you try these pills?"] },
  { unit: 13, lesson: 1, phrases: ["I love spicy food.", "So do I.", "I don't eat meat.", "Neither do I."] },
  { unit: 13, lesson: 2, phrases: ["I'd like the vegetable soup, please.", "I'll have the grilled chicken.", "Would you like anything to drink?", "Yes, I'll have sparkling water."] },
  { unit: 14, lesson: 1, phrases: ["The Amazon is larger than the Congo rainforest.", "Everest is the highest mountain in the world.", "Which city is more crowded, City A or City B?", "City A is more crowded than City B."] },
  { unit: 14, lesson: 2, phrases: ["How far is the airport?", "It's about fifteen kilometers away.", "How high is that mountain?", "It's nearly two thousand meters high."] },
  { unit: 15, lesson: 1, phrases: ["I'm meeting Carla tomorrow morning.", "We're going to discuss the new project.", "Are you doing anything on Friday?", "I'm having lunch with a client."] },
  { unit: 15, lesson: 2, phrases: ["Please tell Marcus the meeting is at ten.", "Can you ask him to call me?", "What should I tell Ana?", "Tell her to bring the documents."] },
  { unit: 16, lesson: 1, phrases: ["My new apartment is much quieter.", "I changed jobs two months ago.", "Have you made many new friends?", "Yes, I've met some great people."] },
  { unit: 16, lesson: 2, phrases: ["I plan to study engineering.", "I'd like to work abroad.", "Do you hope to travel next year?", "Yes, I want to visit Canada."] },
];

const words = (sentence: string) => sentence.split(" ");

const ccqs: Record<string, readonly {
  context: string;
  question: string;
  options: readonly string[];
  answer: string;
}[]> = {
  "1/1": [
    { context: "She's my classmate.", question: "A man or a woman?", options: ["A man", "A woman"], answer: "A woman" },
    { context: "This is my class.", question: "My class or another person's class?", options: ["My class", "Another person's class"], answer: "My class" },
    { context: "Where are you from?", question: "Name or country?", options: ["Name", "Country"], answer: "Country" },
  ],
  "1/2": [
    { context: "Are you free? — Yes, I am.", question: "Free or busy?", options: ["Free", "Busy"], answer: "Free" },
    { context: "Is biology your favorite subject?", question: "Yes/no or detailed information?", options: ["Yes/no", "Detailed information"], answer: "Yes/no" },
    { context: "Are your classes interesting? — Yes, they are.", question: "One class or more than one?", options: ["One class", "More than one"], answer: "More than one" },
  ],
  "2/1": [
    { context: "What do you do?", question: "Job or routine?", options: ["Job", "Routine"], answer: "Job" },
    { context: "She works at a hospital.", question: "Workplace?", options: ["A hospital", "A school"], answer: "A hospital" },
    { context: "What does Amy do?", question: "Job or workplace?", options: ["Job", "Workplace"], answer: "Job" },
    { context: "Where does Amy work?", question: "Job or workplace?", options: ["Job", "Workplace"], answer: "Workplace" },
  ],
  "2/2": [
    { context: "I start at eight.", question: "Start time or finish time?", options: ["Start time", "Finish time"], answer: "Start time" },
    { context: "I work on Saturdays.", question: "A day or a clock time?", options: ["A day", "A clock time"], answer: "A day" },
    { context: "around noon", question: "Exactly noon or approximately noon?", options: ["Exactly noon", "Approximately noon"], answer: "Approximately noon" },
    { context: "until six", question: "Stop at six or start at six?", options: ["Stop at six", "Start at six"], answer: "Stop at six" },
  ],
  "3/1": [
    { context: "this T-shirt", question: "Near or far?", options: ["Near", "Far"], answer: "Near" },
    { context: "that jacket", question: "Near or far?", options: ["Near", "Far"], answer: "Far" },
    { context: "these sneakers", question: "One item or several?", options: ["One item", "Several"], answer: "Several" },
    { context: "the gray ones", question: "One item or several?", options: ["One item", "Several"], answer: "Several" },
  ],
  "3/2": [
    { context: "The scarf is made of silk.", question: "Material or color?", options: ["Material", "Color"], answer: "Material" },
    { context: "The blue dress is lighter than the black one.", question: "Which dress is lighter?", options: ["The blue dress", "The black dress"], answer: "The blue dress" },
    { context: "I prefer the silver one.", question: "One choice or no choice?", options: ["One choice", "No choice"], answer: "One choice" },
    { context: "The black dress is more stylish than the blue one.", question: "Which dress is more stylish?", options: ["The black dress", "The blue dress"], answer: "The black dress" },
  ],
  "4/1": [
    { context: "I love it.", question: "Positive or negative?", options: ["Positive", "Negative"], answer: "Positive" },
    { context: "Do you like rap?", question: "Yes/no or type?", options: ["Yes/no", "Type"], answer: "Yes/no" },
    { context: "What kind of movies do you watch?", question: "Yes/no or specific information?", options: ["Yes/no", "Specific information"], answer: "Specific information" },
    { context: "I like Imagine Dragons. I listen to them every day.", question: "Them = one song or the band?", options: ["One song", "The band"], answer: "The band" },
  ],
  "4/2": [
    { context: "Would you like to go?", question: "Invitation or description?", options: ["Invitation", "Description"], answer: "Invitation" },
    { context: "I'd love to.", question: "Accept or decline?", options: ["Accept", "Decline"], answer: "Accept" },
    { context: "I'd like to, but I have to work.", question: "Accept or decline?", options: ["Accept", "Decline"], answer: "Decline" },
    { context: "I have to work.", question: "Obligation or preference?", options: ["Obligation", "Preference"], answer: "Obligation" },
  ],
  "5/1": [
    { context: "The children are playing.", question: "Now or every day?", options: ["Now", "Every day"], answer: "Now" },
    { context: "Is your sister working?", question: "One person or several people?", options: ["One person", "Several people"], answer: "One person" },
    { context: "My parents are studying English this year.", question: "Temporary or permanent?", options: ["Temporary", "Permanent"], answer: "Temporary" },
  ],
  "5/2": [
    { context: "a lot of cousins", question: "Many or few?", options: ["Many", "Few"], answer: "Many" },
    { context: "How many cousins do you have?", question: "A number or a name?", options: ["A number", "A name"], answer: "A number" },
    { context: "only a few children", question: "A small or large number?", options: ["A small number", "A large number"], answer: "A small number" },
    { context: "I don't have any brothers or sisters.", question: "Zero or more than zero?", options: ["Zero", "More than zero"], answer: "Zero" },
  ],
  "6/1": [
    { context: "I go running after work.", question: "Exercise habit or action now?", options: ["Exercise habit", "Action now"], answer: "Exercise habit" },
    { context: "I play tennis on Saturdays.", question: "Regular or one time?", options: ["Regular", "One time"], answer: "Regular" },
    { context: "I do weight training.", question: "Team sport or gym exercise?", options: ["Team sport", "Gym exercise"], answer: "Gym exercise" },
    { context: "Do you exercise at home?", question: "Yes/no or specific activity?", options: ["Yes/no", "Specific activity"], answer: "Yes/no" },
  ],
  "6/2": [
    { context: "twice a week", question: "Two times or three times?", options: ["Two times", "Three times"], answer: "Two times" },
    { context: "How often...?", question: "Frequency or place?", options: ["Frequency", "Place"], answer: "Frequency" },
    { context: "I always exercise before work.", question: "Every time or sometimes?", options: ["Every time", "Sometimes"], answer: "Every time" },
    { context: "How long do you practice?", question: "Duration or frequency?", options: ["Duration", "Frequency"], answer: "Duration" },
  ],
  "7/1": [
    { context: "I went shopping last weekend.", question: "Past or present?", options: ["Past", "Present"], answer: "Past" },
    { context: "Did you have dinner?", question: "Past question or present question?", options: ["Past question", "Present question"], answer: "Past question" },
    { context: "Did you work?", question: "After did: base verb or past verb?", options: ["Base verb", "Past verb"], answer: "Base verb" },
    { context: "I went shopping.", question: "Go now or go in the past?", options: ["Go now", "Go in the past"], answer: "Go in the past" },
  ],
  "7/2": [
    { context: "I was in Florianópolis.", question: "One person or several people?", options: ["One person", "Several people"], answer: "One person" },
    { context: "We were on vacation.", question: "Past or future?", options: ["Past", "Future"], answer: "Past" },
    { context: "They weren't at the hotel.", question: "At the hotel or not at the hotel?", options: ["At the hotel", "Not at the hotel"], answer: "Not at the hotel" },
    { context: "How long were you away?", question: "Duration or place?", options: ["Duration", "Place"], answer: "Duration" },
  ],
  "8/1": [
    { context: "There's a bank.", question: "One bank or several banks?", options: ["One bank", "Several banks"], answer: "One bank" },
    { context: "across from the park", question: "Same side or opposite side?", options: ["Same side", "Opposite side"], answer: "Opposite side" },
    { context: "Are there any cafés?", question: "One café or possibly more than one?", options: ["One café", "Possibly more than one"], answer: "Possibly more than one" },
    { context: "The café is between the bank and the library.", question: "How many places are around the café?", options: ["One", "Two"], answer: "Two" },
  ],
  "8/2": [
    { context: "a lot of stores", question: "Many or few?", options: ["Many", "Few"], answer: "Many" },
    { context: "There isn't much traffic.", question: "A large amount or a small amount?", options: ["A large amount", "A small amount"], answer: "A small amount" },
    { context: "How many parks are there?", question: "Number or amount?", options: ["Number", "Amount"], answer: "Number" },
    { context: "How much traffic is there?", question: "Number or amount?", options: ["Number", "Amount"], answer: "Amount" },
  ],
  "9/1": [
    { context: "She's tall and has curly hair.", question: "Appearance or personality?", options: ["Appearance", "Personality"], answer: "Appearance" },
    { context: "What does she look like?", question: "Description or name?", options: ["Description", "Name"], answer: "Description" },
    { context: "She has a beard and wears glasses.", question: "Have: beard or glasses?", options: ["Beard", "Glasses"], answer: "Beard" },
    { context: "How tall is she?", question: "Height or age?", options: ["Height", "Age"], answer: "Height" },
    { context: "She's in her thirties.", question: "Exact age or approximate age group?", options: ["Exact age", "Approximate age group"], answer: "Approximate age group" },
  ],
  "9/2": [
    { context: "the man wearing a green jacket", question: "Which man?", options: ["The man in green", "The man in blue"], answer: "The man in green" },
    { context: "standing by the window", question: "Location or age?", options: ["Location", "Age"], answer: "Location" },
    { context: "the one talking to Mia", question: "One person or several people?", options: ["One person", "Several people"], answer: "One person" },
    { context: "the woman with long black hair", question: "Hair or clothing?", options: ["Hair", "Clothing"], answer: "Hair" },
    { context: "the ones on the couch", question: "One person or several people?", options: ["One person", "Several people"], answer: "Several people" },
  ],
  "10/1": [
    { context: "I've already sent it.", question: "Finished or not finished?", options: ["Finished", "Not finished"], answer: "Finished" },
    { context: "She hasn't called yet.", question: "Called or not called?", options: ["Called", "Not called"], answer: "Not called" },
    { context: "I've already finished.", question: "Sooner than expected or still incomplete?", options: ["Sooner than expected", "Still incomplete"], answer: "Sooner than expected" },
    { context: "Have you finished yet?", question: "Checking completion or asking the exact time?", options: ["Checking completion", "Asking the exact time"], answer: "Checking completion" },
  ],
  "10/2": [
    { context: "Have you ever traveled alone?", question: "Experience or exact time?", options: ["Experience", "Exact time"], answer: "Experience" },
    { context: "I've lived here for five years.", question: "Duration or start point?", options: ["Duration", "Start point"], answer: "Duration" },
    { context: "I went to Chile last year.", question: "Specific past time or time not stated?", options: ["Specific past time", "Time not stated"], answer: "Specific past time" },
    { context: "I've lived here since 2021.", question: "Duration or start point?", options: ["Duration", "Start point"], answer: "Start point" },
  ],
  "11/1": [
    { context: "small but lively", question: "Two similar ideas or a contrast?", options: ["Similar ideas", "A contrast"], answer: "A contrast" },
    { context: "really interesting", question: "Strong or weak description?", options: ["Strong", "Weak"], answer: "Strong" },
    { context: "fairly expensive", question: "Very expensive or moderately expensive?", options: ["Very expensive", "Moderately expensive"], answer: "Moderately expensive" },
    { context: "It's crowded. It's safe, though.", question: "Similar information or contrast?", options: ["Similar information", "Contrast"], answer: "Contrast" },
  ],
  "11/2": [
    { context: "You can take the bus.", question: "Possible option or rule?", options: ["Possible option", "Rule"], answer: "Possible option" },
    { context: "You should visit the museum.", question: "Recommendation or past event?", options: ["Recommendation", "Past event"], answer: "Recommendation" },
    { context: "You can't miss the market.", question: "Essential experience or place to avoid?", options: ["Essential experience", "Place to avoid"], answer: "Essential experience" },
    { context: "You shouldn't go too late.", question: "Recommended or better to avoid?", options: ["Recommended", "Better to avoid"], answer: "Better to avoid" },
  ],
  "12/1": [
    { context: "It's important to rest.", question: "Advice or description of pain?", options: ["Advice", "Description of pain"], answer: "Advice" },
    { context: "I have a headache.", question: "Problem or advice?", options: ["Problem", "Advice"], answer: "Problem" },
    { context: "It's a good idea to rest.", question: "Recommended or prohibited?", options: ["Recommended", "Prohibited"], answer: "Recommended" },
    { context: "For a toothache, see a dentist.", question: "Health problem or appropriate action?", options: ["Health problem", "Appropriate action"], answer: "Appropriate action" },
  ],
  "12/2": [
    { context: "Could you recommend something?", question: "Request or command?", options: ["Request", "Command"], answer: "Request" },
    { context: "You could try these tablets.", question: "Suggestion or certainty?", options: ["Suggestion", "Certainty"], answer: "Suggestion" },
    { context: "You should get a heating pad.", question: "Weaker or stronger recommendation?", options: ["Weaker", "Stronger"], answer: "Stronger" },
    { context: "Why don't you try this cream?", question: "Suggestion or criticism?", options: ["Suggestion", "Criticism"], answer: "Suggestion" },
    { context: "a bottle of pain medicine", question: "Container or health problem?", options: ["Container", "Health problem"], answer: "Container" },
  ],
  "13/1": [
    { context: "I love spicy food. — So do I.", question: "Same preference or different preference?", options: ["Same preference", "Different preference"], answer: "Same preference" },
    { context: "I don't eat meat. — Neither do I.", question: "Do both people avoid meat?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I'm crazy about Italian food. — So am I.", question: "Positive agreement or disagreement?", options: ["Positive agreement", "Disagreement"], answer: "Positive agreement" },
    { context: "I can eat spicy food. — So can I.", question: "Which helper repeats?", options: ["Can", "Do"], answer: "Can" },
    { context: "I don't like salty food. — Really? I do.", question: "Agreement or disagreement?", options: ["Agreement", "Disagreement"], answer: "Disagreement" },
  ],
  "13/2": [
    { context: "I'd like the soup, please.", question: "Ordering or complaining?", options: ["Ordering", "Complaining"], answer: "Ordering" },
    { context: "I'll have sparkling water.", question: "Choice now or past choice?", options: ["Choice now", "Past choice"], answer: "Choice now" },
    { context: "What kind of soup would you like?", question: "General category or specific type?", options: ["General category", "Specific type"], answer: "Specific type" },
    { context: "Would you like anything else? — That's all, thanks.", question: "Continue ordering or close the order?", options: ["Continue ordering", "Close the order"], answer: "Close the order" },
  ],
  "14/1": [
    { context: "Everest is higher than K2.", question: "Which is higher?", options: ["Everest", "K2"], answer: "Everest" },
    { context: "the highest mountain", question: "One mountain or all mountains compared?", options: ["One mountain", "All mountains compared"], answer: "All mountains compared" },
    { context: "City A is more crowded than City B.", question: "Two places or all places compared?", options: ["Two places", "All places"], answer: "Two places" },
    { context: "the most crowded country", question: "Two countries or the whole group compared?", options: ["Two countries", "The whole group"], answer: "The whole group" },
  ],
  "14/2": [
    { context: "How far is it?", question: "Distance or height?", options: ["Distance", "Height"], answer: "Distance" },
    { context: "two thousand meters high", question: "Height or length?", options: ["Height", "Length"], answer: "Height" },
    { context: "How big is the city?", question: "Area or temperature?", options: ["Area", "Temperature"], answer: "Area" },
    { context: "How long is the river?", question: "Length or depth?", options: ["Length", "Depth"], answer: "Length" },
    { context: "How deep is the canyon?", question: "Length or depth?", options: ["Length", "Depth"], answer: "Depth" },
  ],
  "15/1": [
    { context: "I'm meeting Carla tomorrow.", question: "Arrangement or routine?", options: ["Arrangement", "Routine"], answer: "Arrangement" },
    { context: "We're going to discuss the project.", question: "Plan or finished action?", options: ["Plan", "Finished action"], answer: "Plan" },
    { context: "I'm meeting Carla tomorrow.", question: "Is the meeting decided?", options: ["Yes", "No"], answer: "Yes" },
    { context: "We're going to discuss the project.", question: "Has the discussion happened?", options: ["Yes", "No"], answer: "No" },
  ],
  "15/2": [
    { context: "Tell Marcus the meeting is at ten.", question: "Give Marcus information or ask Marcus a question?", options: ["Give information", "Ask a question"], answer: "Give information" },
    { context: "Ask him to call me.", question: "Request an action or report a fact?", options: ["Request an action", "Report a fact"], answer: "Request an action" },
    { context: "Tell Marcus the meeting is at ten.", question: "Who receives the information?", options: ["Marcus", "The speaker"], answer: "Marcus" },
    { context: "Ask him to call me.", question: "Does he need to do something?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "16/1": [
    { context: "My apartment is quieter now.", question: "A change or no change?", options: ["A change", "No change"], answer: "A change" },
    { context: "I've met some great people.", question: "Life until now or only yesterday?", options: ["Life until now", "Only yesterday"], answer: "Life until now" },
    { context: "I changed jobs two months ago.", question: "Is the past time stated?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I wear contacts now.", question: "Is this true now?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "16/2": [
    { context: "I plan to study engineering.", question: "Future intention or past habit?", options: ["Future intention", "Past habit"], answer: "Future intention" },
    { context: "I'd like to work abroad.", question: "A wish or a completed action?", options: ["A wish", "A completed action"], answer: "A wish" },
    { context: "I want to learn Japanese.", question: "Do I desire this?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I hope to get a new job.", question: "Is the new job certain?", options: ["Yes", "No"], answer: "No" },
  ],
};

const createLesson = ({ unit, lesson, phrases }: LessonSeed): LessonContent => {
  const unitData = a2.units[unit - 1];
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
      instruction: lessonObjective,
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
      type: "concept-check",
      slug: "check-meaning",
      label: "Check meaning",
      instruction: "Choose the answer. Use the examples to help you.",
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
      instruction: `Practice ${lessonData.title.toLowerCase()} twice: first with support, then with your own information.`,
      prompts: [
        "Round 1: follow the model and change the names, places, times, or details.",
        "Use at least two target expressions from this lesson.",
        "Round 2: close the model and have a new exchange with your own information.",
        "After the exchange, check whether your partner communicated the main message clearly.",
      ],
      model: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", line] as const),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Your progress",
      instruction: "Check your progress.",
      checks: [
        `Target: ${lessonObjective}`,
        `I understand key expressions about ${lessonData.title.toLowerCase()}.`,
        `I use: ${phrases[0]}`,
        `I respond: ${phrases[1]}`,
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
