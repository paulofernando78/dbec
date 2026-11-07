import type { GetReadyData } from "../../../lesson-step-types";

const imageRoot =
  "/media/images/course/a1/unit-8/lesson-2-job-talk/get-ready";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: `${imageRoot}/naomis-job-is-rewarding.avif?v=1`,
      quote: "Naomi's job is rewarding.",
      questions: [
        {
          prompt: "Easy or difficult?",
          support: ["Easy.", "Difficult."],
        },
      ],
    },
    {
      image: `${imageRoot}/lauras-job-is-stressful.avif?v=1`,
      quote: "Laura's job is sometimes stressful.",
      questions: [
        {
          prompt: "Is the job stressful?",
          support: ["Yes, it is.", "No, it isn’t."],
        },
      ],
    },
    {
      image: `${imageRoot}/erics-job-is-interesting.avif?v=1`,
      quote: "Eric's job is interesting.",
      questions: [
        {
          prompt: "Is this job interesting?",
          support: ["Yes, it is.", "No, it isn’t."],
        },
      ],
    },
  ],
} satisfies GetReadyData;
