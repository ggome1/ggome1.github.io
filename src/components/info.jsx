import React from "react";
import { motion } from "framer-motion";
import InfoElement from "./infoElement";
import { FaBirthdayCake } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdSchool } from "react-icons/io";

const Info = () => {
  return (
    <div className="h-screen py-8 px-16 bg-[#1b1b1b] flex flex-col gap-20 ">
      <div className="w-full text-[60px] font-sba text-[#D2E0FB] flex items-center gap-8">
        <div className="text-[40px]">01.</div>
        <div>INFO</div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 200 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              delay: 0.3,
            }}
          >
            <div className="flex justify-center items-center">
              <div className="max-w-[300px]">
                <img
                  className="rounded-2xl flex"
                  src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                  alt="profile"
                />
              </div>
              <div className="flex flex-col gap-6 text-[#ffffff]">
                <InfoElement
                  icon={<IoPersonSharp className="absolute" size={20} />}
                  title={"이름"}
                  detail={"박승준"}
                />
                <InfoElement
                  icon={<FaBirthdayCake className="absolute" size={20} />}
                  title={"생년월일"}
                  detail={"02.11.08"}
                />
                <InfoElement
                  icon={<FaMapMarkerAlt className="absolute" size={20} />}
                  title={"주소지"}
                  detail={"서울특별시 성동구"}
                />
                <InfoElement
                  icon={<IoCall className="absolute" size={20} />}
                  title={"연락처"}
                  detail={"010-5221-5391"}
                />
                <InfoElement
                  icon={<HiOutlineMail className="absolute" size={20} />}
                  title={"이메일"}
                  detail={"bookincar@naver.com"}
                />
                <InfoElement
                  icon={<IoMdSchool className="absolute" size={20} />}
                  title={"학력"}
                  detail={"가천대학교"}
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.0,
            }}
          >
            <div className="px-8 font-title font-bold text-[40px] text-[#D2E0FB]">
              Question
            </div>
          </motion.div>
          <motion.div
            style={{
              transformOrigin: "top", // 회전 기준점을 'top'으로 설정
            }}
            initial={{ opacity: 1, scale: 1, rotateX: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 1.7,
            }}
          >
            <div className="bg-[#3b3b3b] py-8 px-8 rounded-3xl flex flex-col gap-6">
              <div className="font-title text-4xl">
                Q. 프론트엔드를 선택한 이유?
              </div>
              <div className="font-label">
                웹 디자이너로 활동하며 사용자 중심 디자인, 협업, 프론트엔드 기초
                지식을 쌓았습니다.
                <br />
                사용자와의 소통에 대해 중요성을 인지하고, 더 밀접하게 상호작용
                가능한 프로젝트를 개발하고자 프론트엔드 개발자로 전향을 결심하게
                되었습니다.
                <br />
                React, Styled Components, Redux Toolkit 등 다양한 프레임워크와
                라이브러리를 도입해 발전할 수 있는 새로운 도전에 나서고
                있습니다.
              </div>
            </div>
          </motion.div>
          <motion.div
            style={{
              transformOrigin: "top", // 회전 기준점을 'top'으로 설정
            }}
            initial={{ opacity: 1, scale: 1, rotateX: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 2.2,
            }}
          >
            <div className="bg-[#3b3b3b] py-8 px-8 rounded-3xl flex flex-col gap-6">
              <div className="font-title text-4xl">
                Q. 프론트엔드를 선택한 이유?
              </div>
              <div className="font-label">
                웹 디자이너로 활동하며 사용자 중심 디자인, 협업, 프론트엔드 기초
                지식을 쌓았습니다.
                <br />
                사용자와의 소통에 대해 중요성을 인지하고, 더 밀접하게 상호작용
                가능한 프로젝트를 개발하고자 프론트엔드 개발자로 전향을 결심하게
                되었습니다.
                <br />
                React, Styled Components, Redux Toolkit 등 다양한 프레임워크와
                라이브러리를 도입해 발전할 수 있는 새로운 도전에 나서고
                있습니다.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Info;
