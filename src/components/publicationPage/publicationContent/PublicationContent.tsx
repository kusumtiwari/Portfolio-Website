import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import CustomBtn from "../../customBtn/CustomBtn";

const PublicationContent: React.FC<PublicationContentProps> = ({
  publication,
  className = "",
}) => {
  return (
    <>
      <div
        className={`w-fullbg-white flex flex-col  items-center gap-5 lg:gap-10 ${className}`}
      >
        <div className="w-[80%] lg:w-[60rem] h-full">
          <img
            className="w-full h-full object-contain"
            src="/images/common/Publication.png"
            alt=""
          />
        </div>
        <div className="box-shadow mx-5 lg:w-auto h-auto p-10 border">
          <div>
            <h1 className="capitalize text-xl  font-semibold text-gray-700 mb-3">
              {publication?.title}
            </h1>
            <p className="capitalize lg:text-2xl font-semibold">
              Publication data :
              <span className="ms-2">{publication?.date}</span>
            </p>
            <div className="flex items-center gap-1 my-2">
              <FaStar className="w-5 h-5 text-yellow-500" />
              <FaStar className="w-5 h-5 text-yellow-500" />
              <FaStar className="w-5 h-5 text-yellow-500" />
              <FaStar className="w-5 h-5 text-yellow-500" />
              <FaStarHalfAlt className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
          <div>
            <p className="line-clamp-3 lg:line-clamp-4 overflow-hidden whitespace-wrap">
              {publication?.description}
            </p>
          </div>
          <CustomBtn>View Detail</CustomBtn>
        </div>
      </div>
    </>
  );
};
export default PublicationContent;
