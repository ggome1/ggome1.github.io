import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "HAUS",
    thumbnail: "0",
  },
  {
    title: "FLING",
    thumbnail: "1",
  },
  {
    title: "REVIEW.ZIP",
    thumbnail: "2",
  },
  {
    title: "PORTFOLIO",
    thumbnail: "3",
  },
  {
    title: "42SEOUL",
    thumbnail: "4",
  },
];

const Project = () => {
  return (
    <div className="h-screen py-8 px-16 bg-[#e4b8b8] flex flex-col gap-20">
      <div className="w-full text-[60px] font-sba text-[#c04343] flex items-center gap-8">
        <div className="text-[40px]">02.</div>
        <div>PROJECT</div>
      </div>
      <div className="flex gap-6 overflow-scroll">
        {projectData.map((item, index) => (
            <div
              key={index}
              className="max-w-[300px] min-w-[300px] max-h-[300px] min-h-[300px] hover:opacity-[70%] cursor-pointer"
            >
              <img
                className="w-full h-full object-cover"
                src={`${process.env.PUBLIC_URL}/images/${item.thumbnail}.png`}
                alt="thumbnail"
              />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
