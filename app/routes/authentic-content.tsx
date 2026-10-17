import { useEffect, useState } from "react";

import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { AuthenticDateCard } from "@/components/authentic-content/AuthenticDateCard";
import { AuthenticContent as AuthenticContentIcon } from "@/components/Icons";
import { Section } from "@/components/ui/Section";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

const tedEdYearGroups = authenticContentTedEdLessons.reduce<
  Array<{
    year: string;
    lessons: typeof authenticContentTedEdLessons;
  }>
>((groups, lesson) => {
  const year = lesson.publishedAt.slice(0, 4);
  const currentGroup = groups.at(-1);

  if (currentGroup?.year === year) {
    currentGroup.lessons.push(lesson);
  } else {
    groups.push({
      year,
      lessons: [lesson],
    });
  }

  return groups;
}, []);

export default function AuthenticContent() {
  const [lessonCompletion, setLessonCompletion] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    fetch("/api/lesson-progress")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load lesson progress.");
        return response.json();
      })
      .then((result) => setLessonCompletion(result.lessons ?? {}))
      .catch(() => setLessonCompletion({}));
  }, []);

  const saveLessonCompletion = (lessonId: string, completed: boolean) => {
    const previous = lessonCompletion[lessonId] ?? false;
    setLessonCompletion((current) => ({ ...current, [lessonId]: completed }));

    void fetch("/api/lesson-progress", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, completed }),
    }).then((response) => {
      if (!response.ok) {
        setLessonCompletion((current) => ({
          ...current,
          [lessonId]: previous,
        }));
      }
    });
  };

  return (
    <div>
      <PageHeader title="Authentic Content" />
      <PageSections
        showTableOfContents={false}
        title="AUTHENTIC CONTENT"
        headerIcon={AuthenticContentIcon}
      >
        <Section id="ted-ed" label="TED-Ed">
          {tedEdYearGroups.map((group) => (
            <AuthenticDateCard
              key={group.year}
              year={group.year}
              lessons={group.lessons}
              lessonCompletion={lessonCompletion}
              onLessonCompletionChange={saveLessonCompletion}
            />
          ))}
        </Section>
      </PageSections>
    </div>
  );
}
