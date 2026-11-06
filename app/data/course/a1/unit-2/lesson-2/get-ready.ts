import type { GetReadyData } from "../../../lesson-step-types";

const image =
  "/media/images/course/a1/unit-2/lesson-2-where-is-it/get-ready/office-desk.avif?v=1";
const mobileImage =
  "/media/images/course/a1/unit-2/lesson-2-where-is-it/get-ready/office-desk-mobile.avif?v=1";

export const getReady = {
  type: "get-ready",
  slug: "get-ready",
  label: "Get ready",
  slides: [
    {
      image: mobileImage,
      audio: false,
      quote: "",
      questions: [
        {
          prompt: "What objects are on the desk?",
          support: [
            "mobile phone",
            "keys",
            "keyboard",
            "mouse",
            "phone adapter",
            "pens",
            "monitor",
            "printer",
            "folders",
          ],
          supportDisplay: "bullets",
        },
      ],
    },
  ],
} satisfies GetReadyData;
