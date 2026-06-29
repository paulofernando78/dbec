import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/cefr/advanced/news/news";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="News" subtitle="A variety of short news clips from CNN, BBC, and other sources." />
      <LessonCard {...lessons.ismalKoneBreaksLeg} />
    </>
  );
}
