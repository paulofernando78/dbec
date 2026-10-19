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
    {
      title: `Checkpoint ${number}`,
      description: "Review what you learned.",
    },
  ],
});

export const b2: Level = {
  slug: "b2",
  code: "B2",
  name: "Upper-Intermediate",
  subtitle: "Communicate independently and effectively",
  description:
    "Understand complex ideas, interact fluently, argue clearly, and mediate information and perspectives.",
  theme: "purple",
  units: [
    unit(1, "Personalities and Family Life", "Describe personalities and compare family life.", ["Personality in Focus", "Describe personalities, preferences, and personal change."], ["Families Compared", "Compare families and discuss their similarities and differences."]),
    unit(2, "Lessons from the Past", "Discuss past mistakes and unexplained events.", ["Looking Back, Thinking Better", "Discuss mistakes and give advice about past decisions."], ["Solving the Mystery", "Speculate about mysteries and offer possible explanations."]),
    unit(3, "Cities and Urban Life", "Describe, compare, and evaluate cities.", ["Destinations Worth Visiting", "Describe cities and explain why they appeal to visitors."], ["Finding the Right City", "Compare cities and evaluate their quality of life."]),
    unit(4, "Routines and Well-Being", "Discuss routines, energy, sleep, and stress.", ["Energy Through the Day", "Describe routines and give advice about sleep and energy."], ["Understanding Sleep", "Discuss sleeping habits and interpret dreams."]),
    unit(5, "Social Communication", "Navigate conversations and report what people say.", ["Starting the Conversation", "Start and sustain small talk in social situations."], ["Sharing What Was Said", "Recount conversations and report what others have said."]),
    unit(6, "News and Narratives", "Present news and tell engaging personal stories.", ["Following the News", "Present and evaluate news events in chronological order."], ["Stories Worth Telling", "Organize and narrate memorable personal experiences."]),
    unit(7, "Technology and Society", "Discuss technology, media, and information overload.", ["Life in a Connected World", "Discuss technology trends and future developments."], ["Too Much Information?", "Debate the effects of social networking and technology."]),
    unit(8, "Creativity and Innovation", "Explore creativity, inventions, and problem solving.", ["The Creative Mind", "Describe creative people, qualifications, and working habits."], ["Solutions That Make a Difference", "Propose solutions and evaluate influential inventions."]),
    unit(9, "Habits and Life Changes", "Compare customs, habits, and responses to change.", ["Customs and Common Patterns", "Compare customs and make generalizations about behavior."], ["Adapting to Change", "Discuss life changes and give practical advice."]),
    unit(10, "Complaints and Solutions", "Discuss annoyances and handle complaints appropriately.", ["Everyday Frustrations", "Describe annoyances and compare complaining styles."], ["Resolving the Problem", "Make, respond to, and resolve complaints."]),
    unit(11, "Ethics and Personal Values", "Discuss ethics, personal values, wishes, and regrets.", ["Choices and Consequences", "Consider ethical dilemmas and explain hypothetical decisions."], ["What Matters Most", "Reflect on personal values, wishes, and regrets."]),
    unit(12, "Culture and Travel", "Compare cultures and discuss living and traveling abroad.", ["Adapting Abroad", "Discuss customs and the challenges of living abroad."], ["Ways to Travel", "Share travel experiences, preferences, and advice."]),
  ],
};
