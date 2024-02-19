import { ChevronsDown } from "lucide-react";
const MoreBtn: React.FC = () => {
  return (
    <button className="text-white font-mulish text-base bg-primary-btnColor transition duration-300 ease-in-out hover:text-black hover:border hover:border-primary-btnColor px-4 py-2 rounded-full hover:bg-white flex items-center mt-8">
      More
      <ChevronsDown className="w-5 h-5 ml-2" />
    </button>
  );
};
export default MoreBtn;
