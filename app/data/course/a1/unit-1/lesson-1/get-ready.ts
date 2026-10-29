import type { GetReadyData } from "../../../lesson-step-types";
import { a1GetReadyQuestions } from "../../get-ready-questions";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  instruction: "Look at the picture, listen, and talk.",
  slides: [
    {
      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif",
      audio: "/media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-1.mp3",
      quote: "Hi, my name’s Laura.",
      questions: a1GetReadyQuestions["1/1"][0],
    },
    {
      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/pic-2.avif",
      audio: "/media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-2.mp3",
      quote: "Hello, I’m Eric. Nice to meet you, Laura.",
      questions: a1GetReadyQuestions["1/1"][1],
    },
    {
      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/pic-3.avif",
      audio: "/media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-3.mp3",
      quote: "Nice to meet you too, Eric.",
      questions: a1GetReadyQuestions["1/1"][2],
    },
  ],
} satisfies GetReadyData;
