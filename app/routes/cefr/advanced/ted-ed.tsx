import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { advancedTedEdLessons } from "@/data/cefr/advanced/ted-ed/ted-ed-lessons-card-data";

const lessons = Object.values(advancedTedEdLessons);

export default function Dashboard() {
  return (
    <>
      <Whiteboard
        title="Ted-Ed"
        subtitle="A variety of videos from Ted-Education Site"
      />
      {lessons.map((lesson, index) => (
        <LessonCard key={lesson.href} index={index} {...lesson} />
      ))}
    </>
  );
}
