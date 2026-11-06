import { a1 } from "../a1";
import type { LessonStepData } from "../lesson-step-types";

type LessonSeed = {
  unit: number;
  lesson: 1 | 2;
  phrases: readonly [string, string, string, string];
  getReadyQuestions: readonly (readonly import("../lesson-step-types").GetReadyQuestion[])[];
};

export type LessonContent = {
  level: string;
  unit: { number: number; title: string };
  lesson: { number: number; title: string };
  steps: readonly LessonStepData[];
};

const seeds: readonly LessonSeed[] = [
  {
    unit: 1,
    lesson: 2,
    phrases: [
      "Goodbye. See you soon.",
      "What's your phone number?",
      "My email address is maria@example.com.",
      "Are you on social media?",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "Phone number or email?",
          support: ["Phone number.", "Email."],
        },
      ],
      [{ prompt: "Is this an email address?", support: ["Yes.", "No."] }],
      [{ prompt: "Hello or goodbye?", support: ["Hello.", "Goodbye."] }],
    ],
  },
  {
    unit: 2,
    lesson: 1,
    phrases: [
      "What's this?",
      "It's a notebook.",
      "What are these?",
      "They're keys.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "What’s this?",
          support: ["It’s a laptop computer.", "It’s a phone."],
        },
      ],
      [
        {
          prompt: "What’s this?",
          support: ["It’s an adapter.", "It’s a charger."],
        },
      ],
      [
        {
          prompt: "What are these?",
          support: ["They’re notebooks.", "They’re folders."],
        },
      ],
      [
        {
          prompt: "What are these?",
          support: ["They’re keys.", "They’re notebooks."],
        },
      ],
      [
        {
          prompt: "What’s this?",
          support: ["It’s a headset.", "It’s a phone."],
        },
      ],
    ],
  },
  {
    unit: 2,
    lesson: 2,
    phrases: [
      "Where is the phone?",
      "It's on the desk.",
      "Is it under the chair?",
      "Yes, it is.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "What objects are on the desk?",
          support: [
            "mobile phone",
            "keys",
            "keyboard",
            "mouse",
            "phone adapter",
            "pens",
            "monitor",
            "printer",
            "folders",
          ],
          supportDisplay: "bullets",
        },
      ],
      [
        {
          prompt: "Is it under the chair?",
          support: ["Yes, it is.", "No, it isn’t."],
        },
      ],
      [
        {
          prompt: "Where are the folders?",
          support: ["Next to the printer.", "On the chair."],
        },
      ],
    ],
  },
  {
    unit: 3,
    lesson: 1,
    phrases: [
      "Where are you from?",
      "I'm from Brazil.",
      "Are you Brazilian?",
      "Yes, I am.",
    ],
    getReadyQuestions: [
      [{ prompt: "Brazil or Mexico?", support: ["Brazil.", "Mexico."] }],
      [{ prompt: "Where are you from?", support: ["I’m from …"] }],
      [
        {
          prompt: "Are you Brazilian?",
          support: ["Yes, I am.", "No, I’m not."],
        },
      ],
    ],
  },
  {
    unit: 3,
    lesson: 2,
    phrases: [
      "Who's that?",
      "She's my cousin.",
      "What's she like?",
      "She's tall and friendly.",
    ],
    getReadyQuestions: [
      [{ prompt: "Family or friends?", support: ["Family.", "Friends."] }],
      [{ prompt: "Who’s that?", support: ["He’s my …", "She’s my …"] }],
      [{ prompt: "Tall or short?", support: ["Tall.", "Short."] }],
    ],
  },
  {
    unit: 4,
    lesson: 1,
    phrases: [
      "Whose jacket is this?",
      "It's Eric's.",
      "This is my jacket.",
      "The jacket is mine.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "Whose jacket is this?",
          support: ["It’s Eric’s.", "It’s Laura’s."],
        },
      ],
      [
        {
          prompt: "Is this your scarf?",
          support: ["Yes, it’s mine.", "No, it isn’t."],
        },
      ],
      [
        {
          prompt: "Whose gloves are these?",
          support: ["They’re Laura’s.", "They’re Naomi’s."],
        },
      ],
    ],
  },
  {
    unit: 4,
    lesson: 2,
    phrases: [
      "Are you wearing a raincoat?",
      "Yes, I am.",
      "It's raining.",
      "It isn't snowing.",
    ],
    getReadyQuestions: [
      [{ prompt: "Is it raining?", support: ["Yes, it is.", "No, it isn’t."] }],
      [
        {
          prompt: "A raincoat or a T-shirt?",
          support: ["A raincoat.", "A T-shirt."],
        },
      ],
      [{ prompt: "What are you wearing?", support: ["I’m wearing …"] }],
    ],
  },
  {
    unit: 5,
    lesson: 1,
    phrases: [
      "What time is it?",
      "It's nine o'clock.",
      "It's seven fifteen A.M.",
      "It's noon.",
    ],
    getReadyQuestions: [
      [{ prompt: "What time is it?", support: ["It’s … o’clock."] }],
      [{ prompt: "Morning or evening?", support: ["Morning.", "Evening."] }],
      [{ prompt: "What time is lunch?", support: ["At …"] }],
    ],
  },
  {
    unit: 5,
    lesson: 2,
    phrases: [
      "What are you doing?",
      "I'm studying English.",
      "What's Eva doing?",
      "She's sleeping.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "What is she doing?",
          support: ["She’s studying.", "She’s sleeping."],
        },
      ],
      [{ prompt: "Is he working?", support: ["Yes, he is.", "No, he isn’t."] }],
      [{ prompt: "What are you doing now?", support: ["I’m …"] }],
    ],
  },
  {
    unit: 6,
    lesson: 1,
    phrases: [
      "I take the train.",
      "She goes by bus.",
      "He rides his bike.",
      "They use the subway.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "Bus, train, or bike?",
          support: ["Bus.", "Train.", "Bike."],
        },
      ],
      [{ prompt: "How does she go to work?", support: ["She goes by …"] }],
      [
        {
          prompt: "How do you go to work or school?",
          support: ["I go by …", "I walk."],
        },
      ],
    ],
  },
  {
    unit: 6,
    lesson: 2,
    phrases: [
      "What time do you get up?",
      "I get up at seven.",
      "Do you study every day?",
      "Yes, I do.",
    ],
    getReadyQuestions: [
      [{ prompt: "What time do you get up?", support: ["I get up at …"] }],
      [
        {
          prompt: "Do you study every day?",
          support: ["Yes, I do.", "No, I don’t."],
        },
      ],
      [{ prompt: "Morning or evening?", support: ["Morning.", "Evening."] }],
    ],
  },
  {
    unit: 7,
    lesson: 1,
    phrases: [
      "Do you live in a house?",
      "No, I don't.",
      "Does it have a balcony?",
      "Yes, it does.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "House or apartment?",
          support: ["A house.", "An apartment."],
        },
      ],
      [
        {
          prompt: "Does it have a balcony?",
          support: ["Yes, it does.", "No, it doesn’t."],
        },
      ],
      [
        {
          prompt: "Do you live in a house or an apartment?",
          support: ["I live in …"],
        },
      ],
    ],
  },
  {
    unit: 7,
    lesson: 2,
    phrases: [
      "There is a sofa in the living room.",
      "There are two lamps by the bed.",
      "Is there a dishwasher?",
      "Yes, there is.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "What is in the room?",
          support: ["There is a …", "There are …"],
        },
      ],
      [
        {
          prompt: "Is there a sofa?",
          support: ["Yes, there is.", "No, there isn’t."],
        },
      ],
      [
        {
          prompt: "How many lamps are there?",
          support: ["There are … lamps."],
        },
      ],
    ],
  },
  {
    unit: 8,
    lesson: 1,
    phrases: [
      "What do you do?",
      "I'm a designer.",
      "Where do you work?",
      "I work in an office.",
    ],
    getReadyQuestions: [
      [{ prompt: "What’s his job?", support: ["He’s a …"] }],
      [{ prompt: "Where does she work?", support: ["She works in …"] }],
      [{ prompt: "What do you do?", support: ["I’m a …", "I’m a student."] }],
    ],
  },
  {
    unit: 8,
    lesson: 2,
    phrases: [
      "Being a nurse is rewarding.",
      "It's a stressful job.",
      "The hours are flexible.",
      "That sounds interesting.",
    ],
    getReadyQuestions: [
      [{ prompt: "Easy or difficult?", support: ["Easy.", "Difficult."] }],
      [
        {
          prompt: "Is the job stressful?",
          support: ["Yes, it is.", "No, it isn’t."],
        },
      ],
      [
        {
          prompt: "Is this job interesting?",
          support: ["Yes, it is.", "No, it isn’t."],
        },
      ],
    ],
  },
  {
    unit: 9,
    lesson: 1,
    phrases: [
      "Is there any milk?",
      "Yes, there is some milk.",
      "We need a few tomatoes.",
      "I don't have any rice.",
    ],
    getReadyQuestions: [
      [{ prompt: "What food can you see?", support: ["I can see …"] }],
      [
        {
          prompt: "Is there any milk?",
          support: ["Yes, there is.", "No, there isn’t."],
        },
      ],
      [{ prompt: "What do we need?", support: ["We need …"] }],
    ],
  },
  {
    unit: 9,
    lesson: 2,
    phrases: [
      "I usually eat breakfast.",
      "She often cooks at home.",
      "We rarely order takeout.",
      "He never drinks coffee.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "Do you eat breakfast every day?",
          support: ["Yes, I do.", "No, I don’t."],
        },
      ],
      [
        {
          prompt: "Do you cook at home?",
          support: ["I usually …", "I never …"],
        },
      ],
      [{ prompt: "What do you drink in the morning?", support: ["I drink …"] }],
    ],
  },
  {
    unit: 10,
    lesson: 1,
    phrases: [
      "What sports do you play?",
      "I play volleyball.",
      "Do you watch soccer?",
      "Yes, I watch it every weekend.",
    ],
    getReadyQuestions: [
      [{ prompt: "What sport is this?", support: ["It’s …"] }],
      [
        {
          prompt: "Do you play this sport?",
          support: ["Yes, I do.", "No, I don’t."],
        },
      ],
      [{ prompt: "What sports do you watch?", support: ["I watch …"] }],
    ],
  },
  {
    unit: 10,
    lesson: 2,
    phrases: [
      "I can play the guitar.",
      "She can dance very well.",
      "Can you draw?",
      "No, I can't.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "Can she dance?",
          support: ["Yes, she can.", "No, she can’t."],
        },
      ],
      [{ prompt: "What can he do?", support: ["He can …"] }],
      [{ prompt: "What can you do well?", support: ["I can …"] }],
    ],
  },
  {
    unit: 11,
    lesson: 1,
    phrases: [
      "What are you going to do tonight?",
      "I'm going to watch a movie.",
      "Are you going to travel this weekend?",
      "No, I'm going to stay home.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "Home or movie theater?",
          support: ["Home.", "Movie theater."],
        },
      ],
      [{ prompt: "What is she going to do?", support: ["She’s going to …"] }],
      [
        {
          prompt: "What are you going to do tonight?",
          support: ["I’m going to …"],
        },
      ],
    ],
  },
  {
    unit: 11,
    lesson: 2,
    phrases: [
      "How are you going to celebrate?",
      "We're going to have a party.",
      "Who is going to come?",
      "Our friends and family are coming.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "How are they going to celebrate?",
          support: ["They’re going to …"],
        },
      ],
      [
        {
          prompt: "Who is going to come?",
          support: ["Friends.", "Family.", "Both."],
        },
      ],
      [
        {
          prompt: "Do you like big or small parties?",
          support: ["Big parties.", "Small parties."],
        },
      ],
    ],
  },
  {
    unit: 12,
    lesson: 1,
    phrases: [
      "What's wrong?",
      "I have a headache.",
      "I feel tired.",
      "My back hurts.",
    ],
    getReadyQuestions: [
      [{ prompt: "What’s wrong?", support: ["A headache.", "A backache."] }],
      [
        {
          prompt: "Does she feel well?",
          support: ["Yes, she does.", "No, she doesn’t."],
        },
      ],
      [
        {
          prompt: "What do you do when you feel sick?",
          support: ["I rest.", "I drink water."],
        },
      ],
    ],
  },
  {
    unit: 12,
    lesson: 2,
    phrases: [
      "Get some rest.",
      "Drink plenty of water.",
      "Take this medicine.",
      "Don't go to work today.",
    ],
    getReadyQuestions: [
      [{ prompt: "Water or medicine?", support: ["Water.", "Medicine."] }],
      [
        {
          prompt: "What is the advice?",
          support: ["Get some rest.", "Go to work."],
        },
      ],
      [
        {
          prompt: "Good advice or bad advice?",
          support: ["Good advice.", "Bad advice."],
        },
      ],
    ],
  },
  {
    unit: 13,
    lesson: 1,
    phrases: [
      "Where can I buy a charger?",
      "There's an electronics store near here.",
      "It's across from the bank.",
      "The pharmacy is next to the supermarket.",
    ],
    getReadyQuestions: [
      [{ prompt: "What places can you see?", support: ["I can see a …"] }],
      [
        {
          prompt: "Where is the pharmacy?",
          support: ["Next to …", "Across from …"],
        },
      ],
      [
        {
          prompt: "Where do you buy a charger?",
          support: ["At an electronics store."],
        },
      ],
    ],
  },
  {
    unit: 13,
    lesson: 2,
    phrases: [
      "How do I get to the station?",
      "Go straight for two blocks.",
      "Turn left at the corner.",
      "It's on your right.",
    ],
    getReadyQuestions: [
      [{ prompt: "Left or right?", support: ["Left.", "Right."] }],
      [{ prompt: "Where is the station?", support: ["It’s …"] }],
      [{ prompt: "How do I get there?", support: ["Go straight.", "Turn …"] }],
    ],
  },
  {
    unit: 14,
    lesson: 1,
    phrases: [
      "What did you do last weekend?",
      "I visited my grandparents.",
      "We went to a concert.",
      "I stayed home and relaxed.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "What did she do?",
          support: ["She visited …", "She stayed …"],
        },
      ],
      [{ prompt: "Home or concert?", support: ["Home.", "A concert."] }],
      [{ prompt: "What did you do last weekend?", support: ["I …"] }],
    ],
  },
  {
    unit: 14,
    lesson: 2,
    phrases: [
      "Did you enjoy your vacation?",
      "Yes, I did.",
      "Where did you stay?",
      "We stayed at a small hotel.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "Where was the vacation?",
          support: ["At the beach.", "In the city."],
        },
      ],
      [
        {
          prompt: "Did they enjoy it?",
          support: ["Yes, they did.", "No, they didn’t."],
        },
      ],
      [{ prompt: "Where did they stay?", support: ["They stayed at …"] }],
    ],
  },
  {
    unit: 15,
    lesson: 1,
    phrases: [
      "Where were you born?",
      "I was born in Recife.",
      "My grandparents were farmers.",
      "We were a big family.",
    ],
    getReadyQuestions: [
      [{ prompt: "Child or adult?", support: ["A child.", "An adult."] }],
      [{ prompt: "Where was he born?", support: ["He was born in …"] }],
      [{ prompt: "What were their jobs?", support: ["They were …"] }],
    ],
  },
  {
    unit: 15,
    lesson: 2,
    phrases: [
      "What was your favorite subject?",
      "I loved history.",
      "Did you like your teachers?",
      "Yes, they were very kind.",
    ],
    getReadyQuestions: [
      [{ prompt: "School or work?", support: ["School.", "Work."] }],
      [{ prompt: "What was her favorite subject?", support: ["It was …"] }],
      [
        {
          prompt: "Did you like school? Why?",
          support: ["Yes, because …", "No, because …"],
        },
      ],
    ],
  },
  {
    unit: 16,
    lesson: 1,
    phrases: [
      "Can I speak to Julia, please?",
      "She's not here right now.",
      "Can I leave her a message?",
      "Please ask her to call me.",
    ],
    getReadyQuestions: [
      [
        {
          prompt: "Phone call or message?",
          support: ["A phone call.", "A message."],
        },
      ],
      [
        {
          prompt: "Is Julia available?",
          support: ["Yes, she is.", "No, she isn’t."],
        },
      ],
      [
        {
          prompt: "What is the message?",
          support: ["Please call …", "Please tell …"],
        },
      ],
    ],
  },
  {
    unit: 16,
    lesson: 2,
    phrases: [
      "Would you like to come to my party?",
      "I'd love to.",
      "Do you want to have dinner on Friday?",
      "Sorry, I can't make it.",
    ],
    getReadyQuestions: [
      [{ prompt: "Party or dinner?", support: ["A party.", "Dinner."] }],
      [{ prompt: "Does the person accept?", support: ["Yes.", "No."] }],
      [
        {
          prompt: "Invite a classmate.",
          support: ["Would you like to …?", "Do you want to …?"],
        },
      ],
    ],
  },
];

const ccqs: Record<
  string,
  readonly { context?: string; question: string; answer: string }[]
> = {
  "1/2": [
    {
      context: "Goodbye. See you soon.",
      question: "Start or end?",
      answer: "End",
    },
    {
      context: "What’s your phone number?",
      question: "Name or number?",
      answer: "Number",
    },
  ],
  "2/1": [
    { context: "this", question: "One or more than one?", answer: "One" },
    {
      context: "these",
      question: "One or more than one?",
      answer: "More than one",
    },
  ],
  "2/2": [
    { context: "on the desk", question: "On top or below?", answer: "On top" },
    {
      context: "under the chair",
      question: "Above or below?",
      answer: "Below",
    },
  ],
  "3/1": [
    { context: "I’m from Brazil.", question: "Country?", answer: "Brazil" },
    {
      context: "I’m Brazilian.",
      question: "Country or nationality?",
      answer: "Nationality",
    },
  ],
  "3/2": [
    {
      context: "What’s she like?",
      question: "Name or description?",
      answer: "Description",
    },
    {
      context: "How old is he?",
      question: "Appearance or age?",
      answer: "Age",
    },
  ],
  "4/1": [
    {
      context: "It’s mine.",
      question: "My jacket or another person’s jacket?",
      answer: "My jacket",
    },
    { context: "It’s Eric’s.", question: "Owner?", answer: "Eric" },
  ],
  "4/2": [
    {
      context: "It’s cold and windy.",
      question: "Weather now or yesterday?",
      answer: "Now",
    },
    {
      context: "I’m wearing a coat.",
      question: "Now or every day?",
      answer: "Now",
    },
  ],
  "5/1": [
    {
      context: "What time is it?",
      question: "Time now or yesterday?",
      answer: "Now",
    },
    {
      context: "Tokyo: 9 p.m.",
      question: "Morning or evening?",
      answer: "Evening",
    },
  ],
  "5/2": [
    {
      context: "They’re having lunch.",
      question: "Now or every day?",
      answer: "Now",
    },
    {
      context: "He’s taking a break.",
      question: "Working or not working now?",
      answer: "Not working",
    },
  ],
  "6/1": [
    { context: "I take the bus.", question: "Transport?", answer: "Bus" },
    { context: "My sister drives.", question: "Bus or car?", answer: "Car" },
  ],
  "6/2": [
    {
      context: "I get up at seven every day.",
      question: "One time or routine?",
      answer: "Routine",
    },
    {
      context: "every day",
      question: "One day or all days?",
      answer: "All days",
    },
  ],
  "7/1": [
    {
      context: "I live in an apartment.",
      question: "House or apartment?",
      answer: "Apartment",
    },
    {
      context: "There are two bedrooms.",
      question: "One or two?",
      answer: "Two",
    },
  ],
  "7/2": [
    {
      context: "There is a sofa.",
      question: "One or more than one?",
      answer: "One",
    },
    {
      context: "There are two lamps.",
      question: "One or more than one?",
      answer: "More than one",
    },
  ],
  "8/1": [
    { context: "What do you do?", question: "Job or name?", answer: "Job" },
    {
      context: "I work in an office.",
      question: "Workplace?",
      answer: "Office",
    },
  ],
  "8/2": [
    {
      context: "Being a nurse is rewarding.",
      question: "Positive or negative?",
      answer: "Positive",
    },
    {
      context: "It’s stressful.",
      question: "Relaxed or under pressure?",
      answer: "Under pressure",
    },
  ],
  "9/1": [
    {
      context: "There is some milk.",
      question: "Milk available?",
      answer: "Yes",
    },
    {
      context: "I don’t have any rice.",
      question: "Rice available?",
      answer: "No",
    },
  ],
  "9/2": [
    {
      context: "usually",
      question: "Most days or zero days?",
      answer: "Most days",
    },
    {
      context: "never",
      question: "Some days or zero days?",
      answer: "Zero days",
    },
  ],
  "10/1": [
    {
      context: "I play volleyball.",
      question: "Play or watch?",
      answer: "Play",
    },
    {
      context: "I watch soccer every weekend.",
      question: "Play or watch?",
      answer: "Watch",
    },
  ],
  "10/2": [
    {
      context: "I can play the guitar.",
      question: "Ability: yes or no?",
      answer: "Yes",
    },
    { context: "I can’t draw.", question: "Ability: yes or no?", answer: "No" },
  ],
  "11/1": [
    {
      context: "I’m going to watch a movie tonight.",
      question: "Past, now, or future?",
      answer: "Future",
    },
    {
      context: "I’m going to watch a movie.",
      question: "Plan or surprise?",
      answer: "Plan",
    },
  ],
  "11/2": [
    {
      context: "We’re going to have a party.",
      question: "Past or future?",
      answer: "Future",
    },
    {
      context: "Friends and family are coming.",
      question: "Guests?",
      answer: "Friends and family",
    },
  ],
  "12/1": [
    {
      context: "I have a headache.",
      question: "Well or sick?",
      answer: "Sick",
    },
    { context: "a headache", question: "Head or back?", answer: "Head" },
  ],
  "12/2": [
    {
      context: "Get some rest.",
      question: "Problem or advice?",
      answer: "Advice",
    },
    {
      context: "Don’t go to work.",
      question: "Go or stay home?",
      answer: "Stay home",
    },
  ],
  "13/1": [
    {
      context: "a charger",
      question: "Electronics store or pharmacy?",
      answer: "Electronics store",
    },
    {
      context: "The pharmacy is next to the supermarket.",
      question: "Near or far?",
      answer: "Near",
    },
  ],
  "13/2": [
    {
      context: "Go straight.",
      question: "Forward or back?",
      answer: "Forward",
    },
    { context: "Turn left.", question: "Left or right?", answer: "Left" },
  ],
  "14/1": [
    {
      context: "I visited my grandparents last weekend.",
      question: "Past or future?",
      answer: "Past",
    },
    {
      context: "last weekend",
      question: "Finished or not finished?",
      answer: "Finished",
    },
  ],
  "14/2": [
    {
      context: "Did you enjoy your vacation?",
      question: "Vacation: finished or future?",
      answer: "Finished",
    },
    { context: "a small hotel", question: "Small or large?", answer: "Small" },
  ],
  "15/1": [
    {
      context: "I was born in Recife.",
      question: "Birthplace?",
      answer: "Recife",
    },
    {
      context: "My grandparents were farmers.",
      question: "Past or present?",
      answer: "Past",
    },
  ],
  "15/2": [
    {
      context: "My favorite subject was history.",
      question: "Past or present?",
      answer: "Past",
    },
    {
      context: "The teachers were kind.",
      question: "Kind or unkind?",
      answer: "Kind",
    },
  ],
  "16/1": [
    {
      context: "She’s not here right now.",
      question: "Julia available now?",
      answer: "No",
    },
    {
      context: "Please ask her to call me.",
      question: "Call now or later?",
      answer: "Later",
    },
  ],
  "16/2": [
    {
      context: "Would you like to come to my party?",
      question: "Invitation or information?",
      answer: "Invitation",
    },
    {
      context: "Sorry, I can’t make it.",
      question: "Accept or decline?",
      answer: "Decline",
    },
  ],
};

const words = (sentence: string) => sentence.split(" ");

const ccqPairs: Record<string, readonly string[]> = {
  End: ["Start", "End"],
  Number: ["Name", "Number"],
  One: ["One", "More than one"],
  "More than one": ["One", "More than one"],
  "On top": ["On top", "Below"],
  Below: ["Above", "Below"],
  Brazil: ["Brazil", "Mexico"],
  Nationality: ["Country", "Nationality"],
  Appearance: ["Appearance", "Age"],
  Description: ["Name", "Description"],
  Age: ["Appearance", "Age"],
  "My jacket": ["My jacket", "Another person’s jacket"],
  "A woman’s scarf": ["A woman’s scarf", "A man’s scarf"],
  Eric: ["Eric", "Laura"],
  Now: ["Now", "Yesterday"],
  Evening: ["Morning", "Evening"],
  "Not working": ["Working", "Not working"],
  Bus: ["Bus", "Car"],
  Car: ["Bus", "Car"],
  Routine: ["One time", "Routine"],
  "All days": ["One day", "All days"],
  Apartment: ["House", "Apartment"],
  Two: ["One", "Two"],
  Job: ["Job", "Name"],
  Office: ["Office", "Home"],
  Positive: ["Positive", "Negative"],
  "Under pressure": ["Relaxed", "Under pressure"],
  "Most days": ["Most days", "Zero days"],
  "Zero days": ["Some days", "Zero days"],
  Play: ["Play", "Watch"],
  Watch: ["Play", "Watch"],
  Future: ["Past", "Now", "Future"],
  Plan: ["Plan", "Surprise"],
  "Friends and family": ["Friends and family", "Nobody"],
  Sick: ["Well", "Sick"],
  Head: ["Head", "Back"],
  Advice: ["Problem", "Advice"],
  "Stay home": ["Go", "Stay home"],
  "Electronics store": ["Electronics store", "Pharmacy"],
  Near: ["Near", "Far"],
  Forward: ["Forward", "Back"],
  Left: ["Left", "Right"],
  Past: ["Past", "Present"],
  Finished: ["Finished", "Not finished"],
  Small: ["Small", "Large"],
  Recife: ["Recife", "Rio"],
  Kind: ["Kind", "Unkind"],
  Later: ["Now", "Later"],
  Invitation: ["Invitation", "Information"],
  Decline: ["Accept", "Decline"],
};

const ccqOptions = (answer: string) => {
  const plainAnswer = answer.replace(/\.$/, "");
  if (plainAnswer === "Yes") return ["Yes", "No"];
  if (plainAnswer === "No") return ["Yes", "No"];
  if (plainAnswer === "We don't know") return ["Yes", "No", "We don't know"];
  const options = ccqPairs[plainAnswer];
  if (!options)
    throw new Error(`Missing planned CCQ options for: ${plainAnswer}`);
  return options;
};

const createLesson = ({
  unit,
  lesson,
  phrases,
  getReadyQuestions,
}: LessonSeed): LessonContent => {
  const unitData = a1.units[unit - 1];
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
      slides: phrases.slice(0, 3).map((quote, index) => ({
        image: "",
        audio: "",
        quote,
        questions: getReadyQuestions[index] ?? [],
      })),
    },
    {
      type: "listen",
      slug: "listen",
      label: "Listen",
      instruction: `Listen to a short conversation about ${lessonData.title.toLowerCase()}.`,
      audio: "",
      dialogue: phrases.map(
        (line, index) => [index % 2 === 0 ? "A" : "B", [line]] as const,
      ),
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
      instruction: lessonObjective,
      items: phrases.map(
        (phrase) =>
          [
            phrase,
            `Use this expression to communicate about ${lessonData.title.toLowerCase()}.`,
            "Pronunciation to be added.",
            "Form notes to be added.",
            undefined,
            "Portuguese translation to be added.",
          ] as const,
      ),
    },
    {
      type: "concept-check",
      slug: "check-meaning",
      label: "Check meaning",
      instruction: "Choose the answer. Use the examples to help you.",
      questions: (ccqs[`${unit}/${lesson}`] ?? []).map(
        ({ context, question, answer }) => ({
          context,
          question,
          options: ccqOptions(answer),
          answer: answer.replace(/\.$/, ""),
        }),
      ),
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
      instruction:
        "Use the model. Change the details. Then speak without the model.",
      prompts: [
        "Read the model once.",
        "Change the names, places, objects, or times.",
        "Change roles.",
        "Repeat without the model.",
      ],
      model: phrases.map(
        (line, index) => [index % 2 === 0 ? "A" : "B", line] as const,
      ),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Your progress",
      instruction:
        "Complete the mini-task without the model. Check each expression you use.",
      checks: [...phrases],
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
