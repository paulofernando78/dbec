import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/cefr/advanced/ted-ed/ted-ed-lessons-card-data";


export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Ted-Ed" subtitle="A variety of videos from Ted-Education Site" />
      <LessonCard {...lessons.whatCausesConstipation} />
      <LessonCard {...lessons.whenWillTheNextIceAgeHappen} />
      <LessonCard {...lessons.howToManageEmotions} />
      <LessonCard {...lessons.howDidAncientCivilizationsBrewBeer} />
    </>
  );
}
