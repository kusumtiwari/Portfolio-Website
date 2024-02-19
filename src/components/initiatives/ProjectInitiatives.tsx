import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import ReadmoreBtn from "../common/ReadmoreBtn";

import { useMediaQuery } from "react-responsive";

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
    image: "images/common/initiatives.png",
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
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 2,
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 3,
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
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
    image: "images/common/initiatives.png",
    outcomeImage: "images/common/initiatives.png",
    outcomeDesc:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non",
    involvementImg: "/images/common/Initiatives.png",
    involvementDesc:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
    targetAudienceImg: "/images/common/Initiatives.png",
    targetAudienceDesc:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
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
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 2,
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 3,
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
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
    image: "images/common/initiatives.png",
    outcomeImage: "images/common/initiatives.png",
    outcomeDesc:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non",
    involvementImg: "/images/common/Initiatives.png",
    involvementDesc:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
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
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 2,
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 3,
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
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
    image: "images/common/Publication.png",
    outcomeImage: "images/common/Publication.png",
    outcomeDesc:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non",
    involvementImg: "/images/common/Initiatives.png",
    involvementDesc:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
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
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
        image: "/images/common/Donar1.png",
      },
      {
        name: "Rita",
        id: 2,
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
        image: "/images/common/Donar2.png",
      },
      {
        name: "Rita",
        id: 3,
        testimonial:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation",
        image: "/images/common/Donar1.png",
      },
    ],
    glimpses: null,
  },
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const ProjectInitiatives: React.FC = () => {
  // hovered or default project initiative
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onProjectHover = (index: number) => {
    setSelectedIndex(index);
  };

  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const carouselResponsive = isSmallScreen ? responsive : {};
  const selectedProject = myProjectInitiatives[selectedIndex];
  const displayInitiativesDetailPage = () => {
    navigate(`/initiatives/${selectedProject.id}`);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="bg-secondary-detailsBackground py-10 px-8 md:px-8 lg:px-12 xl:px-36 h-fit">
        <h1
          className="text-xl font-semibold border-b-[3px] border-primary-btnColor w-fit mx-auto"
          style={{ lineHeight: "42px" }}
        >
          Project Initiatives
        </h1>
        <div className="md:flex font-mulish my-10">
          <div
            className="w-full md:w-[40%] lg:w-[30%] cursor-pointer"
            onClick={displayInitiativesDetailPage}
          >
            <h1
              className="text-sm font-semibold  border-b-[3px] border-primary-btnColor w-fit"
              style={{ lineHeight: "40px" }}
            >
              {selectedProject.status} Project
            </h1>
            <h1 className="text-2xl font-semibold text-primary-headingColor font-inter py-4">
              {selectedProject.title}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedProject.description,
              }}
              className="text-justify"
              style={{
                lineHeight: "28px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 5,
              }}
            ></div>
            <ReadmoreBtn />
          </div>
          <div className="w-full md:w-[70%] md:ml-12 mt-6">
            <AliceCarousel
              mouseTracking
              autoWidth
              onSlideChanged={(e) => setSelectedIndex(e.slide)}
              disableButtonsControls
              responsive={carouselResponsive}
            >
              {myProjectInitiatives.map((item, index) => (
                <div
                  onMouseOver={() => onProjectHover(index)}
                  className={`${
                    index === selectedIndex
                      ? "w-[100%] h-[45vh] md:h-[45vh] md:w-[26vw]"
                      : "w-[100%] h-[45vh] md:h-[30vh] lg:w-[15vw] xl:w-[13vw] md:mt-10 md:px-2 md:opacity-80"
                  } cursor-pointer transition-opacity duration-700 ease-in-out mb-16`}
                >
                  <img
                    src={item.image}
                    alt="project"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </AliceCarousel>
          </div>
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
export default ProjectInitiatives;
