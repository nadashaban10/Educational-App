import React from "react";
import { Element } from "react-scroll";
import logo from "../../public/images/IMG_2014-removebg.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume, FaHouseChimney } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Element name="footer">
      <footer className="bg-gray-50 bg-opacity-[90%] h-full " id="About">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start px-9 text-center sm:text-left ">
          <form className="w-full sm:w-1/3 p-3 bg-white rounded-lg mt-5 sm:mt-20 text-center sm:text-left order-3 sm:order-3">
            <h1 className="font-poppins font-bold text-2xl">Send Message</h1>
            <div className="flex flex-col space-y-3 mt-4">
              <input
                type="text"
                placeholder="Name"
                className="p-2 w-full border-b border-black"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-2 w-full border-b border-black"
              />
              <textarea
                placeholder="Message"
                className="p-2 w-full rounded-md border-b border-black"
              ></textarea>
              <button className="bg-blue-900 text-white p-2 w-full rounded-md">
                Submit
              </button>
            </div>
          </form>

          <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start order-2 sm:order-1">
            <img
              className="w-full max-w-[300px] ml-[-40px]"
              src={logo}
              alt="logo"
            />
            <p className="mb-1 text-gray-800">
          
  Arcade Academy is an innovative platform designed to enhance the learning experience for students by leveraging Augmented Reality (AR) technology. Our mission is to make subjects like history and science more engaging, interactive, and easier to understand. By bringing educational content to life, Arcade Academy helps students visualize complex concepts and immerse themselves in interactive learning environments. 

            </p>
           
            <div className="bg-gray-400 h-[1px] w-full my-2 "></div>
            
            <div className="flex items-center space-x-2 mt-2 ">

        <span className="bg-black p-2 rounded-full text-white">
          <MdEmail />
        </span>
        <span className="text-gray-800">Support@gmail.com</span>
      </div>

        <div className="flex  items-center space-x-2 mt-2">
        <span className="bg-blue-400 p-2 rounded-full text-white">
          <FaPhoneVolume />
        </span>
        <span className="text-gray-800">+201097655140</span>
      </div>

 
  
          </div>
        </div>
        <div>
        <h2 className="font-bold text-black text-lg mb-1 lg:text-left md:text-left text-center mt-2 mx-2 sm:pl-5">
            You Can Follow us on:
          </h2>
        <div className="w-full flex flex-row sm:flex-row justify-center items-center sm:justify-start sm:items-center text-slate-600 py sm:pl-5  ">
        
          <ul className="flex space-x-4 items-start justify-start">
            <li>
              <a
                className="w-[38px] h-[38px] text-white flex justify-center items-center bg-blue-800 rounded-full"
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                className="w-[38px] h-[38px] flex justify-center items-center bg-red-600 text-white rounded-full"
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                className="w-[38px] h-[38px] text-white flex justify-center items-center bg-blue-500 rounded-full"
                href="#"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                className="w-[38px] h-[38px] hover:bg-blue-600 hover:text-white flex justify-center items-center bg-green-600 text-white rounded-full"
                href="#"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
       
        <div className="w-full flex justify-center items-center mt-2">
          <span className="text-center text-gray-500">
            Copyright © 2024 All Rights Reserved
          </span>
        </div>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;