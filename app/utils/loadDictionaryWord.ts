export const loadDictionaryLetter = async (letter) => {
  const response = await fetch(`/data/dictionary/${letter}.json`);
  return response.json();
};

export const flattenDictionaryDefinitions = (data) => {
  const entries = Array.isArray(data) ? data : [data];

  return entries.flatMap((entry) => entry?.definitions || []);
};

export const loadDictionaryWord = async (word) => {
  if (!word) return null;

  const firstLetter = word[0].toLowerCase();
  const data = await loadDictionaryLetter(firstLetter);

  return (
    flattenDictionaryDefinitions(data)
      .find((item) => item.word?.toLowerCase() === word.toLowerCase()) || null
  );
};
