import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

import Heading from "../common/Heading";

import { ChevronRight } from "lucide-react";

interface Initiatives {
  startDate: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  id: number;
}

const myInitiatives: Initiatives[] = [
  {
    startDate: "20 Feb 2024",
    title: "Book Published",
    description: `The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural
heritage and language of the different community in Nepal. Our mission is to serve as a hub for
Nepali cultural resources, fostering a sense of identity and pride among Nepalese people and
providing valuable educational and research opportunities. The Tamang Library is committed to
preserving, celebrating, and promoting the rich cultural heritage and language of the different
community in Nepal. Our mission is to serve as a hub for Nepali cultural resources, fostering a
sense of identity and pride among Nepalese people and providing valuable educational and
research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering
a sense of identity and pride among Nepalese people and providing valuable educational and
research opportunities.`,
    image: "/images/common/initiatives.png",
    logo: "/images/common/InitiativesLogo.png",
    id: 1,
  },
  {
    startDate: "20 Feb 2024",
    title: "Book Published",
    description: `The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural
heritage and language of the different community in Nepal. Our mission is to serve as a hub for
Nepali cultural resources, fostering a sense of identity and pride among Nepalese people and
providing valuable educational and research opportunities. The Tamang Library is committed to
preserving, celebrating, and promoting the rich cultural heritage and language of the different
community in Nepal. Our mission is to serve as a hub for Nepali cultural resources, fostering a
sense of identity and pride among Nepalese people and providing valuable educational and
research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering
a sense of identity and pride among Nepalese people and providing valuable educational and
research opportunities.`,
    image: "/images/common/Timeline.png",
    logo: "/images/common/InitiativesLogo.png",
    id: 2,
  },
  {
    startDate: "20 Feb 2024",
    title: "Book Published",
    description: `The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural
heritage and language of the different community in Nepal. Our mission is to serve as a hub for
Nepali cultural resources, fostering a sense of identity and pride among Nepalese people and
providing valuable educational and research opportunities. The Tamang Library is committed to
preserving, celebrating, and promoting the rich cultural heritage and language of the different
community in Nepal. Our mission is to serve as a hub for Nepali cultural resources, fostering a
sense of identity and pride among Nepalese people and providing valuable educational and
research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering
a sense of identity and pride among Nepalese people and providing valuable educational and
research opportunities.`,
    image: "/images/common/initiatives.png",
    logo: "/images/common/InitiativesLogo.png",
    id: 3,
  },
  {
    startDate: "20 Feb 2024",
    title: "Book Published",
    description: `The Tamang Library is committed to preserving, celebrating, and promoting the rich cultural
heritage and language of the different community in Nepal. Our mission is to serve as a hub for
Nepali cultural resources, fostering a sense of identity and pride among Nepalese people and
providing valuable educational and research opportunities. The Tamang Library is committed to
preserving, celebrating, and promoting the rich cultural heritage and language of the different
community in Nepal. Our mission is to serve as a hub for Nepali cultural resources, fostering a
sense of identity and pride among Nepalese people and providing valuable educational and
research opportunities. Our mission is to serve as a hub for Nepali cultural resources, fostering
a sense of identity and pride among Nepalese people and providing valuable educational and
research opportunities.`,
    image: "/images/common/Timeline.png",
    logo: "/images/common/InitiativesLogo.png",
    id: 4,
  },
];

const Initiatives: React.FC = () => {
  return (
    <div className="px-8 md:px-20 lg:px-28 xl:px-36">
      <Heading heading="Initiatives" />
      <div className="py-16">
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
          {myInitiatives.map((item) => (
            <div className="flex items-center md:h-[48vh] justify-between w-full mb-4 flex-col md:flex-row ">
              <div className="w-full md:w-[55%] lg:w-[45%] h-[45vh] md:h-[35vh] lg:h-full relative mb-12 md:mb-0">
                <img
                  src={item.image}
                  alt="initiatives"
                  className="w-full md:w-[92%] lg:w-[90%] h-full  object-center object-cover md:object-fill lg:object-cover"
                />
                <div className="bg-white rounded-full h-24 w-24 shadow-lg absolute top-[85%] md:top-1/3 right-[40%] md:right-[-4%] lg:right-0 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="h-20 w-20 rounded-full  cursor-pointer rotate transition duration-500 ease-in-out"
                  />
                </div>
              </div>
              <div className="md:ml-8 lg:ml-12 md:w-[60%]">
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
                    WebkitLineClamp: 5,
                  }}
                >
                  {item.description}
                </p>
                <button className="text-white font-mulish text-sm bg-primary-btnColor transition duration-300 ease-in-out hover:text-black hover:border hover:border-primary-btnColor px-3 py-2 rounded-full hover:bg-white flex items-center mt-8">
                  More Info
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Initiatives;
