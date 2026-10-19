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
    unit(1, "Looking Back", "Ask about the past and share childhood memories.", ["Asking About the Past", "Ask people about past events and situations."], ["When I Was Younger", "Share memories and habits from childhood."]),
    unit(2, "City Life", "Discuss city challenges and ask for information.", ["City Challenges", "Discuss urban problems, quantities, and public services."], ["Could You Tell Me?", "Ask for information politely using indirect questions."]),
    unit(3, "Homes and Changes", "Compare homes and talk about desired changes.", ["Finding the Right Home", "Compare homes and decide which one is suitable."], ["I Wish Things Were Different", "Talk about desired changes in life."]),
    unit(4, "Experiences and Food", "Share experiences and explain recipes.", ["Life Experiences", "Connect experiences with specific past events."], ["Recipe Steps", "Explain how to prepare food in a clear sequence."]),
    unit(5, "Plans and Travel", "Discuss future plans and give travel advice.", ["Future Plans", "Discuss intentions, decisions, and predictions."], ["Smart Travel", "Recommend preparations, activities, and precautions."]),
    unit(6, "Everyday Requests", "Make and respond to requests politely.", ["Could You Turn It Down?", "Make everyday requests with two-part verbs."], ["Would You Mind?", "Make and answer polite requests."]),
    unit(7, "Uses and Suggestions", "Explain purposes and offer solutions.", ["What Is It For?", "Explain what objects and services are used for."], ["Here's an Idea", "Offer clear suggestions and practical solutions."]),
    unit(8, "Celebrations and Customs", "Describe special events and traditions.", ["Special Days", "Describe celebrations and when they take place."], ["Customs and Traditions", "Explain what people do during cultural occasions."]),
    unit(9, "Time and Consequences", "Connect time frames and discuss consequences.", ["Then, Now, and Next", "Connect past events, present situations, and future plans."], ["What If?", "Discuss likely actions and consequences."]),
    unit(10, "Working Life", "Discuss professional skills and job preferences.", ["Skills at Work", "Discuss abilities and professional strengths."], ["The Right Job", "Explain job preferences and motivations."]),
    unit(11, "Our World", "Describe landmarks and countries using the passive.", ["Built by Genius", "Describe famous creations and their creators."], ["Countries in Focus", "Present important facts about countries."]),
    unit(12, "Events and Activities", "Narrate events and ongoing experiences.", ["When It Happened", "Tell stories about interrupted events and achievements."], ["What Have You Been Doing?", "Describe activities continuing over a recent period."]),
    unit(13, "Entertainment", "Discuss media and people in the film industry.", ["Worth Watching", "Give opinions about books, movies, and television."], ["Hollywood Stories", "Describe movies and notable people in entertainment."]),
    unit(14, "Communication and Rules", "Interpret gestures and explain signs.", ["What Does That Gesture Mean?", "Interpret gestures with appropriate degrees of certainty."], ["Signs and Rules", "Explain what signs allow, require, and prohibit."]),
    unit(15, "Imaginary Worlds", "Explore hypothetical situations and past regrets.", ["What Would You Do?", "Explore imaginary present and future situations."], ["If Only I Had Known", "Reflect on past decisions and alternative outcomes."]),
    unit(16, "Reporting What People Say", "Report statements, excuses, and requests.", ["Excuses and Requests", "Report what people asked for and why they could not act."], ["What Did They Say?", "Report statements made by other people."]),
  ],
};
