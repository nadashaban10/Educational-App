import React from "react";
import { motion } from "framer-motion";
import img from "../../public/images/girl-learning-home-laptop-reading-study-elearning-desk-with-blurred-background-african-female-child-student-computer-with-tech-web-app-home-school-class-studying_590464-120659.avif";
import img2 from "../../public/images/teenager-doing-school-work-on-260nw-2308726333.webp";
import img3 from "../../public/images/teacher-working-online-on-laptop-260nw-2329976655.webp";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import teacherimage from "../../public/images/virtual-reality-in-Education-.jpg";

import carsolimagethree from "../../public/images/mobile.jpg";
import carsolimagefour from "../../public/images/tablet2.jpg";

import carsolimagtwo from "../../public/images/tablet.jpg";

import carsolimageone from "../../public/images/600x345_WebPage-Banner_13.png";

import AboutUs from "../components/AboutUs";
import Pricing from "../components/Pricing";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import Courses from "../components/Courses";

function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="parent-container">
      <div
  className="hero-container relative flex h-screen flex-col md:flex-row bg-gray-300 bg-cover  md:p-0"
  // style={{ backgroundImage: `url(${bgimage})` }}
>
  {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
  <motion.div
    className="hero-left md:relative absolute top-[170px] space-y-3 z-10 md:bg-transparent md:p-8 p-3 bg-gray-100 bg-opacity-[30%]"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h4 className="text-2xl md:text-5xl font-bold font-poppins text-black">
      <span className="text-blue-500">
        Transform Learning with
         Arcade Academy
      </span>
      <br />
      The Future of Education is Here
    </h4>
    <p className="text-sm md:text-lg font-poppins text-black">
      Immerse yourself in interactive, AR-driven lessons that bring
      science and history to life for high school students
    </p>
    <div className="w-full h-auto md:h-[180px] flex flex-col md:flex-row items-center font-semibold space-y-3 md:space-y-0">
      <button className="rounded-full text-lg md:text-2xl h-[70px] md:h-[100px] w-full md:w-[500px] bg-[#366cff] text-center text-white mr-0 md:mr-3 px-3">
        Sign Up to Be Alerted When the App is Available!
      </button>
      <button className="rounded-full text-lg md:text-2xl h-[50px] md:h-[70px] bg-black w-full md:w-[200px] text-white px-3">
        View Demo
      </button>
    </div>
  </motion.div>
</div>
      </div>
      <motion.div
  className="sec-container flex flex-col md:flex-row mt-[50px] md:mt-[150px] justify-between items-center mx-5"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <div className="flex font-poppins justify-start md:items-start items-center flex-col w-full md:w-[90%] mb-5 md:mb-0">
    <h2 className="font-bold text-2xl md:text-3xl">
      Why <span className="text-[#366cff]">Arcade Academy</span> ?
    </h2>
    <p className="text-gray-700 md:text-lg font-poppins p-2">
      Traditional education often struggles to engage students,
      particularly visual learners, in complex subjects like physics,
      chemistry, and history. Arcade Academy addresses this challenge by
      using Augmented Reality (AR) to create immersive learning
      experiences that make abstract concepts tangible and exciting”
    </p>
  </div>

  <div className="right-section flex w-full md:w-[70%] justify-center items-center order-1 md:order-2">
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={6000}
      className="h-full"
    >
      <div className="image-container">
        <img
          className="carousel-image"
          src={carsolimageone}
          alt="Hot Air Balloon"
        />
      </div>
      <div className="image-container">
        <img
          className="carousel-image"
          src={carsolimagtwo}
          alt="Second Image"
        />
      </div>
      <div className="image-container">
        <img
          className="carousel-image"
          src={carsolimagethree}
          alt="Third Image"
        />
      </div>
      <div className="image-container">
        <img
          className="carousel-image"
          src={carsolimagefour}
          alt="Third Image"
        />
      </div>
    </Carousel>
  </div>
</motion.div>

      {/* <motion.div
  className="Card-container flex flex-col justify-center items-center space-y-5 mt-[50px] mb-[50px] md:mb-[50px]"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="text-4xl pb-5 tracking-widest">EXPLORE OUR TOP SUBJECTS</h2>
  <div className="flex text-center justify-center flex-row items-center space-x-5">
    <div className="card-1 relative w-[90%] md:w-[400px] h-[230px]">
      <img src={img2} className="w-full h-full rounded-lg" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-30 p-1 rounded">
        <h4 className="text-xl md:text-2xl">For Students</h4>
        <button className="mt-2 text-black bg-white hover:bg-blue-600 p-1 rounded-full w-[110px] md:w-[130px] h-[35px] md:h-[40px]">
          Start Class
        </button>
      </div>
    </div>
    <div className="card-2 relative w-[90%] md:w-[400px] h-[230px]">
      <img src={img3} className="w-full h-full rounded-lg" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-30 p-1 rounded">
        <h4 className="text-xl md:text-2xl">For Teachers</h4>
        <button className="mt-2 text-white bg-blue-600 hover:bg-black p-1 rounded-full w-[110px] md:w-[130px] h-[35px] md:h-[40px]">
          Start Class
        </button>
      </div>
    </div>
  </div>

</motion.div> */}

      <motion.div
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/*courses*/}
        {/* <Courses /> */}
      </motion.div>
      <AboutUs id="AboutUs" />
      <motion.div
  className="w-full h-auto md:h-[400px] font-poppins flex flex-col md:flex-row justify-around items-center bg-[#fcfcfcec] mt-[50px] py-5"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="w-full md:w-[620px] flex flex-col items-center md:items-start">
    <h1 className="text-2xl md:text-[30px] mb-4 text-center md:text-left">
      <span className="text-[#366cff]"> FOR TEACHERS </span>
       we provide everything you can do in a physical classroom{" "}
    </h1>
    <p className="text-gray-600 w-full md:w-[400px] text-center md:text-left">
      The platform offers tools to track progress, assign AR-based tasks,
      and provide real-time feedback, making it easier to ensure that
      every student is keeping up with the material.
    </p>
  </div>
  <div className="flex flex-col items-center mt-5 md:mt-0 w-full md:w-[45%]">
    <div className="relative">
      <img src={teacherimage} className="w-full" />
    </div>
  </div>
</motion.div>
      <Pricing id="Pricing" />
      {/* Contact Us section */}
      <div
        id="contactUs"
        className="relative flex flex-col justify-center items-center w-full h-full p-10"
      >
        <div className="absolute inset-0">
          <img src={img} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-4xl font-bold text-white mb-5">Contact Us</h1>
          <p className="w-[90%] md:w-[60%] text-white mb-5 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            deleniti totam consectetur corporis dolorem animi dolores commodi
            unde qui.
          </p>
          <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start w-full mt-5 space-y-5 sm:space-y-0 sm:space-x-10">
            <div className="space-y-5 w-full sm:w-auto">
              <div className="flex flex-row items-center space-x-3">
                <div className="bg-white p-2 rounded-full">
                  <FaPhoneVolume className="text-xl text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-blue-600">Phone</h1>
                  <p className="text-white">+1234567890</p>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <div className="bg-white p-2 rounded-full">
                  <FaHouseChimney className="text-xl text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-blue-600">Address</h1>
                  <p className="text-white">1234 Main Street, City, Country</p>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <div className="bg-white p-2 rounded-full">
                  <MdEmail className="text-xl text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-blue-600">Email</h1>
                  <p className="text-white">support@gmail.com</p>
                </div>
              </div>
            </div>
            <form className="flex flex-col space-y-3 w-full sm:w-[35%] bg-white p-5 rounded-lg">
              <h1 className="font-poppins font-bold text-2xl pl-2">
                Send Message
              </h1>
              <div className="flex flex-col items-center space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 w-[90%] border-b border-black"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 w-[90%] border-b border-black"
                />
                <textarea
                  placeholder="Message"
                  className="p-2 w-[90%] rounded-md border-b border-black"
                ></textarea>
                <button className="bg-blue-600 text-white p-2 w-[90%] rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
