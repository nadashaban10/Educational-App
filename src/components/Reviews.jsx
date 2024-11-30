import React from "react";
import virtualreality from "../../public/images/virtual-reality-in-Education-.jpg";
import userImage from "../../public/images/istockphoto-1300845620-612x612.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdOutlineAddAPhoto, MdModeOfTravel } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { TbPlayVolleyball } from "react-icons/tb";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Disable arrows
  };

  return (
    <>
      <div
        className="Reviews-container relative w-full h-[100vh] flex flex-col lg:flex-row"
        id="Reviews"
      >
        <div
          className="relative w-full h-full bg-cover bg-center parallax flex flex-col lg:flex-row justify-around items-center"
          style={{ backgroundImage: `url(${virtualreality})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="left-sec relative flex flex-col justify-center items-start text-white w-full lg:w-[40%] p-5 lg:ml-[50px] h-full">
            {/* Responsive font sizes */}
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              We Provide Top Destinations Especially For You Book Now and Enjoy!
            </h2>
            <div className="flex flex-row items-center justify-center space-x-5">
              <FiPhoneCall size={35} />
              <div className="flex flex-col">
                <p className="mr-2 text-sm lg:text-md">Call Now</p>
                <p className="text-lg lg:text-xl">+02 123456789</p>
              </div>
            </div>
          </div>

          <div className="right-sec relative flex flex-col h-auto lg:h-[400px] pb-[30px] text-black w-[90%] lg:w-[30%] pt-2 bg-white shadow-lg mb-8 lg:mt-0">
            <div className="w-full flex flex-col justify-start items-start mt-8 ml-5">
              <p className="text-sm text-gray-500 tracking-wide">
                Testimonials
              </p>
              <h2 className="text-xl lg:text-2xl font-bold text-blue-600 tracking-wider">
                What students say about us:
              </h2>
              <div className="bg-gray-400 w-[85%] h-[1px] mt-2"></div>
            </div>
            <Slider {...settings}>
              <div className="py-8 px-2">
                <p className="text-gray-500 text-sm lg:text-md">
                  "The AR learning experience truly transformed my way of
                  understanding complex topics! I can now interact with 3D
                  models and simulations that make studying so much more
                  engaging and fun."
                </p>
                <div className="flex items-center justify-start mt-4">
                  <img
                    src={userImage}
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full mr-4"
                  />
                  <div>
                    <div className="flex">
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                    </div>
                    <h2 className="text-md lg:text-lg font-bold tracking-wide">
                      Nada Shaban
                    </h2>
                    <p className="tracking-wide text-sm">
                      Student, AR Learning Enthusiast
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm lg:text-md">
                  "I was initially skeptical about using AR for studying, but
                  this platform changed my perspective. The immersive
                  environment allowed me to retain information better and
                  understand concepts in a new light."
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={userImage}
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full mr-4"
                  />
                  <div>
                    <div className="flex">
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                    </div>
                    <h2 className="text-md lg:text-lg font-bold tracking-wide">
                      Jane Smith
                    </h2>
                    <p className="tracking-wide text-sm">
                      Student, Tech Enthusiast
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm lg:text-md">
                  "The use of augmented reality in my studies made a huge
                  difference. I was able to visualize scientific processes in
                  real-time, which helped me understand and remember them much
                  more effectively."
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={userImage}
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full mr-4"
                  />
                  <div>
                    <div className="flex">
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                    </div>
                    <h2 className="text-md lg:text-lg font-bold tracking-wide">
                      Alice Johnson
                    </h2>
                    <p className="tracking-wide text-sm">
                      Student, AR Advocate
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
