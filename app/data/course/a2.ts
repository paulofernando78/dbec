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
    unit(1, "New Connections", "Introduce yourself and get to know others.", ["Meet and Connect", "By the end of this lesson, students will be able to complete a short first-meeting exchange by giving a name and country, asking Wh-questions with be, and introducing another person with a possessive adjective."], ["Getting to Know You", "By the end of this lesson, students will be able to ask and answer simple yes/no questions with be about availability, origin, and classes, then identify one thing they have in common."]),
    unit(2, "Work and Routine", "Talk about occupations and schedules.", ["What Do You Do?", "By the end of this lesson, students will be able to conduct a short interview about occupation and workplace, then report two facts about another person using simple-present questions and answers."], ["Busy Days", "By the end of this lesson, students will be able to compare two daily schedules using at, in, on, around, and until, then identify one possible time to meet."]),
    unit(3, "Shopping Choices", "Discuss prices and compare products.", ["How Much Is That?", "By the end of this lesson, students will be able to ask about nearby and distant products and prices using this, that, these, those, one, and ones, then choose an item within a budget."], ["Better Choices", "By the end of this lesson, students will be able to compare two products by material and qualities using prefer and comparative adjectives, then agree on one product and give two reasons." ]),
    unit(4, "Entertainment", "Share preferences and make invitations.", ["What Do You Watch?", "By the end of this lesson, students will be able to compare entertainment preferences using yes/no and Wh-questions with do and object pronouns, then agree on one recommendation."], ["Join Us!", "By the end of this lesson, students will be able to make, accept, and politely decline invitations with a reason, then negotiate one activity, day, and time."]),
    unit(5, "Family Life", "Describe families and what they are doing.", ["Family Snapshots", "By the end of this lesson, students will be able to exchange family updates using present-continuous yes/no and Wh-questions, then report two temporary activities happening now or these days."], ["Big Family, Small Family", "By the end of this lesson, students will be able to compare family sizes using How many, a lot of, a few, and any, then report two similarities or differences." ]),
    unit(6, "Active Free Time", "Talk about exercise and frequency.", ["Active Life", "By the end of this lesson, students will be able to ask about exercise habits and describe activities with play, go, and do, then agree on a three-activity weekly plan."], ["How Often?", "By the end of this lesson, students will be able to compare the frequency and duration of exercise routines using How often, How long, frequency expressions, and common adverbs, then report one similarity and one difference."]),
    unit(7, "Past Activities", "Discuss recent activities and vacations.", ["What Did You Do?", "By the end of this lesson, students will be able to ask about a completed weekend using did and report a three-event timeline with common regular and irregular past verbs."], ["Vacation Memories", "By the end of this lesson, students will be able to interview someone about a past vacation using was and were, then accurately summarize the destination, weather, and duration."]),
    unit(8, "Places to Live", "Describe places and neighborhoods.", ["Around Here", "By the end of this lesson, students will be able to ask whether useful places exist and locate them with there is, there are, and five common prepositions, then complete a neighborhood-map information gap."], ["My Neighborhood", "By the end of this lesson, students will be able to compare two neighborhoods using many, much, How many, and How much, then recommend one with two quantity-based reasons."]),
    unit(9, "People Around Us", "Describe and identify people.", ["What Do They Look Like?", "By the end of this lesson, students will be able to give a four-detail physical description using general appearance, features, metric height, and an approximate age group so a partner can identify a person."], ["Which Person?", "By the end of this lesson, students will be able to identify people at an event using the one/ones, verb-ing modifiers, and prepositional phrases for appearance, clothing, action, and location."]),
    unit(10, "Life Experience", "Talk about recent and distant experiences.", ["Done Yet?", "By the end of this lesson, students will be able to compare two activity checklists using present-perfect questions, already, and yet, then report two completed and two incomplete activities."], ["Life Experiences", "By the end of this lesson, students will be able to ask about life experience with the present perfect, add a specific simple-past detail, and describe one continuing situation with for or since." ]),
    unit(11, "Local Guide", "Describe and recommend places.", ["Hometown Guide", "By the end of this lesson, students will be able to give a balanced four-sentence destination profile using descriptive adjectives, degree adverbs, and the connectors and, but, and though."], ["You Should Go!", "By the end of this lesson, students will be able to create a one-day visitor plan using can, should, can't miss, and shouldn't to express an option, recommendation, essential experience, and caution."]),
    unit(12, "Health Care", "State problems and ask for advice.", ["Health Solutions", "By the end of this lesson, students will be able to match three fictional health problems with appropriate next steps using adjective + infinitive, a good idea + infinitive, and common health-action vocabulary."], ["At the Pharmacy", "By the end of this lesson, students will be able to complete a pharmacy role-play by making a polite request, giving possible and stronger suggestions, specifying a container, and choosing two products."]),
    unit(13, "Food and Dining", "Share preferences and order meals.", ["Same Taste", "By the end of this lesson, students will be able to respond to food-preference statements using so, too, neither, either, and opposite short responses, then report three agreements and one disagreement."], ["Ready to Order", "By the end of this lesson, students will be able to complete and close a restaurant order using What would you like?, I'd like, I'll have, and Would you like anything else?."]),
    unit(14, "Our World", "Compare geography and measurements.", ["Amazing Geography", "By the end of this lesson, students will be able to create and answer a four-question geography quiz using short and long comparative and superlative forms with clear pairs and comparison groups."], ["How Far?", "By the end of this lesson, students will be able to exchange a four-fact geography profile using How far, How big, How high, and How long or deep with appropriate metric units."]),
    unit(15, "Plans and Messages", "Organize plans and relay information.", ["Future Calendar", "By the end of this lesson, students will be able to compare calendars and agree on one activity, day, and time using the present continuous for arrangements and be going to for intentions."], ["Pass It On", "By the end of this lesson, students will be able to relay one fact and one requested action accurately using tell and ask."]),
    unit(16, "Moving Forward", "Describe life changes and future goals.", ["Life Changes", "By the end of this lesson, students will be able to give a four-part life update containing a current change, a dated past event, a recent change relevant now, and a comparison."], ["The Next Chapter", "By the end of this lesson, students will be able to exchange and report three future goals using plan to for an intention, want to for a desire, and hope to for a desired but uncertain result."]),
  ],
};
