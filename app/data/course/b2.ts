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
    unit(1, "Personalities and Family Life", "Describe personalities and compare family life.", ["Personality in Focus", "By the end of this lesson, students will be able to describe and compare personalities, express likes and dislikes, and discuss how people have changed or would like to change using personality collocations and verbs followed by gerunds."], ["Families Compared", "By the end of this lesson, students will be able to describe and compare families, discuss similarities and differences, and state advantages and disadvantages using compound family terms and noun clauses after *be*."]),
    unit(2, "Lessons from the Past", "Discuss past mistakes and unexplained events.", ["Looking Back, Thinking Better", "By the end of this lesson, students will be able to describe past rules and obligations, discuss mistakes and reactions, and give advice about past decisions using past modals, phrasal modals of obligation, and collocations with *problem*."], ["Solving the Mystery", "By the end of this lesson, students will be able to speculate about mysterious past events, offer and compare possible explanations, and express degrees of certainty using modals with multiple uses and verbs of belief."]),
    unit(3, "Cities and Urban Life", "Describe, compare, and evaluate cities.", ["Destinations Worth Visiting", "By the end of this lesson, students will be able to describe and give information about cities, explain why they would like to visit particular destinations, and discuss notable urban features using defining and non-defining relative clauses."], ["Finding the Right City", "By the end of this lesson, students will be able to state preferences, compare cities, describe their hometowns, and evaluate quality-of-life issues using ordered modifiers, compound terms for towns, and expressions that connect contrasting ideas."]),
    unit(4, "Routines and Well-Being", "Discuss routines, energy, sleep, and stress.", ["Energy Through the Day", "By the end of this lesson, students will be able to describe routines, habits, and personal energy levels, discuss ways to manage stress, and give advice about sleep and energy using reduced time clauses and related phrasal verbs."], ["Understanding Sleep", "By the end of this lesson, students will be able to discuss sleeping habits, explain reasons and conditions, and describe and interpret dreams using clauses that state reasons and conditions and expressions related to sleep."]),
    unit(5, "Social Communication", "Navigate conversations and report what people say.", ["Starting the Conversation", "By the end of this lesson, students will be able to describe conversational styles, discuss appropriate behavior, and start and sustain small talk in different social situations using infinitive and gerund phrases and terms that describe behavior."], ["Sharing What Was Said", "By the end of this lesson, students will be able to discuss whom they confide in, recount interesting conversations, and report what other people have said using reported speech and related expressions."]),
    unit(6, "News and Narratives", "Present news and tell engaging personal stories.", ["Following the News", "By the end of this lesson, students will be able to present news events in chronological order, evaluate whether stories are true or false, and discuss how they follow the news using news-related vocabulary and the present perfect and simple past."], ["Stories Worth Telling", "By the end of this lesson, students will be able to narrate news events and personal experiences, organize information clearly, and recount complicated or embarrassing situations using storytelling expressions, the present perfect continuous, and adverbs with the simple past and past perfect."]),
    unit(7, "Technology and Society", "Discuss technology, media, and information overload.", ["Life in a Connected World", "By the end of this lesson, students will be able to discuss Internet trends, modern information technology, and possible future developments using technology buzzwords and passive forms of the present continuous, present perfect, and future."], ["Too Much Information?", "By the end of this lesson, students will be able to participate in debates about social networking and technology, express and support opinions, and discuss information overload using negative and tag questions, formal connecting expressions, and vocabulary for forms of communication."]),
    unit(8, "Creativity and Innovation", "Explore creativity, inventions, and problem solving.", ["The Creative Mind", "By the end of this lesson, students will be able to describe creative people, discuss jobs that require creativity, and explain relevant qualifications and creative-thinking habits using vocabulary for personal qualities and reduced relative clauses."], ["Solutions That Make a Difference", "By the end of this lesson, students will be able to propose solutions to everyday problems, evaluate influential inventions, and analyze why new products are developed using problem-solving collocations and non-defining relative clauses as sentence modifiers."]),
    unit(9, "Habits and Life Changes", "Compare customs, habits, and responses to change.", ["Customs and Common Patterns", "By the end of this lesson, students will be able to compare customs and habits, discuss what is typical, and make generalizations while presenting contrasting information using clauses and phrases of contrast and exception and expressions related to accepting or changing things."], ["Adapting to Change", "By the end of this lesson, students will be able to discuss past habits and the effects of major life changes, describe how people respond to problems, and give practical advice using *used to* and *would* and expressions with *keep* and *stay*."]),
    unit(10, "Complaints and Solutions", "Discuss annoyances and handle complaints appropriately.", ["Everyday Frustrations", "By the end of this lesson, students will be able to describe everyday annoyances, compare complaining styles, and explain how irritating situations make them feel using relative clauses, noun clauses, expressions with *drive*, *get*, and *make*, and *-ed* adjectives for feelings."], ["Resolving the Problem", "By the end of this lesson, students will be able to make and respond to complaints, identify ways to prevent recurring problems, and offer advice about difficult situations using simple and complex indirect questions and appropriate complaint language."]),
    unit(11, "Ethics and Personal Values", "Discuss ethics, personal values, wishes, and regrets.", ["Choices and Consequences", "By the end of this lesson, students will be able to discuss ethical behavior, compare possible responses to moral dilemmas, and explain decisions in hypothetical situations using the present unreal conditional with *unless*, *only if*, and *even if*, antonyms formed with prefixes, and adjectives for ethics and attitudes."], ["What Matters Most", "By the end of this lesson, students will be able to discuss important personal values, reflect on experiences with unreliable people or services, and express wishes and regrets using appropriate structures and vocabulary for personal values."]),
    unit(12, "Culture and Travel", "Compare cultures and discuss living and traveling abroad.", ["Adapting Abroad", "By the end of this lesson, students will be able to compare customs, discuss the benefits and challenges of living abroad, and make predictions and hypotheses about adapting to another culture using the future perfect, future perfect continuous, and expressions ending with prepositions."], ["Ways to Travel", "By the end of this lesson, students will be able to describe travel preferences, discuss travel experiences and mishaps, plan a group trip, and give advice using mixed conditionals and compound adjectives."]),
  ],
};
