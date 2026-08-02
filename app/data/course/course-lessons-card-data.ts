import type { LessonCardContent } from "@/components/content/LessonCard";

export type CourseLessonCard = LessonCardContent & {
  href: string;
  label: string;
};

export const courseLessonsCardData = {
  beginner: [
    // Hello
    {
      href: "/courses/beginner/hello",
      label: "Hello!",
      objective:
        "Greet someone, exchange first names, and end a short first meeting.",
      usefulLanguage:
        "Hi! / Hello!; I’m…; What’s your name?; Nice to meet you.; Sorry?; Please repeat.; Bye!",
      vocabulary: "Greetings, first names, goodbyes",
      skills: "Listening for names, pronunciation, and spoken interaction",
      pronunciation:
        "I’m /aɪm/, What’s /wɒts/, and friendly greeting intonation",
      finalTask: "Meet a classmate and have a short greeting conversation.",
      successCriteria: [
        "Greet and say your first name.",
        "Ask for and understand a first name, requesting repetition if needed.",
        "Use Nice to meet you and an appropriate goodbye.",
      ],
    },
    // Personal Information
    {
      href: "/courses/beginner/personal-information",
      label: "Personal Information",
      objective:
        "Ask for and give a full name, nationality, spelling, and simple contact details.",
      usefulLanguage:
        "What’s your full name?; How do you spell it?; Where are you from?; What’s your email address?",
      vocabulary: "The alphabet, countries, nationalities, contact details",
      skills: "Listening for details, speaking, spelling, and form completion",
      recycles: "Greetings, first names, and goodbyes",
      pronunciation: "English letter names and clear groups of phone numbers",
      finalTask:
        "Interview a partner and complete a fictional registration form.",
      successCriteria: [
        "Ask for a full name, country, and one fictional contact detail.",
        "Spell and record a name accurately.",
        "Complete the registration form with the required details.",
      ],
    },
    // My Family
    {
      href: "/courses/beginner/my-family",
      label: "My Family",
      objective: "Introduce family members and say how they are related.",
      usefulLanguage:
        "This is my…; Who’s he/she?; Who are they?; He’s/She’s my…; They’re my…; His/Her/Their name(s)…",
      vocabulary: "Family members",
      skills:
        "Listening for relationships, spoken interaction, and short writing",
      recycles: "Introductions, names, and the verb be",
      pronunciation:
        "Contractions in who’s, he’s, she’s, and they’re; stress on the person and family word",
      finalTask:
        "Use a photo or drawing to introduce three family members and write three captions.",
      successCriteria: [
        "Name three family relationships.",
        "Use my, his, or her accurately in simple sentences.",
        "Ask and answer a Who’s…? or Who are they? question.",
      ],
    },
    // More Family Members
    {
      href: "/courses/beginner/more-family-members",
      label: "More Family Members",
      objective:
        "Describe relationships in extended, married, and blended families.",
      usefulLanguage:
        "This is my…; He’s her husband.; She’s their daughter.; Who are they?; Kate’s husband",
      vocabulary:
        "Husband, wife, son, daughter, nephew, niece, in-laws, stepfather, half-brother",
      skills:
        "Listening for relationships, describing a family tree, and short writing",
      recycles: "Core family words, possessive adjectives, and identifying people",
      pronunciation:
        "Word stress in family words and /s/ or /z/ in possessive ’s",
      finalTask:
        "Create a fictional family tree and describe at least four relationships.",
      successCriteria: [
        "Use at least four new family words accurately.",
        "Describe relationships with a possessive adjective.",
        "Use one possessive ’s phrase accurately.",
      ],
    },
    // My house
    {
      href: "/courses/beginner/my-house",
      label: "My House",
      objective: "Describe the main rooms and say what furniture is in them.",
      usefulLanguage: "There is a…; There are two…; Is there a…?; It’s in the…",
      vocabulary: "Rooms, furniture, basic prepositions of place",
      skills:
        "Listening for objects and locations, speaking, and short writing",
      recycles: "Possessives, familiar objects, and numbers",
      pronunciation: "There’s /ðerz/, there are, and plural -s",
      finalTask:
        "Describe a room without naming it so a partner can identify the room.",
      successCriteria: [
        "Name at least three rooms and three pieces of furniture.",
        "Use there is/there are and one preposition of place.",
        "Give enough information for a partner to identify the room.",
      ],
    },
    // Daily Routine
    {
      href: "/courses/beginner/daily-routine",
      label: "Daily Routine",
      objective:
        "Describe a simple weekday routine and say what time things happen.",
      usefulLanguage: "I get up at…; What time do you…?; I start work at…",
      vocabulary: "Daily activities, clock times",
      skills: "Listening for times, prepared speaking, and spoken interaction",
      recycles: "Numbers, clock times, and personal information questions",
      pronunciation:
        "Third-person -s and sentence stress in clock-time phrases",
      finalTask:
        "Describe four parts of your weekday routine and answer two prepared questions.",
      successCriteria: [
        "Say four routine activities in a clear order.",
        "Give a time for at least two activities.",
        "Ask or answer two What time…? questions.",
      ],
    },
    // My Week
    {
      href: "/courses/beginner/my-week",
      label: "My Week",
      objective:
        "Talk about weekly habits and say how often activities happen.",
      usefulLanguage: "I usually…; I never…; On Mondays…; How often do you…?",
      vocabulary: "Days, months, free-time activities",
      skills:
        "Reading a weekly schedule, prepared speaking, and spoken interaction",
      recycles: "Present Simple, daily activities, and clock times",
      pronunciation: "Stress in days of the week and frequency expressions",
      finalTask: "Plan and present a simple weekly schedule.",
      successCriteria: [
        "Add at least four activities to a weekly schedule.",
        "Use days and two frequency expressions.",
        "Present the schedule in short, prepared sentences.",
      ],
    },
    // Food and Drinks
    {
      href: "/courses/beginner/food-and-drinks",
      label: "Food and Drinks",
      objective:
        "Ask about food and drink preferences and order one basic item.",
      usefulLanguage:
        "I like…; I don’t like…; Do you like…?; Can I have…, please?; Here you are.; Thank you.",
      vocabulary: "Everyday food and drinks",
      skills:
        "Listening for preferences, spoken interaction, and a basic transaction",
      recycles:
        "Present Simple questions, everyday activities, and polite expressions",
      pronunciation: "Do you…?, don’t, and polite request intonation",
      finalTask:
        "Survey a partner about preferences, then role-play a short café exchange.",
      successCriteria: [
        "Ask and answer two Do you like…? questions.",
        "Report two preferences in simple sentences.",
        "Order one item using please and thank you.",
      ],
    },
    // Shopping
    {
      href: "/courses/beginner/shopping",
      label: "Shopping",
      objective:
        "Ask about a clothing item, its price, and which item someone means.",
      usefulLanguage:
        "How much is this?; How much are these?; Can I have that…, please?; Here you are.",
      vocabulary: "Clothes, colors, prices",
      skills: "Listening and transactional speaking",
      recycles: "Numbers, colors, and polite requests",
      pronunciation: "This/these, that/those, and clear prices",
      finalTask: "Role-play a short clothes-shop exchange.",
      successCriteria: [
        "Identify the item using a demonstrative and a color.",
        "Ask for and understand the price.",
        "Request the chosen item politely.",
      ],
    },
    // Around Town
    {
      href: "/courses/beginner/around-town",
      label: "Around Town",
      objective: "Ask where a familiar place is and give its basic location.",
      usefulLanguage:
        "Where is the…?; It’s next to…; It’s across from…; It’s between…",
      vocabulary: "Places in town, location phrases",
      skills:
        "Reading a simple map, listening for locations, and spoken interaction",
      recycles: "The verb be in questions and familiar place vocabulary",
      pronunciation: "Where is…?/Where’s…? and stress in location phrases",
      finalTask: "Use a simple map to ask for and give three locations.",
      successCriteria: [
        "Ask where three familiar places are.",
        "Locate them with next to, opposite, or near.",
        "Keep to locations rather than multi-step directions.",
      ],
    },
    // What are you doing?
    {
      href: "/courses/beginner/what-are-you-doing",
      label: "What Are You Doing?",
      objective: "Ask and say what people are doing now.",
      usefulLanguage:
        "What are you doing?; I’m cooking.; What’s she doing?; She’s reading.",
      vocabulary: "Common actions and activities",
      skills:
        "Listening for actions, picture-supported speaking, and interaction",
      recycles: "Subject pronouns, the verb be, and familiar activity verbs",
      pronunciation: "I’m/he’s/she’s/they’re and the -ing ending",
      finalTask: "Describe actions in a picture for a partner to identify.",
      successCriteria: [
        "Describe at least three actions happening now.",
        "Use am/is/are + verb-ing.",
        "Give enough information for a partner to identify the picture.",
      ],
    },
    // Abilities
    {
      href: "/courses/beginner/abilities",
      label: "Abilities",
      objective: "Ask and say what someone can and cannot do.",
      usefulLanguage: "I can…; I can’t…; Can you…?; Yes, I can. / No, I can’t.",
      vocabulary: "Skills, sports, everyday abilities",
      skills:
        "Listening, can/can’t pronunciation, note-taking, and interaction",
      recycles: "Activity vocabulary and Yes/No questions",
      pronunciation:
        "The contrast between can and can’t in statements and answers",
      finalTask:
        "Find classmates with three different abilities and report back.",
      successCriteria: [
        "Ask at least three Can you…? questions.",
        "Record short Yes, I can/No, I can’t answers.",
        "Report three abilities using clear can or can’t.",
      ],
    },
    // Rea-life Project
    {
      href: "/courses/beginner/real-life-project",
      label: "Real-Life Project",
      objective:
        "Introduce yourself, exchange familiar information, and agree on a simple social plan from prepared options.",
      usefulLanguage:
        "I’m…; I’m from…; I like…; Can you…?; Saturday or Sunday?; Let’s meet at…; Please repeat.",
      vocabulary: "Personal information, routines, preferences, places",
      skills: "Integrated listening, speaking, reading, and writing",
      recycles:
        "All A1 course language, especially names, times, preferences, places, and abilities",
      pronunciation:
        "Intelligible use of familiar chunks, names, days, and times",
      finalTask:
        "Meet a new person, complete a profile, and agree on a simple social plan.",
      successCriteria: [
        "Exchange at least four pieces of familiar information.",
        "Complete a short profile with key details.",
        "Choose an activity, day, time, and familiar place from the options.",
        "Ask for repetition when needed and present the final plan.",
      ],
    },
  ],
  elementary: [
    // A Weekend at Home
    {
      href: "/courses/elementary/past-home",
      label: "A Weekend at Home",
      pronunciation: "Past -ed endings /t/, /d/, and /ɪd/; linking in Did you…?",
      objective:
        "Describe completed home activities and say what you did not do.",
      usefulLanguage:
        "I stayed home.; I cleaned…; I didn’t…; Did you…?; What did you do?",
      vocabulary: "Household chores, home and free-time activities",
      skills: "Listening and spoken interaction",
      finalTask: "Interview a partner and compare two weekends spent at home.",
    },
    // A Day at the Beach
    {
      href: "/courses/elementary/past-beach",
      label: "A Day at the Beach",
      pronunciation:
        "Clear irregular past forms and weak pronunciation of did you in follow-up questions",
      objective:
        "Describe a past beach day with common irregular verbs and ask for details.",
      usefulLanguage:
        "We went…; I swam…; Then we ate…; Did you…?; What did you do?",
      vocabulary: "Beach activities, weather, seaside places",
      skills: "Listening and spoken interaction",
      finalTask:
        "Tell a partner about a real or invented beach day and answer follow-up questions.",
    },
    // Movie Night
    {
      href: "/courses/elementary/past-movies",
      label: "Movie Night",
      pronunciation:
        "Weak did you in past questions and sentence stress in opinions and recommendations",
      objective:
        "Talk about a recent movie experience, express an opinion, and ask follow-up questions.",
      usefulLanguage:
        "I saw…; Who did you go with?; Did you like it?; It was…; I’d recommend it.",
      vocabulary: "Movies, cinemas, weekend activities",
      skills: "Listening and spoken interaction",
      finalTask:
        "Interview a partner about a movie experience and decide which movie to watch.",
    },
    // A Family Celebration
    {
      href: "/courses/elementary/past-family",
      label: "A Family Celebration",
      pronunciation:
        "Stress and pausing with first, then, after that, and finally; regular past endings",
      objective:
        "Tell a short, connected story about a family event in chronological order.",
      usefulLanguage:
        "First…; Then…; After that…; Finally…; What happened next?",
      vocabulary: "Family activities, celebrations, special occasions",
      skills: "Listening and spoken narrative",
      finalTask:
        "Tell a real or imagined family story that a partner can retell.",
    },
    // Travels Plans
    {
      href: "/courses/elementary/travel-plans",
      label: "Travel Plans",
      pronunciation:
        "Going to in connected speech and sentence stress on destinations and activities",
      objective:
        "Describe a simple travel plan and ask about future intentions.",
      usefulLanguage:
        "I’m going to…; Where are you going to stay?; We’re going to visit…",
      vocabulary: "Transport, accommodation, destinations, activities",
      skills: "Listening and spoken interaction",
      finalTask: "Plan a short trip with a partner and present the itinerary.",
    },
    // Future Predictions
    {
      href: "/courses/elementary/future-predictions",
      label: "Future Predictions",
      pronunciation:
        "Contractions with will and won’t; intonation for confident and uncertain predictions",
      objective:
        "Make and explain simple predictions about everyday future life.",
      usefulLanguage:
        "I think… will…; Maybe…; I don’t think… will…; What do you think?",
      vocabulary: "Technology, work, transport, future life",
      skills: "Reading and spoken interaction",
      finalTask: "Create and discuss three predictions for life in 2040.",
    },
    // City Life
    {
      href: "/courses/elementary/city-life",
      label: "City Life",
      pronunciation:
        "Comparative -er endings, weak than, and contrastive stress when comparing places",
      objective:
        "Compare two places and explain which one better meets a need.",
      usefulLanguage:
        "It’s bigger than…; It’s more convenient…; I prefer… because…",
      vocabulary: "City features, transport, services, adjectives",
      skills: "Reading and spoken interaction",
      finalTask: "Compare two cities and recommend one to a visitor.",
    },
    // The Best Place
    {
      href: "/courses/elementary/the-best-place",
      label: "The Best Place",
      pronunciation:
        "Weak the before superlatives and sentence stress on the quality being compared",
      objective:
        "Compare several destinations and justify a simple preference.",
      usefulLanguage:
        "It’s the cheapest…; It has the best…; I’d choose… because…",
      vocabulary: "Travel destinations, attractions, descriptive adjectives",
      skills: "Reading and collaborative speaking",
      finalTask: "Choose the best destination for a group and explain why.",
    },
    // Healthy Living
    {
      href: "/courses/elementary/healthy-living",
      label: "Healthy Living",
      objective:
        "Explain general results of healthy and unhealthy habits and give simple advice.",
      usefulLanguage:
        "If you…, you…; When you…, you…; You should…; You shouldn’t…",
      vocabulary: "Health problems, habits, food, exercise",
      skills: "Listening and spoken interaction",
      recycles: "Present Simple habits, frequency, and lifestyle vocabulary",
      pronunciation: "Sentence stress and the pause after an initial if-clause",
      finalTask: "Create and discuss a simple healthy-habits guide.",
      successCriteria: [
        "Write three accurate Zero Conditional sentences.",
        "Use both if and when to describe general results.",
        "Add relevant advice with should or shouldn’t.",
      ],
    },
    // Rules
    {
      href: "/courses/elementary/rules",
      label: "Rules",
      pronunciation:
        "The contrast between must and mustn’t; connected speech in have to and don’t have to",
      objective:
        "Explain familiar rules, obligations, and things that are not allowed.",
      usefulLanguage: "You have to…; You must…; You mustn’t…; Do we have to…?",
      vocabulary: "Public places, school and workplace rules",
      skills: "Reading and spoken interaction",
      finalTask: "Agree on five clear rules for a shared space.",
    },
    // Shopping Smart
    {
      href: "/courses/elementary/shopping-smart",
      label: "Shopping Smart",
      pronunciation:
        "Stress on quantities and clear contrasts in much/many and some/any questions",
      objective:
        "Ask about quantities and choose products for a simple shopping list.",
      usefulLanguage: "How much…?; How many…?; Do we have any…?; We need some…",
      vocabulary: "Food products, containers, quantities, prices",
      skills: "Listening and transactional speaking",
      finalTask:
        "Plan a small event and buy the necessary items within a budget.",
    },
    // Experiences
    {
      href: "/courses/elementary/experiences",
      label: "Experiences",
      pronunciation:
        "Weak have/has, contractions with haven’t/hasn’t, and stress on ever and never",
      objective:
        "Ask about life experiences and give a simple relevant detail.",
      usefulLanguage:
        "Have you ever…?; Yes, I have. / No, I haven’t.; When did you…?",
      vocabulary: "Travel, achievements, unusual experiences",
      skills: "Listening and spoken interaction",
      finalTask: "Conduct a class experience survey and report one result.",
    },
    // Hobbies
    {
      href: "/courses/elementary/hobbies",
      label: "Hobbies",
      pronunciation:
        "The -ing ending, contractions in I’d/we’d, and stress in hobby expressions",
      objective:
        "Describe hobbies, preferences, and an activity you want to try.",
      usefulLanguage:
        "I enjoy…; I’m interested in…; I’d like to…; How often do you…?",
      vocabulary: "Hobbies, equipment, frequency",
      skills: "Reading and spoken interaction",
      finalTask: "Recommend a suitable hobby to a partner.",
    },
  ],
  intermediate: [
    // Life Experiences
    {
      href: "/courses/intermediate/life-experiences",
      label: "Life Experiences",
      pronunciation:
        "Weak have in the Present Perfect and stress on finished-time details in the Past Simple",
      objective:
        "Discuss experiences and add specific details about when they happened.",
      usefulLanguage:
        "Have you ever…?; I’ve…; I did it when…; How long have you…?",
      vocabulary: "Milestones, achievements, travel, memorable events",
      skills: "Listening and extended spoken interaction",
      finalTask: "Interview a partner and present one significant experience.",
    },
    // Storytelling
    {
      href: "/courses/intermediate/storytelling",
      label: "Storytelling",
      pronunciation:
        "Weak was/were in background actions and prominence on the main events of a story",
      objective:
        "Tell a clear story by setting the scene and sequencing key events.",
      usefulLanguage: "I was… when…; While…; Suddenly…; In the end…",
      vocabulary: "Narrative events, reactions, sequencing expressions",
      skills: "Listening and extended speaking",
      finalTask: "Tell a two-minute story from a visual prompt.",
    },
    // Maling Plans
    {
      href: "/courses/intermediate/making-plans",
      label: "Making Plans",
      pronunciation:
        "Contractions in future forms and sentence stress that highlights fixed arrangements",
      objective:
        "Discuss intentions, make arrangements, and agree on a shared plan.",
      usefulLanguage:
        "I’m planning to…; I’m meeting…; How about…?; That works for me.",
      vocabulary: "Goals, schedules, arrangements",
      skills: "Listening and collaborative speaking",
      finalTask: "Negotiate and produce a realistic group weekend plan.",
    },
    // What if?
    {
      href: "/courses/intermediate/what-if",
      label: "What If?",
      objective:
        "Discuss likely future situations and explain their consequences.",
      usefulLanguage:
        "If…, I’ll…; Unless…; What will happen if…?; It depends on…",
      vocabulary: "Choices, consequences, risk, decisions",
      skills: "Reading and problem-solving interaction",
      recycles: "Zero Conditional, Present Simple, and future forms with will",
      pronunciation: "Contractions with will and clause-level sentence stress",
      finalTask:
        "Choose the best response to a practical dilemma and justify it.",
      successCriteria: [
        "Describe a realistic future condition with if or unless.",
        "Give a logical result with will, may, or can.",
        "Explain a decision and suggest a backup plan.",
      ],
    },
    // Green Planet
    {
      href: "/courses/intermediate/green-planet",
      label: "Green Planet",
      pronunciation:
        "Rhythm across if/when clauses and sentence stress on causes and predictable results",
      objective:
        "Explain environmental cause-and-effect and propose practical action.",
      usefulLanguage: "If people…, it…; When…, …; We could…; One solution is…",
      vocabulary: "Climate, waste, energy, conservation",
      skills: "Reading and collaborative speaking",
      finalTask: "Create a small environmental action plan for the community.",
    },
    // Technology Today
    {
      href: "/courses/intermediate/technology-today",
      label: "Technology Today",
      pronunciation:
        "Weak relative pronouns and natural chunking between the main and defining clauses",
      objective:
        "Describe a technology clearly and explain what it is used for.",
      usefulLanguage:
        "It’s a device that…; It’s used for…; The person who…; What I like is…",
      vocabulary: "Devices, apps, features, digital habits",
      skills: "Listening and explanatory speaking",
      finalTask: "Pitch a useful app or device to a target user.",
    },
    // News Report
    {
      href: "/courses/intermediate/news-report",
      label: "News Report",
      pronunciation:
        "Weak passive auxiliaries and prominence on the action or result in a news report",
      objective:
        "Summarize a news event and distinguish confirmed facts from details.",
      usefulLanguage:
        "It was reported that…; … was affected by…; According to…",
      vocabulary: "News events, reporting verbs, sources",
      skills: "Reading, listening, and spoken reporting",
      finalTask: "Deliver a concise news bulletin from a fact sheet.",
    },
    // What did they say?
    {
      href: "/courses/intermediate/what-did-they-say",
      label: "What Did They Say?",
      pronunciation:
        "Connected speech in reported clauses and clear stress on the information being passed on",
      objective: "Relay the main points of a conversation accurately.",
      usefulLanguage:
        "She said that…; He told me…; They asked whether…; Apparently…",
      vocabulary: "Communication, messages, reporting verbs",
      skills: "Listening, note-taking, and spoken mediation",
      finalTask: "Listen to a message and relay it to a third person.",
    },
    // Career Path
    {
      href: "/courses/intermediate/career-path",
      label: "Career Path",
      pronunciation:
        "Weak modal forms and contrastive stress to distinguish obligation, advice, and possibility",
      objective: "Discuss workplace expectations and give career advice.",
      usefulLanguage:
        "You should…; You might…; You have to…; You don’t need to…",
      vocabulary: "Jobs, skills, responsibilities, qualifications",
      skills: "Reading and spoken interaction",
      finalTask:
        "Recommend a career path for a profile and justify the advice.",
    },
    // Relationsships
    {
      href: "/courses/intermediate/relationships",
      label: "Relationships",
      pronunciation:
        "Stress patterns in relationship phrasal verbs, including stressed particles where appropriate",
      objective: "Discuss relationship situations and give tactful advice.",
      usefulLanguage:
        "We get along…; They fell out…; You could…; If I were you…",
      vocabulary: "Relationships, feelings, common phrasal verbs",
      skills: "Listening and spoken interaction",
      finalTask:
        "Respond to a relationship dilemma in an advice-circle discussion.",
    },
  ],
  upperIntermediate: [
    // Dream Scenarios
    {
      href: "/courses/upper-intermediate/dream-scenarios",
      label: "Dream Scenarios",
      objective:
        "Explore hypothetical choices and evaluate possible consequences.",
      usefulLanguage:
        "If I were…, I’d…; Suppose…; I’d be more likely to…; On balance…",
      vocabulary: "Dreams, ambitions, priorities, life choices",
      skills: "Listening and speculative discussion",
      recycles: "First Conditional, Past Simple forms, and modal verbs",
      pronunciation: "I’d/we’d and contrastive stress in hypothetical choices",
      finalTask: "Discuss a life-changing scenario and defend your choice.",
      successCriteria: [
        "Describe at least three hypothetical present or future situations.",
        "Use would, could, or might to evaluate possible consequences.",
        "Compare the scenarios and defend one choice.",
      ],
    },
    // Regrets
    {
      href: "/courses/upper-intermediate/regrets",
      label: "Regrets",
      objective:
        "Reflect on a past decision and evaluate alternative outcomes.",
      usefulLanguage: "If I had…, I would have…; I wish I’d…; In hindsight…",
      vocabulary: "Decisions, consequences, emotions, reflection",
      skills: "Reading and extended spoken interaction",
      recycles: "Second Conditional, past narratives, and past participles",
      pronunciation:
        "Contractions in I’d and would’ve, with stress on alternative outcomes",
      finalTask: "Analyze a case study and present a better course of action.",
      successCriteria: [
        "Identify the real past decision and its actual outcome.",
        "Form three alternatives with the Third Conditional.",
        "Evaluate which alternative outcome was most plausible.",
      ],
    },
    // Business Communication
    {
      href: "/courses/upper-intermediate/business-communication",
      label: "Business Communication",
      pronunciation:
        "Connected modal-perfect forms such as must’ve and should’ve; stress for degree of certainty",
      objective:
        "Communicate degrees of certainty, obligation, and recommendation professionally.",
      usefulLanguage:
        "We may need to…; You’re expected to…; I’d strongly recommend…; It must be…",
      vocabulary: "Projects, deadlines, responsibilities, workplace decisions",
      skills: "Listening, speaking, and professional writing",
      finalTask: "Resolve a workplace problem in a short team meeting.",
    },
    // Leadership
    {
      href: "/courses/upper-intermediate/leadership",
      label: "Leadership",
      pronunciation:
        "Sentence stress in have/get something done and prominence on the delegated task",
      objective:
        "Delegate work, arrange services, and explain management decisions.",
      usefulLanguage:
        "I’ll have… done.; We need to get…; Could you take responsibility for…?",
      vocabulary: "Leadership, delegation, performance, services",
      skills: "Listening and collaborative speaking",
      finalTask: "Allocate roles and services for a time-sensitive project.",
    },
    // Innovation
    {
      href: "/courses/upper-intermediate/innovation",
      label: "Innovation",
      pronunciation:
        "Connected speech in will have and prominence on deadlines and completed milestones",
      objective:
        "Discuss innovation and project what will have changed by a future date.",
      usefulLanguage:
        "By 2035, … will have…; It is likely to…; One breakthrough could…",
      vocabulary: "Innovation, research, development, technology",
      skills: "Reading and speculative presentation",
      finalTask:
        "Present a plausible innovation timeline and answer questions.",
    },
    // Global Issues
    {
      href: "/courses/upper-intermediate/global-issues",
      label: "Global Issues",
      pronunciation:
        "Prominence in reporting passives and intonation that distinguishes claims from confirmed facts",
      objective:
        "Explain a global issue objectively and compare possible responses.",
      usefulLanguage:
        "It is widely believed…; … has been affected by…; One measure would be…",
      vocabulary: "Inequality, migration, public policy, sustainability",
      skills: "Reading, listening, and discussion",
      finalTask: "Brief a group on a global issue and recommend one response.",
    },
    // Debate Club
    {
      href: "/courses/upper-intermediate/debate-club",
      label: "Debate Club",
      pronunciation:
        "Pausing after discourse markers and contrastive intonation in concessions and rebuttals",
      objective:
        "Build a reasoned argument and respond constructively to opposition.",
      usefulLanguage:
        "To begin with…; That said…; I take your point, but…; Therefore…",
      vocabulary: "Claims, evidence, counterarguments, rebuttals",
      skills: "Listening and formal spoken interaction",
      finalTask:
        "Take part in a structured debate and deliver a closing statement.",
    },
    // Media and Marketing
    {
      href: "/courses/upper-intermediate/media-and-marketing",
      label: "Media and Marketing",
      pronunciation:
        "Pauses around non-defining relative clauses and prominence on supplementary information",
      objective: "Evaluate a campaign and explain how it targets an audience.",
      usefulLanguage:
        "The audience it targets…; What makes it effective is…; Whereas…",
      vocabulary: "Campaigns, branding, audiences, persuasion",
      skills: "Media reading and evaluative discussion",
      finalTask: "Pitch and defend a campaign concept for a defined audience.",
    },
    // Native-like English
    {
      href: "/courses/upper-intermediate/native-like-english",
      label: "Idiomatic English in Context",
      pronunciation:
        "Chunk stress and conversational intonation in fixed idiomatic expressions",
      objective:
        "Infer and use a small set of common idiomatic expressions appropriately.",
      usefulLanguage:
        "From the context, it seems to mean…; A natural way to say this is…",
      vocabulary: "High-frequency idioms and fixed expressions",
      skills: "Reading, listening, and contextual inference",
      finalTask:
        "Use the target expressions in a natural problem-solving dialogue.",
    },
    // Natural English
    {
      href: "/courses/upper-intermediate/natural-english",
      label: "Natural English",
      pronunciation:
        "Chunking in collocations and appropriate particle stress in common phrasal verbs",
      objective:
        "Use common collocations and phrasal verbs to speak more precisely.",
      usefulLanguage:
        "It largely depends on…; I ended up…; We need to take into account…",
      vocabulary: "High-frequency B2 collocations and phrasal verbs",
      skills: "Listening, noticing, and extended speaking",
      finalTask:
        "Retell and discuss a situation using the target word partnerships.",
    },
  ],
  advanced: [
    // Between the Lines
    {
      href: "/courses/advanced/reading-between-the-lines",
      label: "Reading Between the Lines",
      pronunciation:
        "Intonation and prominence that signal qualification, reservation, and implied stance",
      objective:
        "Infer stance and implied meaning, then justify an interpretation with linguistic evidence.",
      usefulLanguage:
        "This appears to imply…; The hedging suggests…; The choice of… indicates…",
      vocabulary: "Inference, stance, hedging, evaluation",
      skills: "Close reading, listening, and evidence-based discussion",
      finalTask: "Defend an interpretation of an ambiguous text or statement.",
    },
    // Synthesizing Sources
    {
      href: "/courses/advanced/synthesizing-sources",
      label: "Synthesizing Sources",
      pronunciation:
        "Contrastive stress between sources and pausing that clarifies synthesis relationships",
      objective:
        "Integrate complementary and conflicting information into a coherent neutral synthesis.",
      usefulLanguage:
        "While both sources acknowledge…; X maintains…, whereas Y…; Taken together…",
      vocabulary: "Evidence, attribution, convergence, contradiction",
      skills: "Critical reading, note-taking, and synthesis writing",
      finalTask: "Produce and present a neutral synthesis of two sources.",
    },
    // Building Complex Arguments
    {
      href: "/courses/advanced/building-complex-arguments",
      label: "Building Complex Arguments",
      pronunciation:
        "Prominence and intonation across claims, concessions, rebuttals, and qualified conclusions",
      objective:
        "Develop a nuanced argument, address a counterargument, and defend a conclusion.",
      usefulLanguage:
        "Admittedly…; This objection overlooks…; A more compelling interpretation is…",
      vocabulary: "Claims, warrants, evidence, concession, rebuttal",
      skills: "Critical reading, argumentation, and extended speaking",
      finalTask: "Present and defend a position under critical questioning.",
    },
    // Diplomatic Communication
    {
      href: "/courses/advanced/diplomatic-communication",
      label: "Diplomatic Communication",
      pronunciation:
        "Fall-rise intonation and softened prominence in hedged disagreement and proposals",
      objective:
        "Communicate disagreement or sensitive feedback clearly while preserving rapport.",
      usefulLanguage:
        "I wonder whether…; There may be some scope to…; I see your point; however…",
      vocabulary: "Mitigation, register, tact, sensitive feedback",
      skills: "Listening, pragmatic analysis, and spoken interaction",
      finalTask: "Handle a sensitive workplace conversation diplomatically.",
    },
    // Academic Presentations
    {
      href: "/courses/advanced/academic-presentations",
      label: "Academic Presentations",
      pronunciation:
        "Strategic pausing, signposting stress, and intonation that marks connections and conclusions",
      objective:
        "Deliver a coherent presentation on a complex topic and handle follow-up questions.",
      usefulLanguage:
        "I’ll begin by…; This brings us to…; The key implication is…; To sum up…",
      vocabulary: "Signposting, thematic development, academic claims",
      skills: "Research, presentation, listening, and Q&A",
      finalTask:
        "Deliver a structured briefing with evidence and a clear conclusion.",
    },
    // Mediation and Clarification
    {
      href: "/courses/advanced/mediation-and-clarification",
      label: "Mediation and Clarification",
      pronunciation:
        "Chunking complex information and intonation that signals reformulation and clarification",
      objective:
        "Reformulate complex information for a non-specialist and repair misunderstanding.",
      usefulLanguage:
        "In other words…; What this means in practice is…; Let me clarify…",
      vocabulary: "Reformulation, analogy, clarification, accessibility",
      skills: "Listening, mediation, and explanatory speaking",
      finalTask:
        "Explain a specialist text to a general audience and answer questions.",
    },
    // Critical Reviews
    {
      href: "/courses/advanced/critical-reviews",
      label: "Critical Reviews",
      pronunciation:
        "Evaluative prominence and concession intonation when balancing strengths and limitations",
      objective:
        "Evaluate a cultural work against explicit criteria and support a balanced judgment.",
      usefulLanguage:
        "Its principal strength lies in…; Despite…; It ultimately falls short because…",
      vocabulary: "Critical appraisal, criteria, impact, artistic choices",
      skills: "Critical reading, discussion, and review writing",
      finalTask:
        "Deliver a balanced critical review supported by specific evidence.",
    },
    // Negotiation and Consensus
    {
      href: "/courses/advanced/negotiation-and-consensus",
      label: "Negotiation and Consensus",
      pronunciation:
        "Conditional-offer intonation and purposeful pausing while stating priorities and conditions",
      objective:
        "Negotiate competing priorities and formulate a workable consensus.",
      usefulLanguage:
        "We could agree to… provided that…; Would you be open to…?; A viable compromise…",
      vocabulary: "Priorities, trade-offs, concessions, consensus",
      skills: "Listening, negotiation, and collaborative decision-making",
      finalTask:
        "Reach and formally summarize an agreement in a multi-party negotiation.",
    },
    // Precision and Nuance
    {
      href: "/courses/advanced/precision-and-nuance",
      label: "Precision and Nuance",
      pronunciation:
        "Prominence on hedges and certainty markers to calibrate the strength of a claim",
      objective:
        "Express fine degrees of certainty, attitude, emphasis, and qualification.",
      usefulLanguage:
        "It is highly probable…; To some extent…; Far from…; Arguably…",
      vocabulary: "Modality, certainty, emphasis, qualification",
      skills: "Close reading, language analysis, and precise speaking",
      finalTask:
        "Revise and deliver an overgeneralized statement with appropriate nuance.",
    },
    // Research Briefing
    {
      href: "/courses/advanced/research-briefing",
      label: "Research Briefing",
      pronunciation:
        "Prominence that separates findings, limitations, interpretations, and recommendations",
      objective:
        "Synthesize evidence, distinguish fact from inference, and justify recommendations.",
      usefulLanguage:
        "The evidence indicates…; This should not be taken to mean…; On balance, we recommend…",
      vocabulary: "Research methods, findings, limitations, recommendations",
      skills: "Critical reading, synthesis, briefing, and Q&A",
      finalTask:
        "Present a concise evidence-based briefing with justified recommendations.",
    },
  ],
} satisfies Record<string, CourseLessonCard[]>;

const allCourseLessonCards = Object.values(courseLessonsCardData).flat();

export const getCourseLessonCard = (
  href: string,
): CourseLessonCard | undefined =>
  allCourseLessonCards.find((lesson) => lesson.href === href);
