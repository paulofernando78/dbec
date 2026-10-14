import { useEffect, useState } from "react";

import { Whiteboard } from "@/components/content/Whiteboard";
import { LibraryPage } from "@/components/content/LibraryPage";
import { AuthenticContent as AuthenticContentIcon } from "@/components/Icons";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

const tedEdLessonGroups = authenticContentTedEdLessons.reduce<
  Array<{
    label: string;
    lessons: typeof authenticContentTedEdLessons;
  }>
>((groups, lesson) => {
  const year = lesson.publishedAt.slice(0, 4);
  const currentGroup = groups.at(-1);

  if (currentGroup?.label === year) {
    currentGroup.lessons.push(lesson);
  } else {
    groups.push({ label: year, lessons: [lesson] });
  }

  return groups;
}, []);

const authenticContentSections = [
  {
    label: "TED-Ed",
    numbered: false,
    groups: tedEdLessonGroups,
  },
];

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
      <Whiteboard title="Authentic Content" />
      <LibraryPage
        showTableOfContents={false}
        title="AUTHENTIC CONTENT"
        sections={authenticContentSections}
        headerIcon={AuthenticContentIcon}
        lessonCompletion={lessonCompletion}
        onLessonCompletionChange={saveLessonCompletion}
      />
    </div>
  );
}
