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

export const audiobooks = {
  [newZealandAdventure.slug]: newZealandAdventure,
  [flyingHome.slug]: flyingHome,
  [marcelAndTheWhiteStar.slug]: marcelAndTheWhiteStar,
  [newspaperChase.slug]: newspaperChase,
  [simonAndTheSpy.slug]: simonAndTheSpy,
  [theFireboy.slug]: theFireboy,
  [theLastPhoto.slug]: theLastPhoto,
  [theLeopardAndTheLighthouse.slug]: theLeopardAndTheLighthouse,
  [thePearlGirl.slug]: thePearlGirl,
  [whoWantsToBeAStar.slug]: whoWantsToBeAStar,
};

export type AudiobookSlug = keyof typeof audiobooks;
