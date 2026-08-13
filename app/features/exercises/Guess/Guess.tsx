import { useState, useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image/";
import { dictionary } from "@/helpers/content";

import { loadDictionaryWord } from "@/utils/loadDictionaryWord";

import { RotateCcw } from "lucide-react";

export type GuessWord = {
  word: string;
  img?: number;
  src?: string;
  alt?: string;
  meaning?: string;
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

export type GuessProps = {
  words: GuessWord[];
};

export const Guess = ({ words }: GuessProps) => {
  const wordsSignature = JSON.stringify(words);
  // STEP 1: Create all keyboard letters
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ'".split("");

  // STEP 2: Store clicked/used letters
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // STEP 3: Store current selected word
  const [selected, setSelectedWord] = useState<DictionaryWord | null>(null);

  const [message, setMessage] = useState<string>("");

  // STEP 4: Store attempts/errors count
  const [attempts, setAttempts] = useState<number>(0);
  const maxAttempts = selected ? Math.max(5, selected.word.length + 1) : 5;

  // STEP 5: Store current game status
  const [status, setStatus] = useState<"playing" | "win" | "lose">("playing");

  // STEP 6: Store completed words
  const [completeWords, setCompleteWords] = useState<string[]>([]);

  const loadWord = async (word: string) => {
    try {
      const foundWord = await loadDictionaryWord(word);
      setSelectedWord(foundWord ?? { word });
    } catch {
      setSelectedWord({ word });
    }
  };

  useEffect(() => {
    const currentWord = words[currentIndex];
    if (!currentWord) {
      setSelectedWord(null);
      return;
    }

    loadWord(currentWord.word);
  }, [currentIndex, wordsSignature]);

  // STEP 7: Move to next word and reset round state
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

  // STEP 8: Restart full game
  const resetGame = () => {
    setCurrentIndex(0);
    if (words[0]) loadWord(words[0].word);
    setUsedLetters([]);
    setAttempts(0);
    setMessage("");
    setStatus("playing");
    setCompleteWords([]);
  };

  // STEP 9: Handle letter click logic
  const handleLetterClick = (letter: string) => {
    if (!selected) return;

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
          .filter((char) => /[A-Z']/.test(char)),
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

  const currentWord = words[currentIndex];

  if (!words.length) return null;
  if (!selected || !currentWord) return <span>Loading...</span>;

  const dictionaryImage = selected.imgs?.[currentWord.img ?? 0];
  const imageSrc = currentWord.src ?? dictionaryImage?.src;
  const imageAlt = currentWord.alt ?? dictionaryImage?.alt ?? selected.word;
  const meaning = currentWord.meaning ?? selected.enDefinition;

  return (
    <div className="mb-4">
      <p className="mb-4">
        <b>Click the letters to reveal the answer.</b>
      </p>
      <div className="grid grid-cols-2 gap-2 max-[920px]:grid-cols-1">
        <div className="flex flex-col gap-4 justify-between">
          <span className="text-center">
            <b>Word:</b> {currentIndex + 1} | {words.length}
          </span>
          {imageSrc && (
            <Image
              src={currentWord.src ? imageSrc : dictionary(imageSrc)}
              alt={imageAlt}
              width={300}
              height={300}
              className="rounded-lg"
            />
          )}

          {/* Meaning */}
          {meaning && (
            <span className="w-full h-20 p-2 border border-gray-400 rounded-lg overflow-scroll">
              <b>Meaning:</b> {meaning}
            </span>
          )}
          {!imageSrc && !meaning && (
            <span className="w-full p-3 border border-gray-400 rounded-lg">
              Review the key vocabulary from the Introduction.
            </span>
          )}
        </div>

        {/* !!! */}

        <div className="flex flex-col items-center gap-4 justify-between">
          {/* STEP 10: Show attempts counter */}
          <span>
            <b>Attempts:</b> {attempts} | {maxAttempts}
          </span>
          {/* STEP 11: Display hidden/revealed word */}
          <div className="h-8.75">{message && <span>{message}</span>}</div>
          {/* _ _ _ _ _ */}
          <span>
            {selected.word
              .toUpperCase()
              .split("")
              .map((char, index) => (
                <span
                  key={index}
                  className="inline-flex items-center justify-center w-8 text-2xl"
                >
                  {char === " "
                    ? "\u2002"
                    : !/[A-Z']/.test(char) || usedLetters.includes(char)
                      ? char
                      : "_"}
                </span>
              ))}
          </span>
          <div className=" flex flex-wrap justify-center gap-4">
            {/* STEP 12: Create one button for each letter */}
            {letters.map((letter, index) => (
              <Button
                // STEP 13: Disable used letters and stop clicks after win/lose
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
          <div className="w-full h-20 p-2 border border-gray-400 rounded-lg overflow-scroll">
            <b>Completed:</b>
            {completeWords.length > 0 && <div>{completeWords.join(" • ")}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
