import { newZealandAdventure } from "./a-new-zealand-adventure";
import { flyingHome } from "./flying-home";
import { marcelAndTheWhiteStar } from "./marcel-and-the-white-star";
import { newspaperChase } from "./newspaper-chase";
import { simonAndTheSpy } from "./simon-and-the-spy";
import { theFireboy } from "./the-fireboy";
import { theLastPhoto } from "./the-last-photo";
import { theLeopardAndTheLighthouse } from "./the-leopard-and-the-lighthouse";
import { thePearlGirl } from "./the-pearl-girl";
import { whoWantsToBeAStar } from "./who-wants-to-be-a-star";

const withSectionAudioPaths = <
  T extends {
    slug: string;
    sections: readonly { id: string }[];
  },
>(audiobook: T) => ({
  ...audiobook,
  sections: audiobook.sections.map((section) => ({
    ...section,
    localAudio: `local-media/audio/audiobooks/starter/${audiobook.slug}/${section.id}.mp3`,
    r2Audio: `/media/audio/audiobooks/starter/${audiobook.slug}/${section.id}.mp3`,
  })),
});

export const audiobooks = {
  [newZealandAdventure.slug]: withSectionAudioPaths(newZealandAdventure),
  [flyingHome.slug]: withSectionAudioPaths(flyingHome),
  [marcelAndTheWhiteStar.slug]: withSectionAudioPaths(marcelAndTheWhiteStar),
  [newspaperChase.slug]: withSectionAudioPaths(newspaperChase),
  [simonAndTheSpy.slug]: withSectionAudioPaths(simonAndTheSpy),
  [theFireboy.slug]: withSectionAudioPaths(theFireboy),
  [theLastPhoto.slug]: withSectionAudioPaths(theLastPhoto),
  [theLeopardAndTheLighthouse.slug]: withSectionAudioPaths(
    theLeopardAndTheLighthouse,
  ),
  [thePearlGirl.slug]: withSectionAudioPaths(thePearlGirl),
  [whoWantsToBeAStar.slug]: withSectionAudioPaths(whoWantsToBeAStar),
};

export type AudiobookSlug = keyof typeof audiobooks;

export const availableAudiobookSlugs: ReadonlySet<AudiobookSlug> = new Set([
  "a-new-zealand-adventure",
]);
