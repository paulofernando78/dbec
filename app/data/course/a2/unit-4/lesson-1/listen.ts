import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing music, movies, and TV shows.",
  audio: "/media/audio/course/a2/unit-4/lesson-1-what-do-you-watch/listen/listen.mp3",
  dialogue: [
    ["Jade", [mark("What kind of music do you like?")]],
    ["Marco", ["I really like electronic music. I listen to it every day."]],
    ["Jade", ["Do you like rap?"]],
    ["Marco", ["No, I don't like it very much. What about you?"]],
    ["Jade", ["I love it. Do you watch music shows, too?"]],
    ["Marco", ["Sometimes, but I prefer movies."]],
    ["Jade", [mark("What kind of movies do you watch?")]],
    ["Marco", ["Science fiction. I love them, especially old ones."]],
    ["Jade", ["My sister likes them, too. I prefer game shows."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Conversation topic:",
  options: ["Entertainment preferences", "Work schedules", "Health advice"],
  answer: "Entertainment preferences",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Does Marco like rap?", answer: "No, he doesn't." },
    { question: "What does Jade love?", answer: "She loves rap." },
    { question: "What does Jade prefer to watch?", answer: "She prefers game shows." },
  ],
} satisfies ListenData;
