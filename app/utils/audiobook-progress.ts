const audiobookProgressKey = (slug: string) =>
  `dbec_audiobook_${slug}_completed`;

export function isAudiobookCompleted(slug: string) {
  return localStorage.getItem(audiobookProgressKey(slug)) === "1";
}

export function completeAudiobook(slug: string) {
  localStorage.setItem(audiobookProgressKey(slug), "1");
}

export function resetAudiobook(slug: string) {
  localStorage.removeItem(audiobookProgressKey(slug));
}
