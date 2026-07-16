import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { advancedTedEdLessons } from "@/data/cefr/advanced/ted-ed/ted-ed-lessons-card-data";


export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Ted-Ed" subtitle="A variety of videos from Ted-Education Site" />
      <LessonCard {...advancedTedEdLessons.whatCausesConstipation} />
      <LessonCard {...advancedTedEdLessons.whenWillTheNextIceAgeHappen} />
      <LessonCard {...advancedTedEdLessons.howToManageEmotions} />
      <LessonCard {...advancedTedEdLessons.howDidAncientCivilizationsBrewBeer} />
    </>
  );
}
