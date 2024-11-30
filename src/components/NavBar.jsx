import React, { useState } from "react";
import logo from "../../public/images/IMG_2014-removebg.png";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/Register");
  };
  const handleClickRegister = () => {
    navigate("/Register");
  };

  return (
    <>
      <div className="nav-container fixed top-0 left-0 flex justify-between items-center px-3 z-50  w-full bg-white text-gray-700  font- font-poppins ">
        <div className="flex items-center">
          <CiMenuBurger
            className={`text-xl text-center cursor-pointer md:hidden ${
              isNavVisible ? "X" : <CiMenuBurger />
            }`}
            onClick={toggleNav}
          />
        </div>{" "}
        {/*backdrop-filter backdrop-blur-lg*/}
        <img src={logo} className="w-[180px] h-[80px] " />
        <div
          className={`nav-links flex-grow flex justify-center space-x-4 text-gray-700  text-xl flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 font-poppins ${
            isNavVisible
              ? "fixed top-0 left-0 w-[65%] md:w-[1000px] bg-blue-500 bg-opacity-[90%] h-screen md:h-[300px] justify-center items-center text-white tracking-widest space-y-7 z-50 rounded-tr-xl   "
              : "hidden"
          } md:flex justify-start `}
        >
          <button
            className="nav-button bg-white text-black rounded-full  text-2xl w-[40px] h-[40px] absolute top-8 right-3 md:hidden"
            onClick={toggleNav}
          >
            {" "}
            x{" "}
          </button>
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="nav-item cursor-pointer relative"
          >
            Home
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </Link>

          <Link to="/courses" className="nav-item cursor-pointer relative">
            Courses
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </Link>

          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="nav-item cursor-pointer relative"
          >
            Services
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
          <ScrollLink
            to="Reviews"
            smooth={true}
            duration={500}
            className="nav-item cursor-pointer relative"
          >
            Contact us
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
          <ScrollLink
            to="About"
            smooth={true}
            duration={500}
            className="nav-item cursor-pointer relative"
          >
            About us
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
          <button
            className={`nav-item cursor-pointer relative border border-blue-500 rounded-xl bg-black px-3 text-white w-[150px] h-[60px] ${
              isNavVisible ? "block" : "hidden"
            } md:hidden`}
            onClick={handleClickLogin}
          >
            {" "}
            Join Now!{" "}
          </button>
        </div>
        <div
          className={`flex flex-row md:flex-row space-x-5 md:space-y-0 md:space-x-2 font-poppins ${
            isNavVisible ? "block" : "block"
          } md:flex mr-3 `}
        >
          <div className="relative flex flex-row  space-x-4 text-blu-500 text-lg  cursor-pointer">
            <button
              onClick={handleClickRegister}
              className="nav-item cursor-pointer relative rounded-xl bg-blue-500 text-white p-2 w-[120px]"
            >
              join now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
