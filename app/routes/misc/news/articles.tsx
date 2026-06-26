import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { LessonCard } from "@/components/content/LessonCard";
import { Paragraph } from "@/components/content/Paragraph";
import { List } from "@/components/content/List";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Ribbon } from "@/components/ui/Ribbon";

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

      <LessonCard lessonObjective={article.card} />

      <Section id="Before watching" heading={3}>
        <Paragraph value={article.sections.beforeWatching.paragraph} />
        <List {...article.sections.beforeWatching.list} />
      </Section>

      <Ribbon label="Vocabulary" />
      <List {...article.sections.vocabulary.list} />

      <Section id="Gist" heading={3}>
        <Paragraph value={article.sections.gist.paragraph} />
        <VideoPlayer {...article.sections.gist.videoPlayer} />
        <Radio {...article.sections.gist.radio} />
      </Section>

      <Section id="Details" heading={3}>
        <Paragraph value={article.sections.details.paragraph} />
        <Radio {...article.sections.details.radio} />
        <FillInTheBlanks {...article.sections.details.fillInTheBlanks} />
      </Section>

      <Section id="Follow-up discussion" heading={3}>
        <Paragraph value={article.sections.followUp.paragraph} />
        <List {...article.sections.followUp.list} />
      </Section>
    </>
  );
}
