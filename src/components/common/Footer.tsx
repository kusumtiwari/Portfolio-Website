import { FaSquareFacebook } from "react-icons/fa6";
import { IoMail, IoMailOpen } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-secondary-footerBg h-[7vh] flex items-center px-8 md:px-20 lg:px-28 xl:px-36 py-4">
        <div className="rounded-full w-[34px] h-[34px] bg-primary-headingColor flex items-center justify-center">
          <FaSquareFacebook className="text-white" />
        </div>
        <div className="rounded-full w-[34px] h-[34px] bg-primary-headingColor flex items-center justify-center ml-3">
          <IoMail className="text-white " />
        </div>
        <div className="rounded-full w-[34px] h-[34px] bg-primary-headingColor flex items-center justify-center ml-3">
          <FaLinkedinIn className="text-white" />
        </div>
        <div className="rounded-full w-[34px] h-[34px] bg-primary-headingColor flex items-center justify-center ml-3">
          <FaYoutube className="text-white" />
        </div>
      </div>
      <div className="bg-white flex justify-between h-fit relative">
        <div className="md:w-[58%] pl-12 md:px-20 lg:pl-28 xl:pl-36 py-6 h-full">
          <div className="hidden md:flex items-center">
            <p className="text-primary-headingColor text-base font-bold font-mulish mr-4 lg:mr-6">
              About
            </p>
            <p className="text-primary-headingColor mr-4 lg:mr-6 font-bold">
              |
            </p>
            <p className="text-primary-headingColor text-base font-bold font-mulish mr-4 lg:mr-6">
              Initiatives
            </p>
            <p className="text-primary-headingColor mr-4 lg:mr-6 font-bold">
              |
            </p>
            <p className="text-primary-headingColor text-base font-bold font-mulish mr-4 lg:mr-6">
              Involvement
            </p>
            <p className="text-primary-headingColor mr-4 lg:mr-6 font-bold">
              |
            </p>
            <p className="text-primary-headingColor text-base font-bold font-mulish mr-4 lg:mr-6">
              Publication
            </p>
            <p className="text-primary-headingColor mr-4 lg:mr-6 font-bold">
              |
            </p>
            <p className="text-primary-headingColor text-base font-bold font-mulish">
              Articles
            </p>
          </div>

          <div className="flex md:hidden flex-col">
            <p className="text-primary-headingColor text-base font-bold font-mulish pb-2 cursor-pointer">
              About
            </p>

            <p className="text-primary-headingColor text-base font-bold font-mulish pb-2 cursor-pointer">
              Initiatives
            </p>

            <p className="text-primary-headingColor text-base font-bold font-mulish pb-2 cursor-pointer">
              Involvement
            </p>

            <p className="text-primary-headingColor text-base font-bold font-mulish pb-2 cursor-pointer">
              Publication
            </p>

            <p className="text-primary-headingColor text-base font-bold font-mulish pb-2 cursor-pointer">
              Articles
            </p>
          </div>

          <div className="flex md:items-center py-8 font-mulish flex-col md:flex-row">
            <div className="w-full md:w-[65%]">
              <h1 className="font-bold text-base pb-4">Contact Details</h1>
              <div className="flex justify-start pb-4">
                <IoLocationSharp className="text-black w-5 h-5 mr-2 mt-1" />
                <p className="w-[70%] md:w-[90%]">
                  Samata Hospital Chock, Kumarigal, Baudha Gate Road, Kathmandu
                  MC-7, Nepal
                </p>
              </div>
              <div className="flex items-center pb-4">
                <IoMdCall className="text-black w-5 h-5 mr-2" />
                <p>+977 98510-82503</p>
              </div>
              <div className="flex items-center">
                <IoMailOpen className="text-black w-5 h-5 mr-2" />
                <p>mail@amrityonjan.com</p>
              </div>
            </div>
            <div className="w-[40%] md:w-[30%] bg-green-400 h-full md:ml-8 mt-4 md:mt-0">
              <img
                src="/images/scanners.png"
                alt="scanner"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex justify-between pt-4 flex-col lg:flex-row">
            <p className="font-bold font-mulish text-sm mb-4 lg:mb-0">
              Copyright 2023 All Right Reserved.
            </p>
            <div className="flex">
              <p className="font-bold text-sm font-mulish mr-1">
                Designed and Developed By:
              </p>
              <img
                src="/images/Onewindow.png"
                alt="one-window-international"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block h-full w-[60%] md:w-[45%] lg:w-[40%] absolute bottom-0 right-0">
          <img
            src="/images/common/Footer.png"
            alt="footer"
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
