import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
import InputField from "../components/form/inputFields/InputField";
import CurrencyInputField from "./../components/form/inputFields/CurrrencyInputField";

import { useMediaQuery } from "react-responsive";

const ContactPage: React.FC = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <div className="h-[60vh] md:h-[70vh] relative">
        <div className="h-[60vh] md:h-[70vh] overflow-hidden">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <clipPath id={`clipPath`}>
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

            {/* Image */}
            <image
              xlinkHref="/images/ContactBg.png"
              clipPath={`url(#clipPath)`}
              style={{ objectPosition: "center" }}
              preserveAspectRatio="xMinYMin slice"
              width={"100%"}
              height={"100%"}
            />
          </svg>
        </div>
        <div className="absolute top-[30%] mx-auto w-full text-white">
          <h1
            className="text-4xl font-bold w-full my-auto mx-auto text-center"
            style={{ lineHeight: "42px" }}
          >
            Contact With Us
          </h1>
        </div>
      </div>
      <div className="p-5">
        <div className="md:w-[100%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-5">
          <div className="md:w-full bg-[#551618] p-5 md:p-10 rounded-xl">
            <div className="w-full md:h-[300px] lg:h-[429px] md:mx-auto mb-7">
              <img
                className="w-full h-full object-cover rounded-md"
                src="/images/Aboutme.jpg"
                alt="contact"
              />
            </div>
            <div className="flex items-center gap-4 text-white">
              <Link to="/facebook.com/amrit-yonjan">
                <FaSquareFacebook size={20} />
              </Link>
              <Link to="https://www.linkedin.com/company/amrit-yonjan">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
            <div className="text-white mt-4">
              <p className="text-xs md:text-lg mb-2">You can mail me at</p>
              <h1 className="text-lg md:text-2xl lg:3xl border-b-2 py-2 font-bold">
                mail@amrityonjan.com
              </h1>
            </div>
          </div>
          <div className="p-5 md:p-10 bg-white border-2 rounded-xl">
            <h1 className="capitalize my-5 font-bold text-2xl md:text-3xl text-primary-headingColor">
              for any enquiries
            </h1>

            <div className="mt-6 md:mt-10">
              <form action="">
                <InputField label="your name" name="name" type="text" />
                <InputField label="phone number" name="phoneNumber" />
                <InputField label="subject" name="subject" type="text" />
                <InputField
                  label="your message"
                  name="message"
                  type="text-area"
                />
                <button className="flex items-center justify-center px-4 py-2 text-sm md:text-md font-semibold transition duration-300 bg-yellow-600 text-white rounded-3xl hover:bg-yellow-700">
                  <span>Send Message</span>
                  <span>
                    <ChevronsRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
