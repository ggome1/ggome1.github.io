import React from "react";

const SNS = () => {
  return (
    <div className="fixed left-5 bottom-5 z-50 flex flex-col gap-[1rem]">
      <div onClick={() => window.open('https://github.com/ggome1')} className="w-[3.5rem] h-[3.5rem] px-[1rem] py-[1rem] bg-white rounded-full cursor-pointer hover:bg-neutral-50">
        <img src={`${process.env.PUBLIC_URL}/images/github.svg`} alt="sns" />
      </div>
      <div onClick={() => window.open('https://www.instagram.com/47286530qaq')} className="w-[3.5rem] h-[3.5rem] px-[1rem] py-[1rem] bg-white rounded-full cursor-pointer hover:bg-neutral-50">
        <img src={`${process.env.PUBLIC_URL}/images/instagram.svg`} alt="sns" />
      </div>
      <div onClick={() => window.open('https://www.instagram.com/47286530qaq')} className="w-[3.5rem] h-[3.5rem] px-[1rem] py-[1rem] bg-white rounded-full cursor-pointer hover:bg-neutral-50">
        <img src={`${process.env.PUBLIC_URL}/images/feedback.svg`} alt="sns" />
      </div>
    </div>
  );
};

export default SNS;
