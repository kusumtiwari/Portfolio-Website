import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { ArrowRight, ArrowLeft, CalendarMinus2, BookOpen } from "lucide-react";

import Heading from "../common/Heading";

interface Papers {
  date: string;
  time: string;
  title: string;
  description: string;
  organizer: string;
  oraganization: string;
  id: number;
}

const myPapers: Papers[] = [
  {
    date: "20 July, 2023",
    time: "7 min",
    title: "The geolinguistic status of languages of Nepal",
    description: `The geolinguistic status of languages of Nepal&#39;, a paper presented in a International
ASGT conference in Nepal-2019 organized by American Society of Geolinguistic
Tokyo, Nepal Chapter , CNAS, Ktm`,
    oraganization: "International ASGT conference",
    organizer: "Organizer: American Society of Geolinguistic",
    id: 1,
  },
  {
    date: "20 July, 2023",
    time: "7 min",
    title: "The Multilingual Education in Nepal",
    description: `The Multilingual Education in Nepal - a way forward, a paper presented in a seminal organized by Nepal
Academy, Kamaladi, Ktm`,
    oraganization: "International ASGT conference",
    organizer: "Organizer: American Society of Geolinguistic",
    id: 2,
  },

  {
    date: "20 July, 2023",
    time: "7 min",
    title: `Challenges of Multilingual Education in Federal Nepal`,
    description: `Challenges of Multilingual Education in Federal Nepal, a paper presented in a talk program organized by
Martine Chautari, Thapathali, Kathmandu (14 Asoj, 2075).`,
    oraganization: "International ASGT conference",
    organizer: "Organizer: American Society of Geolinguistic",
    id: 3,
  },
  {
    date: "20 July, 2023",
    time: "7 min",
    title: `The Multilingual Education in Local level`,
    description: `The Multilingual Education in Local level&#39;, a paper presented in a seminal organized by Kartabya
Foundation, Dillibazar, KTM`,
    oraganization: "International ASGT conference",
    organizer: "Organizer: American Society of Geolinguistic",
    id: 4,
  },
  {
    date: "20 July, 2023",
    time: "7 min",
    title: "The Multilingual Education in Local level",
    description: `The Multilingual Education in Local level&#39;, a paper presented in a seminal organized by Kartabya
Foundation, Dillibazar, KTM`,
    oraganization: "International ASGT conference",
    organizer: "Organizer: American Society of Geolinguistic",
    id: 5,
  },
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const PapersPresented: React.FC = () => {
  return (
    <>
      {/* uppercurve */}
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
      {/* contents */}
      <div className="bg-secondary-detailsBackground w-full px-4 md:px-10 lg:px-12 xl:px-20 pb-10">
        <div className="pb-10">
          <Heading heading="Papers Presented" />
        </div>
        <div>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            responsive={responsive}
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
            {myPapers.map((item) => {
              return (
                <div
                  key={item.id}
                  className="min-h-[55vh] mb-8 px-8 py-9 font-mulish bg-white box-shadow mx-3 cursor-pointer hover:scale-105 transition ease-in-out my-4 duration-500"
                >
                  <div className="h-[45%]">
                    <h1
                      className="text-primary-headingColor text-xl font-inter font-semibold "
                      style={{
                        lineHeight: "26px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                      }}
                    >
                      {item.title}
                    </h1>
                    <h1 className="py-4 text-base font-semibold">
                      {item.oraganization}
                    </h1>
                    <h1 className="text-base font-semibold">
                      Orangizer: {item.organizer}
                    </h1>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="text-justify mt-4"
                    style={{
                      lineHeight: "27px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  ></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 text-sm">
                    <div className=" md:flex">
                      <div className="flex items-center mr-3">
                        <CalendarMinus2 className="w-5 h-5 text-[#828587]" />
                        <p className="ml-1">{item.date}</p>
                      </div>

                      <div className="flex items-center my-4 md:my-0">
                        <BookOpen className="w-5 h-5 text-[#828587]" />
                        <p className="ml-1">{item.time}</p>
                      </div>
                    </div>
                    <p className="font-bold text-base text-primary-btnColor cursor-pointer">
                      Read more
                    </p>
                  </div>
                </div>
              );
            })}
          </AliceCarousel>
        </div>
      </div>
    </>
  );
};
export default PapersPresented;
