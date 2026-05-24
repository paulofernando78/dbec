import { useState, useEffect } from "react";
import { Dictionary } from "@/features/Dictionary";

import styles from "./DictionaryArea.module.css";

export function DictionaryArea() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const content = document.getElementById("content-scroll");

    if (!content) return;

    const handleScroll = () => {
      setIsVisible(content.scrollTop > 300);
    };
    handleScroll();

    content.addEventListener("scroll", handleScroll);

    return () => content.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.dictionaryArea} ${isVisible ? styles.visible : ""}`}
    >
      <Dictionary />
    </div>
  );
}
