import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { useMediaQuery } from "react-responsive";

interface HeroImages {
  image: string;
}

const myHeroImages: HeroImages[] = [
  {
    image: "/images/Herosectionimg.png",
  },
  {
    image: "/images/Herosectionimg.png",
  },
  {
    image: "images/Herosectionimg.png",
  },
];

const Herosection: React.FC = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        autoPlay
        infinite
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        items={myHeroImages.map((item, index) => (
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
      {/* <div className="h-[50vh] bg-pink-300 rounded-tr-[80px] rounded-bl-[80px] shadow w-[80%] my-24 mx-24 box-shadow "></div> */}
    </>
  );
};
export default Herosection;
