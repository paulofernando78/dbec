import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two coworkers sharing updates from the event-planning team.",
  audio:
    "/media/audio/course/a2-b1/unit-16/lesson-2-what-did-they-say/listen/listen.mp3",
  dialogue: [
    ["A", ["What did everyone say at yesterday's planning call?"]],
    ["B", ["Nina said, ‘I'm working from home today.’ She said that she ", mark("was working"), " from home that day because her son was sick."]],
    ["A", ["Did Carlos complete the financial plan?"]],
    ["B", ["Yes. He said, ‘I've finished the budget.’ He said he ", mark("had finished"), " the budget before lunch."]],
    ["A", ["What about the dinner location?"]],
    ["B", ["Maya said, ‘I booked the restaurant yesterday.’ She said she ", mark("had booked"), " the restaurant the day before for forty guests."]],
    ["A", ["And when will the invitations go out?"]],
    ["B", ["Leo said, ‘I'll send the invitations tomorrow.’ He said he ", mark("would send"), " the invitations the following day at ten."]],
    ["A", ["Can the design team attend on Friday?"]],
    ["B", ["They said, ‘We can't attend on Friday.’ They told me that they ", mark("couldn't attend"), " on Friday because of another meeting."]],
    ["A", ["Will they miss the event completely?"]],
    ["B", ["Maybe not. They said, ‘We may join online.’ They said they ", mark("might join"), " online for the final thirty minutes."]],
    ["A", ["Thanks. I'll add all those updates to the schedule."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why was Nina working from home?",
  options: ["Because her son was sick", "Because she had another meeting", "Because the restaurant was closed"],
  answer: "Because her son was sick",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When had Carlos finished the budget?",
      answer: "Before lunch.",
    },
    {
      question: "For how many guests had Maya booked the restaurant?",
      answer: "Forty guests.",
    },
    {
      question: "What time would Leo send the invitations?",
      answer: "At ten.",
    },
    {
      question: "Why couldn't the design team attend on Friday?",
      answer: "Because of another meeting.",
    },
    {
      question: "How long might the design team join online?",
      answer: "For the final thirty minutes.",
    },
  ],
} satisfies ListenData;
