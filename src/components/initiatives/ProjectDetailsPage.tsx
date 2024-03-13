import { useState } from "react";

import { useParams } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import Heading from "../common/Heading";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { IoTriangleSharp } from "react-icons/io5";

import ProjectContribution from "./ProjectContribution";
import ParticipationForm from "./ParticipationForm";

import {
  Calendar,
  CheckSquare2,
  HandCoins,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { RiDoubleQuotesL } from "react-icons/ri";
import DonarPopup from "./Donarpopup";

interface Array {
  img: string;
}
interface Testimonials {
  testimonial: string;
  image: string;
  name: string;
  id: number;
}

interface Donars {
  name: string;
  image: string;
  amount: number;
}

interface ProjectInitiatives {
  status: string;
  id: number;
  title: string;
  description: string;
  image: string;
  outcomeImage: string | null;
  outcomeDesc: string | null;
  involvementImg: string | null;
  involvementDesc: string | null;
  targetAudienceImg: string | null;
  targetAudienceDesc: string | null;
  projectDate: string;
  projectBudget: number;
  donationReceived: number;
  donationPercent: number;
  individualDonars: Donars[] | null;
  institutionDonars: Donars[] | null;
  testimonials: Testimonials[];
  glimpses: Array[] | null;
}

const myProjectInitiatives: ProjectInitiatives[] = [
  {
    status: "Ongoing",
    id: 1,
    title: "Mendo Trust",
    description: `Mendo Trust&quot; could be a local or niche organization, a fictional entity, or a newly
established initiative that hasn&#39;t gained widespread recognition yet.
If &quot;Mendo Trust&quot; is a local organization or initiative, you may want to provide more
context or specify its area of focus or location so I can provide more accurate
information.
Alternatively, if &quot;Mendo Trust&quot; is a fictional concept or a newly formed organization, you
might consider elaborating on its purpose, mission, or goals, and I can help you create a
description or backstory for it.`,
    image: "/images/common/initiatives.png",
    outcomeImage: null,
    outcomeDesc: null,
    involvementImg: null,
    involvementDesc: null,
    projectDate: "20 Feb 2024",

    targetAudienceImg: null,
    targetAudienceDesc: null,
    projectBudget: 100000,
    donationReceived: 50000,
    donationPercent: 65,
    individualDonars: [
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 50000,
      },
      {
        name: "David",
        image: "/images/common/Donar2.png",
        amount: 10000,
      },
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 40000,
      },
    ],
    institutionDonars: [
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 50000,
      },
      {
        name: "David",
        image: "/images/common/Donar2.png",
        amount: 10000,
      },
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 40000,
      },
    ],
    testimonials: [
      {
        name: "Rita",
        id: 1,
        testimonial: `Donating to this organization was incredibly fulfilling. I knew my contribution was making a direct impact on people's lives, and the process was smooth and transparent. I highly recommend supporting their cause`,
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 2,
        testimonial: `Donating to this organization was incredibly fulfilling. I knew my contribution was making a direct impact on people's lives, and the process was smooth and transparent. I highly recommend supporting their cause`,
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 3,
        testimonial: `Donating to this organization was incredibly fulfilling. I knew my contribution was making a direct impact on people's lives, and the process was smooth and transparent. I highly recommend supporting their cause`,
        image: "/images/common/Donar1.png",
      },
    ],
    glimpses: null,
  },
  {
    status: "Upcoming",
    id: 2,
    title: "Language Preservation Project",
    description: `Language preservation projects are initiatives aimed at safeguarding endangered languages
from extinction by documenting, revitalizing, and promoting their use within communities. These
projects are vital for maintaining linguistic diversity, cultural heritage, and the identities of
language-speaking communities worldwide.`,
    image: "/images/common/initiatives.png",
    outcomeImage: "/images/common/initiatives.png",
    outcomeDesc: `Language preservation projects are initiatives aimed at safeguarding endangered languages
from extinction by documenting, revitalizing, and promoting their use within communities. These
projects are vital for maintaining linguistic diversity, cultural heritage, and the identities of
language-speaking communities worldwide.`,

    involvementImg: "/images/common/Initiatives.png",
    involvementDesc: `Language preservation projects are initiatives aimed at safeguarding endangered languages
from extinction by documenting, revitalizing, and promoting their use within communities. These
projects are vital for maintaining linguistic diversity, cultural heritage, and the identities of
language-speaking communities worldwide.`,
    targetAudienceImg: "/images/common/Initiatives.png",
    targetAudienceDesc: `Language preservation projects are initiatives aimed at safeguarding endangered languages
from extinction by documenting, revitalizing, and promoting their use within communities. These
projects are vital for maintaining linguistic diversity, cultural heritage, and the identities of
language-speaking communities worldwide.`,
    projectDate: "20 Feb 2024",
    projectBudget: 100000,
    donationReceived: 50000,
    donationPercent: 65,
    individualDonars: [
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 50000,
      },
      {
        name: "David",
        image: "/images/common/Donar2.png",
        amount: 10000,
      },
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 40000,
      },
    ],
    institutionDonars: [
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 50000,
      },
      {
        name: "David",
        image: "/images/common/Donar2.png",
        amount: 10000,
      },
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 40000,
      },
    ],
    testimonials: [
      {
        name: "Rita",
        id: 1,
        testimonial: `As a donor, I value transparency and accountability. This organization exceeded my expectations in both areas. They regularly update donors on their projects and how funds are being used. It's reassuring to know my donation is being put to good use.`,

        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 2,
        testimonial: `As a donor, I value transparency and accountability. This organization exceeded my expectations in both areas. They regularly update donors on their projects and how funds are being used. It's reassuring to know my donation is being put to good use.`,
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 3,
        testimonial: `As a donor, I value transparency and accountability. This organization exceeded my expectations in both areas. They regularly update donors on their projects and how funds are being used. It's reassuring to know my donation is being put to good use.`,
        image: "/images/common/Donar1.png",
      },
    ],
    glimpses: null,
  },
  {
    status: "Completed",
    id: 3,
    title: "Awareness Campaign",
    description: `An awareness campaign is a strategic effort designed to inform, educate, or mobilize individuals
or groups about a particular issue, cause, or initiative. These campaigns aim to raise
awareness, change attitudes, and inspire action among target audiences. Awareness
campaigns can be organized by governments, non-profit organizations, businesses, or
community groups, and they often utilize a variety of communication channels and tactics to

reach their objectives.`,
    image: "/images/common/initiatives.png",
    outcomeImage: "images/common/initiatives.png",
    outcomeDesc: `An awareness campaign is a strategic effort designed to inform, educate, or mobilize individuals
or groups about a particular issue, cause, or initiative. These campaigns aim to raise
awareness, change attitudes, and inspire action among target audiences. Awareness
campaigns can be organized by governments, non-profit organizations, businesses, or
community groups, and they often utilize a variety of communication channels and tactics to

reach their objectives.`,
    involvementImg: "/images/common/Initiatives.png",
    involvementDesc: `An awareness campaign is a strategic effort designed to inform, educate, or mobilize individuals
or groups about a particular issue, cause, or initiative. These campaigns aim to raise
awareness, change attitudes, and inspire action among target audiences. Awareness
campaigns can be organized by governments, non-profit organizations, businesses, or
community groups, and they often utilize a variety of communication channels and tactics to

reach their objectives.`,
    targetAudienceImg: null,
    targetAudienceDesc: null,
    projectDate: "20 Feb 2024",
    projectBudget: 100000,
    donationReceived: 50000,
    donationPercent: 65,
    individualDonars: [
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 50000,
      },
      {
        name: "David",
        image: "/images/common/Donar2.png",
        amount: 10000,
      },
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 40000,
      },
    ],
    institutionDonars: [
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 50000,
      },
      {
        name: "David",
        image: "/images/common/Donar2.png",
        amount: 10000,
      },
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 40000,
      },
    ],
    testimonials: [
      {
        name: "Rita",
        id: 1,
        testimonial: `I became a donor after seeing the positive impact this organization had on a friend's life. They provide crucial support and services to those in need, and I'm honored to contribute to their cause. Highly recommended for anyone looking to make a difference.`,
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 2,
        testimonial: `I became a donor after seeing the positive impact this organization had on a friend's life. They provide crucial support and services to those in need, and I'm honored to contribute to their cause. Highly recommended for anyone looking to make a difference.`,
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 3,
        testimonial: `I became a donor after seeing the positive impact this organization had on a friend's life. They provide crucial support and services to those in need, and I'm honored to contribute to their cause. Highly recommended for anyone looking to make a difference.`,
        image: "/images/common/Donar1.png",
      },
    ],
    glimpses: [
      {
        img: "/images/common/Publication.png",
      },
      {
        img: "/images/common/Timeline.png",
      },
      {
        img: "/images/common/Publication.png",
      },
      {
        img: "/images/common/Timeline.png",
      },
      {
        img: "/images/common/Timeline.png",
      },
    ],
  },
  {
    status: "Ongoing",
    id: 4,
    title: "Donation Campaign",
    description: `A donation campaign is a coordinated effort to raise funds for a specific cause, organization,
project, or initiative. These campaigns are typically organized by non-profit organizations,
charities, community groups, or individuals to support a wide range of needs, including
humanitarian aid, medical research, disaster relief, environmental conservation, education, and
more.`,
    image: "/images/common/Publication.png",
    outcomeImage: "images/common/Publication.png",
    outcomeDesc: `A donation campaign is a coordinated effort to raise funds for a specific cause, organization,
project, or initiative. These campaigns are typically organized by non-profit organizations,
charities, community groups, or individuals to support a wide range of needs, including
humanitarian aid, medical research, disaster relief, environmental conservation, education, and
more.`,
    involvementImg: "/images/common/Initiatives.png",
    involvementDesc: `A donation campaign is a coordinated effort to raise funds for a specific cause, organization,
project, or initiative. These campaigns are typically organized by non-profit organizations,
charities, community groups, or individuals to support a wide range of needs, including
humanitarian aid, medical research, disaster relief, environmental conservation, education, and
more.`,
    targetAudienceImg: null,
    targetAudienceDesc: null,
    projectDate: "20 Feb 2024",
    donationPercent: 65,
    projectBudget: 100000,
    donationReceived: 50000,
    individualDonars: [
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 50000,
      },
      {
        name: "David",
        image: "/images/common/Donar2.png",
        amount: 10000,
      },
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 40000,
      },
    ],
    institutionDonars: [
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 50000,
      },
      {
        name: "David",
        image: "/images/common/Donar2.png",
        amount: 10000,
      },
      {
        name: "John",
        image: "/images/common/Donar1.png",
        amount: 40000,
      },
    ],
    testimonials: [
      {
        name: "Rita",
        id: 1,
        testimonial: `A donation campaign is a coordinated effort to raise funds for a specific cause, organization,
project, or initiative. These campaigns are typically organized by non-profit organizations,
charities, community groups, or individuals to support a wide range of needs, including
humanitarian aid, medical research, disaster relief, environmental conservation, education, and
more.`,
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 2,
        testimonial: `A donation campaign is a coordinated effort to raise funds for a specific cause, organization,
project, or initiative. These campaigns are typically organized by non-profit organizations,
charities, community groups, or individuals to support a wide range of needs, including
humanitarian aid, medical research, disaster relief, environmental conservation, education, and
more.`,
        image: "/images/common/Donar2.png",
      },
      {
        name: "Rita",
        id: 3,
        testimonial: `A donation campaign is a coordinated effort to raise funds for a specific cause, organization,
project, or initiative. These campaigns are typically organized by non-profit organizations,
charities, community groups, or individuals to support a wide range of needs, including
humanitarian aid, medical research, disaster relief, environmental conservation, education, and
more.`,
        image: "/images/common/Donar1.png",
      },
    ],
    glimpses: null,
  },
];

const responsive = {
  0: { items: 1 },
  800: { items: 2 },
  1024: { items: 3 },
};

const ProjectDetailsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("individual");
  const [isIndividualViewClicked, setIsIndividualViewClicked] = useState(false);
  const [isInstitutionViewClicked, setIsInstitutionViewClicked] =
    useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDonar, setSelectedDonar] = useState<Donars | null>(null);

  const closePopup = () => setIsPopupOpen(false);

  const onDonarClick = (donarObjDetail: Donars) => {
    setSelectedDonar(donarObjDetail);
    setIsPopupOpen(true);
  };

  const onInidividualViewClick = () =>
    setIsIndividualViewClicked(!isIndividualViewClicked);
  const onInstitutionViewClick = () =>
    setIsInstitutionViewClicked(!isInstitutionViewClicked);

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const { id } = useParams<{ id: string }>();
  const selectedProject = myProjectInitiatives.find(
    (project) => project.id === Number(id)
  );

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
              xlinkHref="/images/ProjectDetailsBg.png"
              clipPath={`url(#clipPath)`}
              style={{ objectPosition: "center" }}
              preserveAspectRatio="xMinYMin slice"
              width={"100%"}
              height={"100%"}
            />
          </svg>
        </div>
        <div className="absolute top-[20%] left-10 md:left-16 lg:left-24 xl:left-36 text-white">
          <h1
            className="text-xl font-semibold border-b-[3px] border-primary-btnColor w-fit"
            style={{ lineHeight: "42px" }}
          >
            {selectedProject?.status} Project
          </h1>
          <p className="py-4 font-bold text-3xl">{selectedProject?.title}</p>
        </div>
      </div>
      {/* after header section  */}
      {/* overview section  */}
      <div className="px-8 md:px-12 lg:px-20 xl:px-28">
        <Heading heading="Project Overview" />
        <div className="py-16 flex flex-col-reverse md:flex-row w-full">
          <div className="w-full md:w-[55%] lg:w-[60%] md:mr-6 px-4 mt-8 md:mt-0">
            <div
              dangerouslySetInnerHTML={{
                __html: selectedProject?.description || "",
              }}
              style={{
                textAlign: "justify",
                lineHeight: "30px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
            ></div>
            <div className="flex flex-wrap items-center justify-center">
              {selectedProject?.projectDate && (
                <div className="flex flex-col items-center justify-center my-10 xl:my-10 mx-10 xl:mx-16">
                  <Calendar className="text-primary-btnColor w-8 h-8 mb-4" />
                  <p className="text-[#828587] font-bold font-mulish py-4">
                    Project date
                  </p>
                  <p className="font-sourceSerifPro text-3xl font-semibold">
                    {selectedProject.projectDate}
                  </p>
                </div>
              )}
              {selectedProject?.projectBudget &&
                (selectedProject.status === "Completed" ||
                  selectedProject.status === "Upcoming") && (
                  <div className="flex flex-col items-center justify-center my-10 xl:my-10 mx:10 xl:mx-16">
                    <CheckSquare2 className="text-primary-btnColor w-10 h-10 mb-4" />
                    <p className="text-[#828587] font-bold font-mulish py-4">
                      Project Budget
                    </p>
                    <p className="font-sourceSerifPro text-3xl font-semibold">
                      Rs {selectedProject.projectBudget}
                    </p>
                  </div>
                )}

              {selectedProject?.donationReceived &&
                selectedProject.status === "Completed" && (
                  <div className="flex flex-col items-center justify-center my-10 xl:my-8 mx-10 xl:mx-16">
                    <HandCoins className="text-primary-btnColor w-10 h-10 mb-4" />
                    <p className="text-[#828587] font-bold font-mulish py-4">
                      Donation Received{" "}
                    </p>
                    <p className="font-sourceSerifPro text-3xl font-semibold">
                      Rs {selectedProject.donationReceived}
                    </p>
                  </div>
                )}
            </div>
          </div>
          <div className="w-full md:w-[45%] lg:w-[40%]">
            <div className="w-full h-[50vh] relative flex flex-col items-center justify-center">
              <img
                src="/images/common/Upwrapper.png"
                alt="upwraper"
                className="absolute top-[-2%] md:top-[-3%] lg:top-[-4%] left-[-4%] md:left-[0%] lg:left-[0%]"
              />
              <img
                src={selectedProject?.image}
                alt="project"
                className="w-[100%] md:w-[94%] h-[98%] md:h-full"
              />
              <img
                src="/images/common/Downwrapper.png"
                alt="upwraper"
                className="absolute right-[-3%] md:right-[0%] lg:right-[0%] bottom-[-2%] md:bottom-[-3%] lg:bottom-[-4%]"
              />
            </div>
            <button className="mx-auto text-white font-mulish text-base bg-primary-btnColor transition duration-300 ease-in-out hover:text-black hover:border hover:border-primary-btnColor px-3 py-2 rounded-full hover:bg-white flex items-center mt-8">
              Download Project Report
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* conditional contribution section for ongoing project  */}
      {selectedProject?.status === "Ongoing" && (
        <ProjectContribution
          projectBudget={selectedProject?.projectBudget}
          donationReceived={selectedProject?.donationReceived}
          donationPercent={selectedProject?.donationPercent}
        />
      )}

      {/* project outcome section  */}
      {selectedProject?.outcomeImage && (
        <div className="px-8 md:px-12 lg:px-20 xl:px-32">
          <Heading heading="Project Outcomes" />
          <div className="my-10 min-h-[40vh]">
            <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[32%] h-[45vh] xl:h-[40vh] relative mb-6 md:float-left md:mr-8 lg:mr-12">
              <img
                src="/images/common/Upwrapper.png"
                alt="upwraper"
                className="absolute top-[-3%] lg:top-[-4%] left-[-4%] md:left-[-3%]"
              />
              <img
                src={selectedProject?.outcomeImage}
                alt="project"
                className="w-[100%] md:w-[96%] h-[98%] md:h-full"
              />
              <img
                src="/images/common/Downwrapper.png"
                alt="upwraper"
                className="absolute right-[-3%] md:right-[0%] lg:right-[0%] bottom-[-2%] md:bottom-[-3%] lg:bottom-[-4%]"
              />
            </div>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: selectedProject?.outcomeDesc || "",
              }}
              style={{
                textAlign: "justify",
                lineHeight: "30px",
              }}
            ></div>
          </div>
        </div>
      )}

      {/* involvement section  */}
      {selectedProject?.involvementImg !== null && (
        <div className="px-8 md:px-12 lg:px-20 xl:px-32 my-16 min-h-[52vh]">
          <Heading heading="Involvement" />
          <div className="mt-8">
            <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] h-[45vh] xl:h-[40vh] relative mb-6 md:float-right md:ml-12 md:mt-4">
              <img
                src="/images/common/Upwrapper.png"
                alt="upwraper"
                className="absolute top-[-3%] lg:top-[-4%] left-[-4%] md:left-[-3%]"
              />
              <img
                src={selectedProject?.involvementImg}
                alt="project"
                className="w-[100%] md:w-[96%] h-[98%] md:h-full"
              />
              <img
                src="/images/common/Downwrapper.png"
                alt="upwraper"
                className="absolute right-[-3%] md:right-[0%] lg:right-[0%] bottom-[-2%] md:bottom-[-3%] lg:bottom-[-4%]"
              />
            </div>
            <div
              className=" "
              dangerouslySetInnerHTML={{
                __html: selectedProject?.outcomeDesc || "",
              }}
              style={{
                textAlign: "justify",
                lineHeight: "30px",
              }}
            ></div>
          </div>
        </div>
      )}
      {/* target audience  */}
      {selectedProject?.targetAudienceDesc && (
        <div className="px-8 md:px-12 lg:px-20 xl:px-32 my-16 min-h-[50vh]">
          <Heading heading="Target Audience" />
          <div className="mt-8">
            <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] h-[45vh] xl:h-[40vh] relative mb-6 md:float-right md:ml-12 md:mt-4">
              <img
                src="/images/common/Upwrapper.png"
                alt="upwraper"
                className="absolute top-[-3%] lg:top-[-4%] left-[-4%] md:left-[-3%]"
              />
              {selectedProject?.targetAudienceImg !== null ? (
                <img
                  src={selectedProject?.targetAudienceImg}
                  alt="project"
                  className="w-[100%] md:w-[96%] h-[98%] md:h-full"
                />
              ) : null}

              <img
                src="/images/common/Downwrapper.png"
                alt="upwraper"
                className="absolute right-[-3%] md:right-[0%] lg:right-[0%] bottom-[-2%] md:bottom-[-3%] lg:bottom-[-4%]"
              />
            </div>
            <div
              className=" "
              dangerouslySetInnerHTML={{
                __html: selectedProject?.outcomeDesc || "",
              }}
              style={{
                textAlign: "justify",
                lineHeight: "30px",
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Donors Switch Section
       */}
      <div className="my-10">
        {selectedProject?.status === "Completed" && (
          <div className="w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 2000 200"
              fill="none"
            >
              <path
                d="M0 0.000244141C0 0.000244141 500 178.488 1000 68.1447C1500 -42.1987 2000 68.1447 2000 68.1447V1080H0V0.000244141Z"
                fill="#FFF0E1"
                fillOpacity="0.5"
              />
              <foreignObject
                x="0"
                y="10%"
                width="100%"
                height="100%"
              ></foreignObject>
            </svg>
          </div>
        )}
        {selectedProject?.individualDonars &&
          selectedProject?.institutionDonars && (
            <div
              className={`${
                selectedProject.status === "Completed"
                  ? "bg-secondary-detailsBackground"
                  : ""
              } px-8 md:px-20 lg:px-28 xl:px-36 `}
            >
              <Heading heading="List Of Donors" />
              <div className="flex justify-center items-center my-10 mb-16 rounded">
                <button
                  className={`px-8 py-2 ${
                    selectedCategory === "individual"
                      ? "border-b-4 border-primary-btnColor"
                      : "border-b-4 border-gray-300"
                  }`}
                  onClick={() => setSelectedCategory("individual")}
                >
                  Individual
                </button>
                <button
                  className={`px-8 py-2 ${
                    selectedCategory === "institution"
                      ? "border-b-4 border-primary-btnColor"
                      : "border-b-4 border-gray-300"
                  }`}
                  onClick={() => setSelectedCategory("institution")}
                >
                  Institution
                </button>
              </div>

              {selectedCategory === "individual" ? (
                <>
                  <div className="flex flex-wrap items-center justify-center w-full">
                    {selectedProject?.individualDonars.length <= 4 ||
                    isIndividualViewClicked
                      ? selectedProject?.individualDonars.map(
                          (donor: Donars, index) => (
                            <div
                              className="flex flex-col items-center justify-center w-[80%] md:w-[30%] lg:w-[24%] xl:w-[20%] mx-6 mb-10"
                              key={index}
                            >
                              <div className="w-full h-[24vh] mb-2 relative">
                                <img
                                  src={donor.image}
                                  alt="donor"
                                  className="w-full h-full object-cover object-center rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-50 bg-black transition-opacity duration-500">
                                  <h1
                                    className="text-white text-lg font-semibold cursor-pointer"
                                    onClick={() => onDonarClick(donor)}
                                  >
                                    View More
                                  </h1>
                                </div>
                              </div>

                              <h1 className="font-semibold text-primary-headingColor text-xl">
                                {donor.name}
                              </h1>
                              <h1 className="font-semibold text-primary-headingColor text-xl">
                                Rs.{donor.amount}
                              </h1>
                            </div>
                          )
                        )
                      : selectedProject?.individualDonars
                          .slice(0, 4)
                          .map((donor, index) => (
                            <div
                              className="flex flex-col items-center justify-center w-[80%] md:w-[30%] lg:w-[24%] xl:w-[20%]  mx-6 mb-10"
                              key={index}
                            >
                              <div className="w-full h-[24vh] mb-2 relative">
                                <img
                                  src={donor.image}
                                  alt="donor"
                                  className="w-full h-full object-cover object-center rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-50 bg-black transition-opacity duration-500">
                                  <h1
                                    className="text-white text-lg font-semibold cursor-pointer"
                                    onClick={() => onDonarClick(donor)}
                                  >
                                    View More
                                  </h1>
                                </div>
                              </div>
                              <h1 className="font-semibold text-primary-headingColor text-xl">
                                {donor.name}
                              </h1>
                              <h1 className="font-semibold text-primary-headingColor text-xl">
                                Rs.{donor.amount}
                              </h1>
                            </div>
                          ))}
                  </div>
                  {selectedProject?.individualDonars.length > 4 && (
                    <h1
                      onClick={onInidividualViewClick}
                      className="text-center py-10 font-mulish font-bold text-sm cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                    >
                      {isIndividualViewClicked ? "View Less" : "View More"}
                    </h1>
                  )}
                </>
              ) : (
                <>
                  <div className="flex flex-wrap items-center justify-center w-full">
                    {selectedProject?.institutionDonars.length <= 4 ||
                    isInstitutionViewClicked
                      ? selectedProject?.institutionDonars.map(
                          (donor, index) => (
                            <div
                              className="flex flex-col items-center justify-center w-[80%] md:w-[30%] lg:w-[24%] xl:w-[20%] mx-6 mb-10"
                              key={index}
                            >
                              <div className="w-full h-[24vh] mb-2 relative">
                                <img
                                  src={donor.image}
                                  alt="donor"
                                  className="w-full h-full object-cover object-center rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-50 bg-black transition-opacity duration-500">
                                  <h1
                                    className="text-white text-lg font-semibold cursor-pointer"
                                    onClick={() => onDonarClick(donor)}
                                  >
                                    View More
                                  </h1>
                                </div>
                              </div>
                              <h1 className="font-semibold text-primary-headingColor text-xl">
                                {donor.name}
                              </h1>
                              <h1 className="font-semibold text-primary-headingColor text-xl">
                                Rs.{donor.amount}
                              </h1>
                            </div>
                          )
                        )
                      : selectedProject?.institutionDonars
                          .slice(0, 4)
                          .map((donor, index) => (
                            <div
                              className="flex flex-col items-center justify-center  w-[80%] md:w-[30%] lg:w-[24%] xl:w-[20%]  mx-6 mb-10"
                              key={index}
                            >
                              <div className="w-full h-[24vh] mb-2 relative">
                                <img
                                  src={donor.image}
                                  alt="donor"
                                  className="w-full h-full object-cover object-center rounded"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-50 bg-black transition-opacity duration-500">
                                  <h1
                                    className="text-white text-lg font-semibold cursor-pointer"
                                    onClick={() => onDonarClick(donor)}
                                  >
                                    View More
                                  </h1>
                                </div>
                              </div>
                              <h1 className="font-semibold text-primary-headingColor text-xl">
                                {donor.name}
                              </h1>
                              <h1 className="font-semibold text-primary-headingColor text-xl">
                                Rs.{donor.amount}
                              </h1>
                            </div>
                          ))}
                  </div>
                  {selectedProject?.institutionDonars.length > 4 && (
                    <h1
                      onClick={onInstitutionViewClick}
                      className="text-center py-10 font-mulish font-bold text-sm hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                    >
                      {isInstitutionViewClicked ? "View Less" : "View More"}
                    </h1>
                  )}
                </>
              )}
            </div>
          )}
      </div>

      {(selectedProject?.status === "Ongoing" ||
        selectedProject?.status === "Upcoming") && (
        <ParticipationForm
          status={selectedProject?.status}
          donars={selectedProject?.individualDonars}
          projectBudget={selectedProject?.projectBudget}
          donationReceived={selectedProject?.donationReceived}
          donationPercent={selectedProject?.donationPercent}
        />
      )}

      {/* Different Testimonials for different status  */}
      {selectedProject?.testimonials && (
        <div className="my-10 px-8 md:px-20 lg:px-28 xl:px-36 md:mt-20">
          <Heading
            heading={`${
              selectedProject.status === "Completed"
                ? "Testimonials"
                : "Testimonials of Donars"
            }`}
          />
          {selectedProject?.status === "Completed" ? (
            <div className="w-full md:mt-6">
              <AliceCarousel
                mouseTracking
                disableDotsControls
                renderPrevButton={() => (
                  <div className="flex items-center justify-end">
                    <ArrowLeft className="text-primary-btnColor cursor-pointer" />
                  </div>
                )}
                renderNextButton={() => (
                  <div className="flex items-center justify-start">
                    <ArrowRight className="text-primary-btnColor cursor-pointer" />
                  </div>
                )}
              >
                {selectedProject.testimonials.map((item) => (
                  <div
                    className="px-6 py-6 flex flex-col md:flex-row w-[90%] box-shadow mx-4 md:mx-6 lg:mx-8 my-6 md:my-10"
                    key={item.id}
                  >
                    <div className="w-full md:w-[45%] lg:w-[35%] xl:w-[25%] h-[42vh]">
                      <img
                        src={item.image}
                        alt="testimonial"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full md:w-[55%] lg:w-[65%] xl:w-[75%] md:ml-6 mt-6 md:mt-0">
                      <RiDoubleQuotesL className="w-10 h-10 text-primary-headingColor" />
                      <div className="ml-10 flex flex-col h-full">
                        <div
                          dangerouslySetInnerHTML={{ __html: item.testimonial }}
                          style={{
                            lineHeight: "32px",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 6,
                            textAlign: "justify",
                            width: "95%",
                          }}
                        ></div>
                        <h1 className="py-4 font-mulish text-primary-headingColor text-base font-semibold">
                          {item.name}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </AliceCarousel>
            </div>
          ) : (
            <div className="w-full mt-6">
              <AliceCarousel
                mouseTracking
                disableDotsControls
                renderPrevButton={() => (
                  <div className="flex items-center justify-end">
                    <ArrowLeft className="text-primary-btnColor cursor-pointer" />
                  </div>
                )}
                renderNextButton={() => (
                  <div className="flex items-center justify-start">
                    <ArrowRight className="text-primary-btnColor cursor-pointer" />
                  </div>
                )}
                responsive={responsive}
              >
                {selectedProject.testimonials.map((item) => (
                  <div className="flex flex-col items-center mx-4 my-4">
                    <div className="py-4 md:py-10 px-4 md:px-8 flex justify-center box-shadow h-fit relative my-6 ">
                      <RiDoubleQuotesL className="w-6 h-6 text-primary-btnColor mb-4" />
                      <div
                        dangerouslySetInnerHTML={{ __html: item.testimonial }}
                        style={{
                          lineHeight: "30px",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 5,
                          textAlign: "justify",
                        }}
                      ></div>
                      <IoTriangleSharp className="text-white absolute bottom-[-8%] left-[44%] w-12 mb-1 h-12 transform rotate-180" />
                    </div>
                    <div className="w-20 h-20 rounded-full mt-4">
                      <img
                        src={item.image}
                        alt="testimonial"
                        className="h-full w-full object-center object-cover rounded-full"
                      />
                    </div>
                    <h1 className="text-center font-bold font-mulish my-4">
                      {item.name}
                    </h1>
                  </div>
                ))}
              </AliceCarousel>
            </div>
          )}
        </div>
      )}

      {/* Glimpses */}
      {selectedProject?.glimpses && (
        <div className="my-6 md:my-10 px-8 md:px-8 lg:px-12 xl:px-24 mt-12">
          <Heading heading="Glimpses" />
          <div className="hidden my-6 md:flex flex-row w-full h-[65vh] lg:h-[78vh] mt-10">
            <div className="w-[45%] h-full ">
              <img
                src={selectedProject?.glimpses[0].img}
                alt="glimpse"
                className="h-full w-full"
              />
            </div>
            <div className="w-[55%] lg:w-1/2 h-full grid grid-cols-2 ml-6">
              <div>
                <img
                  src={selectedProject?.glimpses[1].img}
                  alt="glimpse"
                  className="w-[95%] h-[95%] mr-6"
                />
              </div>
              <div>
                <img
                  src={selectedProject?.glimpses[1].img}
                  alt="glimpse"
                  className="w-[95%] h-[95%]"
                />
              </div>
              <div>
                <img
                  src={selectedProject?.glimpses[1].img}
                  alt="glimpse"
                  className="w-[95%] h-[98%]"
                />
              </div>
              <div>
                <img
                  src={selectedProject?.glimpses[1].img}
                  alt="glimpse"
                  className="w-[95%] h-[98%]"
                />
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <AliceCarousel
              disableDotsControls
              mouseTracking
              renderPrevButton={() => (
                <div className="flex items-center justify-end">
                  <ArrowLeft className="text-primary-btnColor cursor-pointer" />
                </div>
              )}
              renderNextButton={() => (
                <div className="flex items-center justify-start">
                  <ArrowRight className="text-primary-btnColor cursor-pointer" />
                </div>
              )}
              responsive={responsive}
            >
              {selectedProject.glimpses.map((item) => (
                <div className="h-[40vh] w-full my-6">
                  <img src={item.img} alt="glimpse" className="w-full h-full" />
                </div>
              ))}
            </AliceCarousel>
          </div>
        </div>
      )}
      {isPopupOpen && (
        <DonarPopup donarDetails={selectedDonar} closePopup={closePopup} />
      )}
    </>
  );
};
export default ProjectDetailsPage;
