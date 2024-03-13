import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface Initiatives {
  startDate: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  id: number;
}

const responsive = {
  0: { items: 1 },
  800: { items: 2 },
  1024: { items: 2 },
};

interface OrganizationalInitiativesProps {
  myInitiatives: Initiatives[];
}

const OtherInitiatives: React.FC<OrganizationalInitiativesProps> = ({
  myInitiatives,
}) => {
  return (
    <div className="my-6 px-8 md:px-8 lg:px-12 xl:px-32 ">
      <h1
        className="text-xl font-semibold border-b-[3px] border-primary-btnColor mb-16 w-fit mx-auto"
        style={{ lineHeight: "42px" }}
      >
        Other Initiatives
      </h1>
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
          {myInitiatives.map((initiatives) => (
            <div
              key={initiatives.id}
              className="h-[70vh] box-shadow hover:scale-105 transition duration-300 ease-in-out md:mx-4 lg:mx-12 my-10 rounded-md "
            >
              <div className="w-full h-1/2">
                <img
                  src={initiatives.image}
                  alt="initiatives"
                  className="h-full w-full object-center object-cover"
                />
              </div>
              <div className="px-4 py-4 font-mulish">
                <h1 className="font-inter text-primary-headingColor text-2xl font-semibold pt-3">
                  {initiatives.title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: initiatives.description }}
                  className="text-justify mt-2 mb-4"
                  style={{
                    lineHeight: "28px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                ></div>
                <button className="text-white font-mulish text-base bg-primary-btnColor transition duration-300 ease-in-out hover:text-black hover:border hover:border-primary-btnColor px-2 py-2 rounded-full hover:bg-white flex items-center">
                  View Detail
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default OtherInitiatives;
