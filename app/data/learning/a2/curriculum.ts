import type { LearningLesson } from "@/data/learning/types";

type Drill = [prompt: string, choices: string[], answer: string];

const makeLesson = (
  unit: number,
  order: number,
  slug: string,
  title: string,
  description: string,
  objective: string,
  vocabulary: string[],
  drills: Drill[],
): LearningLesson => ({
  id: `a2-u${String(unit).padStart(2, "0")}-l${String(order).padStart(2, "0")}`,
  slug,
  level: "a2",
  unitId: `unit-${unit}`,
  order,
  title,
  description,
  objective,
  estimatedMinutes: 8,
  xpReward: 25,
  vocabulary,
  exercises: drills.map(([prompt, choices, correctAnswer], index) => ({
    id: `a2-u${String(unit).padStart(2, "0")}-l${String(order).padStart(2, "0")}-e${String(index + 1).padStart(2, "0")}`,
    type: "multiple-choice",
    instruction: index === drills.length - 1 ? "Final challenge" : "Choose the correct answer",
    prompt,
    choices,
    correctAnswer,
    explanation: `Correct: ${correctAnswer}`,
  })),
});

const l01 = makeLesson(1, 1, "meet-and-connect", "Meet and Connect", "Introduce yourself and learn about other people.", "By the end of this lesson, students will be able to introduce themselves and others using be and possessive adjectives, and ask and answer Wh-questions to find out information about others and to state information about themselves.", ["introduce", "name", "from", "my", "his", "her"], [
  ["Hi, ___ name is Carla.", ["my", "mine", "I"], "my"],
  ["Where ___ your new colleague from?", ["is", "are", "do"], "is"],
  ["This is Leo. ___ job is interesting.", ["His", "He", "Him"], "His"],
  ["Choose the correct introduction.", ["I'm Ana, and this is my friend Ben.", "I Ana, and this her friend Ben.", "My am Ana and he Ben."], "I'm Ana, and this is my friend Ben."],
]);

const l02 = makeLesson(1, 2, "getting-to-know-you", "Getting to Know You", "Ask for and confirm personal information.", "By the end of this lesson, students will be able to ask and answer yes/no questions to find out information about others and to state information about themselves.", ["married", "student", "from", "live", "speak", "work"], [
  ["___ you from Argentina?", ["Are", "Is", "Do"], "Are"],
  ["Is Mia a student?", ["Yes, she is.", "Yes, she does.", "Yes, she are."], "Yes, she is."],
  ["Are Ben and Leo married?", ["No, they aren't.", "No, he isn't.", "No, they don't."], "No, they aren't."],
  ["Choose the correct exchange.", ["Are you a designer? Yes, I am.", "Is you a designer? Yes, I is.", "Do you a designer? Yes, I do."], "Are you a designer? Yes, I am."],
]);

const l03 = makeLesson(2, 1, "what-do-you-do", "What Do You Do?", "Ask about occupations and responsibilities.", "By the end of this lesson, students will be able to ask and answer questions about occupations using the simple present.", ["occupation", "company", "manage", "design", "teach", "work"], [
  ["What ___ your sister do?", ["does", "do", "is"], "does"],
  ["Where do you work?", ["I work at a bank.", "I am work at bank.", "I works at a bank."], "I work at a bank."],
  ["What does a designer do?", ["A designer creates visual ideas.", "A designer create visual ideas.", "A designer is create ideas."], "A designer creates visual ideas."],
  ["Choose the correct exchange.", ["What do they do? They're engineers.", "What does they do? They engineers.", "What are they do? Engineers do."], "What do they do? They're engineers."],
]);

const l04 = makeLesson(2, 2, "busy-days", "Busy Days", "Describe routines and daily schedules.", "By the end of this lesson, students will be able to describe routines and daily schedules using time expressions.", ["before", "after", "until", "from", "at", "on weekdays"], [
  ["I start work ___ 8:30.", ["at", "on", "in"], "at"],
  ["She exercises ___ work.", ["before", "until 9:00", "at Monday"], "before"],
  ["We work from nine ___ five.", ["to", "at", "on"], "to"],
  ["Choose the natural schedule.", ["On weekdays, I study after dinner.", "At weekdays, I study in dinner.", "Weekdays I after study dinner."], "On weekdays, I study after dinner."],
]);

const l05 = makeLesson(3, 1, "how-much-is-that", "How Much Is That?", "Ask about products and prices.", "By the end of this lesson, students will be able to use demonstratives, one, and ones to ask about and describe prices.", ["this", "that", "these", "those", "one", "ones"], [
  ["How much is ___ blue jacket here?", ["this", "those", "these"], "this"],
  ["I like the black shoes. How much are those ___?", ["ones", "one", "it"], "ones"],
  ["Which bag do you want?", ["The red one.", "The red ones bag.", "That red it."], "The red one."],
  ["Choose the correct exchange.", ["How much are these? The small ones are $20.", "How many is this? The small one are $20.", "How price those? Ones is $20."], "How much are these? The small ones are $20."],
]);

const l06 = makeLesson(3, 2, "better-choices", "Better Choices", "Compare products and preferences.", "By the end of this lesson, students will be able to discuss preferences using comparisons with adjectives.", ["cheaper", "more comfortable", "better", "worse", "prettier", "than"], [
  ["This shirt is ___ than that one.", ["cheaper", "more cheap", "cheapest"], "cheaper"],
  ["The blue shoes are ___ comfortable than the black ones.", ["more", "most", "much"], "more"],
  ["Which phone do you prefer?", ["This one is better.", "This one is more good.", "This is best than."], "This one is better."],
  ["Choose the correct comparison.", ["I prefer the smaller bag because it's lighter.", "I prefer small bag because more light.", "I preferring the bag lightest than."], "I prefer the smaller bag because it's lighter."],
]);

const l07 = makeLesson(4, 1, "what-do-you-watch", "What Do You Watch?", "Talk about entertainment preferences.", "By the end of this lesson, students will be able to discuss entertainment likes and dislikes using yes/no and Wh-questions with do.", ["movie", "series", "music", "podcast", "concert", "prefer"], [
  ["___ you like action movies?", ["Do", "Are", "Does"], "Do"],
  ["What kind of music ___ she like?", ["does", "do", "is"], "does"],
  ["Do they watch documentaries?", ["No, they don't.", "No, they aren't.", "No, they doesn't."], "No, they don't."],
  ["Choose the correct exchange.", ["What do you watch online? I usually watch comedies.", "What you watch online? I watches comedy.", "What are you watch? I do comedies."], "What do you watch online? I usually watch comedies."],
]);

const l08 = makeLesson(4, 2, "join-us", "Join Us!", "Make and respond to invitations.", "By the end of this lesson, students will be able to make, accept, and decline invitations using would and verb + to + verb.", ["would like", "want to", "love to", "join", "accept", "decline"], [
  ["Would you like ___ to a concert?", ["to go", "going", "go to"], "to go"],
  ["I'd ___ to join you.", ["love", "loving", "loved"], "love"],
  ["Choose the polite decline.", ["I'd like to, but I can't.", "I no would go.", "I wouldn't to like."], "I'd like to, but I can't."],
  ["Choose the correct invitation.", ["Would you like to have dinner with us?", "Would you like have dinner us?", "Do would you dinner?"], "Would you like to have dinner with us?"],
]);

const l09 = makeLesson(5, 1, "family-today", "Family Today", "Describe what family members are doing.", "By the end of this lesson, students will be able to describe families and ask and answer questions using the present continuous.", ["working", "studying", "living", "visiting", "taking care of", "moving"], [
  ["My sister ___ studying abroad this year.", ["is", "are", "does"], "is"],
  ["What are your parents doing now?", ["They're traveling.", "They traveling.", "They do travel now."], "They're traveling."],
  ["Is Leo living with his family?", ["Yes, he is.", "Yes, he does.", "Yes, he living."], "Yes, he is."],
  ["Choose the correct description.", ["My cousins are visiting us this week.", "My cousins is visit us this week.", "My cousins visiting are we."], "My cousins are visiting us this week."],
]);

const l10 = makeLesson(5, 2, "big-families", "Big Families", "Use quantities to describe families.", "By the end of this lesson, students will be able to use quantifiers to describe families.", ["a lot of", "many", "a few", "some", "no", "both"], [
  ["I have ___ cousins—about twenty!", ["a lot of", "a little", "much"], "a lot of"],
  ["She has only ___ close relatives.", ["a few", "a little", "much"], "a few"],
  ["How ___ brothers do you have?", ["many", "much", "some"], "many"],
  ["Choose the correct description.", ["Both of my sisters have children, but neither lives nearby.", "Much sisters has children.", "A little relatives live nearby."], "Both of my sisters have children, but neither lives nearby."],
]);

const l11 = makeLesson(6, 1, "active-life", "Active Life", "Talk about sports and exercise habits.", "By the end of this lesson, students will be able to discuss sports and exercise habits.", ["work out", "go running", "play", "practice", "train", "stay active"], [
  ["I ___ running three times a week.", ["go", "play", "do"], "go"],
  ["She ___ yoga every morning.", ["does", "plays", "goes"], "does"],
  ["How do you stay active?", ["I work out at the gym.", "I make gym twice.", "I am play workout."], "I work out at the gym."],
  ["Choose the correct habit.", ["Ben plays tennis on weekends and trains on Tuesdays.", "Ben play tennis and train Tuesdays.", "Ben does tennis at weekends trains."], "Ben plays tennis on weekends and trains on Tuesdays."],
]);

const l12 = makeLesson(6, 2, "free-time-frequency", "How Often?", "Ask about the frequency of free-time activities.", "By the end of this lesson, students will be able to ask and answer questions about frequency of free-time activities.", ["how often", "once", "twice", "every", "sometimes", "hardly ever"], [
  ["___ do you go hiking?", ["How often", "How long", "What often"], "How often"],
  ["I play volleyball ___ a week.", ["twice", "two time", "second"], "twice"],
  ["How often does she read?", ["Almost every day.", "For two hours yesterday.", "At the library is."], "Almost every day."],
  ["Choose the correct exchange.", ["How often do they go out? They hardly ever go out.", "How many often they go? Hardly they go ever.", "What frequency do they? They don't hardly."], "How often do they go out? They hardly ever go out."],
]);

const l13 = makeLesson(7, 1, "what-did-you-do", "What Did You Do?", "Talk about past daily and free-time activities.", "By the end of this lesson, students will be able to discuss daily and free-time activities using the simple past with regular and irregular verbs.", ["worked", "studied", "cleaned", "went", "met", "made"], [
  ["I ___ late yesterday.", ["worked", "work", "working"], "worked"],
  ["We ___ friends after work.", ["met", "meet", "meeted"], "met"],
  ["What did you do last night?", ["I made dinner and watched TV.", "I make dinner and watch TV.", "I did made dinner."], "I made dinner and watched TV."],
  ["Choose the correct past story.", ["She studied, went for a walk, and came home early.", "She study, goed walking, and come home.", "She did studied and wented home."], "She studied, went for a walk, and came home early."],
]);

const l14 = makeLesson(7, 2, "vacation-memories", "Vacation Memories", "Describe past vacations with be.", "By the end of this lesson, students will be able to discuss vacations using the past tense of be.", ["was", "were", "trip", "hotel", "beach", "weather"], [
  ["The hotel ___ comfortable.", ["was", "were", "is"], "was"],
  ["The beaches ___ crowded.", ["were", "was", "are"], "were"],
  ["Was the weather good?", ["Yes, it was.", "Yes, it did.", "Yes, they were."], "Yes, it was."],
  ["Choose the correct memory.", ["We were in Chile, and the trip was amazing.", "We was in Chile, and trip were amazing.", "We did be in Chile."], "We were in Chile, and the trip was amazing."],
]);

const l15 = makeLesson(8, 1, "around-here", "Around Here", "Ask about and describe places.", "By the end of this lesson, students will be able to ask about and describe places using there is/there are and prepositions of place.", ["near", "across from", "on the corner", "behind", "there is", "there are"], [
  ["___ a café near here?", ["Is there", "Are there", "There is"], "Is there"],
  ["___ any parks in this area?", ["Are there", "Is there", "There are"], "Are there"],
  ["Where is the bank?", ["It's across from the station.", "There's across station.", "It across from is."], "It's across from the station."],
  ["Choose the correct description.", ["There's a pharmacy on the corner, and there are two cafés nearby.", "There are a pharmacy and there is two cafés.", "It has pharmacy on corner there."], "There's a pharmacy on the corner, and there are two cafés nearby."],
]);

const l16 = makeLesson(8, 2, "my-neighborhood", "My Neighborhood", "Describe neighborhood features and quantities.", "By the end of this lesson, students will be able to describe features of a neighborhood using quantifiers.", ["a lot of", "many", "much", "a few", "a little", "enough"], [
  ["There are ___ restaurants downtown.", ["a lot of", "much", "a little"], "a lot of"],
  ["There isn't ___ traffic at night.", ["much", "many", "a few"], "much"],
  ["There are only ___ green spaces.", ["a few", "a little", "much"], "a few"],
  ["Choose the correct description.", ["My neighborhood has many shops but very little parking.", "My neighborhood has much shops and few parking.", "There is many stores but a few traffic."], "My neighborhood has many shops but very little parking."],
]);

const l17 = makeLesson(9, 1, "what-do-they-look-like", "What Do They Look Like?", "Describe physical appearance.", "By the end of this lesson, students will be able to describe people’s physical appearance.", ["height", "build", "hair", "eyes", "beard", "glasses"], [
  ["What does he ___ like?", ["look", "looks", "looking"], "look"],
  ["She has ___, curly hair.", ["long", "tall", "high"], "long"],
  ["He's tall and wears ___.", ["glasses", "a glasses", "glass"], "glasses"],
  ["Choose the correct description.", ["She's short, with dark hair and brown eyes.", "She's short with hairs dark and eyes brown.", "She has short and is dark hairs."], "She's short, with dark hair and brown eyes."],
]);

const l18 = makeLesson(9, 2, "which-person", "Which Person?", "Identify people from detailed descriptions.", "By the end of this lesson, students will be able to identify people using modifiers with participles and prepositions to describe how they look, what they are wearing, what they’re doing, and where they are.", ["wearing", "standing", "sitting", "talking", "next to", "with"], [
  ["Mia is the woman ___ a red jacket.", ["wearing", "wears", "is wear"], "wearing"],
  ["Leo is the man standing ___ the door.", ["next to", "wearing", "talking"], "next to"],
  ["Which one is Ana?", ["The woman talking to Ben.", "The woman talks Ben.", "The talking woman to is Ben."], "The woman talking to Ben."],
  ["Choose the clearest identification.", ["He's the tall man with glasses sitting by the window.", "He's tall man glasses sit window.", "The man is with tall and sitting glasses."], "He's the tall man with glasses sitting by the window."],
]);

const l19 = makeLesson(10, 1, "done-yet", "Done Yet?", "Describe recently completed and unfinished activities.", "By the end of this lesson, students will be able to describe recent activities using the present perfect, already, and yet.", ["already", "yet", "finished", "sent", "called", "completed"], [
  ["I've ___ finished the report.", ["already", "yet", "yesterday"], "already"],
  ["Have you called Mia ___?", ["yet", "already yesterday", "ever ago"], "yet"],
  ["She hasn't sent the email ___.", ["yet", "already", "last night"], "yet"],
  ["Choose the correct exchange.", ["Have you eaten yet? Yes, I've already eaten.", "Did you eaten yet? Yes, I already eat.", "Have you ate already yesterday?"], "Have you eaten yet? Yes, I've already eaten."],
]);

const l20 = makeLesson(10, 2, "life-experiences", "Life Experiences", "Connect life experiences with past details.", "By the end of this lesson, students will be able to describe experiences from the recent and distant past using the present perfect, simple past, for, and since.", ["ever", "never", "for", "since", "experience", "ago"], [
  ["I've lived here ___ 2020.", ["since", "for", "ago"], "since"],
  ["She has worked there ___ five years.", ["for", "since", "last"], "for"],
  ["Have you ever been to Peru?", ["Yes, I went there in 2022.", "Yes, I have went yesterday.", "Yes, I was ever."], "Yes, I went there in 2022."],
  ["Choose the correct experience.", ["I've known Leo for years. We met at college.", "I know Leo since years. We have met yesterday.", "I've met Leo ago college."], "I've known Leo for years. We met at college."],
]);

const l21 = makeLesson(11, 1, "hometown-guide", "Hometown Guide", "Describe your hometown and recommend places.", "By the end of this lesson, students will be able to describe their hometowns using adjectives, adverbs, and conjunctions, and make suggestions about places using can and should.", ["peaceful", "lively", "beautifully", "although", "because", "should"], [
  ["My hometown is small ___ very lively.", ["but", "because of", "so that"], "but"],
  ["The old town is ___ preserved.", ["beautifully", "beautiful", "beauty"], "beautifully"],
  ["What can visitors do?", ["They can visit the local market.", "They can to visit market.", "They should visiting."], "They can visit the local market."],
  ["Choose the best guide tip.", ["You should visit in spring because the weather is pleasant.", "You should to visit because weather pleasantly.", "You can visiting spring although weather."], "You should visit in spring because the weather is pleasant."],
]);

const l22 = makeLesson(11, 2, "you-should-go", "You Should Go!", "Recommend places and activities.", "By the end of this lesson, students will be able to make suggestions about places using can and should.", ["can", "should", "visit", "try", "explore", "avoid"], [
  ["You ___ try the local food.", ["should", "should to", "can to"], "should"],
  ["At the park, you ___ rent a bike.", ["can", "should to", "are can"], "can"],
  ["Where should we stay?", ["You should stay downtown.", "You should to stay downtown.", "You can staying downtown."], "You should stay downtown."],
  ["Choose the best suggestion.", ["You can explore the center, but you should avoid rush hour.", "You can to explore and should avoiding rush.", "You should can explore center."], "You can explore the center, but you should avoid rush hour."],
]);

const l23 = makeLesson(12, 1, "health-solutions", "Health Solutions", "State health problems and give practical advice.", "By the end of this lesson, students will be able to state health problems and give advice using adjective + infinitive and noun + infinitive.", ["important to", "good to", "something to", "time to", "safe to", "easy to"], [
  ["It's important ___ plenty of water.", ["to drink", "drinking", "drink to"], "to drink"],
  ["I need something ___ my headache.", ["to relieve", "relieving", "relieve to"], "to relieve"],
  ["This medicine is safe ___ after meals.", ["to take", "taking", "take"], "to take"],
  ["Choose the correct advice.", ["It's a good idea to rest and a good time to call a doctor.", "It's good idea rest and time calling doctor.", "It's good to resting and a time call."], "It's a good idea to rest and a good time to call a doctor."],
]);

const l24 = makeLesson(12, 2, "at-the-pharmacy", "At the Pharmacy", "Ask for product advice politely.", "By the end of this lesson, students will be able to ask for advice and give suggestions about health care products using can, could, and may.", ["can", "could", "may", "recommend", "cream", "pain reliever"], [
  ["___ you recommend something for a cough?", ["Could", "Are", "Do be"], "Could"],
  ["You ___ try this cream.", ["could", "could to", "are could"], "could"],
  ["May I take this with food?", ["Yes, you may.", "Yes, you could to.", "Yes, you are."], "Yes, you may."],
  ["Choose the correct exchange.", ["Can I use this twice a day? You could ask the pharmacist.", "Can I to use this? You could to ask.", "May I using this? You can asked."], "Can I use this twice a day? You could ask the pharmacist."],
]);

const l25 = makeLesson(13, 1, "same-taste", "Same Taste", "Agree and disagree about food preferences.", "By the end of this lesson, students will be able to agree and disagree about food preferences using so, too, neither, and either.", ["so do I", "I do too", "neither do I", "I don't either", "prefer", "taste"], [
  ["I love spicy food. — ___.", ["So do I", "Neither do I", "I don't either"], "So do I"],
  ["I don't eat meat. — ___.", ["Neither do I", "So do I", "I do too"], "Neither do I"],
  ["I like sushi.", ["I do too.", "I don't either.", "Neither I do."], "I do too."],
  ["Choose the correct disagreement pattern.", ["I don't like olives. I don't either.", "I don't like olives. So do I.", "I not either olives."], "I don't like olives. I don't either."],
]);

const l26 = makeLesson(13, 2, "ready-to-order", "Ready to Order", "Order food and respond to restaurant staff.", "By the end of this lesson, students will be able to use would and will to order food at a restaurant.", ["I'd like", "I'll have", "would you like", "order", "main course", "dessert"], [
  ["___ like the vegetable soup, please.", ["I'd", "I'll to", "I would to"], "I'd"],
  ["What will you have?", ["I'll have the pasta.", "I'll to have pasta.", "I have will pasta."], "I'll have the pasta."],
  ["Would you like dessert?", ["Yes, I'd like the cake.", "Yes, I will to cake.", "Yes, I'd cake like."], "Yes, I'd like the cake."],
  ["Choose the correct order.", ["I'd like the salad, and I'll have sparkling water.", "I would salad and I will to water.", "I'd liking salad, I'll sparkling."], "I'd like the salad, and I'll have sparkling water."],
]);

const l27 = makeLesson(14, 1, "amazing-geography", "Amazing Geography", "Compare geographical features.", "By the end of this lesson, students will be able to describe geography using comparative and superlative forms of adjectives.", ["higher", "longer", "larger", "the highest", "the longest", "the largest"], [
  ["A mountain is ___ than a hill.", ["higher", "highest", "more high"], "higher"],
  ["The Pacific is ___ ocean on Earth.", ["the largest", "larger", "the more large"], "the largest"],
  ["This river is ___ than that one.", ["longer", "the longest", "more long"], "longer"],
  ["Choose the correct description.", ["Everest is the highest mountain, and the Nile is one of the longest rivers.", "Everest is higher mountain and Nile most long river.", "Everest the most high and Nile longer of all."], "Everest is the highest mountain, and the Nile is one of the longest rivers."],
]);

const l28 = makeLesson(14, 2, "how-far", "How Far?", "Ask about distance, size, and measurements.", "By the end of this lesson, students will be able to describe distances and measurements, and ask and answer questions with how.", ["how far", "how long", "how high", "how deep", "kilometer", "meter"], [
  ["___ is the airport from here?", ["How far", "How long", "How high"], "How far"],
  ["___ is the bridge?", ["How long", "How many long", "What length is"], "How long"],
  ["How high is the mountain?", ["It's 2,000 meters high.", "It has 2,000 high meters.", "It's high 2,000 meter."], "It's 2,000 meters high."],
  ["Choose the correct exchange.", ["How deep is the lake? It's about 50 meters deep.", "How depth is lake? It 50 meter.", "How much deep? It has deep 50."], "How deep is the lake? It's about 50 meters deep."],
]);

const l29 = makeLesson(15, 1, "future-calendar", "Future Calendar", "Talk about arranged and intended future activities.", "By the end of this lesson, students will be able to discuss future activities and plans using the present continuous, be going to, and time expressions.", ["tonight", "tomorrow", "next week", "meeting", "going to", "leaving"], [
  ["I'm ___ my manager tomorrow morning.", ["meeting", "meet", "going meet"], "meeting"],
  ["We're going to travel ___ month.", ["next", "last", "yesterday"], "next"],
  ["What are you doing tonight?", ["I'm having dinner with Mia.", "I have dinner yesterday.", "I going have dinner."], "I'm having dinner with Mia."],
  ["Choose the correct plan.", ["We're leaving on Friday, and we're going to return next Tuesday.", "We leave last Friday and going return yesterday.", "We're going leave and returning next Tuesday."], "We're leaving on Friday, and we're going to return next Tuesday."],
]);

const l30 = makeLesson(15, 2, "pass-it-on", "Pass It On", "Give and relay messages.", "By the end of this lesson, students will be able to give messages using tell and ask.", ["tell", "ask", "message", "call back", "remind", "let know"], [
  ["Please ___ Leo to call me.", ["tell", "say", "tell to"], "tell"],
  ["Can you ___ her to send the file?", ["ask", "tell that", "say her"], "ask"],
  ["What did Mia say?", ["She asked me to call back.", "She asked that I call to back.", "She told to me call."], "She asked me to call back."],
  ["Choose the correct message.", ["Tell Ben the meeting is at three, and ask him to arrive early.", "Tell to Ben meeting three and ask arrive him.", "Say Ben to meeting and ask that early."], "Tell Ben the meeting is at three, and ask him to arrive early."],
]);

const l31 = makeLesson(16, 1, "life-changes", "Life Changes", "Compare your life now with the past.", "By the end of this lesson, students will be able to describe changes in their lives using the comparative and present, past, and present perfect tenses.", ["busier", "healthier", "used to", "now", "has changed", "since"], [
  ["My life is ___ now than before.", ["busier", "more busy", "busiest"], "busier"],
  ["I ___ in a small town, but now I live in a city.", ["lived", "have live", "am lived"], "lived"],
  ["My routine ___ a lot since 2022.", ["has changed", "changed since", "is change"], "has changed"],
  ["Choose the correct comparison.", ["I work more now, but I've become healthier since I started exercising.", "I work most now, but I became healthy since.", "I've work more and become healthier yesterday."], "I work more now, but I've become healthier since I started exercising."],
]);

const l32 = makeLesson(16, 2, "next-chapter", "The Next Chapter", "Describe goals and plans for the future.", "By the end of this lesson, students will be able to describe plans for the future using verb + infinitive.", ["plan to", "hope to", "want to", "decide to", "expect to", "learn to"], [
  ["I plan ___ a new course next year.", ["to start", "starting to", "start to to"], "to start"],
  ["She hopes ___ abroad.", ["to study", "study to", "studying"], "to study"],
  ["What do you want to do next?", ["I want to learn to drive.", "I want learning drive.", "I want to driving."], "I want to learn to drive."],
  ["Choose the correct future plan.", ["We've decided to move, and we hope to find a larger apartment.", "We've decided moving and hope find apartment.", "We decide to moved and hope to finding."], "We've decided to move, and we hope to find a larger apartment."],
]);

const unit = (order: number, title: string, description: string, lessons: [LearningLesson, LearningLesson]) => ({
  id: `unit-${order}`,
  level: "a2",
  order,
  title,
  description,
  lessons,
});

export const a2Units = [
  unit(1, "New Connections", "Introduce yourself and get to know others.", [l01, l02]),
  unit(2, "Work and Routine", "Talk about occupations and schedules.", [l03, l04]),
  unit(3, "Shopping Choices", "Discuss prices and compare products.", [l05, l06]),
  unit(4, "Entertainment", "Share preferences and make invitations.", [l07, l08]),
  unit(5, "Family Life", "Describe families, activities, and quantities.", [l09, l10]),
  unit(6, "Active Free Time", "Talk about exercise and frequency.", [l11, l12]),
  unit(7, "Past Activities", "Discuss recent activities and vacations.", [l13, l14]),
  unit(8, "Places to Live", "Describe places and neighborhoods.", [l15, l16]),
  unit(9, "People Around Us", "Describe and identify people.", [l17, l18]),
  unit(10, "Life Experience", "Talk about recent and distant experiences.", [l19, l20]),
  unit(11, "Local Guide", "Describe and recommend places.", [l21, l22]),
  unit(12, "Health Care", "State problems and ask for advice.", [l23, l24]),
  unit(13, "Food and Dining", "Share preferences and order meals.", [l25, l26]),
  unit(14, "Our World", "Compare geography and measurements.", [l27, l28]),
  unit(15, "Plans and Messages", "Organize plans and relay information.", [l29, l30]),
  unit(16, "Moving Forward", "Describe life changes and future goals.", [l31, l32]),
];

export const a2Lessons = [
  l01, l02, l03, l04, l05, l06, l07, l08,
  l09, l10, l11, l12, l13, l14, l15, l16,
  l17, l18, l19, l20, l21, l22, l23, l24,
  l25, l26, l27, l28, l29, l30, l31, l32,
];
