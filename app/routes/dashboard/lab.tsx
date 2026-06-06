import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Line } from "@/components/content/Line";
import { Paragraph } from "@/components/content/Paragraph";
import { Image } from "@/components/ui/Image";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { MediaWrapper } from "@/components/content/MediaWrapper";
import { Dialogue } from "@/features/Dialogue/Dialogue";
import { Carousel } from "@/components/ui/Carousel";
import { Guess } from "@/features/exercises/Guess";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

import {
  line,
  paragraph,
  audioPlayer,
  image,
  carousel,
  mediaWrapper,
  dialogue,
  guess,
  radio,
  fillInTheBlanks,
  scramble,
} from "@/data/lab";

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
          <Section id="line (<span> / <p>)" heading={3}>
            <Line as="span" value={line} />
          </Section>

          {/* Paragraph */}
          <Section id="paragraph" heading={3}>
            <Paragraph value={paragraph} />
          </Section>

          {/* Audio Player */}
          <Section id="audio-player" heading={3}>
            <AudioPlayer {...audioPlayer} />
          </Section>

          {/* Image */}
          <Section id="image" heading={3}>
            <Image {...image}/>
          </Section>

          {/* Caroseul */}
          <Section id="caroseul" heading={3}>
            <Carousel {...carousel} />
          </Section>

          {/* Media Wrapper */}
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
                <Paragraph value={mediaWrapper.paragraph} />
              </MediaWrapper.Content>
            </MediaWrapper>
          </Section>

          {/* Dialogue */}
          <Section id="dialogue" heading={3}>
            <Dialogue {...dialogue} />
          </Section>

          {/* Guess */}
          <Section id="guess" heading={3}>
            <Guess {...guess} />
          </Section>

          {/* Radio */}
          <Section id="radio" heading={3}>
            <Radio {...radio} />
          </Section>

          {/* Fill in the Blanks */}
          <Section id="fill-in-the-blanks" heading={3}>
            <FillInTheBlanks {...fillInTheBlanks} />
          </Section>

          {/* Unscramble */}
          <Section id="scramble" heading={3}>
            <Unscramble {...scramble} />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
