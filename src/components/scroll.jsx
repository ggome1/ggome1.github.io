import { useContext, useEffect, useRef } from "react";
import { ReadMeContext } from "../App";

const ScrollHandler = () => {
  const { readMe } = useContext(ReadMeContext);
  const touchStartY = useRef(0); // 터치 시작 지점 저장
  const viewportHeight = useRef(window.innerHeight); // 동적 높이 저장
  const isCooldown = useRef(false);

  useEffect(() => {
    // 화면 높이를 동적으로 계산
    const updateViewportHeight = () => {
      viewportHeight.current =
        window.visualViewport?.height || window.innerHeight;
    };

    const handleScroll = (event) => {
      event.preventDefault();

      const currentScroll = window.scrollY;
      const windowHeight = viewportHeight.current; // 동적 높이 적용

      if (readMe || isCooldown.current) return;
      isCooldown.current = true;

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
      setTimeout(() => {
        isCooldown.current = false;
      }, 2500);
    };

    const handleTouchStart = (event) => {
      touchStartY.X = event.touches[0].clientX; // 터치 시작 X 좌표 저장
      touchStartY.Y = event.touches[0].clientY; // 터치 시작 Y 좌표 저장
    };

    const handleTouchMove = (event) => {
      const touchEndX = event.touches[0].clientX; // 터치 끝난 X 좌표
      const touchEndY = event.touches[0].clientY; // 터치 끝난 Y 좌표
      
      const deltaX = touchStartY.X - touchEndX; // 가로 이동 거리
      const deltaY = touchStartY.Y - touchEndY; // 세로 이동 거리
      if (event.target.closest('.allow-scroll') && Math.abs(deltaY) < 10) return;
      event.preventDefault();

      const windowHeight = viewportHeight.current;

      const currentScroll = window.scrollY;

      if (readMe || isCooldown.current) return;
      isCooldown.current = true;
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        const currentSection = Math.round(currentScroll / windowHeight);
        console.log(deltaY);
        if (deltaY > 5) {
          // 아래로 스크롤
          window.scrollTo({
            top: (currentSection + 1) * windowHeight,
            behavior: "smooth",
          });
        } else if (deltaY < -5 && currentSection > 0) {
          // 위로 스크롤
          window.scrollTo({
            top: (currentSection - 1) * windowHeight,
            behavior: "smooth",
          });
        }
      }
      setTimeout(() => {
        isCooldown.current = false;
      }, 1000);
    };

    // 화면 높이 재계산 (툴바 변화 시)
    window.addEventListener("resize", updateViewportHeight);

    // 이벤트 리스너 등록
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // 초기 높이 계산
    updateViewportHeight();

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [readMe]);

  return null;
};

export default ScrollHandler;
