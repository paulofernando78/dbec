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

export const a2B1: Level = {
  slug: "a2-b1",
  code: "A2-B1",
  name: "Pre-Intermediate",
  subtitle: "Handle real-life conversations",
  description:
    "Share experiences, explain ideas, and communicate with growing confidence.",
  theme: "blue",
  units: [
    unit(1, "Looking Back", "Ask about the past and share childhood memories.", ["Asking About the Past", "By the end of this lesson, students will be able to use past-tense questions with did and was/were to ask people about their past."], ["When I Was Younger", "By the end of this lesson, students will be able to discuss their childhoods using used to."]),
    unit(2, "City Life", "Discuss city challenges and ask for information.", ["City Challenges", "By the end of this lesson, students will be able to discuss city issues and public services using expressions of quantity and compound nouns."], ["Could You Tell Me?", "By the end of this lesson, students will be able to ask indirect questions."]),
    unit(3, "Homes and Changes", "Compare homes and talk about desired changes.", ["Finding the Right Home", "By the end of this lesson, students will be able to evaluate and compare houses and apartments using too and comparatives."], ["I Wish Things Were Different", "By the end of this lesson, students will be able to discuss changes in their lives using I wish."]),
    unit(4, "Experiences and Food", "Share experiences and explain recipes.", ["Life Experiences", "By the end of this lesson, students will be able to describe personal experiences using the past tense and the present perfect."], ["Recipe Steps", "By the end of this lesson, students will be able to describe recipes using sequence adverbs."]),
    unit(5, "Plans and Travel", "Discuss future plans and give travel advice.", ["Future Plans", "By the end of this lesson, students will be able to describe plans using the future with be going to and will."], ["Smart Travel", "By the end of this lesson, students will be able to give travel advice."]),
    unit(6, "Everyday Requests", "Make and respond to requests politely.", ["Could You Turn It Down?", "By the end of this lesson, students will be able to use two-part verbs to make and respond to requests."], ["Would You Mind?", "By the end of this lesson, students will be able to make and respond to requests using modals and Would you mind?"]),
    unit(7, "Uses and Suggestions", "Explain purposes and offer solutions.", ["What Is It For?", "By the end of this lesson, students will be able to use infinitives and gerunds to describe uses and purposes."], ["Here's an Idea", "By the end of this lesson, students will be able to use imperatives and infinitives to give suggestions."]),
    unit(8, "Celebrations and Customs", "Describe special events and traditions.", ["Special Days", "By the end of this lesson, students will be able to describe celebrations and annual events using relative clauses of time."], ["Customs and Traditions", "By the end of this lesson, students will be able to describe customs using adverbial clauses of time."]),
    unit(9, "Time and Consequences", "Connect time frames and discuss consequences.", ["Then, Now, and Next", "By the end of this lesson, students will be able to use the past, present, and future tenses."], ["What If?", "By the end of this lesson, students will be able to discuss consequences using conditional sentences with if clauses."]),
    unit(10, "Working Life", "Discuss professional skills and job preferences.", ["Skills at Work", "By the end of this lesson, students will be able to discuss job skills using gerunds and short responses."], ["The Right Job", "By the end of this lesson, students will be able to discuss the kinds of jobs they want and don't want using clauses with because."]),
    unit(11, "Our World", "Describe landmarks and countries using the passive.", ["Built by Genius", "By the end of this lesson, students will be able to discuss famous landmarks, monuments, and works of art using the passive with by (simple past)."], ["Countries in Focus", "By the end of this lesson, students will be able to discuss key features of countries around the world using the passive without by (simple present)."]),
    unit(12, "Events and Activities", "Narrate events and ongoing experiences.", ["When It Happened", "By the end of this lesson, students will be able to discuss events, accidents, and accomplishments in their lives using the past continuous and the simple past."], ["What Have You Been Doing?", "By the end of this lesson, students will be able to discuss events using the present perfect continuous."]),
    unit(13, "Entertainment", "Discuss media and people in the film industry.", ["Worth Watching", "By the end of this lesson, students will be able to discuss books, movies, and TV programs using participles as adjectives."], ["Hollywood Stories", "By the end of this lesson, students will be able to discuss more about movies and famous Hollywood names using relative clauses."]),
    unit(14, "Communication and Rules", "Interpret gestures and explain signs.", ["What Does That Gesture Mean?", "By the end of this lesson, students will be able to explain gestures using modals and adverbs."], ["Signs and Rules", "By the end of this lesson, students will be able to discuss signs using terms of permission, obligation, and prohibition."]),
    unit(15, "Imaginary Worlds", "Explore hypothetical situations and past regrets.", ["What Would You Do?", "By the end of this lesson, students will be able to discuss imaginary situations using unreal conditional sentences with if clauses."], ["If Only I Had Known", "By the end of this lesson, students will be able to discuss predicaments using the past modals would have and should have."]),
    unit(16, "Reporting What People Say", "Report statements, excuses, and requests.", ["Excuses and Requests", "By the end of this lesson, students will be able to discuss excuses and requests using reported speech."], ["What Did They Say?", "By the end of this lesson, students will be able to use reported speech to discuss statements that other people made."]),
  ],
};
