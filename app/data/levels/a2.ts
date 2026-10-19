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
    unit(1, "New Connections", "Introduce yourself and get to know others.", ["Meet and Connect", "Introduce yourself and others, and ask Wh- questions."], ["Getting to Know You", "Ask and answer yes/no questions about people."]),
    unit(2, "Work and Routine", "Talk about occupations and schedules.", ["What Do You Do?", "Ask and answer questions about occupations."], ["Busy Days", "Describe routines and daily schedules."]),
    unit(3, "Shopping Choices", "Discuss prices and compare products.", ["How Much Is That?", "Ask about and describe prices."], ["Better Choices", "Discuss preferences using comparisons."]),
    unit(4, "Entertainment", "Share preferences and make invitations.", ["What Do You Watch?", "Discuss entertainment likes and dislikes."], ["Join Us!", "Make, accept, and decline invitations."]),
    unit(5, "Family Life", "Describe families and what they are doing.", ["Family Snapshots", "Describe families and ask what they are doing."], ["Big Family, Small Family", "Use quantifiers to describe families."]),
    unit(6, "Active Free Time", "Talk about exercise and frequency.", ["Active Life", "Discuss sports and exercise habits."], ["How Often?", "Ask about the frequency of free-time activities."]),
    unit(7, "Past Activities", "Discuss recent activities and vacations.", ["What Did You Do?", "Discuss daily and free-time activities in the past."], ["Vacation Memories", "Discuss vacations in the past."]),
    unit(8, "Places to Live", "Describe places and neighborhoods.", ["Around Here", "Ask about and describe places."], ["My Neighborhood", "Describe features of a neighborhood."]),
    unit(9, "People Around Us", "Describe and identify people.", ["What Do They Look Like?", "Describe people's physical appearance."], ["Which Person?", "Identify people by looks, clothes, actions, and location."]),
    unit(10, "Life Experience", "Talk about recent and distant experiences.", ["Done Yet?", "Describe recent activities."], ["Life Experiences", "Describe experiences from the recent and distant past."]),
    unit(11, "Local Guide", "Describe and recommend places.", ["Hometown Guide", "Describe your hometown and suggest places."], ["You Should Go!", "Make suggestions about places."]),
    unit(12, "Health Care", "State problems and ask for advice.", ["Health Solutions", "State health problems and give advice."], ["At the Pharmacy", "Ask for advice about health care products."]),
    unit(13, "Food and Dining", "Share preferences and order meals.", ["Same Taste", "Agree and disagree about food preferences."], ["Ready to Order", "Order food at a restaurant."]),
    unit(14, "Our World", "Compare geography and measurements.", ["Amazing Geography", "Describe geography with comparatives and superlatives."], ["How Far?", "Describe distances and measurements."]),
    unit(15, "Plans and Messages", "Organize plans and relay information.", ["Future Calendar", "Discuss future activities and plans."], ["Pass It On", "Give messages using tell and ask."]),
    unit(16, "Moving Forward", "Describe life changes and future goals.", ["Life Changes", "Describe changes in your life."], ["The Next Chapter", "Describe plans for the future."]),
  ],
};
