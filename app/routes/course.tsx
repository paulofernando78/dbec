import { LibraryPage } from "@/components/content/LibraryPage";
import { courseSyllabusSections } from "@/data/course/course-syllabus-sections";

export default function Course() {
  return <LibraryPage title="COURSE" sections={courseSyllabusSections} />;
}
