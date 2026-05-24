import { useState, useEffect } from "react";


import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image/";
import { dictionary } from "@/helpers/content";

import { loadDictionaryWord } from "@/utils/loadDictionaryWord";

import { RotateCcw} from 'lucide-react';

import styles from "./Guess.module.css";

type GuessWord = {
  word: string;
  img?: number;
};

type DictionaryImage = {
  src?: string;
  alt?: string;
};

type DictionaryWord = {
  word: string;
  enDefinition?: string;
  imgs?: DictionaryImage[];
};

type GuessProps = {
  words: GuessWord[];
};

export const Guess = ({ words }: GuessProps) => {
  // STEP 1: Create alphabet letters for all keyboard buttons
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ'".split("");

  // STEP 2: State to store clicked/used letters
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // STEP 3: Future state for the selected secret word
  const [selected, setSelectedWord] = useState<DictionaryWord | null>(null);

  const [message, setMessage] = useState<string>("");

  // STEP 4: Future state for attempts/errors
  const [attempts, setAttempts] = useState<number>(0);
  const maxAttempts = selected ? Math.max(5, selected.word.length + 1) : 5;

  // STEP 5: Future state for game result
  const [status, setStatus] = useState<
    "playing" | "win" | "lose"
  >("playing");

  // STEP ???
  const [completeWords, setCompleteWords] = useState<string[]>([]);

  const loadWord = async (word: string) => {
    const foundWord = await loadDictionaryWord(word);
    setSelectedWord(foundWord);
  };

  useEffect(() => {
    loadWord(words[currentIndex].word);
  }, [currentIndex, words]);

  // STEP 5.1: Move to next word and reset round state
  const nextWord = () => {
    const nextIndex = currentIndex + 1;

    // If there are no more words, finish game on last success
    if (nextIndex >= words.length) {
      setMessage("Great job!");
      setStatus("win");
      return;
    }

    setCurrentIndex(nextIndex);
    setUsedLetters([]);
    setAttempts(0);
    setMessage("");
    setStatus("playing");
  };

  // STEP 5.2: Restart full game from first word
  const resetGame = () => {
    setCurrentIndex(0);
    loadWord(words[0].word);
    setUsedLetters([]);
    setAttempts(0);
    setMessage("");
    setStatus("playing");
    setCompleteWords([]);
  };

  // STEP 11: Build click function logic
  const handleLetterClick = (
    letter: string
  ) => {
    if (!selected) return 

    // 1. Check if letter was already used - if yes -> stop function
    if (usedLetters.includes(letter)) return;

    // 2. Save clicked letter in usedLetters state
    setUsedLetters((prev) => [...prev, letter]);

    // 3. Check if clicked letter exists in selected word
    const isCorrectLetter = selected.word.toUpperCase().includes(letter);
    const isWrongLetter = !isCorrectLetter;

    if (isWrongLetter) {
      // (clicked letter is NOT in secret word)
      const nextAttempts = attempts + 1; // add one mistake
      setAttempts(nextAttempts);

      // 4. Check lose condition
      if (nextAttempts >= maxAttempts) {
        setMessage("Try again!");
        setStatus("lose");
        return;
      }
    }

    // 5. Check win condition
    // Need all unique letters discovered:
    const uniqueLetters = [
      ...new Set(
        selected.word
          .toUpperCase()
          .split("")
          .filter((char) => char !== " "),
      ),
    ];
    // const hasWon = uniqueLetters.every((item) =>
    const hasWon = uniqueLetters.every(
      (item) => usedLetters.includes(item) || item === letter,
    );

    const praise = [
      "Good!",
      "Awesome!",
      "Great!",
      "Excellent!",
      "Nice!",
      "Well done!",
    ];

    if (hasWon) {
      setCompleteWords((prev) => [...prev, selected.word]);
      const randomMessage = praise[Math.floor(Math.random() * praise.length)];

      setMessage(randomMessage);
      setStatus("win");

      setTimeout(() => {
        nextWord();
      }, 2000);
    }

    // 6. If no win / lose:
    // keep status = playing
  };

  if (!selected) return <span>Loading...</span>;

  return (
    <>
      <p>
        <b>Click the letters to reveal the answer.</b>
      </p>
      <span className={styles.title}>Guess?</span>
      <div className={styles.container}>
        <div className={styles.imgHint}>
          {/* Pics */}
          <span className={styles.pics}>
            <b>Pics:</b> {currentIndex + 1} | {words.length}
          </span>
          <Image
            src={dictionary(
              selected?.imgs?.[words[currentIndex].img ?? 0]?.src || "",
            )}
            alt={
              selected?.imgs?.[words[currentIndex].img ?? 0]?.alt ||
              selected.word
            }
            width={300}
            height={300}
          />

          {/* Hints */}
          <span className={styles.hint}>
            <b>Hint:</b> {selected?.enDefinition}
          </span>
        </div>
        <div className={styles.containerLetters}>
          {/* STEP 9: Show attempts counter */}
          <span>
            <b>Attempts:</b> {attempts} | {maxAttempts}
          </span>
          {/* STEP 10: Show hidden/revealed word here */}
          <div className={styles.message}>
            {message && <span>{message}</span>}
          </div>
          {/* _ _ _ _ _ */}
          <span className={styles.wordDisplay}>
            {selected.word
              .toUpperCase()
              .split("")
              .map((char, index) => (
                <span key={index} className={styles.word}>
                  {char === " "
                    ? "\u2002"
                    : usedLetters.includes(char)
                      ? char
                      : "_"}
                </span>
              ))}
          </span>
          <div className={styles.letters}>
            {/* STEP 7: Create one button for each letter */}
            {letters.map((letter, index) => (
              <Button
                // STEP 8: Later add:
                disabled={usedLetters.includes(letter) || status !== "playing"}
                onClick={() => {
                  handleLetterClick(letter);
                }}
                key={letter}
                icon={letter}
              />
            ))}
          </div>
          <Button icon={<RotateCcw />} onClick={resetGame} />
          <div className={styles.completed}>
            <b>Completed:</b>
            {completeWords.length > 0 && <div>{completeWords.join(" • ")}</div>}
          </div>
        </div>
      </div>
    </>
  );
};
