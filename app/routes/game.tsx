import { LibraryPage } from "@/components/content/LibraryPage";
import { PageHeader } from "@/components/content/PageHeader";
import { gamesLucasArtsCardData } from "@/data/games/lucas-arts/games-lucas-arts-card-data";

const gameSections = [
  {
    label: "Lucas Arts Games",
    numbered: false,
    lessons: Object.values(gamesLucasArtsCardData),
  },
];

export default function Game() {
  return (
    <div>
      <PageHeader title="Games" />
      <LibraryPage
        showTableOfContents={false}
        title="GAMES"
        sections={gameSections}
      />
    </div>
  );
}
