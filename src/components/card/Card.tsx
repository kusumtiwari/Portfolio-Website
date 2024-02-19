import React from "react";
import { Link } from "react-router-dom";
import DateViews from "../dateViews/DateViews";
import parse from "html-react-parser";

interface ArticleProps {
  article?: {
    _id: string;
    image: string;
    title: string;
    description: string;
    date: Date;
    views: number;
  };
}

const Card: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="h-auto box-shadow transition duration-300 ease-in-out rounded-md">
      <div className="w-full h-auto">
        <Link to={`/articles/details/${article?._id}`}>
          <img
            src={`${article?.image}`}
            alt={article?.image}
            className="h-full w-full object-cover rounded-t-md"
          />
        </Link>
      </div>
      <div className="p-7 font-mulish">
        <h1 className="font-inter capitalize mb-4 line-clamp-2 text-primary-headingColor text-sm lg:text-xl font-semibold pt-3">
          <Link to={`/articles/details/${article?._id}`}>{article?.title}</Link>
        </h1>
        <div className="text-justify mt-2 mb-4">
          <p className="line-clamp-3 text-sm">
            {parse(`${article?.description}`)}
          </p>
        </div>
        <div className="w-full mt-4 flex items-center justify-between">
          <DateViews data={article} />
          <Link
            to={`/articles/details/${article?._id}`}
            className="font-bold text-orange-600 transition duration-300 hover:text-yellow-500 text-xs lg:text-sm"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
