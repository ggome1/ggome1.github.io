import React from "react";

const Info = () => {
  return (
    <div className="h-screen py-8 px-16 bg-[#0a0a25] flex flex-col gap-20 ">
      <div className="w-full text-[60px] font-sba text-[#e4a648] flex items-center gap-8">
        <div className="text-[40px]">02.</div>
        <div>SKILL</div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-4">
          <div>Language</div>
          <div>Language</div>
          <div>Language</div>
          <div>Language</div>
          <div>Language</div>
        </div>
        <div className="flex flex-col">
          <div>html</div>
          <div>html</div>
          <div>html</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
