import { useContext, useEffect, useRef } from "react";
import { ReadMeContext } from "../App";

const ScrollHandler = () => {
  const { readMe } = useContext(ReadMeContext);

  // 터치 시작 지점을 저장
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;

      if (readMe) return;

      const currentSection = Math.round(currentScroll / windowHeight);

      if (event.deltaY > 0) {
        // 아래로 스크롤
        window.scrollTo({
          top: (currentSection + 1) * windowHeight,
          behavior: "smooth",
        });
      } else if (event.deltaY < 0) {
        // 위로 스크롤
        if (currentSection > 0) {
          window.scrollTo({
            top: (currentSection - 1) * windowHeight,
            behavior: "smooth",
          });
        }
      }
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      event.preventDefault();

      const touchEndY = event.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;

      if (readMe) return;

      const currentSection = Math.round(currentScroll / windowHeight);

      if (deltaY > 50) {
        // 아래로 스크롤
        window.scrollTo({
          top: (currentSection + 1) * windowHeight,
          behavior: "smooth",
        });
      } else if (deltaY < -50) {
        // 위로 스크롤
        if (currentSection > 0) {
          window.scrollTo({
            top: (currentSection - 1) * windowHeight,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [readMe]);

  return null;
};

export default ScrollHandler;
