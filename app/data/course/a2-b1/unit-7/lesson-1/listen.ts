import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a customer and a salesperson discussing uses for different devices.",
  audio:
    "/media/audio/course/a2-b1/unit-7/lesson-1-what-is-it-for/listen/listen.mp3",
  dialogue: [
    ["A", ["What do you usually use a smartwatch for?"]],
    ["B", ["I use my smartwatch ", mark("to track"), " workouts."]],
    ["A", ["So a smartwatch is useful ", mark("for tracking"), " workouts?"]],
    ["B", ["Exactly. It records your activity throughout the day."]],
    ["A", ["What about a tablet? How do you use yours?"]],
    ["B", ["I use my tablet ", mark("to read"), " digital magazines."]],
    ["A", ["That makes sense. A tablet is great ", mark("for reading"), " digital magazines."]],
    ["B", ["Yes, especially when you're traveling."]],
    ["A", ["And what do you use this wireless speaker for?"]],
    ["B", ["I use this wireless speaker ", mark("to listen"), " to podcasts."]],
    ["A", ["It sounds like it's perfect ", mark("for listening"), " to podcasts."]],
    ["B", ["It is. The sound is clear, even in a large room."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What does speaker B use a smartwatch to track?",
  options: ["Workouts", "Expenses", "Appointments"],
  answer: "Workouts",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What does the smartwatch record throughout the day?",
      answer: "Activity.",
    },
    {
      question: "What does speaker B use a tablet to read?",
      answer: "Digital magazines.",
    },
    {
      question: "When does speaker B say a tablet is especially useful?",
      answer: "When traveling.",
    },
    {
      question: "What does speaker B listen to on the wireless speaker?",
      answer: "Podcasts.",
    },
    {
      question: "How is the speaker's sound in a large room?",
      answer: "It is clear.",
    },
  ],
} satisfies ListenData;
