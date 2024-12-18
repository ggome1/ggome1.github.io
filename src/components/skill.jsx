import React, { useState } from "react";
import { motion } from "framer-motion";

const skillData = {
  Language: [
    {
      title: "HTML5",
      logo: "html",
      explain: "기본적인 HTML 태그를 사용할 수 있습니다.",
    },
    {
      title: "CSS",
      logo: "css",
      explain: "라이브러리 없이 순수 CSS로 프로젝트를 진행한 경험이 있습니다.",
    },
    {
      title: "Javascript",
      logo: "javascript",
      explain: "ES6+ 문법을 활용하여 코드를 작성할 수 있습니다.",
    },
    {
      title: "Typescript",
      logo: "typescript",
      explain: "타입을 활용하여 명확한 코드를 작성할 수 있습니다.",
    },
  ],
  Frontend: [
    {
      title: "React",
      logo: "react",
      explain: "React를 활용해 프로젝트를 진행해 본 경험이 있으며, 이 사이트 또한 React로 개발하였습니다.",
    },
    {
      title: "NextJS",
      logo: "nextjs",
      explain: "CSR, SSR, SSG 를 모두 진행한 경험이 있으며, 프로젝트 시작 전 라우팅 설계를 진행하였습니다",
    },
    {
      title: "Styled Component",
      logo: "styledcomponent",
      explain: "개발을 학습하는 초기에 간단한 프로젝트를 Styled Component를 활용해 진행하였습니다.",
    },
    {
      title: "TailwindCSS",
      logo: "tailwindcss",
      explain: "해당 사이트도 TailwindCSS로 개발하였으며, 현재 가장 즐겨 사용하는 CSS 라이브러리 입니다.",
    },
    {
      title: "Recoil",
      logo: "recoil",
      explain: "전역 상태 관리를 목적으로 프로젝트에 적용한 경험이 있습니다.",
    },
    {
      title: "Zustand",
      logo: "nosvg",
      explain: "전역 상태 관리를 목적으로 프로젝트에 적용한 경험이 있습니다.",
    },
  ],
  Backend: [
    {
      title: "Node.js",
      logo: "nodejs",
      explain: "학부생 시절에 학습하였습니다.",
    },
    {
      title: "Express",
      logo: "express",
      explain: "학부생 시절에 학습하였습니다.",
    },
  ],
  Database: [
    {
      title: "MySQL",
      logo: "mysql",
      explain: "DB를 설계해 보았으며 Query 또한 많이 작성해 보았습니다.",
    },
  ],
  ETC: [
    {
      title: "AWS-EC2",
      logo: "ec2",
      explain: "NextJS 프로젝트를 EC2에 배포한 경험이 있습니다.",
    },
    {
      title: "AWS-Amplify",
      logo: "aws",
      explain: "React 프로젝트를 Amplify에 배포해 본 경험이 있으며, 개인적으로 배포하기 가장 편하다 생각합니다.",
    },
    {
      title: "AWS-Route53",
      logo: "aws",
      explain: "도메인 구매 및 적용을 해 본 경험이 있습니다.",
    },
    {
      title: "Vercel",
      logo: "vercel",
      explain: "NextJS 프로젝트를 Vercel에 배포한 경험이 있습니다.",
    },
    {
      title: "Git",
      logo: "git",
      explain: "코드 저장 및 버전 기록을 위해 사용하였습니다.",
    },
    {
      title: "Github",
      logo: "github",
      explain: "버전 관리 및 팀원 간 협업을 위해 사용하였습니다.",
    },
    {
      title: "Jira",
      logo: "jira",
      explain: "프로젝트 관리 및 강화된 협업을 위해 사용하였습니다.",
    },
    {
      title: "Docker",
      logo: "docker",
      explain: "학부생 시절 Docker를 활용하여 서버를 배포한 경험이 있습니다.",
    },
  ],
};

const SideMenu = ({ skills, curSkill, onClick }) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className="flex sm:flex-col gap-2 overflow-x-scroll allow-scroll">
      {skills.map((skill, index) => (
        <div
          key={index}
          onClick={() => onClick(skill)}
          className={`cursor-pointer border-b-4 sm:border-l-4 sm:border-b-0 py-4 text-[1rem] text-center min-w-[8rem] ${
            curSkill === skill
              ? "text-white border-neutral-0"
              : "text-neutral-40 border-neutral-40"
          }`}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

const SkillDetails = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <motion.div
          key={`${item.title}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <div key={index} className="flex gap-[2rem] items-center">
            <div className="max-w-[5rem] max-h-[5rem] min-w-[5rem] min-h-[5rem] border-2 border-primary-50 bg-[#a58b5c] rounded-full py-[1rem] px-[1rem]">
              <img
                src={`${process.env.PUBLIC_URL}/images/${item.logo}.svg`}
                alt={item.title}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col text-[1rem]">
              <div className="font-title">{item.title}</div>
              <div className="font-label">- {item.explain}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Skill = () => {
  const skills = Object.keys(skillData);
  const [curSkill, setCurSkill] = useState("Language");

  return (
    <div className="h-[100dvh] py-8 px-[5rem] bg-[#0a0a25] flex flex-col gap-[4rem]">
      <div className="w-full text-[3.5rem] font-sba text-[#e4a648] flex items-center gap-[2rem]">
        <div className="text-[2.5rem]">02.</div>
        <div>SKILL</div>
      </div>
      <div className="max-w-[1000px]">
        <div className="flex sm:flex-row flex-col gap-[3rem]">
          <SideMenu skills={skills} curSkill={curSkill} onClick={setCurSkill} />
          <SkillDetails data={skillData[curSkill]} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
