import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { SubSection } from "@/components/content/SubSection";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/misc/ted-ed";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Ted-Ed" subtitle="Student Talks" />
      <LessonCard {...lessons.whatCausesConstipation} />
      <LessonCard {...lessons.whenWillNextIceAgeHappen} />
      <LessonCard {...lessons.ancientOriginsBeer} />
      <LessonCard {...lessons.howMemoryWorks} />
    </>
  );
}
