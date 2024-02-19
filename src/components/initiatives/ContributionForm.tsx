import { useRef, useState, useEffect } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";

import ThankyouPopup from "./ThankyouPopup";

interface ContributionFormProps {
  onPopupDisplay: () => void;
}
const ContributionForm: React.FC<ContributionFormProps> = ({
  onPopupDisplay,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onPopupSwitch = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsPopupOpen(true); // Set the state to open the "Thank You" popup
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onPopupDisplay();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onPopupDisplay]);
  return (
    <div className="fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm z-40 overflow-y-auto">
      <form
        className="border border-gray-300 px-8 lg:px-16 py-8 md:w-1/2 bg-white my-6 h-fit mx-auto relative"
        onSubmit={handleSubmit}
      >
        <h1 className="text-primary-headingColor font-bold mb-8">Contribute</h1>
        <h1
          className="absolute right-2 top-2 font-bold text-xl  transition-colors duration-500 transform  hover:text-primary-btnColor cursor-pointer active:scale-110"
          onClick={onPopupDisplay}
        >
          X
        </h1>
        <div className="mb-8">
          <label
            htmlFor="yourName"
            className="block text-gray-600 font-semibold mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="yourName"
            className="border-b border-gray-300 outline-none w-full bg-transparent"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-8">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-600 font-semibold mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="border-b border-gray-300 outline-none w-full bg-transparent"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-gray-600 font-semibold mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-b border-gray-300 outline-none w-full bg-transparent"
            required
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-600 font-semibold mb-1"
          >
            Commit Amount
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="border-b border-gray-300 outline-none w-full bg-transparent"
            required
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-gray-600 font-semibold mb-1"
          >
            Message
          </label>
          <input
            id="message"
            className="border border-gray-300 outline-none w-full h-[15vh] mt-4 resize-none px-4 py-2 bg-transparent rounded"
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="text-white font-mulish text-base bg-primary-btnColor transition duration-300 ease-in-out hover:text-black hover:border hover:border-primary-btnColor px-4 py-2 rounded-full hover:bg-white flex items-center mt-8"
        >
          Send
          <RxDoubleArrowRight className="w-4 h-4 ml-2 " />
        </button>
      </form>
      {isPopupOpen && <ThankyouPopup onPopupSwitch={onPopupSwitch} />}
    </div>
  );
};
export default ContributionForm;
