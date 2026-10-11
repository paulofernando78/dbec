import { LibraryPage } from "@/components/content/LibraryPage";
import { AuthenticContent as AuthenticContentIcon } from "@/components/Icons";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

const authenticContentSections = [
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
