import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, Heart, RotateCcw, X } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { getLearningLesson } from "@/data/learning";
import type { LearningExercise } from "@/data/learning/types";
import styles from "./lesson.module.css";

const normalize = (value: string) =>
  value.toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();

function WordOrder({
  exercise,
  answer,
  onChange,
  disabled,
}: {
  exercise: Extract<LearningExercise, { type: "word-order" }>;
  answer: string;
  onChange: (answer: string) => void;
  disabled: boolean;
}) {
  const selected = answer ? answer.split(" ") : [];
  const remaining = exercise.words.filter((word) => !selected.includes(word));

  return (
    <div className={styles.wordOrder}>
      <div className={styles.answerLine}>
        {selected.length === 0 && <span>Tap the words below</span>}
        {selected.map((word) => (
          <button
            type="button"
            key={word}
            disabled={disabled}
            onClick={() => onChange(selected.filter((item) => item !== word).join(" "))}
          >
            {word}
          </button>
        ))}
      </div>
      <div className={styles.wordBank}>
        {remaining.map((word) => (
          <button
            type="button"
            key={word}
            disabled={disabled}
            onClick={() => onChange([...selected, word].join(" "))}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function LearningLessonRoute() {
  const { level = "", unit = "", lesson: slug = "" } = useParams();
  const lesson = useMemo(
    () => getLearningLesson(level, unit, slug),
    [level, unit, slug],
  );
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setIndex(0);
    setAnswer("");
    setResult(null);
    setCorrectAnswers(0);
    setFinished(false);
  }, [lesson?.id]);

  if (!lesson) return <Navigate to="/learn" replace />;

  const exercise = lesson.exercises[index];
  const progress = finished ? 100 : (index / lesson.exercises.length) * 100;

  const checkAnswer = () => {
    const isCorrect = normalize(answer) === normalize(exercise.correctAnswer);
    setResult(isCorrect ? "correct" : "incorrect");
    if (isCorrect) setCorrectAnswers((value) => value + 1);
  };

  const continueLesson = () => {
    if (index === lesson.exercises.length - 1) {
      setFinished(true);
      localStorage.setItem(`learning:${lesson.id}:completed`, "true");
      localStorage.setItem(`learning:${lesson.id}:score`, String(correctAnswers));
      return;
    }
    setIndex((value) => value + 1);
    setAnswer("");
    setResult(null);
  };

  if (finished) {
    return (
      <div className={styles.lessonPage}>
        <div className={styles.completeCard}>
          <div className={styles.completeIcon}><Check size={48} /></div>
          <span>LESSON COMPLETE</span>
          <h1>Great work!</h1>
          <p>{lesson.description}</p>
          <div className={styles.results}>
            <div><strong>+{lesson.xpReward}</strong><span>XP earned</span></div>
            <div><strong>{correctAnswers}/{lesson.exercises.length}</strong><span>correct</span></div>
          </div>
          <div className={styles.summary}>
            <strong>Words practiced</strong>
            <div>{lesson.vocabulary.map((word) => <span key={word}>{word}</span>)}</div>
          </div>
          <Link className={styles.continueButton} to={`/learn/${lesson.level}`}>
            Continue path
          </Link>
          <button
            className={styles.retryButton}
            onClick={() => {
              setIndex(0);
              setAnswer("");
              setResult(null);
              setCorrectAnswers(0);
              setFinished(false);
            }}
          ><RotateCcw size={17} /> Practice again</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.lessonPage}>
      <header className={styles.lessonTopbar}>
        <Link to={`/learn/${lesson.level}`} aria-label="Leave lesson"><X /></Link>
        <div className={styles.progressTrack}><span style={{ width: `${progress}%` }} /></div>
        <div className={styles.hearts}><Heart fill="currentColor" /> 5</div>
      </header>

      <main className={styles.exerciseCard}>
        <span className={styles.step}>QUESTION {index + 1} OF {lesson.exercises.length}</span>
        <h1>{exercise.instruction}</h1>
        {exercise.prompt && <p className={styles.prompt}>{exercise.prompt}</p>}

        {exercise.type === "multiple-choice" ? (
          <div className={styles.choices}>
            {exercise.choices.map((choice, choiceIndex) => (
              <button
                type="button"
                disabled={result !== null}
                className={`${answer === choice ? styles.selected : ""} ${
                  result && choice === exercise.correctAnswer ? styles.correctChoice : ""
                } ${result === "incorrect" && answer === choice ? styles.incorrectChoice : ""}`}
                key={choice}
                onClick={() => setAnswer(choice)}
              >
                <span>{choiceIndex + 1}</span>{choice}
              </button>
            ))}
          </div>
        ) : (
          <WordOrder
            exercise={exercise}
            answer={answer}
            onChange={setAnswer}
            disabled={result !== null}
          />
        )}
      </main>

      <footer className={`${styles.checkBar} ${result ? styles[result] : ""}`}>
        {result ? (
          <div className={styles.feedback}>
            <div className={styles.feedbackIcon}>
              {result === "correct" ? <Check /> : <ArrowLeft />}
            </div>
            <div>
              <strong>{result === "correct" ? "Excellent!" : "Not quite"}</strong>
              <p>{result === "incorrect" && `Correct answer: ${exercise.correctAnswer}. `}{exercise.explanation}</p>
            </div>
          </div>
        ) : <span />}
        <button
          type="button"
          disabled={!answer}
          onClick={result ? continueLesson : checkAnswer}
        >
          {result ? "Continue" : "Check"}
        </button>
      </footer>
    </div>
  );
}
