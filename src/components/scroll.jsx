import { useContext, useEffect } from "react";
import { ReadMeContext } from "../App";

const ScrollHandler = () => {
  const { readMe } = useContext(ReadMeContext);

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

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [readMe]);

  return null;
};

export default ScrollHandler;
