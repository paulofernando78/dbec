import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { advancedNewsLessons } from "@/data/cefr/advanced/news/news-lessons-card-data";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="News" subtitle="A variety of short news clips from CNN, BBC, and other sources." />
      <LessonCard {...advancedNewsLessons.ismalKoneBreaksLeg} />
    </>
  );
}
