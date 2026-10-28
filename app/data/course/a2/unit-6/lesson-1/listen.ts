import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talking about sports and exercise.",
  audio: "/media/audio/course/a2/unit-6/lesson-1-active-life/listen/listen.mp3",
  dialogue: [
    ["Riley", ["You have a lot of energy, Aaron. Do you play a sport?"]],
    ["Aaron", ["Yes. I play soccer after work."]],
    ["Riley", [mark("Do you exercise at a gym, too?")]],
    ["Aaron", ["Sometimes. I do weight training and run on the treadmill."]],
    ["Riley", ["I don't like treadmills. I go jogging in the park."]],
    ["Aaron", [mark("What do you do on weekends?")]],
    ["Riley", ["I play basketball on Saturdays and go bowling with friends on Sundays."]],
    ["Aaron", ["That's a very active weekend, Riley!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where does Riley go jogging?",
  options: ["At the gym", "In the park", "At school"],
  answer: "In the park",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What sport does Aaron play?", answer: "He plays soccer." },
    { question: "What does Aaron do at the gym?", answer: "He does weight training and runs on the treadmill." },
    { question: "When does Riley play basketball?", answer: "On Saturdays." },
  ],
} satisfies ListenData;
