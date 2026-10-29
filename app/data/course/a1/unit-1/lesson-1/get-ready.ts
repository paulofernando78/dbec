import type { GetReadyData } from "../../../lesson-step-types";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif?v=2",
      audio: "/media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-1.mp3",
      quote: "Hi, my name’s Laura.",
    },
    {
      image: "/media/images/course/a1/unit-1/lesson-1-hello/get-ready/pic-2.avif?v=2",
      audio: "/media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-2.mp3",
      quote: "Hello, I’m Eric.",
    },
  ],
} satisfies GetReadyData;
