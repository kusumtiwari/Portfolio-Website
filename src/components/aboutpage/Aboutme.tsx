import { ChevronRight } from "lucide-react";

import { FaSquareFacebook } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

import Heading from "../common/Heading";

const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? lorem te enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? lorem te enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, eaque illo nam natus distinctio quidem molestiae officia adipisci necessitatibus! Neque vel voluptate enim officiis voluptates odio blanditiis? Sed, perspiciatis magnam? lorem`;
const AboutMe: React.FC = () => {
  return (
    <div className="py-8 px-8 md:px-10 lg:px-28 xl:px-36 pb-20">
      <div className="pb-16">
        <Heading heading="About Me" />
      </div>
      <div className="h-fit w-full pb-4">
        <div className="h-[60vh] md:h-[65vh] lg:h-[78vh] xl:h-[83vh] w-full md:w-[45%] md:float-right mb-6 md:ml-12">
          <div className="h-[82%] md:h-[92%] w-full">
            <img
              src="/images/Aboutme.jpg"
              alt="about-me"
              className="h-full w-full rounded-tr-[80px] rounded-bl-[80px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="text-white font-mulish text-base bg-primary-btnColor transition duration-300 ease-in-out hover:text-black hover:border hover:border-primary-btnColor px-4 py-2 rounded-full hover:bg-white flex items-center mt-8">
              Download CV
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
        <div
          style={{ lineHeight: "30px" }}
          className="font-mulish text-base text-justify"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <div className="flex items-center justify-end py-6">
        <div className="rounded-full w-[34px] h-[34px] bg-primary-headingColor flex items-center justify-center shadow-lg  hover:scale-105 cursor-pointer">
          <FaSquareFacebook className="text-white cursor-pointer ease-in-out rotate transition duration-300" />
        </div>
        <div className="rounded-full w-[34px] h-[34px] bg-primary-headingColor flex items-center justify-center ml-3 shadow-lg  hover:scale-105 cursor-pointer">
          <IoMail className="text-white cursor-pointer ease-in-out rotate transition duration-300" />
        </div>
        <div className="rounded-full w-[34px] h-[34px] bg-primary-headingColor flex items-center justify-center ml-3 shadow-lg  hover:scale-105 cursor-pointer">
          <FaLinkedinIn className="text-white cursor-pointer ease-in-out rotate transition duration-300" />
        </div>
        <div className="rounded-full w-[34px] h-[34px] bg-primary-headingColor flex items-center justify-center ml-3 shadow-lg  hover:scale-105 cursor-pointer">
          <FaYoutube className="text-white cursor-pointer ease-in-out rotate transition duration-300" />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
