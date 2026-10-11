import { LibraryPage } from "@/components/content/LibraryPage";
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
    <LibraryPage
      title="GAMES"
      sections={gameSections}
    />
  );
}
