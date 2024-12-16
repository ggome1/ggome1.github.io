import React from "react";
import { motion } from "framer-motion";

const Fin = () => {
  return (
    <div className="h-[100dvh] py-8 px-[5rem] bg-white flex flex-col gap-[4rem]">
      <div className="absolute text-black text-[3.5rem] font-sba">
        <div>FIN</div>
      </div>
      <div className="flex flex-col justify-center items-center h-full gap-[4rem]">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <div className="text-[3rem] font-sba text-white stroke-2 text-stroke-black">
              THANK YOU
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              delay: 0.4,
            }}
          >
            <div className="text-[4rem] font-title text-black z-20">
              끝까지 봐 주셔서<br /> 감사합니다.
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 0.7,
            delay: 0.6,
          }}
        >
          <div className="text-black font-label text-center">
            <div>끊임없이 학습하는,</div>
            <div>사용자의 입장에서 먼저 생각하는,</div>
            <div>프론트엔드 개발자가 되기 위해<br />노력하겠습니다.</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Fin;
