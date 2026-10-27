import type { Level } from "./types";

const unit = (
  number: number,
  title: string,
  description: string,
  firstLesson: [string, string],
  secondLesson: [string, string],
) => ({
  number,
  title,
  description,
  lessons: [
    { title: firstLesson[0], description: firstLesson[1] },
    { title: secondLesson[0], description: secondLesson[1] },
    { title: `Checkpoint ${number}`, description: "Review what you learned." },
  ],
});

export const a2: Level = {
  slug: "a2",
  code: "A2",
  name: "Elementary",
  subtitle: "Build everyday confidence",
  description: "Handle common situations and connect ideas with more detail.",
  theme: "red",
  units: [
    unit(1, "New Connections", "Introduce yourself and get to know others.", ["Meet and Connect", "By the end of this lesson, students will be able to introduce themselves and others using be and possessive adjectives, and ask and answer Wh-questions to find out information about others and to state information about themselves."], ["Getting to Know You", "By the end of this lesson, students will be able to ask and answer yes/no questions to find out information about others and to state information about themselves."]),
    unit(2, "Work and Routine", "Talk about occupations and schedules.", ["What Do You Do?", "By the end of this lesson, students will be able to ask and answer questions about occupations using the simple present."], ["Busy Days", "By the end of this lesson, students will be able to describe routines and daily schedules using time expressions."]),
    unit(3, "Shopping Choices", "Discuss prices and compare products.", ["How Much Is That?", "By the end of this lesson, students will be able to use demonstratives, one, and ones to ask about and describe prices."], ["Better Choices", "By the end of this lesson, students will be able to discuss preferences using comparisons with adjectives."]),
    unit(4, "Entertainment", "Share preferences and make invitations.", ["What Do You Watch?", "By the end of this lesson, students will be able to discuss entertainment likes and dislikes using yes/no and Wh-questions with do."], ["Join Us!", "By the end of this lesson, students will be able to make, accept, and decline invitations using would and verb + to + verb."]),
    unit(5, "Family Life", "Describe families and what they are doing.", ["Family Snapshots", "By the end of this lesson, students will be able to describe families and ask and answer questions using the present continuous."], ["Big Family, Small Family", "By the end of this lesson, students will be able to use quantifiers to describe families."]),
    unit(6, "Active Free Time", "Talk about exercise and frequency.", ["Active Life", "By the end of this lesson, students will be able to discuss sports and exercise habits."], ["How Often?", "By the end of this lesson, students will be able to ask and answer questions about frequency of free-time activities."]),
    unit(7, "Past Activities", "Discuss recent activities and vacations.", ["What Did You Do?", "By the end of this lesson, students will be able to discuss daily and free-time activities using the simple past with regular and irregular verbs."], ["Vacation Memories", "By the end of this lesson, students will be able to discuss vacations using the past tense of be."]),
    unit(8, "Places to Live", "Describe places and neighborhoods.", ["Around Here", "By the end of this lesson, students will be able to ask about and describe places using there is/there are and prepositions of place."], ["My Neighborhood", "By the end of this lesson, students will be able to describe features of a neighborhood using quantifiers."]),
    unit(9, "People Around Us", "Describe and identify people.", ["What Do They Look Like?", "By the end of this lesson, students will be able to describe people's physical appearance."], ["Which Person?", "By the end of this lesson, students will be able to identify people using modifiers with participles and prepositions to describe how they look, what they are wearing, what they're doing, and where they are."]),
    unit(10, "Life Experience", "Talk about recent and distant experiences.", ["Done Yet?", "By the end of this lesson, students will be able to describe recent activities using the present perfect, already, and yet."], ["Life Experiences", "By the end of this lesson, students will be able to describe experiences from the recent and distant past using the present perfect, simple past, for, and since."]),
    unit(11, "Local Guide", "Describe and recommend places.", ["Hometown Guide", "By the end of this lesson, students will be able to describe their hometowns using adjectives, adverbs, and conjunctions, and make suggestions about places using can and should."], ["You Should Go!", "By the end of this lesson, students will be able to make suggestions about places using can and should."]),
    unit(12, "Health Care", "State problems and ask for advice.", ["Health Solutions", "By the end of this lesson, students will be able to state health problems and give advice using adjective + infinitive and noun + infinitive."], ["At the Pharmacy", "By the end of this lesson, students will be able to ask for advice and give suggestions about health care products using can, could, and may."]),
    unit(13, "Food and Dining", "Share preferences and order meals.", ["Same Taste", "By the end of this lesson, students will be able to agree and disagree about food preferences using so, too, neither, and either."], ["Ready to Order", "By the end of this lesson, students will be able to use would and will to order food at a restaurant."]),
    unit(14, "Our World", "Compare geography and measurements.", ["Amazing Geography", "By the end of this lesson, students will be able to describe geography using comparative and superlative forms of adjectives."], ["How Far?", "By the end of this lesson, students will be able to describe distances and measurements, and ask and answer questions with how."]),
    unit(15, "Plans and Messages", "Organize plans and relay information.", ["Future Calendar", "By the end of this lesson, students will be able to discuss future activities and plans using the present continuous, be going to, and time expressions."], ["Pass It On", "By the end of this lesson, students will be able to give messages using tell and ask."]),
    unit(16, "Moving Forward", "Describe life changes and future goals.", ["Life Changes", "By the end of this lesson, students will be able to describe changes in their lives using the comparative and present, past, and present perfect tenses."], ["The Next Chapter", "By the end of this lesson, students will be able to describe plans for the future using verb + infinitive."]),
  ],
};
