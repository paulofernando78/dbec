import { useParams } from "react-router";
import type { ComponentProps } from "react";

import { template } from "@/data/authentic-content/template";

// Content routes
import { authenticContentsNewsRoutes } from "@/data/authentic-content/news";
import { authenticContentsTedEdRoutes } from "@/data/authentic-content/ted-ed";
import { authenticContentNewsLessonsCardData } from "@/data/authentic-content/news/news-card-data";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";
import { ImageQuiz } from "@/features/exercises/ImageQuiz";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Script } from "@/components/content/Script";
import { Radio } from "@/features/exercises/Radio";
import { Guess } from "@/features/exercises/Guess";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

export default function AuthenticContents() {
  const { category, slug } = useParams();

  let content;

  if (category === "template") {
    content = template;
  } else {
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

    content =
      slug && contents ? contents[slug as keyof typeof contents] : undefined;
  }

  if (!content) {
    return <h1>Authentic content not found.</h1>;
  }

  const guessFillInTheBlanks = (
    content.sections.practice as typeof content.sections.practice & {
      guessFillInTheBlanks?: ComponentProps<typeof FillInTheBlanks>;
    }
  ).guessFillInTheBlanks;

  const lessonHref = `/authentic-content/${category}/${slug}`;
  const lessonCard =
    category === "news"
      ? Object.values(authenticContentNewsLessonsCardData).find(
          (card) => card.href === lessonHref,
        )
      : category === "ted-ed"
        ? authenticContentTedEdLessons.find((card) => card.href === lessonHref)
        : undefined;
  const displayedWhiteboard = lessonCard
    ? {
        ...content.whiteboard,
        title: "AUTHENTIC CONTENT",
        subtitle: lessonCard.label,
        date: lessonCard.date,
        time: lessonCard.duration,
      }
    : content.whiteboard;

  return (
    <>
      <Whiteboard {...displayedWhiteboard} />
      <div>
        {lessonCard && (
          <LessonCard {...lessonCard} numbered={false} />
        )}

        <PageSections>
          <Section id="Before watching" heading={3}>
            <List {...content.sections.beforeWatching} />
          </Section>

          <Section id="Vocabulary" heading={3}>
            <ImageQuiz {...content.sections.vocabulary} />
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
            {guessFillInTheBlanks && (
              <FillInTheBlanks {...guessFillInTheBlanks} />
            )}
            <FillInTheBlanks {...content.sections.practice.fillInTheBlanks} />
            <Unscramble {...content.sections.practice.unscramble} />
          </Section>

          <Section id="Follow-up discussion" heading={3}>
            <List {...content.sections.followUp.list} />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
