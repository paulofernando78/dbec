"use client";

import styles from "./Dictionary.module.css";

import { Button } from "@/components/ui/Button";
import { Portuguese } from "@/components/content/Portuguese";
import { Image } from "@/components/ui/Image";
import { dictionary } from "@/helpers/content";
import {
  flattenDictionaryDefinitions,
  loadDictionaryLetter,
  type DictionaryDefinition,
} from "@/utils/loadDictionaryWord";

import { useState, useEffect, type KeyboardEvent } from "react";
// import { Search, Close } from "@/lib/svg-imports";
import { Search, X, Keyboard, Dot } from "lucide-react";

export const Dictionary = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [definitions, setDefinitions] = useState<DictionaryDefinition[]>([]);

  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");

    Promise.all(
      letters.map(
        (letter) => loadDictionaryLetter(letter).catch(() => null), // se algum não existir, ignora
      ),
    ).then((results) => {
      const allDefinitions = results
        .filter(Boolean)
        .flatMap(flattenDictionaryDefinitions);

      setDefinitions(allDefinitions);
    });
  }, []);

  const normalize = (str = "") =>
    str
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/[^a-z0-9\s']/g, "")
      .trim();

  const searchedWord =
    query.trim() === ""
      ? []
      : definitions
          .filter((item) => {
            if (!item.word) return false;

            const q = normalize(query);
            const queryTokens = q.split(/\s+/);
            const wordTokens = normalize(item.word).split(/\s+/);

            return queryTokens.every((qt) => wordTokens.includes(qt));
          })
          .sort((a, b) => {
            const q = normalize(query);
            const wa = normalize(a.word);
            const wb = normalize(b.word);

            // exact match first
            if (wa === q && wb !== q) return -1;
            if (wb === q && wa !== q) return 1;

            // startsWith next
            if (wa.startsWith(q) && !wb.startsWith(q)) return -1;
            if (wb.startsWith(q) && !wa.startsWith(q)) return 1;

            return 0;
          });

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setOpen(true);
    }

    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {/* <div className="flex">
          <DictionaryBook />
          <span className={styles.title}> Dictionary</span>
        </div> */}
        <div className={styles.wrapper}>
          <input
            type="text"
            placeholder="Dictionary"
            className={styles.input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button icon={<Search />} onClick={() => setOpen(true)}></Button>
          <Button icon={<X />} onClick={() => setOpen(false)}></Button>
        </div>
        <p className={styles.keyWrapper}>
          <Keyboard />
          <span className={styles.key}>
            press &apos;enter&apos; to open · &apos;esc&apos; to close
          </span>
        </p>
      </div>

      {open && (
        <div className={styles.results}>
          {searchedWord.length > 0 ? (
            searchedWord.map((item, index) => (
              <div key={index} className={`${styles.wordCard} line-break`}>
                <div>
                  <div>
                    <span className={styles.word}>{item.word}</span>
                    <span className={styles.partOfSpeech}>
                      {item.partOfSpeech}
                    </span>
                    <span className={styles.phonetics}>{item.phonetics}</span>
                  </div>
                  <div>
                    {item.enDefinition && (
                      <span className={styles.enDefinition}>
                        {item.enDefinition}
                      </span>
                    )}
                    {item.ptDefinition && (
                      <span className={styles.ptDefinition}>
                        <Portuguese>{item.ptDefinition}</Portuguese>
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  {item.examples?.map((example, index) => (
                    <div key={index} className={styles.example}>
                      <Dot />
                      <span className={styles.enExample}>
                        {example.enExample}
                      </span>
                      <span className={styles.ptExample}>
                        <Portuguese>{example.ptExample}</Portuguese>
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  {item.synonyms && (
                    <div>
                      <span className={styles.synomyms}>synonyms:</span>
                      <span>
                        {Array.isArray(item.synonyms)
                          ? item.synonyms.join(", ")
                          : item.synonyms}
                      </span>
                    </div>
                  )}
                  {item.antonyms && (
                    <div>
                      <span className={styles.antonyms}>antonyms:</span>
                      <span>
                        {Array.isArray(item.antonyms)
                          ? item.antonyms.join(", ")
                          : item.antonyms}
                      </span>
                    </div>
                  )}
                  {item.seeAlso && (
                    <div>
                      <span className={styles.seeAlso}>see also:</span>
                      <span>
                        {Array.isArray(item.seeAlso)
                          ? item.seeAlso.join(", ")
                          : item.seeAlso}
                      </span>
                    </div>
                  )}
                </div>

                {item.notes && (
                  <div>
                    <span className={styles.notes}>notes:</span>
                    {item.notes.map((note, index) => (
                      <span key={index}>
                        <span className={styles.enNote}> {note.enNote}</span>
                        <span>
                          <Portuguese>{note.ptNote}</Portuguese>
                        </span>
                      </span>
                    ))}
                  </div>
                )}

                {item.imgs && (
                  <div className={styles.images}>
                    {item.imgs
                      .filter((img) => Boolean(img.src))
                      .map((img, index) => (
                        <Image
                          key={index}
                          src={dictionary(img.src!)}
                          alt={img.alt || item.word || `image-${index}`}
                          width={270}
                          height={270}
                        />
                      ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <span>This word hasn’t been added yet or it doesn’t exist.</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};
