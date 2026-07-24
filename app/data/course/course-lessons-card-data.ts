import type { LessonCardContent } from "@/components/content/LessonCard";

export type CourseLessonCard = LessonCardContent & {
  href: string;
  label: string;
};

export const courseLessonsCardData = {
  beginner: [
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
    {
      href: "/courses/beginner/my-family",
      label: "My Family",
      objective: "Introduce family members and say how they are related.",
      usefulLanguage:
        "This is my…; Who’s she/he?; She’s my…; His/Her name is…; Laura’s brother",
      vocabulary: "Family members",
      skills:
        "Listening for relationships, spoken interaction, and short writing",
      recycles: "Introductions, names, and the verb be",
      pronunciation:
        "Who’s /huːz/, she’s /ʃiːz/, and final sounds in family words",
      finalTask:
        "Use a photo or drawing to introduce three family members and write three captions.",
      successCriteria: [
        "Name three family relationships.",
        "Use my, his, or her accurately in simple sentences.",
        "Use one possessive ’s phrase, such as Laura’s brother.",
      ],
    },
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
    {
      href: "/courses/beginner/my-week",
      label: "My Week",
      objective: "Talk about weekly habits and say how often activities happen.",
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
    {
      href: "/courses/beginner/food-and-drinks",
      label: "Food and Drinks",
      objective: "Ask about food and drink preferences and order one basic item.",
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
    {
      href: "/courses/elementary/past-beach",
      label: "Past: Beach",
      objective: "Describe a past day at the beach and ask what happened.",
      usefulLanguage: "We went…; I swam…; Did you…?; What did you do?",
      vocabulary: "Beach activities, weather, seaside places",
      skills: "Listening and spoken interaction",
      finalTask: "Tell a partner about a real or invented beach day.",
    },
    {
      href: "/courses/elementary/past-movies",
      label: "Past: Movies",
      objective: "Talk about a recent movie outing and ask follow-up questions.",
      usefulLanguage: "I saw…; Did you like it?; What happened?; It was…",
      vocabulary: "Movies, cinemas, weekend activities",
      skills: "Listening and spoken interaction",
      finalTask: "Interview a partner about their last movie experience.",
    },
    {
      href: "/courses/elementary/past-family",
      label: "Past: Family",
      objective: "Describe a past family event and sequence its main activities.",
      usefulLanguage: "We visited…; First…; Then…; After that…; Did everyone…?",
      vocabulary: "Family activities, celebrations, special occasions",
      skills: "Listening and spoken narrative",
      finalTask:
        "Tell a short story about a real or imagined family celebration.",
    },
    {
      href: "/courses/elementary/past-home",
      label: "Past: Home",
      objective: "Describe what you did at home during a past day or weekend.",
      usefulLanguage: "I stayed home.; I cleaned…; I didn’t…; What did you do?",
      vocabulary: "Household chores, home and free-time activities",
      skills: "Listening and spoken interaction",
      finalTask: "Compare how two people spent a weekend at home.",
    },
    {
      href: "/courses/elementary/travel-plans",
      label: "Travel Plans",
      objective: "Describe a simple travel plan and ask about future intentions.",
      usefulLanguage:
        "I’m going to…; Where are you going to stay?; We’re going to visit…",
      vocabulary: "Transport, accommodation, destinations, activities",
      skills: "Listening and spoken interaction",
      finalTask: "Plan a short trip with a partner and present the itinerary.",
    },
    {
      href: "/courses/elementary/future-predictions",
      label: "Future Predictions",
      objective: "Make and explain simple predictions about everyday future life.",
      usefulLanguage:
        "I think… will…; Maybe…; I don’t think… will…; What do you think?",
      vocabulary: "Technology, work, transport, future life",
      skills: "Reading and spoken interaction",
      finalTask: "Create and discuss three predictions for life in 2040.",
    },
    {
      href: "/courses/elementary/city-life",
      label: "City Life",
      objective: "Compare two places and explain which one better meets a need.",
      usefulLanguage:
        "It’s bigger than…; It’s more convenient…; I prefer… because…",
      vocabulary: "City features, transport, services, adjectives",
      skills: "Reading and spoken interaction",
      finalTask: "Compare two cities and recommend one to a visitor.",
    },
    {
      href: "/courses/elementary/the-best-place",
      label: "The Best Place",
      objective: "Compare several destinations and justify a simple preference.",
      usefulLanguage:
        "It’s the cheapest…; It has the best…; I’d choose… because…",
      vocabulary: "Travel destinations, attractions, descriptive adjectives",
      skills: "Reading and collaborative speaking",
      finalTask: "Choose the best destination for a group and explain why.",
    },
    {
      href: "/courses/elementary/healthy-living",
      label: "Healthy Living",
      objective: "Describe a health problem and give simple lifestyle advice.",
      usefulLanguage: "You should…; You shouldn’t…; I feel…; Why don’t you…?",
      vocabulary: "Health problems, habits, food, exercise",
      skills: "Listening and spoken interaction",
      finalTask: "Role-play a health-advice conversation.",
    },
    {
      href: "/courses/elementary/rules",
      label: "Rules",
      objective:
        "Explain familiar rules, obligations, and things that are not allowed.",
      usefulLanguage: "You have to…; You must…; You mustn’t…; Do we have to…?",
      vocabulary: "Public places, school and workplace rules",
      skills: "Reading and spoken interaction",
      finalTask: "Agree on five clear rules for a shared space.",
    },
    {
      href: "/courses/elementary/shopping-smart",
      label: "Shopping Smart",
      objective:
        "Ask about quantities and choose products for a simple shopping list.",
      usefulLanguage: "How much…?; How many…?; Do we have any…?; We need some…",
      vocabulary: "Food products, containers, quantities, prices",
      skills: "Listening and transactional speaking",
      finalTask:
        "Plan a small event and buy the necessary items within a budget.",
    },
    {
      href: "/courses/elementary/experiences",
      label: "Experiences",
      objective: "Ask about life experiences and give a simple relevant detail.",
      usefulLanguage:
        "Have you ever…?; Yes, I have. / No, I haven’t.; When did you…?",
      vocabulary: "Travel, achievements, unusual experiences",
      skills: "Listening and spoken interaction",
      finalTask: "Conduct a class experience survey and report one result.",
    },
    {
      href: "/courses/elementary/hobbies",
      label: "Hobbies",
      objective: "Describe hobbies, preferences, and an activity you want to try.",
      usefulLanguage:
        "I enjoy…; I’m interested in…; I’d like to…; How often do you…?",
      vocabulary: "Hobbies, equipment, frequency",
      skills: "Reading and spoken interaction",
      finalTask: "Recommend a suitable hobby to a partner.",
    },
  ],
  intermediate: [
    {
      href: "/courses/intermediate/life-experiences",
      label: "Life Experiences",
      objective:
        "Discuss experiences and add specific details about when they happened.",
      usefulLanguage:
        "Have you ever…?; I’ve…; I did it when…; How long have you…?",
      vocabulary: "Milestones, achievements, travel, memorable events",
      skills: "Listening and extended spoken interaction",
      finalTask: "Interview a partner and present one significant experience.",
    },
    {
      href: "/courses/intermediate/storytelling",
      label: "Storytelling",
      objective:
        "Tell a clear story by setting the scene and sequencing key events.",
      usefulLanguage: "I was… when…; While…; Suddenly…; In the end…",
      vocabulary: "Narrative events, reactions, sequencing expressions",
      skills: "Listening and extended speaking",
      finalTask: "Tell a two-minute story from a visual prompt.",
    },
    {
      href: "/courses/intermediate/making-plans",
      label: "Making Plans",
      objective:
        "Discuss intentions, make arrangements, and agree on a shared plan.",
      usefulLanguage:
        "I’m planning to…; I’m meeting…; How about…?; That works for me.",
      vocabulary: "Goals, schedules, arrangements",
      skills: "Listening and collaborative speaking",
      finalTask: "Negotiate and produce a realistic group weekend plan.",
    },
    {
      href: "/courses/intermediate/what-if",
      label: "What If?",
      objective: "Discuss likely future situations and explain their consequences.",
      usefulLanguage:
        "If…, I’ll…; Unless…; What will happen if…?; It depends on…",
      vocabulary: "Choices, consequences, risk, decisions",
      skills: "Reading and problem-solving interaction",
      finalTask:
        "Choose the best response to a practical dilemma and justify it.",
    },
    {
      href: "/courses/intermediate/green-planet",
      label: "Green Planet",
      objective:
        "Explain environmental cause-and-effect and propose practical action.",
      usefulLanguage: "If people…, it…; When…, …; We could…; One solution is…",
      vocabulary: "Climate, waste, energy, conservation",
      skills: "Reading and collaborative speaking",
      finalTask: "Create a small environmental action plan for the community.",
    },
    {
      href: "/courses/intermediate/technology-today",
      label: "Technology Today",
      objective: "Describe a technology clearly and explain what it is used for.",
      usefulLanguage:
        "It’s a device that…; It’s used for…; The person who…; What I like is…",
      vocabulary: "Devices, apps, features, digital habits",
      skills: "Listening and explanatory speaking",
      finalTask: "Pitch a useful app or device to a target user.",
    },
    {
      href: "/courses/intermediate/news-report",
      label: "News Report",
      objective:
        "Summarize a news event and distinguish confirmed facts from details.",
      usefulLanguage:
        "It was reported that…; … was affected by…; According to…",
      vocabulary: "News events, reporting verbs, sources",
      skills: "Reading, listening, and spoken reporting",
      finalTask: "Deliver a concise news bulletin from a fact sheet.",
    },
    {
      href: "/courses/intermediate/what-did-they-say",
      label: "What Did They Say?",
      objective: "Relay the main points of a conversation accurately.",
      usefulLanguage:
        "She said that…; He told me…; They asked whether…; Apparently…",
      vocabulary: "Communication, messages, reporting verbs",
      skills: "Listening, note-taking, and spoken mediation",
      finalTask: "Listen to a message and relay it to a third person.",
    },
    {
      href: "/courses/intermediate/career-path",
      label: "Career Path",
      objective: "Discuss workplace expectations and give career advice.",
      usefulLanguage:
        "You should…; You might…; You have to…; You don’t need to…",
      vocabulary: "Jobs, skills, responsibilities, qualifications",
      skills: "Reading and spoken interaction",
      finalTask:
        "Recommend a career path for a profile and justify the advice.",
    },
    {
      href: "/courses/intermediate/relationships",
      label: "Relationships",
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
    {
      href: "/courses/upper-intermediate/dream-scenarios",
      label: "Dream Scenarios",
      objective: "Explore hypothetical choices and evaluate possible consequences.",
      usefulLanguage:
        "If I were…, I’d…; Suppose…; I’d be more likely to…; On balance…",
      vocabulary: "Dreams, ambitions, priorities, life choices",
      skills: "Listening and speculative discussion",
      finalTask: "Discuss a life-changing scenario and defend your choice.",
    },
    {
      href: "/courses/upper-intermediate/regrets",
      label: "Regrets",
      objective: "Reflect on a past decision and evaluate alternative outcomes.",
      usefulLanguage: "If I had…, I would have…; I wish I’d…; In hindsight…",
      vocabulary: "Decisions, consequences, emotions, reflection",
      skills: "Reading and extended spoken interaction",
      finalTask: "Analyze a case study and present a better course of action.",
    },
    {
      href: "/courses/upper-intermediate/business-communication",
      label: "Business Communication",
      objective:
        "Communicate degrees of certainty, obligation, and recommendation professionally.",
      usefulLanguage:
        "We may need to…; You’re expected to…; I’d strongly recommend…; It must be…",
      vocabulary: "Projects, deadlines, responsibilities, workplace decisions",
      skills: "Listening, speaking, and professional writing",
      finalTask: "Resolve a workplace problem in a short team meeting.",
    },
    {
      href: "/courses/upper-intermediate/leadership",
      label: "Leadership",
      objective:
        "Delegate work, arrange services, and explain management decisions.",
      usefulLanguage:
        "I’ll have… done.; We need to get…; Could you take responsibility for…?",
      vocabulary: "Leadership, delegation, performance, services",
      skills: "Listening and collaborative speaking",
      finalTask: "Allocate roles and services for a time-sensitive project.",
    },
    {
      href: "/courses/upper-intermediate/innovation",
      label: "Innovation",
      objective:
        "Discuss innovation and project what will have changed by a future date.",
      usefulLanguage:
        "By 2035, … will have…; It is likely to…; One breakthrough could…",
      vocabulary: "Innovation, research, development, technology",
      skills: "Reading and speculative presentation",
      finalTask:
        "Present a plausible innovation timeline and answer questions.",
    },
    {
      href: "/courses/upper-intermediate/global-issues",
      label: "Global Issues",
      objective:
        "Explain a global issue objectively and compare possible responses.",
      usefulLanguage:
        "It is widely believed…; … has been affected by…; One measure would be…",
      vocabulary: "Inequality, migration, public policy, sustainability",
      skills: "Reading, listening, and discussion",
      finalTask: "Brief a group on a global issue and recommend one response.",
    },
    {
      href: "/courses/upper-intermediate/debate-club",
      label: "Debate Club",
      objective:
        "Build a reasoned argument and respond constructively to opposition.",
      usefulLanguage:
        "To begin with…; That said…; I take your point, but…; Therefore…",
      vocabulary: "Claims, evidence, counterarguments, rebuttals",
      skills: "Listening and formal spoken interaction",
      finalTask:
        "Take part in a structured debate and deliver a closing statement.",
    },
    {
      href: "/courses/upper-intermediate/media-and-marketing",
      label: "Media and Marketing",
      objective: "Evaluate a campaign and explain how it targets an audience.",
      usefulLanguage:
        "The audience it targets…; What makes it effective is…; Whereas…",
      vocabulary: "Campaigns, branding, audiences, persuasion",
      skills: "Media reading and evaluative discussion",
      finalTask: "Pitch and defend a campaign concept for a defined audience.",
    },
    {
      href: "/courses/upper-intermediate/native-like-english",
      label: "Idiomatic English in Context",
      objective:
        "Infer and use a small set of common idiomatic expressions appropriately.",
      usefulLanguage:
        "From the context, it seems to mean…; A natural way to say this is…",
      vocabulary: "High-frequency idioms and fixed expressions",
      skills: "Reading, listening, and contextual inference",
      finalTask:
        "Use the target expressions in a natural problem-solving dialogue.",
    },
    {
      href: "/courses/upper-intermediate/natural-english",
      label: "Natural English",
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
    {
      href: "/courses/advanced/reading-between-the-lines",
      label: "Reading Between the Lines",
      objective:
        "Infer stance and implied meaning, then justify an interpretation with linguistic evidence.",
      usefulLanguage:
        "This appears to imply…; The hedging suggests…; The choice of… indicates…",
      vocabulary: "Inference, stance, hedging, evaluation",
      skills: "Close reading, listening, and evidence-based discussion",
      finalTask: "Defend an interpretation of an ambiguous text or statement.",
    },
    {
      href: "/courses/advanced/synthesizing-sources",
      label: "Synthesizing Sources",
      objective:
        "Integrate complementary and conflicting information into a coherent neutral synthesis.",
      usefulLanguage:
        "While both sources acknowledge…; X maintains…, whereas Y…; Taken together…",
      vocabulary: "Evidence, attribution, convergence, contradiction",
      skills: "Critical reading, note-taking, and synthesis writing",
      finalTask: "Produce and present a neutral synthesis of two sources.",
    },
    {
      href: "/courses/advanced/building-complex-arguments",
      label: "Building Complex Arguments",
      objective:
        "Develop a nuanced argument, address a counterargument, and defend a conclusion.",
      usefulLanguage:
        "Admittedly…; This objection overlooks…; A more compelling interpretation is…",
      vocabulary: "Claims, warrants, evidence, concession, rebuttal",
      skills: "Critical reading, argumentation, and extended speaking",
      finalTask: "Present and defend a position under critical questioning.",
    },
    {
      href: "/courses/advanced/diplomatic-communication",
      label: "Diplomatic Communication",
      objective:
        "Communicate disagreement or sensitive feedback clearly while preserving rapport.",
      usefulLanguage:
        "I wonder whether…; There may be some scope to…; I see your point; however…",
      vocabulary: "Mitigation, register, tact, sensitive feedback",
      skills: "Listening, pragmatic analysis, and spoken interaction",
      finalTask: "Handle a sensitive workplace conversation diplomatically.",
    },
    {
      href: "/courses/advanced/academic-presentations",
      label: "Academic Presentations",
      objective:
        "Deliver a coherent presentation on a complex topic and handle follow-up questions.",
      usefulLanguage:
        "I’ll begin by…; This brings us to…; The key implication is…; To sum up…",
      vocabulary: "Signposting, thematic development, academic claims",
      skills: "Research, presentation, listening, and Q&A",
      finalTask:
        "Deliver a structured briefing with evidence and a clear conclusion.",
    },
    {
      href: "/courses/advanced/mediation-and-clarification",
      label: "Mediation and Clarification",
      objective:
        "Reformulate complex information for a non-specialist and repair misunderstanding.",
      usefulLanguage:
        "In other words…; What this means in practice is…; Let me clarify…",
      vocabulary: "Reformulation, analogy, clarification, accessibility",
      skills: "Listening, mediation, and explanatory speaking",
      finalTask:
        "Explain a specialist text to a general audience and answer questions.",
    },
    {
      href: "/courses/advanced/critical-reviews",
      label: "Critical Reviews",
      objective:
        "Evaluate a cultural work against explicit criteria and support a balanced judgment.",
      usefulLanguage:
        "Its principal strength lies in…; Despite…; It ultimately falls short because…",
      vocabulary: "Critical appraisal, criteria, impact, artistic choices",
      skills: "Critical reading, discussion, and review writing",
      finalTask:
        "Deliver a balanced critical review supported by specific evidence.",
    },
    {
      href: "/courses/advanced/negotiation-and-consensus",
      label: "Negotiation and Consensus",
      objective:
        "Negotiate competing priorities and formulate a workable consensus.",
      usefulLanguage:
        "We could agree to… provided that…; Would you be open to…?; A viable compromise…",
      vocabulary: "Priorities, trade-offs, concessions, consensus",
      skills: "Listening, negotiation, and collaborative decision-making",
      finalTask:
        "Reach and formally summarize an agreement in a multi-party negotiation.",
    },
    {
      href: "/courses/advanced/precision-and-nuance",
      label: "Precision and Nuance",
      objective:
        "Express fine degrees of certainty, attitude, emphasis, and qualification.",
      usefulLanguage:
        "It is highly probable…; To some extent…; Far from…; Arguably…",
      vocabulary: "Modality, certainty, emphasis, qualification",
      skills: "Close reading, language analysis, and precise speaking",
      finalTask:
        "Revise and deliver an overgeneralized statement with appropriate nuance.",
    },
    {
      href: "/courses/advanced/research-briefing",
      label: "Research Briefing",
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
