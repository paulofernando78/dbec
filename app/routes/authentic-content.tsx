import { LibraryPage } from "@/components/content/LibraryPage";
import { AuthenticContent as AuthenticContentIcon } from "@/components/Icons";
import { authenticContentNewsLessonsCardData } from "@/data/authentic-content/news/news-card-data";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

const authenticContentSections = [
  {
    label: "News",
    numbered: false,
    lessons: Object.values(authenticContentNewsLessonsCardData),
  },
  {
    label: "TED-Ed",
    numbered: false,
    lessons: authenticContentTedEdLessons,
  },
];

export default function AuthenticContent() {
  return (
    <LibraryPage
      title="AUTHENTIC CONTENT"
      sections={authenticContentSections}
      headerIcon={AuthenticContentIcon}
    />
  );
}
