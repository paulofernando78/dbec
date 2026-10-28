import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two people organize their family's clothes.",
  audio: "/media/audio/course/a1/unit-4/lesson-1-whose-is-it/listen/listen.mp3",
  dialogue: [
    ["A", ["Let's put the clothes in the right bags."]],
    ["B", ["Good. This is ", mark("my"), " jacket. This jacket is ", mark("mine"), "."]],
    ["A", ["And this is ", mark("your"), " scarf. This scarf is ", mark("yours"), "."]],
    ["B", ["These are Ben's shoes."]],
    ["A", ["Yes. These are ", mark("his"), " shoes. These shoes are ", mark("his"), "."]],
    ["B", ["This is Eva's bag."]],
    ["A", ["Right. This is ", mark("her"), " bag. This bag is ", mark("hers"), "."]],
    ["B", ["These are ", mark("our"), " coats. These coats are ", mark("ours"), "."]],
    ["A", ["Those are Tom and Lily's hats."]],
    ["B", ["Yes. Those are ", mark("their"), " hats. Those hats are ", mark("theirs"), "."]],
    ["A", ["This is ", mark("Ana's"), " umbrella. These are ", mark("James's"), " gloves."]],
    ["B", [mark("Whose jacket is this"), "?"]],
    ["A", ["It's Leo's."]],
    ["B", [mark("Whose gloves are these"), "?"]],
    ["A", ["They're Mia's."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Whose shoes are they?",
  options: ["Ben's", "Leo's", "James's"],
  answer: "Ben's",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Whose bag is it?",
      answer: "Eva's.",
    },
    {
      question: "Who owns the hats?",
      answer: "Tom and Lily.",
    },
    {
      question: "Whose umbrella is it?",
      answer: "Ana's.",
    },
    {
      question: "Whose jacket is it?",
      answer: "Leo's.",
    },
    {
      question: "Whose gloves are they?",
      answer: "Mia's.",
    },
  ],
} satisfies ListenData;
