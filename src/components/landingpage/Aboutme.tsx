import { useNavigate } from "react-router-dom";

import Heading from "../common/Heading";
import ReadmoreBtn from "../common/ReadmoreBtn";

const desc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? lorem`;

const Aboutme: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="my-16 px-8 md:px-20 lg:px-28 xl:px-36 relative">
      <Heading heading="About Me" />
      <div className="my-16 h-fit bg-white rounded-tr-[80px] rounded-bl-[80px] box-shadow flex items-center mx-2 lg:mx-6 px-4 md:px-10 lg:px-12 py-4 md:py-12 lg:py-16 flex-col lg:flex-row relative">
        <img
          src="/images/common/Upwrapper.png"
          alt="upwraper"
          className="absolute top-[-2%] md:top-[-3%] lg:top-[-4%] left-[-5%] md:left-[-3%] lg:left-[-2%]"
        />
        <div className="h-[38vh] md:h-[50vh] lg:h-[58vh] w-[95%] sm:w-[85%] md:w-[70%] lg:w-[42%]">
          <img
            src="/images/Aboutme.jpg"
            alt="aboutme"
            className="w-full h-full rounded-tr-[80px] rounded-bl-[80px] "
          />
        </div>
        <div className="w-[98%] lg:w-[55%] text-justify lg:ml-8 mt-6 lg:mt-0 mb-4 md:mb-0">
          <div
            className="line-clamp-9 font-mulish text-base lg:w-[95%]"
            style={{ lineHeight: "30px", fontWeight: "400" }}
          >
            {desc}
          </div>
          <div onClick={() => navigate("/about")}>
            <ReadmoreBtn />
          </div>
        </div>
        <img
          src="/images/common/Downwrapper.png"
          alt="upwraper"
          className="absolute right-[-5%] md:right-[-3%] lg:right-[-2%] bottom-[-2%] md:bottom-[-3%] lg:bottom-[-4%]"
        />
      </div>
    </div>
  );
};
export default Aboutme;
