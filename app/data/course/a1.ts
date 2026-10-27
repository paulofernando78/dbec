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
  theme: "amber",
  units: [
    unit(1, "Meeting People", "Say hello, share names, and make simple introductions.", ["Hello", "By the end of this lesson, students will be able to say hello and make introductions using my, your, his, and her."], ["Stay in Touch", "By the end of this lesson, students will be able to say good-bye and exchange contact information using subject pronouns and the verb be."]),
    unit(2, "Things Around Us", "Identify and talk about everyday objects.", ["What's This?", "By the end of this lesson, students will be able to identify and discuss personal and classroom objects using the articles a / an, plurals, this / these, and it / they."], ["Where Is It?", "By the end of this lesson, students will be able to discuss the location of items using yes / no and where questions with be, the article the, and prepositions of place."]),
    unit(3, "Around the World", "Talk about places, people, and languages.", ["Where Are You From?", "By the end of this lesson, students will be able to discuss cities, countries, nationalities, and languages using yes / no questions with be."], ["What Are They Like?", "By the end of this lesson, students will be able to discuss people's appearances, personalities, and ages using Wh- questions with be."]),
    unit(4, "What We Wear", "Talk about clothes, colors, and possession.", ["Whose Is It?", "By the end of this lesson, students will be able to discuss work and free-time clothes and colors using possessive adjectives, possessive pronouns, and possessives with names."], ["Weather Watch", "By the end of this lesson, students will be able to discuss the weather and what people are wearing using the present continuous and conjunctions."]),
    unit(5, "Time Around the World", "Compare local times in different cities.", ["What Time Is It There?", "By the end of this lesson, students will be able to discuss cities and time zones using time expressions."], ["What Are They Doing?", "By the end of this lesson, students will be able to discuss people's activities using the present continuous."]),
    unit(6, "Family on the Move", "Talk about transportation and routines.", ["Getting Around", "By the end of this lesson, students will be able to discuss transportation and family using simple present statements."], ["Every Day", "By the end of this lesson, students will be able to discuss daily and weekly routines using simple present questions."]),
    unit(7, "Home Life", "Describe real and dream homes.", ["Home Tour", "By the end of this lesson, students will be able to describe houses and apartments using simple present questions and short answers."], ["Dream Home", "By the end of this lesson, students will be able to discuss furniture, appliances, and dream homes using statements with there is / there are."]),
    unit(8, "Working Life", "Talk about jobs, workplaces, and opinions.", ["At Work", "By the end of this lesson, students will be able to discuss jobs and workplaces using simple present Wh- questions."], ["Job Talk", "By the end of this lesson, students will be able to give opinions about jobs using be + adjective and adjective + noun."]),
    unit(9, "Food and Habits", "Talk about food and eating routines.", ["What's in the Kitchen?", "By the end of this lesson, students will be able to discuss foods they like, need, and have using some / any and count / noncount nouns."], ["Eating Habits", "By the end of this lesson, students will be able to describe eating habits using adverbs of frequency."]),
    unit(10, "Sports and Talents", "Talk about sports and abilities.", ["Game Day", "By the end of this lesson, students will be able to discuss sports they watch and play using simple present Wh- questions."], ["Show Your Talent", "By the end of this lesson, students will be able to discuss skills, abilities, and talents using can and can't."]),
    unit(11, "Making Plans", "Plan weekends and celebrations.", ["Weekend Plans", "By the end of this lesson, students will be able to discuss evening, weekend, and birthday plans using statements and yes / no questions with be going to."], ["Let's Celebrate!", "By the end of this lesson, students will be able to discuss plans to celebrate holidays, special occasions, and festivals using Wh- questions with be going to."]),
    unit(12, "Health", "Describe ailments and give simple advice.", ["Feeling Sick", "By the end of this lesson, students will be able to discuss the body and common ailments using have + noun and feel + adjective."], ["Feel Better", "By the end of this lesson, students will be able to discuss common remedies and give health advice using imperatives."]),
    unit(13, "Around Town", "Find stores and give directions.", ["Shopping Around", "By the end of this lesson, students will be able to discuss stores, items to buy in stores, and store locations using prepositions of place."], ["Which Way?", "By the end of this lesson, students will be able to ask for and give directions to various locations."]),
    unit(14, "Past Adventures", "Talk about weekends and vacations.", ["Last Weekend", "By the end of this lesson, students will be able to discuss weekend activities using simple past statements with regular and irregular verbs."], ["Vacation Stories", "By the end of this lesson, students will be able to discuss vacation activities using simple past yes / no questions and short answers."]),
    unit(15, "Looking Back", "Share family history and school memories.", ["Family History", "By the end of this lesson, students will be able to discuss family and personal history using the past of be."], ["School Days", "By the end of this lesson, students will be able to discuss school experiences and memories using Wh- questions with did, was, and were."]),
    unit(16, "Keeping in Touch", "Use the phone and make invitations.", ["Leave a Message", "By the end of this lesson, students will be able to make phone calls and leave messages using subject and object pronouns."], ["You're Invited!", "By the end of this lesson, students will be able to make, accept, and decline invitations using Do you want to ... ?, Would you like to ... ?, and verb + to."]),
  ],
};
