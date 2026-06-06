import {
  content,
  icon,
  audio,
  bold,
  italic,
  mark,
  boldMark,
  underline,
  stressed,
  phonetics,
  portuguese,
} from "@/helpers/content";

export const lesson = {
  objective: [
    "By the end of this class, students will be able to greet someone, say their name, ask for basic personal information, and introduce themselves clearly.",
  ],

  introPrompt: [
    ...content({
      parts: [bold("Look at the picture and listen to the sentences.")],
    }),
  ],

  introduction: [
    [
      ...content({
        parts: [audio("/"), "This is an ", mark("English School"), "."],
      }),
    ],
    [
      ...content({
        parts: [audio("/"), "Laura and Eric are ", mark("students"), "."],
      }),
    ],
    [
      ...content({
        parts: [audio("/"), "They're in the ", mark("classroom"), "."],
      }),
    ],
    [
      ...content({
        parts: [audio("/"), "Mr. Smith is the ", mark("teacher"), "."],
      }),
    ],
  ],
};
