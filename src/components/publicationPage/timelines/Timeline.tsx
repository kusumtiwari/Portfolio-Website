const Timeline = () => {
  return (
    <ol className="relative flex-row border-t-[4px]  lg:border-t-0 lg:border-s-[4px] flex gap-5  lg:flex-col justify-around my-5 border-[#828587">
      <li className="mb-10 ms-4">
        <div className="absolute w-5 h-5  rounded-full bg-[#f38500] -top-3 lg:top-0 lg:-start-[12px] border-[3px] border-white"></div>
        <h3 className="mb-1 text-xl w-fit  font-semibold mt-4 lg:mt-0">
          February 2022
        </h3>
      </li>
      <li className="mb-10 ms-4 ">
        <div className="absolute w-5 h-5  rounded-full bg-[#f38500] -top-3 lg:top-auto lg:-start-[12px] border-[3px] border-white"></div>
        <h3 className="mb-1 text-xl w-fit  font-semibold mt-4 lg:mt-0">
          February 2022
        </h3>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-5 h-5  rounded-full bg-[#f38500] -top-3 lg:top-auto lg:-start-[12px] border-[3px] border-white"></div>
        <h3 className="mb-1 text-xl w-fit  font-semibold mt-4  lg:mt-0">
          February 2022
        </h3>
      </li>
    </ol>
  );
};

export default Timeline;
