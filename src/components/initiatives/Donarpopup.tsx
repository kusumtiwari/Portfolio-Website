import React, { useEffect, useRef } from "react";

import { MailCheck } from "lucide-react";

import { FaFacebook } from "react-icons/fa";

interface Donar {
  name: string;
  image: string;
  amount: number;
}

interface DonarPopupProps {
  donarDetails: Donar | null;
  closePopup: () => void;
}
const desc =
  "Lorem Ipsums simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960";

const DonarPopup: React.FC<DonarPopupProps> = ({
  donarDetails,
  closePopup,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closePopup]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 overflow-y-auto h-full">
      <div
        ref={popupRef}
        className="h-fit my-4 bg-white box-shadow mx-auto flex items-center justify-center flex-col px-8 py-10 w-[93%] md:w-[70%] lg:w-[60%] xl:w-[55%] relative"
      >
        <h1
          className="text-3xl text-right absolute right-2 top-0 font-semibold transition-colors duration-500 transform  hover:text-primary-btnColor cursor-pointer active:scale-110"
          onClick={closePopup}
        >
          X
        </h1>
        <h1 className="font-sourceSerifPro italic text-primary-btnColor text-2xl font-semibold">
          Thank you for your contribution !
        </h1>
        <h1 className="my-4 text-primary-subHeading font-fold text-3xl">
          {donarDetails?.name}
        </h1>
        <div className="w-[90%] md:w-[80%] lg:w-[70%] h-[45vh]">
          <img
            src={donarDetails?.image}
            alt="donar"
            className="rounded w-full h-full object-cover object-center"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: desc }}
          className="text-justify font-roboto py-6"
          style={{
            lineHeight: "30px",
            display: "webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "8",
            width: "95%",
          }}
        ></div>
        <div className="flex items-center">
          <MailCheck className="w-5 h-5 mr-2 text-gray-400" />
          <p className="font-roboto font-semibold">namemail@gmail.com</p>
        </div>
        <div className="flex items-center py-4">
          <FaFacebook className="w-5 h-5 mr-2 text-blue-500" />
          <p className="font-roboto font-semibold">namemail@gmail.com</p>
        </div>
        <div className="font-semibold text-xl">
          Contribution Amout{" "}
          <span className="italic font-sourceSerifPro text-primary-headingColor">
            Rs {donarDetails?.amount}
          </span>
        </div>
        <p className="font-semibold text-xl pt-2">January 11, 2024</p>
      </div>
    </div>
  );
};
export default DonarPopup;
