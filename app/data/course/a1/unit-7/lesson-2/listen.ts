import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: two friends describe a house. Listen for the topic.",
  audio: "/media/audio/course/a1/unit-7/lesson-2-dream-home/listen/listen.mp3",
  dialogue: [
    ["A", ["Tell me about your new house, Kim."]],
    ["B", [mark("There's a large sofa"), " in the living room."]],
    ["A", ["Is there a coffee table?"]],
    ["B", ["No. ", mark("There isn't a coffee table"), "."]],
    ["A", ["What is in the kitchen?"]],
    ["B", [mark("There's a new stove"), " and a refrigerator."]],
    ["A", ["What about the bedrooms?"]],
    ["B", [mark("There are two beds"), " in the children's room."]],
    ["A", ["Are there any lamps there?"]],
    ["B", ["No. ", mark("There aren't any lamps"), " in that room."]],
    ["A", ["And your office?"]],
    ["B", [mark("There are some pictures"), ", but there are no curtains."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Topic:",
  options: ["Rooms and furniture", "Jobs and workplaces", "Food and drinks"],
  answer: "Rooms and furniture",
  followUpInstruction: "Listen again. Find the room details.",
  followUp: [
    {
      question: "Is there a coffee table?",
      answer: "No, there isn't.",
    },
    {
      question: "What two appliances are in the kitchen?",
      answer: "A stove and a refrigerator.",
    },
    {
      question: "How many beds are in the children's room?",
      answer: "Two beds.",
    },
    {
      question: "Are there any lamps in the children's room?",
      answer: "No, there aren't.",
    },
    {
      question: "What is missing from the office?",
      answer: "Curtains.",
    },
  ],
} satisfies ListenData;
