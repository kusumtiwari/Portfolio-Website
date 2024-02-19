import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AliceCarousel from "react-alice-carousel";

import { useMediaQuery } from "react-responsive";
// import Heading from '../components/common/Heading';

interface categoriesDetails {
  id: number;
  logo: string | null;
  position: string | null;
  startDate: string | null;
  endDate: string | null;
  title: string | null;
  description: string | null;
  image: string | null;
  category: string | null;
  organization: string | null;
}

interface tabs {
  category: string;
  id: number;
}

const myTabs: tabs[] = [
  {
    category: "Community Development",
    id: 1,
  },
  {
    category: "Language and Linguistics",
    id: 2,
  },
  {
    category: "Teaching",
    id: 3,
  },
];
const myCategoriesDetails: categoriesDetails[] = [
  {
    id: 1,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "2013",
    endDate: "2014",
    title: "Ethno-linguistic Survey of Nepal",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
    image: "/images/InvolvementImg.png",
    category: "Community Development",
    organization: null,
  },

  {
    id: 2,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: "Ethno-linguistic Survey of Nepal",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
    image: "/images/InvolvementImg.png",
    category: "Language and Linguistics",
    organization: null,
  },
  {
    id: 3,
    logo: null,
    position: "Vice-Principle",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: null,
    description: null,
    image: null,
    category: "Teaching",
    organization: "Amrit Primary Boarding School, Mhepi, Kathmandu",
  },
  {
    id: 4,
    logo: null,
    position: "Vice-Principle",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: null,
    description: null,
    image: null,
    category: "Teaching",
    organization: "Amrit Primary Boarding School, Mhepi, Kathmandu",
  },
  {
    id: 5,
    logo: null,
    position: "Vice-Principle",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: null,
    description: null,
    image: null,
    category: "Teaching",
    organization: "Amrit Primary Boarding School, Mhepi, Kathmandu",
  },
  {
    id: 6,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: "Ethno-linguistic Survey of Nepal",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
    image: "/images/InvolvementImg.png",
    category: "Language and Linguistics",
    organization: null,
  },
  {
    id: 7,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "2013",
    endDate: "2014",
    title: "Ethno-linguistic Survey of Nepal",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
    image: "/images/InvolvementImg.png",
    category: "Community Development",
    organization: null,
  },
  {
    id: 8,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "2013",
    endDate: "2014",
    title: "Ethno-linguistic Survey of Nepal",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
    image: "/images/InvolvementImg.png",
    category: "Community Development",
    organization: null,
  },
  {
    id: 9,
    logo: "/images/involveLogo1.png",
    position: "Project Director",
    startDate: "April 2013",
    endDate: "Sept 2014",
    title: "Ethno-linguistic Survey of Nepal",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit nonAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non",
    image: "/images/InvolvementImg.png",
    category: "Language and Linguistics",
    organization: null,
  },
];
const InvolvementDetailPage = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const dummyData = [
    {
      title: "School 1",
      image: "/logo/logo1.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    },
    {
      title: "School 2",
      image: "/logo/logo2.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    },
    {
      title: "School 2",
      image: "/logo/logo2.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    },
    {
      title: "School 2",
      image: "/logo/logo2.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    },
    {
      title: "School 2",
      image: "/logo/logo2.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
    },
    // Add more items as needed
  ];

  const { id } = useParams<{ id: string | undefined }>();
  const [expandedItems, setExpandedItems] = useState(
    Array(dummyData).fill(false)
  );
  if (!id) {
    return <div>Invalid ID</div>;
  }

  // Function to toggle the expansion of an item
  const toggleReadMore = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  const responsive = {
    0: { items: 1 },
    800: { items: 3 },
    1024: { items: 3 },
  };

  // Convert id to number if needed
  // const itemId = parseInt(id);
  return (
    <>
      <div className="h-[60vh] md:h-[70vh] overflow-hidden w-full">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <clipPath id={`clipPath-`}>
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
            xlinkHref={"/images/InvolvementDetails.png"}
            clipPath={`url(#clipPath-)`}
            style={{ objectPosition: "center" }}
            preserveAspectRatio="xMinYMin slice"
            width={"100%"}
            height={"100%"}
          />
        </svg>
      </div>
      <div className="px-5 lg:w-[90%] mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="px-10">
            <div className="w-full lg:w-[60%] mx-auto mb-7">
              <div className=" w-[8rem] mx-auto ">
                <img className="w-full" src="/logo/logo1.png" alt="" />
              </div>
              <h1 className="text-center font-bold text-xl text-[#8c3d42]">
                Projet Coordinaator
              </h1>
              <p className="text-base text-center  capitalize font-semibold mt-3 ">
                <span className="mr-2">April 2005</span> -
                <span className="ms-2">sept 2005</span>
              </p>
            </div>
            <h1 className=" font-bold text-lg mb-5">
              Effectiveness of Prevention Programs Against Trafficking of Women
              and Children and the Status of Rehabilitation Centers
            </h1>
            <p className="text-base text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              voluptates aut veritatis earum atque amet numquam esse velit
              libero! Corporis doloribus dolores exercitationem tempora culpa,
              unde iusto fuga veniam totam! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Qui voluptates aut veritatis earum
              atque amet numquam esse velit libero! Corporis doloribus dolores
              exercitationem tempora culpa, unde iusto fuga veniam totam! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptates
              aut veritatis earum atque amet numquam esse velit libero! Corporis
              doloribus dolores exercitationem tempora culpa, unde iusto fuga
              veniam totam! Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Qui voluptates aut veritatis earum atque amet numquam esse
              velit libero! Corporis doloribus dolores exercitationem tempora
              culpa, unde iusto fuga veniam totam!
            </p>
          </div>

          <div className="w-[90%] mx-auto">
            <div className="w-[100%]">
              <img className="w-full h-full" src="/involvement1.png" alt="" />
            </div>

            <div className=" grid grid-cols-3 mt-5 gap-5">
              <div className="w-full">
                <img src="/involvement1.png" alt="" />
              </div>
              <div className="w-full">
                <img src="/involvement1.png" alt="" />
              </div>
              <div className="w-full">
                <img src="/involvement1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-20">
          {/* <Heading heading="key Responsibility" /> */}
          <h1 className="font-bold  mb-5 text-2xl text-center text-[#8c3d42]">
            Key Responsibilities
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 mt-10">
            <div className="w-full">
              <ul className="list-disc space-y-2">
                <li className="text-base">
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
                <li>
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
                <li>
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
                <li>
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
                <li>
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="list-disc space-y-2">
                <li>
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
                <li>
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
                <li>
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
                <li>
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
                <li>
                  To take initiatives for successful project designing, planning
                  and implementation;
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto mt-20">
          <h1 className="font-bold  mb-5 text-2xl text-center text-[#8c3d42]">
            Achievements
          </h1>

          <div>
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
              {dummyData.map((item, index) => (
                <div className=" border-2 p-7 mt-10 mx-3">
                  <div className="flex flex-col items-center">
                    <div className="w-[20%]">
                      <img
                        className="w-full h-full object-contain"
                        src="/logo/logo1.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-2xl mt-3 font-semibold text-[#6e6144]">
                      Established School
                    </h1>
                  </div>

                  <p
                    className={`mt-7 text-justify ${
                      expandedItems[index] ? "block" : "line-clamp-6"
                    }`}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic aperiam eaque animi non velit sit modi, itaque illo quam
                    explicabo molestiae laborum consequuntur eos quibusdam
                    doloribus! Voluptate fugiat quibusdam quaerat! Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Hic aperiam
                    eaque animi non velit sit modi, itaque illo quam explicabo
                    molestiae laborum consequuntur eos quibusdam doloribus!
                    Voluptate fugiat quibusdam quaerat! Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Hic aperiam eaque animi
                    non velit sit modi, itaque illo quam explicabo molestiae
                    laborum consequuntur eos quibusdam doloribus! Voluptate
                    fugiat quibusdam quaerat!
                  </p>
                  {!expandedItems[index] ? (
                    <button
                      className="mt-3 capitalize text-[#f38908]"
                      onClick={() => toggleReadMore(index)}
                    >
                      Read more
                    </button>
                  ) : (
                    <button
                      className="mt-3 capitalize text-[#f38908]"
                      onClick={() => toggleReadMore(index)}
                    >
                      Close
                    </button>
                  )}
                </div>
              ))}
            </AliceCarousel>
          </div>
        </div>
      </div>
    </>
  );
};
export default InvolvementDetailPage;
