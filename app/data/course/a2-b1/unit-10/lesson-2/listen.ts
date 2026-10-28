import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing careers that might suit them.",
  audio:
    "/media/audio/course/a2-b1/unit-10/lesson-2-the-right-job/listen/listen.mp3",
  dialogue: [
    ["A", ["Our career workshop is tomorrow. Have you thought about which jobs would suit you?"]],
    ["B", ["Yes. I'd make a good event planner ", mark("because I'm highly organized"), ". I already plan our community events."]],
    ["A", ["That's true. I could be a park ranger ", mark("because I enjoy working outdoors"), "."]],
    ["B", ["Would you consider working in a hospital?"]],
    ["A", ["Maybe, but I wouldn't want to be a surgeon ", mark("because I dislike working under pressure"), "."]],
    ["B", ["I understand. I could never be a tour guide ", mark("because I have trouble remembering names"), "."]],
    ["A", ["What about becoming a travel photographer instead?"]],
    ["B", ["That sounds interesting. I take photos every weekend, and I'd still get to visit new places."]],
    ["A", ["Great. I'll research park-ranger programs, and you can look into photography courses."]],
    ["B", ["Deal. Let's compare what we find on Friday."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why would speaker B make a good event planner?",
  options: ["Because speaker B is highly organized", "Because speaker B enjoys pressure", "Because speaker B remembers every name"],
  answer: "Because speaker B is highly organized",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Why could speaker A be a park ranger?",
      answer: "Because speaker A enjoys working outdoors.",
    },
    {
      question: "Why wouldn't speaker A want to be a surgeon?",
      answer: "Because speaker A dislikes working under pressure.",
    },
    {
      question: "Why could speaker B never be a tour guide?",
      answer: "Because speaker B has trouble remembering names.",
    },
    {
      question: "How often does speaker B take photos?",
      answer: "Every weekend.",
    },
    {
      question: "When will the friends compare their research?",
      answer: "On Friday.",
    },
  ],
} satisfies ListenData;
