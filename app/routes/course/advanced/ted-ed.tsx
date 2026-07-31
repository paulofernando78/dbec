import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard";

import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

const lessons = authenticContentTedEdLessons;

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
