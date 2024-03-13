import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { FileCheck, HandCoins, ChevronRight } from "lucide-react";

import ContributionForm from "./ContributionForm";

interface ProjectContributionProps {
  projectBudget: number | undefined;
  donationReceived: number | undefined;
  donationPercent: number;
}

const ProjectContribution: React.FC<ProjectContributionProps> = ({
  projectBudget,
  donationPercent,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onPopupDisplay = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <div className="h-[60vh] md:h-[70vh] relative">
        <div className="h-[60vh] md:h-[70vh] overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <clipPath id={`clipPath`}>
              <path
                d={
                  !isSmallScreen
                    ? "M0,120 C150,180 300,80 500,120 L500,0 L0,0 Z"
                    : "M0,120 C200,140 180,80 500,120 L500,0 L0,0 Z"
                }
                style={{
                  stroke: "none",
                  fill: "#e1efe3",
                }}
              ></path>
            </clipPath>

            {/* Image */}
            <image
              xlinkHref="/images/contributionBg.png"
              clipPath={`url(#clipPath)`}
              style={{ objectPosition: "center", objectFit: "cover" }}
              preserveAspectRatio="xMinYMin slice"
              width={"100%"}
              height={"100%"}
            />
          </svg>
        </div>
        <div className="absolute top-6 md:top-[15%] left-2  md:left-16 lg:left-24 xl:left-36 text-white flex flex-col items-center justify-center mx-2">
          <h1 className="font-bold font-sourceSerifPro text-2xl md:text-3xl">
            Your contribution can make a huge difference
          </h1>
          <div className="bg-white px-4 py-4 w-full mt-3 rounded">
            <div className="flex justify-between items-center font-semibold text-lg md:text-xl text-black">
              <div className="flex items-center">
                <FileCheck className="text-primary-btnColor w-6 h-6 mr-2" />
                <h1>Project Budget</h1>
              </div>
              <h1 className="text-primary-headingColor">Rs {projectBudget}</h1>
            </div>

            <div className="flex justify-between items-center font-semibold text-lg md:text-xl my-7 text-black">
              <div className="flex items-center">
                <HandCoins className="text-primary-btnColor w-6 h-6 mr-2" />
                <h1>Donation Received</h1>
              </div>
              <h1>Rs {projectBudget}</h1>
            </div>

            <div className="w-full flex items-center">
              <div className="w-[92%] bg-gray-300 rounded h-1.5">
                <div
                  className="h-full bg-primary-btnColor rounded"
                  style={{ width: `${donationPercent}%` }}
                ></div>
              </div>
              <p className="text-sm font-bold ml-4 mb-1 text-black">
                {donationPercent}%
              </p>
            </div>
          </div>
          <button
            className="text-white font-mulish text-base bg-primary-btnColor transition duration-300 ease-in-out hover:text-black hover:border hover:border-primary-btnColor px-4 py-2 rounded-full hover:bg-white flex items-center mt-8"
            onClick={onPopupDisplay}
          >
            Contribute in the project
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
      {isPopupOpen && <ContributionForm onPopupDisplay={onPopupDisplay} />}
    </>
  );
};

export default ProjectContribution;
