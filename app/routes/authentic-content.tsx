import { LibraryPage } from "@/components/content/LibraryPage";
import { AuthenticContent as AuthenticContentIcon } from "@/components/Icons";
import { authenticContentNewsLessonsCardData } from "@/data/authentic-content/news/news-card-data";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";
import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";

const courseLessonCount =
  courseLessonsCardData.beginner.length +
  courseLessonsCardData.elementary.length +
  courseLessonsCardData.intermediate.length +
  courseLessonsCardData.upperIntermediate.length;

const authenticContentSections = [
  {
    label: "News",
    lessons: Object.values(authenticContentNewsLessonsCardData),
  },
  {
    label: "TED-Ed",
    lessons: authenticContentTedEdLessons,
  },
];

export default function AuthenticContent() {
  return (
    <LibraryPage
      title="AUTHENTIC CONTENT"
      sections={authenticContentSections}
      startIndex={courseLessonCount}
      headerIcon={AuthenticContentIcon}
    />
  );
}
