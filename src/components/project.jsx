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
    disable: true,
  },
  {
    title: "REVIEW.ZIP",
    description: '장소 리뷰 소셜 서비스',
    github: "https://github.com/Review-zip/ReviewZip-FE",
    url: "https://www.reviewzip.site",
    thumbnail: "2",
    disable: true,
  },
  {
    title: "PORTFOLIO",
    description: <>프론트앤드 개발자 박승준<br /> 포트폴리오</>,
    github: "https://github.com/ggome1/ggome1.github.io",
    url: "https://ggome1.github.io/",
    thumbnail: "3",
  },
  {
    title: "42SEOUL",
    description: <>이노베이션 아카데미 주관<br /> 개발자 양성 프로그램</>,
    github: "https://github.com/ggome1/42SEOUL",
    url: "https://42seoul.kr/seoul42/main/view",
    thumbnail: "4",
  },
];

const Project = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div className="h-[100dvh] py-8 px-[5rem] bg-[#1a0c24] flex flex-col gap-20">
      <div className="w-full text-[3.5rem] font-sba text-[#e5f051] flex items-center gap-8">
        <div className="text-[2.5rem]">02.</div>
        <div>PROJECT</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
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
              className="sm:rounded-br-[1.5rem] rounded-br-[1rem] sm:w-[20rem] sm:h-[20rem] w-[12rem] h-[12rem] px-auto"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.thumbnail}.png)`,
                backgroundRepeat: "no-repeat",
                overflow: "auto",
                backgroundPosition: "center",
                backgroundSize: "cover", // 작은 화면에서는 contain
              }}
            >
              {hoverIndex === index && (
                <div className="flex flex-col sm:gap-[1.5rem] gap-[1rem] font-title bg-white text-black items-center justify-center w-full h-full px-[2rem] py-[2rem]">
                  <div className="flex flex-col gap-[0.5rem] text-center">
                    <div className="sm:text-[1.5rem] text-[1rem]">{item.title}</div>
                    <div className="sm:text-[1rem] text-[0.5rem]">{item.description}</div>
                  </div>
                  <div className="flex flex-col gap-[0.5rem]">
                    <button onClick={() => window.open(item.github)} className="hover:text-white hover:bg-black sm:text-[1rem] text-[0.5rem] w-full border-2 border-black sm:px-[3rem] px-[1rem] sm:py-[0.5rem] py-[0.2rem] rounded-lg">깃허브 바로가기</button>
                    <button onClick={() => window.open(item.url)} disabled={item.disable} className={`hover:text-white hover:bg-black sm:text-[1rem] text-[0.5rem] border-2 border-black sm:px-[3rem] sm:py-[0.5rem] py-[0.2rem] px-[1rem] rounded-lg ${item.disable && 'border-neutral-50 text-neutral-50 hover:bg-neutral-0 hover:border-neutral-50 hover:text-neutral-50'}`}>사이트 바로가기</button>
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
