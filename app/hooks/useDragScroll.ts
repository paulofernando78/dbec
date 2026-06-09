import { useEffect, type RefObject } from "react";

export function useDragScroll(
  ref: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const slider = ref.current;

    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX;
      scrollLeft = slider.scrollLeft;
    };

    const mouseUp = () => {
      isDown = false;
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;

      e.preventDefault();

      const walk = e.pageX - startX;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
  }, [ref]);
}