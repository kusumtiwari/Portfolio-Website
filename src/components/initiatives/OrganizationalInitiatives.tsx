import { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

import ReadmoreBtn from "../common/ReadmoreBtn";

interface Initiatives {
  startDate: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  id: number;
}

interface OrganizationalInitiativesProps {
  myInitiatives: Initiatives[];
}

const OrganizationalInitiatives: React.FC<OrganizationalInitiativesProps> = ({
  myInitiatives,
}) => {
  const [btnClicked, setBtnClicked] = useState<boolean>(false);
  const onBtnClick = () => setBtnClicked(!btnClicked);

  return (
    <div className="px-8 md:px-8 lg:px-12 xl:px-32 py-6 lg:py-10">
      <h1
        className="text-xl font-semibold border-b-[3px] border-primary-btnColor mb-14 w-fit mx-auto"
        style={{ lineHeight: "42px" }}
      >
        Organizational Initiatives
      </h1>
      <div>
        {myInitiatives.length <= 2 || btnClicked
          ? myInitiatives.map((item) => (
              <div
                key={item.id}
                className={`flex items-center md:h-[48vh] justify-between w-full mb-20 flex-col ${
                  item.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-[55%] lg:w-[45%] xl:w-[46%] h-[45vh]  lg:h-full relative mb-12 md:mb-0">
                  <img
                    src={item.image}
                    alt="initiatives"
                    className="w-full md:w-[92%] lg:w-[90%] h-full  object-center object-cover md:object-fill lg:object-cover"
                  />
                  <div
                    className={`bg-white rounded-full h-24 w-24 shadow-lg absolute top-[85%] md:top-1/3  flex items-center justify-center z-20 ${
                      item.id % 2 === 0
                        ? "left-[40%] md:left-[-8%]"
                        : "right-[40%] md:right-[-2%]"
                    }
                            `}
                  >
                    <img
                      src={item.logo}
                      alt="logo"
                      className="h-20 w-20 rounded-full cursor-pointer rotate transition duration-500 ease-in-out"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    item.id % 2 === 0 ? "md:mr-8 lg:mr-12" : "md:ml-8 lg:ml-12"
                  }  md:w-[60%]`}
                >
                  <h1 className="text-xl font-semibold font-inter text-primary-headingColor pt-4 md:pt-0">
                    {item.title}
                  </h1>
                  <h1 className="font-mular text-base font-bold py-4">
                    Established Date: {item.startDate}
                  </h1>
                  <p
                    className="text-base text-justify font-mulish"
                    style={{
                      lineHeight: "28px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                    }}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 my-3">
                    <FaFacebook className="w-5 h-5 text-[#828587]" />
                    <FiGlobe className="w-5 h-5 text-[#828587]" />
                  </div>
                  <ReadmoreBtn />
                </div>
              </div>
            ))
          : myInitiatives.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className={`flex items-center md:h-[48vh] justify-between w-full mb-20 flex-col ${
                  item.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-[55%] lg:w-[45%] xl:w-[46%] h-[45vh]  lg:h-full relative mb-12 md:mb-0">
                  <img
                    src={item.image}
                    alt="initiatives"
                    className="w-full md:w-[92%] lg:w-[90%] h-full  object-center object-cover md:object-fill lg:object-cover"
                  />
                  <div
                    className={`bg-white rounded-full h-24 w-24 shadow-lg absolute top-[85%] md:top-1/3  flex items-center justify-center z-20 ${
                      item.id % 2 === 0
                        ? "left-[40%] md:left-[-8%]"
                        : "right-[40%] md:right-[-2%]"
                    }
                            `}
                  >
                    <img
                      src={item.logo}
                      alt="logo"
                      className="h-20 w-20 rounded-full  cursor-pointer rotate transition duration-500 ease-in-out"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    item.id % 2 === 0 ? "md:mr-12 lg:mr-20" : "md:ml-8 lg:ml-12"
                  }  md:w-[60%]`}
                >
                  <h1 className="text-xl font-semibold font-inter text-primary-headingColor pt-4 md:pt-0">
                    {item.title}
                  </h1>
                  <h1 className="font-mular text-base font-bold py-4">
                    Established Date: {item.startDate}
                  </h1>
                  <p
                    className="text-base text-justify font-mulish"
                    style={{
                      lineHeight: "28px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                    }}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 my-3">
                    <FaFacebook className="w-5 h-5 text-[#828587] rotate cursor-pointer" />
                    <FiGlobe className="w-5 h-5 text-[#828587] rotate cursor-pointer" />
                  </div>
                  <ReadmoreBtn />
                </div>
              </div>
            ))}
      </div>
      <div
        className="text-center font-bold text-sm my-8 font-mulish cursor-pointer"
        onClick={onBtnClick}
      >
        {btnClicked ? "View Less" : "View All"}
      </div>
    </div>
  );
};

export default OrganizationalInitiatives;
