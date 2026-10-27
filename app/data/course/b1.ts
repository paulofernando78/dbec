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

export const b1: Level = {
  slug: "b1",
  code: "B1",
  name: "Intermediate",
  subtitle: "Communicate with precision",
  description: "Explain complex ideas, support opinions, and interact confidently.",
  theme: "green",
  units: [
    unit(1, "Relationships and Preferences", "Describe relationships, likes, and dislikes.", ["The People We Connect With", "By the end of this lesson, students will be better able to discuss ideal friends and partners using relative pronouns who and that."], ["Things I Appreciate", "By the end of this lesson, students will be better able to discuss things they like and don't like using clauses with it and adverbial clauses with when."]),
    unit(2, "Working Life", "Evaluate jobs and compare careers.", ["What Makes a Good Job?", "By the end of this lesson, students will be able to discuss their opinions of jobs using gerund phrases as subjects and as objects."], ["Comparing Careers", "By the end of this lesson, students will be able to discuss jobs using comparisons with adjectives, adverbs, nouns, and past participles."]),
    unit(3, "Favors and Messages", "Negotiate favors and relay requests.", ["Could You Do Me a Favor?", "By the end of this lesson, students will be able to discuss favors, borrowing, and lending using modals, if clauses, and gerunds."], ["Can You Tell Her…?", "By the end of this lesson, students will be able to leave messages using indirect requests."]),
    unit(4, "Stories from the Past", "Narrate and sequence past events.", ["What Was Happening?", "By the end of this lesson, students will be able to describe past events using the simple past and past continuous."], ["What Had Happened?", "By the end of this lesson, students will be able to tell stories using the past perfect tense."]),
    unit(5, "Living Abroad", "Discuss international life and expectations.", ["Life Abroad", "By the end of this lesson, students will be able to discuss living abroad using noun phrases and relative clauses."], ["What to Expect", "By the end of this lesson, students will be able to describe expectations using when and if clauses."]),
    unit(6, "Problems and Repairs", "Describe faults and maintenance needs.", ["What's the Problem?", "By the end of this lesson, students will be able to describe problems using nouns and past participles as adjectives."], ["It Needs Fixing", "By the end of this lesson, students will be able to discuss what needs fixing using need with passive infinitives and gerunds, and keep with gerunds."]),
    unit(7, "Environment and Action", "Analyze problems and propose responses.", ["Our Changing Environment", "By the end of this lesson, students will be able to discuss environmental problems using the present continuous and present perfect passive tenses and prepositions of cause."], ["Taking Action", "By the end of this lesson, students will be able to discuss what they can do about problems using infinitive clauses and phrases."]),
    unit(8, "Preferences and Learning", "Express preferences and discuss learning methods.", ["I'd Rather…", "By the end of this lesson, students will be able to discuss personal preferences using would rather and would prefer."], ["Learning Your Way", "By the end of this lesson, students will be able to discuss ways to learn and personal qualities using by + gerund for manner."]),
    unit(9, "Services and Solutions", "Discuss professional services and suggest solutions.", ["Getting Things Done", "By the end of this lesson, students will be able to discuss professional services using causatives."], ["Coming Up With Solutions", "By the end of this lesson, students will be able to use three-word phrasal verbs and make suggestions using a variety of structures."]),
    unit(10, "Past and Future", "Discuss important events and make predictions.", ["Moments That Changed History", "By the end of this lesson, students will be able to discuss important past events using time references."], ["Looking Ahead", "By the end of this lesson, students will be able to make predictions using a variety of structures."]),
    unit(11, "Milestones and Regrets", "Reflect on achievements and past alternatives.", ["Life's Milestones", "By the end of this lesson, students will be able to discuss milestones in their lives using a variety of time clauses."], ["If I Had Known", "By the end of this lesson, students will be able to discuss regrets using should have + past participle and if clauses in the past perfect."]),
    unit(12, "Views and Reasons", "Express personal views and support them clearly.", ["What Success Takes", "By the end of this lesson, students will be able to express personal views and describe qualities for success using infinitive clauses and phrases."], ["Explaining Why", "By the end of this lesson, students will be able to describe features and give reasons using because, since, because of, for, due to, and the reason."]),
    unit(13, "Explaining the Past", "Infer causes and evaluate past decisions.", ["What Must Have Happened?", "By the end of this lesson, students will be able to give explanations, reasons, and suggestions using past modals must have, may have, and could have."], ["What Could Have Been Done?", "By the end of this lesson, students will be able to give opinions and advice with past modals should have, could have, and would have."]),
    unit(14, "Processes and Professions", "Explain processes and describe professional roles.", ["How It's Made", "By the end of this lesson, students will be able to describe processes using the passive."], ["People at Work", "By the end of this lesson, students will be able to discuss jobs using defining and non-defining relative clauses."]),
    unit(15, "Recommendations and Opinions", "Recommend action and invite agreement.", ["What Should Be Done?", "By the end of this lesson, students will be able to make recommendations using passive modals."], ["Don't You Agree?", "By the end of this lesson, students will be able to express opinions using tag questions."]),
    unit(16, "Accomplishments and Goals", "Describe achievements and future goals.", ["What I'm Proud Of", "By the end of this lesson, students will be able to discuss personal accomplishments using complex noun phrases with gerunds."], ["By This Time Next Year", "By the end of this lesson, students will be able to discuss accomplishments and goals using future tenses, including the future perfect."]),
  ],
};
