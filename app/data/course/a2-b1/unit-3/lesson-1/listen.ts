import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a couple evaluating a house they are considering.",
  audio:
    "/media/audio/course/a2-b1/unit-3/lesson-1-finding-the-right-home/listen/listen.mp3",
  dialogue: [
    [
      "A",
      ["I like the garden, but this house ", mark("isn't spacious enough"), " for six people."],
    ],
    [
      "B",
      ["I agree. The kitchen is ", mark("too narrow"), ", especially when everyone is cooking."],
    ],
    [
      "A",
      ["Also, the neighborhood ", mark("isn't as lively as"), " downtown."],
    ],
    [
      "B",
      ["That's true, but the balcony is ", mark("just as sunny as"), " the one in our old apartment."],
    ],
    [
      "A",
      ["Did you check the living room? There ", mark("aren't enough electrical outlets"), "."],
    ],
    [
      "B",
      ["I noticed that. The tenants also make ", mark("too much noise"), " in the hallway."],
    ],
    [
      "A",
      ["And this house doesn't have ", mark("as many closets as"), " the other one."],
    ],
    [
      "B",
      ["No, and we don't get ", mark("as much natural light as"), " before. I think we should keep looking."],
    ],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "How do the speakers feel about the house?",
  options: [
    "It has several problems, so they may keep looking",
    "It is perfect for their family",
    "It is better than their previous homes in every way",
  ],
  answer: "It has several problems, so they may keep looking",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Why isn't the house suitable for the family?",
      answer: "It isn't spacious enough for six people, and the kitchen is too narrow.",
    },
    {
      question: "What problems do they notice inside the building?",
      answer: "There aren't enough electrical outlets, and the tenants make too much noise.",
    },
    {
      question: "How does this house compare with the other homes?",
      answer: "It doesn't have as many closets as the other one, and they don't get as much natural light as before.",
    },
  ],
} satisfies ListenData;
