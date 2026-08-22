import type {
  CourseLessonCard,
} from "@/data/course/course-lessons-card-data";
import { courseLessons } from "@/data/course/lessons-slug";

export type CourseSyllabusLesson = Omit<
  CourseLessonCard,
  "href" | "materialHref" | "assignmentHref"
> &
  Partial<Pick<CourseLessonCard, "href" | "materialHref" | "assignmentHref">>;

export type CourseSyllabusGroup = {
  label: string;
  lessons: CourseSyllabusLesson[];
};

export type CourseSyllabusLevel = {
  label: string;
  iconClassName: string;
  groups: CourseSyllabusGroup[];
};

const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const lesson = (
  level: string,
  label: string,
  usefulLanguage: string,
  vocabulary: string,
  languageFocus: string,
  pronunciation: string,
): CourseSyllabusLesson => {
  const lessonSlug = slug(label);

  return {
    legacyHref: `/course/${level}/${lessonSlug}`,
    label,
    objective: `Can understand and use: ${usefulLanguage}`,
    usefulLanguage,
    vocabulary,
    pronunciation,
    finalTask: `Use the lesson language in a short ${label.toLowerCase()} exchange.`,
  };
};

const group = (
  label: string,
  lessons: CourseSyllabusLesson[],
): CourseSyllabusGroup => {
  const sectionNumber = label.match(/^Section (\d+)/i)?.[1];

  if (!sectionNumber) return { label, lessons };

  return {
    label,
    lessons: lessons.map((lesson) => {
      const legacySegments = lesson.legacyHref?.split("/").filter(Boolean);
      const level = legacySegments?.[1];
      const lessonSlug = legacySegments?.at(-1);

      if (!level || !lessonSlug) return lesson;
      if (!courseLessons[level]?.lessons[lessonSlug]) return lesson;

      const materialHref = `/course/${level}/section-${sectionNumber}/material/${lessonSlug}`;

      return {
        ...lesson,
        href: materialHref,
        materialHref,
        assignmentHref: `/course/${level}/section-${sectionNumber}/assignment/${lessonSlug}`,
      };
    }),
  };
};

export const courseSyllabusSections: CourseSyllabusLevel[] = [
  {
    label: "A1 Beginner",
    iconClassName: "text-yellow-600",
    groups: [
      group("Section 1 • Introductions & Personal Information", [
        lesson(
          "beginner",
          "Introducing Yourself",
          "Hi, I'm Laura.; What's your name?",
          "greetings",
          "Subject pronouns; verb be; possessive adjectives",
          "alphabet; linking /t/ + /j/ in 'meet you'",
        ),
        lesson(
          "beginner",
          "Personal Information",
          "How old are you?; What's your phone number?; What's your email address?",
          "numbers 0-100",
          "Verb be questions and short answers",
          "word stress on numbers",
        ),
        lesson(
          "beginner",
          "Countries & Nationalities",
          "Where are you from?; I'm Brazilian.",
          "countries and nationalities",
          "Verb be questions; yes/no short forms",
          "word stress on nationality endings",
        ),
        lesson(
          "beginner",
          "Jobs",
          "What do you do?; I'm a developer.; He's an engineer.",
          "jobs",
          "a/an; basic plurals",
          "a/an before vowel sounds",
        ),
      ]),
      group("Section 2 • Family", [
        lesson(
          "beginner",
          "Nuclear Family",
          "Who's she?; She's my sister.; This is my brother.",
          "nuclear family members",
          "who; this/that/these/those",
          "stress on family words",
        ),
        lesson(
          "beginner",
          "Extended Family",
          "Whose car is it?; It's my dad's.",
          "extended family",
          "Whose?; possessive 's",
          "possessive 's pronunciation",
        ),
      ]),
      group("Section 3 • Home & Objects", [
        lesson(
          "beginner",
          "Welcome Home",
          "Come in!; Make yourself at home.; Where's the bathroom?",
          "rooms and furniture",
          "there is/there are affirmative",
          "/ð/ sound in 'there'",
        ),
        lesson(
          "beginner",
          "My Neighborhood",
          "It's very noisy.; I love living here.; I hate living here.",
          "adjectives for places and prepositions of place",
          "there is/are negative and questions",
          "sentence stress on adjectives",
        ),
      ]),
      group("Section 4 • Daily Routines", [
        lesson(
          "beginner",
          "Time & Actions",
          "What time do you get up?; I usually get up at...",
          "daily routine verbs and telling time",
          "Present Simple affirmative",
          "word stress on routine verbs",
        ),
        lesson(
          "beginner",
          "Habits & Frequency",
          "She never eats breakfast.",
          "frequency adverbs and days of the week",
          "Present Simple third person",
          "third-person -s endings",
        ),
      ]),
      group("Section 5 • Food & Meals", [
        lesson(
          "beginner",
          "Offering Food",
          "Would you like some coffee?; Yes, please.; No, thanks.",
          "food and drink items",
          "countable/uncountable nouns; some/any as chunks",
          "linking: would you /wʊdʒə/",
        ),
        lesson(
          "beginner",
          "Quantities",
          "How much is...?; How many... are there?",
          "menu items, prices, quantities",
          "How much/How many; a lot of",
          "sentence stress on quantity words",
        ),
      ]),
      group("Section 6 • Shopping", [
        lesson(
          "beginner",
          "In The Shop",
          "Can I help you?; I'm looking for...; I'll take it.",
          "clothes, colors, sizes",
          "object pronouns",
          "weak form of can /kən/",
        ),
        lesson(
          "beginner",
          "Prices",
          "How much does it cost?; It's on sale.",
          "money, prices, discounts",
          "this/that; one/ones",
          "weak form of does /dəz/",
        ),
      ]),
      group("Section 7 • Around Town", [
        lesson(
          "beginner",
          "Locations",
          "Excuse me, where's...?; It's on the corner.",
          "places in town",
          "prepositions of place; direction imperatives",
          "linking words in direction phrases",
        ),
        lesson(
          "beginner",
          "Transportation",
          "How do I get to...?; Take the bus.; It's a 5-minute walk.",
          "transportation",
          "Imperatives for directions",
          "rising intonation in wh- direction questions",
        ),
      ]),
      group("Section 8 • Action & Abilities", [
        lesson(
          "beginner",
          "Abilities",
          "I can swim.; I can't...",
          "sports and activities",
          "can/can't for ability",
          "strong and weak forms of can; can't",
        ),
        lesson(
          "beginner",
          "Could You Help Me?",
          "Could you...?; Can I...?; Sure, no problem.",
          "requests and favors",
          "can/could for requests and permission",
          "polite rising intonation",
        ),
      ]),
      group("Section 9 • Last Weekend", [
        lesson(
          "beginner",
          "Where Were You?",
          "Where were you last weekend?",
          "places in town and feelings",
          "past of verb be: was/were",
          "weak forms of was/were",
        ),
        lesson(
          "beginner",
          "How Was It?",
          "I was at home.; It was fantastic.",
          "common irregular verbs",
          "past of verb be negative and interrogative",
          "intonation in wh- questions",
        ),
      ]),
      group("Section 10 • Weather", [
        lesson(
          "beginner",
          "The Weather Today",
          "It's hot today, isn't it?",
          "weather and seasons",
          "It's + adjective; tag question as fixed chunk",
          "rising intonation on the tag",
        ),
        lesson(
          "beginner",
          "Months & Seasons",
          "What's the weather like in summer?",
          "months and seasons",
          "Present Simple for facts",
          "word stress on months and seasons",
        ),
      ]),
    ],
  },
  {
    label: "A2 Elementary",
    iconClassName: "text-red-600",
    groups: [
      group("Section 1 • Past Events and Experiences", [
        lesson(
          "elementary",
          "Talking About The Past",
          "Yesterday I watched a film.; I went to the beach.",
          "free-time activities and time expressions",
          "Past Simple regular and irregular verbs",
          "-ed endings /t/, /d/, /ɪd/",
        ),
        lesson(
          "elementary",
          "Past Questions",
          "What did you do last weekend?; When did you go?",
          "weekend activities",
          "Past Simple negative and interrogative",
          "clear /d/ in did you",
        ),
      ]),
      group("Section 2 • Holidays and Travel", [
        lesson(
          "elementary",
          "Holidays In The Past",
          "Where did you go on holiday?; I went to the beach.",
          "holiday activities and places",
          "Past Simple with time expressions",
          "intonation in wh- questions",
        ),
        lesson(
          "elementary",
          "Describing A Trip",
          "We stayed in a hotel.; It was fantastic.",
          "travel vocabulary",
          "Past Simple narrative",
          "adjective stress",
        ),
        lesson(
          "elementary",
          "Travel Problems",
          "The flight was delayed.; I lost my passport.",
          "travel problems",
          "Past Simple + adjectives",
          "sentence stress for emphasis",
        ),
        lesson(
          "elementary",
          "Have You Ever...?",
          "Have you ever been to...?; I've never tried surfing.",
          "travel experiences",
          "Present Perfect ever/never",
          "weak have",
        ),
      ]),
      group("Section 3 • Future Plans and Arrangements", [
        lesson(
          "elementary",
          "Plans With Going To",
          "I'm going to study English.; I'm not going to stay home.",
          "future plans and intentions",
          "going to affirmative and negative",
          "weak to /tə/",
        ),
        lesson(
          "elementary",
          "Going To Questions",
          "What are you going to do tomorrow?; Are you going to travel?",
          "future time expressions",
          "going to questions",
          "rising/falling intonation",
        ),
        lesson(
          "elementary",
          "Future Arrangements",
          "I'm meeting Sarah at 6.; Are you doing anything on Saturday?",
          "arrangements",
          "Present Continuous for future arrangements",
          "contracted forms",
        ),
        lesson(
          "elementary",
          "Contrasting Futures",
          "I'm going to study.; I'm seeing the doctor.",
          "future forms",
          "going to vs Present Continuous",
          "contrastive stress",
        ),
      ]),
      group("Section 4 • Health and the Body", [
        lesson(
          "elementary",
          "Parts Of The Body",
          "I've got a headache.; My back hurts.",
          "parts of the body",
          "have got for illnesses",
          "body-part word stress",
        ),
        lesson(
          "elementary",
          "Health Problems",
          "What's the matter?; I've got a cold.",
          "illnesses and symptoms",
          "have got + symptoms",
          "sympathetic intonation",
        ),
        lesson(
          "elementary",
          "Health Advice",
          "You should drink more water.; You shouldn't go to work.",
          "advice vocabulary",
          "should/shouldn't",
          "strong form of should",
        ),
        lesson(
          "elementary",
          "At The Doctor's",
          "You should see a doctor.; Take this medicine twice a day.",
          "doctor and pharmacy language",
          "should + have got review",
          "polite request intonation",
        ),
      ]),
      group("Section 5 • Describing People", [
        lesson(
          "elementary",
          "Physical Appearance",
          "What does he look like?; He's tall and thin.",
          "appearance adjectives",
          "look like + be + adjectives",
          "adjective order stress",
        ),
        lesson(
          "elementary",
          "Personality",
          "She's very friendly.; He's a bit shy but kind.",
          "personality adjectives",
          "be + personality adjectives",
          "softening with a bit",
        ),
        lesson(
          "elementary",
          "Comparatives 1",
          "She's taller than her sister.; He's older than me.",
          "short comparative adjectives",
          "comparative -er + than",
          "-er endings",
        ),
        lesson(
          "elementary",
          "Comparatives 2",
          "This book is more interesting than that one.",
          "long adjectives and irregulars",
          "more + adjective; irregular comparatives",
          "stress on more",
        ),
      ]),
      group("Section 6 • Transport and Directions", [
        lesson(
          "elementary",
          "Means Of Transport",
          "I go to work by bus.; How do you usually travel?",
          "transport vocabulary",
          "prepositions of movement",
          "weak forms in prepositions",
        ),
        lesson(
          "elementary",
          "Asking For Directions",
          "Excuse me, how do I get to the station?",
          "direction phrases",
          "imperatives + prepositions",
          "linking in directions",
        ),
        lesson(
          "elementary",
          "Giving Directions",
          "First go straight, then turn right.",
          "sequence words",
          "sequencing + imperatives",
          "clear pausing between steps",
        ),
        lesson(
          "elementary",
          "Public Transport",
          "How can I get to the airport?; Does this bus go downtown?",
          "tickets, schedules, routes",
          "can for possibility and requests",
          "rising intonation on questions",
        ),
      ]),
      group("Section 7 • Shopping and Services", [
        lesson(
          "elementary",
          "Shops And Services",
          "Is there a pharmacy near here?; I'm looking for a post office.",
          "shops and services",
          "there is/are + quantifiers review",
          "word stress on shop names",
        ),
        lesson(
          "elementary",
          "Shopping Problems",
          "It's too expensive.; It isn't big enough.",
          "size, price, quality problems",
          "too/enough",
          "stress on too and enough",
        ),
        lesson(
          "elementary",
          "Making Complaints",
          "I'd like to return this.; Can I have a refund?",
          "complaint language",
          "too/enough + polite requests",
          "polite but firm intonation",
        ),
      ]),
      group("Section 8 • Work and Routines", [
        lesson(
          "elementary",
          "Work Routines",
          "What do you do?; I work in an office.",
          "jobs and work activities",
          "Present Simple vs Present Continuous",
          "contrastive stress",
        ),
        lesson(
          "elementary",
          "Describing Your Job",
          "I usually answer emails.; At the moment I'm working on a project.",
          "work tasks",
          "Present Simple + Present Continuous",
          "natural rhythm",
        ),
        lesson(
          "elementary",
          "Basic Job Applications",
          "I can use Excel.; I'm good at teamwork.",
          "skills vocabulary",
          "can + Present Simple for skills",
          "confident intonation",
        ),
      ]),
      group("Section 9 • Food and Restaurants", [
        lesson(
          "elementary",
          "At The Restaurant",
          "Could I have the menu, please?; I'd like grilled chicken.",
          "restaurant language",
          "would like + ordering",
          "polite request intonation",
        ),
        lesson(
          "elementary",
          "Offering And Requesting",
          "Would you like some more water?; Can I get you anything else?",
          "offering language",
          "Would you like...?",
          "friendly rising intonation",
        ),
        lesson(
          "elementary",
          "Portions And Recipes",
          "Just a little sugar.; A few fries.",
          "food portions and recipes",
          "a few/a little; too much/too many",
          "stress on quantifiers",
        ),
      ]),
      group("Section 10 • Opinions and Preferences", [
        lesson(
          "elementary",
          "Expressing Opinions",
          "What do you think of this film?; I think it's really good.",
          "opinion phrases",
          "I think; In my opinion",
          "stress on opinion phrases",
        ),
        lesson(
          "elementary",
          "Agreeing And Disagreeing",
          "I agree.; I don't agree.; Me too.; Neither do I.",
          "agreement language",
          "So do I; Neither do I",
          "supportive intonation",
        ),
        lesson(
          "elementary",
          "Preferences",
          "I prefer tea to coffee.; I'd rather stay home.",
          "preference language",
          "prefer/would rather",
          "contrastive stress",
        ),
      ]),
    ],
  },
  {
    label: "B1 Intermediate",
    iconClassName: "text-blue-600",
    groups: [
      group("Section 1 • Life Experiences", [
        lesson(
          "intermediate",
          "Life Experiences",
          "I've already finished.; I haven't decided yet.",
          "achievements and milestones",
          "Present Perfect with already/yet/just",
          "position of adverbs",
        ),
        lesson(
          "intermediate",
          "Introduction To Present Perfect",
          "Have you ever been to Japan?; I've never tried sushi.",
          "life experiences",
          "Present Perfect ever/never",
          "strong form of have in questions",
        ),
        lesson(
          "intermediate",
          "Present Perfect Vs Past Simple",
          "I've been to Paris.; I went to Paris last year.",
          "life events and finished time",
          "Present Perfect vs Past Simple",
          "contrastive stress on time phrases",
        ),
      ]),
      group("Section 2 • Life Changes and Past Habits", [
        lesson(
          "intermediate",
          "Used To",
          "I used to play football.; I didn't use to like vegetables.",
          "past habits and states",
          "used to affirmative and negative",
          "weak form of used to",
        ),
        lesson(
          "intermediate",
          "Used To Questions",
          "Did you use to live in the city?; Where did you use to work?",
          "childhood and past life",
          "used to questions",
          "clear /d/ in did you",
        ),
        lesson(
          "intermediate",
          "Life Changes",
          "I used to live with my parents.; Now I've moved.",
          "life changes",
          "used to + Present Perfect",
          "contrastive stress: used to vs now",
        ),
      ]),
      group("Section 3 • Narratives and Storytelling", [
        lesson(
          "intermediate",
          "Past Continuous",
          "I was watching TV at 8.; What were you doing?",
          "actions in progress",
          "Past Continuous",
          "weak forms of was/were",
        ),
        lesson(
          "intermediate",
          "Past Continuous + Past Simple",
          "I was having a shower when the phone rang.",
          "interrupted actions",
          "Past Continuous + Past Simple",
          "stress on the interrupting action",
        ),
        lesson(
          "intermediate",
          "Telling Stories",
          "One day...; Suddenly...; In the end...",
          "storytelling linkers",
          "Narrative tenses",
          "dramatic intonation",
        ),
        lesson(
          "intermediate",
          "Personal Stories",
          "The most embarrassing moment was when...",
          "personal anecdote language",
          "Mixed past tenses",
          "engaging storytelling rhythm",
        ),
      ]),
      group("Section 4 • Opinions and Discussions", [
        lesson(
          "intermediate",
          "Strong Opinions",
          "I think we should recycle more.; People must respect the rules.",
          "social topics",
          "should/must/have to",
          "emphatic stress on modals",
        ),
        lesson(
          "intermediate",
          "Agreeing And Disagreeing Advanced",
          "I completely agree.; I'm not sure about that.; I see your point, but...",
          "discussion phrases",
          "agreement and disagreement expressions",
          "polite disagreement intonation",
        ),
        lesson(
          "intermediate",
          "Simple Debates",
          "On the one hand...; On the other hand...; Because...; So...",
          "education, work, society",
          "giving reasons with because/so",
          "balanced argument rhythm",
        ),
      ]),
      group("Section 5 • Work and Career", [
        lesson(
          "intermediate",
          "What If?",
          "If I get the job, I'll move to London.",
          "work situations",
          "First Conditional",
          "contracted forms: I'll/you'll",
        ),
        lesson(
          "intermediate",
          "Obligations At Work",
          "You have to wear a uniform.; You mustn't use your phone.",
          "job responsibilities",
          "must/have to/should/mustn't",
          "strong obligation stress",
        ),
        lesson(
          "intermediate",
          "Job Interviews",
          "What would you do if a customer complained?; My strengths are...",
          "interview language",
          "First Conditional + modals",
          "confident clear speech",
        ),
        lesson(
          "intermediate",
          "Skills And Experience",
          "I've worked as a waiter.; I'm good at solving problems.",
          "skills and experience",
          "Present Perfect + can",
          "natural listing intonation",
        ),
      ]),
      group("Section 6 • Problems and Advice", [
        lesson(
          "intermediate",
          "Introduction To Second Conditional",
          "If I were you, I would talk to her.",
          "hypothetical situations",
          "Second Conditional",
          "were for all persons",
        ),
        lesson(
          "intermediate",
          "Advice With Second Conditional",
          "If I had more time, I would learn the piano.",
          "personal problems",
          "Second Conditional for advice",
          "sympathetic tone",
        ),
        lesson(
          "intermediate",
          "Problems And Solutions",
          "What would you do if you lost your passport?",
          "everyday problems",
          "should + Second Conditional",
          "problem-solution intonation",
        ),
      ]),
      group("Section 7 • The Environment", [
        lesson(
          "intermediate",
          "Green Planet",
          "There is too much pollution.; There aren't enough recycling bins.",
          "environment",
          "too much/many; enough",
          "stress on quantifiers",
        ),
        lesson(
          "intermediate",
          "Environmental Solutions",
          "If everyone recycled, the planet would be cleaner.",
          "green living",
          "First Conditional for solutions",
          "optimistic intonation",
        ),
        lesson(
          "intermediate",
          "Discussing The Environment",
          "In my opinion the biggest problem is climate change.",
          "discussion language",
          "opinion + quantifiers + conditionals",
          "persuasive stress",
        ),
      ]),
      group("Section 8 • Technology and Social Media", [
        lesson(
          "intermediate",
          "Present Perfect Continuous",
          "I've been using this app for two years.",
          "technology use",
          "Present Perfect Continuous",
          "weak form of been",
        ),
        lesson(
          "intermediate",
          "Technology In Everyday Life",
          "I've been trying to fix my computer all morning.",
          "gadgets and apps",
          "Present Perfect Continuous + Simple",
          "duration emphasis",
        ),
        lesson(
          "intermediate",
          "Advantages And Disadvantages",
          "The main advantage is convenience.; On the other hand...",
          "pros and cons",
          "comparatives + opinion phrases",
          "balanced contrast intonation",
        ),
      ]),
      group("Section 9 • Culture and Traditions", [
        lesson(
          "intermediate",
          "Relative Clauses",
          "That's the man who helped me.; This is the book which I told you about.",
          "people and things",
          "defining relative clauses",
          "no pause before defining clauses",
        ),
        lesson(
          "intermediate",
          "Relative Clauses Practice",
          "The festival that takes place in June is amazing.",
          "culture and festivals",
          "relative clauses continued",
          "natural linking",
        ),
        lesson(
          "intermediate",
          "Festivals And Traditions",
          "It's a festival which celebrates the new year.",
          "traditions",
          "relative clauses + Past Simple",
          "storytelling intonation",
        ),
      ]),
      group("Section 10 • Health and Lifestyle", [
        lesson(
          "intermediate",
          "Obligations And Advice",
          "You should try to sleep more.; You ought to exercise regularly.",
          "health and lifestyle",
          "must/have to/should/ought to",
          "softening advice intonation",
        ),
        lesson(
          "intermediate",
          "Healthy Habits",
          "I've started going to the gym.; You must look after yourself.",
          "healthy living",
          "Present Perfect + modals",
          "encouraging tone",
        ),
      ]),
      group("Section 11 • News and the Media", [
        lesson(
          "intermediate",
          "Present Simple Passive",
          "English is spoken all over the world.",
          "news vocabulary",
          "Present Simple Passive",
          "weak is/are + past participle",
        ),
        lesson(
          "intermediate",
          "Past Simple Passive",
          "The bridge was built in 1998.; He was arrested yesterday.",
          "past events in the news",
          "Past Simple Passive",
          "was/were + past participle",
        ),
        lesson(
          "intermediate",
          "News And Reports",
          "According to the news...; It is reported that...",
          "media language",
          "Passive voice in news context",
          "formal reporting tone",
        ),
      ]),
    ],
  },
  {
    label: "B2 Upper-Intermediate",
    iconClassName: "text-green-600",
    groups: [
      group("Section 1 • Argumentation and Debate", [
        lesson(
          "upper-intermediate",
          "Contrast Linkers",
          "Although it was raining...; Despite the traffic...",
          "discussion topics",
          "although, even though, despite, whereas",
          "pause after concessive clauses",
        ),
        lesson(
          "upper-intermediate",
          "Addition And Result Linkers",
          "Furthermore...; As a result...",
          "formal discussion language",
          "moreover, furthermore, therefore, as a result",
          "formal linking rhythm",
        ),
        lesson(
          "upper-intermediate",
          "Structuring Arguments",
          "On the one hand...; That said...",
          "current affairs",
          "mixed advanced linkers",
          "clear structure markers",
        ),
        lesson(
          "upper-intermediate",
          "Formal Debates",
          "I would argue that...; If I could just come in here...",
          "debating phrases",
          "discourse management",
          "turn-taking intonation",
        ),
      ]),
      group("Section 2 • Hypotheses and Regrets", [
        lesson(
          "upper-intermediate",
          "Dream Scenarios",
          "If I had more freedom, I would travel more.",
          "hypothetical choices and consequences",
          "Second Conditional",
          "would contractions and hypothetical stress",
        ),
        lesson(
          "upper-intermediate",
          "Regrets",
          "If I had known, I would have told you.",
          "past hypotheticals",
          "Third Conditional",
          "contracted forms: I'd have",
        ),
        lesson(
          "upper-intermediate",
          "Wish And If Only",
          "I wish I hadn't said that.; If only I had more time.",
          "regrets and wishes",
          "wish + Past Perfect/would",
          "regretful tone",
        ),
        lesson(
          "upper-intermediate",
          "Past Regrets And Advice",
          "I regret not applying for the job.; If only I had listened.",
          "personal regrets",
          "wish + Third Conditional",
          "reflective intonation",
        ),
      ]),
      group("Section 3 • Speculation and Deduction", [
        lesson(
          "upper-intermediate",
          "Modals Of Deduction Present",
          "He must be the new manager.; She can't be serious.",
          "speculation",
          "must/might/can't + be",
          "strong stress on the modal",
        ),
        lesson(
          "upper-intermediate",
          "Modals Of Deduction Past",
          "He must have forgotten.; She can't have left already.",
          "past speculation",
          "must/might/can't + have + past participle",
          "weak have",
        ),
        lesson(
          "upper-intermediate",
          "Speculating About Situations",
          "What do you think happened?; He might have missed the train.",
          "mysteries and situations",
          "mixed modals of deduction",
          "speculative rising-falling intonation",
        ),
      ]),
      group("Section 4 • Culture and Trends", [
        lesson(
          "upper-intermediate",
          "Advanced Relative Clauses",
          "The film, which won an Oscar, was directed by...",
          "culture and art",
          "non-defining relative clauses",
          "comma intonation",
        ),
        lesson(
          "upper-intermediate",
          "Participle Clauses",
          "Having seen the film...; The man wearing the blue jacket...",
          "describing people and things",
          "participle clauses",
          "reduced relative clause rhythm",
        ),
        lesson(
          "upper-intermediate",
          "Cultural Trends",
          "Nowadays people are more concerned about...",
          "trends and fashion",
          "relative + participle clauses",
          "generalisation intonation",
        ),
      ]),
      group("Section 5 • Business and Formal Communication", [
        lesson(
          "upper-intermediate",
          "Reported Speech Statements",
          "He said that he was busy.; She told me she would call later.",
          "business",
          "reported speech statements",
          "backshifting awareness",
        ),
        lesson(
          "upper-intermediate",
          "Reported Speech Questions And Requests",
          "He asked me if I was free.; She asked me to send the file.",
          "meetings",
          "reported questions and requests",
          "clear reporting verbs",
        ),
        lesson(
          "upper-intermediate",
          "Formal Meeting Language",
          "I'd like to point out that...; Shall we move on...?",
          "meeting phrases",
          "formal expressions",
          "professional tone",
        ),
        lesson(
          "upper-intermediate",
          "Formal Emails And Presentations",
          "Please find attached...; With reference to your email...",
          "professional communication",
          "formal vs informal register",
          "clear measured pace",
        ),
      ]),
      group("Section 6 • Urban Problems and Solutions", [
        lesson(
          "upper-intermediate",
          "Causative",
          "I had my car repaired.; I need to get my hair cut.",
          "services",
          "have/get something done",
          "causative stress pattern",
        ),
        lesson(
          "upper-intermediate",
          "City Problems",
          "The streets are being cleaned more often.",
          "urban issues",
          "causative + passive",
          "problem emphasis",
        ),
        lesson(
          "upper-intermediate",
          "Solutions To Urban Problems",
          "One possible solution would be to improve public transport.",
          "solution language",
          "suggestion structures",
          "constructive tone",
        ),
      ]),
      group("Section 7 • Globalization", [
        lesson(
          "upper-intermediate",
          "Advanced Comparatives",
          "The more we consume, the more waste we produce.",
          "global issues",
          "the more... the more...",
          "parallel structure rhythm",
        ),
        lesson(
          "upper-intermediate",
          "Advantages And Disadvantages Of Globalisation",
          "Far from solving the problem...; It is often argued that...",
          "globalisation",
          "advanced linking and evaluative language",
          "academic tone",
        ),
        lesson(
          "upper-intermediate",
          "Discussing Globalisation",
          "While it is true that..., nevertheless...",
          "economy and culture",
          "opinion + contrast language",
          "balanced formal intonation",
        ),
      ]),
      group("Section 8 • Crime and Justice", [
        lesson(
          "upper-intermediate",
          "Passive Voice All Tenses",
          "He was arrested last night.; The case is being investigated.",
          "crime and justice",
          "passive all tenses",
          "passive auxiliary stress",
        ),
        lesson(
          "upper-intermediate",
          "Reporting Crimes",
          "It is believed that the suspect left the country.",
          "crime reporting language",
          "passive + reported speech",
          "distancing tone",
        ),
        lesson(
          "upper-intermediate",
          "Discussing Justice",
          "In my view the punishment should be stricter.",
          "law and order",
          "formal opinion language",
          "measured serious tone",
        ),
      ]),
      group("Section 9 • Science and the Future", [
        lesson(
          "upper-intermediate",
          "Future Perfect",
          "By 2030 people will have changed the way they work.",
          "predictions",
          "Future Perfect",
          "will have + past participle",
        ),
        lesson(
          "upper-intermediate",
          "Future Continuous",
          "This time next year I'll be working in another country.",
          "future activities",
          "Future Continuous",
          "will be + -ing",
        ),
        lesson(
          "upper-intermediate",
          "Speculating About The Future",
          "It is likely that we will see major changes.; We might see...",
          "technology and society",
          "future forms + modals of possibility",
          "speculative intonation",
        ),
      ]),
      group("Section 10 • Emphasis and Persuasion", [
        lesson(
          "upper-intermediate",
          "Inversion For Emphasis",
          "Never have I seen such a thing.; Not only did he arrive late...",
          "emphasis",
          "negative inversion",
          "strong stress after inversion",
        ),
        lesson(
          "upper-intermediate",
          "Cleft Sentences",
          "What I need is a holiday.; It was John who told me.",
          "focus structures",
          "what-cleft and it-cleft",
          "focus stress on new information",
        ),
        lesson(
          "upper-intermediate",
          "Persuasive Speech",
          "What is particularly important is that we act now.",
          "persuasion",
          "inversion + cleft sentences",
          "rhetorical emphasis",
        ),
      ]),
      group("Section 11 • Media and Influence", [
        lesson(
          "upper-intermediate",
          "Media Language",
          "Interestingly...; Surprisingly...; According to recent reports...",
          "media vocabulary",
          "discourse markers",
          "comment clause intonation",
        ),
        lesson(
          "upper-intermediate",
          "Analysing News And Advertising",
          "The advertiser is clearly trying to...; The article appears to suggest...",
          "advertising and media analysis",
          "critical language analysis",
          "analytical detached tone",
        ),
      ]),
    ],
  },
];

export const allCourseSyllabusLessons = courseSyllabusSections.flatMap(
  (level) => level.groups.flatMap((group) => group.lessons),
);

export const getCourseSyllabusLessonCard = (href: string) =>
  allCourseSyllabusLessons.find(
    (lesson) =>
      lesson.href === href ||
      lesson.materialHref === href ||
      lesson.assignmentHref === href ||
      lesson.legacyHref === href,
  );

export const getCourseSyllabusLessonIndex = (href: string) => {
  const index = allCourseSyllabusLessons.findIndex(
    (lesson) =>
      lesson.href === href ||
      lesson.materialHref === href ||
      lesson.assignmentHref === href ||
      lesson.legacyHref === href,
  );

  return index >= 0 ? index : undefined;
};
