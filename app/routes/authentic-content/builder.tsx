import { useParams } from "react-router";
import { useEffect } from "react";
import type { ComponentProps } from "react";
import { CalendarDays } from "lucide-react";

import { template } from "@/data/authentic-content/template";

// Content routes
import { authenticContentsTedEdRoutes } from "@/data/authentic-content/ted-ed";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";
import { ImageQuiz } from "@/features/exercises/ImageQuiz";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Script } from "@/components/content/Script";
import { Radio } from "@/features/exercises/Radio";
import { Guess } from "@/features/exercises/Guess";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

function useCompleteLessonAtFinalSection(
  lessonHref: string,
  enabled: boolean,
) {
  useEffect(() => {
    if (!enabled) return;

    const finalSection = document.getElementById("Follow-up discussion");
    if (!finalSection) return;

    let hasMarkedComplete = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasMarkedComplete || !entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        hasMarkedComplete = true;
        observer.disconnect();

        void fetch("/api/lesson-progress", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lessonId: lessonHref, completed: true }),
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(finalSection);
    return () => observer.disconnect();
  }, [enabled, lessonHref]);
}

export default function AuthenticContents() {
  const { category, slug } = useParams();
  const lessonHref = `/authentic-content/${category}/${slug}`;
  const lessonCard =
    category === "ted-ed"
      ? authenticContentTedEdLessons.find((card) => card.href === lessonHref)
      : undefined;

  let content;

  if (category === "template") {
    content = template;
  } else {
    let contents;

    switch (category) {
      case "ted-ed":
        contents = authenticContentsTedEdRoutes;
        break;

      default:
        contents = undefined;
    }

    content =
      slug && contents ? contents[slug as keyof typeof contents] : undefined;
  }

  useCompleteLessonAtFinalSection(lessonHref, Boolean(content && lessonCard));

  if (!content) {
    return <h1>Authentic content not found.</h1>;
  }

  const guessFillInTheBlanks = (
    content.sections.practice as typeof content.sections.practice & {
      guessFillInTheBlanks?: ComponentProps<typeof FillInTheBlanks>;
    }
  ).guessFillInTheBlanks;

  return (
    <>
      <PageHeader
        title="Authentic Content"
        description="Learn English with authentic videos and real-world topics."
      />
      <div>
        {lessonCard && (
          <Card className="mb-4 bg-gray-100 p-4!">
            <h2 className="text-2xl font-black text-black">
              {lessonCard.label}
            </h2>
            <p className="text-lg text-slate-500">
              {lessonCard.description}
            </p>
            <div className="mt-3 flex items-center text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={19} className="shrink-0" />
                <span>{lessonCard.date}</span>
              </span>
            </div>
          </Card>
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
