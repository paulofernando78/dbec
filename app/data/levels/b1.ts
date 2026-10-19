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
    unit(1, "Relationships and Preferences", "Describe relationships, likes, and dislikes.", ["The People We Connect With", "Describe the qualities of ideal friends and partners."], ["Things I Appreciate", "Explain preferences and reactions in everyday situations."]),
    unit(2, "Working Life", "Evaluate jobs and compare careers.", ["What Makes a Good Job?", "Evaluate work activities and responsibilities."], ["Comparing Careers", "Compare careers, conditions, and responsibilities."]),
    unit(3, "Favors and Messages", "Negotiate favors and relay requests.", ["Could You Do Me a Favor?", "Negotiate favors and the use of other people's belongings."], ["Can You Tell Her…?", "Leave clear and polite messages for other people."]),
    unit(4, "Stories from the Past", "Narrate and sequence past events.", ["What Was Happening?", "Narrate past events and actions in progress."], ["What Had Happened?", "Show the sequence of events in a story."]),
    unit(5, "Living Abroad", "Discuss international life and expectations.", ["Life Abroad", "Discuss the realities and benefits of living overseas."], ["What to Expect", "Describe expectations and possible situations abroad."]),
    unit(6, "Problems and Repairs", "Describe faults and maintenance needs.", ["What's the Problem?", "Identify damaged, missing, and malfunctioning items."], ["It Needs Fixing", "Explain maintenance needs and recurring problems."]),
    unit(7, "Environment and Action", "Analyze problems and propose responses.", ["Our Changing Environment", "Discuss ongoing environmental damage and its causes."], ["Taking Action", "Propose practical responses to social and environmental problems."]),
    unit(8, "Preferences and Learning", "Express preferences and discuss learning methods.", ["I'd Rather…", "Compare options and express personal preferences."], ["Learning Your Way", "Explain learning methods and useful personal qualities."]),
    unit(9, "Services and Solutions", "Discuss professional services and suggest solutions.", ["Getting Things Done", "Discuss services performed by professionals."], ["Coming Up With Solutions", "Use three-word phrasal verbs and suggest solutions."]),
    unit(10, "Past and Future", "Discuss important events and make predictions.", ["Moments That Changed History", "Place important events accurately in time."], ["Looking Ahead", "Make predictions with different degrees of certainty."]),
    unit(11, "Milestones and Regrets", "Reflect on achievements and past alternatives.", ["Life's Milestones", "Connect significant life events across time."], ["If I Had Known", "Reflect on regrets and alternative past outcomes."]),
    unit(12, "Views and Reasons", "Express personal views and support them clearly.", ["What Success Takes", "Express views about the qualities required for success."], ["Explaining Why", "Describe features and support ideas with precise reasons."]),
    unit(13, "Explaining the Past", "Infer causes and evaluate past decisions.", ["What Must Have Happened?", "Infer and explain possible causes of past situations."], ["What Could Have Been Done?", "Evaluate past decisions and give retrospective advice."]),
    unit(14, "Processes and Professions", "Explain processes and describe professional roles.", ["How It's Made", "Explain stages in production and other processes."], ["People at Work", "Define jobs and add information about professionals."]),
    unit(15, "Recommendations and Opinions", "Recommend action and invite agreement.", ["What Should Be Done?", "Recommend actions while focusing on outcomes."], ["Don't You Agree?", "Express opinions and invite confirmation."]),
    unit(16, "Accomplishments and Goals", "Describe achievements and future goals.", ["What I'm Proud Of", "Describe achievements through complex noun phrases."], ["By This Time Next Year", "Discuss future goals and expected accomplishments."]),
  ],
};
