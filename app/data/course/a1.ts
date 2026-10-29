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
    unit(1, "Meeting People", "Say hello, share names, and exchange basic contact information.", ["Hello", "By the end of this lesson, students will be able to greet someone, introduce themselves, ask a person's name, and respond politely."], ["Stay in Touch", "By the end of this lesson, students will be able to ask for and give a phone number and an email address, then end a conversation politely."]),
    unit(2, "Things Around Us", "Identify everyday objects and say where they are.", ["What's This?", "By the end of this lesson, students will be able to ask about and identify one or more everyday objects using this / these and it / they."], ["Where Is It?", "By the end of this lesson, students will be able to ask where one or more objects are and answer using in, on, under, and next to."]),
    unit(3, "Around the World", "Talk about places, people, and languages.", ["Where Are You From?", "By the end of this lesson, students will be able to discuss cities, countries, nationalities, and languages using yes / no questions with be."], ["What Are They Like?", "By the end of this lesson, students will be able to discuss people's appearances, personalities, and ages using Wh- questions with be."]),
    unit(4, "What We Wear", "Talk about clothes, possession, weather, and actions happening now.", ["Whose Is It?", "By the end of this lesson, students will be able to ask and say who owns common clothes using whose, basic possessives, and names with ’s."], ["Weather Watch", "By the end of this lesson, students will be able to say what a person is wearing now and ask simple yes / no questions using the present continuous." ]),
    unit(5, "Time Around the World", "Tell the time and describe activities happening now.", ["What Time Is It There?", "By the end of this lesson, students will be able to ask for and tell digital time using o’clock, A.M., P.M., noon, and midnight."], ["What Are They Doing?", "By the end of this lesson, students will be able to ask and answer what one or more people are doing now using present continuous Wh- questions."]),
    unit(6, "Family on the Move", "Talk about transportation and everyday routines.", ["Getting Around", "By the end of this lesson, students will be able to describe regular transportation using affirmative and negative simple present statements."], ["Every Day", "By the end of this lesson, students will be able to ask and answer simple present questions about daily and weekly routines." ]),
    unit(7, "Home Life", "Ask about homes and describe rooms and furniture.", ["Home Tour", "By the end of this lesson, students will be able to ask and answer simple present yes / no questions about a home."], ["Dream Home", "By the end of this lesson, students will be able to say what is and is not in a home using there is / there are." ]),
    unit(8, "Working Life", "Talk about jobs, workplaces, and simple opinions.", ["At Work", "By the end of this lesson, students will be able to ask and answer about a person’s job and workplace using simple present Wh- questions."], ["Job Talk", "By the end of this lesson, students will be able to describe jobs using be + adjective and adjective + noun."]),
    unit(9, "Food and Habits", "Talk about food and eating routines.", ["What's in the Kitchen?", "By the end of this lesson, students will be able to discuss foods they like, need, and have using some / any and count / noncount nouns."], ["Eating Habits", "By the end of this lesson, students will be able to describe eating habits using adverbs of frequency."]),
    unit(10, "Sports and Talents", "Talk about sports and abilities.", ["Game Day", "By the end of this lesson, students will be able to discuss sports they watch and play using simple present Wh- questions."], ["Show Your Talent", "By the end of this lesson, students will be able to discuss skills, abilities, and talents using can and can't."]),
    unit(11, "Making Plans", "Plan weekends and celebrations.", ["Weekend Plans", "By the end of this lesson, students will be able to discuss evening, weekend, and birthday plans using statements and yes / no questions with be going to."], ["Let's Celebrate!", "By the end of this lesson, students will be able to discuss plans to celebrate holidays, special occasions, and festivals using Wh- questions with be going to."]),
    unit(12, "Health", "Describe ailments and give simple advice.", ["Feeling Sick", "By the end of this lesson, students will be able to discuss the body and common ailments using have + noun and feel + adjective."], ["Feel Better", "By the end of this lesson, students will be able to discuss common remedies and give health advice using imperatives."]),
    unit(13, "Around Town", "Find stores and give directions.", ["Shopping Around", "By the end of this lesson, students will be able to discuss stores, items to buy in stores, and store locations using prepositions of place."], ["Which Way?", "By the end of this lesson, students will be able to ask for and give directions to various locations."]),
    unit(14, "Past Adventures", "Talk about weekends and vacations.", ["Last Weekend", "By the end of this lesson, students will be able to discuss finished weekend activities using affirmative and negative simple past statements with regular verbs."], ["Vacation Stories", "By the end of this lesson, students will be able to discuss vacation activities using common irregular past verbs and simple past yes / no questions with short answers."]),
    unit(15, "Looking Back", "Share family history and school memories.", ["Family History", "By the end of this lesson, students will be able to discuss family and personal history using the past of be."], ["School Days", "By the end of this lesson, students will be able to discuss school experiences and memories using Wh- questions with did, was, and were."]),
    unit(16, "Keeping in Touch", "Use the phone and make invitations.", ["Leave a Message", "By the end of this lesson, students will be able to make phone calls and leave messages using subject and object pronouns."], ["You're Invited!", "By the end of this lesson, students will be able to make, accept, and decline invitations using Do you want to ... ?, Would you like to ... ?, and verb + to."]),
  ],
};
