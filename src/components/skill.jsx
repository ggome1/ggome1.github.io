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
  Front_End: [
    {
      title: "React",
      logo: "react",
      explain: "컴포넌트 기반 UI 라이브러리를 사용할 수 있습니다.",
    },
    {
      title: "NextJS",
      logo: "nextjs",
      explain: "서버 사이드 렌더링을 활용한 프로젝트 경험이 있습니다.",
    },
    {
      title: "TailwindCSS",
      logo: "tailwindcss",
      explain: "유틸리티 퍼스트 CSS 프레임워크를 사용할 수 있습니다.",
    },
    {
      title: "Zustand",
      logo: "zustand",
      explain: "전역 상태 관리를 효율적으로 구현할 수 있습니다.",
    },
  ],
  Back_End: [
    {
      title: "Node.js",
      logo: "nodejs",
      explain: "비동기 서버 환경에서 효율적으로 작업할 수 있습니다.",
    },
    {
      title: "Express",
      logo: "express",
      explain: "RESTful API 설계 및 구현 경험이 있습니다.",
    },
  ],
  Database: [
    {
      title: "MySQL",
      logo: "mysql",
      explain: "관계형 데이터베이스 설계 및 활용 경험이 있습니다.",
    },
  ],
  ETC: [
    {
      title: "AWS-EC2",
      logo: "ec2",
      explain: "버전 관리 및 협업 경험이 풍부합니다.",
    },
    {
      title: "AWS-Amplify",
      logo: "aws",
      explain: "버전 관리 및 협업 경험이 풍부합니다.",
    },
    {
      title: "AWS-Route53",
      logo: "aws",
      explain: "버전 관리 및 협업 경험이 풍부합니다.",
    },
    {
      title: "Vercel",
      logo: "vercel",
      explain: "버전 관리 및 협업 경험이 풍부합니다.",
    },
    {
      title: "Git",
      logo: "git",
      explain: "버전 관리 및 협업 경험이 풍부합니다.",
    },
    {
      title: "Github",
      logo: "github",
      explain: "버전 관리 및 협업 경험이 풍부합니다.",
    },
    {
      title: "Jira",
      logo: "jira",
      explain: "버전 관리 및 협업 경험이 풍부합니다.",
    },
    {
      title: "Docker",
      logo: "docker",
      explain: "컨테이너 기반 배포 환경 구축 경험이 있습니다.",
    },
  ],
};

const SideMenu = ({ skills, curSkill, onClick }) => {
  return (
    <div className="flex flex-col gap-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          onClick={() => onClick(skill)}
          className={`cursor-pointer border-l-4 px-8 py-4 ${
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
          <div key={index} className="flex gap-10 items-center">
            <div className="border-2 border-primary-50 bg-[#a58b5c] rounded-full py-4 px-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/${item.logo}.svg`}
                alt={item.title}
                className="w-8 h-8"
              />
            </div>
            <div className="flex flex-col">
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
    <div className="h-screen py-8 px-16 bg-[#0a0a25] flex flex-col gap-20">
      <div className="w-full text-[60px] font-sba text-[#e4a648] flex items-center gap-8">
        <div className="text-[40px]">02.</div>
        <div>SKILL</div>
      </div>
      <div className="max-w-[1000px]">
        <div className="flex gap-10">
          <SideMenu skills={skills} curSkill={curSkill} onClick={setCurSkill} />
          <SkillDetails data={skillData[curSkill]} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
