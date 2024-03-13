import { useState } from "react";
import Heading from "../common/Heading";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Publications {
  image: string;
  title: string;
  publisher: string;
  description: string;
  id: number;
}

const myPublications: Publications[] = [
  {
    id: 1,
    image: "/images/common/Publication.png",
    title: "Nepal Tamang Ghedung",
    publisher: "Nepal Academy, Kathmandu",
    description: `The geolinguistic status of languages of Nepal&#39;, a paper presented in a International
ASGT conference in Nepal-2019 organized by American Society of Geolinguistic
Tokyo, Nepal Chapter , CNAS, Ktm`,
  },
  {
    id: 2,
    image: "/images/common/Publication.png",
    title: "Nepal Tamang Ghedung",
    publisher: "Nepal Academy, Kathmandu",
    description: `The geolinguistic status of languages of Nepal&#39;, a paper presented in a International
ASGT conference in Nepal-2019 organized by American Society of Geolinguistic
Tokyo, Nepal Chapter , CNAS, Ktm`,
  },
  {
    id: 3,
    image: "/images/common/Publication.png",
    title: "Nepal Tamang Ghedung",
    publisher: "Nepal Academy, Kathmandu",
    description: `The geolinguistic status of languages of Nepal&#39;, a paper presented in a International
ASGT conference in Nepal-2019 organized by American Society of Geolinguistic
Tokyo, Nepal Chapter , CNAS, Ktm`,
  },
  {
    id: 4,
    image: "/images/common/Publication.png",
    title: "Nepal Tamang Ghedung",
    publisher: "Nepal Academy, Kathmandu",
    description: `The geolinguistic status of languages of Nepal&#39;, a paper presented in a International
ASGT conference in Nepal-2019 organized by American Society of Geolinguistic
Tokyo, Nepal Chapter , CNAS, Ktm`,
  },
];

const responsive = {
  0: { items: 1 },
  700: { items: 2 },
};

const numberOfBooks = myPublications.length;
// height of each small section book
const bookHeight = 100 / numberOfBooks - 2;
// console.log(bookHeight);
const Publications: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onBookSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const selectedPublication = myPublications[selectedIndex];
  return (
    <div className="px-8 md:px-8 lg:px-12 xl:px-36 pb-16 md:pb-20">
      <div className="pb-8 md:pb-10">
        <Heading heading="List Of Publications" />
      </div>
      <div className="lg:flex w-full h-fit lg:h-[120vh] xl:h-[122vh] ">
        <div className="px-10 w-full lg:w-[50%] md:h-[60vh] lg:h-full box-shadow py-6 flex flex-col md:flex-row lg:flex-col">
          <div className="w-[95%] md:w-[45%] h-[38vh] md:h-[95%] lg:h-1/2 lg:w-[75%] xl:w-[65%] lg:mx-auto">
            <img
              src={selectedPublication.image}
              alt="book"
              className="h-full w-full"
            />
          </div>
          <div className="md:ml-8 lg:ml-0 h-full w-full md:w-1/2 lg:w-full">
            <h1 className="font-inter text-primary-headingColor text-xl font-semibold pt-4 lg:pt-8">
              {selectedPublication.title}
            </h1>
            <h1 className="text-base font-semibold pt-3">
              Publisher: {selectedPublication.publisher}
            </h1>
            <button className="my-5 text-white bg-primary-btnColor px-2 py-1 hover:text-primary-btnColor hover:bg-white hover:border hover:border-primary-btnColor">
              Free Download
            </button>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedPublication.description,
              }}
              style={{
                textAlign: "justify",
                lineHeight: "28px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 6,
              }}
            ></div>
            <p className="text-primary-btnColor text-sm font-bold mt-4 cursor-pointer duration-300 ease-in-out">
              View Detail
            </p>
          </div>
        </div>
        <div
          className={`hidden lg:block w-1/2 px-9 lg:px-6 xl:px-10 h-full box-shadow ml-4 ${
            numberOfBooks > 4 ? "overflow-scroll overflow-x-hidden" : ""
          }`}
        >
          {myPublications.map((item, index) => (
            <div
              className={`lg:h-[${
                bookHeight - 1
              }%] xl:h-[${bookHeight}%] transition duration-500 cursor-pointer ease-in-out px-3 lg:px-5 border border-gray-200 rounded-md flex w-full my-5 lg:my-5 xl:my-4 py-3 ${
                index === selectedIndex
                  ? "bg-secondary-footerBg text-white"
                  : "bg-white"
              }`}
              onMouseOver={() => onBookSelect(index)}
            >
              <div className="w-[25%] h-[90%] xl:h-[80%] my-auto">
                <img src={item.image} alt="book" className="h-full w-full" />
              </div>
              <div className="h-full w-[75%] ml-4">
                <h1 className="font-inter  text-xl font-semibold xl:mt-4">
                  {item.title}
                </h1>
                <h1 className="text-base font-semibold pt-1">
                  Publisher: {selectedPublication.publisher}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                  style={{
                    lineHeight: "28px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* carousel for medium and smaller screen size */}
        <div className="mt-10 lg:hidden">
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
            {myPublications.map((item, index) => (
              <div
                className={`cursor-pointer h-[50vh] px-3 lg:px-5 border border-gray-200 rounded-md py-4 mx-6 mb-8 transition ease-in-out duration-500  ${
                  index === selectedIndex
                    ? "bg-secondary-footerBg text-white"
                    : "bg-white"
                }`}
                onMouseOver={() => onBookSelect(index)}
              >
                <div className="w-1/2 h-[45%] md:h-[50%] mx-auto">
                  <img src={item.image} alt="book" className="h-full w-full" />
                </div>
                <div className="h-[50%] w-full md:text-center px-2">
                  <h1 className="font-inter text-xl font-semibold mt-4">
                    {item.title}
                  </h1>
                  <h1 className="text-base font-semibold pt-1 ">
                    Publisher: {selectedPublication.publisher}
                  </h1>
                  <div
                    className="mt-2"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                    style={{
                      width: "95%",
                      textAlign: "justify",
                      lineHeight: "28px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};
export default Publications;
