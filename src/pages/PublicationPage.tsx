import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Heading from "../components/common/Heading";
import HerosectionCarousel from "../components/common/HerosectionCaarousel";
import MoreBtn from "../components/common/MoreBtn";
import CustomBtn from "../components/customBtn/CustomBtn";
import SliderCard from "./../components/sliderCards/SliderCard";
import Timeline from "../components/publicationPage/timelines/Timeline";
// import Heading from './../components/common/Heading';
import PublicationContent from "./../components/publicationPage/publicationContent/PublicationContent";
import {
  ArrowLeft,
  ArrowRight,
  CalendarMinus2,
  ChevronsRight,
  Eye,
  View,
} from "lucide-react";
import InputField from "../components/form/inputFields/InputField";
import { Link } from "react-router-dom";
import PublicationSlider from "../components/publicationPage/publicationSlider/PublicationSlider";
import DateViews from "../components/dateViews/DateViews";
import AliceCarousel from "react-alice-carousel";

interface HeroImages {
  image: string;
}

interface PublicationData {
  title: string;
  date: string;
  stars: number;
  description: string;
}
const publication: PublicationData = {
  title: "Tamang Shabhakosh",
  date: "20 Feb, 2024",
  stars: 4.5,
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid atque omnis architecto nisi consequuntur, voluptate, dicta voluptatum ex porro repudiandae exercitationem deserunt earum itaque! Dolorem unde similique eligendi laborum.",
};

const PublicationPage: React.FC = () => {
  const myArticles: Articles[] = [
    {
      date: "20 July, 2023",
      views: 256,
      title: "The geolinguistic status of languages of Nepal",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia",
      id: 1,
      createdAt: "20 July, 2023",
      image: "images/common/Publication.png",
    },
    {
      date: "20 July, 2023",
      views: 256,
      title: "The geolinguistic status of languages of Nepal",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia",
      id: 2,
      image: "images/common/Publication.png",
      createdAt: "20 July, 2023",
    },
    {
      date: "20 July, 2023",
      views: 256,
      title: "The geolinguistic status of languages of Nepal",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia",
      id: 3,
      image: "images/common/Publication.png",
      createdAt: "20 July, 2023",
    },
    {
      date: "20 July, 2023",
      createdAt: "20 July, 2023",
      views: 256,
      title: "The geolinguistic status of languages of Nepal",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia",
      id: 4,
      image: "images/common/Publication.png",
    },
  ];
  const myHeroImages: HeroImages[] = [
    {
      image: "/images/AboutBg.png",
    },
    {
      image: "/images/Herosectionimg.png",
    },
    {
      image: "images/Herosectionimg.png",
    },
  ];

  return (
    <>
      <div className="pb-12">
        <HerosectionCarousel myHeroImages={myHeroImages} />
      </div>
      <Heading heading="Latest Publications" />
      <PublicationContent
        publication={publication}
        className="w-full lg:w-[65%] mx-auto mt-10 lg:flex-row"
      />

      <PublicationSlider data={myArticles} />
      <>
        <div className="bg-secondary-detailsBackground px-8 md:px-16 lg:px-20 xl:px-32">
          <div className="py-2">
            <Heading heading="Upcoming Publications" className="my-8" />
          </div>
          <div className="w-[95%] lg:w-[90%] mx-auto">
            <div className=" flex items-center justify-center flex-col gap-10 lg:flex-row">
              <Timeline />
              <PublicationContent
                publication={publication}
                className="w-[60rem] mx-auto mt-10 lg:flex-row-reverse"
              />
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
      <div className="my-40 px-8 md:px-16 lg:px-20 xl:px-32">
        <Heading heading="list of publications" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {myArticles.map((item, index) => (
            <div
              key={index}
              className=" w-full h-fit py-6 md:h-[45vh] lg:h-[40vh] xl:h-[40vh] mx-2 lg:mx-4 box-shadow cursor-pointer hover:scale-105 transition duration-300 ease-in-out flex flex-col md:flex-row px-6 "
            >
              <div className="w-full sm:w-[70%] md:w-[30%] lg:w-[28%] h-[45%] md:h-full">
                <img src={item.image} alt="book" className="w-full h-full" />
              </div>
              <div className="w-full md:w-[68%] font-mulish md:ml-6 h-1/2 mt-7 md:mt-0 md:h-full">
                <h1 className="text-primary-headingColor text-xl font-semibold font-inter pb-1 lg:pb-3 line-clamp-2 overflow-hidden whitespace-wrap">
                  {item.title}
                </h1>
                <div className="md:flex mt-2 lg:mt-0">
                  <DateViews data={item} />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                  className="my-2"
                  style={{
                    textAlign: "justify",
                    lineHeight: "28px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                ></div>
                <p className="text-primary-btnColor text-sm font-bold cursor-pointer duration-300 ease-in-out mt-4">
                  View Detail
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-16 justify-center">
          <Link to="/articles" className="capitalize">
            View all
          </Link>
        </div>
      </div>
      <div className=" flex flex-col  lg:flex-row items-center justify-center gap-16 w-full px-10  lg:w-[90%] mx-auto mb-16">
        <div className="w-[100%]  mx-auto  bg-white ">
          <h2 className="text-2xl italic font-semibold text-[#89363c] ">
            If you want my publication, contact me
          </h2>
          <div className="mt-10  border p-10">
            <form action="">
              <InputField label="your name" name="name" type="text" />
              <InputField
                label="phone number"
                name="phoneNumber"
                type="number"
              />
              <InputField label="subject" name="subject" type="text" />
              <InputField
                label="your message"
                name="message"
                type="text-area"
              />
              <button className="flex items-center justify-center px-4 py-2 text-sm md:text-md font-semibold transition duration-300 bg-yellow-600 text-white rounded-3xl hover:bg-yellow-700">
                <span>Send Message</span>
                <span>
                  <ChevronsRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="w-[100%] mx-auto flex items-center justify-center">
          <div className="relative w-[20rem] ">
            <span className="absolute -top-7 -left-1">
              <img src="/images/vector.png" alt="" />
            </span>

            <AliceCarousel
              disableDotsControls
              responsive={{
                0: {
                  items: 1,
                },
                800: {
                  items: 1,
                },
                1024: {
                  items: 1,
                },
                1200: {
                  items: 1,
                },
              }}
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
            >
              <div className="w-[100%] flex items-center justify-center">
                <img src="/images/common/Publication.png" alt="" />
              </div>
              <div className="w-[100%] flex items-center justify-center">
                <img
                  // className="w-full h-full object-contain"
                  src="/images/common/Publication.png"
                  alt=""
                />
              </div>
            </AliceCarousel>

            <span className="absolute transform rotate-180 bottom-4 -right-1">
              <img src="/images/vector.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicationPage;
