import { Navigate, useNavigate, useParams } from "react-router";
import type { ComponentProps } from "react";
import { CalendarDays } from "lucide-react";

import { template } from "@/data/authentic-content/template";

// Content routes
import { authenticContentsTedEdRoutes } from "@/data/authentic-content/ted-ed";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

import { PageHeader } from "@/components/content/PageHeader";
import { SequenceNavigation } from "@/components/content/SequenceNavigation";
import { Card } from "@/components/ui/Card";
import { Image } from "@/components/ui/Image";
import { List } from "@/components/content/List";
import { ImageQuiz } from "@/features/exercises/ImageQuiz";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Script } from "@/components/content/Script";
import { Radio } from "@/features/exercises/Radio";
import { Guess } from "@/features/exercises/Guess";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";
import { VocabularyReview } from "@/components/authentic-content/VocabularyReview";

const lessonSteps = [
  { slug: "before-watching", label: "Before watching" },
  { slug: "vocabulary", label: "Vocabulary" },
  { slug: "gist", label: "Gist" },
  { slug: "details", label: "Details" },
  { slug: "review", label: "Review" },
  { slug: "practice", label: "Practice" },
  { slug: "follow-up-discussion", label: "Follow-up discussion" },
] as const;

const fullMonthNames: Record<string, string> = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

const expandMonthName = (date: string) =>
  date.replace(/^([A-Z][a-z]{2})(?=\s)/, (month) => fullMonthNames[month] ?? month);

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
    return <Navigate to="/authentic-content" replace />;
  }

  const guessFillInTheBlanks = (
    content.sections.practice as typeof content.sections.practice & {
      guessFillInTheBlanks?: ComponentProps<typeof FillInTheBlanks>;
    }
  ).guessFillInTheBlanks;
  const beforeWatching = content.sections.beforeWatching as ComponentProps<
    typeof List
  > & {
    image?: string;
    imageAlt?: string;
  };

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
      <Card className="grid gap-4">
        {beforeWatching.image && (
          <Image
            src={beforeWatching.image}
            alt={beforeWatching.imageAlt ?? "Before watching context"}
            className="aspect-video object-cover"
          />
        )}
        <div className="rounded-xl bg-(--background) p-4">
          <List {...beforeWatching} />
        </div>
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
    review: (
      <Card inset>
        <VocabularyReview words={content.sections.vocabulary.words} />
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
        title="TED-Ed"
        description="Learn English with authentic videos and real-world topics."
      />

      {lessonCard && (
        <header className="grid grid-cols-2 overflow-hidden rounded-xl border border-slate-300 max-[560px]:grid-cols-1">
          <div className="bg-gray-200 p-4">
            <p className="text-xs font-bold uppercase text-orange-700">
              TED-Ed
            </p>
            <h2 className="text-xl font-black">{expandMonthName(lessonCard.date)}</h2>
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

      <SequenceNavigation
        previousLabel={previous?.label ?? "TED-Ed"}
        nextLabel={next?.label ?? "TED-Ed"}
        onPrevious={() => previous ? go(previous.slug) : navigate("/authentic-content")}
        onNext={() => next ? go(next.slug) : void finish()}
        ariaLabel="Lesson steps"
      />
    </div>
  );
}
