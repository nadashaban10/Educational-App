import React, { useState } from 'react';
import logo from "../../public/images/IMG_2014-removebg.png";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/Login');
  };
  const handleClickRegister = () => {
    navigate('/Register');
  };

  return (
    <>
      <div className="nav-container fixed top-0 left-0 flex justify-center items-center px-3 z-50  w-full bg-white text-gray-700  font- font-poppins ">
        <div className="flex items-center">
          <CiMenuBurger className={`text-xl text-center cursor-pointer md:hidden ${isNavVisible ? "X" : <CiMenuBurger />}`} onClick={toggleNav} />
          <img src={logo} className="w-[180px] h-[80px] ml-2" />
        </div> {/*backdrop-filter backdrop-blur-lg*/ }
        <div className={`nav-links flex-grow flex justify-center space-x-4 text-gray-700  text-xl flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 font-poppins ${isNavVisible ? 'fixed top-0 left-0 w-[200px] md:w-[1000px] bg-[#366cff] h-screen md:h-[300px] justify-start items-start text-white  space-y-6 z-50  ' : 'hidden'} md:flex justify-start `}>
          <button className="nav-button bg-white text-gray-600 rounded-full font-bold w-[50px] h-[45px] absolute top-5 right-5 md:hidden" onClick={toggleNav}> X </button>
          <a href="/" smooth={true} duration={500} className="nav-item cursor-pointer relative">
            Home
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </a>
          <a href="/profile" className="nav-item cursor-pointer relative">
            Profile
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </a>
          <a href="/courses" className="nav-item cursor-pointer relative">
            Courses
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </a>
          <ScrollLink to="Pricing" smooth={true} duration={500} className="nav-item cursor-pointer relative">
            Pricing
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500} className="nav-item cursor-pointer relative">
           Services
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
          <ScrollLink to="contactUs" smooth={true} duration={500} className="nav-item cursor-pointer relative">
            Contact us
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
          <ScrollLink to="About" smooth={true} duration={500} className="nav-item cursor-pointer relative">
            About us
            <div className="underline absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300"></div>
          </ScrollLink>
          <button className={`nav-item cursor-pointer relative border border-blue-500 rounded-xl bg-blue-500 px-3 text-white w-[90px] h-[40px] ${isNavVisible ? 'block' : 'hidden'} md:hidden`} onClick={handleClickLogin}> Login </button>
        </div>
        <div className={`flex flex-row md:flex-row space-x-5 md:space-y-0 md:space-x-2 font-poppins ${isNavVisible ? 'block' : 'block'} md:flex mr-3 `}>
          <div className='relative flex flex-row  space-x-4 text-blu-500 text-3xl font-bold cursor-pointer'>
            <div className="relative">
              <FiShoppingCart />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</div>
            </div>
            <div className="relative">
              <FaRegHeart />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">5</div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
}

export default NavBar;