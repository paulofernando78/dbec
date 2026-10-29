import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: two people talk about today. Listen for the weather.",
  audio: "/media/audio/course/a1/unit-4/lesson-2-weather-watch/listen/listen.mp3",
  dialogue: [
    ["A", [mark("It's raining"), ", ", mark("and"), " it's windy."]],
    ["B", ["Yes, but ", mark("it isn't snowing"), "."]],
    ["B", [mark("Are you wearing"), " a raincoat?"]],
    ["A", ["Yes, ", mark("I am"), ". ", mark("I'm not wearing"), " a hat."]],
    ["A", [mark("Are you carrying"), " an umbrella?"]],
    ["B", ["Yes, ", mark("I am"), ". ", mark("I'm not wearing"), " boots."]],
    ["A", [mark("Is Maya wearing"), " a jacket?"]],
    ["B", ["No, ", mark("she isn't"), ". ", mark("She's wearing"), " a sweater."]],
    ["A", [mark("Is Leo wearing"), " a scarf?"]],
    ["B", ["No, ", mark("he isn't"), ". ", mark("He's wearing"), " gloves."]],
    ["A", [mark("We're waiting"), " for a taxi. We ", mark("aren't walking"), " home."]],
    ["B", [mark("Are Tom and Lia waiting"), " for us?"]],
    ["A", ["No, ", mark("they aren't"), ". ", mark("They're standing"), " by the door. Their bus is here."]],
    ["B", ["Tomorrow is different. It's cold, ", mark("but"), " it's sunny."]],
    ["A", ["Today ", mark("it's raining"), ", ", mark("so"), " I have an umbrella."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Weather now:",
  options: ["Rainy and windy", "Snowy and cold", "Sunny and warm"],
  answer: "Rainy and windy",
  followUpInstruction: "Listen again. Match people and clothes.",
  followUp: [
    {
      question: "Maya:",
      answer: "A sweater.",
    },
    {
      question: "Leo:",
      answer: "Gloves.",
    },
    {
      question: "The speakers:",
      answer: "A taxi.",
    },
    {
      question: "Tom and Lia:",
      answer: "By the door.",
    },
    {
      question: "Tomorrow’s weather:",
      answer: "Cold but sunny.",
    },
  ],
} satisfies ListenData;
