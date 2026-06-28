import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";
import { Carousel } from "@/components/ui/Carousel";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";
import { Collapsible } from "@/components/content/Collapsible";

import { useParams } from "react-router";
import { news } from "@/data/misc/news/index";

export default function Articles() {
  const { slug } = useParams();

  const article = slug ? news[slug as keyof typeof news] : undefined;

  if (!article) {
    return <h1>Article not found.</h1>;
  }

  return (
    <>
      <Whiteboard {...article.whiteboard} />
      <PageSections>
        <Section id="Before watching" heading={3}>
          <List {...article.sections.beforeWatching} />
        </Section>
        <Section id="Vocabulary" heading={3}>
          <Carousel aspectRatio="square" {...article.sections.vocabulary} />
        </Section>
        <Section id="Gist" heading={3}>
          <VideoPlayer {...article.sections.gist.videoPlayer} />
          <Radio {...article.sections.gist.radio} />
        </Section>
        <Section id="Details" heading={3}>
          <Radio {...article.sections.details.radio} />
          <FillInTheBlanks {...article.sections.details.fillInTheBlanks} />
          <Unscramble {...article.sections.details.unscramble} />
        </Section>
        <Section id="Follow-up discussion" heading={3}>
          <List {...article.sections.followUp.list} />
        </Section>
        <Section id="Script" heading={3}>
          <Collapsible {...article.sections.script} />
        </Section>
      </PageSections>
    </>
  );
}
