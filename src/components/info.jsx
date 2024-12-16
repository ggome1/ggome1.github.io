import React from "react";
import { motion } from "framer-motion";
import InfoElement from "./infoElement";
import { FaBirthdayCake } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdSchool } from "react-icons/io";
import Slider from "react-slick";

const Info = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "1rem", // 좌우 패딩(간격)
  };
  const content = [
    {
      question: "Q. 프론트엔드를 선택한 이유?",
      answer: (
        <>
          사용자에게 가장 먼저, 그리고 많이 영향을 주는 프론트엔드 개발에 흥미를
          느꼈습니다.
          <br />
          사이트를 처음 접속했을 때, 보통 사용자들은 UI에 먼저 눈이 가기
          마련입니다.
          <br />
          다양한 UI 및 UX를 개발을 진행하며 적용해 본 후에 어떤 방법이 서비스에
          어울릴지, 사용자들로 하여금 만족을 일으킬지 고민하는 시간이
          즐거웠습니다.
          <br />웹 개발을 학습하며 광범위한 기술 중 적합한 기술을 찾아
          프로젝트에 하나씩 적용해 익혀 나가는 것이 적성에 맞았고, 망설임 없이
          프론트엔드를 선택하였습니다.
        </>
      ),
    },
    {
      question: "Q. 자기계발을 어떤 방식으로 하는지?",
      answer: (
        <>
          새로운 기술을 접하면 항상 공식 문서를 찾아 학습하고 있습니다.
          <br />
          기술의 장단점을 정리하여 매 프로젝트 시작 시에 주제에 적합한 기술을
          엄선해서 사이트의 성능을 높이고자 노력합니다.
          <br />
          개인 프로젝트 뿐만 아니라 최대한 팀 프로젝트를 진행해 팀원 간 의사소통
          경험을 하고자 합니다.
          <br />
          코드 작성 스타일이 고착되지 않기 위해 평소 다른 이들의 스타일을 많이
          살펴보고, 그들의 장점을 흡수하려고 노력합니다.
          <br />
          알고리즘 또한 웹 개발 못지 않게 문제 풀이를 통해 실력을 증진 중입니다.
        </>
      ),
    },
  ];
  return (
    <div className="h-screen py-8 px-[5rem] bg-[#1b1b1b] flex flex-col gap-10">
      <div className="w-full text-[3.5rem] font-sba text-[#D2E0FB] flex items-center gap-8">
        <div className="text-[2.5rem]">01.</div>
        <div>INFO</div>
      </div>
      <div className="flex flex-col gap-[5rem]">
        <div className="flex flex-col">
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
            <div className="flex justify-center items-center gap-[4rem]">
              <div className="max-w-[20rem]">
                <img
                  className="rounded-2xl"
                  src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                  alt="profile"
                />
              </div>
              <div className="flex flex-col gap-[1rem] text-[#ffffff]">
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
        <div className="flex flex-col gap-[2rem]">
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
            <div className="lg:px-[12rem] 3xl:px-[32rem]  px-8 font-title font-bold text-[2.5rem] text-[#D2E0FB]">
              About Me
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.5,
            }}
          >
            <div className="carousel-container lg:px-[10rem] 3xl:px-[30rem]">
              <Slider {...settings} className="">
                {content.map((item, index) => (
                  <div className="bg-[#3b3b3b] h-full py-6 px-8 rounded-3xl flex flex-col justify-center">
                    <div className="font-title text-[1.5rem] text-[#fff]">
                      {item.question}
                    </div>
                    <div className="font-label text-[1rem] text-[#fff] mt-[1rem]">
                      {item.answer}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Info;
