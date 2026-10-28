import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two coworkers talk about their daily routines.",
  audio: "/media/audio/course/a1/unit-6/lesson-2-every-day/listen/listen.mp3",
  dialogue: [
    ["A", [mark("What time do you get up"), ", Sara?"]],
    ["B", ["I get up at ", mark("six thirty"), " on weekdays."]],
    ["A", [mark("Do you eat breakfast"), " at home?"]],
    ["B", ["Yes, ", mark("I do"), ". I eat breakfast at seven."]],
    ["A", [mark("What time do you leave"), " home?"]],
    ["B", ["At ", mark("seven forty-five"), ". I take the bus."]],
    ["A", ["Does your husband take the bus too?"]],
    ["B", ["No, ", mark("he doesn't"), ". He rides his bike."]],
    ["A", [mark("What time does he start"), " work?"]],
    ["B", ["He starts work at ", mark("nine o'clock"), "."]],
    ["A", [mark("When do you visit"), " your parents?"]],
    ["B", ["We visit them ", mark("on Sundays"), "."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What time does Sara get up?",
  options: ["6:30", "7:00", "7:45"],
  answer: "6:30",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Where does Sara eat breakfast?",
      answer: "At home.",
    },
    {
      question: "What time does Sara leave home?",
      answer: "At 7:45.",
    },
    {
      question: "How does Sara travel to work?",
      answer: "By bus.",
    },
    {
      question: "How does Sara's husband travel?",
      answer: "By bike.",
    },
    {
      question: "When do they visit Sara's parents?",
      answer: "On Sundays.",
    },
  ],
} satisfies ListenData;
