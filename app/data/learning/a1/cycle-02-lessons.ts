import type { LearningExercise, LearningLesson } from "@/data/learning/types";

const mc = (
  id: string,
  prompt: string,
  choices: string[],
  correctAnswer: string,
  explanation: string,
  instruction = "Choose the correct answer",
): LearningExercise => ({
  id,
  type: "multiple-choice",
  instruction,
  prompt,
  choices,
  correctAnswer,
  explanation,
});

const order = (
  id: string,
  words: string[],
  correctAnswer: string,
  explanation: string,
): LearningExercise => ({
  id,
  type: "word-order",
  instruction: "Put the words in order",
  words,
  correctAnswer,
  explanation,
});

type LessonInput = Omit<LearningLesson, "estimatedMinutes" | "xpReward">;
const lesson = (input: LessonInput): LearningLesson => ({
  ...input,
  estimatedMinutes: 8,
  xpReward: 20,
});

export const gettingAroundLesson = lesson({
  id: "a1-u07-l01", slug: "getting-around", level: "a1", unitId: "unit-7", order: 1,
  title: "Getting Around", description: "Talk about family members and transportation.",
  objective: "By the end of this lesson, students will be able to discuss transportation and family using simple present statements.",
  vocabulary: ["bus", "car", "train", "bike", "mother", "father", "sister", "brother"],
  exercises: [
    mc("a1-u07-l01-e01", "My father ___ to work by bus.", ["go", "goes", "going"], "goes", "Use goes with he, she, or one person."),
    mc("a1-u07-l01-e02", "My sisters ___ the train to school.", ["takes", "take", "taking"], "take", "Use take with plural subjects."),
    order("a1-u07-l01-e03", ["bike", "rides", "brother", "My", "a"], "My brother rides a bike", "Great! This is a simple present statement."),
    mc("a1-u07-l01-e04", "We ___ by car on weekends.", ["travel", "travels", "are travel"], "travel", "Use the base verb with we."),
    mc("a1-u07-l01-e05", "Choose the correct description.", ["Ana's mother drives to work.", "Ana's mother drive to work.", "Ana mother driving work."], "Ana's mother drives to work.", "Excellent! Drives agrees with one person."),
  ],
});

export const everyDayLesson = lesson({
  id: "a1-u07-l02", slug: "every-day", level: "a1", unitId: "unit-7", order: 2,
  title: "Every Day", description: "Ask about daily and weekly routines.",
  objective: "By the end of this lesson, students will be able to discuss daily and weekly routines using simple present questions.",
  vocabulary: ["wake up", "start work", "have lunch", "study", "exercise", "weekdays", "weekends"],
  exercises: [
    mc("a1-u07-l02-e01", "___ you work on Mondays?", ["Do", "Does", "Are"], "Do", "Use do with you."),
    mc("a1-u07-l02-e02", "What time ___ she wake up?", ["do", "does", "is"], "does", "Use does with she."),
    order("a1-u07-l02-e03", ["weekends", "you", "study", "Do", "on"], "Do you study on weekends", "Good! Do starts this yes/no question."),
    mc("a1-u07-l02-e04", "Does Leo exercise every day?", ["Yes, he does.", "Yes, he do.", "Yes, he is."], "Yes, he does.", "Use does in the short answer."),
    mc("a1-u07-l02-e05", "Choose the correct question.", ["When do you have lunch?", "When you have lunch?", "When does you lunch?"], "When do you have lunch?", "Excellent! Wh-word + do + subject + verb."),
  ],
});

export const homeTourLesson = lesson({
  id: "a1-u08-l01", slug: "home-tour", level: "a1", unitId: "unit-8", order: 1,
  title: "Home Tour", description: "Ask and answer questions about homes.",
  objective: "By the end of this lesson, students will be able to describe houses and apartments using simple present questions and short answers.",
  vocabulary: ["house", "apartment", "bedroom", "bathroom", "kitchen", "balcony", "garage"],
  exercises: [
    mc("a1-u08-l01-e01", "___ you live in an apartment?", ["Do", "Does", "Is"], "Do", "Use do with you."),
    mc("a1-u08-l01-e02", "Does the apartment have a balcony?", ["Yes, it does.", "Yes, it do.", "Yes, it is."], "Yes, it does.", "Use it does for a singular home."),
    order("a1-u08-l01-e03", ["bedrooms", "house", "many", "have", "does", "How", "the"], "How many bedrooms does the house have", "This asks about the number of bedrooms."),
    mc("a1-u08-l01-e04", "Where do you cook?", ["In the kitchen.", "In the bedroom.", "In the garage car."], "In the kitchen.", "People normally cook in the kitchen."),
    mc("a1-u08-l01-e05", "Choose the correct exchange.", ["Does it have a garage? No, it doesn't.", "Do it has a garage? No, it don't.", "Is it have garage? No, it isn't."], "Does it have a garage? No, it doesn't.", "Excellent! Question and short answer agree."),
  ],
});

export const dreamHomeLesson = lesson({
  id: "a1-u08-l02", slug: "dream-home", level: "a1", unitId: "unit-8", order: 2,
  title: "Dream Home", description: "Describe rooms, furniture, and appliances.",
  objective: "By the end of this lesson, students will be able to discuss furniture, appliances, and dream homes using statements with there is / there are.",
  vocabulary: ["sofa", "table", "bed", "refrigerator", "stove", "washing machine", "garden"],
  exercises: [
    mc("a1-u08-l02-e01", "___ a sofa in the living room.", ["There is", "There are", "It are"], "There is", "Use there is for one item."),
    mc("a1-u08-l02-e02", "___ two bedrooms upstairs.", ["There is", "There are", "They is"], "There are", "Use there are for plural items."),
    order("a1-u08-l02-e03", ["kitchen", "refrigerator", "a", "There", "the", "in", "is"], "There is a refrigerator in the kitchen", "Great! One appliance uses there is."),
    mc("a1-u08-l02-e04", "Choose the plural description.", ["There are three chairs.", "There is three chairs.", "There three chairs are."], "There are three chairs.", "Three chairs is plural."),
    mc("a1-u08-l02-e05", "Choose the correct dream-home description.", ["There is a garden, and there are four bedrooms.", "There are a garden and there is four bedrooms.", "It have garden and bedrooms."], "There is a garden, and there are four bedrooms.", "Excellent! Singular and plural forms are correct."),
  ],
});

export const atWorkLesson = lesson({
  id: "a1-u09-l01", slug: "at-work", level: "a1", unitId: "unit-9", order: 1,
  title: "At Work", description: "Ask about jobs and workplaces.",
  objective: "By the end of this lesson, students will be able to discuss jobs and workplaces using simple present Wh- questions.",
  vocabulary: ["teacher", "doctor", "chef", "driver", "office", "hospital", "school", "restaurant"],
  exercises: [
    mc("a1-u09-l01-e01", "What ___ you do?", ["do", "does", "are"], "do", "What do you do? asks about a job."),
    mc("a1-u09-l01-e02", "Where ___ she work?", ["do", "does", "is"], "does", "Use does with she."),
    order("a1-u09-l01-e03", ["work", "chef", "does", "Where", "the"], "Where does the chef work", "This asks about the chef's workplace."),
    mc("a1-u09-l01-e04", "Where does a doctor work?", ["At a hospital.", "At a menu.", "At a bus."], "At a hospital.", "A doctor commonly works at a hospital."),
    mc("a1-u09-l01-e05", "Choose the correct exchange.", ["What does Ana do? She's a teacher.", "What Ana does? She's teacher.", "What do Ana do? She teacher."], "What does Ana do? She's a teacher.", "Excellent! This asks and answers about a job."),
  ],
});

export const jobTalkLesson = lesson({
  id: "a1-u09-l02", slug: "job-talk", level: "a1", unitId: "unit-9", order: 2,
  title: "Job Talk", description: "Give simple opinions about different jobs.",
  objective: "By the end of this lesson, students will be able to give opinions about jobs using be + adjective and adjective + noun.",
  vocabulary: ["interesting", "difficult", "stressful", "creative", "important", "dangerous", "job"],
  exercises: [
    mc("a1-u09-l02-e01", "Teaching ___ interesting.", ["is", "are", "am"], "is", "Use be + adjective: is interesting."),
    mc("a1-u09-l02-e02", "It is a ___ job.", ["creative", "creatively", "create"], "creative", "An adjective comes before a noun."),
    order("a1-u09-l02-e03", ["job", "is", "a", "difficult", "It"], "It is a difficult job", "Great! Adjective comes before job."),
    mc("a1-u09-l02-e04", "Doctors' jobs are ___.", ["important", "importance", "importantly"], "important", "Use the adjective important after are."),
    mc("a1-u09-l02-e05", "Choose the correct opinion.", ["Being a pilot is exciting, but it is a stressful job.", "Being pilot exciting, but stressful is job.", "A pilot is excitement job."], "Being a pilot is exciting, but it is a stressful job.", "Excellent! Both adjective patterns are correct."),
  ],
});

export const whatsInTheKitchenLesson = lesson({
  id: "a1-u10-l01", slug: "whats-in-the-kitchen", level: "a1", unitId: "unit-10", order: 1,
  title: "What's in the Kitchen?", description: "Talk about foods you like, need, and have.",
  objective: "By the end of this lesson, students will be able to discuss foods they like, need, and have using some/any and count/noncount nouns.",
  vocabulary: ["apple", "egg", "bread", "rice", "milk", "cheese", "water", "vegetables"],
  exercises: [
    mc("a1-u10-l01-e01", "We have ___ apples.", ["some", "any", "a"], "some", "Use some in affirmative plural statements."),
    mc("a1-u10-l01-e02", "Do we have ___ milk?", ["some", "any", "an"], "any", "Use any in questions."),
    order("a1-u10-l01-e03", ["need", "We", "rice", "some"], "We need some rice", "Rice is a noncount noun."),
    mc("a1-u10-l01-e04", "Choose the count noun.", ["an egg", "a rice", "a milk"], "an egg", "Egg is countable; rice and milk are noncount."),
    mc("a1-u10-l01-e05", "Choose the correct exchange.", ["Do you have any cheese? Yes, I have some.", "Do you have some cheese? Yes, I have any.", "Have you a cheese? Yes, some cheese are."], "Do you have any cheese? Yes, I have some.", "Excellent! Any asks; some answers affirmatively."),
  ],
});

export const eatingHabitsLesson = lesson({
  id: "a1-u10-l02", slug: "eating-habits", level: "a1", unitId: "unit-10", order: 2,
  title: "Eating Habits", description: "Describe how often you eat different foods.",
  objective: "By the end of this lesson, students will be able to describe eating habits using adverbs of frequency.",
  vocabulary: ["always", "usually", "often", "sometimes", "rarely", "never", "breakfast", "snack"],
  exercises: [
    mc("a1-u10-l02-e01", "I ___ eat breakfast. I eat it every day.", ["always", "never", "rarely"], "always", "Always means every time."),
    mc("a1-u10-l02-e02", "She ___ drinks soda. She doesn't like it.", ["usually", "never", "often"], "never", "Never means zero times."),
    order("a1-u10-l02-e03", ["lunch", "usually", "at", "home", "We", "eat"], "We usually eat lunch at home", "Frequency adverbs usually come before the main verb."),
    mc("a1-u10-l02-e04", "Which is less frequent?", ["rarely", "always", "usually"], "rarely", "Rarely means not often."),
    mc("a1-u10-l02-e05", "Choose the correct description.", ["I often cook, but I sometimes order food.", "I cook often always, but order sometimes food.", "Often I am cook and sometimes order."], "I often cook, but I sometimes order food.", "Excellent! The adverbs are in natural positions."),
  ],
});

export const gameDayLesson = lesson({
  id: "a1-u11-l01", slug: "game-day", level: "a1", unitId: "unit-11", order: 1,
  title: "Game Day", description: "Ask about sports people watch and play.",
  objective: "By the end of this lesson, students will be able to discuss sports they watch and play using simple present Wh- questions.",
  vocabulary: ["soccer", "tennis", "basketball", "volleyball", "watch", "play", "team", "player"],
  exercises: [
    mc("a1-u11-l01-e01", "What sport ___ you play?", ["do", "does", "are"], "do", "Use do with you."),
    mc("a1-u11-l01-e02", "Who ___ Leo watch soccer with?", ["do", "does", "is"], "does", "Use does with Leo."),
    order("a1-u11-l01-e03", ["basketball", "Where", "play", "they", "do"], "Where do they play basketball", "Wh-word comes before do and the subject."),
    mc("a1-u11-l01-e04", "When does the game start?", ["At eight o'clock.", "At the stadium is.", "With my friends does."], "At eight o'clock.", "When asks about time."),
    mc("a1-u11-l01-e05", "Choose the correct exchange.", ["What sports do you watch? I watch soccer and tennis.", "What sports you watch? I watches soccer.", "Which you do sport? I am watch tennis."], "What sports do you watch? I watch soccer and tennis.", "Excellent! The question and answer use simple present."),
  ],
});

export const showYourTalentLesson = lesson({
  id: "a1-u11-l02", slug: "show-your-talent", level: "a1", unitId: "unit-11", order: 2,
  title: "Show Your Talent", description: "Talk about skills, abilities, and talents.",
  objective: "By the end of this lesson, students will be able to discuss skills, abilities, and talents using can and can’t.",
  vocabulary: ["swim", "dance", "sing", "cook", "draw", "drive", "play an instrument", "speak"],
  exercises: [
    mc("a1-u11-l02-e01", "I ___ swim very well.", ["can", "am can", "cans"], "can", "Can is followed by the base verb."),
    mc("a1-u11-l02-e02", "She ___ drive. She doesn't have a license.", ["can", "can't", "isn't can"], "can't", "Can't expresses no ability."),
    order("a1-u11-l02-e03", ["guitar", "play", "Can", "the", "you"], "Can you play the guitar", "Can begins an ability question."),
    mc("a1-u11-l02-e04", "Can Leo cook?", ["Yes, he can.", "Yes, he cans.", "Yes, he does can."], "Yes, he can.", "Use can in the short answer."),
    mc("a1-u11-l02-e05", "Choose the correct talent description.", ["Mia can sing, but she can't dance.", "Mia cans sing, but can't dances.", "Mia is can sing and no dance."], "Mia can sing, but she can't dance.", "Excellent! Can and can't use the base verb."),
  ],
});

export const weekendPlansLesson = lesson({
  id: "a1-u12-l01", slug: "weekend-plans", level: "a1", unitId: "unit-12", order: 1,
  title: "Weekend Plans", description: "Talk about evening, weekend, and birthday plans.",
  objective: "By the end of this lesson, students will be able to discuss evening, weekend, and birthday plans using statements and yes/no questions with be going to.",
  vocabulary: ["tonight", "tomorrow", "weekend", "birthday", "visit", "watch", "have a party", "celebrate"],
  exercises: [
    mc("a1-u12-l01-e01", "I ___ going to watch a movie tonight.", ["am", "is", "are"], "am", "Use I am going to."),
    mc("a1-u12-l01-e02", "___ she going to have a party?", ["Is", "Are", "Does"], "Is", "Move be before the subject for a yes/no question."),
    order("a1-u12-l01-e03", ["visit", "They", "friends", "going", "are", "to"], "They are going to visit friends", "Be going to is followed by a base verb."),
    mc("a1-u12-l01-e04", "Are you going to go out tonight?", ["Yes, I am.", "Yes, I do.", "Yes, I'm go."], "Yes, I am.", "Short answers use be."),
    mc("a1-u12-l01-e05", "Choose the correct plan.", ["Ben is going to celebrate his birthday on Saturday.", "Ben going celebrate birthday Saturday.", "Ben does going to celebrates."], "Ben is going to celebrate his birthday on Saturday.", "Excellent! This is a complete future plan."),
  ],
});

export const letsCelebrateLesson = lesson({
  id: "a1-u12-l02", slug: "lets-celebrate", level: "a1", unitId: "unit-12", order: 2,
  title: "Let's Celebrate!", description: "Ask about holiday and festival plans.",
  objective: "By the end of this lesson, students will be able to discuss plans to celebrate holidays, special occasions, and festivals using Wh- questions with be going to.",
  vocabulary: ["holiday", "festival", "wedding", "graduation", "celebration", "decorate", "invite", "prepare"],
  exercises: [
    mc("a1-u12-l02-e01", "What ___ you going to do?", ["are", "is", "do"], "are", "Use are with you in be going to."),
    mc("a1-u12-l02-e02", "Where is she going to celebrate?", ["At her parents' house.", "On Friday is.", "Because a birthday."], "At her parents' house.", "Where asks about place."),
    order("a1-u12-l02-e03", ["invite", "Who", "to", "they", "are", "going"], "Who are they going to invite", "Who asks about a person."),
    mc("a1-u12-l02-e04", "When are you going to decorate?", ["Tomorrow morning.", "My friends.", "At my house is decorate."], "Tomorrow morning.", "When asks about time."),
    mc("a1-u12-l02-e05", "Choose the correct exchange.", ["How are you going to celebrate? We're going to have a family dinner.", "How you going celebrate? We have going dinner.", "How do going to celebrate? We are have dinner."], "How are you going to celebrate? We're going to have a family dinner.", "Excellent! This asks about the plan's manner."),
  ],
});

export const feelingSickLesson = lesson({
  id: "a1-u13-l01", slug: "feeling-sick", level: "a1", unitId: "unit-13", order: 1,
  title: "Feeling Sick", description: "Talk about the body and common ailments.",
  objective: "By the end of this lesson, students will be able to discuss the body and common ailments using have + noun and feel + adjective.",
  vocabulary: ["head", "stomach", "back", "throat", "headache", "cold", "sick", "tired"],
  exercises: [
    mc("a1-u13-l01-e01", "I have a ___. My head hurts.", ["headache", "tired", "sick"], "headache", "Have + noun: have a headache."),
    mc("a1-u13-l01-e02", "She feels ___. She needs to rest.", ["tired", "a tired", "headache"], "tired", "Feel is followed by an adjective."),
    order("a1-u13-l01-e03", ["sore", "have", "I", "throat", "a"], "I have a sore throat", "Use have with the noun phrase a sore throat."),
    mc("a1-u13-l01-e04", "Choose the correct pattern.", ["He feels sick.", "He has sick.", "He feels a cold."], "He feels sick.", "Sick is an adjective, so use feel."),
    mc("a1-u13-l01-e05", "Choose the correct exchange.", ["What's wrong? I have a cold, and I feel terrible.", "What wrong? I feel a cold and have terrible.", "What's wrong? I am have cold."], "What's wrong? I have a cold, and I feel terrible.", "Excellent! Have + noun and feel + adjective."),
  ],
});

export const feelBetterLesson = lesson({
  id: "a1-u13-l02", slug: "feel-better", level: "a1", unitId: "unit-13", order: 2,
  title: "Feel Better", description: "Talk about remedies and give health advice.",
  objective: "By the end of this lesson, students will be able to discuss common remedies and give health advice using imperatives.",
  vocabulary: ["rest", "drink water", "take medicine", "see a doctor", "stay home", "sleep", "call", "don't"],
  exercises: [
    mc("a1-u13-l02-e01", "You have a headache. ___ some water.", ["Drink", "Drinks", "Drinking"], "Drink", "Imperatives use the base verb."),
    mc("a1-u13-l02-e02", "You feel very sick. ___ a doctor.", ["See", "Sees", "To see"], "See", "Start advice with the base verb."),
    order("a1-u13-l02-e03", ["medicine", "this", "Take", "food", "with"], "Take this medicine with food", "This imperative gives a clear instruction."),
    mc("a1-u13-l02-e04", "Choose the negative advice.", ["Don't go to work.", "Not go to work.", "Doesn't go work."], "Don't go to work.", "Use don't + base verb for a negative imperative."),
    mc("a1-u13-l02-e05", "Choose the best advice.", ["Rest, drink water, and call a doctor if you feel worse.", "You rests and drinking waters.", "To rest, you don't drinks."], "Rest, drink water, and call a doctor if you feel worse.", "Excellent! These imperatives give practical advice."),
  ],
});

export const shoppingAroundLesson = lesson({
  id: "a1-u14-l01", slug: "shopping-around", level: "a1", unitId: "unit-14", order: 1,
  title: "Shopping Around", description: "Talk about stores, products, and locations.",
  objective: "By the end of this lesson, students will be able to discuss stores, items to buy in stores, and store locations using prepositions of place.",
  vocabulary: ["bakery", "pharmacy", "supermarket", "bookstore", "bank", "next to", "across from", "between"],
  exercises: [
    mc("a1-u14-l01-e01", "You can buy medicine at the ___.", ["pharmacy", "bakery", "bookstore"], "pharmacy", "A pharmacy sells medicine."),
    mc("a1-u14-l01-e02", "The bank is ___ the pharmacy and the bakery.", ["between", "on", "inside"], "between", "Between means in the middle of two places."),
    order("a1-u14-l01-e03", ["supermarket", "The", "bank", "next", "is", "the", "to"], "The bank is next to the supermarket", "Next to means beside."),
    mc("a1-u14-l01-e04", "The bookstore is on the other side of the street from the café.", ["It is across from the café.", "It is in the café.", "It is between the café."], "It is across from the café.", "Across from means on the opposite side."),
    mc("a1-u14-l01-e05", "Choose the correct exchange.", ["Where's the bakery? It's next to the supermarket.", "Where bakery? It next supermarket.", "Where is bakery? They are next to."], "Where's the bakery? It's next to the supermarket.", "Excellent! This gives a store location."),
  ],
});

export const whichWayLesson = lesson({
  id: "a1-u14-l02", slug: "which-way", level: "a1", unitId: "unit-14", order: 2,
  title: "Which Way?", description: "Ask for and give simple directions.",
  objective: "By the end of this lesson, students will be able to ask for and give directions to various locations.",
  vocabulary: ["go straight", "turn left", "turn right", "corner", "block", "traffic light", "near", "far"],
  exercises: [
    mc("a1-u14-l02-e01", "You want directions to the bank.", ["How do I get to the bank?", "How I get bank?", "Where get I bank?"], "How do I get to the bank?", "This is a natural way to ask for directions."),
    mc("a1-u14-l02-e02", "Continue forward on this street.", ["Go straight.", "Turn left.", "Go back right."], "Go straight.", "Go straight means continue forward."),
    order("a1-u14-l02-e03", ["corner", "Turn", "at", "right", "the"], "Turn right at the corner", "This imperative gives a direction."),
    mc("a1-u14-l02-e04", "The pharmacy is two ___ from here.", ["blocks", "corners left", "straights"], "blocks", "Blocks express distance in a city."),
    mc("a1-u14-l02-e05", "Choose the correct directions.", ["Go straight, turn left at the light, and the café is on your right.", "Go straight and turning left; café your right is.", "You goes straight, turns light, café right."], "Go straight, turn left at the light, and the café is on your right.", "Excellent! The directions are clear and ordered."),
  ],
});

export const lastWeekendLesson = lesson({
  id: "a1-u15-l01", slug: "last-weekend", level: "a1", unitId: "unit-15", order: 1,
  title: "Last Weekend", description: "Talk about completed weekend activities.",
  objective: "By the end of this lesson, students will be able to discuss weekend activities using simple past statements with regular and irregular verbs.",
  vocabulary: ["visited", "watched", "played", "stayed", "went", "had", "saw", "ate"],
  exercises: [
    mc("a1-u15-l01-e01", "I ___ my grandparents on Saturday.", ["visited", "visit", "visiting"], "visited", "Visited is the regular past of visit."),
    mc("a1-u15-l01-e02", "We ___ to the park yesterday.", ["went", "goed", "go"], "went", "Went is the irregular past of go."),
    order("a1-u15-l01-e03", ["movie", "watched", "night", "a", "They", "last"], "They watched a movie last night", "Watched is a regular past verb."),
    mc("a1-u15-l01-e04", "She ___ pizza with her friends.", ["ate", "eated", "eats"], "ate", "Ate is the irregular past of eat."),
    mc("a1-u15-l01-e05", "Choose the correct weekend story.", ["I stayed home, watched a series, and had pizza.", "I stay home, watch series, and haved pizza.", "I was stay home and have watched pizza."], "I stayed home, watched a series, and had pizza.", "Excellent! All three verbs are in the simple past."),
  ],
});

export const vacationStoriesLesson = lesson({
  id: "a1-u15-l02", slug: "vacation-stories", level: "a1", unitId: "unit-15", order: 2,
  title: "Vacation Stories", description: "Ask and answer about past vacations.",
  objective: "By the end of this lesson, students will be able to discuss vacation activities using simple past yes/no questions and short answers.",
  vocabulary: ["travel", "stay", "visit", "swim", "take photos", "buy souvenirs", "last vacation"],
  exercises: [
    mc("a1-u15-l02-e01", "___ you travel last summer?", ["Did", "Do", "Were"], "Did", "Use did for a simple past question."),
    mc("a1-u15-l02-e02", "Did she visit the museum?", ["Yes, she did.", "Yes, she visited.", "Yes, she does."], "Yes, she did.", "Use did in the short answer."),
    order("a1-u15-l02-e03", ["hotel", "Did", "at", "stay", "they", "a"], "Did they stay at a hotel", "After did, use the base verb stay."),
    mc("a1-u15-l02-e04", "Did Ben buy souvenirs?", ["No, he didn't.", "No, he don't.", "No, he didn't bought."], "No, he didn't.", "Use didn't in the negative short answer."),
    mc("a1-u15-l02-e05", "Choose the correct exchange.", ["Did you swim in the ocean? Yes, I did.", "Did you swam in ocean? Yes, I swam did.", "Were you swim? Yes, I was."], "Did you swim in the ocean? Yes, I did.", "Excellent! Did is followed by the base verb."),
  ],
});

export const familyHistoryLesson = lesson({
  id: "a1-u16-l01", slug: "family-history", level: "a1", unitId: "unit-16", order: 1,
  title: "Family History", description: "Talk about family and personal history.",
  objective: "By the end of this lesson, students will be able to discuss family and personal history using the past of be.",
  vocabulary: ["born", "child", "young", "family", "hometown", "was", "were", "ago"],
  exercises: [
    mc("a1-u16-l01-e01", "I ___ born in Recife.", ["was", "were", "am"], "was", "Use was with I in the past."),
    mc("a1-u16-l01-e02", "My parents ___ young in this photo.", ["was", "were", "are"], "were", "Use were with plural subjects."),
    order("a1-u16-l01-e03", ["child", "shy", "a", "was", "I"], "I was a shy child", "Was describes a past state."),
    mc("a1-u16-l01-e04", "Where was your mother born?", ["She was born in Salvador.", "She were born Salvador.", "She is born in Salvador."], "She was born in Salvador.", "Use was born for one person."),
    mc("a1-u16-l01-e05", "Choose the correct family history.", ["My grandparents were farmers, and their home was in the country.", "My grandparents was farmers, and home were country.", "My grandparents are farmers ago."], "My grandparents were farmers, and their home was in the country.", "Excellent! Were is plural; was is singular."),
  ],
});

export const schoolDaysLesson = lesson({
  id: "a1-u16-l02", slug: "school-days", level: "a1", unitId: "unit-16", order: 2,
  title: "School Days", description: "Ask about school experiences and memories.",
  objective: "By the end of this lesson, students will be able to discuss school experiences and memories using Wh- questions with did, was, and were.",
  vocabulary: ["school", "teacher", "classmate", "subject", "favorite", "memory", "learn", "study"],
  exercises: [
    mc("a1-u16-l02-e01", "Where ___ your school?", ["was", "were", "did"], "was", "Use was with singular school."),
    mc("a1-u16-l02-e02", "Who ___ your favorite teachers?", ["was", "were", "did"], "were", "Use were with plural teachers."),
    order("a1-u16-l02-e03", ["study", "school", "What", "at", "did", "you"], "What did you study at school", "After did, use the base verb study."),
    mc("a1-u16-l02-e04", "When did you start school?", ["In 2005.", "My teacher was.", "At math."], "In 2005.", "When asks about time."),
    mc("a1-u16-l02-e05", "Choose the correct memory exchange.", ["What was your favorite subject? It was science.", "What were your favorite subject? It were science.", "What did your subject was? Science did."], "What was your favorite subject? It was science.", "Excellent! Was asks about one past subject."),
  ],
});

export const leaveAMessageLesson = lesson({
  id: "a1-u17-l01", slug: "leave-a-message", level: "a1", unitId: "unit-17", order: 1,
  title: "Leave a Message", description: "Make phone calls and leave simple messages.",
  objective: "By the end of this lesson, students will be able to make phone calls and leave messages using subject and object pronouns.",
  vocabulary: ["call", "answer", "message", "phone", "him", "her", "us", "them"],
  exercises: [
    mc("a1-u17-l01-e01", "Ana is busy. Please call ___ later.", ["her", "she", "hers"], "her", "Use the object pronoun her after call."),
    mc("a1-u17-l01-e02", "Leo isn't here. Can I leave ___ a message?", ["him", "he", "his"], "him", "Use him as the object of leave."),
    order("a1-u17-l01-e03", ["back", "ask", "call", "Please", "to", "her", "me"], "Please ask her to call me back", "Her and me are object pronouns."),
    mc("a1-u17-l01-e04", "Mia and Ben called. Please contact ___.", ["them", "they", "their"], "them", "Use them for two or more people as an object."),
    mc("a1-u17-l01-e05", "Choose the correct phone message.", ["He's not available. Can I ask him to call you?", "Him not available. Can I ask he call your?", "He not is here. Can ask his call you?"], "He's not available. Can I ask him to call you?", "Excellent! He is the subject; him is the object."),
  ],
});

export const youreInvitedLesson = lesson({
  id: "a1-u17-l02", slug: "youre-invited", level: "a1", unitId: "unit-17", order: 2,
  title: "You're Invited!", description: "Make, accept, and decline invitations.",
  objective: "By the end of Cycle 2, students will be able to make, accept, and decline invitations using Do you want to...?, Would you like to...?, and verb + to.",
  vocabulary: ["invite", "join", "come", "go out", "I'd love to", "sounds great", "sorry", "maybe next time"],
  exercises: [
    mc("a1-u17-l02-e01", "___ you want to go to a movie?", ["Do", "Are", "Would"], "Do", "Use Do you want to + base verb."),
    mc("a1-u17-l02-e02", "Would you like ___ dinner with us?", ["to have", "have to", "having"], "to have", "Would you like is followed by to + verb."),
    order("a1-u17-l02-e03", ["join", "like", "us", "Would", "to", "you"], "Would you like to join us", "This is a polite invitation."),
    mc("a1-u17-l02-e04", "Would you like to come to my party?", ["I'd love to!", "I love come!", "I would like come no."], "I'd love to!", "I'd love to is a warm acceptance."),
    mc("a1-u17-l02-e05", "Choose the polite decline.", ["Sorry, I can't. Maybe next time.", "No. I don't want.", "Sorry, I not can to go."], "Sorry, I can't. Maybe next time.", "Excellent! This declines politely and naturally."),
  ],
});
