import styles from "./home.module.css";

import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

import { Contact } from "@/components/layout/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daily Basis English Course" },
    { name: "description", content: "Private English Classes" },
  ];
}

const greetingsList = [
  "Hi there!",
  "How are you?",
  "How are you doing?",
  "How are you feeling?",
  "How's it going?",
  "How are things with you?",
  "What's up?",
];

export default function Home() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setOpacity(0); // fade out

      timeout = setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetingsList.length);
        setOpacity(1); // to fade in
      }, 500);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.dbec}>
        <h1 className={styles.db}>DAILY BAISIS</h1>
        <h1 className={styles.ec}>ENGLISH COURSE</h1>
      </div>
      <ul className={styles.greetingsWrapper}>
        <li className={styles.greetings} style={{ opacity }}>
          {greetingsList[greetingIndex]}
        </li>
      </ul>
      <p className={styles.presentation}>
        <b>DAILY BASIS ENGLISH COURSE</b> offers specialized English classes
        focused on the four core language skills: Speaking (with an emphasis on
        conversation), Listening (listening comprehension), Reading, and
        Writing. On this web site, you’ll find a variety of useful learning
        materials. Please use them wisely.
      </p>
      <div className={styles.contact}>
        <Contact />
      </div>
    </div>
  );
}
