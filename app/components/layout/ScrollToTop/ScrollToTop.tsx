import { useEffect, useState } from "react";

import { CircleArrowUp } from "lucide-react";

import styles from "./ScrollToTop.module.css";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const content =
      document.querySelector<HTMLElement>("[data-scroll-container]") ??
      document.getElementById("content-scroll");

    if (!content) return;

    const handleScroll = () => {
      setVisible(content.scrollTop > 300);
    };

    handleScroll();

    content.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      content.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const content =
      document.querySelector<HTMLElement>("[data-scroll-container]") ??
      document.getElementById("content-scroll");

    content?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
    >
      <CircleArrowUp className="text-gray-500"/>
    </button>
  );
};
