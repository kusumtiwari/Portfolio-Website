import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { ArrowRight, ArrowLeft } from "lucide-react";

import Heading from "../common/Heading";

interface Achievements {
  date: string;
  title: string;
  location: string;
  image: string;
  id: number;
}

const myAchievements: Achievements[] = [
  {
    date: "20 July, 2023",
    title: "Language Commission",
    location: "Kathmandu,Nepal",
    image: "/images/Achievements-logo.png",
    id: 1,
  },
  {
    date: "20 July, 2023",
    title: "Language Commission",
    location: "Kathmandu,Nepal",
    image: "/images/Achievements-logo.png",
    id: 2,
  },
  {
    date: "20 July, 2023",
    title: "Language Commission",
    location: "Kathmandu,Nepal",
    image: "/images/Achievements-logo.png",
    id: 3,
  },
  {
    date: "20 July, 2023",
    title: "Language Commission",
    location: "Kathmandu,Nepal",
    image: "/images/Achievements-logo.png",
    id: 4,
  },
];

const Achievements: React.FC = () => {
  return (
    <>
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
      <div className=" bg-secondary-detailsBackground px-8 md:px-20 lg:px-28 xl:px-36 relative h-[120vh] lg:h-[140vh]">
        <Heading heading="Achievements/Awards" />

        <div className="w-full h-[55vh] md:h-[60vh] lg:h-[80vh] mt-16 relative">
          <img
            src="/images/common/Decortop.png"
            alt="upwraper"
            className="absolute top-[-6%] md:top-[-5%] left-[-7%] md:left-[-4%] lg:left-[-3%]"
          />
          <img
            src="/images/AwardsBg.png"
            alt="Achievements"
            className="w-full h-[95%] object-fill lg:object-cover object-center"
          />
          <img
            src="/images/common/Decorbottom.png"
            alt="upwraper"
            className="absolute right-[-6%] md:right-[-4%] lg:right-[-3%] bottom-[-1%] md:bottom-[0%]"
          />
        </div>
        <div className="h-[50vh] w-[95%] lg:w-[90%] xl:w-[80%] mx-auto absolute top-[42%] md:top-[45%] lg:top-[52%] left-[6%] md:left-[5%] lg:left-[8%] xl:left-[12%]">
          <AliceCarousel
            disableDotsControls
            mouseTracking
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
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
            {myAchievements.map((item) => (
              <div
                key={item.id}
                className="mb-12 pt-5 h-fit w-[92%] md:w-[82%] rounded-lg cursor-pointer  transition-transform hover:scale-105 ease-in-out duration-300 flex items-center flex-col"
              >
                <div className="bg-white shadow-lg rounded-full w-44 h-44 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt="logo"
                    className="w-[80%] h-[80%] rounded-full"
                  />
                </div>
                <div className="mt-4 font-sourceSerifPro flex flex-col items-center">
                  <p className="text-2xl italic font-semibold">{item.title}</p>
                  <p className="text-2xl italic font-semibold">
                    {item.location}
                  </p>
                  <p className="text-xl italic">{item.date}</p>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </>
  );
};
export default Achievements;
