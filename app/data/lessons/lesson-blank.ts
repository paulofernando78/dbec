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

  introduction: [
    ...content({
      parts: [
        icon("inbullet"),
        icon("us"),
        icon("uk"),
        icon("correct"),
        icon("incorrect"),
        icon("spotlight"),
        "",
        audio("/"),
        " ",
        bold(""),
        " ",
        italic(""),
        " ",
        mark(""),
        " ",
        underline(""),
        " ",
        boldMark(""),
        " ",
        phonetics(""),
        " ",
        portuguese(""),
      ],
    }),
  ],
};
