import { useState } from "react";
import Heading from "../common/Heading";
import { useNavigate } from "react-router-dom";

interface categoriesDetails {
  id: number;
  logo: string | null;
  position: string | null;
  startDate: string | null;
  endDate: string | null;
  title: string | null;
  description: string | null;
  image: string | null;
  category: string | null;
  organization: string | null;
}

interface tabs {
  category: string;
  id: number;
}

const myTabs: tabs[] = [
  {
    category: "Community Development",
    id: 1,
  },
  {
    category: "Language and Linguistics",
    id: 2,
  },
  {
    category: "Teaching",
    id: 3,
  },
];
const myCategoriesDetails: categoriesDetails[] = [
  {
    id: 1,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "2013",
    endDate: "2014",
    title: `Effectiveness of prevention program against trafficking of women and
children and the status of rehabilitation center`,
    description: `The prevention program against trafficking of women and children has demonstrated
effectiveness through increased awareness, education, and community involvement,
resulting in reduced incidences of trafficking. However, challenges persist, including the
need for comprehensive enforcement of anti-trafficking laws and addressing root
causes such as poverty and gender inequality.`,
    image: "/images/InvolvementImg.png",
    category: "Community Development",
    organization: null,
  },

  {
    id: 2,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: "Ethno-linguistic Survey of Nepal",
    description: `The prevention program against trafficking of women and children has demonstrated
effectiveness through increased awareness, education, and community involvement,
resulting in reduced incidences of trafficking. However, challenges persist, including the
need for comprehensive enforcement of anti-trafficking laws and addressing root
causes such as poverty and gender inequality.`,
    image: "/images/InvolvementImg.png",
    category: "Language and Linguistics",
    organization: null,
  },
  {
    id: 3,
    logo: null,
    position: "Vice-Principle",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: null,
    description: null,
    image: null,
    category: "Teaching",
    organization: "Amrit Primary Boarding School, Mhepi, Kathmandu",
  },
  {
    id: 4,
    logo: null,
    position: "Vice-Principle",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: null,
    description: null,
    image: null,
    category: "Teaching",
    organization: "Amrit Primary Boarding School, Mhepi, Kathmandu",
  },
  {
    id: 5,
    logo: null,
    position: "Vice-Principle",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: null,
    description: null,
    image: null,
    category: "Teaching",
    organization: "Amrit Primary Boarding School, Mhepi, Kathmandu",
  },
  {
    id: 6,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: "Ethno-linguistic Survey of Nepal",
    description: `The prevention program against trafficking of women and children has demonstrated
effectiveness through increased awareness, education, and community involvement,
resulting in reduced incidences of trafficking. However, challenges persist, including the
need for comprehensive enforcement of anti-trafficking laws and addressing root
causes such as poverty and gender inequality.`,
    image: "/images/InvolvementImg.png",
    category: "Language and Linguistics",
    organization: null,
  },
  {
    id: 7,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "2013",
    endDate: "2014",
    title: "Ethno-linguistic Survey of Nepal",
    description: `The prevention program against trafficking of women and children has demonstrated
effectiveness through increased awareness, education, and community involvement,
resulting in reduced incidences of trafficking. However, challenges persist, including the
need for comprehensive enforcement of anti-trafficking laws and addressing root
causes such as poverty and gender inequality.`,
    image: "/images/InvolvementImg.png",
    category: "Community Development",
    organization: null,
  },
  {
    id: 8,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "2013",
    endDate: "2014",
    title: "Ethno-linguistic Survey of Nepal",
    description: `The prevention program against trafficking of women and children has demonstrated
effectiveness through increased awareness, education, and community involvement,
resulting in reduced incidences of trafficking. However, challenges persist, including the
need for comprehensive enforcement of anti-trafficking laws and addressing root
causes such as poverty and gender inequality.`,
    image: "/images/InvolvementImg.png",
    category: "Community Development",
    organization: null,
  },
  {
    id: 9,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: "Ethno-linguistic Survey of Nepal",
    description: `The prevention program against trafficking of women and children has demonstrated
effectiveness through increased awareness, education, and community involvement,
resulting in reduced incidences of trafficking. However, challenges persist, including the
need for comprehensive enforcement of anti-trafficking laws and addressing root
causes such as poverty and gender inequality.`,
    image: "/images/InvolvementImg.png",
    category: "Language and Linguistics",
    organization: null,
  },
];

const InvolvementCategories: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [viewAll, setViewAll] = useState(false);

  const navigate = useNavigate();

  const navigateToDetailsPage = (id: number) => {
    navigate(`/involvement/details/${id}`);
  };
  const onTabChange = (id: number) => setActiveTab(id);

  // Filtered details based on active tab's category
  const activeTabDetails = myCategoriesDetails.filter(
    (detail) =>
      detail.category === myTabs.find((tab) => tab.id === activeTab)?.category
  );
  console.log(activeTabDetails);
  return (
    <div className="px-6 md:px-12 lg:px-20 xl:px-36">
      <Heading heading="Involvement" />

      {/* tab  */}
      <div className="flex justify-center items-center my-10">
        {myTabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer px-6 border-b-4 border-solid pb-4 font-mulish font-bold ${
              tab.id === activeTab
                ? "border-primary-btnColor"
                : "border-gray-200"
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.category}
          </div>
        ))}
      </div>
      <div className="mb-16">
        <div
          className={`${
            activeTabDetails[0].category === "Teaching"
              ? "border-l border-neutral-100 lg:mt-[20rem] rounded-l-lg rounded-r-lg md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t-8"
              : ""
          }`}
        >
          {activeTabDetails.map((detail, index) =>
            detail.category !== "Teaching" ? (
              viewAll || activeTabDetails.length <= 2 ? (
                <div
                  key={detail.id}
                  className={`w-full cursor-pointer flex flex-col-reverse my-24 ${
                    index % 2 !== 0
                      ? "md:flex-row-reverse lg:flex-row-reverse"
                      : "md:flex-row lg:flex-row "
                  }`}
                  onClick={() => navigateToDetailsPage(detail.id)}
                >
                  <div
                    className={`md:w-1/2 ${index % 2 !== 0 ? "ml-8" : "mr-8"}`}
                  >
                    <div className="flex justify-center items-center flex-col h-fit">
                      {detail.logo && (
                        <img
                          src={detail.logo}
                          alt="logo"
                          className="h-[88px] w-[88px] mt-4 md:mt-0"
                        />
                      )}
                      <h1 className="text-primary-headingColor py-4  font-semibold text-xl">
                        {detail.position}
                      </h1>
                      <h1 className="font-mulish font-bold text-sm">
                        {detail.startDate} - {detail.endDate}
                      </h1>
                    </div>
                    <h1
                      className="mt-3 py-4 font-mulish text-base font-bold"
                      style={{
                        lineHeight: "26px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                      }}
                    >
                      {detail.title}
                    </h1>
                    <p
                      className="font-mulish text-justify"
                      style={{
                        lineHeight: "29px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 5,
                      }}
                    >
                      {detail.description}
                    </p>
                    <p className="text-primary-btnColor font-mulish font-bold text-sm cursor-pointer my-6">
                      Read More
                    </p>
                  </div>
                  <div className="md:w-1/2 h-[65vh]">
                    {detail.image && (
                      <img
                        src={detail.image}
                        alt="involvement"
                        className="w-full h-full object-cover object-center  rounded-tr-[80px] rounded-bl-[80px]"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={detail.id}
                  className={`w-full cursor-pointer my-24 ${
                    index >= 2 ? "hidden" : "flex"
                  } flex-col-reverse ${
                    index % 2 !== 0
                      ? "md:flex-row-reverse lg:flex-row-reverse"
                      : "md:flex-row lg:flex-row"
                  }`}
                  onClick={() => navigateToDetailsPage(detail.id)}
                >
                  <div
                    className={`md:w-1/2 ${index % 2 !== 0 ? "ml-8" : "mr-8"}`}
                  >
                    <div className="flex justify-center items-center flex-col h-fit">
                      {detail.logo && (
                        <img
                          src={detail.logo}
                          alt="logo"
                          className="h-[88px] w-[88px] mt-4 md:mt-0"
                        />
                      )}
                      <h1 className="text-primary-headingColor py-4  font-semibold text-xl">
                        {detail.position}
                      </h1>
                      <h1 className="font-mulish font-bold text-sm">
                        {detail.startDate} - {detail.endDate}
                      </h1>
                    </div>
                    <h1
                      className="py-4 font-mulish text-base font-bold mt-3"
                      style={{
                        lineHeight: "26px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                      }}
                    >
                      {detail.title}
                    </h1>
                    <p
                      className="font-mulish text-justify"
                      style={{
                        lineHeight: "29px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 5,
                      }}
                    >
                      {detail.description}
                    </p>
                    <p className="text-primary-btnColor font-mulish font-bold text-sm cursor-pointer my-6">
                      Read More
                    </p>
                  </div>
                  <div className="md:w-1/2 h-[65vh]">
                    {detail.image && (
                      <img
                        src={detail.image}
                        alt="involvement"
                        className="w-full h-full object-cover object-center  rounded-tr-[80px] rounded-bl-[80px]"
                      />
                    )}
                  </div>
                </div>
              )
            ) : (
              <>
                <div className="involvement-timeline   w-full relative">
                  <div className="  flex-start hidden md:block flex items-center pt-2 md:pt-0 relative min-h-[14vh]">
                    <div className="-ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-primary-btnColor md:-mt-[9px] md:absolute md:left-[30%]"></div>
                    <div className="line h-16  border-l-[3px] absolute left-[30%] top-3"></div>
                  </div>
                  <div className="item flex lg:w-[26rem] lg:ml-4 mt-2  md:ml-0 box-shadow lg:mx-4 my-4 px-2 lg:px-4 ">
                    <div className="border-r-2 w-[100%]  py-4 px-2 space-y-2">
                      <h1 className=" text-primary-headingColor text-lg font-semibold">
                        Head Master
                      </h1>
                      <p className="font-mulish  ">
                        Manedanda Lower Secondary School, Pinkhuri VDC,
                        Ramechhap District
                      </p>
                    </div>
                    <div className="w-[40%] h-full mt-4 py-4 px-2 flex flex-col items-center font-semibold">
                      <p className="font-semibold">Feb 1983</p>
                      <span>to</span>
                      <p> Oct 1987</p>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
          {activeTabDetails.length > 2 &&
            activeTabDetails[0].category !== "Teaching" && (
              <div
                className="text-black font-mulish font-bold text-sm cursor-pointer my-10 text-center"
                onClick={() => setViewAll(!viewAll)}
              >
                {viewAll ? "View Less" : "View All"}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
export default InvolvementCategories;
