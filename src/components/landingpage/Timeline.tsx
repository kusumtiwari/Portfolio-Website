import { useState } from "react";

import LessBtn from "../common/LessBtn";
import MoreBtn from "../common/MoreBtn";

import Heading from "../common/Heading";

interface Timeline {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  image: string;
  id: number;
}

const myTimeline: Timeline[] = [
  {
    startDate: "2022",
    endDate: "present",
    title: "Book Published",
    description:
      "More than 4 dozen books published on linguistics, ethnic languages and literature of Nepal.",
    image: "/images/common/Timeline.png",
    id: 1,
  },
  {
    startDate: "April 2007",
    endDate: "Dec 2009",
    title: "Book Published",
    description:
      "More than 4 dozen books published on linguistics, ethnic languages and literature of Nepal.",
    image: "/images/common/Timeline.png",
    id: 2,
  },
  {
    startDate: "2022",
    endDate: "present",
    title: "Book Published",
    description:
      "More than 4 dozen books published on linguistics, ethnic languages and literature of Nepal.",
    image: "/images/common/Timeline.png",
    id: 3,
  },
  {
    startDate: "2022",
    endDate: "present",
    title: "Book Published",
    description:
      "More than 4 dozen books published on linguistics, ethnic languages and literature of Nepal.",
    image: "/images/common/Timeline.png",
    id: 4,
  },
];
const Timeline: React.FC = () => {
  const [btnClick, setBtnClick] = useState<boolean>(false);
  const onBtnClick = () => setBtnClick(!btnClick);
  return (
    <>
      <div className="bg-secondary-detailsBackground h-fit px-8 md:px-20 lg:px-28 xl:px-36 w-full">
        <div className="pt-12">
          <Heading heading="TimeLine" />
        </div>
        {myTimeline.length <= 3 || btnClick
          ? myTimeline.map((item) => (
              <div
                key={item.id}
                className={`flex px-2 md:px-0 py-3 md:py-0 md:items-center bg-white mt-20 md:h-[30vh] lg:[28vh] w-[100%] md:w-[92%] lg:w-[85%] box-shadow font-mulish justify-center flex-col-reverse${
                  item.id % 2 === 0
                    ? "md:ml-20 lg:ml-44 md:flex-row-reverse"
                    : "md:flex-row"
                }`}
              >
                <div className="font-mulish font-bold md:text-sm lg:text-base md:w-[18%] lg:w-[16%] flex items-center flex-col py-4 md:py-0">
                  {item.startDate} AD
                  <br />
                  {item.endDate === "present" ? (
                    "onwards"
                  ) : (
                    <>
                      <p className="text-center">to</p> {item.endDate} AD
                    </>
                  )}
                </div>
                <div className="h-full w-0.5 bg-primary-subHeading"></div>
                <div className="flex flex-col justify-center md:w-[40%] px-2 md:px-6 pb-2 md:pb-0">
                  <h1 className="text-primary-subHeading text-base font-bold pb-2 pt-4 md:pt-0 text-center md:text-start">
                    {item.title}
                  </h1>
                  <p
                    className="text-base"
                    style={{
                      lineHeight: "28px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  >
                    {item.description}
                  </p>
                  <div className="h-0.5 w-full bg-primary-subHeading"></div>
                </div>
                <div className="w-[100%] h-[30vh] md:w-[36%] lg:w-[40%] md:h-[85%]">
                  <img
                    src={item.image}
                    alt="timeline"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))
          : myTimeline.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className={`flex px-2 md:px-0 py-3 md:py-0 md:items-center bg-white mt-12 md:h-[30vh] lg:[28vh] w-[92%] lg:w-[85%] box-shadow font-mulish justify-center flex-col-reverse ${
                  item.id % 2 === 0
                    ? "md:ml-20 lg:ml-44 md:flex-row-reverse my-12"
                    : "md:flex-row"
                }`}
              >
                <div className="font-mulish font-bold md:text-sm lg:text-base md:w-[18%] lg:w-[16%] flex items-center flex-col py-4 md:py-0">
                  {item.startDate} AD
                  <br />
                  {item.endDate === "present" ? (
                    "onwards"
                  ) : (
                    <>
                      <p className="text-center">to</p> {item.endDate} AD
                    </>
                  )}
                </div>
                <div className="h-full w-0.5 bg-primary-subHeading"></div>
                <div className="flex flex-col justify-center md:w-[40%] px-2 md:px-6 pb-2 md:pb-0">
                  <h1 className="text-primary-subHeading text-base font-bold pb-2 pt-4 md:pt-0 text-center md:text-start">
                    {item.title}
                  </h1>
                  <p
                    className="text-base"
                    style={{
                      lineHeight: "28px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  >
                    {item.description}
                  </p>
                  <div className="md:hidden h-0.5 w-full bg-primary-subHeading mt-4"></div>
                </div>
                <div className="w-[100%] h-[30vh] md:w-[36%] lg:w-[40%] md:h-[85%]">
                  <img
                    src={item.image}
                    alt="timeline"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
        <div onClick={onBtnClick} className="w-full flex justify-center mt-10">
          {myTimeline.length > 3 && <>{btnClick ? <LessBtn /> : <MoreBtn />}</>}
        </div>
      </div>
      <div className="h-fit w-full mb-4">
        <svg
          viewBox="0 0 500 70"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0,0 L500,0 L500,50 C300,110 150,20 0,50 Z"
            style={{
              stroke: "none",
              fill: "#FFF0E180",
            }}
          ></path>
        </svg>
      </div>
    </>
  );
};
export default Timeline;
