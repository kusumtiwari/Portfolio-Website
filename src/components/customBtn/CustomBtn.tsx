import { ChevronRight } from 'lucide-react';

const CustomBtn = ({ children, className = '', ...props }) => {
  return (
    <>
      <button
        className={`w-fit px-4 py-2  font-medium text-white font-mulish text-lg bg-primary-btnColor transition duration-300 ease   rounded-full  flex items-center mt-8 hover:bg-yellow-700 ${className}`}
        {...props}
      >
        {children}
        <span>
          <ChevronRight />
        </span>
      </button>
    </>
  );
};

export default CustomBtn;
