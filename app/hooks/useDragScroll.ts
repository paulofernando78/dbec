import { useEffect } from "react";
import type { RefObject } from "react";

export function useDragScroll(
  ref: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const slider = ref.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;

    const mouseDown = (e: MouseEvent) => {
      isDown = true;

      startX = e.pageX - slider.offsetLeft;
      startY = e.pageY - slider.offsetTop;

      scrollLeft = slider.scrollLeft;
      scrollTop = slider.scrollTop;
    };

    const mouseUp = () => {
      isDown = false;
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;

      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;
      const y = e.pageY - slider.offsetTop;

      const walkX = x - startX;
      const walkY = y - startY;

      slider.scrollLeft = scrollLeft - walkX;
      slider.scrollTop = scrollTop - walkY;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mouseleave", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    // cleanup
    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mouseleave", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, [ref]);
}
