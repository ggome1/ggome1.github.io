import React, { useState } from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "HAUS",
    description: '게임을 좋아하는 모두를 위한 공간',
    github: "https://github.com/Agm-HyunBin/haus-project",
    url: "https://www.haus.im/",
    thumbnail: "0",
  },
  {
    title: "FLING",
    description: '꽃다발을 통한 추억 공유',
    github: "https://github.com/Leets-Official/Fling-FE",
    url: "https://www.fling.today",
    thumbnail: "1",
  },
  {
    title: "REVIEW.ZIP",
    description: '장소 리뷰 소셜 서비스',
    github: "https://github.com/Review-zip/ReviewZip-FE",
    url: "https://www.reviewzip.site",
    thumbnail: "2",
  },
  {
    title: "PORTFOLIO",
    description: '프론트앤드 개발자 박승준 포트폴리오',
    github: "https://github.com/ggome1/ggome1.github.io",
    url: "https://ggome1.github.io/",
    thumbnail: "3",
  },
  {
    title: "42SEOUL",
    description: '이노베이션 아카데미 주관 개발자 양성 프로그램',
    github: "https://github.com/ggome1/42SEOUL",
    url: "https://42seoul.kr/seoul42/main/view",
    thumbnail: "4",
  },
];

const Project = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div className="h-screen py-8 px-16 bg-[#1a0c24] flex flex-col gap-20">
      <div className="w-full text-[3.5rem] font-sba text-[#e5f051] flex items-center gap-8">
        <div className="text-[2.5rem]">02.</div>
        <div>PROJECT</div>
      </div>
      <div className="flex flex-wrap gap-6 overflow-scroll">
        {projectData.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div
              key={index}
              className="rounded-br-[1.5rem] w-[25rem] h-[25rem] cursor-pointer"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.thumbnail}.png)`,
                backgroundRepeat: "no-repeat",
                overflow: "auto",
                backgroundPosition: "center",
                backgroundSize: "cover", // 작은 화면에서는 contain
              }}
            >
              {hoverIndex === index && (
                <div className="flex flex-col gap-[1.5rem] font-title bg-white text-black items-center justify-center w-full h-full px-[2rem] py-[2rem]">
                  <div className="flex flex-col gap-[0.5rem] text-center">
                    <div className="text-[1.5rem]">{item.title}</div>
                    <div className="text-[1rem]">{item.description}</div>
                  </div>
                  <div className="flex flex-col gap-[0.5rem]">
                    <button onClick={() => window.open(item.github)} className="hover:text-white hover:bg-black text-[1rem] border-2 border-black px-[3rem] py-[0.5rem] rounded-xl">깃허브 바로가기</button>
                    <button onClick={() => window.open(item.url)} className="hover:text-white hover:bg-black text-[1rem] border-2 border-black px-[3rem] py-[0.5rem] rounded-xl">사이트 바로가기</button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
