import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: Rosa talks about a new apartment. Listen for the topic.",
  audio: "/media/audio/course/a1/unit-7/lesson-1-home-tour/listen/listen.mp3",
  dialogue: [
    ["A", ["Do you like your new apartment, Rosa?"]],
    ["B", ["Yes, ", mark("I do"), ". It's small, but it's nice."]],
    ["A", [mark("Do you have"), " a balcony?"]],
    ["B", ["No, ", mark("I don't"), ". I have a large window."]],
    ["A", ["Do your children share a bedroom?"]],
    ["B", ["Yes, ", mark("they do"), ". Their room is blue."]],
    ["A", ["Does your sister live near you?"]],
    ["B", ["No, ", mark("she doesn't"), ". She lives downtown."]],
    ["A", ["Does your husband have a car?"]],
    ["B", ["Yes, ", mark("he does"), ". But the building doesn't have a garage."]],
    ["A", [mark("Does the building have"), " an elevator?"]],
    ["B", ["Yes, ", mark("it does"), ". The apartment is on the third floor."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Topic:",
  options: ["A new apartment", "A new job", "A new school"],
  answer: "A new apartment",
  followUpInstruction: "Listen again. Find the home details.",
  followUp: [
    {
      question: "Does the apartment have a balcony?",
      answer: "No, it doesn't.",
    },
    {
      question: "Do Rosa's children share a bedroom?",
      answer: "Yes, they do.",
    },
    {
      question: "Does Rosa's sister live near her?",
      answer: "No, she doesn't.",
    },
    {
      question: "Does Rosa's husband have a car?",
      answer: "Yes, he does.",
    },
    {
      question: "Does the building have an elevator?",
      answer: "Yes, it does.",
    },
  ],
} satisfies ListenData;
