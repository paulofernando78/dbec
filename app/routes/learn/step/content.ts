import type { LearningLesson } from "@/data/learning/types";
import type { GetReadySlide, LearningStep, StepMaterial } from "./types";

const customMaterial: Record<
  string,
  Partial<Record<LearningStep, StepMaterial>>
> = {
  hello: {
    "get-ready": {
      instruction: "Look at the pictures and listen to the sentences.",
    },
    "see-it": {
      instruction: "Listen and follow the conversation.",
      content:
        "A: Hi! My name is Ana.\nB: Hello, Ana. I’m Lucas.\nA: Nice to meet you.\nB: Nice to meet you, too.",
    },
    "try-it": { instruction: "Complete and organize the sentences." },
    "use-it": {
      instruction: "Create your own introduction.",
      content: "Hi! My name is _____.\nI’m from _____.\nNice to meet you!",
    },
    "can-you": {
      instruction: "Check your progress.",
      content:
        "Can you say hello?\nCan you say your name?\nCan you ask someone’s name?\nCan you say Nice to meet you?",
      prompt: "Mark each sentence when you can do it.",
    },
  },
  "stay-in-touch": {
    "get-ready": {
      instruction: "Look at the pictures and listen to the sentences.",
    },
    "see-it": {
      instruction: "Read how two new friends exchange contact information.",
      content:
        "A: What is your phone number?\nB: My number is 555-0198.\nA: And what is your email address?\nB: It is marina@email.com. See you!",
    },
    "try-it": {
      instruction: "Complete the contact details with the correct words.",
    },
    "use-it": {
      instruction: "Create a short conversation with a new contact.",
      content:
        "A: What is your phone number?\nB: My number is _____.\nA: What is your email address?\nB: My email address is _____. See you!",
    },
    "can-you": {
      instruction: "Check your progress.",
      content:
        "Can you ask for a phone number?\nCan you share an email address?\nCan you use I am, he is, and she is?\nCan you say goodbye in a friendly way?",
      prompt: "Mark each sentence when you can do it.",
    },
  },
};

export const exerciseExample = (
  exercise: LearningLesson["exercises"][number],
) => {
  if (exercise.type === "word-order") return exercise.correctAnswer;
  return exercise.prompt.includes("___")
    ? exercise.prompt.replace("___", exercise.correctAnswer)
    : `${exercise.prompt} — ${exercise.correctAnswer}`;
};

const generatedMaterial = (
  lesson: LearningLesson,
  step: LearningStep,
): StepMaterial => {
  const vocabulary = lesson.vocabulary.join(" · ");
  const examples = lesson.exercises.slice(0, 4).map(exerciseExample);

  switch (step) {
    case "get-ready":
      return {
        instruction: "Look at the pictures and listen to the sentences.",
      };
    case "see-it":
      return {
        instruction: `Study useful examples for ${lesson.title}.`,
        content: examples.join("\n"),
      };
    case "try-it":
      return { instruction: `Try the language from ${lesson.title}.` };
    case "use-it":
      return {
        instruction: lesson.description,
        content: `Create a short response about this topic. Include at least three of these expressions:\n${vocabulary}`,
      };
    case "can-you":
      return {
        instruction: `Check what you can do after ${lesson.title}.`,
        content: [
          `Can you ${lesson.description.toLowerCase()}`,
          `Can you use ${lesson.vocabulary.slice(0, 2).join(" and ")}?`,
          `Can you understand an example about ${lesson.title.toLowerCase()}?`,
          `Can you create your own response about this topic?`,
        ].join("\n"),
        prompt: "Mark each sentence when you can do it confidently.",
      };
  }
};

export const getStepMaterial = (lesson: LearningLesson, step: LearningStep) =>
  customMaterial[lesson.slug]?.[step] ?? generatedMaterial(lesson, step);

export const getReadyMedia: Record<string, GetReadySlide[]> = {
  hello: [
    {
      type: "image",
      src: "/assets/images/learning/a1/hello-get-ready/01-arriving.png",
      text: "Sofia and Daniel arrive at the language school.",
    },
    {
      type: "image",
      src: "/assets/images/learning/a1/hello-get-ready/02-conversation.png",
      text: "Sofia says, Hi! My name is Sofia. Daniel introduces himself.",
    },
    {
      type: "image",
      src: "/assets/images/learning/a1/hello-get-ready/03-handshake.png",
      text: "They say, Nice to meet you, and shake hands.",
    },
  ],
};
