import React from "react";

const InfoElement = ({title, detail, icon}) => {
  return (
    <div className="flex items-center w-[30%]">
      {icon}
      <div className="flex flex-col flex-1 whitespace-nowrap pl-14">
        <div className="font-title text-[1rem]">{title}</div>
        <div className="font-label text-[0.9rem]">{detail}</div>
      </div>
    </div>
  );
};

export default InfoElement;
