export type DictionaryExample = {
  enExample?: string;
  ptExample?: string;
};

export type DictionaryNote = {
  enNote?: string;
  ptNote?: string;
};

export type DictionaryImage = {
  src?: string;
  alt?: string;
};

export type DictionaryDefinition = {
  word: string;
  phonetics?: string;
  partOfSpeech?: string;
  enDefinition?: string;
  ptDefinition?: string;
  examples?: DictionaryExample[];
  synonyms?: string[] | string;
  antonyms?: string[] | string;
  seeAlso?: string[] | string;
  notes?: DictionaryNote[];
  imgs?: DictionaryImage[];
};

type DictionaryEntry = {
  definitions?: DictionaryDefinition[];
};

export const loadDictionaryLetter = async (
  letter: string,
): Promise<unknown> => {
  const response = await fetch(`/data/dictionary/${letter}.json`);
  return response.json();
};

export const flattenDictionaryDefinitions = (
  data: unknown,
): DictionaryDefinition[] => {
  const entries = (Array.isArray(data) ? data : [data]) as DictionaryEntry[];

  return entries
    .flatMap((entry) => entry?.definitions || [])
    .filter(
      (definition): definition is DictionaryDefinition =>
        typeof definition?.word === "string",
    );
};

export const loadDictionaryWord = async (
  word: string,
): Promise<DictionaryDefinition | null> => {
  if (!word) return null;

  const firstLetter = word[0].toLowerCase();
  const data = await loadDictionaryLetter(firstLetter);

  return (
    flattenDictionaryDefinitions(data).find(
      (item) => item.word?.toLowerCase() === word.toLowerCase(),
    ) || null
  );
};
