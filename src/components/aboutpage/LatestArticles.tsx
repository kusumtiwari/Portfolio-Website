import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { ArrowRight, ArrowLeft, CalendarMinus2, Eye } from "lucide-react";

import Heading from "./../common/Heading";

interface Articles {
  date: string;
  views: number;
  title: string;
  description: string;
  id: number;
  image: string;
}

const myArticles: Articles[] = [
  {
    date: "20 July, 2023",
    views: 256,
    title: `Preserving Tamang Culture: The Key to Nepals Linguistic Diversity`,
    description: `Nestled in the foothills of the Himalayas, the Tamang people of Nepal
possess a rich cultural heritage that spans centuries. Central to this heritage is the

Tamang language, a distinct member of the Tibeto-Burman language family. As Nepal
strives to preserve its linguistic diversity, the preservation of Tamang culture emerges
as a vital endeavor with implications far beyond language alone.`,
    id: 1,
    image: "images/common/Publication.png",
  },
  {
    date: "20 July, 2023",
    views: 256,
    title: `The Significance of Tamang Language and Culture:`,
    description: `The Tamang language serves
as a vessel for the transmission of traditional knowledge, folklore, and customs from
one generation to the next. Beyond mere communication, it encapsulates the identity,
history, and worldview of the Tamang people. From intricate oral traditions to vibrant
festivals, Tamang culture reflects a deep-rooted connection to the land, community, and
spirituality.`,
    id: 2,
    image: "images/common/Publication.png",
  },
  {
    date: "20 July, 2023",
    views: 256,
    title: "Challenges to Tamang Language Preservation:",
    description: `Despite its significance, the Tamang
language faces numerous threats to its survival. Economic migration, urbanization, and
the influence of dominant languages pose significant challenges to language
transmission within Tamang communities. Additionally, limited access to education and
resources further exacerbates the vulnerability of the Tamang language.`,
    id: 3,
    image: "images/common/Publication.png",
  },
  {
    date: "20 July, 2023",
    views: 256,
    title: "The geolinguistic status of languages of Nepal",
    description: `Despite its significance, the Tamang
language faces numerous threats to its survival. Economic migration, urbanization, and
the influence of dominant languages pose significant challenges to language
transmission within Tamang communities. Additionally, limited access to education and
resources further exacerbates the vulnerability of the Tamang language.`,
    id: 4,
    image: "images/common/Publication.png",
  },
];

const responsive = {
  0: { items: 1 },
  800: { items: 2 },
  1024: { items: 2 },
};

const LatestArticle: React.FC = () => {
  return (
    <div className="my-20 px-4 md:px-10 lg:px-12 xl:px-20">
      <div className="pb-10">
        <Heading heading="Latest Articles" />
      </div>
      <div className="my-4">
        <AliceCarousel
          disableDotsControls
          responsive={responsive}
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
          {myArticles.map((item) => {
            return (
              <div
                key={item.id}
                className="h-[80vh] py-6 md:h-[45vh] lg:h-[40vh] xl:h-[40vh] mx-2 lg:mx-4 my-10 mb-12 box-shadow cursor-pointer hover:scale-105 transition duration-300 ease-in-out flex flex-col md:flex-row px-6 "
              >
                <div className="w-full sm:w-[70%] md:w-[30%] lg:w-[28%] h-[45%] md:h-full">
                  <img src={item.image} alt="book" className="w-full h-full" />
                </div>
                <div className="w-full md:w-[68%] font-mulish md:ml-6 h-1/2 mt-7 md:mt-0 md:h-full">
                  <h1 className="text-primary-headingColor text-xl font-semibold font-inter pb-1 lg:pb-3">
                    {item.title}
                  </h1>
                  <div className="md:flex mt-2 lg:mt-0">
                    <div className="flex items-center mr-1 lg:mr-3 xl:my-2">
                      <CalendarMinus2 className="w-5 h-5 text-[#828587]" />
                      <p className="ml-1">{item.date}</p>
                    </div>

                    <div className="flex items-center my-4 md:my-0">
                      <Eye className="w-5 h-5 text-[#828587]" />
                      <p className="ml-1">{item.views} views</p>
                    </div>
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
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default LatestArticle;
