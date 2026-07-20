import { useParams } from "react-router";

// Content routes
import { authenticContentsNewsRoutes } from "@/data/authentic-content/news";
import { authenticContentsTedEdRoutes } from "@/data/authentic-content/ted-ed";

import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";
import { Carousel } from "@/components/ui/Carousel";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Script } from "@/components/content/Script";
import { Radio } from "@/features/exercises/Radio";
import { Guess } from "@/features/exercises/Guess";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

export default function AuthenticContents() {
  const { category, slug } = useParams();

  let contents;

  switch (category) {
    case "news":
      contents = authenticContentsNewsRoutes;
      break;

    case "ted-ed":
      contents = authenticContentsTedEdRoutes;
      break;

    default:
      contents = undefined;
  }

  const content =
    slug && contents ? contents[slug as keyof typeof contents] : undefined;

  if (!content) {
    return <h1>Authentic content not found.</h1>;
  }

  return (
    <>
      <Whiteboard {...content.whiteboard} />

      <PageSections>
        <Section id="Before watching" heading={3}>
          <List {...content.sections.beforeWatching} />
        </Section>

        <Section id="Vocabulary" heading={3}>
          <Carousel aspectRatio="square" {...content.sections.vocabulary} />
        </Section>

        <Section id="Gist" heading={3}>
          <VideoPlayer {...content.sections.gist.videoPlayer} />
          <Radio {...content.sections.gist.radio} />
        </Section>

        <Section id="Details" heading={3}>
          <Radio {...content.sections.details.radio} />
          <Script {...content.sections.script} />
        </Section>

        <Section id="Practice" heading={3}>
          <Guess {...content.sections.practice.guess} />
          <FillInTheBlanks {...content.sections.practice.fillInTheBlanks} />
          <Unscramble {...content.sections.practice.unscramble} />
        </Section>

        <Section id="Follow-up discussion" heading={3}>
          <List {...content.sections.followUp.list} />
        </Section>
      </PageSections>
    </>
  );
}
