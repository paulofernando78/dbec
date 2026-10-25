import { useNavigate, useParams } from "react-router";
import type { ComponentProps } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

import { template } from "@/data/authentic-content/template";

// Content routes
import { authenticContentsTedEdRoutes } from "@/data/authentic-content/ted-ed";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

import { PageHeader } from "@/components/content/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/content/List";
import { ImageQuiz } from "@/features/exercises/ImageQuiz";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Script } from "@/components/content/Script";
import { Radio } from "@/features/exercises/Radio";
import { Guess } from "@/features/exercises/Guess";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

const lessonSteps = [
  { slug: "before-watching", label: "Before watching" },
  { slug: "vocabulary", label: "Vocabulary" },
  { slug: "gist", label: "Gist" },
  { slug: "details", label: "Details" },
  { slug: "practice", label: "Practice" },
  { slug: "follow-up-discussion", label: "Follow-up discussion" },
] as const;

export default function AuthenticContents() {
  const navigate = useNavigate();
  const { category, slug, step = "before-watching" } = useParams();
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

  if (!content) {
    return <h1>Authentic content not found.</h1>;
  }

  const guessFillInTheBlanks = (
    content.sections.practice as typeof content.sections.practice & {
      guessFillInTheBlanks?: ComponentProps<typeof FillInTheBlanks>;
    }
  ).guessFillInTheBlanks;

  const stepIndex = Math.max(
    0,
    lessonSteps.findIndex((item) => item.slug === step),
  );
  const current = lessonSteps[stepIndex];
  const previous = lessonSteps[stepIndex - 1];
  const next = lessonSteps[stepIndex + 1];
  const basePath = `/authentic-content/${category}/${slug}`;
  const go = (stepSlug: string) => navigate(`${basePath}/${stepSlug}`);
  const finish = async () => {
    if (lessonCard) {
      try {
        await fetch("/api/lesson-progress", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lessonId: lessonHref, completed: true }),
        });
      } finally {
        navigate("/authentic-content");
      }
      return;
    }

    navigate("/authentic-content");
  };

  const stepContent = {
    "before-watching": (
      <Card inset>
        <List {...content.sections.beforeWatching} />
      </Card>
    ),
    vocabulary: (
      <Card inset>
        <ImageQuiz {...content.sections.vocabulary} />
      </Card>
    ),
    gist: (
      <Card className="grid gap-4">
        <div className="rounded-xl bg-(--background) p-4">
          <VideoPlayer {...content.sections.gist.videoPlayer} />
        </div>
        <div className="rounded-xl bg-(--background) p-4">
          <Radio {...content.sections.gist.radio} />
        </div>
      </Card>
    ),
    details: (
      <Card className="grid gap-4">
        <div className="rounded-xl bg-(--background) p-4">
          <Radio {...content.sections.details.radio} />
        </div>
        <div className="rounded-xl bg-(--background) p-4">
          <Script {...content.sections.script} />
        </div>
      </Card>
    ),
    practice: (
      <Card className="grid gap-4">
        <div className="rounded-xl bg-(--background) p-4">
          <Guess {...content.sections.practice.guess} />
        </div>
        {guessFillInTheBlanks && (
          <div className="rounded-xl bg-(--background) p-4">
            <FillInTheBlanks {...guessFillInTheBlanks} />
          </div>
        )}
        <div className="rounded-xl bg-(--background) p-4">
          <FillInTheBlanks {...content.sections.practice.fillInTheBlanks} />
        </div>
        <div className="rounded-xl bg-(--background) p-4">
          <Unscramble {...content.sections.practice.unscramble} />
        </div>
      </Card>
    ),
    "follow-up-discussion": (
      <Card inset>
        <List {...content.sections.followUp.list} />
      </Card>
    ),
  }[current.slug];

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Authentic Content"
        description="Learn English with authentic videos and real-world topics."
      />

      {lessonCard && (
        <header className="grid grid-cols-2 overflow-hidden rounded-xl border border-slate-300 max-[560px]:grid-cols-1">
          <div className="bg-gray-200 p-4">
            <p className="text-xs font-bold uppercase text-orange-700">
              TED-Ed
            </p>
            <h2 className="text-xl font-black">{lessonCard.date}</h2>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <CalendarDays size={18} /> Published lesson
            </p>
          </div>
          <div className="border-l border-slate-300 p-4 max-[560px]:border-l-0 max-[560px]:border-t">
            <p className="text-xs font-bold uppercase text-orange-700">
              Lesson
            </p>
            <h1 className="text-xl font-black">{lessonCard.label}</h1>
            <p className="text-slate-500">{lessonCard.description}</p>
          </div>
        </header>
      )}

      <p className="mb-12 mt-4 inline-block rounded-full border border-gray-300 px-3 py-1 text-sm font-bold">
        {current.label} — Step {stepIndex + 1} of {lessonSteps.length}
      </p>

      {stepContent}

      <nav
        className="mt-4 grid grid-cols-[auto_1fr_1fr_auto] items-center gap-3"
        aria-label="Lesson steps"
      >
        <Button
          ariaLabel="Previous step"
          onClick={() =>
            previous ? go(previous.slug) : navigate("/authentic-content")
          }
          icon={<ChevronLeft />}
        />
        <b>{previous?.label ?? "Authentic Content"}</b>
        <b className="text-right">{next?.label ?? "Authentic Content"}</b>
        <Button
          ariaLabel="Next step"
          onClick={() => (next ? go(next.slug) : void finish())}
          icon={<ChevronRight />}
        />
      </nav>
    </div>
  );
}
