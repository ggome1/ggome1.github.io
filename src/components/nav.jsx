import React, { useEffect, useState } from "react";

const Nav = () => {
  const [curScroll, setCurScroll] = useState("INTRO");
  const [isVisible, setIsVisible] = useState(window.innerWidth > 1024); // 초기값 설정
  const windowHeight = window.innerHeight;

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1024); // 너비가 1024 초과일 때만 visible
    };

    const handleScroll = () => {
      if (window.scrollY < windowHeight) {
        setCurScroll("INTRO");
      } else if (window.scrollY < windowHeight * 2) {
        setCurScroll("INFO");
      } else if (window.scrollY < windowHeight * 3) {
        setCurScroll("SKILL");
      } else if (window.scrollY < windowHeight * 4) {
        setCurScroll("PROJECT");
      } else {
        setCurScroll("FIN");
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Clean up 이벤트 리스너
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowHeight]);

  if (!isVisible) return null; // x가 1024 이하일 때 Nav 숨김

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 right-10 h-[400px] max-w-[100px] rounded-full px-5 z-50">
      <div className="h-full flex flex-col items-center justify-evenly text-white z-60 font-title">
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className={`cursor-pointer ${
            curScroll === "INTRO" && "text-[#D8CEB5]"
          }`}
        >
          INTRO
        </div>
        <div
          onClick={() => {
            window.scrollTo({
              top: windowHeight,
              behavior: "smooth",
            });
          }}
          className={`cursor-pointer ${
            curScroll === "INFO" && "text-[#D2E0FB]"
          }`}
        >
          INFO
        </div>
        <div
          onClick={() => {
            window.scrollTo({
              top: windowHeight * 2,
              behavior: "smooth",
            });
          }}
          className={`cursor-pointer ${
            curScroll === "SKILL" && "text-[#e4a648]"
          }`}
        >
          SKILL
        </div>
        <div
          onClick={() => {
            window.scrollTo({
              top: windowHeight * 3,
              behavior: "smooth",
            });
          }}
          className={`cursor-pointer ${
            curScroll === "PROJECT" && "text-[#e5f051]"
          }`}
        >
          PROJECT
        </div>
        <div
          onClick={() => {
            window.scrollTo({
              top: windowHeight * 4,
              behavior: "smooth",
            });
          }}
          className={`cursor-pointer ${
            curScroll === "FIN" && "text-black"
          }`}
        >
          FIN
        </div>
      </div>
    </div>
  );
};

export default Nav;
