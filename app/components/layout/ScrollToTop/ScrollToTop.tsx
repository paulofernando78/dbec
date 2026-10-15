import { useEffect, useState } from "react";

import { CircleArrowUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ScrollToTop = ({ inline = false }: { inline?: boolean }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const containers = [
      document.querySelector<HTMLElement>("[data-scroll-container]"),
      document.getElementById("content-scroll"),
    ].filter((container): container is HTMLElement => container !== null);

    const handleScroll = () => {
      setVisible(
        window.scrollY > 300 ||
          containers.some((container) => container.scrollTop > 300),
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    containers.forEach((container) =>
      container.addEventListener("scroll", handleScroll, { passive: true }),
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      containers.forEach((container) =>
        container.removeEventListener("scroll", handleScroll),
      );
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document
      .querySelector<HTMLElement>("[data-scroll-container]")
      ?.scrollTo({ top: 0, behavior: "smooth" });
    document
      .getElementById("content-scroll")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const visibilityClasses = visible
    ? "pointer-events-auto translate-y-0 opacity-100"
    : "pointer-events-none translate-y-2 opacity-0";

  const button = (
    <Button
      onClick={handleClick}
      ariaLabel="Scroll to top"
      icon={<CircleArrowUp />}
      className={`transition-all duration-300 ${visibilityClasses}`}
    />
  );

  if (inline) {
    return (
      <div className="fixed right-4 bottom-38 z-50">
        {button}
      </div>
    );
  }

  
};
