export function formatSectionLabel(id = "") {
  return id
    // Split the slug into separate words: "audio-player" -> ["audio", "player"]
    .split("-")
    // Remove empty pieces in case the id has extra hyphens
    .filter(Boolean)
    // Capitalize each word: "audio" -> "Audio"
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    // Join the words back into a readable label
    .join(" ");
}
