import { ArrowRight, BookOpen, Flame, Trophy } from "lucide-react";
import { Link } from "react-router";
import { learningLevels } from "@/data/learning";
import styles from "./learn.module.css";

export default function LearnIndex() {
  const level = learningLevels.a1;

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.eyebrow}>YOUR ENGLISH JOURNEY</span>
        <h1>Learn a little every day.</h1>
        <p>Short, practical lessons that turn English into a daily habit.</p>
      </header>

      <section className={styles.stats} aria-label="Learning statistics">
        <div><Flame aria-hidden="true" /><strong>0</strong><span>day streak</span></div>
        <div><Trophy aria-hidden="true" /><strong>0</strong><span>total XP</span></div>
        <div><BookOpen aria-hidden="true" /><strong>A1</strong><span>current level</span></div>
      </section>

      <section className={styles.levelCard}>
        <div className={styles.levelBadge}>A1</div>
        <div className={styles.levelCopy}>
          <span>BEGINNER</span>
          <h2>{level.title}</h2>
          <p>{level.description}</p>
          <small>1 unit available</small>
        </div>
        <Link className={styles.primaryButton} to="/learn/a1">
          Start learning <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
