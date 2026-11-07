import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-8/lesson-1-at-work/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/eric-is-a-designer.avif?v=1`,
      quote: "Eric is a designer.",
      questions: [
        {
          prompt: "What’s his job?",
          support: ["He’s a designer."],
        },
      ],
    },
    {
      image: `${imageRoot}/laura-works-at-a-hotel.avif?v=1`,
      quote: "Laura works at a hotel.",
      questions: [
        {
          prompt: "Where does she work?",
          support: ["She works at a hotel."],
        },
      ],
    },
    {
      image: `${imageRoot}/pedro-is-a-student.avif?v=1`,
      quote: "Pedro is a student.",
      questions: [
        {
          prompt: "What do you do?",
          support: ["I’m a …", "I’m a student."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
