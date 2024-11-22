import React, { useContext, useEffect } from "react";
import { ReadMeContext } from "../App";
import { IoCheckboxOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const data = [
  {
    title: "HAUS - 게임을 좋아하는 모두를 위한 공간",
    team: "3",
    date: "2024. 07. 01 ~ 2024.08. 31",
    frontend: "Next.js, Javascript, Tailwindcss, Zustand",
    backend: "Firebase",
    github: "https://github.com/Agm-HyunBin/haus-project",
    url: "https://www.haus.im/",
    figma:
      "https://www.figma.com/design/n5w7x84MLMp3bAc9Oh4IDl/Haus-Layout-Design",
    content:
      "MainPage(event, follow, content etc..), 각 게임 커뮤니티, Colosseum 게시판, 각 커뮤니티 게시글 작성 기능 및 프로필 관리",
  },
  {
    title: "Fling - 꽃다발을 통한 추억 공유",
    team: "10",
    date: "2023. 12. 24 ~ 2024.02. 11",
    frontend: "Next.js, Javascript, Tailwindcss, Zustand",
    backend: "Spring Boot, Spring Security, Spring JPA, PostgreSQL",
    github: "https://github.com/Leets-Official/Fling-FE",
    url: "https://www.fling.today",
    figma: "https://www.figma.com/design/WbNL1XwV23A78Z6eLwo6JQ/Fling",
    content: "꽃다발 꾸미기, 편지 기능, 매일 랜덤 코인, SNS 공유",
  },
  {
    title: "Review.zip - 장소리뷰 사이트",
    team: "10",
    date: "2023. 12. 01 ~ 2024.02. 25",
    frontend: "React, Typescript, Styled-Components",
    backend: "Spring Boot",
    github: "https://github.com/Leets-Official/Fling-FE",
    url: "https://www.reviewzip.site",
    figma: "https://www.figma.com/design/K8tjh1pIQEAbmTvJsjZmNC/Review.zip",
    content:
      "리뷰 커뮤니티 및 게시글 추천 & 게시, 지도 기능 및 장소 저장 기능, 사용자 간 공유 가능",
  },
  {
    title: "Portfolio",
    team: "1",
    date: "2024. 09. 01 ~ 현재",
    frontend: "React, Javascript, TailwindCSS",
    backend: "X",
    github: "https://github.com/ggome1/ggome1.github.io",
    url: "https://ggome1.github.io/",
    figma: "https://www.figma.com/design/2gc75RJv1TF4R5z7UMUZ9g/Portfolio",
    content: "박승준의 INFO, SKILL, PROJECT 소개",
  },
  {
    title: "42SEOUL",
    team: "1 or 2 or 3",
    date: "2023. 02. 01 ~ 2023. 12. 31",
    frontend: "C",
    backend: "X",
    github: "https://github.com/ggome1/42SEOUL",
    url: "https://ggome1.github.io/",
    figma: "X",
    content: "GNL, ft_printf, libft, pipex, push_swap, so_long, La Piscine",
  },
];

const Readme = ({ index }) => {
  const { setReadMe } = useContext(ReadMeContext);
  useEffect(() => {
    // 모달이 열릴 때 body 스크롤 방지
    document.body.style.overflow = "hidden";

    // 컴포넌트가 언마운트될 때(모달이 닫힐 때) 스크롤 복원
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed top-1/2 left-1/2 bottom-10 transform -translate-y-1/2 -translate-x-1/2 w-full h-full px-4 py-4 max-h-[700px] max-w-[1400px]">
      <AnimatePresence>
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{
            ease: "easeInOut",
            duration: 0.7,
          }}
          className="h-full"
        >
          <div className="bg-white h-full rounded-xl">
            <div className="font-sba text-3xl rounded-t-xl px-12 py-8 text-neutral-0 bg-neutral-90">
              <div
                className="absolute right-[35px] top-[33px] cursor-pointer text-white"
                size={35}
                color="white"
                onClick={() => setReadMe(false)}
              >
                EXIT
              </div>
              README.MD
            </div>
            <div className="flex flex-col gap-8 w-full h-full bg-white py-12 px-12 rounded-3xl text-neutral-90">
              <div>
                <div className="flex justify-between">
                  <div className="font-sba text-3xl">{data[index]?.title}</div>
                  <div className="font-sba text-2xl">
                    {data[index]?.team}인 프로젝트 ({data[index]?.date})
                  </div>
                </div>
                <div className="w-full border-2 border-[#000000]"></div>
              </div>
              <div className="flex gap-8 w-full h-full justify-evenly items-center">
                <div className="flex justify-center min-w-[500px]">
                  <img
                    className="max-w-[500px] max-h-[500px]"
                    src={`${process.env.PUBLIC_URL}/images/${index}.png`}
                    alt="Your alt text"
                  />
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-8">
                    <div className="flex gap-4 items-start min-w-[100px]">
                      <IoCheckboxOutline size={20} className="mt-1" />
                      <div className="whitespace-nowrap font-title">
                        주요 기능
                      </div>
                    </div>
                    <div>{data[index]?.content}</div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex gap-4 items-start min-w-[100px]">
                      <IoCheckboxOutline size={20} className="mt-1" />
                      <div className="whitespace-nowrap font-title">GitHub</div>
                    </div>
                    <a
                      href={data[index]?.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data[index]?.github}
                    </a>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex gap-4 items-start min-w-[100px]">
                      <IoCheckboxOutline size={20} className="mt-1" />
                      <div className="whitespace-nowrap font-title">URL</div>
                    </div>
                    <a href={data[index]?.url} target="_blank" rel="noreferrer">
                      {data[index]?.url}
                    </a>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex gap-4 items-start min-w-[100px]">
                      <IoCheckboxOutline size={20} className="mt-1" />
                      <div className="whitespace-nowrap font-title">
                        Frontend
                      </div>
                    </div>
                    <div>{data[index]?.frontend}</div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex gap-4 items-start min-w-[100px]">
                      <IoCheckboxOutline size={20} className="mt-1" />
                      <div className="whitespace-nowrap font-title">
                        Backend
                      </div>
                    </div>
                    <div>{data[index]?.backend}</div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex gap-4 items-start min-w-[100px]">
                      <IoCheckboxOutline size={20} className="mt-1" />
                      <div className="whitespace-nowrap font-title">Figma</div>
                    </div>
                    <a
                      href={data[index]?.figma}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data[index]?.figma}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Readme;
