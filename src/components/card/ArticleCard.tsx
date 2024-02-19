import React from 'react';
import { Link } from 'react-router-dom';
import DateViews from '../dateViews/DateViews';
import parser from 'html-react-parser';
interface Article {
  _id?: string;
  image?: string;
  title?: string;
  date?: string;
}

const ArticleCard: React.FC<Article> = ({ article }) => {
  return (
    <div className="h-auto lg:flex w-full box-shadow transition duration-300 ease-in-out rounded-md">
      <div className="w-full md:w-[30%] h-auto p-5">
        <Link to={`/articles/details/${article._id}`}>
          <img
            src={`${import.meta.env.VITE_APP_BASE_URL}/uploads/${
              article.image
            }`}
            alt={article.image}
            className="h-full w-full object-cover rounded-t-md"
          />
        </Link>
      </div>
      <div className="p-7 font-mulish w-[70%]">
        <h1 className="font-inter capitalize mb-4 line-clamp-2 text-primary-headingColor text-sm lg:text-xl font-semibold pt-3">
          <Link to={`/articles/details/${article._id}`}>{article.title}</Link>
        </h1>
        <div className="w-full mt-4 flex items-center justify-between">
          <DateViews data={article} />
        </div>
        <div className="text-justify mt-5 mb-4">
          <p className="line-clamp-3 text-sm lg:text-base">
            {parser(article.description)}
          </p>
        </div>
        <Link
          to={`/articles/details/${article._id}`}
          className="font-bold text-orange-600 transition duration-300 hover:text-yellow-500 text-xs lg:text-sm"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
