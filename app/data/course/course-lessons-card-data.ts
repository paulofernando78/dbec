import type { LessonCardContent } from "@/components/content/LessonCard";

type CourseLessonCardInput = LessonCardContent & {
  href?: string;
  materialHref?: string;
  assignmentHref?: string;
  label: string;
};

export type CourseLessonCard = CourseLessonCardInput & {
  href: string;
  materialHref: string;
  assignmentHref: string;
  legacyHref?: string;
};

const getCourseResourceParts = (href: string) => {
  const segments = href.split("/").filter(Boolean);
  const level = segments[1];
  const materialIndex = segments.indexOf("material");
  const assignmentIndex = segments.indexOf("assignment");
  const resourceIndex =
    materialIndex >= 0
      ? materialIndex
      : assignmentIndex >= 0
        ? assignmentIndex
        : -1;
  const slug = segments.at(-1);
  const rawSection =
    resourceIndex >= 0 ? segments[resourceIndex - 1] : (segments[2] ?? slug);
  const section = rawSection.replace(/^chapter-/, "section-");

  if (!level || !section || !slug) {
    throw new Error(`Invalid course href: "${href}".`);
  }

  return { level, section, slug };
};

const createResourceHref = (
  href: string,
  resourceType: "material" | "assignment",
) => {
  const { level, section, slug } = getCourseResourceParts(href);

  return `/course/${level}/${section}/${resourceType}/${slug}`;
};

const card = (lesson: CourseLessonCardInput): CourseLessonCard => {
  const sourceHref = lesson.materialHref ?? lesson.href;

  if (!sourceHref) {
    throw new Error(`Missing materialHref for "${lesson.label}".`);
  }

  const materialHref = createResourceHref(sourceHref, "material");

  return {
    ...lesson,
    href: materialHref,
    materialHref,
    assignmentHref: createResourceHref(
      lesson.assignmentHref ?? sourceHref,
      "assignment",
    ),
    legacyHref: lesson.href !== materialHref ? lesson.href : undefined,
  };
};

export const courseLessonsCardData: Record<string, CourseLessonCard[]> = {
  beginner: [
    card({
      label: "Introducing Yourself",
      objective:
        "Can greet someone, give a first name, ask someone's name, and close a short first meeting.",
      usefulLanguage:
        "Hi. Hello. I'm...; What's your name?; Nice to meet you.; Sorry?; Please repeat.; Bye.",
      vocabulary: "Greetings, first names, goodbyes",
      pronunciation: "Friendly greeting intonation; linking in 'meet you'",
      finalTask: "Meet a classmate and have a short first conversation.",
      materialHref: "/course/beginner/section-1/material/hello",
      assignmentHref: "/course/beginner/section-1/assignment/hello",
      classroom: {
        announcement: {
          description: "Review this lesson before our next class.",
        },
        material: {
          description: "Study the lesson and review the useful language.",
        },
        assignment: {
          title: "Introducing Yourself - Assignment",
          description: "Complete the final task.",
        },
      },
    }),
    card({
      materialHref: "/course/beginner/section-1/material/personal-information",
      label: "Personal Information",
      objective:
        "Can ask for and give basic personal information in a simple form or interview.",
      usefulLanguage:
        "What's your full name?; How do you spell it?; How old are you?; What's your email address?",
      vocabulary:
        "Alphabet, numbers 0-100, countries, nationalities, contact details",
      pronunciation:
        "English letter names; clear grouping in phone numbers and email addresses",
      finalTask: "Interview a partner and complete a simple registration form.",
    }),
    card({
      materialHref: "/course/beginner/section-2/material/my-family",
      label: "Nuclear Family",
      objective:
        "Can introduce close family members and say how people are related.",
      usefulLanguage:
        "This is my...; Who's he/she?; He's my...; She's my...; His/Her name is...",
      vocabulary:
        "Mother, father, sister, brother, son, daughter, parents, children",
      pronunciation:
        "Contractions in who's, he's, and she's; stress on family words",
      finalTask: "Use a photo or drawing to introduce three family members.",
    }),
    card({
      materialHref: "/course/beginner/section-2/material/my-relatives",
      label: "Extended Family",
      objective:
        "Can describe simple extended-family relationships using prepared language.",
      usefulLanguage:
        "This is my uncle.; She's my cousin.; It's my dad's car.; Who are they?",
      vocabulary:
        "Aunt, uncle, cousin, grandparents, husband, wife, nephew, niece",
      pronunciation:
        "Possessive 's as /s/ or /z/; word stress in family vocabulary",
      finalTask: "Create a simple family tree and describe four relationships.",
    }),
    card({
      href: "/course/beginner/my-house",
      label: "Welcome Home",
      objective:
        "Can name rooms and furniture and describe a room in simple sentences.",
      usefulLanguage:
        "There's a...; There are two...; Is there a...?; It's in the living room.",
      vocabulary:
        "Rooms, furniture, household objects, basic prepositions of place",
      pronunciation: "There is/there are; /th/ in 'there'; plural -s",
      finalTask: "Describe a room so a partner can identify it.",
    }),
    card({
      href: "/course/beginner/renting-a-home",
      label: "Renting a Home",
      objective:
        "Can ask and answer basic questions about rooms and furniture in a home.",
      usefulLanguage:
        "How many rooms are there?; Is there a kitchen?; There's a small bedroom.; It has...",
      vocabulary:
        "Apartment, house, bedroom, bathroom, kitchen, rent, small, big",
      pronunciation: "Sentence stress in questions about rooms and features",
      finalTask:
        "Role-play a short conversation about a simple rental listing.",
    }),
    card({
      href: "/course/beginner/daily-routine",
      label: "Time & Actions",
      objective:
        "Can describe a simple weekday routine and say what time things happen.",
      usefulLanguage:
        "I get up at seven.; I start work at eight.; What time do you...?; I go to bed at...",
      vocabulary: "Daily routine verbs, clock times, parts of the day",
      pronunciation:
        "Sentence stress in clock-time phrases; routine verb stress",
      finalTask:
        "Describe four parts of your weekday routine and ask two time questions.",
    }),
    card({
      href: "/course/beginner/my-week",
      label: "Habits & Frequency",
      objective:
        "Can talk about weekly habits and say how often common activities happen.",
      usefulLanguage:
        "I usually...; I sometimes...; I never...; On Mondays...; How often do you...?",
      vocabulary: "Days of the week, frequency adverbs, free-time activities",
      pronunciation: "Stress in days of the week and frequency expressions",
      finalTask: "Plan and present a simple weekly schedule.",
    }),
    card({
      href: "/course/beginner/food-and-drinks",
      label: "Food Preferences",
      objective:
        "Can say what food and drinks they like and ask about preferences.",
      usefulLanguage:
        "I like...; I don't like...; Do you like...?; Yes, I do.; No, I don't.",
      vocabulary: "Everyday food and drinks, meals, simple adjectives",
      pronunciation: "Weak do in questions; don't; polite response intonation",
      finalTask:
        "Survey classmates about food preferences and report two results.",
    }),
    card({
      href: "/course/beginner/eating-out",
      label: "Eating Out",
      objective:
        "Can order one or two basic items politely in a cafe or restaurant.",
      usefulLanguage:
        "Can I have..., please?; I'd like...; Here you are.; Anything else?; Thank you.",
      vocabulary: "Cafe items, menu words, prices, polite service expressions",
      pronunciation: "Polite request intonation; linking in 'Can I have...?'",
      finalTask: "Role-play a short cafe exchange with a partner.",
    }),
    card({
      href: "/course/beginner/shopping",
      label: "Shopping Basics",
      objective:
        "Can ask about a clothing item, identify it, and ask the price.",
      usefulLanguage:
        "How much is this?; How much are these?; Can I have that one, please?; I'll take it.",
      vocabulary: "Clothes, colors, sizes, prices",
      pronunciation: "This/these and that/those; clear prices",
      finalTask: "Role-play a short clothes-shop exchange.",
    }),
    card({
      href: "/course/beginner/bargain-hunting",
      label: "Bargain Hunting",
      objective:
        "Can compare simple prices and choose an item from prepared options.",
      usefulLanguage:
        "It's cheap.; It's expensive.; This one, please.; Do you have a smaller size?",
      vocabulary: "Cheap, expensive, size, sale, color, item names",
      pronunciation: "Contrastive stress when choosing between items",
      finalTask:
        "Choose an item from a small shop display and explain the choice simply.",
    }),
    card({
      href: "/course/beginner/around-town",
      label: "Locations",
      objective:
        "Can ask where a familiar place is and give its basic location.",
      usefulLanguage:
        "Where's the...?; It's next to...; It's across from...; It's between...",
      vocabulary: "Places in town, location phrases, simple map words",
      pronunciation: "Where's...? and stress in location phrases",
      finalTask: "Use a simple map to ask for and give three locations.",
    }),
    card({
      href: "/course/beginner/finding-your-way",
      label: "Simple Directions",
      objective: "Can understand and give very simple directions using a map.",
      usefulLanguage:
        "Go straight.; Turn left.; Turn right.; It's on the corner.; It's near the...",
      vocabulary: "Directions, street, corner, left, right, near, far",
      pronunciation: "Chunking and pausing in short directions",
      finalTask: "Guide a partner to two places on a simple map.",
    }),
    card({
      href: "/course/beginner/what-are-you-doing",
      label: "Actions Now",
      objective:
        "Can ask and say what people are doing now using picture support.",
      usefulLanguage:
        "What are you doing?; I'm cooking.; What's she doing?; She's reading.",
      vocabulary: "Common actions and activities",
      pronunciation: "Contractions with be; -ing ending",
      finalTask: "Describe actions in a picture for a partner to identify.",
    }),
    card({
      href: "/course/beginner/abilities",
      label: "Abilities",
      objective: "Can ask and say what someone can and cannot do.",
      usefulLanguage:
        "I can...; I can't...; Can you...?; Yes, I can.; No, I can't.",
      vocabulary: "Skills, sports, everyday abilities",
      pronunciation: "Can /kən/ vs can /kæn/; can't /kænt/",
      finalTask:
        "Find classmates with three different abilities and report back.",
    }),
    card({
      href: "/course/beginner/real-life-project",
      label: "Real-Life Project",
      objective:
        "Can combine familiar A1 language to meet someone and make a simple social plan.",
      usefulLanguage:
        "I'm...; I'm from...; I like...; Can you...?; Saturday or Sunday?; Let's meet at...",
      vocabulary: "Personal information, routines, preferences, places, times",
      pronunciation: "Clear chunks, names, days, and times",
      finalTask:
        "Meet a new person, complete a short profile, and agree on a simple plan.",
    }),
    card({
      href: "/course/beginner/course-review",
      label: "Course Review",
      objective:
        "Can review and reuse A1 language in a supported real-life conversation.",
      usefulLanguage:
        "Nice to meet you.; Please repeat.; I usually...; I like...; Where's...?; I can...",
      vocabulary: "Core A1 review vocabulary",
      pronunciation:
        "Intelligibility review: stress, rhythm, and useful chunks",
      finalTask:
        "Complete a short A1 speaking interview and reflect on next steps.",
    }),
  ],

  elementary: [
    card({
      href: "/course/elementary/past-home",
      label: "A Weekend at Home",
      objective:
        "Can describe completed home and free-time activities in simple connected sentences.",
      usefulLanguage:
        "I stayed home.; I cleaned the kitchen.; I didn't go out.; What did you do?",
      vocabulary:
        "Household chores, free-time activities, weekend time expressions",
      pronunciation: "Regular past -ed endings: /t/, /d/, and /ɪd/",
      finalTask: "Interview a partner and compare two weekends.",
    }),
    card({
      href: "/course/elementary/past-beach",
      label: "A Day at the Beach",
      objective:
        "Can tell a simple past story using common irregular verbs and follow-up questions.",
      usefulLanguage:
        "We went to the beach.; I swam.; Then we ate.; Did you...?; What happened?",
      vocabulary: "Beach activities, weather, seaside places",
      pronunciation: "Clear irregular past forms; weak did you",
      finalTask: "Tell a partner about a real or invented beach day.",
    }),
    card({
      href: "/course/elementary/past-movies",
      label: "Movie Night",
      objective:
        "Can describe a recent movie experience and give a simple opinion.",
      usefulLanguage:
        "I saw...; Who did you go with?; Did you like it?; It was...; I'd recommend it.",
      vocabulary: "Movies, cinema, genres, opinions",
      pronunciation: "Sentence stress in opinions and recommendations",
      finalTask: "Interview a partner and choose a movie to watch.",
    }),
    card({
      href: "/course/elementary/past-family",
      label: "A Family Celebration",
      objective: "Can tell a short chronological story about a family event.",
      usefulLanguage:
        "First...; Then...; After that...; Finally...; What happened next?",
      vocabulary: "Family events, celebrations, special occasions",
      pronunciation: "Pausing after sequence markers; past endings review",
      finalTask: "Tell a family story that a partner can retell.",
    }),
    card({
      href: "/course/elementary/travel-plans",
      label: "Travel Plans",
      objective:
        "Can describe a simple future travel plan and ask about intentions.",
      usefulLanguage:
        "I'm going to...; Where are you going to stay?; We're going to visit...",
      vocabulary: "Transport, accommodation, destinations, travel activities",
      pronunciation: "Going to in connected speech; stress on destinations",
      finalTask: "Plan a short trip with a partner and present the itinerary.",
    }),
    card({
      href: "/course/elementary/future-predictions",
      label: "Future Predictions",
      objective:
        "Can make simple predictions about everyday future life and explain why.",
      usefulLanguage:
        "I think... will...; Maybe...; I don't think... will...; What do you think?",
      vocabulary: "Technology, work, transport, future life",
      pronunciation:
        "Will/won't contractions; intonation for certainty and uncertainty",
      finalTask: "Create and discuss three predictions for life in 2040.",
    }),
    card({
      href: "/course/elementary/city-life",
      label: "City Life",
      objective:
        "Can compare two places and explain which one better meets a need.",
      usefulLanguage:
        "It's bigger than...; It's more convenient.; I prefer... because...",
      vocabulary: "City features, transport, services, adjectives",
      pronunciation: "Comparative -er endings; weak than; contrastive stress",
      finalTask: "Compare two cities and recommend one to a visitor.",
    }),
    card({
      href: "/course/elementary/the-best-place",
      label: "The Best Place",
      objective:
        "Can compare several destinations and justify a simple group choice.",
      usefulLanguage:
        "It's the cheapest.; It has the best...; I'd choose... because...",
      vocabulary: "Travel destinations, attractions, descriptive adjectives",
      pronunciation:
        "Weak the before superlatives; stress on compared qualities",
      finalTask: "Choose the best destination for a group and explain why.",
    }),
    card({
      href: "/course/elementary/healthy-living",
      label: "Healthy Living",
      objective: "Can explain simple health habits and give basic advice.",
      usefulLanguage:
        "If you..., you...; When you..., you...; You should...; You shouldn't...",
      vocabulary: "Health problems, habits, food, exercise",
      pronunciation: "Sentence stress and pausing after an if-clause",
      finalTask: "Create and discuss a simple healthy-habits guide.",
    }),
    card({
      href: "/course/elementary/giving-advice",
      label: "Giving Advice",
      objective:
        "Can respond to everyday problems with simple, supportive advice.",
      usefulLanguage:
        "You should...; You could...; Why don't you...?; I think you need to...",
      vocabulary: "Everyday problems, feelings, health and study habits",
      pronunciation: "Softening advice with intonation",
      finalTask: "Give advice for three everyday problem cards.",
    }),
    card({
      href: "/course/elementary/rules",
      label: "Rules",
      objective:
        "Can explain familiar rules, obligations, and things that are not allowed.",
      usefulLanguage:
        "You have to...; You must...; You mustn't...; Do we have to...?",
      vocabulary: "Public places, school rules, workplace rules",
      pronunciation: "Must vs mustn't; connected speech in have to",
      finalTask: "Agree on five clear rules for a shared space.",
    }),
    card({
      href: "/course/elementary/school-and-work-rules",
      label: "School & Work Rules",
      objective: "Can compare rules in familiar school and work contexts.",
      usefulLanguage:
        "We have to...; We don't have to...; We're allowed to...; We can't...",
      vocabulary: "Duties, permission, schedules, classroom and work routines",
      pronunciation:
        "Weak to in have to; contrastive stress for obligation vs permission",
      finalTask: "Present a simple rules poster for a class or workplace.",
    }),
    card({
      href: "/course/elementary/shopping-smart",
      label: "Shopping Smart",
      objective:
        "Can ask about quantities and choose products for a simple shopping list.",
      usefulLanguage:
        "How much...?; How many...?; Do we have any...?; We need some...",
      vocabulary: "Food products, containers, quantities, prices",
      pronunciation: "Stress on quantities; much/many and some/any questions",
      finalTask: "Plan a small event and buy items within a budget.",
    }),
    card({
      href: "/course/elementary/complaints-and-returns",
      label: "Complaints & Returns",
      objective:
        "Can make a simple complaint and ask for a replacement or refund politely.",
      usefulLanguage:
        "I'd like to return this.; It's damaged.; It doesn't work.; Can I have a refund?",
      vocabulary: "Receipts, faults, sizes, refunds, exchanges",
      pronunciation: "Polite but firm intonation",
      finalTask: "Role-play a simple return or complaint at a shop.",
    }),
    card({
      href: "/course/elementary/experiences",
      label: "Experiences",
      objective:
        "Can ask about life experiences and give a simple past detail.",
      usefulLanguage:
        "Have you ever...?; Yes, I have.; No, I haven't.; When did you...?",
      vocabulary: "Travel, achievements, unusual experiences",
      pronunciation:
        "Weak have; contractions with haven't; stress on ever and never",
      finalTask: "Conduct an experience survey and report one result.",
    }),
    card({
      href: "/course/elementary/hobbies",
      label: "Hobbies",
      objective:
        "Can describe hobbies, preferences, and an activity they want to try.",
      usefulLanguage:
        "I enjoy...; I'm interested in...; I'd like to...; How often do you...?",
      vocabulary: "Hobbies, equipment, frequency, preferences",
      pronunciation: "-ing endings; contractions in I'd/we'd",
      finalTask: "Recommend a suitable hobby to a partner.",
    }),
  ],

  intermediate: [
    card({
      href: "/course/intermediate/milestones",
      label: "Milestones",
      objective:
        "Can discuss life experiences and add specific details about when they happened.",
      usefulLanguage:
        "Have you ever...?; I've already...; I haven't... yet.; I did it when...",
      vocabulary: "Milestones, achievements, travel, memorable events",
      pronunciation:
        "Weak have in Present Perfect; stress on finished-time details",
      finalTask: "Interview a partner and present one significant experience.",
    }),
    card({
      href: "/course/intermediate/looking-back",
      label: "Looking Back",
      objective: "Can describe past habits and explain how life has changed.",
      usefulLanguage:
        "I used to...; I didn't use to...; Now I've...; Things have changed because...",
      vocabulary: "Childhood, lifestyle changes, personal history",
      pronunciation: "Used to /ˈjuːstə/; contrastive stress on then vs now",
      finalTask: "Give a short talk about a personal life change.",
    }),
    card({
      href: "/course/intermediate/narrative-tenses",
      label: "Narrative Tenses",
      objective: "Can set the scene and sequence key events in a clear story.",
      usefulLanguage: "I was... when...; While...; Suddenly...; In the end...",
      vocabulary: "Narrative events, reactions, sequencing expressions",
      pronunciation: "Weak was/were; prominence on main events",
      finalTask: "Tell a two-minute story from a visual prompt.",
    }),
    card({
      href: "/course/intermediate/tell-your-story",
      label: "Tell Your Story",
      objective:
        "Can tell a personal anecdote with a beginning, middle, and ending.",
      usefulLanguage:
        "At first...; I realized that...; The best/worst part was...; Looking back...",
      vocabulary: "Anecdotes, feelings, reactions, story evaluation",
      pronunciation: "Pausing, chunking, and engaging storytelling rhythm",
      finalTask: "Tell a personal story and respond to follow-up questions.",
    }),
    card({
      href: "/course/intermediate/future-arrangements",
      label: "Future Arrangements",
      objective:
        "Can discuss intentions and fixed arrangements for the near future.",
      usefulLanguage:
        "I'm planning to...; I'm meeting...; Are you doing anything...?; That works for me.",
      vocabulary: "Goals, schedules, arrangements, invitations",
      pronunciation:
        "Contractions in future forms; stress on fixed arrangements",
      finalTask: "Arrange a realistic weekend plan with a partner.",
    }),
    card({
      href: "/course/intermediate/lets-meet-up",
      label: "Let's Meet Up",
      objective:
        "Can negotiate a shared plan and respond flexibly to suggestions.",
      usefulLanguage:
        "How about...?; I'd rather...; Could we...?; Let's do that instead.",
      vocabulary: "Social plans, preferences, schedules, compromises",
      pronunciation: "Natural intonation in suggestions and responses",
      finalTask: "Negotiate and confirm a group plan.",
    }),
    card({
      href: "/course/intermediate/what-if",
      label: "What If?",
      objective:
        "Can discuss likely future situations and explain their consequences.",
      usefulLanguage:
        "If..., I'll...; Unless...; What will happen if...?; It depends on...",
      vocabulary: "Choices, consequences, risks, practical decisions",
      pronunciation: "Contractions with will; clause-level sentence stress",
      finalTask:
        "Choose the best response to a practical dilemma and justify it.",
    }),
    card({
      href: "/course/intermediate/imaginary-situations",
      label: "Imaginary Situations",
      objective:
        "Can discuss hypothetical situations and give thoughtful advice.",
      usefulLanguage:
        "If I were you, I'd...; If I had more time, I'd...; What would you do if...?",
      vocabulary: "Personal problems, wishes, choices, advice",
      pronunciation: "Would contractions; sympathetic intonation",
      finalTask: "Respond to a problem scenario with advice and reasons.",
    }),
    card({
      href: "/course/intermediate/green-planet",
      label: "Green Planet",
      objective:
        "Can describe environmental problems using quantity and cause-effect language.",
      usefulLanguage:
        "There is too much...; There aren't enough...; This causes...; One problem is...",
      vocabulary: "Pollution, recycling, waste, energy, climate, conservation",
      pronunciation: "Stress on quantifiers and problem nouns",
      finalTask: "Explain one environmental problem and its local effects.",
    }),
    card({
      href: "/course/intermediate/taking-action",
      label: "Taking Action",
      objective:
        "Can propose practical environmental actions and defend a solution.",
      usefulLanguage:
        "We could...; If people..., it would...; One solution is...; I suggest...",
      vocabulary: "Community action, campaigns, solutions, sustainability",
      pronunciation: "Persuasive stress on solutions and benefits",
      finalTask: "Create a small environmental action plan for the community.",
    }),
    card({
      href: "/course/intermediate/digital-life",
      label: "Digital Life",
      objective:
        "Can describe technology habits and explain how long something has been happening.",
      usefulLanguage:
        "I've been using... for...; How long have you been...?; It helps me...",
      vocabulary: "Devices, apps, features, digital habits",
      pronunciation: "Been /bɪn/; duration phrase stress",
      finalTask:
        "Interview a partner about digital habits and report one trend.",
    }),
    card({
      href: "/course/intermediate/pros-and-cons",
      label: "Pros & Cons",
      objective:
        "Can discuss advantages and disadvantages of a familiar technology.",
      usefulLanguage:
        "The main advantage is...; On the other hand...; It can be useful because...",
      vocabulary: "Pros, cons, convenience, privacy, distraction, addiction",
      pronunciation: "Balanced contrast intonation",
      finalTask: "Present the pros and cons of an app or device.",
    }),
    card({
      href: "/course/intermediate/in-the-news",
      label: "In The News",
      objective:
        "Can summarize a simple news event and distinguish facts from reported claims.",
      usefulLanguage:
        "According to...; It was reported that...; The report says...; What happened was...",
      vocabulary: "News events, sources, reporting verbs, public issues",
      pronunciation: "Weak passive auxiliaries; prominence on the main event",
      finalTask: "Deliver a concise news bulletin from a fact sheet.",
    }),
    card({
      href: "/course/intermediate/breaking-news",
      label: "Breaking News",
      objective:
        "Can update a news story as new information becomes available.",
      usefulLanguage:
        "New information suggests...; It has been confirmed that...; Details are still unclear.",
      vocabulary: "Breaking news, updates, confirmation, uncertainty",
      pronunciation: "Formal reporting tone and information focus",
      finalTask:
        "Give a short breaking-news update using confirmed and unconfirmed details.",
    }),
    card({
      href: "/course/intermediate/he-said-she-said",
      label: "He Said, She Said",
      objective: "Can relay the main points of a conversation accurately.",
      usefulLanguage:
        "She said that...; He told me...; They asked whether...; Apparently...",
      vocabulary: "Messages, communication, reporting verbs, requests",
      pronunciation:
        "Connected speech in reported clauses; stress on relayed information",
      finalTask: "Listen to a message and relay it to a third person.",
    }),
    card({
      href: "/course/intermediate/the-interview",
      label: "The Interview",
      objective: "Can report questions and answers from an interview clearly.",
      usefulLanguage:
        "She asked me if...; I explained that...; He wanted to know whether...",
      vocabulary: "Interview questions, answers, clarification, summaries",
      pronunciation: "Clear reporting verbs and natural clause chunking",
      finalTask: "Interview a partner and report three key answers.",
    }),
    card({
      href: "/course/intermediate/job-hunting",
      label: "Job Hunting",
      objective: "Can discuss workplace expectations and give career advice.",
      usefulLanguage:
        "You should...; You might...; You have to...; You don't need to...",
      vocabulary: "Jobs, skills, responsibilities, qualifications",
      pronunciation:
        "Weak modal forms; contrastive stress for advice vs obligation",
      finalTask:
        "Recommend a career path for a profile and justify the advice.",
    }),
    card({
      href: "/course/intermediate/career-choices",
      label: "Career Choices",
      objective: "Can compare career options and explain a realistic decision.",
      usefulLanguage:
        "I'm interested in...; The best option would be...; It depends on...",
      vocabulary: "Career paths, strengths, experience, goals",
      pronunciation: "Confident listing intonation",
      finalTask: "Present two career options and defend one choice.",
    }),
    card({
      href: "/course/intermediate/reading-people",
      label: "Reading People",
      objective:
        "Can discuss relationship situations and interpret feelings tactfully.",
      usefulLanguage:
        "They get along.; They fell out.; It seems like...; Maybe she feels...",
      vocabulary: "Relationships, feelings, common phrasal verbs",
      pronunciation: "Stress patterns in relationship phrasal verbs",
      finalTask:
        "Interpret a relationship scenario and explain possible feelings.",
    }),
    card({
      href: "/course/intermediate/social-situations",
      label: "Social Situations",
      objective:
        "Can give tactful advice for common social or relationship problems.",
      usefulLanguage:
        "If I were you...; You could...; It might help to...; I see your point, but...",
      vocabulary: "Social situations, feelings, misunderstandings, advice",
      pronunciation: "Softening and tactful intonation",
      finalTask: "Respond to a social dilemma in an advice-circle discussion.",
    }),
  ],

  upperIntermediate: [
    card({
      href: "/course/upper-intermediate/dream-scenarios",
      label: "Dream Scenarios",
      objective:
        "Can explore hypothetical life choices and evaluate possible consequences.",
      usefulLanguage:
        "If I were...; I'd be more likely to...; Suppose...; On balance...",
      vocabulary: "Dreams, ambitions, priorities, life choices",
      pronunciation: "I'd/we'd and contrastive stress in hypothetical choices",
      finalTask: "Discuss a life-changing scenario and defend your choice.",
    }),
    card({
      href: "/course/upper-intermediate/life-goals",
      label: "Life Goals",
      objective: "Can discuss goals, priorities, and trade-offs with nuance.",
      usefulLanguage:
        "My long-term goal is...; I'd prioritize...; The downside would be...",
      vocabulary: "Goals, priorities, motivation, trade-offs",
      pronunciation: "Emphasis on priorities and concessions",
      finalTask: "Present a life-goal plan and respond to questions.",
    }),
    card({
      href: "/course/upper-intermediate/regrets",
      label: "Regrets",
      objective:
        "Can reflect on past decisions and discuss alternative outcomes.",
      usefulLanguage:
        "If I had...; I would have...; I wish I'd...; In hindsight...",
      vocabulary: "Regrets, decisions, consequences, reflection",
      pronunciation:
        "Contractions in I'd and would've; stress on alternative outcomes",
      finalTask: "Analyze a case study and present a better course of action.",
    }),
    card({
      href: "/course/upper-intermediate/looking-back",
      label: "Looking Back",
      objective:
        "Can evaluate a past situation and explain what could have been done differently.",
      usefulLanguage:
        "I should have...; It might have been better to...; The lesson is...",
      vocabulary: "Reflection, responsibility, lessons learned",
      pronunciation: "Modal perfect connected speech",
      finalTask:
        "Give a reflective account of a decision and its alternatives.",
    }),
    card({
      href: "/course/upper-intermediate/meeting-language",
      label: "Meeting Language",
      objective:
        "Can communicate degrees of certainty, obligation, and recommendation professionally.",
      usefulLanguage:
        "We may need to...; You're expected to...; I'd strongly recommend...; It must be...",
      vocabulary: "Projects, deadlines, responsibilities, workplace decisions",
      pronunciation: "Stress for certainty, obligation, and recommendation",
      finalTask: "Resolve a workplace problem in a short team meeting.",
    }),
    card({
      href: "/course/upper-intermediate/lets-negotiate",
      label: "Let's Negotiate",
      objective:
        "Can negotiate a professional outcome while maintaining rapport.",
      usefulLanguage:
        "Would you be willing to...?; Could we compromise on...?; I can agree to that if...",
      vocabulary: "Negotiation, concessions, priorities, deadlines",
      pronunciation: "Polite firmness and concession intonation",
      finalTask: "Negotiate a deadline, budget, or responsibility change.",
    }),
    card({
      href: "/course/upper-intermediate/qualities-of-a-leader",
      label: "Qualities of a Leader",
      objective: "Can discuss leadership qualities and delegate tasks clearly.",
      usefulLanguage:
        "A good leader tends to...; Could you take responsibility for...?; We need to get...",
      vocabulary: "Leadership, delegation, performance, responsibility",
      pronunciation: "Prominence on delegated tasks and responsibilities",
      finalTask: "Allocate roles for a time-sensitive project.",
    }),
    card({
      href: "/course/upper-intermediate/leading-a-team",
      label: "Leading a Team",
      objective:
        "Can explain management decisions and arrange services or support.",
      usefulLanguage:
        "I'll have... done.; We need to get...; The reason for this decision is...",
      vocabulary: "Teamwork, services, performance, support",
      pronunciation: "Sentence stress in have/get something done",
      finalTask: "Lead a short planning meeting and explain task allocation.",
    }),
    card({
      href: "/course/upper-intermediate/future-of-work",
      label: "The Future of Work",
      objective:
        "Can discuss innovation and project what will have changed by a future date.",
      usefulLanguage:
        "By 2035, ... will have...; It is likely to...; One breakthrough could...",
      vocabulary: "Innovation, research, automation, remote work, technology",
      pronunciation:
        "Connected will have; prominence on deadlines and milestones",
      finalTask:
        "Present a plausible innovation timeline and answer questions.",
    }),
    card({
      href: "/course/upper-intermediate/pitch-your-idea",
      label: "Pitch Your Idea",
      objective:
        "Can pitch an idea persuasively and respond to practical objections.",
      usefulLanguage:
        "The problem we're solving is...; What makes this viable is...; The main risk is...",
      vocabulary: "Pitching, benefits, risks, feasibility, innovation",
      pronunciation: "Pitch rhythm and emphasis on key benefits",
      finalTask: "Pitch an innovation and respond to two objections.",
    }),
    card({
      href: "/course/upper-intermediate/world-problems",
      label: "World Problems",
      objective:
        "Can explain a global issue objectively and compare possible responses.",
      usefulLanguage:
        "It is widely believed...; ... has been affected by...; One measure would be...",
      vocabulary: "Inequality, migration, public policy, sustainability",
      pronunciation:
        "Prominence in reporting passives; claim vs fact intonation",
      finalTask: "Brief a group on a global issue and recommend one response.",
    }),
    card({
      href: "/course/upper-intermediate/finding-solutions",
      label: "Finding Solutions",
      objective:
        "Can evaluate solutions to a complex public problem and justify a recommendation.",
      usefulLanguage:
        "A more sustainable approach would be...; This would address...; A limitation is...",
      vocabulary: "Policy, impact, feasibility, stakeholders, sustainability",
      pronunciation: "Pausing around problem-solution stages",
      finalTask: "Compare three solutions and defend the most realistic one.",
    }),
    card({
      href: "/course/upper-intermediate/making-your-case",
      label: "Making Your Case",
      objective:
        "Can build a reasoned argument and respond constructively to opposition.",
      usefulLanguage:
        "To begin with...; That said...; I take your point, but...; Therefore...",
      vocabulary: "Claims, evidence, counterarguments, rebuttals",
      pronunciation:
        "Pausing after discourse markers; contrastive intonation in concessions",
      finalTask:
        "Take part in a structured debate and deliver a closing statement.",
    }),
    card({
      href: "/course/upper-intermediate/the-big-debate",
      label: "The Big Debate",
      objective:
        "Can participate in an extended debate with clear turn-taking and evidence.",
      usefulLanguage:
        "The evidence suggests...; I'd challenge that because...; Could you clarify...?",
      vocabulary: "Debate roles, evidence, claims, clarification",
      pronunciation: "Turn-taking intonation and emphatic stress",
      finalTask: "Debate a current issue and summarize both sides fairly.",
    }),
    card({
      href: "/course/upper-intermediate/selling-an-idea",
      label: "Selling An Idea",
      objective:
        "Can evaluate a campaign and explain how it targets an audience.",
      usefulLanguage:
        "The audience it targets...; What makes it effective is...; Whereas...",
      vocabulary: "Campaigns, branding, audiences, persuasion",
      pronunciation:
        "Pauses around added information; prominence on persuasive claims",
      finalTask: "Analyze a campaign and explain why it works or fails.",
    }),
    card({
      href: "/course/upper-intermediate/ad-campaign",
      label: "Ad Campaign",
      objective:
        "Can design and defend a campaign concept for a defined audience.",
      usefulLanguage:
        "Our campaign is aimed at...; The key message is...; This appeals to...",
      vocabulary: "Slogans, channels, audience, brand voice, persuasion",
      pronunciation: "Persuasive pitch stress and confident delivery",
      finalTask: "Pitch and defend a campaign concept for a defined audience.",
    }),
    card({
      href: "/course/upper-intermediate/everyday-idioms",
      label: "Everyday Idioms",
      objective:
        "Can infer and use a small set of common idiomatic expressions appropriately.",
      usefulLanguage:
        "From the context, it seems to mean...; A natural way to say this is...",
      vocabulary: "High-frequency idioms and fixed expressions",
      pronunciation:
        "Chunk stress and conversational intonation in fixed expressions",
      finalTask:
        "Use target expressions in a natural problem-solving dialogue.",
    }),
    card({
      href: "/course/upper-intermediate/using-idioms-naturally",
      label: "Using Idioms Naturally",
      objective:
        "Can choose idiomatic or neutral language according to context and register.",
      usefulLanguage:
        "That sounds too informal.; In this context, I'd say...; It depends who you're speaking to.",
      vocabulary: "Idioms, register, tone, natural alternatives",
      pronunciation: "Natural chunking without over-stressing idioms",
      finalTask:
        "Reformulate formal and informal messages using appropriate expressions.",
    }),
    card({
      href: "/course/upper-intermediate/sounding-natural",
      label: "Sounding Natural",
      objective:
        "Can use common collocations and phrasal verbs to speak more precisely.",
      usefulLanguage:
        "It largely depends on...; I ended up...; We need to take into account...",
      vocabulary: "High-frequency B2 collocations and phrasal verbs",
      pronunciation:
        "Chunking in collocations; particle stress in phrasal verbs",
      finalTask: "Retell a situation using target word partnerships naturally.",
    }),
    card({
      href: "/course/upper-intermediate/real-conversations",
      label: "Real Conversations",
      objective:
        "Can manage natural conversation using clarification, reaction, and repair strategies.",
      usefulLanguage:
        "What I mean is...; That's a fair point.; Sorry, let me rephrase that.; Exactly.",
      vocabulary: "Conversation management, reactions, clarification, repair",
      pronunciation: "Backchanneling, response intonation, and natural rhythm",
      finalTask:
        "Hold a natural discussion and repair misunderstandings when needed.",
    }),
  ],

  advanced: [
    card({
      href: "/course/advanced/reading-between-the-lines",
      label: "Reading Between the Lines",
      objective:
        "Can infer implicit meaning, stance, and attitude from nuanced texts.",
      usefulLanguage:
        "The implication seems to be...; This suggests...; The writer appears to assume...",
      vocabulary: "Inference, stance, implication, ambiguity, nuance",
      pronunciation: "Prominence for contrast and implied meaning",
      finalTask: "Defend an interpretation of an ambiguous text or statement.",
    }),
    card({
      href: "/course/advanced/synthesizing-sources",
      label: "Synthesizing Sources",
      objective:
        "Can synthesize information from multiple sources and identify agreement, tension, and gaps.",
      usefulLanguage:
        "Taken together, the sources suggest...; This contrasts with...; A gap remains...",
      vocabulary: "Sources, evidence, synthesis, limitations, reliability",
      pronunciation: "Clear chunking in dense academic summaries",
      finalTask: "Produce and present a neutral synthesis of two sources.",
    }),
    card({
      href: "/course/advanced/building-complex-arguments",
      label: "Building Complex Arguments",
      objective:
        "Can construct a complex argument with concessions, qualifications, and evidence.",
      usefulLanguage:
        "While this is persuasive...; It would be misleading to claim...; A stronger case is...",
      vocabulary: "Claims, qualifications, assumptions, counterevidence",
      pronunciation: "Prominence across claims, concessions, and conclusions",
      finalTask: "Present and defend a position under critical questioning.",
    }),
    card({
      href: "/course/advanced/diplomatic-communication",
      label: "Diplomatic Communication",
      objective:
        "Can handle sensitive communication with tact, precision, and appropriate register.",
      usefulLanguage:
        "I appreciate your position.; My concern is...; Could we explore an alternative?",
      vocabulary: "Diplomacy, conflict, constraints, compromise, escalation",
      pronunciation: "Polite firmness, softening, and controlled emphasis",
      finalTask: "Handle a sensitive workplace conversation diplomatically.",
    }),
    card({
      href: "/course/advanced/academic-presentations",
      label: "Academic Presentations",
      objective:
        "Can deliver a structured presentation with clear signposting and evidence.",
      usefulLanguage:
        "This brings me to...; The data point to...; A reasonable interpretation is...",
      vocabulary: "Findings, methodology, implications, limitations",
      pronunciation: "Pacing, pausing, and prominence in formal presentations",
      finalTask: "Deliver a short academic presentation and answer questions.",
    }),
    card({
      href: "/course/advanced/mediation-and-clarification",
      label: "Mediation and Clarification",
      objective:
        "Can mediate meaning between speakers and clarify complex information.",
      usefulLanguage:
        "What they mean is...; To put that another way...; The key distinction is...",
      vocabulary: "Mediation, clarification, paraphrase, distinction, summary",
      pronunciation: "Clarity through chunking and contrastive stress",
      finalTask: "Mediate a complex explanation for a different audience.",
    }),
    card({
      href: "/course/advanced/critical-reviews",
      label: "Critical Reviews",
      objective:
        "Can evaluate a text, product, or performance with balanced criticism.",
      usefulLanguage:
        "One strength is...; A limitation is...; This is effective insofar as...",
      vocabulary:
        "Criteria, strengths, limitations, evaluation, recommendation",
      pronunciation: "Measured evaluative tone",
      finalTask: "Present a balanced critical review with recommendations.",
    }),
    card({
      href: "/course/advanced/negotiation-and-consensus",
      label: "Negotiation and Consensus",
      objective:
        "Can negotiate complex priorities and help a group reach consensus.",
      usefulLanguage:
        "What would make this acceptable?; Can we agree on...?; The trade-off is...",
      vocabulary:
        "Consensus, priorities, constraints, trade-offs, stakeholders",
      pronunciation: "Turn management and diplomatic emphasis",
      finalTask: "Facilitate a group decision and summarize the agreement.",
    }),
    card({
      href: "/course/advanced/precision-and-nuance",
      label: "Precision and Nuance",
      objective:
        "Can choose precise wording to express subtle differences in meaning.",
      usefulLanguage:
        "It's not exactly..., but rather...; The distinction is subtle.; I'd qualify that by saying...",
      vocabulary: "Nuance, precision, qualification, implication, register",
      pronunciation: "Prominence that clarifies subtle contrast",
      finalTask: "Refine a statement to make it more precise and nuanced.",
    }),
    card({
      href: "/course/advanced/research-briefing",
      label: "Research Briefing",
      objective:
        "Can synthesize evidence, distinguish fact from inference, and justify recommendations.",
      usefulLanguage:
        "The evidence indicates...; This should not be taken to mean...; On balance, we recommend...",
      vocabulary: "Research methods, findings, limitations, recommendations",
      pronunciation:
        "Prominence separating findings, limitations, and recommendations",
      finalTask:
        "Present a concise evidence-based briefing with justified recommendations.",
    }),
  ],
};

const allCourseLessonCards = Object.values(courseLessonsCardData).flat();

export const getCourseLessonCard = (
  href: string,
): CourseLessonCard | undefined =>
  allCourseLessonCards.find(
    (lesson) =>
      lesson.href === href ||
      lesson.materialHref === href ||
      lesson.assignmentHref === href ||
      lesson.legacyHref === href,
  );

export const getCourseLessonIndex = (href: string) => {
  const index = allCourseLessonCards.findIndex(
    (lesson) =>
      lesson.href === href ||
      lesson.materialHref === href ||
      lesson.assignmentHref === href ||
      lesson.legacyHref === href,
  );

  return index >= 0 ? index : undefined;
};
