import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Line } from "@/components/content/Line";
import { Paragraph } from "@/components/content/Paragraph";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

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
              value={[
                ...content({
                  parts: [
                    icon("us"),
                    icon("uk"),
                    icon("correct"),
                    icon("incorrect"),
                    icon("spotlight"),
                    icon("bullet"),
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
                    icon("us"),
                    icon("uk"),
                    icon("correct"),
                    icon("incorrect"),
                    icon("spotlight"),
                    icon("bullet"),
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
          <Section id="audio-player" heading={3}>
            <AudioPlayer src="/assets/audio/words/a/about-to.mp3" />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
