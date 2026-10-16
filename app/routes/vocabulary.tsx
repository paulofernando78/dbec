import { BookOpenText } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { LibraryPage } from "@/components/content/LibraryPage";

const vocabularySections = [
  {
    label: "Which one?",
    numbered: false,
    lessons: [
      {
        label: "Hear vs. Listen",
        description: "Learn when to use hear and listen in everyday English.",
      },
      {
        label: "Speak vs. Say vs. Tell",
        description: "Understand the differences between speak, say, and tell.",
      },
    ],
  },
];

export default function Vocabulary() {
  return (
    <div>
      <PageHeader title="Vocabulary" />
      <LibraryPage
        showTableOfContents={false}
        title="VOCABULARY"
        sections={vocabularySections}
        headerIcon={BookOpenText}
      />
    </div>
  );
}
