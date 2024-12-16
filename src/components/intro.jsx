import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";

const Intro = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // 화면 크기 변경 감지
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind 'md' 기준 768px
    };

    // 초기 크기 설정
    handleResize();

    // 리스너 추가
    window.addEventListener("resize", handleResize);

    return () => {
      // 리스너 정리
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-[#222831] text-[#D8CEB5] relative overflow-hidden font-sba w-screen h-[100dvh] flex flex-col text-center justify-center items-center md:text-[50px] text-[30px] px-8 py-4">
      {/* <motion.div key={index} {...motionSettings(text.direction)}>
          <div className="text-white">{text.content}</div>
        </motion.div> */}
      <div className="flex-col">
        <motion.div
          initial={{ opacity: 0 }} // 처음에는 보이지 않게 설정
          whileInView={{ opacity: 1 }} // 1초 후에 보이게 설정
          transition={{ duration: 1, delay: 0.5 }} // 1초 지연 후 0.5초 동안 서서히 나타남
          viewport={{ once: false }}
        >
          <div className="flex justify-between">
            <motion.div
              initial={{ opacity: 1, x: 0 }} // 처음에는 보이지 않게 설정
              whileInView={{ opacity: 1, x: isSmallScreen ? -70 : -110 }} // 1초 후에 보이게 설정
              transition={{ duration: 1, delay: 1.5 }} // 1초 지연 후 0.5초 동안 서서히 나타남
              viewport={{ once: false }}
            >
              <div>트렌드</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -155 }} // 처음에는 보이지 않게 설정
              whileInView={{ opacity: 1, x: -155 }} // 1초 후에 보이게 설정
              transition={{ duration: 1, delay: 2 }} // 1초 지연 후 0.5초 동안 서서히 나타남
              viewport={{ once: false }}
            >
              <div className="absolute w-[300px] text-white">를 만드는</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }} // 처음에는 보이지 않게 설정
              whileInView={{ opacity: 1, x: isSmallScreen ? 65 : 105 }} // 1초 후에 보이게 설정
              transition={{ duration: 1, delay: 1.5 }} // 1초 지연 후 0.5초 동안 서서히 나타남
              viewport={{ once: false }}
            >
              <div>개발자</div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} // 처음에는 보이지 않게 설정
          whileInView={{ opacity: 1 }} // 1초 후에 보이게 설정
          transition={{ duration: 1, delay: 1 }} // 1초 지연 후 0.5초 동안 서서히 나타남
          viewport={{ once: false }}
        >
          <div>박승준 입니다</div>
        </motion.div>
      </div>
      <div className="absolute bottom-7 text-white">
        <motion.div
          initial={{ opacity: 0 }} // 처음에는 보이지 않게 설정
          animate={{ opacity: 1 }} // 1초 후에 보이게 설정
          transition={{ duration: 0.5, delay: 2 }} // 1초 지연 후 0.5초 동안 서서히 나타남
        >
          <motion.div
            initial={{ y: 300 }}
            animate={{ y: [0, 10, 0] }} // 무한히 y축으로 흔들리게 설정
            transition={{
              ease: "easeInOut",
              delay: 1,
              duration: 1,
              repeat: Infinity, // 무한 반복
            }}
          >
            <FaAngleDoubleDown size={40} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
