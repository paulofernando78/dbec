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

export const a1: Level = {
  slug: "a1",
  code: "A1",
  name: "Beginner",
  subtitle: "Start using English",
  description: "Learn to communicate in simple, everyday situations.",
  units: [
    unit(1, "Meeting People", "Say hello, share names, and make simple introductions.", ["Hello", "Say hello and introduce people."], ["Stay in Touch", "Say goodbye and exchange contact information."]),
    unit(2, "Things Around Us", "Identify and talk about everyday objects.", ["What's This?", "Identify personal and office objects."], ["Where Is It?", "Ask and say where everyday objects are."]),
    unit(3, "Around the World", "Talk about places, people, and languages.", ["Where Are You From?", "Talk about cities, countries, nationalities, and languages."], ["What Are They Like?", "Talk about people's looks, personalities, and ages."]),
    unit(4, "What We Wear", "Talk about clothes, colors, and possession.", ["Whose Is It?", "Talk about clothes, colors, and who they belong to."], ["Weather Watch", "Talk about the weather and what people are wearing now."]),
    unit(5, "Time Around the World", "Compare local times in different cities.", ["What Time Is It There?", "Talk about cities, clocks, and different times of day."], ["What Are They Doing?", "Talk about activities happening right now."]),
    unit(6, "Family on the Move", "Talk about transportation and routines.", ["Getting Around", "Talk about family members and transportation."], ["Every Day", "Ask about daily and weekly routines."]),
    unit(7, "Home Life", "Describe real and dream homes.", ["Home Tour", "Ask and answer questions about homes."], ["Dream Home", "Describe rooms, furniture, and appliances."]),
    unit(8, "Working Life", "Talk about jobs, workplaces, and opinions.", ["At Work", "Ask about jobs and workplaces."], ["Job Talk", "Give simple opinions about different jobs."]),
    unit(9, "Food and Habits", "Talk about food and eating routines.", ["What's in the Kitchen?", "Talk about foods you like, need, and have."], ["Eating Habits", "Describe how often you eat different foods."]),
    unit(10, "Sports and Talents", "Talk about sports and abilities.", ["Game Day", "Ask about sports people watch and play."], ["Show Your Talent", "Talk about your skills, abilities, and talents."]),
    unit(11, "Making Plans", "Plan weekends and celebrations.", ["Weekend Plans", "Talk about evening, weekend, and birthday plans."], ["Let's Celebrate!", "Ask about holiday and festival plans."]),
    unit(12, "Health", "Describe ailments and give simple advice.", ["Feeling Sick", "Talk about the body and common ailments."], ["Feel Better", "Talk about remedies and give health advice."]),
    unit(13, "Around Town", "Find stores and give directions.", ["Shopping Around", "Talk about stores, products, and locations."], ["Which Way?", "Ask for and give simple directions."]),
    unit(14, "Past Adventures", "Talk about weekends and vacations.", ["Last Weekend", "Talk about completed weekend activities."], ["Vacation Stories", "Ask and answer about past vacations."]),
    unit(15, "Looking Back", "Share family history and school memories.", ["Family History", "Talk about family and personal history."], ["School Days", "Ask about school experiences and memories."]),
    unit(16, "Keeping in Touch", "Use the phone and make invitations.", ["Leave a Message", "Make phone calls and leave simple messages."], ["You're Invited!", "Make, accept, and decline invitations."]),
  ],
};
