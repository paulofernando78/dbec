import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Line } from "@/components/content/Line";
import { Paragraph } from "@/components/content/Paragraph";
import { Image } from "@/components/ui/Image";
import { Carousel } from "@/components/ui/Carousel";
import { FlipCards } from "@/components/content/FlipCards";
import { MediaWrapper } from "@/components/content/MediaWrapper";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Dialogue } from "@/features/Dialogue/Dialogue";
import { ColumnDrag } from "@/components/content/Column";
import { Guess } from "@/features/exercises/Guess";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

import { icon, audio } from "@/helpers/content";

import {
  line,
  paragraph,
  audioPlayer,
  video,
  image,
  carousel,
  flipCards,
  mediaWrapper,
  dialogue,
  guess,
  radio,
  fillInTheBlanks,
  scramble,
  columnDrag,
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

          {/* Image */}
          <Section id="image" heading={3}>
            <Image {...image} />
          </Section>

          {/* Caroseul */}
          <Section id="caroseul" heading={3}>
            <Carousel {...carousel} />
          </Section>

          {/* Flip Card */}
          <Section id="flip-cards" heading={3}>
            <FlipCards {...flipCards} />
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

          {/* Audio Player */}
          <Section id="audio-player" heading={3}>
            <AudioPlayer {...audioPlayer} />
          </Section>

          <Section id="video-player" heading={3}>
            <VideoPlayer {...video} />
          </Section>

          {/* Dialogue */}
          <Section id="dialogue" heading={3}>
            <Dialogue {...dialogue} />
          </Section>

          {/* Column Drag */}
          <Section id="Column Drag" heading={3}>
            <ColumnDrag {...columnDrag} />
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
