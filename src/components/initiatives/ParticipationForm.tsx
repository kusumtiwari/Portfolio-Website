import { useState } from "react";

import { FileCheck, HandCoins } from "lucide-react";
import { RxDoubleArrowRight } from "react-icons/rx";

interface Donars {
  name: string;
  image: string;
  amount: number;
}

interface ParticipationFormProps {
  status: string | undefined; // Define type for status
  donars: Donars[] | null; // Define type for donars
  projectBudget: number | undefined; // Define type for projectBudget
  donationReceived: number | undefined;
  donationPercent: number; // Define type for donationReceived
}

const ParticipationForm: React.FC<ParticipationFormProps> = ({
  status,
  donars,
  projectBudget,

  donationPercent,
}) => {
  console.log(status);

  return (
    <>
      <div className="w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 2000 200"
          fill="none"
        >
          <path
            d="M0 0.000244141C0 0.000244141 500 178.488 1000 68.1447C1500 -42.1987 2000 68.1447 2000 68.1447V1080H0V0.000244141Z"
            fill="#FFF0E1"
            fillOpacity="0.5"
          />
          <foreignObject
            x="0"
            y="10%"
            width="100%"
            height="100%"
          ></foreignObject>
        </svg>
      </div>
      <div className="px-3 md:px-16 lg:px-24 xl:px-32 bg-secondary-detailsBackground pb-16 ">
        <h1 className="text-primary-headingColor font-bold text-2xl md:text-3xl text-center pb-4 pt-8 md:pt-0 md:pb-12">
          {status === "Upcoming"
            ? "Received Amount"
            : "Do you want to participate in the project"}
        </h1>
        {status === "Upcoming" && (
          <div className="md:w-1/2">
            <div className="flex justify-between items-center font-semibold text-lg md:text-xl">
              <div className="flex items-center">
                <FileCheck className="text-primary-btnColor w-6 h-6 mr-2" />
                <h1>Project Budget</h1>
              </div>
              <h1>Rs {projectBudget}</h1>
            </div>

            <div className="flex justify-between items-center font-semibold text-lg md:text-xl my-7">
              <div className="flex items-center">
                <HandCoins className="text-primary-btnColor w-6 h-6 mr-2" />
                <h1>Donation Received</h1>
              </div>
              <h1>Rs {projectBudget}</h1>
            </div>
            <div className="w-full flex items-center">
              <div className="w-[92%] bg-gray-300 rounded h-1.5">
                <div
                  className="h-full bg-primary-btnColor rounded"
                  style={{ width: `${donationPercent}%` }}
                ></div>
              </div>
              <p className="text-sm font-bold ml-4 mb-1">{donationPercent}%</p>
            </div>
          </div>
        )}

        <div className="flex mt-12 flex-col md:flex-row">
          <div className="border border-gray-300 px-8 lg:px-16 py-8 md:w-1/2 bg-white">
            {status === "Upcoming" ? (
              <h1 className="text-primary-headingColor font-bold mb-8">
                Contribute
              </h1>
            ) : null}

            {/* Your Name */}
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
            {/* commit amount or participation condition */}
            {status === "Upcoming" ? (
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
            ) : (
              <div className="mb-8">
                <label
                  htmlFor="participation"
                  className="block text-gray-600 font-semibold mb-4"
                >
                  Participate as
                </label>
                <div className="flex items-center">
                  {/* Team Option */}
                  <div className="flex items-center mr-6">
                    <input
                      type="radio"
                      id="team"
                      name="participation"
                      value="team"
                      className="hidden"
                    />
                    <label htmlFor="team" className="cursor-pointer">
                      <div className="w-3 h-3 bg-white border border-gray-400 rounded-sm flex justify-center items-center">
                        <div className="w-2 h-2 invisible checked:border-yellow-500 checked:bg-yellow-500 checked:text-white checked:flex justify-center items-center">
                          ✓
                        </div>
                      </div>
                    </label>
                    <span className="text-gray-600 font-semibold ml-2 mb-0.5">
                      Team
                    </span>
                  </div>

                  {/* Volunteer Option */}
                  <div className="flex items-center mr-6">
                    <input
                      type="radio"
                      id="volunteer"
                      name="participation"
                      value="volunteer"
                      className="hidden"
                    />
                    <label htmlFor="volunteer" className="cursor-pointer">
                      <div className="w-3 h-3 bg-white border border-gray-400 rounded-sm flex justify-center items-center">
                        <div className="w-2 h-2 hidden checked:border-yellow-500 checked:bg-yellow-500 checked:text-white checked:flex justify-center items-center">
                          ✓
                        </div>
                      </div>
                    </label>
                    <span className="text-gray-600 font-semibold ml-2 mb-0.5">
                      Volunteer
                    </span>
                  </div>

                  {/* Donate Option */}
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="donate"
                      name="participation"
                      value="donate"
                      className="hidden"
                    />
                    <label htmlFor="donate" className="cursor-pointer">
                      <div className="w-3 h-3 bg-white border border-gray-400 rounded-sm flex justify-center items-center">
                        <div className="w-2 h-2 hidden checked:border-yellow-500 checked:bg-yellow-500 checked:text-white checked:flex justify-center items-center">
                          ✓
                        </div>
                      </div>
                    </label>
                    <span className="text-gray-600 font-semibold ml-2 mb-0.5">
                      Donate
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Message */}
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
            <button className="text-white font-mulish text-base bg-primary-btnColor transition duration-300 ease-in-out hover:text-black hover:border hover:border-primary-btnColor px-4 py-2 rounded-full hover:bg-white flex items-center mt-8">
              Send
              <RxDoubleArrowRight className="w-4 h-4 ml-2 " />
            </button>
          </div>

          <div className="md:w-1/2 md:ml-8 md:relative">
            {status === "Upcoming" ? (
              <>
                <h1 className="font-bold text-3xl text-primary-headingColor text-center my-6 md:my-0 md:absolute top-[-20%] left-52">
                  Donars
                </h1>
                <div className="flex flex-wrap w-full h-fit ">
                  {donars?.map((items, index) => (
                    <div
                      className="w-[38%] md:w-[35%] lg:w-[25%] mx-2 md:mx-4 mb-4 md:mb-6"
                      key={index}
                    >
                      <div className="w-full h-[18vh]">
                        <img
                          src={items.image}
                          alt="donar"
                          className="w-full h-full object-cover object-center rounded"
                        />
                      </div>
                      <h1 className="font-bold font-mulish text-center">
                        {items.name}
                      </h1>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="w-full h-[50vh] md:h-[68vh] md:ml-4 mt-6 md:mt-20 lg:mt-24">
                <img
                  src="/images/Form-img.png"
                  alt="form image"
                  className="h-full w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ParticipationForm;
