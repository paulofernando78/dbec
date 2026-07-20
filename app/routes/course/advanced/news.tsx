import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { authenticContentNewsLessonsCardData } from "@/data/authentic-content/news/news-card-data";

export default function Dashboard() {
  return (
    <>
      <Whiteboard
        title="News"
        subtitle="A variety of short news clips from CNN, BBC, and other sources."
      />
      <LessonCard
        {...authenticContentNewsLessonsCardData.ismalKoneBreaksLeg}
      />
    </>
  );
}
