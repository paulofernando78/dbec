import { BookOpenText } from "lucide-react";

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
        description:
          "Understand the differences between speak, say, and tell.",
      },
    ],
  },
];

export default function Vocabulary() {
  return (
    <LibraryPage
      title="VOCABULARY"
      sections={vocabularySections}
      headerIcon={BookOpenText}
    />
  );
}
