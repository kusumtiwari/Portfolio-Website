import { useState } from "react";

import { ChevronsDown, ChevronsUp } from "lucide-react";
import Heading from "../common/Heading";

const MoreBtn = () => {
  return (
    <button className="text-black font-mulish text-base transition duration-300 ease-in-out hover:border hover:text-primary-btnColor px-4 py-2 rounded-full hover:border-primary-btnColor flex items-center ">
      More
      <ChevronsDown className="w-5 h-5 ml-2" />
    </button>
  );
};

const LessBtn = () => {
  return (
    <button className="text-black font-mulish text-base transition duration-300 ease-in-out hover:border hover:text-primary-btnColor px-4 py-2 rounded-full hover:border-primary-btnColor flex items-center ">
      Less
      <ChevronsUp className="w-5 h-5 ml-2" />
    </button>
  );
};

interface Affiliations {
  startDate: string;
  endDate: string;
  title: string;
  position: string;
  logo: string;
  id: number;
}

const myAffiliations: Affiliations[] = [
  {
    startDate: "2012",
    endDate: "2020",
    title: "Nepal Tamang Ghedung",
    position: "Advisor",
    logo: "/images/common/InitiativesLogo.png",
    id: 1,
  },
  {
    startDate: "2012",
    endDate: "2018",
    title: "Nepal Tamang Ghedung",
    position: "Advisor",
    logo: "/images/common/InitiativesLogo.png",
    id: 2,
  },
  {
    startDate: "2012",
    endDate: "2020",
    title: "Nepal Tamang Ghedung",
    position: "Advisor",
    logo: "/images/common/InitiativesLogo.png",
    id: 3,
  },
  {
    startDate: "2012",
    endDate: "Present",
    title: "Nepal Tamang Ghedung",
    position: "Advisor",
    logo: "/images/common/InitiativesLogo.png",
    id: 4,
  },
  {
    startDate: "2012",
    endDate: "Present",
    title: "Nepal Tamang Ghedung",
    position: "Advisor",
    logo: "/images/common/InitiativesLogo.png",
    id: 5,
  },
  {
    startDate: "2012",
    endDate: "Present",
    title: "Nepal Tamang Ghedung",
    position: "Advisor",
    logo: "/images/common/InitiativesLogo.png",
    id: 6,
  },
  {
    startDate: "2012",
    endDate: "Present",
    title: "Nepal Tamang Ghedung",
    position: "Advisor",
    logo: "/images/common/InitiativesLogo.png",
    id: 7,
  },
  {
    startDate: "2012",
    endDate: "Present",
    title: "Nepal Tamang Ghedung",
    position: "Advisor",
    logo: "/images/common/InitiativesLogo.png",
    id: 8,
  },
];
const Affiliations: React.FC = () => {
  const [btnClicked, setBtnClicked] = useState<boolean>(false);
  const onBtnClick = () => setBtnClicked(!btnClicked);
  return (
    <>
      <div className="bg-[url('/images/affiliationbg.png')]  bg-cover bg-no-repeat h-fit w-full bg-center pt-16 px-8 md:px-20 lg:px-28 xl:px-36">
        {btnClicked || myAffiliations.length <= 5 ? (
          <>
            <div className="py-10">
              <Heading heading="Affiliations" />
            </div>
            <div className="flex flex-wrap justify-center items-center mt-8">
              {myAffiliations.map((items) => {
                return (
                  <div
                    className="mt-8 py-12 relative w-[100%] md:w-[45%] lg:w-[25%] mb-24  hover:scale-105 transition ease-in-out duration-300 cursor-pointer flex justify-center items-center flex-col bg-white rounded border border-primary-btnColor mx-8"
                    key={items.id}
                  >
                    <div className="bg-white rounded-full h-24 w-24 absolute top-[-20%] shadow-lg transform translate-x-[0]">
                      <img
                        src={items.logo}
                        alt="logo"
                        className="h-24 w-24 rounded-full"
                      />
                    </div>
                    <h1 className="font-semibold text-xl text-primary-headingColor pt-8">
                      {items.title}
                    </h1>
                    <h1 className="font-semibold text-xl my-4">
                      {items.position}
                    </h1>
                    <h1 className="text-xl font-semibold">
                      {items.startDate}- {items.endDate}
                    </h1>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="py-10">
              <Heading heading="Affiliations" />
            </div>
            <div className="flex flex-wrap justify-center items-center mt-16">
              {myAffiliations.slice(0, 5).map((items) => {
                return (
                  <div
                    className="transition ease-in-out hover:scale-105 duration-500 hover:box-shadow mt-8 py-8 md:py-12 relative w-[100%] md:w-[45%] lg:w-[30%] xl:w-[26%] mb-20 cursor-pointer flex justify-center items-center flex-col bg-white rounded border border-primary-btnColor mx-8"
                    key={items.id}
                  >
                    <div className="bg-white rounded-full h-24 w-24 absolute top-[-20%] shadow-lg transform translate-x-[0]">
                      <img
                        src={items.logo}
                        alt="logo"
                        className="h-24 w-24 rounded-full rotate"
                      />
                    </div>
                    <h1 className="font-semibold text-xl text-primary-headingColor pt-8 text-center">
                      {items.title}
                    </h1>
                    <h1 className="font-semibold text-xl my-4">
                      {items.position}
                    </h1>
                    <h1 className="text-xl font-semibold">
                      {items.startDate}- {items.endDate}
                    </h1>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {myAffiliations.length > 5 && (
          <div
            onClick={onBtnClick}
            className="flex items-center justify-center"
          >
            {btnClicked ? <LessBtn /> : <MoreBtn />}
          </div>
        )}
      </div>
      <div className="w-full mb-4">
        <svg
          viewBox="0 0 500 70"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <defs>
            <pattern
              id="image-pattern"
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                href="/images/affiliationbg.png"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>

          <path
            d="M0,0 L500,0 L500,50 C300,110 150,20 0,50 Z"
            style={{
              stroke: "none",
              fill: "url(#image-pattern)",
            }}
          ></path>
        </svg>
      </div>
      ;
    </>
  );
};

export default Affiliations;
