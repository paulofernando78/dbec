import { Check, Lock, Play, Star } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { learningLevels } from "@/data/learning";
import styles from "./learn.module.css";

export default function LearningLevel() {
  const { level: levelId } = useParams();
  const level =
    levelId && levelId in learningLevels
      ? learningLevels[levelId as keyof typeof learningLevels]
      : undefined;

  if (!level) return <Navigate to="/learn" replace />;

  return (
    <div className={styles.page}>
      <header className={styles.levelHeader}>
        <div className={styles.levelBadge}>{level.id.toUpperCase()}</div>
        <div>
          <span>ENGLISH PATH</span>
          <h1>{level.title}</h1>
          <p>{level.description}</p>
        </div>
      </header>

      {level.units.map((unit) => (
        <section className={styles.unit} key={unit.id}>
          <header className={styles.unitHeader}>
            <div>
              <span>UNIT {unit.order}</span>
              <h2>{unit.title}</h2>
              <p>{unit.description}</p>
            </div>
            <div className={styles.unitProgress}>0 / {unit.lessons.length}</div>
          </header>

          <div className={styles.path}>
            {unit.lessons.map((lesson, index) => {
              const locked = "locked" in lesson && lesson.locked;
              const checkpoint = "checkpoint" in lesson && lesson.checkpoint;
              const href = `/learn/${level.id}/${unit.id}/${lesson.slug}`;

              return (
                <div
                  className={`${styles.pathStep} ${locked ? styles.locked : ""}`}
                  key={lesson.id}
                >
                  {index > 0 && <div className={styles.pathLine} />}
                  {locked ? (
                    <button className={styles.lessonNode} disabled aria-label={`${lesson.title}, locked`}>
                      {checkpoint ? <Star aria-hidden="true" /> : <Lock aria-hidden="true" />}
                    </button>
                  ) : (
                    <Link className={styles.lessonNode} to={href} aria-label={`Start ${lesson.title}`}>
                      <Play fill="currentColor" aria-hidden="true" />
                    </Link>
                  )}
                  <div className={styles.lessonLabel}>
                    <span>LESSON {lesson.order}</span>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.description}</p>
                    {!locked && <small><Check size={14} /> Ready to start</small>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
