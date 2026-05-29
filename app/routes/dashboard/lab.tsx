import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Line } from "@/components/content/Line";
import { Paragraph } from "@/components/content/Paragraph";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { Carousel } from "@/components/ui/Carousel";
import { Guess } from "@/features/exercises/Guess";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";

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
import { MediaWrapper } from "@/components/content/MediaWrapper";
import { Image } from "@/components/ui/Image";

export default function Playground() {
  return (
    <>
      <Whiteboard
        title="Title (Mock)"
        subtitle="Subtitle"
        description="Description"
      />
      <div className="line-break">
        <PageSections>
          {/* Line */}
          <Section id="line" heading={3}>
            <Line
              as="span"
              value={[
                ...content({
                  parts: [
                    icon("inbullet"),
                    icon("us"),
                    icon("uk"),
                    icon("correct"),
                    icon("incorrect"),
                    icon("spotlight"),
                    audio("/assets/audio/welcome.mp3"),
                    "Normal",
                    " ",
                    bold("bold"),
                    " ",
                    italic("italic"),
                    " ",
                    underline("underline"),
                    " ",
                    mark("mark"),
                    " ",
                    boldMark("bold mark"),
                    " ",
                    stressed("stressed"),
                    " ",
                    phonetics("phonetics"),
                    " ",
                    portuguese("portuguese"),
                  ],
                }),
              ]}
            />
            <Line
              as="span"
              value={[
                ...content({
                  parts: [
                    icon("bullet"),
                    icon("us"),
                    icon("uk"),
                    icon("correct"),
                    icon("incorrect"),
                    icon("spotlight"),
                    audio("/"),
                    "Normal",
                    " ",
                    bold("bold"),
                    " ",
                    italic("italic"),
                    " ",
                    underline("underline"),
                    " ",
                    mark("mark"),
                    " ",
                    boldMark("bold mark"),
                    " ",
                    stressed("stressed"),
                    " ",
                    phonetics("phonetics"),
                    " ",
                    portuguese("portuguese"),
                  ],
                }),
              ]}
            />
          </Section>

          {/* Paragraph */}
          <Section id="paragraph" heading={3}>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    icon("bullet"),
                    icon("us"),
                    icon("uk"),
                    icon("correct"),
                    icon("incorrect"),
                    icon("spotlight"),
                    audio("/"),
                    "normal",
                    " ",
                    bold("bold"),
                    " ",
                    italic("italic"),
                    " ",
                    underline("underline"),
                    " ",
                    mark("mark"),
                    " ",
                    boldMark("bold mark"),
                    " ",
                    stressed("stressed"),
                    " ",
                    phonetics("phonetics"),
                    " ",
                    portuguese("portuguese"),
                  ],
                }),
              ]}
            />
          </Section>

          {/* Audio Player */}
          <Section id="audio-player" heading={3}>
            <AudioPlayer src="/assets/audio/welcome.mp3" />
          </Section>

          <Section id="image" heading={3}>
            <Image src="/assets/img/home/home-me.png" alt="..." width={250} />
          </Section>

          <Section
            id="media-wrapper"
            label="Media Wrapper: Top | Right | Bottom | Left"
            heading={3}
          >
            <MediaWrapper mediaPosition="left">
              <MediaWrapper.Item>
                <Image
                  src="/assets/img/home/home-me.png"
                  alt="..."
                  width={250}
                />
              </MediaWrapper.Item>
              <MediaWrapper.Content>
                <Paragraph
                  value={[
                    ...content({
                      parts: ["Example paragraph"],
                    }),
                  ]}
                />
              </MediaWrapper.Content>
            </MediaWrapper>
          </Section>

          <Section id="guess" heading={3}>
            <Guess
              words={[
                {
                  word: "cat",
                  img: 0,
                },
                {
                  word: "cat",
                  img: 1,
                },
              ]}
            />
          </Section>

          {/* Radio */}
          <Section id="radio" heading={3}>
            <Radio
            instruction="Choose the correct answer."
              exercise={{
                questions: [
                  {
                    question: "1. Question",
                    options: [
                      { option: "option 1", isCorrect: true },
                      { option: "option 2", isCorrect: false },
                      { option: "option 3", isCorrect: false },
                    ],
                  },
                ],
              }}
            />
          </Section>

          {/* Fill in the Blanks */}
          <Section id="fill-in-the-blanks" heading={3}>
            <FillInTheBlanks
              showWordBank={true}
              instruction="..."
              numbered={true}
              exercise={{
                blocks: [
                  {
                    block: [
                      { text: "He" },
                      { blank: "is" },
                      { text: "a teacher." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "He" },
                      { blank: "teaches" },
                      { text: "in the morning." },
                    ],
                  },
                  {
                    block: [
                      { text: "He" },
                      { blank: "walks" },
                      { text: "to school." },
                    ],
                  },
                ],
              }}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
