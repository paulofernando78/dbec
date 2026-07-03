import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";
import { Carousel } from "@/components/ui/Carousel";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Radio } from "@/features/exercises/Radio";
import { Guess } from "@/features/exercises/Guess";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";
import { Script } from "@/components/content/Script";

import { useParams } from "react-router";

import { news as advancedNews } from "@/data/cefr/advanced/news/index";

export default function Articles() {
  const { level, category, slug } = useParams();

  let articles;

  if (level === "advanced") {
    switch (category) {
      case "news":
        articles = advancedNews;
        break;

      // case "ted-ed":
      //   articles = advancedTedEd;
      //   break;
    }
  }

  const article =
    slug && articles ? articles[slug as keyof typeof articles] : undefined;

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
          <Script {...article.sections.script} />
        </Section>
        <Section id="Practice" heading={3}>
          <>
            <Guess {...article.sections.practice.guess} />
            <FillInTheBlanks {...article.sections.practice.fillInTheBlanks} />
            <Unscramble {...article.sections.practice.unscramble} />
          </>
        </Section>
        <Section id="Follow-up discussion" heading={3}>
          <List {...article.sections.followUp.list} />
        </Section>
      </PageSections>
    </>
  );
}
