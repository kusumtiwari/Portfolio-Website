import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ArrowRight, ArrowLeft, CalendarMinus2, Eye } from 'lucide-react';
import { responsive } from '../../utility/responsive';
import { Link } from 'react-router-dom';
import DateViews from '../dateViews/DateViews';
interface Articles {
  date: string;
  views: number;
  title: string;
  description: string;
  id: number;
  image: string;
}

interface SliderCardProps {
  //   heading: string;
}

const SliderCard: React.FC<SliderCardProps> = () => {
  const myArticles: Articles[] = [
    {
      date: '20 July, 2023',
      views: 256,
      title: 'The geolinguistic status of languages of Nepal',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
      id: 1,
      image: 'images/common/Publication.png',
    },
    {
      date: '20 July, 2023',
      views: 256,
      title: 'The geolinguistic status of languages of Nepal',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
      id: 2,
      image: 'images/common/Publication.png',
    },
    {
      date: '20 July, 2023',
      views: 256,
      title: 'The geolinguistic status of languages of Nepal',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
      id: 3,
      image: 'images/common/Publication.png',
    },
    {
      date: '20 July, 2023',
      views: 256,
      title: 'The geolinguistic status of languages of Nepal',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
      id: 4,
      image: 'images/common/Publication.png',
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-12 xl:px-20">
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
          {myArticles.map((article) => (
            <div
              key={article.id}
              className="py-6 md:h-[45vh] lg:h-[40vh] xl:h-[40vh] mx-2 lg:mx-4 my-10 mb-12 box-shadow cursor-pointer md:hover:scale-105 transition duration-300 ease-in-out flex flex-col md:flex-row px-6"
            >
              <div className="w-full sm:w-[70%] md:w-[30%] lg:w-[28%] h-[45%] md:h-full">
                <Link to={`/articles/details/${article.id}`}>
                  <img
                    src={`/${article.image}`}
                    alt="book"
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>
              <div className="w-full md:w-[68%] font-mulish md:ml-6 h-1/2 mt-7 md:mt-0 md:h-full">
                <h1 className="text-primary-headingColor line-clamp-1 md:line-clamp-2 overflow-hidden whitespace-wrap mb-2 text-xl font-semibold font-inter ">
                  <Link to={`/articles/details/${article.id}`}>
                    {article.title}da ssd asdad adada adasda asdad asasd asdas
                    ddada
                  </Link>{' '}
                </h1>
                <DateViews className="my-3" />
                {/* <div className="md:flex mt-2 lg:mt-0">
                  <div className="flex items-center mr-1 lg:mr-3 xl:my-2">
                    <CalendarMinus2 className="w-5 h-5 text-[#828587]" />
                    <p className="ml-1">{article.date}</p>
                  </div>
                  <div className="flex items-center my-4 md:my-0">
                    <Eye className="w-5 h-5 text-[#828587]" />
                    <p className="ml-1">{article.views} views</p>
                  </div>
                </div> */}
                <div className="my-2 line-clamp-3  md:line-clamp-4 overflow-hidden whitespace-wrap">
                  <p>{article.description}</p>
                </div>
                <p className="text-primary-btnColor text-sm font-bold cursor-pointer duration-300 ease-in-out mt-4">
                  View Detail
                </p>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default SliderCard;
