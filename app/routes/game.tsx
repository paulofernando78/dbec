import { LibraryPage } from "@/components/content/LibraryPage";
import { authenticContentNewsLessonsCardData } from "@/data/authentic-content/news/news-card-data";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";
import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";
import { gamesLucasArtsCardData } from "@/data/games/lucas-arts/games-lucas-arts-card-data";

const courseLessonCount =
  courseLessonsCardData.beginner.length +
  courseLessonsCardData.elementary.length +
  courseLessonsCardData.intermediate.length +
  courseLessonsCardData.upperIntermediate.length;

const authenticContentLessonCount =
  Object.values(authenticContentNewsLessonsCardData).length +
  authenticContentTedEdLessons.length;

const gameSections = [
  {
    label: "Lucas Arts Games",
    numbered: false,
    lessons: Object.values(gamesLucasArtsCardData),
  },
];

export default function Game() {
  return (
    <LibraryPage
      title="GAMES"
      sections={gameSections}
      startIndex={courseLessonCount + authenticContentLessonCount}
    />
  );
}
