import { Facebook, Mail, Twitter } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import Heading from './../components/common/Heading';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ArrowRight, ArrowLeft, CalendarMinus2, Eye } from 'lucide-react';

interface Articles {
  date: string;
  views: number;
  title: string;
  description: string;
  id: number;
  image: string;
}
const PublicationDetailPage = () => {
  const responsive = {
    0: { items: 1 },
    800: { items: 1 },
    1024: { items: 2 },
  };
  const myArticles: Articles[] = [
    {
      date: '20 July, 2023',
      views: 256,
      title: 'The geolinguistic status of languages of Nepal',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
      id: 1,
      image: '/images/common/Publication.png',
    },
    {
      date: '20 July, 2023',
      views: 256,
      title: 'The geolinguistic status of languages of Nepal',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
      id: 2,
      image: '/images/common/Publication.png',
    },
    {
      date: '20 July, 2023',
      views: 256,
      title: 'The geolinguistic status of languages of Nepal',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
      id: 3,
      image: '/images/common/Publication.png',
    },
    {
      date: '20 July, 2023',
      views: 256,
      title: 'The geolinguistic status of languages of Nepal',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
      id: 4,
      image: '/images/common/Publication.png',
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-[#4a070a] mb-16 lg:mb-40 flex  flex-col md:flex-row justify-center gap-10 md:gap-5">
        <div className="text-white  relative w-[90%] mx-auto px-5 mt-[3rem] md:left-5 lg:left-16 xl:left-40 lg:mt-[5rem] ">
          <h1 className="text-3xl font-bold  ">Title of the book</h1>
          <p className="text-lg font-semibold mt-7 capitalize">
            publication Date : <span className="ms-2">20 feb ,2024</span>
          </p>

          <div className="flex mt-5 space-x-1">
            <FaStar className="w-6 h-6 text-yellow-400" />
            <FaStar className="w-6 h-6 text-yellow-400" />
            <FaStar className="w-6 h-6 text-yellow-400" />
            <FaStar className="w-6 h-6 text-yellow-400" />
          </div>

          <div className="w-full  lg:w-[80%] xl:w-[23rem] mt-10 relative border border-yellow-400 p-5 px-10">
            <h3 className="font-semibold  capitalize absolute px-2 -top-4 bg-[#4a070a] z-10 ">
              from the author
            </h3>
            <p className="font-md text-justify ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              quae rem impedit cum! Velit neces asdsadasa asda das ada asd das
              da adad ad aa das d a as d d a as das sitatibus recusandae
              repellendus doloribus id impedit non nam ad fugiat, quos, sapiente
              laboriosam quaerat qui. Eos.dasadadasdada
            </p>
            <div className="flex absolute -bottom-3 px-3 space-x-3 right-10 bg-[#4a070a] z-10">
              <Facebook />
              <Twitter />
              <Mail />
            </div>
          </div>
          <div className="mt-10 md:w-[70%] lg:w-[17rem] md:mt-10 xl:mt-12 mx-auto  xl:absolute xl:top-[6rem] xl:right-0 shadow-lg">
            <img
              className="w-full h-full object-contain"
              src="/images/common/Publication.png"
              alt=""
            />
          </div>
        </div>
        <div className="bg-white py-10 lg:pb-0  lg:mt-[4rem] lg:pt-10 w-[100%] h-full border-b-2 border-yellow-600">
          <div className="mb-5">
            <Heading heading="summary" />
          </div>
          <div className="w-full px-10 md:w-[90%]  md:mx-auto xl:ps-40 md:pe-16 text-justify">
            <p className="w-full h-full overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              velit suscipit alias amet voluptatem ea voluptatibus nesciunt
              facilis eum delectus ab molestiae repellat aliquam totam
              aspernatur, culpa ipsa quis necessitatibus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quibusdam velit suscipit alias
              amet voluptatem ea voluptatibus nesciunt facilis eum delectus ab
              molestiae repellat aliquam totam aspernatur, culpa ipsa quis
              necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quibusdam velit suscipit alias amet voluptatem ea
              voluptatibus nesciunt facilis eum delectus ab molestiae repellat
              aliquam totam aspernatur, culpa ipsa quis necessitatibus. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit
              suscipit alias amet voluptatem ea voluptatibus nesciunt facilis
              eum delectus ab molestiae repellat aliquam totam aspernatur, culpa
              ipsa quis necessitatibus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quibusdam velit suscipit alias amet voluptatem
              ea voluptatibus nesciunt facilis eum delectus ab molestiae
              repellat aliquam totam aspernatur, culpa ipsa quis necessitatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              velit suscipit alias amet voluptatem ea voluptatibus nesciunt
              facilis eum delectus ab molestiae repellat aliquam totam
              aspernatur, culpa ipsa quis necessitatibus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quibusdam velit suscipit alias
              amet voluptatem ea voluptatibus nesciunt facilis eum delectus ab
              molestiae repellat aliquam totam aspernatur, culpa ipsa quis
              necessitatibus.
            </p>
            <button className="w-fit px-4 py-2 capitalize lg:float-right font-medium text-white font-mulish text-sm bg-primary-btnColor transition duration-300 ease flex items-center mt-8 hover:bg-yellow-700">
              free download
            </button>
          </div>
        </div>
      </div>

      <div className=" md:my-20 px-4 md:px-10 lg:px-12 xl:px-20">
        <div className="md:pb-10">
          <Heading heading="similar books" />
        </div>
        <div className="my-4">
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
            {myArticles.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full md:w-[90%] lg:w-[90%] py-6 mx-2 lg:mx-4 my-10 mb-12 box-shadow cursor-pointer hover:scale-105 transition duration-300 ease-in-out flex flex-col md:flex-row px-6 "
                >
                  <div className="w-full  md:w-[30%] lg:w-[28%] ">
                    <img
                      src={item.image}
                      alt="book"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full  font-mulish md:ml-6 h-1/2 mt-7 md:mt-0 md:h-full">
                    <h1 className="text-primary-headingColor text-xl font-semibold font-inter pb-1 lg:pb-3">
                      {item.title}
                    </h1>
                    <div className="">
                      <button className="w-fit px-4 py-1 capitalize  font-medium text-white font-mulish text-sm bg-primary-btnColor transition duration-300 ease  hover:bg-yellow-700">
                        free download
                      </button>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                      className="my-2"
                      style={{
                        textAlign: 'justify',
                        lineHeight: '28px',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                      }}
                    ></div>
                    <p className="text-primary-btnColor text-sm font-bold cursor-pointer duration-300 ease-in-out mt-4">
                      View Detail
                    </p>
                  </div>
                </div>
              );
            })}
          </AliceCarousel>
        </div>
      </div>
    </>
  );
};

export default PublicationDetailPage;
