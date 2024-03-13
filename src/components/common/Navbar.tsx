import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    window.scroll({
      top: 0,
    });
  };

  return (
    <div className="py-5 flex flex-wrap md:flex-nowrap justify-between md:justify-around px-8 md:px-20 lg:px-28 xl:px-36 sticky top-0 z-30 items-center bg-white shadow-lg min-h-[12vh] font-mulish">
      <Link to="/">
        <img src="/images/common/logo.png" alt="logo" className="w-12 h-6" />
      </Link>
      <div className="cursor-pointer md:hidden" onClick={handleMenuClick}>
        {isOpen ? (
          <X className="h-8 w-8 transition duration-500 ease-in-out opacity-100 hover:opacity-60" />
        ) : (
          <Menu className="h-8 w-8 transition duration-500 ease-in-out opacity-100 hover:opacity-60" />
        )}
      </div>
      <ul className="hidden md:flex flex-1 items-center ml-16 lg:ml-26 xl:ml-36">
        <li
          className="cursor-pointer font-semibold text-base hover:text-primary-titleColor rounded py-4 lg:py-2 px-2 mr-4 lg:mr-10 xl:mr-16 hover:text-primary-headingColor transition duration-300 ease-in-out"
          onClick={handleMenuClick}
        >
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          className="cursor-pointer font-semibold text-base hover:text-primary-titleColor  rounded py-4 lg:py-2 px-2 md:mr-4 lg:mr-10 xl:mr-16 hover:text-primary-headingColor transition duration-300 ease-in-out"
          onClick={handleMenuClick}
        >
          <NavLink to="/about">About</NavLink>
        </li>
        <li
          className=" cursor-pointer font-semibold text-base hover:text-primary-titleColor  rounded py-4 lg:py-2 px-2 md:mr-4 lg:mr-10 xl:mr-16 hover:text-primary-headingColor transition duration-300 ease-in-out"
          onClick={handleMenuClick}
        >
          <NavLink to="/initiatives">Initiatives</NavLink>
        </li>
        <li
          className="cursor-pointer font-semibold text-base hover:text-primary-titleColor rounded py-4 lg:py-2 px-2 md:mr-4 lg:mr-10 xl:mr-16 hover:text-primary-headingColor transition duration-300 ease-in-out"
          onClick={handleMenuClick}
        >
          <NavLink to="/involvement">Involvement</NavLink>
        </li>
        <li
          className="cursor-pointer font-semibold text-base hover:text-primary-titleColor rounded py-4 lg:py-2 px-2 md:mr-4 lg:mr-10 xl:mr-16 hover:text-primary-headingColor transition duration-300 ease-in-out"
          onClick={handleMenuClick}
        >
          Publications
        </li>

        <li
          className="cursor-pointer font-semibold text-base hover:text-primary-titleColor rounded py-4 lg:py-2 px-2 hover:text-primary-headingColor transition duration-300 ease-in-out"
          onClick={handleMenuClick}
        >
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {isOpen && (
        <ul className="flex md:hidden items-center flex-col w-[100%] transition-all duration-500 ease-in-out mt-8">
          <li
            className="cursor-pointer font-semibold text-base hover:text-primary-titleColor rounded py-4 lg:py-2 px-2 md:mr-12 lg:mr-8 hover:text-primary-headingColor transition duration-300 ease-in-out"
            onClick={handleMenuClick}
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className="cursor-pointer font-semibold text-base hover:text-primary-titleColor  rounded py-4 lg:py-2 px-2 md:mr-12 lg:mr-8 hover:text-primary-headingColor transition duration-300 ease-in-out"
            onClick={handleMenuClick}
          >
            <NavLink to="/about">About</NavLink>
          </li>
          <li
            className="cursor-pointer font-semibold text-base hover:text-primary-titleColor  rounded py-4 lg:py-2 px-2 md:mr-12 lg:mr-8 hover:text-primary-headingColor transition duration-300 ease-in-out"
            onClick={handleMenuClick}
          >
            <NavLink to="/initiative">Initiative</NavLink>
          </li>
          <li
            className="cursor-pointer font-semibold text-base hover:text-primary-titleColor  rounded py-4 lg:py-2 px-2 md:mr-12 lg:mr-8 hover:text-primary-headingColor transition duration-300 ease-in-out"
            onClick={handleMenuClick}
          >
            <NavLink to="/involvement">Involvement</NavLink>
          </li>
          <li
            className="cursor-pointer font-semibold text-base hover:text-primary-titleColor  rounded py-4 lg:py-2 px-2 md:mr-12 lg:mr-8 hover:text-primary-headingColor transition duration-300 ease-in-out"
            onClick={handleMenuClick}
          >
            <NavLink to="/publication">Publication</NavLink>
          </li>
          <li
            className="cursor-pointer font-semibold text-base hover:text-primary-titleColor  rounded py-4 lg:py-2 px-2 md:mr-12 lg:mr-8 hover:text-primary-headingColor transition duration-300 ease-in-out"
            onClick={handleMenuClick}
          >
            <NavLink to="/articles">Articles</NavLink>
          </li>
          <li
            className="cursor-pointer font-semibold text-base hover:text-primary-titleColor  rounded py-4 lg:py-2 px-2 md:mr-12 lg:mr-8 hover:text-primary-headingColor transition duration-300 ease-in-out"
            onClick={handleMenuClick}
          >
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Navbar;
