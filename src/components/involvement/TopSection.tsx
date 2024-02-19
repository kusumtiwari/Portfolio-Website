import { ChevronsRight } from "lucide-react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useMediaQuery } from "react-responsive";

interface myHeroImages {
  image: string;
}

const myHeroImages: myHeroImages[] = [
  {
    image: "/images/InvolvementBg.png",
  },
  {
    image: "/images/InvolvementBg.png",
  },
  {
    image: "/images/InvolvementBg.png",
  },
];

const TopSection: React.FC = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="w-full min-h-[80vh] relative">
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        autoPlay
        infinite
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        items={myHeroImages?.map((item, index) => (
          <div className="h-[60vh] md:h-[70vh] overflow-hidden w-screen">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%" }}
            >
              <clipPath id={`clipPath-${index}`}>
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

              <image
                xlinkHref={item.image}
                clipPath={`url(#clipPath-${index})`}
                style={{ objectPosition: "center" }}
                preserveAspectRatio="xMinYMin slice"
                width={"100%"}
                height={"100%"}
              />
            </svg>
          </div>
        ))}
      />
      <div className="absolute top-4 md:top-14 w-[85%] md:w-[50%] lg:w-[35%] right-4 md:right-12 lg:right-32 z-20 md:z-0">
        <h1 className="text-2xl md:text-3xl font-bold">Involvement</h1>
        <p
          className="my-5 font-mulish font-bold text-base text-justify"
          style={{ lineHeight: "30px" }}
        >
          Amrit Yonjans role as a project coordinator, team leader, and field
          coordinator highlights his multifaceted involvement in managing,
          leading, and executing various aspects of project initiatives.
        </p>
        <button className="text-white font-mulish text-base bg-primary-headingColor transition duration-300 ease-in-out hover:text-black hover:border hover:border-primary-headingColor px-4 py-2 rounded-full hover:bg-white flex items-center mt-8">
          Learn More
          <ChevronsRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};
export default TopSection;
