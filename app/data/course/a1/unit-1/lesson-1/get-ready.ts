import type { GetReadyData } from "../../../lesson-step-types";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: "/media/course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif",
      audio: "/media/course/a1/unit-1/lesson-1-hello/get-ready/audio-1.mp3",
      quote: "Hi, my name’s Laura.",
    },
    {
      image: "/media/course/a1/unit-1/lesson-1-hello/get-ready/pic-2.avif",
      audio: "/media/course/a1/unit-1/lesson-1-hello/get-ready/audio-2.mp3",
      quote: "Hello, I’m Eric. Nice to meet you, Laura.",
    },
    {
      image: "/media/course/a1/unit-1/lesson-1-hello/get-ready/pic-3.avif",
      audio: "/media/course/a1/unit-1/lesson-1-hello/get-ready/audio-3.mp3",
      quote: "Nice to meet you too, Eric.",
    },
    {
      image:
        "/media/course/a1/unit-1/lesson-1-hello/get-ready/pic-4.avif?v=2",
      audio: "/media/course/a1/unit-1/lesson-1-hello/get-ready/audio-4.mp3",
      quote: "They shake hands.",
    },
    {
      image:
        "/media/course/a1/unit-1/lesson-1-hello/get-ready/pic-5.avif?v=2",
      audio: "/media/course/a1/unit-1/lesson-1-hello/get-ready/audio-5.mp3",
      quote: "Bye. See you in the office.",
    },
  ],
} satisfies GetReadyData;
